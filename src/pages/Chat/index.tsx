import './styles.scss';

import { Brightness4, Cached, FormatSize, Send } from '@mui/icons-material';
import { Icon, IconButton } from '@mui/material';
import Header from 'components/Header';
import React from 'react';

import AssistentImage from '../../assets/assistente.png';

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

          <div className="chat-content d-flex flex-column flex-fill w-100 mw-100 p-3">
            <div className="chat-message d-flex left w-100">
              <div className="chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center">
                <img
                  src={AssistentImage}
                  className="w-75 h-auto"
                  alt="assistente chatbot"
                />
              </div>
              <div className="chat-ballon text-white p-3">
                <h3 className="mb-0">Qual tipo de informação você procura?</h3>

                <div className="chat-menu ">
                  <div className="chat-menu-option d-inline-block rounded-pill bg-info text-dark py-2 px-3 mt-3">
                    <span>Insitutinal</span>
                  </div>

                  <div className="chat-menu-option d-inline-block rounded-pill bg-info text-dark py-2 px-3 mt-3">
                    <span>Pessoas</span>
                  </div>

                  <div className="chat-menu-option selected d-inline-block rounded-pill bg-info text-dark py-2 px-3 mt-3">
                    <span>Cursos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-message d-flex right w-100">
              <div className="chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center">
                <Icon>person</Icon>
              </div>
              <div className="chat-ballon text-dark p-3">
                <h3 className="mb-0">Cursos</h3>
              </div>
            </div>
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
