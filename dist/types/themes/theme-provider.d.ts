/**
 * Theme provider component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.theme='default'] - Initial theme
 * @param {'light'|'dark'} [props.variant='light'] - Initial variant
 * @param {boolean} [props.detectSystem=true] - Detect system preference
 * @returns {JSX.Element} Theme provider component
 */
export function ThemeProvider({ children, theme, variant, detectSystem }: {
    children: React.ReactNode;
    theme?: string | undefined;
    variant?: "light" | "dark" | undefined;
    detectSystem?: boolean | undefined;
}): JSX.Element;
/**
 * Hook to access theme context
 * @returns {Object} Theme context value
 */
export function useTheme(): Object;
//# sourceMappingURL=theme-provider.d.ts.map