import './styles.scss';

import { Brightness2, Brightness4, FormatSize, Home } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';

type ChatAsideProps = {
  handleSidebarOptionClick: (option: 'home' | 'mode' | 'font') => void;
};

export default function ChatAside({ handleSidebarOptionClick }: ChatAsideProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <aside className="d-none d-sm-flex flex-column align-items-center border-right border-info h-100">
      <Tooltip title="Reiniciar" placement="right">
        <IconButton aria-label="home" onClick={() => handleSidebarOptionClick('home')}>
          <Home />
        </IconButton>
      </Tooltip>
      <Tooltip title={darkMode ? 'Modo claro' : 'Modo escuro'} placement="right">
        <IconButton
          aria-label="theme-mode"
          onClick={() => {
            setDarkMode(!darkMode);
            handleSidebarOptionClick('mode');
          }}
        >
          {darkMode ? <Brightness4 /> : <Brightness2 />}
        </IconButton>
      </Tooltip>

      {/*
      <Tooltip title="Fonte" placement="right">
        <IconButton aria-label="cached" onClick={() => handleSidebarOptionClick('font')}>
          <FormatSize />
        </IconButton>
      </Tooltip>
      */}
    </aside>
  );
}
