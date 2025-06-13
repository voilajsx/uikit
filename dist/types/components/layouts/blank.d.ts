/**
 * BlankTemplate - Unified blank page layout with multiple variants
 * Supports all blank page layout patterns through a single component
 * @param {Object} props - Component props
 * @param {string} [props.variant='default'] - Layout variant ('default' | 'card' | 'error' | 'maintenance' | 'suspension')
 * @param {string} [props.title] - Page title
 * @param {string} [props.subtitle] - Page subtitle
 * @param {React.ReactNode} [props.logo] - Logo component
 * @param {React.ReactNode} [props.icon] - Icon component
 * @param {React.ReactNode} [props.actions] - Action buttons (replaces errorActions/maintenanceActions)
 * @param {React.ReactNode} [props.footer] - Footer content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.containerProps] - Container props for customization
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} BlankTemplate component
 */
export function BlankTemplate({ variant, title, subtitle, logo, icon, actions, footer, className, containerProps, children, }: {
    variant?: string | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    logo?: React.ReactNode;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string | undefined;
    containerProps?: Object | undefined;
    children: React.ReactNode;
}): JSX.Element;
import React from 'react';
export { BlankTemplate as default };
//# sourceMappingURL=blank.d.ts.map