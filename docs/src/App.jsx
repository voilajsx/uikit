import React, { useState, useEffect } from 'react';
import Examples from './Examples';
import { ThemeProvider } from '../../src/index.js';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    console.log('mode',darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider darkMode={darkMode}>
    <div className="app">
      <header className='bg-light border-b border-base shadow-xs p-4'>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>
            VoilaJSX UIKit Test Environment
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={darkMode} 
                onChange={() => setDarkMode(!darkMode)} 
              />
              Dark Mode
            </label>
          </div>
        </div>
      </header>
      
      <main className="test-container">
        <Examples />
      </main>
    </div>
    </ThemeProvider>
  );
};

export default App;