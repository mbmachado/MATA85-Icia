import './styles.scss';

import React from 'react';

import Logo from '../../assets/logo-icia-vertical.svg';

type AuthProps = {
  children?: React.ReactNode;
};

export default function Auth({ children }: AuthProps) {
  return (
    <div
      className="auth-container d-flex flex-column overflow-auto justify-content-start
                 justify-content-sm-center align-items-center p-3 p-md-4 min-vh-100 w-100"
    >
      <div className="shadow-sm rounded bg-white w-100 p-3">
        <div className="px-3 pt-3 pb-4">
          <a className="logo d-block mx-auto mb-3">
            <img src={Logo} alt="Logomarca ICIA" className="w-100" />
          </a>
          {children}
        </div>
      </div>
      <div className="w-100 mt-2 text-center text-white">
        &copy; Todos os direitos reservados.
      </div>
    </div>
  );
}
