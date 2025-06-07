/**
 * @fileoverview Main entry point for the demo application
 * @description Renders the demo app
 * @package @voilajsx/uikit
 * @file /src/main.jsx
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './themes/globals.css';
import './themes.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);