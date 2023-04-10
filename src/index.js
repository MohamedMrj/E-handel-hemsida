import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '3.5rem',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '2rem',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.2rem',
      fontWeight: 500,
      color: '#333333',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
