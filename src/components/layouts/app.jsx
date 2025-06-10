/**
 * @fileoverview Container component for @voilajsx/uikit
 * @description A responsive container component with size variants
 * @package @voilajsx/uikit
 * @file /src/components/layouts/container.jsx
 */

import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

/**
 * Container variants defined with class-variance-authority
 */
const containerVariants = cva(
  "mx-auto px-4 sm:px-6 lg:px-8", 
  {
    variants: {
      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      },
      padding: {
        none: "px-0 sm:px-0 lg:px-0",
        sm: "px-2 sm:px-3 lg:px-4",
        md: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12",
      },
    },
    defaultVariants: {
      size: "lg",
      padding: "md",
    },
  }
);

/**
 * Container component for page layouts
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.size='lg'] - Container size variant
 * @param {string} [props.padding='md'] - Container padding variant
 * @param {React.ReactNode} props.children - Container content
 * @returns {JSX.Element} Container component
 */
const Container = forwardRef(({ 
  className, 
  size, 
  padding,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(containerVariants({ size, padding, className }))}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export { Container, containerVariants };