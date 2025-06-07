/**
 * @fileoverview Progress component for @voilajsx/uikit
 * @description Progress bar indicator
 * @package @voilajsx/uikit
 * @file /src/components/ui/progress.jsx
 */

import { forwardRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../lib/utils';

/**
 * Progress component for showing completion status
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {number} [props.value] - Progress value (0-100)
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Progress component
 */
const Progress = forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };