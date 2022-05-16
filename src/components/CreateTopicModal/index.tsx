import './styles.scss';

import { FormControl, Input, InputLabel, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { services } from 'services';

interface CreateTopicModalProps {
  isOpen: boolean;
  parentId: number;
  onConfirm(): void;
  onClose(): void;
}

export default function CreateTopicModal({
  isOpen,
  onClose,
  onConfirm,
  parentId,
}: CreateTopicModalProps) {
  const [topicName, setTopicName] = useState('');
  const [errorMessage, setErrorMesage] = useState('');
  const topicType = parentId ? 'subategoria' : 'categoria';
  const { authToken } = useAuthContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMesage('');

    if (topicName === '') {
      setErrorMesage(`Adicione o nome da ${topicType}`);
      return;
    }

    services
      .createTopic(authToken, topicName, parentId)
      .then((response) => response.data)
      .then((response) => {
        onConfirm();
        console.log(response);
        setTopicName('');
        toast.success('Categoria adicionada com sucesso.');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Houve um erro ao adicionar a categoria.');
      });
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="create-modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar {topicType}
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl className="mt-4" variant="outlined" fullWidth color="secondary">
              <InputLabel htmlFor="topic">Nome</InputLabel>
              <OutlinedInput
                id="topic"
                type="text"
                value={topicName}
                color="secondary"
                onChange={(event) => setTopicName(event.target.value)}
                placeholder={`Digite a ${topicType}`}
                label="Nome"
              />
              <small className="text-danger">{errorMessage}</small>
              <div className="create-modal-footer">
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  data-testid="confirm-button"
                >
                  Adicionar
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setErrorMesage('');
                    onClose();
                  }}
                  className="ml-2"
                >
                  Cancelar
                </Button>
              </div>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
