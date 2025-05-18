import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@voilajsx/uikit/styles';
import './styles/main.css';

import App from './App';

// Get the basename from the public URL for GitHub Pages compatibility
const basename = process.env.PUBLIC_URL || '/';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
