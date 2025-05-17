/**
 * Radio Component
 * 
 * A customized version of the HTML input radio with consistent styling and states.
 * Replaces the native browser radio button with a custom-styled version while
 * maintaining all accessibility features.
 * 
 * @module components/forms/Radio
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the radio control
 */
const sizeMap = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

/**
 * Size variants for the label text
 */
const labelSizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

/**
 * Radio component provides a styled radio input with associated label.
 * 
 * @param {'sm'|'md'|'lg'} size - Controls the radio button and text size
 * @param {boolean} disabled - Whether the radio is disabled
 * @param {boolean} error - Whether the radio is in an error state
 * @param {React.ReactNode} children - Label content to display next to the radio
 * @param {string} className - Additional CSS classes to apply to the wrapper
 * @param {Object} props - All other props are passed to the input element
 * @returns {JSX.Element} Styled radio component with label
 */
const Radio = forwardRef(({
  size = 'md',
  disabled = false,
  error = false,
  children,
  className,
  ...props
}, ref) => {
  return (
    <label 
      className={cn(
        'inline-flex items-center',
        disabled && 'opacity-60 cursor-not-allowed',
        labelSizeMap[size],
        className
      )}
    >
      <div className="relative flex items-center">
        {/* Actual radio input (visually hidden) */}
        <input
          type="radio"
          ref={ref}
          disabled={disabled}
          className={cn(
            'form-radio',
            'opacity-0 absolute h-0 w-0',
            disabled && 'cursor-not-allowed'
          )}
          {...props}
        />
        
        {/* Custom styled radio button */}
        <div 
          className={cn(
            'border rounded-full mr-2',
            'flex items-center justify-center',
            'transition-colors duration-[var(--duration-normal)]',
            'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--primary-color)]',
            sizeMap[size],
            !disabled && 'cursor-pointer',
            error ? 'border-[var(--error-color)]' : 'border-[var(--border-color-default)]'
          )}
        >
          {/* Inner circle - shown when checked */}
          <div className="rounded-full bg-[var(--primary-color)] hidden pointer-events-none" 
            style={{
              width: size === 'sm' ? '6px' : size === 'md' ? '8px' : '10px',
              height: size === 'sm' ? '6px' : size === 'md' ? '8px' : '10px',
            }}
          />
        </div>
      </div>
      
      {/* Label text */}
      {children && <span>{children}</span>}
    </label>
  );
});

// Set display name for React DevTools
Radio.displayName = 'Radio';

// Add CSS to handle checked state
const radioStyles = `
  input[type="radio"]:checked + div {
    border-color: var(--primary-color);
  }
  
  input[type="radio"]:checked + div div {
    display: block;
  }
  
  input[type="radio"]:disabled + div {
    background-color: var(--bg-subtle);
  }
`;

// Add a style tag to the component file
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = radioStyles;
  document.head.appendChild(style);
}

export default Radio;