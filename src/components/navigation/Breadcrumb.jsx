/**
 * Breadcrumb Component
 * 
 * A navigation component that displays a trail showing the user's location in the 
 * application's hierarchy. Helps users understand their current position and 
 * provides easy navigation to parent pages.
 * 
 * @module components/navigation/Breadcrumb
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Breadcrumb component creates a navigation trail for hierarchical page structures.
 * 
 * @param {React.ReactNode} separator - Character or element to separate breadcrumb items (default: '/')
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Breadcrumb.Item components
 * @param {Object} props - Additional props to pass to the nav element
 * @returns {JSX.Element} Breadcrumb navigation component
 */
const Breadcrumb = ({
  separator = '/',
  className,
  children,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-sm', className)}
      {...props}
    >
      <ol className="flex items-center">
        {React.Children.map(children, (child, index) => {
          // Skip non-valid elements
          if (!React.isValidElement(child)) return null;
          
          const isLast = index === React.Children.count(children) - 1;
          
          // Clone the child to pass isLast prop
          const enhancedChild = React.cloneElement(child, { isLast });
          
          return (
            <li className="flex items-center">
              {enhancedChild}
              {/* Add separator between items but not after the last item */}
              {!isLast && (
                <span className="mx-2 text-[var(--text-secondary)]">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

/**
 * Individual item in a breadcrumb trail.
 * 
 * @param {string} href - URL to navigate to when clicked
 * @param {boolean} current - Whether this is the current/active page
 * @param {boolean} isLast - Whether this is the last item (set internally)
 * @param {string} className - Additional CSS classes to apply
 * @param {React.ReactNode} children - Item content
 * @param {Object} props - Additional props to pass to the element
 * @returns {JSX.Element} Breadcrumb item component
 */
const BreadcrumbItem = ({
  href,
  current = false,
  isLast = false, // This is passed internally by the parent
  className,
  children,
  ...props
}) => {
  // Use an <a> tag for links, <span> for current/last item
  const Component = href && !current ? 'a' : 'span';
  
  return (
    <Component
      href={href}
      className={cn(
        current || isLast 
          ? 'font-medium text-[var(--text-primary)]' 
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
        className
      )}
      aria-current={current || isLast ? 'page' : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

// Set display names for React DevTools
Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbItem.displayName = 'Breadcrumb.Item';

// Attach Item as a subcomponent
Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;