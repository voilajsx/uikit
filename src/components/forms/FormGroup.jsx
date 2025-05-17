/**
 * FormGroup Component
 * 
 * A container component for grouping form controls and their associated labels.
 * Provides consistent spacing and organization for form elements.
 * 
 * @module components/forms/FormGroup
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * FormGroup component provides a wrapper for form controls with consistent spacing.
 * 
 * @param {React.ReactNode} children - Form elements to group (typically Label, Input, and HelperText)
 * @param {string} className - Additional CSS classes to apply
 * @param {string} spacing - Custom spacing between grouped elements (CSS value)
 * @param {Object} props - Additional props to pass to the container div
 * @returns {JSX.Element} FormGroup container component
 */
const FormGroup = ({ 
  children, 
  className,
  spacing = 'var(--spacing-2)',
  ...props
}) => {
  return (
    <div 
      className={cn(
        'mb-[var(--spacing-4)]',
        className
      )} 
      // Set custom CSS variable for internal spacing that child elements can reference
      style={{ '--form-group-spacing': spacing }}
      {...props}
    >
      {children}
    </div>
  );
};

// Set display name for React DevTools
FormGroup.displayName = 'FormGroup';

export default FormGroup;