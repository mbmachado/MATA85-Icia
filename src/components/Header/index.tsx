import './styles.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeAuthOnLocalStorage, setAuthOnLocalStorage } from 'services';

import Logo from '../../assets/logo-icia-horizontal-text-white.svg';
import { useAuthContext } from '../../contexts/AuthContext/hook';

const Header = () => {
  const { clean, user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div>
      <header className="d-flex align-items-center justify-content-start w-100 app-header px-2">
        <img src={Logo} className="app-logo" alt="logo" />
        <div className="flex-fill"></div>
        {/* <button
          id="logout-button"
          onClick={() => {
            removeAuthOnLocalStorage();
            clean();
            navigate('/login', { replace: true });
          }}
        >
          SAIR
        </button> */}
        {/* Usar props children aqui,
            pelo que tinha sido validado com o Prof no começo, não teria botão de Adm no Chatbot.
            Os usuários do chatbot não devem saber do painel Adm.
        */}
      </header>
    </div>
  );
};

export default Header;
