import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import styles - with the alias this will resolve to the actual CSS file
import '@voilajsx/uikit/styles';
// Add any example-specific styles
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);