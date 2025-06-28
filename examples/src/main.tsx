/**
 * Main application entry point
 * @module examples
 * @file src/main.tsx
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '../../src/themes/theme-provider';
import '../../dist/styles.css'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme="aurora" mode="light" detectSystem={true}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)