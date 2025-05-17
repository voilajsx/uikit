/**
 * Accordion Component
 * 
 * A component to display collapsible content panels for presenting information in a limited space.
 * Uses the compound component pattern with Item, Button, and Panel sub-components.
 * 
 * @module components/display/Accordion
 */

import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../utils/cn';

/**
 * Context for sharing state between accordion components
 */
const AccordionContext = createContext({
  expandedItems: [],
  toggleItem: () => {},
  allowMultiple: false
});

/**
 * Accordion component for displaying collapsible content panels.
 * 
 * @param {number|number[]} defaultIndex - Default panels to open
 * @param {boolean} allowMultiple - Whether multiple panels can be open at once
 * @param {'outline'|'default'} variant - Visual style variant
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Accordion items
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Accordion component
 */
const Accordion = ({ 
  defaultIndex = [], 
  allowMultiple = false,
  variant = 'default',
  className, 
  children,
  ...props 
}) => {
  // Initialize expandedItems state from defaultIndex
  const [expandedItems, setExpandedItems] = useState(
    Array.isArray(defaultIndex) ? defaultIndex : [defaultIndex].filter(Boolean)
  );
  
  /**
   * Toggle the expanded state of an accordion item
   * 
   * @param {number} index - Index of the item to toggle
   */
  const toggleItem = (index) => {
    if (allowMultiple) {
      // Toggle the item in multi-select mode
      setExpandedItems(prev => 
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      // In single select mode, either select the item or select none
      setExpandedItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };
  
  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem, allowMultiple }}>
      <div 
        className={cn(
          'divide-y divide-[var(--border-color-default)]',
          variant === 'outline' && 'border border-[var(--border-color-default)] rounded-[var(--radius-default)]',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          // Clone the child to inject the index if it's an AccordionItem
          if (React.isValidElement(child) && child.type.displayName === 'AccordionItem') {
            return React.cloneElement(child, { index });
          }
          return child;
        })}
      </div>
    </AccordionContext.Provider>
  );
};

/**
 * Accordion item component
 * 
 * @param {number} index - Item index (injected by Accordion)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Item content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Accordion item component
 */
const AccordionItem = ({ 
  children, 
  index, 
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn('border-0', className)}
      {...props}
    >
      {React.Children.map(children, child => {
        // Pass the index to AccordionButton and AccordionPanel
        if (
          React.isValidElement(child) && 
          (child.type.displayName === 'AccordionButton' || child.type.displayName === 'AccordionPanel')
        ) {
          return React.cloneElement(child, { index });
        }
        return child;
      })}
    </div>
  );
};

/**
 * Accordion button component
 * 
 * @param {number} index - Item index (injected by AccordionItem)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button content
 * @param {Object} props - Additional props for the button element
 * @returns {JSX.Element} Accordion button component
 */
const AccordionButton = ({ 
  children, 
  index, 
  className,
  ...props 
}) => {
  const { expandedItems, toggleItem } = useContext(AccordionContext);
  const isExpanded = expandedItems.includes(index);
  
  return (
    <button
      type="button"
      onClick={() => toggleItem(index)}
      aria-expanded={isExpanded}
      className={cn(
        'flex justify-between items-center w-full px-[var(--spacing-4)] py-[var(--spacing-3)]',
        'text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]',
        'transition-colors duration-[var(--duration-normal)]',
        isExpanded && 'bg-[var(--bg-subtle)]',
        className
      )}
      {...props}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'transition-transform duration-[var(--duration-normal)]',
          isExpanded && 'transform rotate-180'
        )}
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

/**
 * Accordion panel component
 * 
 * @param {number} index - Item index (injected by AccordionItem)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Panel content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element|null} Accordion panel component or null if collapsed
 */
const AccordionPanel = ({ 
  children, 
  index, 
  className,
  ...props 
}) => {
  const { expandedItems } = useContext(AccordionContext);
  const isExpanded = expandedItems.includes(index);
  
  if (!isExpanded) return null;
  
  return (
    <div
      className={cn(
        'px-[var(--spacing-4)] py-[var(--spacing-3)]',
        'animate-in fade-in-50 slide-in-from-top-1 duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Set display names for React DevTools
Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionButton.displayName = 'AccordionButton';
AccordionPanel.displayName = 'AccordionPanel';

// Attach sub-components to Accordion
Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;

export default Accordion;