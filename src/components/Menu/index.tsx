import './styles.scss';

import * as Icons from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

import { theme } from '../../themes/ic-ufba.theme';

const links = [
  /*{
    icon: (htmlColor: string) => <Icons.Home htmlColor={htmlColor} />,
    name: 'Inicio',
    path: '/dashboard',
    isSelected: false,
  },*/
  {
    icon: (htmlColor: string) => <Icons.Forum htmlColor={htmlColor} />,
    name: 'Perguntas',
    path: '/questions',
    isSelected: false,
  },
  {
    icon: (htmlColor: string) => <Icons.People htmlColor={htmlColor} />,
    name: 'Usuários',
    path: '/users',
    isSelected: false,
  },
];

const Menu = () => {
  return (
    <nav id="container">
      {links.map((link, index) => {
        const isSelected = window.location.pathname.includes(link.path);
        return (
          <Link to={link.path} key={index}>
            <div className="menu-option">
              <i className="menu-icon">
                {link.icon(isSelected ? theme.palette.secondary.main : '')}
              </i>
              <span className={isSelected ? 'is-selected' : ''}>{link.name}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Menu;
