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
import { useTheme } from '../../ThemeProvider';

/**
 * Size variants for the link
 */
const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

/**
 * Style variants for the link
 */
const variantMap = {
  primary: 'text-[var(--primary-color)] hover:text-[var(--primary-dark)]',
  secondary: 'text-[var(--secondary-color)] hover:text-[var(--secondary-dark)]',
  success: 'text-[var(--success-color)] hover:opacity-80',
  danger: 'text-[var(--danger-color)] hover:opacity-80',
  warning: 'text-[var(--warning-color)] hover:opacity-80',
  info: 'text-[var(--info-color)] hover:opacity-80',
  light: 'text-[var(--light-color)] hover:opacity-80',
  dark: 'text-[var(--dark-color)] hover:text-[var(--dark-soft)]',
  subtle: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
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
 * Link component for navigation and hyperlinks.
 * 
 * @param {Object} props - Component props
 * @param {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'subtle')} [props.variant='primary'] - Color variant
 * @param {('xs'|'sm'|'md'|'lg'|'xl'|'2xl')} [props.size='md'] - Text size
 * @param {boolean} [props.underline=true] - Whether to show underline
 * @param {boolean} [props.external=false] - Whether link points to an external site (adds target="_blank" and rel attributes)
 * @param {boolean} [props.disabled=false] - Whether the link is disabled
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {Object} [props.style] - Additional inline styles
 * @param {React.ReactNode} props.children - Link content
 * @param {React.Ref<HTMLAnchorElement>} ref - Forwarded ref
 * @returns {JSX.Element} Link component
 */
const Link = forwardRef((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    underline = true,
    external = false,
    disabled = false,
    className,
    style,
    children,
    ...rest
  } = props;

  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme
  const componentStyles = getComponentStyles(theme, 'Link', variant);
  
  // External link props
  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  // Don't navigate if disabled
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <a
      ref={ref}
      className={cn(
        // Base styles
        underline ? 'underline' : 'no-underline',
        'transition-colors duration-[var(--duration-normal)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-opacity-50',
        
        // Size and variant
        sizeMap[size],
        variantMap[variant],
        
        // Disabled state
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        
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
      onClick={handleClick}
      {...externalProps}
      {...rest}
    >
      {children}
      {external && (
        <span className="inline-block ml-1" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      )}
    </a>
  );
});

// Set display name for React DevTools
Link.displayName = 'Link';

export default Link;