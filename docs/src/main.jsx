/**
 * @fileoverview Main entry point for @voilajsx/uikit documentation
 * @description Renders the documentation app
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../../src/themes/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)