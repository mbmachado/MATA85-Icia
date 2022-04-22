import './styles.scss';

import Header from 'components/Header';
import Menu from 'components/Menu';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeAuthOnLocalStorage, setAuthOnLocalStorage } from 'services';

import { useAuthContext } from '../../contexts/AuthContext/hook';
interface AdminTemplateProps {
  children?: React.ReactNode;
}

export default function AdminTemplate({ children }: AdminTemplateProps) {
  const { clean, user } = useAuthContext();
  const navigate = useNavigate();
  const path = useLocation().pathname;

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
