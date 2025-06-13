/**
 * Hover Card component for @voilajsx/uikit
 * Rich hover interactions with floating content
 * @module @voilajsx/uikit
 * @file /src/components/ui/hover-card.jsx
 */

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../../lib/utils";

/**
 * HoverCard root component
 */
const HoverCard = HoverCardPrimitive.Root;

/**
 * HoverCard trigger component
 */
const HoverCardTrigger = HoverCardPrimitive.Trigger;

/**
 * HoverCard content component with styling
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.align='center'] - Content alignment
 * @param {number} [props.sideOffset=4] - Distance from trigger
 * @param {React.ReactNode} props.children - Content
 * @returns {JSX.Element} HoverCard content
 */
const HoverCardContent = React.forwardRef(({ 
  className, 
  align = "center", 
  sideOffset = 4, 
  ...props 
}, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

/**
 * HoverCard arrow component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} HoverCard arrow
 */
const HoverCardArrow = React.forwardRef(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cn("fill-border", className)}
    {...props}
  />
));

HoverCardArrow.displayName = HoverCardPrimitive.Arrow.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardArrow };