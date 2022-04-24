import './styles.scss';

import * as Icons from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

import { theme } from '../../themes/ic-ufba.theme';

const links = [
  {
    id: 'question-link',
    icon: (htmlColor: string) => <Icons.Forum htmlColor={htmlColor} />,
    name: 'Perguntas',
    path: '/dashboard/questions',
    isSelected: false,
  },
  {
    id: 'users-link',
    icon: (htmlColor: string) => <Icons.People htmlColor={htmlColor} />,
    name: 'Usuários',
    path: '/dashboard/users',
    isSelected: false,
  },
];

const Menu = () => {
  return (
    <nav id="container">
      {links.map((link) => {
        const isSelected = window.location.pathname.includes(link.path);
        return (
          <Link data-testid={link.id} to={link.path} key={link.id}>
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
