/**
 * @fileoverview Sidebar component for @voilajsx/uikit
 * @description Simple, flexible sidebar component following shadcn patterns
 * @package @voilajsx/uikit
 * @file /src/components/layouts/sidebar.jsx
 */

import { forwardRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Sidebar component for layouts
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Sidebar content
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = forwardRef(({ className, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn(
      "flex h-full w-64 flex-col border-r border-border bg-background",
      className
    )}
    {...props}
  />
));

Sidebar.displayName = "Sidebar";

export { Sidebar };