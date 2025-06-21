/**
 * Enhanced layout wrapper component with VITE__ environment variables and debugging
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - App content
 * @param {string} [props.layout] - Override layout type
 * @param {Array} [props.navigation] - Override navigation items
 * @param {Object} [props.overrides] - Manual overrides for env config
 * @returns {JSX.Element} Wrapped app with theme and layout
 */
export function LayoutWrapper({ children, layout, navigation, overrides }: {
    children: React.ReactNode;
    layout?: string | undefined;
    navigation?: any[] | undefined;
    overrides?: Object | undefined;
}): JSX.Element;
/**
 * Hook to access layout configuration in components
 * @returns {Object} Current layout configuration
 */
export function useLayoutConfig(): Object;
/**
 * Utility to merge layout config with component props
 * @param {Object} componentProps - Component props
 * @param {string} configKey - Key in layout config (e.g., 'adminLayout')
 * @returns {Object} Merged props
 */
export function withLayoutConfig(componentProps: Object, configKey: string): Object;
import React from 'react';
//# sourceMappingURL=layout-wrapper.d.ts.map