// src/layouts/TwoColumnLayout.jsx
import React from 'react';
import { cn } from '../utils/cn';

/**
 * TwoColumnLayout component that creates a two-column layout with customizable ratio.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.ratio - CSS grid template columns ratio
 * @param {boolean} props.reverse - Whether to reverse the column order
 * @param {string} props.gap - Gap between columns
 * @param {string} props.className - Additional CSS classes
 */
const TwoColumnLayout = ({ 
  children,
  ratio = '1fr 2fr',
  reverse = false,
  gap = 'var(--spacing-6)',
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'min-h-screen',
        className
      )} 
      style={{
        display: 'grid',
        gridTemplateColumns: reverse ? ratio.split(' ').reverse().join(' ') : ratio,
        gap
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Primary content component for the TwoColumnLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const Primary = ({ 
  children, 
  className,
  ...props 
}) => (
  <main 
    className={cn(
      'p-[var(--spacing-6)]',
      'bg-[var(--bg-light)]',
      className
    )} 
    {...props}
  >
    {children}
  </main>
);

/**
 * Secondary content component for the TwoColumnLayout, usually for sidebar content.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const Secondary = ({ 
  children, 
  className,
  ...props 
}) => (
  <aside 
    className={cn(
      'p-[var(--spacing-4)]',
      'bg-[var(--bg-subtle)]',
      className
    )} 
    {...props}
  >
    {children}
  </aside>
);

// Set display names for all components
TwoColumnLayout.displayName = 'TwoColumnLayout';
Primary.displayName = 'TwoColumnLayout.Primary';
Secondary.displayName = 'TwoColumnLayout.Secondary';

// Attach subcomponents to TwoColumnLayout
TwoColumnLayout.Primary = Primary;
TwoColumnLayout.Secondary = Secondary;

export default TwoColumnLayout;