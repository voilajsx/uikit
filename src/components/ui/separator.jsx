/**
 * @fileoverview Separator component for @voilajsx/uikit
 * @description Visual separator line
 * @package @voilajsx/uikit
 * @file /src/components/ui/separator.jsx
 */

import { forwardRef } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../lib/utils';

/**
 * Separator component for visual division
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {string} [props.orientation='horizontal'] - Orientation
 * @param {boolean} [props.decorative=true] - Decorative styling
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Separator component
 */
const Separator = forwardRef(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };