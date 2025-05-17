/**
 * Spinner Component
 * 
 * A component to indicate loading or processing state.
 * Displays an animated circular spinner that can be customized
 * with different sizes and colors to match the application theme.
 * 
 * @module components/feedback/Spinner
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the spinner
 */
const sizeMap = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

/**
 * Color variants for the spinner
 */
const variantMap = {
  primary: 'text-[var(--primary-color)]',
  secondary: 'text-[var(--secondary-color)]',
  success: 'text-[var(--success-color)]',
  warning: 'text-[var(--warning-color)]',
  error: 'text-[var(--error-color)]',
  info: 'text-[var(--info-color)]',
};

/**
 * Spinner component for indicating loading states.
 * 
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} size - Controls the spinner size
 * @param {'primary'|'secondary'|'success'|'warning'|'error'|'info'} variant - Color variant
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the container
 * @returns {JSX.Element} Spinner component
 */
const Spinner = ({
  size = 'md',
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'inline-block animate-spin',
        sizeMap[size],
        variantMap[variant],
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        {/* Transparent circle (full track) */}
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        
        {/* Visible portion that appears to rotate */}
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      
      {/* Screen reader text */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Set display name for React DevTools
Spinner.displayName = 'Spinner';

export default Spinner;