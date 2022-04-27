import './styles.scss';

import { Button } from '@mui/material';
import ChatAside from 'components/Chat/ChatAside';
import ChatHeader from 'components/Chat/ChatHeader';
import ChatInput from 'components/Chat/ChatInput';
import ChatMessage from 'components/Chat/ChatMessage';
import ChatTypingLoader from 'components/Chat/ChatTypingLoader';
import Header from 'components/Header';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from 'services';
import { Message, Question, Topic, TopicsTree } from 'types';

export default function Chat() {
  const chatScrollableContainer = useRef<HTMLDivElement>(null);
  const [chatRefreshCount, setChatRefreshCount] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const genericMessages = [
    'Agora escolha uma opção :)',
    'Escolha mais uma opção abaixo.',
    'Quase lá, selecione uma opção.',
    'Veja algumas opções que encontrei :)',
  ];

  useEffect(() => {
    services.getInitialTopicsTree().then((response) => {
      const topics: Topic[] = getMessageTopics(response.data);

      setLoading(false);
      setMessages([
        ...messages,
        {
          text:
            chatRefreshCount === 0
              ? 'Olá, eu sou a Icia. Como posso te ajudar hoje?'
              : 'Ok... vamos tentar de novo. Como posso te ajudar hoje?',
          side: 'left',
          topics,
        },
      ]);
    });

    if (chatRefreshCount === 0) {
      startChatScrollableContainer();
    }
  }, [chatRefreshCount]);

  const startChatScrollableContainer = (): void => {
    if (chatScrollableContainer) {
      chatScrollableContainer.current!.addEventListener('DOMNodeInserted', (event) => {
        const target = event.currentTarget as HTMLDivElement;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  };

  const handleSidebarOptionClick = (option: 'home' | 'dark' | 'font'): void => {
    if (option === 'home') {
      setChatRefreshCount(1 + chatRefreshCount);
    } else {
      alert('Não implementado!');
    }
  };

  const generateMessegesForTopicSelection = async (topic: Topic) => {
    const newMessages: Message[] = [
      ...messages,
      {
        text: topic.name,
        side: 'right',
      },
    ];

    setMessages(newMessages);

    setLoading(true);

    const response = await services.getTopicsTreeById(topic.id);
    const topicsSubTree = response.data.find(Boolean)!;
    const topics = getMessageTopics(topicsSubTree.children);
    const questions = topicsSubTree.questions;

    newMessages.push({
      text: genericMessages[Math.floor(Math.random() * genericMessages.length)],
      side: 'left',
      topics,
      questions,
    });

    setLoading(false);
    setMessages(newMessages);
  };

  const generateMessegesForQuestionSelection = async (question: Question) => {
    const newMessages: Message[] = [
      ...messages,
      {
        text: question.description,
        side: 'right',
      },
      {
        text: question.answer,
        side: 'left',
      },
    ];

    setMessages(newMessages);
  };

  const generateMessegesOnFormSubmit = async (text: string) => {
    const newMessages: Message[] = [];

    newMessages.push({ text, side: 'right' });
    newMessages.push({
      text: 'Ohh, não... Não encontrei uma resposta para a sua pergunta. \
        Tente pesquisar com outro termo ou utilizar as opções do menu :(',
      side: 'left',
    });

    setMessages([...messages, ...newMessages]);
  };

  const getMessageTopics = (topicsTree: TopicsTree[]): Topic[] => {
    const topics: Topic[] = topicsTree
      .filter((topic) => !!topic.name.length)
      .map((topic) => {
        return {
          id: topic.id,
          name: topic.name,
        };
      });

    return topics;
  };

  return (
    <div className="chatbot d-block w-100">
      <div className="d-block min-vh-100 vh-100 w-100 mx-auto">
        <Header>
          <Button
            id="login-button"
            type="button"
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => {
              navigate('/login', { replace: true });
            }}
          >
            Admin
          </Button>
        </Header>
        <div className="chat-container d-flex">
          <ChatAside handleSidebarOptionClick={handleSidebarOptionClick} />
          <main className="d-flex flex-column flex-fill">
            <div className="chat-toolbar d-flex align-items-center border-bottom border-info px-3">
              <ChatHeader />
            </div>

            <div
              ref={chatScrollableContainer}
              className="chat-content d-flex flex-column flex-fill w-100 mw-100 p-3"
            >
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  text={message.text}
                  side={message.side}
                  topics={message.topics}
                  questions={message.questions}
                  generateMessegesForTopicSelection={generateMessegesForTopicSelection}
                  generateMessegesForQuestionSelection={
                    generateMessegesForQuestionSelection
                  }
                />
              ))}

              {loading ? (
                <ChatMessage side={'left'}>
                  <ChatTypingLoader />
                </ChatMessage>
              ) : null}
            </div>

            <div className="chat-toolbar d-flex align-items-center border-top border-info px-3">
              <ChatInput generateMessegesOnFormSubmit={generateMessegesOnFormSubmit} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
