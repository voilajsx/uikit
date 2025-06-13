/**
 * Main Footer component - Simplified with consistent props
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'muted'|'dark'} [props.variant='default'] - Footer variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Footer size (width + padding + spacing)
 * @param {React.ReactNode} props.children - Footer content
 * @returns {JSX.Element} Footer component
 */
export const Footer: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Basic Footer - Simple row layout with navigation links
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.logo] - Footer logo/brand
 * @param {Array} [props.links=[]] - Navigation links
 * @param {React.ReactNode} [props.social] - Social media links
 * @param {React.ReactNode} [props.copyright] - Copyright text
 * @returns {JSX.Element} Basic footer layout
 */
export const FooterBasic: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Advanced Footer - Multi-column layout with organized sections (up to 5 columns)
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.brand] - Brand section (logo + description)
 * @param {Array} [props.columns=[]] - Footer columns with links
 * @param {React.ReactNode} [props.newsletter] - Newsletter signup
 * @param {React.ReactNode} [props.social] - Social media links
 * @param {React.ReactNode} [props.legal] - Legal links (privacy, terms, etc.)
 * @param {React.ReactNode} [props.copyright] - Copyright text
 * @returns {JSX.Element} Advanced footer layout
 */
export const FooterAdvanced: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Footer Brand component for advanced layout
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.logo] - Brand logo
 * @param {string} [props.description] - Brand description
 * @param {React.ReactNode} [props.contact] - Contact information
 * @returns {JSX.Element} Footer brand section
 */
export const FooterBrand: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Footer Social component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {Array} [props.links=[]] - Social media links
 * @returns {JSX.Element} Footer social links
 */
export const FooterSocial: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Footer variants defined with class-variance-authority
 */
export const footerVariants: (props?: ({
    variant?: "default" | "dark" | "muted" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
/**
 * Container variants for content width and spacing control
 */
export const containerVariants: (props?: ({
    size?: "sm" | "lg" | "md" | "xl" | "full" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
import React from "react";
//# sourceMappingURL=footer.d.ts.map