import './styles.scss';
import AdminTemplate from 'components/AdminTemplate';
import React, { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from '@mui/material';
import { Search, Delete, Edit } from '@mui/icons-material';
import { User } from 'types';
import { services } from 'services';

function createData(nome: string, email: string) {
  return { nome, email };
}

const rows = [
  createData('Frozen yoghurt', 'brito@yahoo.br'),
  createData('Ice cream sandwich', 'v@g.com'),
];

export default function Users() {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    services.getUsers().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <AdminTemplate>
      <div className="user-container title-container">
        <h2>Usuários Cadastrados</h2>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            console.log('criar novo usuário');
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="Editar"
                      component="span"
                      onClick={() => {
                        console.log('editar ' + row.name);
                      }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      aria-label="Deletar"
                      component="span"
                      onClick={() => {
                        console.log('deletar ' + row.name);
                      }}
                    >
                      <Delete />
                    </IconButton>
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
