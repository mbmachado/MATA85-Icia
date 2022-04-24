import './styles.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface TextModalProps {
  title: string;
  text: string;
  isOpen: boolean;
  handleClose(): void;
  handleConfirm(): void;
}

export default function TextModal({
  title,
  text,
  isOpen,
  handleClose,
  handleConfirm,
}: TextModalProps) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {text}
          </Typography>
          <div className="modal-footer">
            <Button
              variant="contained"
              color="warning"
              onClick={handleConfirm}
              data-testid="confirm-button"
            >
              Sim
            </Button>
            <Button variant="outlined" onClick={handleClose} className="ml-2">
              Não
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
