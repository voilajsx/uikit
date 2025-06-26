/**
 * @fileoverview Ultra-simple layout wrapper with standardized scheme + tone system
 * @description Uses VITE__ environment variables with zero ambiguity
 * @package @voilajsx/uikit
 * @file /src/components/layouts/layout-wrapper.tsx
 */
import React from 'react';
import type { NavigationItem, Size, Tone, Theme, Mode, AdminLayoutScheme, PageLayoutScheme, AuthLayoutScheme, BlankLayoutScheme, PopupLayoutScheme } from '../../types';
/**
 * Ultra-simple layout configuration - zero ambiguity
 */
interface LayoutConfig {
    theme: Theme;
    mode: Mode;
    detectSystem: boolean;
    layout: string;
    title: string;
    logo?: string;
    navigation: NavigationItem[];
    adminLayout: {
        scheme: AdminLayoutScheme;
        tone: Tone;
        size: Size;
        collapsible: boolean;
        defaultSidebarOpen: boolean;
    };
    pageLayout: {
        scheme: PageLayoutScheme;
        tone: Tone;
        size: Size;
        position: 'sticky' | 'fixed' | 'relative';
    };
    authLayout: {
        scheme: AuthLayoutScheme;
        tone: Tone;
        size: Size;
        imageUrl?: string;
        imageOverlay: 'light' | 'dark' | 'none';
    };
    blankLayout: {
        scheme: BlankLayoutScheme;
        tone: Tone;
        size: Size;
    };
    popupLayout: {
        scheme: PopupLayoutScheme;
        tone: Tone;
        size: Size;
        position: 'sticky' | 'fixed' | 'relative';
    };
}
/**
 * Layout wrapper props - ultra-simple
 */
export interface LayoutWrapperProps {
    /** App content */
    children: React.ReactNode;
    /** Override layout type */
    layout?: string;
    /** Override navigation items */
    navigation?: NavigationItem[];
    /** Manual config overrides */
    overrides?: Partial<LayoutConfig>;
}
/**
 * Ultra-simple layout wrapper - zero ambiguity
 */
export declare function LayoutWrapper({ children, layout, navigation, overrides }: LayoutWrapperProps): React.JSX.Element;
/**
 * Hook to access layout configuration
 */
export declare function useLayoutConfig(): LayoutConfig;
export {};
//# sourceMappingURL=layout-wrapper.d.ts.map