/**
 * @fileoverview Textarea component for @voilajsx/uikit
 * @description Multi-line text input
 * @package @voilajsx/uikit
 * @file /src/components/ui/textarea.jsx
 */

import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

/**
 * Textarea component for multi-line text input
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Textarea component
 */
const Textarea = forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };