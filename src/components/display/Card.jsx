/**
 * Card Component
 * 
 * A versatile container component that groups related content and actions.
 * Uses the compound component pattern with Header, Body, and Footer sub-components.
 * Enhanced with theme customization support.
 * 
 * @module components/display/Card
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../ThemeProvider';

/**
 * Visual variants for the card
 */
const variantMap = {
  default: 'bg-[var(--surface-color)] border border-[var(--border-color-default)] shadow-[var(--shadow-default)]',
  elevated: 'bg-[var(--surface-color)] border border-[var(--border-color-default)] shadow-[var(--shadow-lg)]',
  outline: 'bg-[var(--surface-color)] border-2 border-[var(--border-color-default)] shadow-none',
  filled: 'bg-[var(--subtle-color)] border border-[var(--border-color-default)] shadow-none',
};

/**
 * Helper function to get component styles from theme
 */
const getComponentStyles = (theme, componentName, variant = null) => {
  if (!theme?.components) return null;
  
  // Get base component styles
  const componentStyles = theme.components[componentName] || null;
  if (!componentStyles) return null;
  
  // If variant is provided and variant styles exist, merge with base styles
  if (variant && componentStyles.variants && componentStyles.variants[variant]) {
    return {
      ...componentStyles,
      style: {
        ...(componentStyles.style || {}),
        ...(componentStyles.variants[variant].style || {})
      },
      className: cn(
        componentStyles.className || '',
        componentStyles.variants[variant].className || ''
      )
    };
  }
  
  return componentStyles;
};

/**
 * Card component for grouping related content and actions.
 * 
 * @param {'default'|'elevated'|'outline'|'filled'} variant - Visual style variant
 * @param {boolean} hoverable - Whether to show hover effects
 * @param {boolean} interactive - Whether the card is clickable
 * @param {Function} onClick - Click handler (used when interactive is true)
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
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
  style,
  children,
  ...props
}, ref) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'Card', variant);
  
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
        componentStyles?.className, // Apply theme class if available
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
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
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Header content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card header component
 */
const CardHeader = ({ 
  className,
  style,
  children,
  ...props 
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'CardHeader');
  
  return (
    <div 
      className={cn(
        'px-6 py-4 border-b border-[var(--border-color-default)]',
        'font-medium text-lg',
        componentStyles?.className, // Apply theme class if available
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card body component
 * 
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Body content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card body component
 */
const CardBody = ({ 
  className,
  style,
  children,
  ...props 
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'CardBody');
  
  return (
    <div 
      className={cn(
        'px-6 py-4',
        componentStyles?.className, // Apply theme class if available
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card footer component
 * 
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Footer content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card footer component
 */
const CardFooter = ({ 
  className,
  style,
  children,
  ...props 
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'CardFooter');
  
  return (
    <div 
      className={cn(
        'px-6 py-4 border-t border-[var(--border-color-default)]',
        'bg-[var(--subtle-color)]',
        componentStyles?.className, // Apply theme class if available
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

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