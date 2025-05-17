/**
 * Input Component
 * 
 * A customized version of the HTML input element with consistent styling, states,
 * and features. Supports different sizes, variants, icons, and states.
 * 
 * @module components/forms/Input
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the Input component
 */
const sizeMap = {
  sm: 'text-sm px-2 py-1 h-8',
  md: 'text-base px-3 py-2 h-10',
  lg: 'text-lg px-4 py-2 h-12',
};

/**
 * Style variants for the Input component
 */
const variantMap = {
  outline: 'border border-[var(--border-color-default)] bg-white focus:border-[var(--primary-color)]',
  filled: 'border border-transparent bg-[var(--bg-subtle)] focus:bg-white focus:border-[var(--primary-color)]',
  flushed: 'border-b border-[var(--border-color-default)] rounded-none px-0 focus:border-[var(--primary-color)]',
};

/**
 * Input component provides a styled text input with various customization options.
 * 
 * @param {'sm'|'md'|'lg'} size - Controls the input size
 * @param {'outline'|'filled'|'flushed'} variant - Controls the visual style
 * @param {boolean} disabled - Whether the input is disabled
 * @param {boolean} error - Whether the input is in an error state
 * @param {boolean} fullWidth - Whether the input should take full width
 * @param {React.ReactNode} leftIcon - Optional icon to display on the left
 * @param {React.ReactNode} rightIcon - Optional icon to display on the right
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - All other props are passed to the input element
 * @returns {JSX.Element} Styled input component
 */
const Input = forwardRef(({
  size = 'md',
  variant = 'outline',
  disabled = false,
  error = false,
  fullWidth = true,
  leftIcon = null,
  rightIcon = null,
  className,
  ...props
}, ref) => {
  return (
    <div 
      className={cn(
        'relative inline-flex items-center',
        fullWidth && 'w-full',
        className
      )}
    >
      {/* Left icon if provided */}
      {leftIcon && (
        <div className="absolute left-3 text-[var(--text-secondary)]">
          {leftIcon}
        </div>
      )}
      
      <input
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base styles
          'rounded-[var(--radius-default)]',
          'transition-colors duration-[var(--duration-normal)]',
          'focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50',
          
          // Size and variant
          sizeMap[size],
          variantMap[variant],
          
          // Icon padding adjustments
          leftIcon && 'pl-10',
          rightIcon && 'pr-10',
          
          // States
          error && 'border-[var(--error-color)] focus:border-[var(--error-color)] focus:ring-[var(--error-color)]',
          disabled && 'opacity-60 cursor-not-allowed bg-[var(--bg-subtle)]',
          
          // Width
          fullWidth && 'w-full',
        )}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
      
      {/* Right icon if provided */}
      {rightIcon && (
        <div className="absolute right-3 text-[var(--text-secondary)]">
          {rightIcon}
        </div>
      )}
    </div>
  );
});

// Set display name for React DevTools
Input.displayName = 'Input';

export default Input;