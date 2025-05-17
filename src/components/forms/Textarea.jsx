/**
 * Textarea Component
 * 
 * A customized version of the HTML textarea element with consistent styling
 * and states. Supports different sizes, variants, and resize behaviors.
 * 
 * @module components/forms/Textarea
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the Textarea component
 */
const sizeMap = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-4 py-2',
};

/**
 * Style variants for the Textarea component
 */
const variantMap = {
  outline: 'border border-[var(--border-color-default)] bg-white focus:border-[var(--primary-color)]',
  filled: 'border border-transparent bg-[var(--bg-subtle)] focus:bg-white focus:border-[var(--primary-color)]',
  flushed: 'border-b border-[var(--border-color-default)] rounded-none px-0 focus:border-[var(--primary-color)]',
};

/**
 * Resize behavior options for the Textarea component
 */
const resizeMap = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};

/**
 * Textarea component provides a styled multi-line text input with various customization options.
 * 
 * @param {'sm'|'md'|'lg'} size - Controls the textarea size
 * @param {'outline'|'filled'|'flushed'} variant - Controls the visual style
 * @param {'none'|'vertical'|'horizontal'|'both'} resize - Controls how the textarea can be resized
 * @param {number} rows - Number of visible text lines
 * @param {boolean} disabled - Whether the textarea is disabled
 * @param {boolean} error - Whether the textarea is in an error state
 * @param {boolean} fullWidth - Whether the textarea should take full width
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - All other props are passed to the textarea element
 * @returns {JSX.Element} Styled textarea component
 */
const Textarea = forwardRef(({
  size = 'md',
  variant = 'outline',
  resize = 'vertical',
  rows = 3,
  disabled = false,
  error = false,
  fullWidth = true,
  className,
  ...props
}, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      disabled={disabled}
      className={cn(
        // Base styles
        'rounded-[var(--radius-default)]',
        'transition-colors duration-[var(--duration-normal)]',
        'focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50',
        
        // Size, variant, and resize behavior
        sizeMap[size],
        variantMap[variant],
        resizeMap[resize],
        
        // States
        error && 'border-[var(--error-color)] focus:border-[var(--error-color)] focus:ring-[var(--error-color)]',
        disabled && 'opacity-60 cursor-not-allowed bg-[var(--bg-subtle)]',
        
        // Width
        fullWidth && 'w-full',
        
        className
      )}
      aria-invalid={error ? 'true' : 'false'}
      {...props}
    />
  );
});

// Set display name for React DevTools
Textarea.displayName = 'Textarea';

export default Textarea;