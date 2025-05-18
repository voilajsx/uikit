/**
 * Example loader and display component
 * 
 * This component dynamically loads and displays example components
 * and provides navigation between them.
 */

import React, { useState, useEffect } from 'react';
import { cn } from './utils/cn';

// Dynamically import all example components
const importExample = (name) => {
  return import(`./examples/${name}.jsx`).then(module => module.default);
};

// Get example names from the examples directory
// This list will be populated automatically based on files in the examples folder
const exampleNames = [
  'divider',
  'link',
  'avatar',
  'button',
  'badge',

  'card',
  
  // New examples will be automatically picked up when you add them
];

const Examples = () => {
  const [activeExample, setActiveExample] = useState(exampleNames[0]);
  const [Example, setExample] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load the active example component
  useEffect(() => {
    setLoading(true);
    importExample(activeExample)
      .then(component => {
        setExample(() => component);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error loading example: ${activeExample}`, error);
        setLoading(false);
      });
  }, [activeExample]);

  return (
    <div>
      <div className="example-nav rounded-md">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '0.5rem',
          padding: '0.5rem 0'
        }}>
          {exampleNames.map(name => (
            <button
              key={name}
              className={cn(
                'nav-tab',
                activeExample === name && 'active'
              )}
              onClick={() => setActiveExample(name)}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="example-container">
        {loading ? (
          <div style={{ 
            padding: '2rem', 
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            Loading example...
          </div>
        ) : Example ? (
          <div className="example-content">
            <h1 className="example-title">
              {activeExample.charAt(0).toUpperCase() + activeExample.slice(1)} Component
            </h1>
            <Example />
          </div>
        ) : (
          <div style={{ 
            padding: '2rem', 
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            Example not found
          </div>
        )}
      </div>
    </div>
  );
};

export default Examples;