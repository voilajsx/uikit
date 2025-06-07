/**
 * @fileoverview Web adapter for @voilajsx/uikit
 * @description Simple web adapter that returns DOM elements and CSS classes
 * @package @voilajsx/uikit
 * @file /src/adapters/web.js
 */

import { cn } from '../lib/utils';

/**
 * Web platform adapter - returns DOM elements and Tailwind CSS classes
 * @param {string} component - Component type
 * @param {Object} [props={}] - Component props
 * @returns {Object} Component and styles for web platform
 */
export function webAdapter(component, props = {}) {
  const { variant = 'default', size = 'default', className } = props;

  // Simple mapping - just return the HTML element and let existing components handle styling
  const componentMap = {
    button: 'button',
    input: 'input',
    card: 'div',
    container: 'div',
    header: 'header',
    footer: 'footer',
    sidebar: 'aside',
    text: 'span',
    view: 'div',
    scroll: 'div',
  };

  // For web, we don't need complex style generation since components already handle this
  // Just return the HTML element and pass through any className
  return {
    component: componentMap[component] || 'div',
    styles: className || '',
  };
}

/**
 * Get web-specific component and styles
 * @param {string} component - Component type
 * @param {Object} props - Component props
 * @returns {Object} Web component configuration
 */
export const getWebComponent = (component, props) =>
  webAdapter(component, props);
