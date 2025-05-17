/**
 * Switch Component
 * 
 * A toggle switch control, often used as an alternative to Checkbox.
 * Provides a visual slider that moves between on/off states with a
 * smooth animation. Commonly used for binary settings.
 * 
 * @module components/forms/Switch
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size configurations for different switch sizes
 */
const sizeMap = {
  sm: {
    switch: 'w-8 h-4',
    thumb: 'w-3 h-3',
    translateX: 'translate-x-4',
  },
  md: {
    switch: 'w-10 h-5',
    thumb: 'w-4 h-4',
    translateX: 'translate-x-5',
  },
  lg: {
    switch: 'w-12 h-6',
    thumb: 'w-5 h-5',
    translateX: 'translate-x-6',
  },
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
 * Switch component provides a styled toggle switch with an associated label.
 * 
 * @param {'sm'|'md'|'lg'} size - Controls the switch and text size
 * @param {boolean} disabled - Whether the switch is disabled
 * @param {React.ReactNode} children - Label content to display next to the switch
 * @param {string} className - Additional CSS classes to apply to the wrapper
 * @param {Object} props - All other props are passed to the input element
 * @returns {JSX.Element} Styled switch component with label
 */
const Switch = forwardRef(({
  size = 'md',
  disabled = false,
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
        {/* Actual checkbox input (visually hidden but accessible) */}
        <input
          type="checkbox"
          ref={ref}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        
        {/* Switch track (background) */}
        <div 
          className={cn(
            'bg-[var(--bg-subtle)] rounded-full',
            'transition-colors duration-[var(--duration-normal)]',
            'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--primary-color)]',
            sizeMap[size].switch,
            !disabled && 'cursor-pointer'
          )}
        >
          {/* Switch thumb (sliding circle) */}
          <div 
            className={cn(
              'transform transition-transform duration-[var(--duration-normal)] ease-[var(--timing-ease)]',
              'bg-white rounded-full shadow-sm',
              'translate-x-0.5 translate-y-0.5',
              sizeMap[size].thumb
            )}
          />
        </div>
      </div>
      
      {/* Label text */}
      {children && <span className="ml-2">{children}</span>}
    </label>
  );
});

// Set display name for React DevTools
Switch.displayName = 'Switch';

// Add CSS to handle checked state and animation
const switchStyles = `
  input[type="checkbox"]:checked + div {
    background-color: var(--primary-color);
  }
  
  input[type="checkbox"]:checked + div div {
    transform: translateX(calc(100% - 2px)) translateY(2px);
  }
  
  input[type="checkbox"]:disabled + div {
    background-color: var(--border-color-default);
  }
`;

// Add a style tag to the component file
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = switchStyles;
  document.head.appendChild(style);
}

export default Switch;