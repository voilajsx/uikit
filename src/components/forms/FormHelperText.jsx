/**
 * FormHelperText Component
 * 
 * A component for displaying helper text or error messages below form controls.
 * Provides consistent styling for informational and error messages.
 * 
 * @module components/forms/FormHelperText
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * FormHelperText component displays informational or error text for form fields.
 * 
 * @param {React.ReactNode} children - Helper text content
 * @param {boolean} error - Whether to display as an error message
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the paragraph element
 * @returns {JSX.Element} Helper text component with appropriate styling
 */
const FormHelperText = ({ 
  children,
  error = false,
  className,
  ...props
}) => {
  return (
    <p 
      className={cn(
        // Use the form-group-spacing CSS variable for consistent vertical rhythm
        'mt-[var(--form-group-spacing,var(--spacing-2))] text-xs',
        // Different text color based on error state
        error ? 'text-[var(--error-color)]' : 'text-[var(--text-secondary)]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// Set display name for React DevTools
FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;