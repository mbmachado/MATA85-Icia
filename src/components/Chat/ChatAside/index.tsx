import './styles.scss';

import { Brightness4, FormatSize, Home } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

type ChatAsideProps = {
  handleSidebarOptionClick: (option: 'home' | 'dark' | 'font') => void;
};

export default function ChatAside({ handleSidebarOptionClick }: ChatAsideProps) {
  return (
    <aside className="d-none d-sm-flex flex-column align-items-center border-right border-info h-100">
      <IconButton aria-label="home" onClick={() => handleSidebarOptionClick('home')}>
        <Home />
      </IconButton>
      <IconButton
        aria-label="brightness4"
        onClick={() => handleSidebarOptionClick('dark')}
      >
        <Brightness4 />
      </IconButton>
      <IconButton aria-label="cached" onClick={() => handleSidebarOptionClick('font')}>
        <FormatSize />
      </IconButton>
    </aside>
  );
}
