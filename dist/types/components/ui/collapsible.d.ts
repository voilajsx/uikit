/**
 * Main Collapsible component
 * @param {Object} props - Component props
 * @param {boolean} [props.open] - Controlled open state
 * @param {boolean} [props.defaultOpen=false] - Default open state
 * @param {Function} [props.onOpenChange] - Open state change handler
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Collapsible content
 * @returns {JSX.Element} Collapsible component
 */
export const Collapsible: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Collapsible trigger component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Trigger content
 * @returns {JSX.Element} Collapsible trigger
 */
export const CollapsibleTrigger: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Collapsible content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content to collapse
 * @returns {JSX.Element} Collapsible content
 */
export const CollapsibleContent: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Hook to use collapsible context
 */
export function useCollapsible(): {};
import React from "react";
//# sourceMappingURL=collapsible.d.ts.map