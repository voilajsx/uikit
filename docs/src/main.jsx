import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import './index.css'; // Import global styles
import '../../src/themes/globals.css'; // Import default theme styles
import App from './App';


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/uikit">
      <ThemeProvider theme="default" variant="light" detectSystem={true}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);