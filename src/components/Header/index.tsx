import './styles.scss';

import React from 'react';

import Logo from '../../assets/logo-icia-horizontal-text-white.svg';

type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <div>
      <header className="d-flex align-items-center justify-content-start w-100 app-header px-3">
        <img data-testid="logo" src={Logo} className="app-logo" alt="logo" />
        <div className="flex-fill"></div>
        {children}
      </header>
    </div>
  );
}
