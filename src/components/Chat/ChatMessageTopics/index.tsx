import './styles.scss';

import React, { useState } from 'react';
import { Topic } from 'types';

type ChatMessageTopicsProps = {
  topics?: Topic[];
  handleTopicSelection: (topicId: number) => void;
};

export default function ChatMessageTopics({
  topics,
  handleTopicSelection,
}: ChatMessageTopicsProps) {
  const [selectedTopicId, setSelectedTopicId] = useState<number | undefined>();

  const handleClick = (topicId: number) => {
    setSelectedTopicId(topicId);
    handleTopicSelection(topicId);
  };

  return (
    <>
      {topics && topics.length ? (
        <div className="chat-menu">
          {topics.map((topic) => (
            <button
              type="button"
              key={topic.id}
              onClick={() => handleClick(topic.id)}
              className={`chat-menu-option d-block rounded-pill bg-info \
                 text-dark py-2 px-3 mt-3 border-0 ${
                   selectedTopicId === topic.id ? 'selected' : ''
                 }`}
            >
              <span>{topic.name}</span>
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
