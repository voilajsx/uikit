export interface NativeAdapterConfig {
  component: string
  styles: object
  textStyles?: object
}

/**
 * Native platform adapter - returns React Native components and StyleSheet objects
 */
export declare function nativeAdapter(
  component: string, 
  props?: Record<string, any>
): NativeAdapterConfig

/**
 * Get native-specific component and styles
 */
export declare function getNativeComponent(
  component: string, 
  props: Record<string, any>
): NativeAdapterConfig