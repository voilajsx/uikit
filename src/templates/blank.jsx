/**
 * @fileoverview Blank template for @voilajsx/uikit
 * @description Minimal layout template with simple container, no navigation
 * @package @voilajsx/uikit
 * @file /src/templates/blank.jsx
 */

import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { Container } from "../components/layouts/container";

/**
 * Blank layout template with minimal container
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.containerProps] - Props to pass to Container component
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element} Blank template component
 */
const BlankTemplate = forwardRef(({ 
  className,
  containerProps,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn("min-h-screen bg-background", className)}
      {...props}
    >
      <Container {...containerProps}>
        {children}
      </Container>
    </div>
  );
});

BlankTemplate.displayName = "BlankTemplate";

export { BlankTemplate };