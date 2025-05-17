/**
 * Button Component
 * 
 * A versatile button component that serves as a primary call-to-action element.
 * Supports various styles, sizes, states, and icon placements to accommodate
 * different UI requirements across the application.
 * 
 * @module components/elements/Button
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the button
 */
const sizeMap = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5',
  xl: 'text-xl px-6 py-3',
};

/**
 * Style variants for the button
 */
const variantMap = {
  primary: 'bg-[var(--primary-color)] text-white hover:bg-opacity-90 focus-visible:ring-[var(--primary-color)]',
  secondary: 'bg-[var(--secondary-color)] text-white hover:bg-opacity-90 focus-visible:ring-[var(--secondary-color)]',
  outline: 'border border-[var(--primary-color)] text-[var(--primary-color)] bg-transparent hover:bg-[var(--primary-color)] hover:bg-opacity-10 focus-visible:ring-[var(--primary-color)]',
  ghost: 'text-[var(--primary-color)] bg-transparent hover:bg-[var(--primary-color)] hover:bg-opacity-10 focus-visible:ring-[var(--primary-color)]',
  link: 'text-[var(--primary-color)] underline bg-transparent p-0 hover:text-[var(--primary-dark)] focus-visible:ring-[var(--primary-color)]',
  danger: 'bg-[var(--error-color)] text-white hover:bg-opacity-90 focus-visible:ring-[var(--error-color)]',
};

/**
 * Button component for user interactions.
 * 
 * @param {'primary'|'secondary'|'outline'|'ghost'|'link'|'danger'} variant - Visual style variant
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} size - Size of the button
 * @param {'button'|'submit'|'reset'} type - HTML button type
 * @param {boolean} disabled - Whether the button is disabled
 * @param {boolean} fullWidth - Whether the button should take full width
 * @param {React.ReactNode} leftIcon - Icon to display before button text
 * @param {React.ReactNode} rightIcon - Icon to display after button text
 * @param {boolean} isLoading - Whether to show loading state
 * @param {string} loadingText - Text to display during loading (replaces children)
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Button content
 * @param {Object} props - Additional props to pass to the button element
 * @returns {JSX.Element} Button component
 */
const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  isLoading = false,
  loadingText = null,
  className,
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-medium rounded-[var(--radius-default)]',
        'transition duration-[var(--duration-normal)] ease-[var(--timing-ease)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        
        // Size and variant
        sizeMap[size],
        variantMap[variant],
        
        // States
        (disabled || isLoading) && 'opacity-60 cursor-not-allowed',
        fullWidth && 'w-full',
        
        // Custom className
        className
      )}
      {...props}
    >
      {/* Loading spinner */}
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {/* Left icon */}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
      
      {/* Button text - shows loading text when loading if provided */}
      {isLoading && loadingText ? loadingText : children}
      
      {/* Right icon */}
      {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
});

// Set display name for React DevTools
Button.displayName = 'Button';

export default Button;