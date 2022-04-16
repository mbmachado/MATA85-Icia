import React from 'react';
import AuthProvider from 'contexts/AuthContext';
import { AppRoutes } from 'routes/Routes';
import { theme } from 'themes/ic-ufba.theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import Header from '.';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';



test('renders learn react link', () => {
  // render(<Header />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // ReactDOM.render((<Router><Header/></Router>),
  //   document.getElementById('root')
  // )
});
