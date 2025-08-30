/**
 * Main application entry point
 * @module examples
 * @file src/main.tsx
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '../../src/themes/theme-provider';
import '@assets/styles/globals.css';
import '../../src/styles/globals.css';
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme="ruby" mode="light" detectSystem={true}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)