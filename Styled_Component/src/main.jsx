import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { THEME } from './theme/theme.js';
import { GlobalStyle } from './components/styled/GlobalCSS.js';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={THEME}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
);
