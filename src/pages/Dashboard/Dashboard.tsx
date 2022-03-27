import './Dashboard.scss';

import React from 'react';

import Logo from '../../assets/assistente.png';

export default function Dashboard() {
  return (
    <div className="app">
      <header className="d-flex  align-items-center justify-content-start w-100 app-header">
        <img src={Logo} className="app-logo" alt="logo" />
        <h1 className="app-title">ICIA</h1>
      </header>
    </div>
  );
}
