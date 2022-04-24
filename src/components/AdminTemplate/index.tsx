import './styles.scss';

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
  const path = useLocation().pathname;
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
        <button
          id="logout-button"
          onClick={() => {
            removeAuthOnLocalStorage();
            clean();
            navigate('/login', { replace: true });
          }}
        >
          {path === '/' ? 'ACESSO ADMIN' : 'SAIR'}
        </button>
      </Header>
      <div id="admin-container">
        <Menu />
        <main id="admin-content">{children}</main>
      </div>
    </div>
  );
}
