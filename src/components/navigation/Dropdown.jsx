/**
 * Dropdown Component
 * 
 * A component that displays a floating menu of options triggered by a click.
 * Used for menus, actions, filtering options, and other contextual interfaces.
 * Supports different placements and handles keyboard interactions.
 * 
 * @module components/navigation/Dropdown
 */

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { useClickOutside } from '../../utils/click-outside';

/**
 * Dropdown component displays a floating menu triggered by clicking an element.
 * 
 * @param {React.ReactNode} trigger - Element that triggers the dropdown when clicked
 * @param {'top'|'right'|'bottom'|'left'} placement - Position of dropdown relative to trigger
 * @param {string} className - Additional CSS classes for the dropdown
 * @param {React.ReactNode} children - Dropdown content (usually Dropdown.Item components)
 * @param {Object} props - Additional props to pass to the dropdown container
 * @returns {JSX.Element} Dropdown component
 */
const Dropdown = ({ 
  trigger,
  placement = 'bottom',
  className,
  children,
  ...props
}) => {
  // State to track if dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Reference to dropdown container for click outside detection
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });
  
  // CSS classes for different dropdown placements
  const placementClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };
  
  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscape = (e) => {
      if (isOpen && e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger element */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      
      {/* Dropdown Menu - only rendered when open */}
      {isOpen && (
        <div 
          className={cn(
            'absolute z-[var(--z-index-dropdown)] min-w-[10rem]',
            'bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]',
            'border border-[var(--border-color-default)] py-1',
            placementClasses[placement],
            className
          )}
          {...props}
        >
          {children}
        </div>
      )}
    </div>
  );
};

/**
 * Individual item in a dropdown menu.
 * 
 * @param {React.ReactNode} children - Item content/label
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} icon - Optional icon to display before item text
 * @param {Function} onClick - Click handler when item is selected
 * @param {boolean} disabled - Whether the item is disabled/non-interactive
 * @param {Object} props - Additional props to pass to the button element
 * @returns {JSX.Element} Dropdown item component
 */
const DropdownItem = React.forwardRef(({ 
  children, 
  className,
  icon = null,
  onClick,
  disabled = false,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'flex w-full items-center px-4 py-2 text-left text-sm',
        'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]',
        'transition-colors duration-[var(--duration-fast)]',
        disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent',
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      role="menuitem"
      {...props}
    >
      {/* Render icon if provided */}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
});

/**
 * Divider to visually separate groups of dropdown items.
 * 
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props to pass to the divider element
 * @returns {JSX.Element} Dropdown divider component
 */
const DropdownDivider = ({ className, ...props }) => {
  return (
    <div 
      className={cn(
        'my-1 h-0 border-t border-[var(--border-color-default)]',
        className
      )}
      role="separator"
      {...props}
    />
  );
};

// Set display names for React DevTools
Dropdown.displayName = 'Dropdown';
DropdownItem.displayName = 'DropdownItem';
DropdownDivider.displayName = 'DropdownDivider';

// Attach subcomponents to the main component
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;