import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
const ConfirmDialog = (props: any) => {
  const { title, children, open, setOpen, onConfirm } = props;
  return (
    <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="confirm-dialog">
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => setOpen(false)} color="secondary">
          Não
        </Button>
        <Button
          data-testid="confirm-button"
          variant="contained"
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
          color="secondary"
        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
