import './styles.scss';

import React from 'react';
import { Icon } from '@mui/material';

import AssistentImage from '../../../assets/assistente.png';
import ChatMessageTopics from '../ChatMessageTopics';
import { Topic } from 'types';

type ChatMessageProps = {
  questions?: any;
  side: 'left' | 'right';
  text: string;
  topics?: Topic[];
  generateNextMessegesOnTopicSelection: (selectedTopicId: number) => void;
};

export default function ChatMessage({
  side,
  text,
  topics,
  generateNextMessegesOnTopicSelection,
}: ChatMessageProps) {
  const handleTopicSelection = (topicId: number) => {
    generateNextMessegesOnTopicSelection(topicId);
  };

  return (
    <div className={`chat-message d-flex ${side} w-100`}>
      <div className="chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center">
        {side === 'left' ? (
          <img src={AssistentImage} className="w-75 h-auto" alt="assistente chatbot" />
        ) : (
          <Icon>person</Icon>
        )}
      </div>
      <div className="chat-ballon py-3 px-4">
        <h3 className="mb-0">{text}</h3>
        <ChatMessageTopics topics={topics} handleTopicSelection={handleTopicSelection} />
      </div>
    </div>
  );
}
