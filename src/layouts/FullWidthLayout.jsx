// src/layouts/FullWidthLayout.jsx
import React from 'react';
import { cn } from '../utils/cn';

/**
 * FullWidthLayout component for creating a simple full-width container with customizable max-width.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.maxWidth - Maximum width of the container
 * @param {string} props.className - Additional CSS classes
 */
const FullWidthLayout = ({ 
  children,
  maxWidth = 'var(--content-width-full, 100%)',
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'w-full mx-auto px-[var(--container-padding)]',
        className
      )} 
      style={{ maxWidth }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Container component for the FullWidthLayout, providing centered content with a max-width.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.maxWidth - Maximum width of the container
 * @param {string} props.className - Additional CSS classes
 */
const Container = ({ 
  children, 
  className,
  maxWidth = 'var(--content-width-xl, 80rem)',
  ...props 
}) => (
  <div 
    className={cn(
      'mx-auto w-full',
      className
    )} 
    style={{ maxWidth }}
    {...props}
  >
    {children}
  </div>
);

// Set display names for all components
FullWidthLayout.displayName = 'FullWidthLayout';
Container.displayName = 'FullWidthLayout.Container';

// Attach Container to FullWidthLayout
FullWidthLayout.Container = Container;

export default FullWidthLayout;