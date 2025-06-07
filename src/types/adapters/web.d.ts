export interface WebAdapterConfig {
  component: string
  styles: string
}

/**
 * Web platform adapter - returns DOM elements and CSS classes
 */
export declare function webAdapter(
  component: string, 
  props?: Record<string, any>
): WebAdapterConfig

/**
 * Get web-specific component and styles
 */
export declare function getWebComponent(
  component: string, 
  props: Record<string, any>
): WebAdapterConfig