import './styles.scss';

import React from 'react';
import { Brightness4, FormatSize, Home } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function ChatAside() {
  return (
    <aside className="d-none d-sm-flex flex-column align-items-center border-right border-info h-100">
      <IconButton aria-label="home">
        <Home />
      </IconButton>
      <IconButton aria-label="brightness4">
        <Brightness4 />
      </IconButton>
      <IconButton aria-label="cached">
        <FormatSize />
      </IconButton>
    </aside>
  );
}
