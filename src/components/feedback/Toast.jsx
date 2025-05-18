/**
 * Toast Component
 * 
 * Displays brief, non-blocking notifications.
 * Part of the Toast system that manages the display and lifecycle of multiple toasts.
 * 
 * @module components/feedback/Toast
 */

import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../ThemeProvider';

/**
 * Variant styling map for different toast types
 */
const variantMap = {
  success: {
    bg: 'bg-[var(--success-color)] bg-opacity-10',
    border: 'border-l-4 border-[var(--success-color)]',
    text: 'text-[var(--success-color)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  warning: {
    bg: 'bg-[var(--warning-color)] bg-opacity-10',
    border: 'border-l-4 border-[var(--warning-color)]',
    text: 'text-[var(--warning-color)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  danger: {
    bg: 'bg-[var(--danger-color)] bg-opacity-10',
    border: 'border-l-4 border-[var(--danger-color)]',
    text: 'text-[var(--danger-color)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  info: {
    bg: 'bg-[var(--info-color)] bg-opacity-10',
    border: 'border-l-4 border-[var(--info-color)]',
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
 * Toast component for brief notifications
 * 
 * @param {'success'|'warning'|'danger'|'info'} variant - The visual style and meaning of the toast
 * @param {string} title - Title for the toast
 * @param {React.ReactNode} icon - Custom icon to replace the default variant icon
 * @param {Function} onClose - Callback function when the toast is closed
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - The toast message content
 * @returns {JSX.Element} Toast component
 */
const Toast = ({
  variant = 'info',
  title,
  icon = null,
  onClose,
  className,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme() || {};
  const componentStyles = getComponentStyles(theme, 'Toast', variant);
  
  const variantStyle = variantMap[variant];
  const customIcon = icon !== null ? icon : variantStyle.icon;
  const [isVisible, setIsVisible] = useState(false);

  // Animation on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  // Animation on unmount
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // Match the CSS transition duration
  };

  return (
    <div
      role="alert"
      className={cn(
        // Base styles
        'rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-lg)]',
        'transform transition-all duration-300 ease-[var(--timing-ease)]',
        'bg-[var(--surface-color)]',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
        variantStyle.border,
        
        // Theme classes
        componentStyles?.className,
        
        // Custom className
        className
      )}
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      <div className="flex">
        {customIcon && (
          <div className={cn('flex-shrink-0 mr-3', variantStyle.text)}>
            {customIcon}
          </div>
        )}
        
        <div className="flex-1">
          {title && (
            <h3 className={cn('font-medium mb-1', variantStyle.text)}>
              {title}
            </h3>
          )}
          <div className="text-[var(--text-primary)]">{children}</div>
        </div>
        
        <button
          type="button"
          onClick={handleClose}
          className={cn(
            'ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg',
            'focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]',
            'hover:bg-opacity-20 hover:bg-[var(--subtle-color)]',
            'text-[var(--text-secondary)]'
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
      </div>
    </div>
  );
};

// Set display name for React DevTools
Toast.displayName = 'Toast';

export default Toast;