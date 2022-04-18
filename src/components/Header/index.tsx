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
      <header className="d-flex align-items-center justify-content-start w-100 app-header px-2">
        <img src={Logo} className="app-logo" alt="logo" />
        <h1 className="text-white ml-2 mb-0">ICIA</h1>
        <div className="flex-fill"></div>
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
