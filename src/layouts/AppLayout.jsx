// src/layouts/AppLayout.jsx
import React from 'react';
import { cn } from '../utils/cn';

/**
 * AppLayout component that combines header, sidebar, and footer for a complete application layout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const AppLayout = ({ 
  children,
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'min-h-screen flex flex-col',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Header component for the AppLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const Header = ({ 
  children, 
  className,
  ...props 
}) => (
  <header 
    className={cn(
      'bg-white border-b border-[var(--border-color-default)]',
      'w-full h-[var(--header-height)]',
      'z-[var(--z-index-sticky)]',
      className
    )} 
    {...props}
  >
    {children}
  </header>
);

/**
 * Content component for the AppLayout, contains Sidebar and Main.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const Content = ({ 
  children, 
  className,
  ...props 
}) => (
  <div 
    className={cn(
      'flex flex-1 overflow-hidden',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

/**
 * Sidebar component for the AppLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.width - Width of the sidebar
 * @param {string} props.className - Additional CSS classes
 */
const Sidebar = ({ 
  children, 
  className,
  width = 'var(--sidebar-width, 18rem)',
  ...props 
}) => (
  <aside 
    className={cn(
      'bg-[var(--bg-subtle)] border-r border-[var(--border-color-default)]',
      'h-full overflow-y-auto',
      className
    )} 
    style={{ width }}
    {...props}
  >
    {children}
  </aside>
);

/**
 * Main content component for the AppLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const Main = ({ 
  children, 
  className,
  ...props 
}) => (
  <main 
    className={cn(
      'flex-1 overflow-y-auto',
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
 * Footer component for the AppLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const Footer = ({ 
  children, 
  className,
  ...props 
}) => (
  <footer 
    className={cn(
      'bg-[var(--bg-subtle)] border-t border-[var(--border-color-default)]',
      'w-full h-[var(--footer-height)]',
      className
    )} 
    {...props}
  >
    {children}
  </footer>
);

// Set display names for all components
AppLayout.displayName = 'AppLayout';
Header.displayName = 'AppLayout.Header';
Content.displayName = 'AppLayout.Content';
Sidebar.displayName = 'AppLayout.Sidebar';
Main.displayName = 'AppLayout.Main';
Footer.displayName = 'AppLayout.Footer';

// Attach subcomponents to AppLayout
AppLayout.Header = Header;
AppLayout.Content = Content;
AppLayout.Sidebar = Sidebar;
AppLayout.Main = Main;
AppLayout.Footer = Footer;

export default AppLayout;