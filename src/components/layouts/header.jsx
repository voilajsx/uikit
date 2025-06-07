/**
 * @fileoverview Header component for @voilajsx/uikit
 * @description Simple, flexible header component following shadcn patterns
 * @package @voilajsx/uikit
 * @file /src/components/layouts/header.jsx
 */

import { forwardRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Header component for page layouts
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Header content
 * @returns {JSX.Element} Header component
 */
const Header = forwardRef(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}
    {...props}
  />
));

Header.displayName = "Header";

export { Header };