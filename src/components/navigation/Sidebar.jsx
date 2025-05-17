/**
 * Sidebar Component
 * 
 * A vertical navigation panel component that can be expanded or collapsed.
 * Used for application navigation, providing a consistent location for
 * main navigation options. Supports customizable widths and positioning.
 * 
 * @module components/navigation/Sidebar
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';

/**
 * Sidebar component for application navigation.
 * 
 * @param {boolean} expanded - Controlled state for expansion (if provided)
 * @param {boolean} defaultExpanded - Initial expansion state for uncontrolled component
 * @param {Function} onToggle - Callback when sidebar is toggled
 * @param {string} width - Width of expanded sidebar (CSS value)
 * @param {string} collapsedWidth - Width of collapsed sidebar (CSS value)
 * @param {'left'|'right'} position - Which side of the screen to display on
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Sidebar content
 * @param {Object} props - Additional props to pass to the aside element
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = ({
  expanded: controlledExpanded,
  defaultExpanded = true,
  onToggle,
  width = 'var(--sidebar-width, 18rem)',
  collapsedWidth = 'var(--sidebar-collapsed-width, 4rem)',
  position = 'left',
  className,
  children,
  ...props
}) => {
  // Handle controlled vs uncontrolled state
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : uncontrolledExpanded;

  /**
   * Handles toggling the sidebar expansion state
   */
  const handleToggle = () => {
    // Update internal state if uncontrolled
    if (controlledExpanded === undefined) {
      setUncontrolledExpanded(!isExpanded);
    }
    // Call the onToggle callback if provided
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <aside
      className={cn(
        'h-screen',
        'bg-[var(--bg-subtle)]',
        // Apply border to appropriate side based on position
        position === 'right' 
          ? 'right-0 border-l border-[var(--border-color-default)]' 
          : 'border-r border-[var(--border-color-default)]',
        'overflow-y-auto',
        'transition-all duration-[var(--duration-normal)]',
        'z-[var(--z-index-fixed)]',
        className
      )}
      style={{
        width: isExpanded ? width : collapsedWidth,
      }}
      role="navigation"
      {...props}
    >
      <div className="relative h-full">
        {children}
        
        {/* Toggle button - only rendered when onToggle is provided */}
        {onToggle && (
          <button
            className={cn(
              'absolute p-2 rounded-full',
              'bg-[var(--primary-color)] text-white',
              'focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50',
              // Position based on sidebar position
              position === 'left' ? 'right-0 -mr-3' : 'left-0 -ml-3',
              'top-4',
              'transform transition-transform duration-[var(--duration-normal)]',
              // Rotate arrow when collapsed
              !isExpanded && 'rotate-180'
            )}
            onClick={handleToggle}
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            type="button"
          >
            {/* Arrow icon - direction based on position */}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={position === 'left' 
                  ? "M10 12l-4-4 4-4" // Points left when on left sidebar
                  : "M6 4l4 4-4 4"} // Points right when on right sidebar
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </aside>
  );
};

// Set display name for React DevTools
Sidebar.displayName = 'Sidebar';

export default Sidebar;