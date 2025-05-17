/**
 * Link Component
 * 
 * A styled anchor element for navigation and linking. Provides consistent
 * styling with different color variants and sizes to match the application
 * design system.
 * 
 * @module components/elements/Link
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the link
 */
const sizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

/**
 * Style variants for the link
 */
const variantMap = {
  primary: 'text-[var(--primary-color)] hover:text-[var(--primary-dark)]',
  secondary: 'text-[var(--secondary-color)] hover:text-opacity-80',
  subtle: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
};

/**
 * Link component for navigation and hyperlinks.
 * 
 * @param {Object} props - Component props
 * @param {('primary'|'secondary'|'subtle')} [props.variant='primary'] - Color variant
 * @param {('sm'|'md'|'lg')} [props.size='md'] - Text size
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.ReactNode} props.children - Link content
 * @param {React.Ref<HTMLAnchorElement>} ref - Forwarded ref
 * @returns {JSX.Element} Link component
 */
const Link = forwardRef((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...rest
  } = props;

  return (
    <a
      ref={ref}
      className={cn(
        // Base styles
        'underline transition-colors duration-[var(--duration-normal)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-opacity-50',
        
        // Size and variant
        sizeMap[size],
        variantMap[variant],
        
        // Custom className
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
});

// Set display name for React DevTools
Link.displayName = 'Link';

export default Link;