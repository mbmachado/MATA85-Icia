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
          Icia ChatBot
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa aliquam ipsa in
          deserunt, veniam tempore recusandae amet velit molestiae repudiandae. Rem
          incidunt possimus dolores harum id modi.
        </Typography>
      </Popover>
    </>
  );
}
