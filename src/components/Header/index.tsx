import './styles.scss';

import React from 'react';

import Logo from '../../assets/assistente.png';

const Header = () => {
  return (
    <div className="w-100">
      <header className="d-flex align-items-center justify-content-start w-100 app-header px-2">
        <img src={Logo} className="app-logo" alt="logo" />
        <h1 className="text-white ml-2 mb-0">ICIA</h1>
      </header>
    </div>
  );
};

export default Header;
