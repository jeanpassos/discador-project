import React from 'react';
import '../styles/globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';


const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
