/**
 * Badge Component
 * 
 * A small visual indicator for status, labels, or counts. 
 * Used to highlight information, status, or draw attention to specific elements.
 * 
 * @module components/elements/Badge
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../ThemeProvider';

/**
 * Style variants for the badge
 */
const variantMap = {
  primary: 'bg-[var(--primary-color)] text-[var(--light-soft)]',
  secondary: 'bg-[var(--secondary-color)] text-[var(--light-soft)]',
  success: 'bg-[var(--success-color)] text-[var(--light-soft)]',
  warning: 'bg-[var(--warning-color)] text-[var(--light-soft)]',
  danger: 'bg-[var(--danger-color)] text-[var(--light-soft)]',
  info: 'bg-[var(--info-color)] text-[var(--light-soft)]',
  light: 'bg-[var(--light-color)] text-[var(--dark-color)]',
  dark: 'bg-[var(--dark-color)] text-[var(--light-soft)]',
};

/**
 * Size variants for the badge
 */
const sizeMap = {
  sm: 'text-xs px-1.5 py-0.5',
  md: 'text-sm px-2 py-0.5',
  lg: 'text-base px-2.5 py-0.5',
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
 * Badge component for displaying status indicators, labels, or counts.
 * 
 * @param {'primary'|'secondary'|'success'|'warning'|'danger'|'info'} variant - Color variant 
 * @param {'sm'|'md'|'lg'} size - Size of the badge
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Badge content
 * @param {Object} props - Additional props to pass to the span element
 * @returns {JSX.Element} Badge component
 */
const Badge = ({ 
  variant = 'primary',
  size = 'md',
  className,
  style,
  children,
  ...props
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme, including variant-specific styles if available
  const componentStyles = getComponentStyles(theme, 'Badge', variant);
  
  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-medium rounded-[var(--radius-default)]',
        
        // Size and variant
        variantMap[variant],
        sizeMap[size],
        
        // Theme classes
        componentStyles?.className,
        
        // Custom className (highest priority)
        className
      )}
      // Merge theme styles with inline styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      {children}
    </span>
  );
};

// Set display name for React DevTools
Badge.displayName = 'Badge';

export default Badge;