import React, { useState, useEffect } from 'react';
import Examples from './Examples';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app">
      <header style={{ 
        padding: '1rem', 
        backgroundColor: 'var(--surface-color)',
        borderBottom: '1px solid var(--border-color-default)'
      }}>
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
  );
};

export default App;