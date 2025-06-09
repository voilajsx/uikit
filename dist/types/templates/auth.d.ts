/**
 * AuthTemplate - Unified authentication layout with multiple variants
 * Supports all authentication layout patterns through a single component
 * @param {Object} props - Component props
 * @param {string} [props.variant='simple'] - Layout variant ('simple' | 'card' | 'split-gradient' | 'split-image' | 'card-gradient' | 'card-image')
 * @param {string} [props.title] - Page title
 * @param {string} [props.subtitle] - Page subtitle
 * @param {React.ReactNode} [props.logo] - Logo component
 * @param {React.ReactNode} [props.footer] - Footer content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.containerProps] - Container props for customization
 *
 * // Split variant props
 * @param {React.ReactNode} [props.splitContent] - Left side content for split variants
 *
 * // Image variant props
 * @param {string} [props.imageUrl] - Background image URL for image variants
 * @param {string} [props.imageAlt] - Image alt text
 * @param {string} [props.imageOverlay] - Image overlay ('light' | 'dark' | 'none')
 *
 * // Card variant props
 * @param {React.ReactNode} [props.cardContent] - Left side content for card variants
 *
 * @param {React.ReactNode} props.children - Form content
 * @returns {JSX.Element} AuthTemplate component
 */
export function AuthTemplate({ variant, title, subtitle, logo, footer, className, containerProps, splitContent, imageUrl, imageAlt, imageOverlay, cardContent, children, }: {
    variant?: string | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    logo?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string | undefined;
    containerProps?: Object | undefined;
    splitContent?: React.ReactNode;
    imageUrl?: string | undefined;
    imageAlt?: string | undefined;
    imageOverlay?: string | undefined;
    cardContent?: React.ReactNode;
    children: React.ReactNode;
}): JSX.Element;
import React from 'react';
export { AuthTemplate as default };
//# sourceMappingURL=auth.d.ts.map