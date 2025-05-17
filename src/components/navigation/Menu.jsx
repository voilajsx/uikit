/**
 * Menu Component
 * 
 * A vertical navigation component for sidebar or panel navigation.
 * Used to display a list of navigation items in a vertical structure,
 * often used in application sidebars, navigation drawers, or settings panels.
 * 
 * @module components/navigation/Menu
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Menu component for vertical navigation.
 * 
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Menu items (Menu.Item) and dividers (Menu.Divider)
 * @param {Object} props - Additional props to pass to the nav element
 * @returns {JSX.Element} Menu navigation component
 */
const Menu = ({ 
  className,
  children,
  ...props
}) => {
  return (
    <nav 
      className={cn('space-y-1', className)}
      {...props}
    >
      {children}
    </nav>
  );
};

/**
 * Individual item in a menu.
 * 
 * @param {boolean} active - Whether this is the current/active item
 * @param {React.ReactNode} icon - Optional icon to display before the item text
 * @param {string} href - URL to navigate to when clicked (renders as <a> when provided)
 * @param {Function} onClick - Click handler for when item is selected
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Item content/label
 * @param {Object} props - Additional props to pass to the element
 * @returns {JSX.Element} Menu item component
 */
const MenuItem = ({
  active = false,
  icon = null,
  href,
  onClick,
  className,
  children,
  ...props
}) => {
  // Use <a> for links, <button> for interactive elements without href
  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href } : { type: 'button', onClick };
  
  return (
    <Component
      className={cn(
        'flex w-full items-center px-4 py-2 text-sm rounded-[var(--radius-default)]',
        'transition-colors duration-200',
        // Apply different styles based on active state
        active 
          ? 'bg-[var(--primary-color)] text-white hover:bg-[var(--primary-dark)] hover:text-white' 
          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]',
        className
      )}
      aria-current={active ? 'page' : undefined}
      {...componentProps}
      {...props}
    >
      {/* Render icon with appropriate styling if provided */}
      {icon && (
        <span className={cn(
          'mr-3',
          active ? 'text-white' : 'text-[var(--text-secondary)]'
        )}>
          {icon}
        </span>
      )}
      {children}
    </Component>
  );
};

/**
 * Divider to visually separate groups of menu items.
 * 
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the hr element
 * @returns {JSX.Element} Menu divider component
 */
const MenuDivider = ({
  className,
  ...props
}) => {
  return (
    <hr
      className={cn(
        'my-2 border-t border-[var(--border-color-default)]',
        className
      )}
      {...props}
    />
  );
};

// Set display names for React DevTools
Menu.displayName = 'Menu';
MenuItem.displayName = 'Menu.Item';
MenuDivider.displayName = 'Menu.Divider';

// Attach subcomponents to the main component
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

export default Menu;