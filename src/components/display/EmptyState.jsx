/**
 * EmptyState Component
 * 
 * A component to display a message when no data is available or a section is empty.
 * Provides clear visual indication of empty state with optional icon and action.
 * 
 * @module components/display/EmptyState
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * EmptyState component for displaying when content is unavailable or empty.
 * 
 * @param {string} title - Main heading for the empty state
 * @param {string} description - Optional explanation text
 * @param {React.ReactNode} icon - Optional icon to display
 * @param {React.ReactNode} action - Optional call-to-action button or link
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Additional content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} EmptyState component
 */
const EmptyState = ({
  title,
  description,
  icon,
  action,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'py-12 px-4',
        'flex flex-col items-center justify-center',
        'text-center',
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-[var(--text-secondary)]">
          {React.cloneElement(icon, {
            className: cn('w-12 h-12', icon.props.className)
          })}
        </div>
      )}
      
      <h3 className="text-xl font-medium mb-2 text-[var(--text-primary)]">
        {title}
      </h3>
      
      {description && (
        <p className="text-[var(--text-secondary)] max-w-md mx-auto">
          {description}
        </p>
      )}
      
      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
      
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

// Set display name for React DevTools
EmptyState.displayName = 'EmptyState';

export default EmptyState;