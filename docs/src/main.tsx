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

// GlobalMetaTags component to handle global meta tags
function GlobalMetaTags() {
  useEffect(() => {
    const addGlobalMeta = () => {
      const metaTags = [
        { name: 'author', content: 'Krishna Teja GS' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'msapplication-TileColor', content: '#3b82f6' },
        { property: 'og:site_name', content: '@voilajsx/uikit' },
        { property: 'og:image', content: 'https://voilajsx.github.io/uikit/og-image.png' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@voilajsx' },
        { property: 'twitter:creator', content: '@krishnatejags' },
        { property: 'twitter:image', content: 'https://voilajsx.github.io/uikit/og-image.png' },
        { name: 'application-name', content: '@voilajsx/uikit' },
        { name: 'apple-mobile-web-app-title', content: '@voilajsx/uikit' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'mobile-web-app-capable', content: 'yes' }
      ];

      metaTags.forEach(({ name, property, content }) => {
        const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
        
        if (!document.querySelector(selector)) {
          const meta = document.createElement('meta');
          if (name) {
            meta.name = name;
          } else if (property) {
            meta.setAttribute('property', property);
          }
          meta.content = content;
          document.head.appendChild(meta);
        }
      });
    };

    addGlobalMeta();
  }, []);

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
      <GlobalMetaTags />
      <ThemeProvider theme="default" variant="light" detectSystem={true}>
        <HydrationProvider>
          <App />
        </HydrationProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);