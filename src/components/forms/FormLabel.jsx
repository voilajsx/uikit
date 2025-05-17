/**
 * FormLabel Component
 * 
 * A label component for form controls with consistent styling.
 * Provides visual indication for required fields and maintains
 * consistent spacing with other form elements.
 * 
 * @module components/forms/FormLabel
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * FormLabel component creates a styled label for form controls.
 * 
 * @param {React.ReactNode} children - Label text content
 * @param {boolean} required - Whether to show required field indicator (*)
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the label element
 * @returns {JSX.Element} Styled form label component
 */
const FormLabel = forwardRef(({ 
  children, 
  required = false,
  className,
  ...props
}, ref) => {
  return (
    <label 
      ref={ref}
      className={cn(
        // Use the form-group-spacing CSS variable for consistent vertical rhythm
        'block mb-[var(--form-group-spacing,var(--spacing-2))]',
        'text-sm font-medium text-[var(--text-primary)]',
        className
      )}
      {...props}
    >
      {children}
      {/* Required field indicator */}
      {required && <span className="ml-1 text-[var(--error-color)]">*</span>}
    </label>
  );
});

// Set display name for React DevTools
FormLabel.displayName = 'FormLabel';

export default FormLabel;