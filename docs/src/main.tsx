import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import './index.css';
import '../../src/themes/globals.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// Handle GitHub Pages SPA redirect
const isRedirected = window.location.search.includes('/?/');
if (isRedirected) {
  const path = window.location.search.replace('/?/', '/').replace(/&/g, '?').replace(/~and~/g, '&');
  window.history.replaceState(null, null, window.location.pathname + path + window.location.hash);
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/uikit">
      <ThemeProvider theme="aurora" variant="light" detectSystem={true}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);