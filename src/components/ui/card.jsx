/**
 * @fileoverview Card component for @voilajsx/uikit
 * @description A collection of card components for building card-based interfaces
 * @package @voilajsx/uikit
 * @file /src/components/ui/card.jsx
 */

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

/**
 * Card container component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.asChild=false] - Render as child component
 * @param {React.ReactNode} props.children - Card content
 * @returns {JSX.Element} Card component
 */
const Card = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  
  return (
    <Comp
      ref={ref}
      className={cn(
        "rounded-lg border border-none bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

/**
 * Card header component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.asChild=false] - Render as child component
 * @param {React.ReactNode} props.children - Card header content
 * @returns {JSX.Element} CardHeader component
 */
const CardHeader = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  
  return (
    <Comp
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

/**
 * Card title component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.asChild=false] - Render as child component
 * @param {React.ReactNode} props.children - Card title content
 * @returns {JSX.Element} CardTitle component
 */
const CardTitle = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h3";
  
  return (
    <Comp
      ref={ref}
      className={cn(
        "text-xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

/**
 * Card description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.asChild=false] - Render as child component
 * @param {React.ReactNode} props.children - Card description content
 * @returns {JSX.Element} CardDescription component
 */
const CardDescription = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";
  
  return (
    <Comp
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

/**
 * Card content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.asChild=false] - Render as child component
 * @param {React.ReactNode} props.children - Card content
 * @returns {JSX.Element} CardContent component
 */
const CardContent = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  
  return (
    <Comp 
      ref={ref} 
      className={cn("p-6 pt-0", className)} 
      {...props} 
    />
  );
});
CardContent.displayName = "CardContent";

/**
 * Card footer component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.asChild=false] - Render as child component
 * @param {React.ReactNode} props.children - Card footer content
 * @returns {JSX.Element} CardFooter component
 */
const CardFooter = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  
  return (
    <Comp
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };