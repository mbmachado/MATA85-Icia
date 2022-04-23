import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@mui/material';
import AuthProvider from 'contexts/AuthContext';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AppRoutes } from 'routes/Routes';
import { theme } from 'themes/ic-ufba.theme';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
