import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#72C3E6',
      main: '#72C3E6',
      dark: '#72C3E6',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#F9D055',
      main: '#F9D055',
      dark: '#F9D055',
      contrastText: '#FFF',
    },
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
