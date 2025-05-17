/**
 * Navbar Component
 * 
 * A horizontal navigation bar component for main site navigation.
 * Used at the top of applications and websites to provide consistent
 * navigation and branding across all pages. Supports light and dark variants.
 * 
 * @module components/navigation/Navbar
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Navbar component for site-wide horizontal navigation.
 * 
 * @param {'light'|'dark'} variant - Color scheme variant
 * @param {boolean} sticky - Whether navbar should stick to the top of the viewport
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Navbar content (typically Brand, Items and Item components)
 * @param {Object} props - Additional props to pass to the header element
 * @returns {JSX.Element} Navbar component
 */
const Navbar = ({
  variant = 'light',
  sticky = false,
  className,
  children,
  ...props
}) => {
  return (
    <header
      className={cn(
        'relative flex items-center justify-between',
        'px-[var(--spacing-4)] py-[var(--spacing-3)]',
        // Variant-specific styling
        variant === 'light'
          ? 'bg-white border-b border-[var(--border-color-default)]'
          : 'bg-[var(--bg-dark)] text-[var(--text-light)] border-b border-[var(--bg-dark)]',
        // Sticky positioning when enabled
        sticky && 'sticky top-0 z-[var(--z-index-sticky)]',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
};

/**
 * Brand section of the navbar for logos and site titles.
 * 
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Brand content (typically logo and/or site name)
 * @param {Object} props - Additional props to pass to the div element
 * @returns {JSX.Element} Navbar brand component
 */
const NavbarBrand = ({
  className,
  children,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'flex items-center text-lg font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Container for navbar navigation items.
 * 
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Collection of NavbarItem components
 * @param {Object} props - Additional props to pass to the div element
 * @returns {JSX.Element} Navbar items container component
 */
const NavbarItems = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center space-x-[var(--spacing-4)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Individual navigation item in the navbar.
 * 
 * @param {boolean} active - Whether this is the current/active page
 * @param {string} href - URL to navigate to when clicked (renders as <a> when provided)
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Item content/label
 * @param {Object} props - Additional props to pass to the element
 * @returns {JSX.Element} Navbar item component
 */
const NavbarItem = ({
  active = false,
  href,
  className,
  children,
  ...props
}) => {
  // Use <a> for links, <div> for non-clickable items
  const Component = href ? 'a' : 'div';
  const componentProps = href ? { href } : {};
  
  return (
    <Component
      className={cn(
        'px-[var(--spacing-2)] py-[var(--spacing-1)]',
        // Active state styling
        active
          ? 'text-[var(--primary-color)] font-medium'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
        className
      )}
      aria-current={active ? 'page' : undefined}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
};

// Set display names for React DevTools
Navbar.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarItems.displayName = 'Navbar.Items';
NavbarItem.displayName = 'Navbar.Item';

// Attach subcomponents to the main component
Navbar.Brand = NavbarBrand;
Navbar.Items = NavbarItems;
Navbar.Item = NavbarItem;

export default Navbar;