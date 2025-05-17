// src/layouts/CenteredLayout.jsx
import React from 'react';
import { cn } from '../utils/cn';

/**
 * CenteredLayout component for centering content horizontally and optionally vertically.
 * Ideal for forms, login pages, and focused content.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.maxWidth - Maximum width of the centered content
 * @param {boolean} props.verticalCenter - Whether to center content vertically as well
 * @param {string} props.className - Additional CSS classes
 */
const CenteredLayout = ({ 
  children,
  maxWidth = 'var(--content-width-md, 48rem)',
  verticalCenter = false,
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'mx-auto px-[var(--spacing-4)]',
        verticalCenter && 'flex min-h-screen flex-col justify-center items-center',
        className
      )} 
      style={{ maxWidth }}
      {...props}
    >
      {children}
    </div>
  );
};

// Set display name for component
CenteredLayout.displayName = 'CenteredLayout';

export default CenteredLayout;