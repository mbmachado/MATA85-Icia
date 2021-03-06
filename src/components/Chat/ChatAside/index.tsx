import './styles.scss';

import { Brightness2, Brightness4, ContactSupport, Home } from '@mui/icons-material';
import { Button, IconButton, Popover, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';

type ChatAsideProps = {
  handleSidebarOptionClick: (option: 'home' | 'mode') => void;
};

export default function ChatAside({ handleSidebarOptionClick }: ChatAsideProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Aqui');
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'learn-more-popover' : undefined;

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

      <Tooltip title="Saia mais" placement="right">
        <IconButton onClick={handlePopoverClick} aria-describedby={id}>
          <ContactSupport />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          O ICIA ?? um sistema de &quot;BOT&quot; com o objetivo de responder as d??vidas
          relacionadas ao Instituto de Computa????o (IC) da UFBA, especialmente dos cursos
          de gradua????o e p??s-gradua????o do PGCOMP.
          <br />
          <br />O aplicativo foi desenvolvido por discentes de cursos de gradua????o e
          p??s-gradua????o vinculados ao PGCOMP, sob a orienta????o do Prof. Dr. Frederico
          Dur??o, referente a disciplina T??picos em Sistemas de Informa????o e Web I no
          semestre letivo de 2022.1.
        </Typography>
      </Popover>
    </aside>
  );
}
