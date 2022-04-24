import './styles.scss';

import { Icon } from '@mui/material';
import React from 'react';
import { Question, Topic } from 'types';

import IciaImage from '../../../assets/icon-icia.svg';
import ChatMessageItems from '../ChatMessageItems';

type ChatMessageProps = {
  children?: React.ReactNode;
  questions?: Question[];
  side: 'left' | 'right';
  text?: string;
  topics?: Topic[];
  generateMessegesForTopicSelection?: (topic: Topic) => void;
  generateMessegesForQuestionSelection?: (question: Question) => void;
};

export default function ChatMessage({
  children,
  questions,
  side,
  text,
  topics,
  generateMessegesForTopicSelection,
  generateMessegesForQuestionSelection,
}: ChatMessageProps) {
  const handleItemSelection = (item: Question | Topic) => {
    if (typeof generateMessegesForTopicSelection === 'function' && isTopic(item)) {
      generateMessegesForTopicSelection(item);
    }
    if (typeof generateMessegesForQuestionSelection === 'function' && isQuestion(item)) {
      generateMessegesForQuestionSelection(item);
    }
  };

  const isTopic = (item: Topic | Question): item is Topic => {
    return (item as Topic).name !== undefined;
  };

  const isQuestion = (item: Question | Topic): item is Question => {
    return (item as Question).description !== undefined;
  };

  return (
    <div className={`chat-message d-flex ${side} w-100`}>
      <div className="chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center">
        {side === 'left' ? (
          <img src={IciaImage} className="h-auto" alt="assistente chatbot" />
        ) : (
          <Icon>person</Icon>
        )}
      </div>
      <div className="chat-ballon py-3 px-4">
        {text?.length ? (
          <h3 className="mb-0">
            {text.includes('https://') ? (
              <a target="_blank" className="text-white" href={text} rel="noreferrer">
                {text}
              </a>
            ) : (
              text
            )}
          </h3>
        ) : null}

        {children}

        <ChatMessageItems items={topics} handleItemSelection={handleItemSelection} />

        {questions?.length ? (
          <div className="d-block w-100">
            <h4 className="text-white mt-3 mb-0">Questões:</h4>
            <ChatMessageItems
              items={questions}
              handleItemSelection={handleItemSelection}
            />
          </div>
        ) : null}
        <div></div>
      </div>
    </div>
  );
}
