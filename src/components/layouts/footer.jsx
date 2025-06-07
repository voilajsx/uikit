/**
 * @fileoverview Footer component for @voilajsx/uikit
 * @description Simple, flexible footer component following shadcn patterns
 * @package @voilajsx/uikit
 * @file /src/components/layouts/footer.jsx
 */

import { forwardRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Footer component for page layouts
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Footer content
 * @returns {JSX.Element} Footer component
 */
const Footer = forwardRef(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn(
      "border-t border-border bg-background",
      className
    )}
    {...props}
  />
));

Footer.displayName = "Footer";

export { Footer };