/**
 * Toast Component
 * 
 * A component to display brief, non-blocking notifications that appear temporarily.
 * Supports different styles, animation, and can be automatically dismissed.
 * Typically used with ToastContext for managing multiple notifications.
 * 
 * @module components/feedback/Toast
 */

import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

/**
 * Variant-specific styling and icons
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
  error: {
    bg: 'bg-[var(--error-color)] bg-opacity-10',
    border: 'border-l-4 border-[var(--error-color)]',
    text: 'text-[var(--error-color)]',
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
 * Toast component for temporary notifications.
 * 
 * @param {'success'|'warning'|'error'|'info'} variant - Visual style variant
 * @param {string} title - Optional title for the toast
 * @param {React.ReactNode} icon - Optional custom icon to display
 * @param {Function} onClose - Callback function when toast is closed
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Toast content
 * @param {Object} props - Additional props to pass to the container
 * @returns {JSX.Element} Toast component
 */
const Toast = ({
  variant = 'info',
  title,
  icon = null,
  onClose,
  className,
  children,
  ...props
}) => {
  // Get variant-specific styling
  const variantStyle = variantMap[variant];
  
  // Use custom icon if provided, otherwise use the default for the variant
  const customIcon = icon !== null ? icon : variantStyle.icon;
  
  // State for animation visibility
  const [isVisible, setIsVisible] = useState(false);

  // Animate in on mount
  useEffect(() => {
    // Use requestAnimationFrame to ensure the DOM has updated before adding the visible class
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  /**
   * Handle closing the toast with exit animation
   */
  const handleClose = () => {
    // Start exit animation
    setIsVisible(false);
    
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 300); // Match the CSS transition duration
  };

  return (
    <div
      role="alert"
      className={cn(
        'rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-lg)]',
        'transform transition-all duration-300 ease-[var(--timing-ease)]',
        'bg-white',
        // Animation classes based on visibility state
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
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
        
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className={cn(
            'ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg',
            'focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]',
            'hover:bg-opacity-20 hover:bg-[var(--bg-subtle)]',
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