/**
 * Select Component
 * 
 * A customized version of the HTML select element with consistent styling
 * and a custom dropdown indicator. Supports different sizes, variants, and states.
 * 
 * @module components/forms/Select
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the Select component
 */
const sizeMap = {
  sm: 'text-sm h-8',
  md: 'text-base h-10',
  lg: 'text-lg h-12',
};

/**
 * Style variants for the Select component
 */
const variantMap = {
  outline: 'border border-[var(--border-color-default)] bg-white focus:border-[var(--primary-color)]',
  filled: 'border border-transparent bg-[var(--bg-subtle)] focus:bg-white focus:border-[var(--primary-color)]',
  flushed: 'border-b border-[var(--border-color-default)] rounded-none focus:border-[var(--primary-color)]',
};

/**
 * Select component provides a styled dropdown selection with a custom arrow indicator.
 * 
 * @param {'sm'|'md'|'lg'} size - Controls the select size
 * @param {'outline'|'filled'|'flushed'} variant - Controls the visual style
 * @param {boolean} disabled - Whether the select is disabled
 * @param {boolean} error - Whether the select is in an error state
 * @param {boolean} fullWidth - Whether the select should take full width
 * @param {React.ReactNode} children - Option elements to be rendered inside the select
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - All other props are passed to the select element
 * @returns {JSX.Element} Styled select component
 */
const Select = forwardRef(({
  size = 'md',
  variant = 'outline',
  disabled = false,
  error = false,
  fullWidth = true,
  children,
  className,
  ...props
}, ref) => {
  return (
    <div className={cn(
      "relative inline-block",
      fullWidth && "w-full",
    )}>
      <select
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base styles
          'appearance-none rounded-[var(--radius-default)]',
          'pr-8 pl-3 py-2', // Extra padding for the arrow
          'transition-colors duration-[var(--duration-normal)]',
          'focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50',
          
          // Size and variant
          sizeMap[size],
          variantMap[variant],
          
          // States
          error && 'border-[var(--error-color)] focus:border-[var(--error-color)] focus:ring-[var(--error-color)]',
          disabled && 'opacity-60 cursor-not-allowed bg-[var(--bg-subtle)]',
          
          // Width
          fullWidth && 'w-full',
          
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      >
        {children}
      </select>
      
      {/* Custom dropdown arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-[var(--text-secondary)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
});

// Set display name for React DevTools
Select.displayName = 'Select';

export default Select;