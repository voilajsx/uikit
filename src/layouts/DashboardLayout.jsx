// src/layouts/DashboardLayout.jsx
import React from 'react';
import { cn } from '../utils/cn';

/**
 * DashboardLayout component designed for data-heavy interfaces with main content and optional widgets.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.columns - CSS grid template columns
 * @param {string} props.gap - Gap between grid items
 * @param {string} props.className - Additional CSS classes
 */
const DashboardLayout = ({ 
  children,
  columns = 'auto 3fr',
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
        gridTemplateColumns: columns,
        gap
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Sidebar component for the DashboardLayout, typically used for filters or navigation.
 */
const Sidebar = ({ 
  children, 
  className,
  ...props 
}) => (
  <aside 
    className={cn(
      'bg-[var(--bg-subtle)]',
      'overflow-y-auto',
      'h-screen sticky top-0',
      'p-[var(--spacing-4)]',
      className
    )} 
    {...props}
  >
    {children}
  </aside>
);

/**
 * Main content component for the DashboardLayout.
 */
const Main = ({ 
  children, 
  className,
  ...props 
}) => (
  <main 
    className={cn(
      'p-[var(--spacing-6)]',
      'bg-[var(--bg-light)]',
      'overflow-auto',
      className
    )} 
    {...props}
  >
    {children}
  </main>
);

/**
 * Widget component for displaying data cards within the DashboardLayout.
 */
const Widget = ({ 
  children, 
  className,
  ...props 
}) => (
  <div 
    className={cn(
      'bg-white',
      'border border-[var(--border-color-default)]',
      'rounded-[var(--radius-lg)]',
      'shadow-[var(--shadow-default)]',
      'p-[var(--spacing-4)]',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

// Set display names for all components
DashboardLayout.displayName = 'DashboardLayout';
Sidebar.displayName = 'DashboardLayout.Sidebar';
Main.displayName = 'DashboardLayout.Main';
Widget.displayName = 'DashboardLayout.Widget';

// Attach subcomponents to DashboardLayout
DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Main = Main;
DashboardLayout.Widget = Widget;

export default DashboardLayout;