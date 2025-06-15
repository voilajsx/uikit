/**
 * Main Container component - Simplified with consistent props and iPad optimization
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'contained'|'minimal'} [props.variant='default'] - Container variant
 * @param {'none'|'left'|'right'} [props.sidebar='none'] - Sidebar position
 * @param {React.ReactNode|Array} [props.sidebarContent] - Sidebar content or navigation items
 * @param {boolean} [props.sidebarSticky=false] - Whether sidebar should be sticky
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Container size (width + padding + spacing)
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} Container component
 */
export const Container: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Container Sidebar component with proper sticky implementation
 */
export const ContainerSidebar: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Container Main content area with thin, consistent padding
 */
export const ContainerMain: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
//# sourceMappingURL=container.d.ts.map