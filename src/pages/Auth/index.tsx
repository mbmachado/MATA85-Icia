import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import LogoUfba from '../../assets/logo-ic-ufba.png';
import LogoIcia from '../../assets/logo-icia-vertical.svg';

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
          <Link
            to="/"
            className="logo d-flex mx-auto mb-4 align-items-end justify-content-center"
          >
            <div className="d-flex" style={{ width: '60%' }}>
              <img src={LogoIcia} alt="Logomarca ICIA" className="w-100" />
            </div>
            <div className="d-flex pl-3" style={{ width: '38%' }}>
              <img src={LogoUfba} alt="Logo Computação Ufba" className="w-100" />
            </div>
          </Link>

          {children}
        </div>
      </div>
      <div className="w-100 mt-2 text-center text-white">
        &copy; Todos os direitos reservados.
      </div>
    </div>
  );
}
