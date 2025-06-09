export function useNavigation(items?: any[], options?: Object): Object;
export default NavigationLayout;
/**
 * Navigation layout wrapper that provides navigation to templates
 * @param {Object} props - Component props
 * @param {string} [props.mode="topbar"] - Navigation mode: topbar | sidebar
 * @param {Array} [props.items=[]] - Navigation items array
 * @param {React.ReactNode} props.children - Template to wrap
 * @param {Function} [props.onNavClick] - Navigation click handler
 * @returns {JSX.Element} Navigation layout
 */
export const NavigationLayout: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Desktop Navigation Component - Only renders desktop navigation
 */
export const DesktopNavigation: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
/**
 * Mobile Navigation Component - Only renders mobile navigation
 */
export const MobileNavigation: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import React from "react";
//# sourceMappingURL=navigation.d.ts.map