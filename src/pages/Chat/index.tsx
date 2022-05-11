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
  const [chatMode, setChatMode] = useState<boolean>(false);
  let navigate = useNavigate();

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

      if (chatRefreshCount > 0) setMessages([]);

      setMessages([
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

  const handleSidebarOptionClick = (option: 'home' | 'mode' | 'font'): void => {
    switch (option) {
      case 'home':
        setChatRefreshCount(1 + chatRefreshCount);
        break;
      case 'mode':
        setChatMode(!chatMode);
        break;
      default:
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
    const newMessages: Message[] = [...messages, { text, side: 'right' }];

    setMessages(newMessages);

    setLoading(true);

    try {
      const response = await services.getTopicsTreeByNlp(text);

      if (!response.data) {
        throw new Error('no content');
      }

      const questions = isQuestion(response.data[0]) ? response.data : [];
      const topics = isTopic(response.data[0]) ? response.data : [];

      newMessages.push({
        text: genericMessages[Math.floor(Math.random() * genericMessages.length)],
        side: 'left',
        topics: topics as Topic[],
        questions: questions as Question[],
      });
    } catch (err) {
      newMessages.push({
        text: 'Ohh, não... Não encontrei uma resposta para a sua pergunta. \
          Tente pesquisar com outro termo ou utilizar as opções do menu :(',
        side: 'left',
      });
    }

    setLoading(false);
    setMessages(newMessages);
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

  const isTopic = (item: Topic | Question): item is Topic => {
    return (item as Topic).name !== undefined;
  };

  const isQuestion = (item: Question | Topic): item is Question => {
    return (item as Question).description !== undefined;
  };

  return (
    <div className={'chatbot d-block w-100' + (chatMode ? ' dark' : '')}>
      <div className="d-block min-vh-100 vh-100 w-100 mx-auto">
        <Header>
          <Button
            id="login-button"
            type="button"
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
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
