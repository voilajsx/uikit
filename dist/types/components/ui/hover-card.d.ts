/**
 * HoverCard root component
 */
export const HoverCard: React.FC<HoverCardPrimitive.HoverCardProps>;
/**
 * HoverCard trigger component
 */
export const HoverCardTrigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
/**
 * HoverCard content component with styling
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.align='center'] - Content alignment
 * @param {number} [props.sideOffset=4] - Distance from trigger
 * @param {React.ReactNode} props.children - Content
 * @returns {JSX.Element} HoverCard content
 */
export const HoverCardContent: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * HoverCard arrow component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} HoverCard arrow
 */
export const HoverCardArrow: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as React from "react";
//# sourceMappingURL=hover-card.d.ts.map