/**
 * Alert Component
 * 
 * A component to display important messages to the user, such as success notifications,
 * warnings, or error messages. Supports different visual styles, optional title,
 * custom icons, and a close button.
 * 
 * @module components/feedback/Alert
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Variant-specific styling and icons
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
  error: {
    bg: 'bg-[var(--error-color)] bg-opacity-10',
    border: 'border-[var(--error-color)] border-opacity-30',
    text: 'text-[var(--error-color)]',
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
 * Alert component for displaying status messages, warnings, and other notifications.
 * 
 * @param {'success'|'warning'|'error'|'info'} variant - Visual style variant
 * @param {string} title - Optional title for the alert
 * @param {React.ReactNode} icon - Optional custom icon to display
 * @param {boolean} closable - Whether the alert can be closed
 * @param {Function} onClose - Callback function when close button is clicked
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Alert content
 * @param {Object} props - Additional props to pass to the container
 * @returns {JSX.Element} Alert component
 */
const Alert = ({
  variant = 'info',
  title,
  icon = null,
  closable = false,
  onClose,
  className,
  children,
  ...props
}) => {
  // Get variant-specific styling
  const variantStyle = variantMap[variant];
  
  // Use custom icon if provided, otherwise use the default for the variant
  const customIcon = icon !== null ? icon : variantStyle.icon;

  return (
    <div
      role="alert"
      className={cn(
        'rounded-[var(--radius-lg)] p-4 border',
        variantStyle.bg,
        variantStyle.border,
        className
      )}
      {...props}
    >
      <div className="flex">
        {/* Icon section */}
        {customIcon && (
          <div className={cn('flex-shrink-0 mr-3', variantStyle.text)}>
            {customIcon}
          </div>
        )}
        
        {/* Content section */}
        <div className="flex-1">
          {/* Title if provided */}
          {title && (
            <h3 className={cn('font-medium mb-1', variantStyle.text)}>
              {title}
            </h3>
          )}
          
          {/* Main content */}
          <div className="text-[var(--text-primary)]">{children}</div>
        </div>
        
        {/* Close button if closable and onClose provided */}
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
};

// Set display name for React DevTools
Alert.displayName = 'Alert';

export default Alert;