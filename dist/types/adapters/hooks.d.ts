/**
 * Main hook for getting platform-appropriate component and styles
 * @param {string} component - Component type (button, input, card, etc.)
 * @param {Object} [props={}] - Component props (variant, size, etc.)
 * @returns {Object} Platform-specific component configuration
 */
export function useAdapter(component: string, props?: Object): Object;
/**
 * Hook for getting current platform
 * @returns {string} Current platform identifier
 */
export function usePlatform(): string;
/**
 * Hook for getting platform-specific styles only
 * @param {string} component - Component type
 * @param {Object} [props={}] - Component props
 * @returns {string|Object} CSS classes (web) or StyleSheet object (native)
 */
export function useStyles(component: string, props?: Object): string | Object;
/**
 * Hook for checking if current platform is native
 * @returns {boolean} True if running on React Native
 */
export function useIsNative(): boolean;
/**
 * Hook for checking if current platform is web
 * @returns {boolean} True if running on web (browser or Tauri)
 */
export function useIsWeb(): boolean;
/**
 * Utility hook for conditional platform rendering
 * @param {Object} components - Platform-specific components
 * @param {React.ReactNode} [components.web] - Web component
 * @param {React.ReactNode} [components.native] - Native component
 * @param {React.ReactNode} [components.default] - Fallback component
 * @returns {React.ReactNode} Platform-appropriate component
 */
export function usePlatformComponent({ web, native, default: defaultComponent, }: {
    web?: React.ReactNode;
    native?: React.ReactNode;
    default?: React.ReactNode;
}): React.ReactNode;
//# sourceMappingURL=hooks.d.ts.map