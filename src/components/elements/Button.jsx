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
import { useTheme } from '../../ThemeProvider';

/**
 * Size variants for the button
 */
const sizeMap = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5',
  xl: 'text-xl px-6 py-3',
  '2xl': 'text-2xl px-8 py-4',
};


/**
 * Style variants for the button
 */
/**
 * Style variants for the button
 */
const variantMap = {
    // Solid variants
    primary: 'bg-[var(--primary-color)] text-[var(--light-soft)] hover:bg-[var(--primary-dark)] transition-colors cursor-pointer focus-visible:ring-[var(--primary-color)]',
    secondary: 'bg-[var(--secondary-color)] text-[var(--light-soft)] hover:bg-[var(--secondary-dark)] transition-colors cursor-pointer focus-visible:ring-[var(--secondary-color)]',
    success: 'bg-[var(--success-color)] text-[var(--light-soft)] hover:bg-[var(--success-dark)] transition-colors cursor-pointer focus-visible:ring-[var(--success-color)]',
    danger: 'bg-[var(--danger-color)] text-[var(--light-soft)] hover:bg-[var(--danger-dark)] transition-colors cursor-pointer focus-visible:ring-[var(--danger-color)]',
    warning: 'bg-[var(--warning-color)] text-[var(--light-soft)] hover:bg-[var(--warning-dark)] transition-colors cursor-pointer focus-visible:ring-[var(--warning-color)]',
    info: 'bg-[var(--info-color)] text-[var(--light-soft)] hover:bg-[var(--info-dark)] transition-colors cursor-pointer focus-visible:ring-[var(--info-color)]',
    light: 'bg-[var(--light-color)] text-[var(--dark-color)] hover:bg-[var(--light-soft)] transition-colors cursor-pointer focus-visible:ring-[var(--primary-color)]',
    dark: 'bg-[var(--dark-color)] text-[var(--light-soft)] hover:bg-[var(--text-secondary)] transition-colors cursor-pointer focus-visible:ring-[var(--dark-color)]',
    
    // Outline variants
    'primary-outline': 'border border-[var(--primary-color)] text-[var(--primary-color)] bg-transparent hover:bg-[var(--primary-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--primary-color)]',
    'secondary-outline': 'border border-[var(--secondary-color)] text-[var(--secondary-color)] bg-transparent hover:bg-[var(--secondary-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--secondary-color)]',
    'success-outline': 'border border-[var(--success-color)] text-[var(--success-color)] bg-transparent hover:bg-[var(--success-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--success-color)]',
    'danger-outline': 'border border-[var(--danger-color)] text-[var(--danger-color)] bg-transparent hover:bg-[var(--danger-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--danger-color)]',
    'warning-outline': 'border border-[var(--warning-color)] text-[var(--warning-color)] bg-transparent hover:bg-[var(--warning-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--warning-color)]',
    'info-outline': 'border border-[var(--info-color)] text-[var(--info-color)] bg-transparent hover:bg-[var(--info-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--info-color)]',
    'light-outline': 'border border-[var(--light-color)] text-[var(--dark-color)] bg-transparent hover:bg-[var(--light-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--light-color)]',
    'dark-outline': 'border border-[var(--dark-color)] text-[var(--dark-color)] bg-transparent hover:bg-[var(--light-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--dark-color)]',
    
    // Soft variants
    'primary-soft': 'bg-[var(--primary-soft)] bg-opacity-10 text-[var(--primary-color)]  hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--primary-color)]',
    'secondary-soft': 'bg-[var(--secondary-soft)] bg-opacity-10 text-[var(--secondary-color)] hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--secondary-color)]',
    'success-soft': 'bg-[var(--success-soft)] bg-opacity-10 text-[var(--success-color)] hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--success-color)]',
    'danger-soft': 'bg-[var(--danger-soft)] bg-opacity-10 text-[var(--danger-color)] hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--danger-color)]',
    'warning-soft': 'bg-[var(--warning-soft)] bg-opacity-10 text-[var(--warning-color)] hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--warning-color)]',
    'info-soft': 'bg-[var(--info-soft)] bg-opacity-10 text-[var(--info-color)] hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--info-color)]',
    'light-soft': 'bg-[var(--light-soft)] bg-opacity-10 text-[var(--dark-color)] hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--light-color)]',
    'dark-soft': 'bg-[var(--dark-soft)] bg-opacity-10 text-[var(--light-soft)] hover:opacity-80 transition-colors cursor-pointer focus-visible:ring-[var(--dark-color)]',
    
    // Special variants
    outline: 'border border-[var(--primary-color)] text-[var(--primary-color)] bg-transparent hover:bg-[var(--primary-soft)] transition-colors cursor-pointer focus-visible:ring-[var(--primary-color)]',
    ghost: 'text-[var(--primary-color)] bg-transparent hover:bg-[var(--primary-soft)] hover:bg-opacity-10 transition-colors cursor-pointer focus-visible:ring-[var(--primary-color)]',
    link: 'text-[var(--primary-color)] underline bg-transparent p-0 hover:text-[var(--primary-dark)] transition-colors cursor-pointer focus-visible:ring-[var(--primary-color)]'
  }

/**
 * Helper function to get component styles from theme
 */
const getComponentStyles = (theme, componentName, variant = null) => {
  if (!theme?.components) return null;
  
  // Get base component styles
  const componentStyles = theme.components[componentName] || null;
  if (!componentStyles) return null;
  
  // If variant is provided and variant styles exist, merge with base styles
  if (variant && componentStyles.variants && componentStyles.variants[variant]) {
    return {
      ...componentStyles,
      style: {
        ...(componentStyles.style || {}),
        ...(componentStyles.variants[variant].style || {})
      },
      className: cn(
        componentStyles.className || '',
        componentStyles.variants[variant].className || ''
      )
    };
  }
  
  return componentStyles;
};

/**
 * Button component for user interactions.
 * 
 * @param {'primary'|'secondary'|'outline'|'ghost'|'link'|'danger'} variant - Visual style variant
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'} size - Size of the button
 * @param {'button'|'submit'|'reset'} type - HTML button type
 * @param {boolean} disabled - Whether the button is disabled
 * @param {boolean} fullWidth - Whether the button should take full width
 * @param {React.ReactNode} leftIcon - Icon to display before button text
 * @param {React.ReactNode} rightIcon - Icon to display after button text
 * @param {boolean} isLoading - Whether to show loading state
 * @param {string} loadingText - Text to display during loading (replaces children)
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Button content
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
  style,
  children,
  ...props
}, ref) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme, including variant-specific styles if available
  const componentStyles = getComponentStyles(theme, 'Button', variant);
  
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-medium rounded-[var(--radius-default)]',
        'transition-all duration-[var(--duration-normal)] ease-[var(--timing-ease)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        
        // Size and variant
        sizeMap[size],
        variantMap[variant],
        
        // States
        (disabled || isLoading) && 'opacity-60 cursor-not-allowed',
        fullWidth && 'w-full',
        
        // Theme classes
        componentStyles?.className,
        
        // Custom className (highest priority)
        className
      )}
      // Merge theme styles with inline styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      aria-disabled={disabled || isLoading}
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