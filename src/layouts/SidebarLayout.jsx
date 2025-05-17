// src/layouts/SidebarLayout.jsx
import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

/**
 * SidebarLayout component for admin interfaces and dashboards with a persistent sidebar navigation.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.sidebarWidth - Width of the sidebar
 * @param {'left'|'right'} props.sidebarPosition - Position of the sidebar
 * @param {boolean} props.collapsible - Whether the sidebar can be collapsed
 * @param {boolean} props.defaultCollapsed - Whether the sidebar is collapsed by default
 * @param {string} props.className - Additional CSS classes
 */
const SidebarLayout = ({ 
  children,
  sidebarWidth = 'var(--sidebar-width, 18rem)',
  sidebarPosition = 'left',
  collapsible = false,
  defaultCollapsed = false,
  className,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  
  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (collapsible && window.innerWidth < 768) {
        setCollapsed(true);
      } else if (defaultCollapsed === false) {
        setCollapsed(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, [collapsible, defaultCollapsed]);

  return (
    <div 
      className={cn(
        'flex min-h-screen',
        sidebarPosition === 'right' && 'flex-row-reverse',
        className
      )} 
      {...props}
    >
      {children}
      
      {collapsible && (
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed(!collapsed)}
          className="fixed bottom-4 left-4 z-[var(--z-index-fixed)] bg-[var(--primary-color)] text-white p-2 rounded-full md:hidden"
        >
          {/* Toggle icon */}
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
            {collapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
};

/**
 * Sidebar component for the SidebarLayout
 */
const Sidebar = ({ 
  children, 
  className,
  collapsed = false,
  ...props 
}) => (
  <aside 
    className={cn(
      'bg-[var(--bg-subtle)] border-r border-[var(--border-color-default)]',
      'fixed md:sticky inset-y-0 left-0 z-[var(--z-index-fixed)] md:z-auto',
      'transition-all duration-[var(--duration-normal)]',
      'overflow-y-auto h-screen',
      collapsed ? 'w-[var(--sidebar-collapsed-width,4rem)]' : 'w-[var(--sidebar-width,18rem)]',
      'transform md:transform-none',
      collapsed ? '-translate-x-full md:translate-x-0' : 'translate-x-0',
      className
    )} 
    {...props}
    role="navigation"
    aria-label="Main Navigation"
  >
    {children}
  </aside>
);

/**
 * Main content component for the SidebarLayout
 */
const Main = ({ 
  children, 
  className,
  ...props 
}) => (
  <main 
    className={cn(
      'flex-1',
      'p-[var(--spacing-6)]',
      'bg-[var(--bg-light)]',
      'overflow-auto',
      'w-full',
      className
    )} 
    {...props}
  >
    {children}
  </main>
);

// Set display names for all components
SidebarLayout.displayName = 'SidebarLayout';
Sidebar.displayName = 'SidebarLayout.Sidebar';
Main.displayName = 'SidebarLayout.Main';

// Attach subcomponents to SidebarLayout
SidebarLayout.Sidebar = Sidebar;
SidebarLayout.Main = Main;

export default SidebarLayout;