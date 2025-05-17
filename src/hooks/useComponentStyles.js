// src/hooks/useComponentStyles.js - New file to add

import { useTheme } from '../ThemeProvider';
import { cn } from '../utils/cn';

export function useComponentStyles(componentName) {
  const { getComponentStyles } = useTheme();
  const componentStyles = getComponentStyles(componentName);

  // Get component style object
  const style = componentStyles?.style || {};

  // Get component classes
  const className = componentStyles?.className || '';

  // Function to merge classes with component-specific classes
  const getClassName = (additionalClasses = '') => {
    return cn(className, additionalClasses);
  };

  // Function to merge styles with component-specific styles
  const getStyles = (additionalStyles = {}) => {
    return { ...style, ...additionalStyles };
  };

  return {
    style,
    className,
    getClassName,
    getStyles,
    // Return additional style objects if defined
    hoverStyles: componentStyles?.hoverStyles || {},
    focusStyles: componentStyles?.focusStyles || {},
    variants: componentStyles?.variants || {},
  };
}

export default useComponentStyles;
