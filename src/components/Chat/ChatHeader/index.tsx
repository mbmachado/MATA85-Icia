import './styles.scss';

import { Button, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function ChatHeader() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'learn-more-popover' : undefined;

  return (
    <>
      <h2 className="mb-0 text-dark">ChatBot do IC-UFBA</h2>
      <div className="flex-fill"></div>
      <Button
        aria-describedby={id}
        variant="outlined"
        color="secondary"
        onClick={handleClick}
      >
        Saiba mais
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>
          O ICIA é um sistema de &quot;BOT&quot; com o objetivo de responder as dúvidas
          relacionadas ao Instituto de Computação (IC) da UFBA, especialmente dos cursos
          de graduação e pós-graduação do PGCOMP.
          <br />
          <br />O aplicativo foi desenvolvido por discentes de cursos de graduação e
          pós-graduação vinculados ao PGCOMP, sob a orientação do Prof. Dr. Frederico
          Durão, referente a disciplina Tópicos em Sistemas de Informação e Web I no
          semestre letivo de 2022.1.
        </Typography>
      </Popover>
    </>
  );
}
