import './styles.scss';

import { Send } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';

import ChatAside from 'components/Chat/ChatAside';
import ChatMessage from 'components/Chat/ChatMessage';
import { services } from 'services';
import { Message, Topic, TopicsTree } from 'types';

export default function Chat() {
  const [topicsTree, setTopicsTree] = useState<TopicsTree[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    services.getTopicsTree().then((response) => {
      setTopicsTree(response.data);

      const topics: Topic[] = response.data
        .filter((topic) => topic.name.length !== 0)
        .map((topic) => {
          return {
            id: topic.id,
            name: topic.name,
          };
        });

      setMessages([
        ...messages,
        {
          text: 'Olá, eu sou a Icia. Como posso te ajudar? Escolha o tipo da informação você procura.',
          side: 'left',
          topics,
        },
      ]);
    });
  }, []);

  const generateNextMessegesOnTopicSelection = (selectedTopicId: number) => {
    const newMessages: Message[] = [];

    const topicsSubTree = findTopicsSubTree(selectedTopicId, topicsTree);

    newMessages.push({
      text: topicsSubTree.name,
      side: 'right',
    });

    const topics: Topic[] = topicsSubTree.children
      .filter((topic) => topic.name.length !== 0)
      .map((topic) => {
        return {
          id: topic.id,
          name: topic.name,
        };
      });

    newMessages.push({
      text: 'Agora escolha um subtipo :)',
      side: 'left',
      topics,
    });

    setMessages([...messages, ...newMessages]);
  };

  const findTopicsSubTree = (topicId: number, topicsTree: TopicsTree[]): TopicsTree => {
    const topicsSubTree = topicsTree.find((topic) => topic.id === topicId);

    return topicsSubTree!;

    //topicsTree.forEach(obj => findTopicsSubTree(topicId, obj.children));
  };

  return (
    <div className="min-vh-100 vh-100 w-100">
      <Header />
      <div className="chat-container d-flex">
        <ChatAside />
        <main className="d-flex flex-column flex-fill">
          <div className="chat-toolbar d-flex align-items-center border-bottom border-info px-3">
            <h2 className="mb-0 text-dark">Cursos {'>'} Graduação</h2>
          </div>

          <div className="chat-content d-flex flex-column flex-fill w-100 mw-100 p-3">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                text={message.text}
                side={message.side}
                topics={message.topics}
                generateNextMessegesOnTopicSelection={
                  generateNextMessegesOnTopicSelection
                }
              />
            ))}
          </div>

          <div className="chat-toolbar d-flex align-items-center border-top border-info px-3">
            <div className="chat-input-container rounded-pill border border-info position-relative overflow-hidden w-100">
              <input
                className="py-2 pl-4 pr-5 w-100 border-0"
                placeholder="Digite algo"
                type="text"
              />
              <div className="position-absolute">
                <IconButton aria-label="cached">
                  <Send />
                </IconButton>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
