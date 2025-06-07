import { ReactNode } from 'react'
import { Platform } from '../lib/platform'

export interface AdapterConfig {
  component: string
  styles: string | object
  textStyles?: object
}

export interface PlatformComponentOptions {
  web?: ReactNode
  native?: ReactNode
  default?: ReactNode
}

/**
 * Main hook for getting platform-appropriate component and styles
 */
export declare function useAdapter(
  component: string, 
  props?: Record<string, any>
): AdapterConfig

/**
 * Hook for getting current platform
 */
export declare function usePlatform(): Platform

/**
 * Hook for getting platform-specific styles only
 */
export declare function useStyles(
  component: string, 
  props?: Record<string, any>
): string | object

/**
 * Hook for checking if current platform is native
 */
export declare function useIsNative(): boolean

/**
 * Hook for checking if current platform is web
 */
export declare function useIsWeb(): boolean

/**
 * Utility hook for conditional platform rendering
 */
export declare function usePlatformComponent(
  components: PlatformComponentOptions
): ReactNode