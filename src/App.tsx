import './App.scss';

import { ThemeProvider } from '@mui/material';
import React from 'react';
import { AppRoutes } from 'Routes';
import { theme } from 'themes/ic-ufba.theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
