import './styles.scss';

import React, { useState } from 'react';
import { Question, Topic } from 'types';

type ChatMessageItemsProps = {
  items?: Question[] | Topic[];
  handleItemSelection: (item: Question | Topic) => void;
};

export default function ChatMessageItems({
  items,
  handleItemSelection,
}: ChatMessageItemsProps) {
  const [selectedItemId, setSelectedItemId] = useState<number | undefined>();

  const handleClick = (item: Question | Topic) => {
    setSelectedItemId(item.id);
    handleItemSelection(item);
  };

  const isQuestion = (item: Question | Topic): item is Question => {
    return (item as Question).description !== undefined;
  };

  return (
    <>
      {items?.length ? (
        <div className="chat-items">
          {items.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleClick(item)}
              title={isQuestion(item) ? item.description : item.name}
              className={
                'chat-item-option d-block rounded-pill bg-info ' +
                `text-dark py-${isQuestion(item) ? '1' : '2'} px-3 mt-3 ` +
                `border-0${selectedItemId === item.id ? ' selected' : ''}`
              }
            >
              <span>{isQuestion(item) ? item.description : item.name}</span>
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
