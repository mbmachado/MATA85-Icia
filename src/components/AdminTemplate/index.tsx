import './AdminTemplate.scss';

import Header from 'components/Header';
import Menu from 'components/Menu';
import React from 'react';

interface AdminTemplateProps {
  children?: React.ReactNode;
}

export default function AdminTemplate({ children }: AdminTemplateProps) {
  return (
    <div className="app">
      <Header />
      <div id="admin-container">
        <Menu />
        {children}
      </div>
    </div>
  );
}
