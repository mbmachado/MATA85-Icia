import './styles.scss';

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeAuthOnLocalStorage, setAuthOnLocalStorage } from 'services';

import Logo from '../../assets/assistente.png';
import { useAuthContext } from '../../contexts/AuthContext/hook';

const Header = () => {
  const { clean, user } = useAuthContext();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  return (
    <div>
      <header className="d-flex  align-items-center justify-content-between app-header">
        <div className="d-flex">
          <img src={Logo} className="app-logo" alt="logo" />
          <h1 className="app-title">ICIA</h1>
        </div>
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
      </header>
    </div>
  );
};

export default Header;
