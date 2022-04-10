import './styles.scss';

import React from 'react';

import Logo from '../../assets/assistente.png';

const Header = () => {
  return (
    <div>
      <header className="d-flex align-items-center justify-content-start w-100 app-header">
        <img src={Logo} className="app-logo" alt="logo" />
        <h1 className="app-title">ICIA</h1>
      </header>
    </div>
  );
};

export default Header;
