/**
 * @fileoverview Skeleton component for @voilajsx/uikit
 * @description Loading skeleton placeholder
 * @package @voilajsx/uikit
 * @file /src/components/ui/skeleton.jsx
 */

import { cn } from '../../lib/utils';

/**
 * Skeleton component for loading states
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @returns {JSX.Element} Skeleton component
 */
function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
}

export { Skeleton };