/**
 * @fileoverview Checkbox component for @voilajsx/uikit
 * @description Customizable checkbox with checked states
 * @package @voilajsx/uikit
 * @file /src/components/ui/checkbox.jsx
 */

import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Checkbox component with custom styling
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Checkbox component
 */
const Checkbox = forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };