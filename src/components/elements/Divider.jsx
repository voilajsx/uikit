/**
 * Divider Component
 * 
 * A visual separator between content sections. Provides a simple way to
 * create visual breaks in your layout with support for both horizontal
 * and vertical orientations.
 * 
 * @module components/elements/Divider
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../ThemeProvider';

/**
 * Thickness variants for the divider
 */
const thicknessMap = {
  xs: orientation => orientation === 'horizontal' ? 'h-px' : 'w-px',
  sm: orientation => orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
  md: orientation => orientation === 'horizontal' ? 'h-1' : 'w-1',
  lg: orientation => orientation === 'horizontal' ? 'h-2' : 'w-2',
  xl: orientation => orientation === 'horizontal' ? 'h-3' : 'w-3',
};

/**
 * Variant styles for the divider
 */
const variantMap = {
  default: 'bg-[var(--border-color-default)]',
  primary: 'bg-[var(--primary-color)]',
  secondary: 'bg-[var(--secondary-color)]',
  success: 'bg-[var(--success-color)]',
  danger: 'bg-[var(--danger-color)]',
  warning: 'bg-[var(--warning-color)]',
  info: 'bg-[var(--info-color)]',
  light: 'bg-[var(--light-color)]',
  dark: 'bg-[var(--dark-color)]',
  dashed: 'border-dashed border-[var(--border-color-default)] bg-transparent',
  dotted: 'border-dotted border-[var(--border-color-default)] bg-transparent',
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
 * Divider component for separating content sections.
 * 
 * @param {'horizontal'|'vertical'} orientation - Direction of the divider
 * @param {'default'|'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'dashed'|'dotted'} variant - Style variant of the divider
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} thickness - Thickness of the divider
 * @param {boolean} withText - Whether the divider has text content
 * @param {'left'|'center'|'right'} textPosition - Position of the text (when withText is true)
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Text content for the divider (when withText is true)
 * @param {Object} props - Additional props to pass to the div element
 * @returns {JSX.Element} Divider component
 */
const Divider = ({
  orientation = 'horizontal',
  variant = 'default',
  thickness = 'sm',
  withText = false,
  textPosition = 'center',
  className,
  style,
  children,
  ...props
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme
  const componentStyles = getComponentStyles(theme, 'Divider', variant);
  
  // Get thickness class based on orientation
  const thicknessClass = thicknessMap[thickness](orientation);
  
  // If it has text content, we need to handle it differently
  if (withText && orientation === 'horizontal' && children) {
    // Text alignment classes
    const textAlignmentClasses = {
      left: 'before:w-[5%] after:w-[95%]',
      center: 'before:w-[50%] after:w-[50%]',
      right: 'before:w-[95%] after:w-[5%]',
    };
    
    return (
      <div
        className={cn(
          'flex items-center w-full my-[var(--spacing-4)]',
          className
        )}
        role="separator"
        aria-orientation={orientation}
        style={{
          ...componentStyles?.style,
          ...style
        }}
        {...props}
      >
        <div 
          className={cn(
            thicknessClass,
            'flex-grow',
            variantMap[variant] || variantMap.default,
            variant === 'dashed' && 'border-t border-0',
            variant === 'dotted' && 'border-t border-0',
            'mr-[var(--spacing-4)]'
          )}
        ></div>
        <span className="text-[var(--text-secondary)] text-sm whitespace-nowrap px-[var(--spacing-2)]">
          {children}
        </span>
        <div 
          className={cn(
            thicknessClass,
            'flex-grow',
            variantMap[variant] || variantMap.default,
            variant === 'dashed' && 'border-t border-0',
            variant === 'dotted' && 'border-t border-0',
            'ml-[var(--spacing-4)]'
          )}
        ></div>
      </div>
    );
  }
  
  // Regular divider (no text)
  return (
    <div
      className={cn(
        // Base style for regular divider
        variantMap[variant] || variantMap.default,
        thicknessClass,
        variant === 'dashed' && 'border',
        variant === 'dotted' && 'border',
        
        // Orientation-specific styles
        orientation === 'horizontal' 
          ? 'w-full my-[var(--spacing-4)]' 
          : 'h-full mx-[var(--spacing-4)]',
        
        // Theme classes
        componentStyles?.className,
        
        // Custom className
        className
      )}
      role="separator"
      aria-orientation={orientation}
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    />
  );
};

// Set display name for React DevTools
Divider.displayName = 'Divider';

export default Divider;