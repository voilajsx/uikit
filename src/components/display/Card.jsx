/**
 * Card Component
 * 
 * A versatile container component that groups related content and actions.
 * Uses the compound component pattern with Header, Body, and Footer sub-components.
 * Enhanced with theme customization support and visual variations.
 * 
 * @module components/display/Card
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../ThemeProvider';

/**
 * Visual variants for the card
 */
const variantMap = {
  default: 'bg-[var(--surface-color)] border border-[var(--border-color-default)] shadow-[var(--shadow-md)]',
  elevated: 'bg-[var(--surface-color)] border border-[var(--border-color-default)] shadow-[var(--shadow-lg)]',
  outline: 'bg-[var(--surface-color)] border-2 border-[var(--border-color-default)] shadow-none',
  filled: 'bg-[var(--subtle-color)] border border-[var(--border-color-default)] shadow-none',
  flat: 'bg-[var(--surface-color)] border-none shadow-none',
  'primary': 'bg-[var(--primary-soft)] border border-[var(--primary-color)] shadow-[var(--shadow-md)]',
  'secondary': 'bg-[var(--secondary-soft)] border border-[var(--secondary-color)] shadow-[var(--shadow-md)]',
  'success': 'bg-[var(--success-soft)] border border-[var(--success-color)] shadow-[var(--shadow-md)]',
  'warning': 'bg-[var(--warning-soft)] border border-[var(--warning-color)] shadow-[var(--shadow-md)]',
  'danger': 'bg-[var(--danger-soft)] border border-[var(--danger-color)] shadow-[var(--shadow-md)]',
  'info': 'bg-[var(--info-soft)] border border-[var(--info-color)] shadow-[var(--shadow-md)]',
};

/**
 * Size variants for the card
 */
const sizeMap = {
  sm: {
    card: '',
    header: 'px-4 py-2 text-base',
    body: 'px-4 py-2',
    footer: 'px-4 py-2'
  },
  md: {
    card: '',
    header: 'px-6 py-4 text-lg',
    body: 'px-6 py-4',
    footer: 'px-6 py-4'
  },
  lg: {
    card: '',
    header: 'px-8 py-5 text-xl',
    body: 'px-8 py-5',
    footer: 'px-8 py-5'
  }
};

/**
 * Border radius variants
 */
const radiusMap = {
  none: 'rounded-none',
  sm: 'rounded-[var(--radius-sm)]',
  md: 'rounded-[var(--radius-md)]', 
  lg: 'rounded-[var(--radius-lg)]',
  xl: 'rounded-[var(--radius-xl)]',
  full: 'rounded-[var(--radius-full)]'
};

/**
 * Border width variants
 */
const borderWidthMap = {
  none: 'border-0',
  thin: 'border',
  medium: 'border-2',
  thick: 'border-4',
};

/**
 * Accent position variants
 */
const accentPositionMap = {
  none: '',
  left: 'border-l-4',
  top: 'border-t-4',
  right: 'border-r-4',
  bottom: 'border-b-4',
  'all': 'border-4',
};

/**
 * Helper function to get component styles from theme
 */
const getComponentStyles = (theme, componentName, variant = null) => {
  if (!theme?.components) return null;
  
  // Get base component styles
  const componentStyles = theme.components[componentName] || null;
  if (!componentStyles) return null;
  
  // If variant is provided and variant styles exist, merge with base styles
  if (variant && componentStyles.variants && componentStyles.variants[variant]) {
    return {
      ...componentStyles,
      style: {
        ...(componentStyles.style || {}),
        ...(componentStyles.variants[variant].style || {})
      },
      className: cn(
        componentStyles.className || '',
        componentStyles.variants[variant].className || ''
      )
    };
  }
  
  return componentStyles;
};

/**
 * Card component for grouping related content and actions.
 * 
 * @param {'default'|'elevated'|'outline'|'filled'|'flat'|'primary'|'secondary'|'success'|'warning'|'danger'|'info'} variant - Visual style variant
 * @param {'sm'|'md'|'lg'} size - Size of the card
 * @param {'none'|'sm'|'md'|'lg'|'xl'|'full'} radius - Border radius size
 * @param {'none'|'thin'|'medium'|'thick'} borderWidth - Border width
 * @param {'none'|'left'|'top'|'right'|'bottom'|'all'} accentPosition - Position of accent border
 * @param {'primary'|'secondary'|'success'|'warning'|'danger'|'info'} accentColor - Color of accent border
 * @param {boolean} hoverable - Whether to show hover effects
 * @param {boolean} interactive - Whether the card is clickable
 * @param {boolean} compact - Whether to use compact padding
 * @param {boolean} withShadow - Whether to show shadow
 * @param {boolean} withBorder - Whether to show border
 * @param {Function} onClick - Click handler (used when interactive is true)
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Card content
 * @param {Object} props - Additional props for the element
 * @returns {JSX.Element} Card component
 */
const Card = forwardRef(({ 
  variant = 'default',
  size = 'md',
  radius = 'lg',
  borderWidth = 'thin',
  accentPosition = 'none',
  accentColor = 'primary',
  hoverable = false,
  interactive = false,
  compact = false,
  withShadow = true,
  withBorder = true,
  onClick,
  className,
  style,
  children,
  ...props
}, ref) => {
  // Get theme from context
  const { theme, darkMode } = useTheme() || { theme: null, darkMode: false };
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'Card', variant);
  
  // Determine element type based on interactive prop
  const Element = interactive ? 'button' : 'div';
  
  // Build accent border classes
  const accentColorClass = accentPosition !== 'none' 
    ? `border-${accentPosition.includes('all') ? '' : accentPosition + '-'}[var(--${accentColor}-color)]` 
    : '';
  
  // Determine if we should use variant styling or custom border/shadow
  const useVariantStyling = variant !== 'custom';
  
  // Get shadow class based on withShadow prop
  const shadowClass = withShadow 
    ? (variant === 'elevated' ? 'shadow-[var(--shadow-lg)]' : 'shadow-[var(--shadow-md)]')
    : 'shadow-none';
  
  // Get border class based on withBorder prop
  const borderClass = withBorder 
    ? borderWidthMap[borderWidth]
    : 'border-0';
  
  return (
    <Element
      ref={ref}
      onClick={interactive ? onClick : undefined}
      className={cn(
        'transition-all duration-[var(--duration-normal)]',
        
        // Use variant map styling if not custom
        useVariantStyling ? variantMap[variant] : 'bg-[var(--surface-color)]',
        
        // Apply custom border/shadow if specified
        !useVariantStyling && [borderClass, shadowClass],
        
        // Other styling
        radiusMap[radius],
        accentPosition !== 'none' && accentPositionMap[accentPosition],
        accentPosition !== 'none' && accentColorClass,
        
        // Interactive styles
        hoverable && !interactive && 'hover:shadow-[var(--shadow-lg)] cursor-pointer',
        interactive && [
          'cursor-pointer hover:shadow-[var(--shadow-lg)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2',
          'w-full text-left'
        ],
        
        // Dark mode styling
        darkMode && 'text-[var(--text-primary)]',
        
        // Theme and custom classes
        componentStyles?.className,
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      type={interactive ? 'button' : undefined}
      {...props}
    >
      {children}
    </Element>
  );
});

/**
 * Card header component
 * 
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Header content
 * @param {boolean} noBorder - Whether to hide the bottom border
 * @param {'primary'|'secondary'|'success'|'warning'|'danger'|'info'} borderColor - Color of the bottom border
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card header component
 */
const CardHeader = ({ 
  className,
  style,
  noBorder = false,
  borderColor,
  children,
  ...props 
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  const size = props.size || 'md';
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'CardHeader');
  
  // Determine border color class
  const borderColorClass = borderColor 
    ? `border-[var(--${borderColor}-color)]` 
    : 'border-[var(--border-color-default)]';
  
  return (
    <div 
      className={cn(
        sizeMap[size].header,
        !noBorder && ['border-b', borderColorClass],
        'font-medium',
        componentStyles?.className,
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card body component
 * 
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Body content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card body component
 */
const CardBody = ({ 
  className,
  style,
  children,
  ...props 
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  const size = props.size || 'md';
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'CardBody');
  
  return (
    <div 
      className={cn(
        sizeMap[size].body,
        componentStyles?.className,
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card footer component
 * 
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children - Footer content
 * @param {boolean} noBorder - Whether to hide the top border
 * @param {'primary'|'secondary'|'success'|'warning'|'danger'|'info'} borderColor - Color of the top border
 * @param {boolean} transparent - Whether to use transparent background
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card footer component
 */
const CardFooter = ({ 
  className,
  style,
  noBorder = false,
  borderColor,
  transparent = false,
  children,
  ...props 
}) => {
  // Get theme from context
  const { theme } = useTheme() || {};
  const size = props.size || 'md';
  
  // Get component styles from theme if available
  const componentStyles = getComponentStyles(theme, 'CardFooter');
  
  // Determine border color class
  const borderColorClass = borderColor 
    ? `border-[var(--${borderColor}-color)]` 
    : 'border-[var(--border-color-default)]';
  
  return (
    <div 
      className={cn(
        sizeMap[size].footer,
        !noBorder && ['border', borderColorClass],
        !transparent && 'bg-[var(--subtle-color)]',
        componentStyles?.className,
        className
      )}
      // Merge inline styles with theme styles
      style={{
        ...componentStyles?.style,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card image component
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for the image
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 * @param {boolean} overlay - Whether to add a dark overlay
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Card image component
 */
const CardImage = ({
  src,
  alt = '',
  className,
  style,
  overlay = false,
  position = 'top',
  ...props
}) => {
  const positionClass = position === 'top' 
    ? 'rounded-t-[inherit]' 
    : position === 'bottom' 
      ? 'rounded-b-[inherit]' 
      : '';
  
  return (
    <div 
      className={cn(
        'relative w-full overflow-hidden',
        positionClass,
        className
      )}
      style={style}
      {...props}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-[var(--dark-color)] bg-opacity-30"></div>
      )}
    </div>
  );
};

// Set display names for React DevTools
Card.displayName = 'Card';
CardHeader.displayName = 'Card.Header';
CardBody.displayName = 'Card.Body';
CardFooter.displayName = 'Card.Footer';
CardImage.displayName = 'Card.Image';

// Attach sub-components to Card
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;