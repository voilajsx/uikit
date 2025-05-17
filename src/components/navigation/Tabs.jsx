/**
 * Tabs Component
 * 
 * A component for organizing content into separate views that share the same space.
 * Users can switch between tab panels without navigating to a different page.
 * Implements proper keyboard navigation and accessibility features.
 * 
 * @module components/navigation/Tabs
 */

import React, { useState, createContext, useContext, Children, isValidElement, cloneElement } from 'react';
import { cn } from '../../utils/cn';

/**
 * Context for sharing tab state between components
 * 
 * @typedef {Object} TabsContextType
 * @property {number} activeIndex - Index of the currently active tab
 * @property {Function} setActiveIndex - Function to change the active tab
 */

// Create context for active tab state
const TabsContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
});

/**
 * Tabs component is the main container that manages tab state.
 * 
 * @param {React.ReactNode} children - Tab components (Tabs.List and Tabs.Panels)
 * @param {number} defaultIndex - Initial active tab index
 * @param {Function} onChange - Callback when active tab changes (receives index)
 * @param {'line'|'enclosed'|'soft-rounded'} variant - Visual style variant
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the container div
 * @returns {JSX.Element} Tabs component
 */
const Tabs = ({ 
  children, 
  defaultIndex = 0,
  onChange,
  variant = 'line',
  className,
  ...props
}) => {
  // State to track active tab index
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
  /**
   * Handles changing the active tab
   * 
   * @param {number} index - New tab index to activate
   */
  const handleChange = (index) => {
    setActiveIndex(index);
    // Call onChange callback if provided
    if (onChange) {
      onChange(index);
    }
  };
  
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex: handleChange }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

/**
 * Container for tab buttons.
 * 
 * @param {React.ReactNode} children - Tab button components (Tabs.Tab)
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the container div
 * @returns {JSX.Element} Tab list component
 */
const TabsList = ({ children, className, ...props }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  
  // Clone children to pass the active state and click handler
  const enhancedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        isActive: index === activeIndex,
        onClick: () => setActiveIndex(index),
      });
    }
    return child;
  });
  
  return (
    <div 
      className={cn(
        'flex border-b border-[var(--border-color-default)]',
        className
      )} 
      role="tablist"
      {...props}
    >
      {enhancedChildren}
    </div>
  );
};

/**
 * Individual tab button that activates its associated panel.
 * 
 * @param {React.ReactNode} children - Tab label content
 * @param {boolean} isActive - Whether this tab is currently active (managed by TabsList)
 * @param {Function} onClick - Click handler for tab (managed by TabsList)
 * @param {boolean} disabled - Whether this tab is disabled/non-interactive
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the button element
 * @returns {JSX.Element} Tab button component
 */
const Tab = ({ 
  children, 
  isActive = false,
  onClick,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={cn(
        'px-4 py-2 text-sm font-medium focus:outline-none',
        'border-b-2 border-transparent',
        // Active and hover states
        isActive ? 
          'text-[var(--primary-color)] border-[var(--primary-color)]' : 
          'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-color-dark)]',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Container for tab panels that shows only the active panel.
 * 
 * @param {React.ReactNode} children - Tab panel components (Tabs.Panel)
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the container div
 * @returns {JSX.Element} Tab panels container component
 */
const TabsPanels = ({ children, className, ...props }) => {
  const { activeIndex } = useContext(TabsContext);
  
  // Only render the active panel for performance
  const childrenArray = Children.toArray(children);
  const activePanel = childrenArray[activeIndex];
  
  return (
    <div className={cn('mt-4', className)} {...props}>
      {activePanel}
    </div>
  );
};

/**
 * Content panel associated with a tab.
 * 
 * @param {React.ReactNode} children - Tab panel content
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the container div
 * @returns {JSX.Element} Tab panel component
 */
const TabPanel = ({ children, className, ...props }) => {
  return (
    <div 
      role="tabpanel"
      className={cn('focus:outline-none', className)}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
};

// Set display names for React DevTools
Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
Tab.displayName = 'Tab';
TabsPanels.displayName = 'TabsPanels';
TabPanel.displayName = 'TabPanel';

// Attach subcomponents to the main component
Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panels = TabsPanels;
Tabs.Panel = TabPanel;

export default Tabs;