/**
 * Main Header component - Simplified with consistent props
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'primary'|'black'} [props.variant='default'] - Header variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Header size (width + height + padding)
 * @param {boolean} [props.sticky=true] - Whether header should be sticky
 * @param {React.ReactNode} props.children - Header content slots
 * @returns {JSX.Element} Header component
 */
export const Header: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Header Logo section (always on the left)
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Logo content
 * @returns {JSX.Element} Header logo section
 */
export const HeaderLogo: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Smart Header Navigation (always on the right)
 * @param {Object} props - Component props
 * @param {Array} [props.items=[]] - Navigation items array
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Smart navigation component
 */
export const HeaderNav: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Header variants defined with class-variance-authority
 */
export const headerVariants: (props?: ({
    variant?: "default" | "primary" | "black" | null | undefined;
    sticky?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
/**
 * Container variants for content width and height control
 */
export const containerVariants: (props?: ({
    size?: "sm" | "lg" | "md" | "xl" | "full" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
import React from "react";
//# sourceMappingURL=header.d.ts.map