import { ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';
import AuthProvider from 'contexts/AuthContext';
import React, { FC } from 'react';
import { theme } from 'themes/ic-ufba.theme';
import { MemoryRouter } from 'react-router-dom';

const AllTheProviders = ({ children }: { children?: React.ReactNode }) => {
  return (
    <MemoryRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthProvider>
    </MemoryRouter>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
