import './styles.scss';

import { Brightness4, Cached, FormatSize } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Header from 'components/Header';
import React from 'react';

export default function Chat() {
  return (
    <div className="min-vh-100 vh-100 w-100">
      <Header />
      <div className="chat-container d-flex">
        <aside className="d-none d-sm-flex flex-column align-items-center border-right border-info h-100">
          <IconButton aria-label="brightness4">
            <Brightness4 />
          </IconButton>
          <IconButton aria-label="cached">
            <Cached />
          </IconButton>
          <IconButton aria-label="cached">
            <FormatSize />
          </IconButton>
        </aside>
        <main className="d-flex flex-column flex-fill">
          <div className="chat-toolbar d-flex align-items-center border-bottom border-info px-3">
            <h2 className="mb-0 text-dark">Cursos {'>'} Graduação</h2>
          </div>

          <div className="chat-content flex-fill w-100 mw-100 p-3">
            <div className="chat-message">
              <div className="chat-user"></div>
              <div className="chat-ballon"></div>
            </div>
          </div>

          <div className="chat-toolbar d-flex align-items-center border-top border-info px-3">
            <div className="chat-input-container rounded-pill border border-info position-relative overflow-hidden w-100">
              <input
                className="py-2 pl-4 pr-5 w-100 border-0"
                placeholder="Digite algo"
                type="text"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
