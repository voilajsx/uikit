/**
 * @fileoverview Label component for @voilajsx/uikit
 * @description Form label with proper accessibility
 * @package @voilajsx/uikit
 * @file /src/components/ui/label.jsx
 */

import { forwardRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

/**
 * Label component for form controls
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Label component
 */
const Label = forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };