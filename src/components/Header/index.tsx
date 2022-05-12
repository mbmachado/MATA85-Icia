import './styles.scss';

import React from 'react';

import IconIcUFba from '../../assets/icon-ic-ufba.png';
import IconIcia from '../../assets/icon-icia.svg';
import LogoIcia from '../../assets/logo-icia-horizontal-text-white.svg';

type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <div>
      <header className="d-flex align-items-center justify-content-start w-100 app-header px-3">
        <img
          data-testid="logo1"
          src={LogoIcia}
          className="app-logo d-none d-sm-block"
          alt="logo"
        />
        <img
          data-testid="logo2"
          src={IconIcia}
          className="app-logo d-block d-sm-none"
          alt="logo"
        />
        <img data-testid="logo3" src={IconIcUFba} className="app-logo ml-4" alt="logo" />
        <h1 className="app-computacao mb-0 ml-2 font-weight-normal text-white d-none d-sm-block">
          computação
          <br />
          <span>UFBA</span>
        </h1>
        <div className="flex-fill"></div>
        {children}
      </header>
    </div>
  );
}
