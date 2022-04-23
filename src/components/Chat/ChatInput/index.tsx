import './styles.scss';

import { Send } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

type ChatInputProps = {
  generateMessegesOnFormSubmit: (text: string) => void;
};

export default function ChatInput({ generateMessegesOnFormSubmit }: ChatInputProps) {
  const [input, setInput] = React.useState<string>('');

  const handleSubmit = () => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    generateMessegesOnFormSubmit(input);
    setInput('');
  };

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="chat-input-container rounded-pill border border-info position-relative overflow-hidden w-100">
      <form onSubmit={handleSubmit()}>
        <input
          type="text"
          className="py-2 pl-4 pr-5 w-100 border-0"
          onChange={handleChange()}
          placeholder="Digite algo"
          value={input}
        />
        <div className="position-absolute">
          <IconButton type="submit" aria-label="cached" disabled={!input.length}>
            <Send />
          </IconButton>
        </div>
      </form>
    </div>
  );
}
