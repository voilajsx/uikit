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

/**
 * Divider component for separating content sections.
 * 
 * @param {'horizontal'|'vertical'} orientation - Direction of the divider
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the div element
 * @returns {JSX.Element} Divider component
 */
const Divider = ({
  orientation = 'horizontal',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Base style
        'bg-[var(--border-color-default)]',
        
        // Orientation-specific styles
        orientation === 'horizontal' 
          ? 'w-full h-px my-[var(--spacing-4)]' 
          : 'h-full w-px mx-[var(--spacing-4)]',
        
        // Custom className
        className
      )}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
};

// Set display name for React DevTools
Divider.displayName = 'Divider';

export default Divider;