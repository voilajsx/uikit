/**
 * Badge Component
 * 
 * A small visual indicator for status, labels, or counts. 
 * Used to highlight information, status, or draw attention to specific elements.
 * 
 * @module components/elements/Badge
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Style variants for the badge
 */
const variantMap = {
  primary: 'bg-[var(--primary-color)] text-white',
  secondary: 'bg-[var(--secondary-color)] text-white',
  success: 'bg-[var(--success-color)] text-white',
  warning: 'bg-[var(--warning-color)] text-white',
  error: 'bg-[var(--error-color)] text-white',
  info: 'bg-[var(--info-color)] text-white',
};

/**
 * Size variants for the badge
 */
const sizeMap = {
  sm: 'text-xs px-1.5 py-0.5',
  md: 'text-sm px-2 py-0.5',
  lg: 'text-base px-2.5 py-0.5',
};

/**
 * Badge component for displaying status indicators, labels, or counts.
 * 
 * @param {'primary'|'secondary'|'success'|'warning'|'error'|'info'} variant - Color variant 
 * @param {'sm'|'md'|'lg'} size - Size of the badge
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Badge content
 * @param {Object} props - Additional props to pass to the span element
 * @returns {JSX.Element} Badge component
 */
const Badge = ({ 
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-medium rounded-full',
        
        // Size and variant
        variantMap[variant],
        sizeMap[size],
        
        // Custom className
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

// Set display name for React DevTools
Badge.displayName = 'Badge';

export default Badge;