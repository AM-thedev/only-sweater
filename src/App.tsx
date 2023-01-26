import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './utils';
import Top from './components/pages/Top';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Top />
    </ThemeProvider>
  );
}

export default App;
