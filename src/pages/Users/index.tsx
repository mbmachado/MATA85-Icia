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
import React, { useEffect, useState } from 'react';
import { services } from 'services';
import { User } from 'types';

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
