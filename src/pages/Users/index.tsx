import './styles.scss';

import { Delete, Edit, Search } from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import AdminTemplate from 'components/AdminTemplate';
import ConfirmDialog from 'components/ConfirmDialog';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from 'services';
import { User } from 'types';

export default function Users() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User[]>([]);
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    console.log('deletando o ', id);
    /*
    services
      .deleteUser(id)
      .then(() => getUsers())
      .catch((err) => {
        console.log(err);
      });
      */
  };
  const getUsers = () => {
    services.getUsers().then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AdminTemplate>
      <div className="user-container title-container">
        <h2>Usuários Cadastrados</h2>
        <Button
          data-testid="add_user-button"
          variant="outlined"
          color="secondary"
          onClick={() => {
            navigate('/dashboard/users/create', {
              state: { id: '', name: '', email: '' },
            });
          }}
        >
          CRIAR NOVO
        </Button>
      </div>
      <div className="user-container" style={{ display: 'none' }}>
        <TextField
          id="search"
          label="Pesquisar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>
      <div className="user-container">
        <TableContainer>
          <Table sx={{ minWidth: 450 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell width="40%" data-testid="user-name">{row.name}</TableCell>
                  <TableCell width="40%">{row.email}</TableCell>
                  <TableCell width="20%" align="center">
                    <IconButton
                      aria-label="Editar"
                      data-testid="edit_user-button"
                      component="span"
                      onClick={() => {
                        navigate('/dashboard/users/edit', {
                          state: { id: row.id, name: row.name, email: row.email },
                        });
                      }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      data-testid="delete_user-button"
                      aria-label="Deletar"
                      component="span"
                      onClick={() => setConfirmOpen(true)}
                    >
                      <Delete />
                    </IconButton>
                    <ConfirmDialog
                      title={`Deletar usuário ${row.name}`}
                      open={confirmOpen}
                      setOpen={setConfirmOpen}
                      onConfirm={() => handleDelete(row.id)}
                    ></ConfirmDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </AdminTemplate>
  );
}
