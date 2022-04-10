import './App.scss';

import { ThemeProvider } from '@mui/material';
import AuthProvider from 'contexts/AuthContext';
import React from 'react';
import { AppRoutes } from 'routes/Routes';
import { theme } from 'themes/ic-ufba.theme';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
