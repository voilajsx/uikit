/**
 * @fileoverview Input component for @voilajsx/uikit
 * @description A simple input component with styling
 * @package @voilajsx/uikit
 * @file /src/components/ui/input.jsx
 */

import { forwardRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Input component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type='text'] - Input type
 * @returns {JSX.Element} Input component
 */
const Input = forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };