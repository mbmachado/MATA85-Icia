import { ArrowBack } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import AdminTemplate from 'components/AdminTemplate';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { services } from 'services';

interface User {
  name: string;
  email: string;
  password: string;
}

export default function UsersCreate() {
  const navigate = useNavigate();
  const { id, name, email } = useLocation().state as {
    id: number;
    name: string;
    email: string;
  };

  const [values, setValues] = React.useState<User>({
    email: email ? email : '',
    name: name ? name : '',
    password: '',
  });

  const handleChange =
    (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      services
        .editUser(id, values.email, values.name, values.password)
        .then((response) => response.data)
        .then((response) => {
          console.log(response);
          navigate('/dashboard/users', {
            state: {
              message: { type: 'success', text: 'Usuário editado com sucesso!' },
            },
          });
        })
        .catch((err) => {
          toast.error('Houve um erro ao editar usuário.');
          console.log(err);
        });
    } else {
      services
        .createUser(values.email, values.name, values.password)
        .then((response) => response.data)
        .then((response) => {
          console.log(response);
          navigate('/dashboard/users', {
            state: {
              message: { type: 'success', text: 'Usuário criado com sucesso!' },
            },
          });
        })
        .catch((err) => {
          toast.error('Houve um erro ao criar usuário.');
          console.log(err);
        });
    }
  };

  return (
    <AdminTemplate>
      <div className="user-container title-container">
        <IconButton
          aria-label="Voltar"
          component="span"
          onClick={() => {
            navigate('/dashboard/users');
          }}
        >
          <ArrowBack />
        </IconButton>
        <h2>{id ? 'Editar Usuário' : 'Cadastrar Usuário'}</h2>
      </div>
      <div className="user-container">
        <form onSubmit={handleSubmit} action="#">
          <FormControl color="secondary" variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="text">Nome</InputLabel>
            <OutlinedInput
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              label="Nome"
            />
          </FormControl>
          <FormControl color="secondary" variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="text">E-mail</InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              label="E-mail"
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel color="secondary" htmlFor="text">
              Senha
            </InputLabel>
            <OutlinedInput
              id="password"
              type="text"
              value={values.password}
              onChange={handleChange('password')}
              label="Senha"
              color="secondary"
            />
          </FormControl>
          <Button
            type="submit"
            data-testid="submit-button"
            variant="contained"
            color="secondary"
            disableElevation
          >
            Enviar
          </Button>
        </form>
      </div>
    </AdminTemplate>
  );
}
