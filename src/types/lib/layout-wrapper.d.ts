/**
 * @fileoverview TypeScript definitions for layout wrapper
 * @package @voilajsx/uikit
 * @file /src/lib/layout-wrapper.d.ts
 */

import React from 'react';

export interface LayoutConfig {
  // Theme configuration
  theme: string;
  variant: 'light' | 'dark';
  detectSystem: boolean;
  
  // Layout configuration
  layout: 'admin' | 'page' | 'auth' | 'blank' | 'none';
  layoutVariant: string;
  layoutSize: string;
  
  // Content configuration
  title: string;
  logo?: string;
  
  // Navigation configuration
  navigation: NavigationItem[];
  
  // Layout-specific configurations
  adminLayout: {
    variant: 'default' | 'primary' | 'black';
    size: 'compact' | 'default' | 'wide';
    collapsible: boolean;
    defaultSidebarOpen: boolean;
  };
  
  pageLayout: {
    variant: 'default' | 'minimal' | 'contained';
    size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  };
  
  header: {
    variant: 'default' | 'primary' | 'black';
    sticky: boolean;
    size: 'sm' | 'md' | 'lg';
  };
  
  footer: {
    variant: 'default' | 'muted' | 'dark';
    size: 'sm' | 'md' | 'lg';
  };
  
  authLayout: {
    variant: 'simple' | 'card' | 'split-gradient' | 'split-image' | 'card-gradient' | 'card-image';
    imageUrl?: string;
    imageOverlay: 'light' | 'dark' | 'none';
  };
  
  blankLayout: {
    variant: 'default' | 'card' | 'error' | 'maintenance' | 'suspension';
  };
  
  // Additional custom props
  customProps: Record<string, any>;
}

export interface NavigationItem {
  key: string;
  label: string;
  icon?: React.ComponentType;
  path?: string;
  badge?: string;
  isActive?: boolean;
  section?: string;
  onClick?: string | (() => void);
  items?: Array<{
    key: string;
    label: string;
    path?: string;
    isActive?: boolean;
    onClick?: () => void;
  }>;
}

export interface LayoutWrapperProps {
  children: React.ReactNode;
  overrides?: Partial<LayoutConfig>;
}

/**
 * Enhanced layout wrapper component with full prop drilling
 */
export function LayoutWrapper(props: LayoutWrapperProps): JSX.Element;

/**
 * Hook to access layout configuration in components
 */
export function useLayoutConfig(): LayoutConfig;

/**
 * Utility to merge layout config with component props
 */
export function withLayoutConfig<T extends Record<string, any>>(
  componentProps: T,
  configKey: keyof LayoutConfig
): T & Record<string, any>;