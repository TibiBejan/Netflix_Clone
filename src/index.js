import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './theme/GlobalStyles';
import Theme from './theme/Theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ Theme }>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
