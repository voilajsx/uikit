/**
 * Alert Component
 * 
 * Displays important messages to the user, such as success notifications, 
 * warnings, or error messages. The Alert component is designed to deliver
 * visual feedback about system events or user actions.
 * 
 * @module components/feedback/Alert
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../ThemeProvider';

/**
 * Variant styling map for different alert types
 */
const variantMap = {
  success: {
    bg: 'bg-[var(--success-color)] bg-opacity-10',
    border: 'border-[var(--success-color)] border-opacity-30',
    text: 'text-[var(--success-color)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  warning: {
    bg: 'bg-[var(--warning-color)] bg-opacity-10',
    border: 'border-[var(--warning-color)] border-opacity-30',
    text: 'text-[var(--warning-color)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  danger: {
    bg: 'bg-[var(--danger-color)] bg-opacity-10',
    border: 'border-[var(--danger-color)] border-opacity-30',
    text: 'text-[var(--danger-color)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  info: {
    bg: 'bg-[var(--info-color)] bg-opacity-10',
    border: 'border-[var(--info-color)] border-opacity-30',
    text: 'text-[var(--info-color)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

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
 * Alert component for displaying important messages with various states
 * 
 * @param {'success'|'warning'|'danger'|'info'} variant - The visual style and meaning of the alert
 * @param {string} title - Optional title for the alert
 * @param {React.ReactNode} icon - Custom icon to replace the default variant icon
 * @param {boolean} closable - Whether the alert can be dismissed
 * @param {Function} onClose - Callback function when the alert is closed
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - The alert message content
 * @returns {JSX.Element} Alert component
 */
const Alert = forwardRef(({
  variant = 'info',
  title,
  icon = null,
  closable = false,
  onClose,
  className,
  style,
  children,
  ...props
}, ref) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme, including variant-specific styles if available
  const componentStyles = getComponentStyles(theme, 'Alert', variant);
  
  // Get the variant style
  const variantStyle = variantMap[variant];
  
  // Use provided icon or default from variant
  const customIcon = icon !== null ? icon : variantStyle.icon;

  return (
          <div
      ref={ref}
      role="alert"
      className={cn(
        // Base styles
        'rounded-[var(--radius-lg)] p-4 border',
        variantStyle.bg,
        variantStyle.border,
        
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
      aria-live="polite"
      {...props}
    >
      <div className="flex">
        {/* Icon */}
        {customIcon && (
          <div className={cn('flex-shrink-0 mr-3', variantStyle.text)}>
            {customIcon}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1">
          {/* Title (optional) */}
          {title && (
            <h3 className={cn('font-medium mb-1', variantStyle.text)}>
              {title}
            </h3>
          )}
          {/* Alert message */}
          <div className="text-[var(--text-primary)]">{children}</div>
        </div>
        
        {/* Close button (optional) */}
        {closable && onClose && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg',
              'focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]',
              'hover:bg-opacity-20 hover:bg-[var(--bg-subtle)]',
              variantStyle.text
            )}
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
});

// Set display name for React DevTools
Alert.displayName = 'Alert';

export default Alert;