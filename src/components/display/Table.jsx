/**
 * Table Component
 * 
 * A component to display data in rows and columns with consistent styling.
 * Uses the compound component pattern with Head, Body, Row, and Cell sub-components.
 * 
 * @module components/display/Table
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Table component for displaying data in rows and columns.
 * 
 * @param {'simple'|'striped'|'bordered'} variant - Visual style variant
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Table content
 * @param {Object} props - Additional props for the table element
 * @returns {JSX.Element} Table component
 */
const Table = forwardRef(({
  variant = 'simple',
  className,
  children,
  ...props
}, ref) => {
  return (
    <div className="w-full overflow-x-auto">
      <table
        ref={ref}
        className={cn(
          'w-full border-collapse text-left',
          variant === 'bordered' && 'border border-[var(--border-color-default)]',
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
});

/**
 * Table head component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Head content
 * @param {Object} props - Additional props for the thead element
 * @returns {JSX.Element} Table head component
 */
const TableHead = ({
  className,
  children,
  ...props
}) => (
  <thead
    className={cn(
      'border-b border-[var(--border-color-default)]',
      className
    )}
    {...props}
  >
    {children}
  </thead>
);

/**
 * Table body component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Body content
 * @param {Object} props - Additional props for the tbody element
 * @returns {JSX.Element} Table body component
 */
const TableBody = ({
  className,
  children,
  ...props
}) => (
  <tbody
    className={cn(className)}
    {...props}
  >
    {children}
  </tbody>
);

/**
 * Table row component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Row content
 * @param {Object} props - Additional props for the tr element
 * @returns {JSX.Element} Table row component
 */
const TableRow = ({
  className,
  children,
  ...props
}) => (
  <tr
    className={cn(
      'border-b border-[var(--border-color-default)]',
      'hover:bg-[var(--bg-subtle)]',
      className
    )}
    {...props}
  >
    {children}
  </tr>
);

/**
 * Table cell component
 * 
 * @param {'td'|'th'} as - Element type to render
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Cell content
 * @param {Object} props - Additional props for the cell element
 * @returns {JSX.Element} Table cell component
 */
const TableCell = ({
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || 'td';
  
  return (
    <Component
      className={cn(
        'px-4 py-3',
        Component === 'th' && 'font-medium text-[var(--text-primary)]',
        Component === 'td' && 'text-[var(--text-secondary)]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Set display names for React DevTools
Table.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';

// Attach sub-components to Table
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;