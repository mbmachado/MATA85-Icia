import React from 'react'
import {render} from '@testing-library/react'
import { ThemeProvider } from '@mui/material';
import { theme } from 'themes/ic-ufba.theme';
import AuthProvider from 'contexts/AuthContext';


const AllTheProviders = ({children}) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AuthProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}