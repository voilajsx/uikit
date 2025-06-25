/**
 * @fileoverview Enhanced layout wrapper with VITE__ environment variables and unified navigation types
 * @description Uses VoilaJS dot notation convention with VITE__ prefix for browser compatibility
 * @package @voilajsx/uikit
 * @file /src/lib/layout-wrapper.tsx
 */
import React from 'react';
import type { NavigationItem } from '../types';
/**
 * Layout configuration interface
 */
interface LayoutConfig {
    theme: string;
    variant: 'light' | 'dark';
    detectSystem: boolean;
    layout: string;
    title: string;
    logo?: string;
    navigation: NavigationItem[];
    adminLayout: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
        collapsible: boolean;
        defaultSidebarOpen: boolean;
    };
    pageLayout: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    };
    header: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        sticky: boolean;
        size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    };
    footer: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    };
    authLayout: {
        variant: 'simple' | 'card' | 'split-gradient' | 'split-image' | 'card-gradient' | 'card-image';
        imageUrl?: string;
        imageOverlay: 'light' | 'dark' | 'none';
    };
    blankLayout: {
        variant: 'default' | 'card' | 'error' | 'maintenance' | 'suspension';
    };
    customProps: Record<string, any>;
}
/**
 * Enhanced layout wrapper component props
 */
export interface LayoutWrapperProps {
    /** App content */
    children: React.ReactNode;
    /** Override layout type */
    layout?: string;
    /** Override navigation items */
    navigation?: NavigationItem[];
    /** Manual overrides for env config */
    overrides?: Partial<LayoutConfig>;
}
/**
 * Enhanced layout wrapper component with VITE__ environment variables and debugging
 */
export declare function LayoutWrapper({ children, layout, navigation, overrides }: LayoutWrapperProps): React.JSX.Element;
/**
 * Hook to access layout configuration in components
 */
export declare function useLayoutConfig(): LayoutConfig;
/**
 * Utility to merge layout config with component props
 */
export declare function withLayoutConfig<T extends Record<string, any>>(componentProps: T, configKey: keyof LayoutConfig): T & Record<string, any>;
export {};
//# sourceMappingURL=layout-wrapper.d.ts.map