/**
 * Card Component
 * 
 * A versatile container component that groups related content and actions.
 * Uses the compound component pattern with Header, Body, and Footer sub-components.
 * 
 * @module components/display/Card
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Visual variants for the card
 */
const variantMap = {
  default: 'bg-white border border-[var(--border-color-default)] shadow-[var(--shadow-default)]',
  elevated: 'bg-white border border-[var(--border-color-default)] shadow-[var(--shadow-lg)]',
  outline: 'bg-white border-2 border-[var(--border-color-default)] shadow-none',
  filled: 'bg-[var(--bg-subtle)] border border-[var(--border-color-default)] shadow-none',
};

/**
 * Card component for grouping related content and actions.
 * 
 * @param {'default'|'elevated'|'outline'|'filled'} variant - Visual style variant
 * @param {boolean} hoverable - Whether to show hover effects
 * @param {boolean} interactive - Whether the card is clickable
 * @param {Function} onClick - Click handler (used when interactive is true)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Card content
 * @param {Object} props - Additional props for the element
 * @returns {JSX.Element} Card component
 */
const Card = forwardRef(({ 
  variant = 'default',
  hoverable = false,
  interactive = false,
  onClick,
  className,
  children,
  ...props
}, ref) => {
  // Determine element type based on interactive prop
  const Element = interactive ? 'button' : 'div';
  
  return (
    <Element
      ref={ref}
      onClick={interactive ? onClick : undefined}
      className={cn(
        'rounded-[var(--radius-lg)] transition-all duration-[var(--duration-normal)]',
        variantMap[variant],
        hoverable && 'hover:shadow-[var(--shadow-lg)]',
        interactive && [
          'cursor-pointer hover:shadow-[var(--shadow-lg)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2',
          'w-full text-left'
        ],
        className
      )}
      type={interactive ? 'button' : undefined}
      {...props}
    >
      {children}
    </Element>
  );
});

/**
 * Card header component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Header content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card header component
 */
const CardHeader = ({ 
  className,
  children,
  ...props 
}) => (
  <div 
    className={cn(
      'px-6 py-4 border-b border-[var(--border-color-default)]',
      'font-medium text-lg',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

/**
 * Card body component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Body content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card body component
 */
const CardBody = ({ 
  className,
  children,
  ...props 
}) => (
  <div 
    className={cn(
      'px-6 py-4',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

/**
 * Card footer component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Footer content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card footer component
 */
const CardFooter = ({ 
  className,
  children,
  ...props 
}) => (
  <div 
    className={cn(
      'px-6 py-4 border-t border-[var(--border-color-default)]',
      'bg-[var(--bg-subtle)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Set display names for React DevTools
Card.displayName = 'Card';
CardHeader.displayName = 'Card.Header';
CardBody.displayName = 'Card.Body';
CardFooter.displayName = 'Card.Footer';

// Attach sub-components to Card
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;