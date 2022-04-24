import { ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';
import AuthProvider from 'contexts/AuthContext';
import React, { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { theme } from 'themes/ic-ufba.theme';

const AllTheProviders = ({ children }: { children?: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
