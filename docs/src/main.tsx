import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { HydrationProvider } from './components/HydrationProvider';
import './index.css';
import '../../src/themes/globals.css';
import App from './App';

// ScrollToTop component defined inline
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
    <HashRouter>
      <ScrollToTop />
      <ThemeProvider theme="default" variant="light" detectSystem={true}>
        <HydrationProvider>
          <App />
        </HydrationProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);