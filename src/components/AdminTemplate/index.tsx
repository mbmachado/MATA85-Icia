import './styles.scss';

import { Button } from '@mui/material';
import Header from 'components/Header';
import Menu from 'components/Menu';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeAuthOnLocalStorage, setAuthOnLocalStorage } from 'services';

import { useAuthContext } from '../../contexts/AuthContext/hook';
interface AdminTemplateProps {
  children?: React.ReactNode;
}

interface StateInterface {
  message: {
    type: 'error' | 'info' | 'success';
    text: string;
  };
}

export default function AdminTemplate({ children }: AdminTemplateProps) {
  const { clean, user } = useAuthContext();
  const navigate = useNavigate();
  const state = useLocation().state as StateInterface;
  const message = state?.message;

  useEffect(() => {
    if (message) {
      toast[message.type](message.text);
      history.replaceState({ message: null }, '');
    }
  }, []);

  return (
    <div className="app">
      <Header>
        <Button
          id="logout-button"
          type="button"
          variant="contained"
          color="secondary"
          disableElevation
          onClick={() => {
            removeAuthOnLocalStorage();
            clean();
            navigate('/login', { replace: true });
          }}
        >
          Sair
        </Button>
      </Header>
      <div id="admin-container" className="d-flex">
        <Menu />
        <main id="admin-content">{children}</main>
      </div>
    </div>
  );
}
