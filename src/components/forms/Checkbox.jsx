/**
 * Checkbox Component
 * 
 * A customized version of the HTML input checkbox with consistent styling and states.
 * Replaces the native browser checkbox with a custom-styled version while maintaining
 * all accessibility features.
 * 
 * @module components/forms/Checkbox
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the checkbox control
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
 * Checkbox component provides a styled checkbox input with associated label.
 * 
 * @param {'sm'|'md'|'lg'} size - Controls the checkbox and text size
 * @param {boolean} disabled - Whether the checkbox is disabled
 * @param {boolean} error - Whether the checkbox is in an error state
 * @param {React.ReactNode} children - Label content to display next to the checkbox
 * @param {string} className - Additional CSS classes to apply to the wrapper
 * @param {Object} props - All other props are passed to the input element
 * @returns {JSX.Element} Styled checkbox component with label
 */
const Checkbox = forwardRef(({
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
        {/* Actual checkbox input (visually hidden) */}
        <input
          type="checkbox"
          ref={ref}
          disabled={disabled}
          className={cn(
            'form-checkbox',
            'opacity-0 absolute h-0 w-0',
            disabled && 'cursor-not-allowed'
          )}
          {...props}
        />
        
        {/* Custom styled checkbox */}
        <div 
          className={cn(
            'border rounded mr-2',
            'flex items-center justify-center',
            'transition-colors duration-[var(--duration-normal)]',
            'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--primary-color)]',
            sizeMap[size],
            !disabled && 'cursor-pointer',
            error ? 'border-[var(--error-color)]' : 'border-[var(--border-color-default)]'
          )}
        >
          {/* Checkmark icon - shown when checked */}
          <svg 
            className="fill-current hidden text-white pointer-events-none" 
            viewBox="0 0 20 20"
            width={size === 'sm' ? 10 : size === 'md' ? 12 : 14}
            height={size === 'sm' ? 10 : size === 'md' ? 12 : 14}
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
      </div>
      
      {/* Label text */}
      {children && <span>{children}</span>}
    </label>
  );
});

// Set display name for React DevTools
Checkbox.displayName = 'Checkbox';

// Add CSS to handle checked state
const checkboxStyles = `
  input[type="checkbox"]:checked + div {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
  
  input[type="checkbox"]:checked + div svg {
    display: block;
  }
  
  input[type="checkbox"]:disabled + div {
    background-color: var(--bg-subtle);
  }
`;

// Add a style tag to the component file
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = checkboxStyles;
  document.head.appendChild(style);
}

export default Checkbox;