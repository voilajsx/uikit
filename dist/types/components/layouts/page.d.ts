/**
 * Main PageLayout Component - Simplified with consistent props
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'minimal'|'contained'} [props.variant='default'] - Page layout variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Page width and spacing
 * @param {React.ReactNode} props.children - Page sections (Header, Content, Footer)
 * @returns {JSX.Element} PageLayout container
 */
export const PageLayout: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Page Header component
 * @param {Object} props - Component props
 * @param {'default'|'primary'|'black'} [props.variant='default'] - Header style variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size] - Header size (inherits from PageLayout if not specified)
 * @param {boolean} [props.sticky=true] - Whether header should be sticky
 * @param {React.ReactNode} props.children - Header content
 * @returns {JSX.Element} Page header
 */
export const PageHeader: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Page Content component - Main content area
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size] - Content size (inherits from PageLayout if not specified)
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} Page content area
 */
export const PageContent: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Page Footer component
 * @param {Object} props - Component props
 * @param {'default'|'muted'|'dark'} [props.variant='default'] - Footer style variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size] - Footer size (inherits from PageLayout if not specified)
 * @param {React.ReactNode} props.children - Footer content
 * @returns {JSX.Element} Page footer
 */
export const PageFooter: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Hook to access page configuration
 * @returns {Object} Page configuration context
 */
export function usePage(): Object;
/**
 * Page layout variants
 */
export const pageVariants: (props?: ({
    variant?: "default" | "minimal" | "contained" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
//# sourceMappingURL=page.d.ts.map