/**
 * Avatar Component
 * 
 * A component to display user profile pictures with fallback to initials.
 * Handles image loading failures gracefully and generates a deterministic
 * background color based on the user's name.
 * 
 * @module components/elements/Avatar
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../ThemeProvider';

/**
 * Size variants for the avatar
 */
const sizeMap = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
  '2xl': 'w-20 h-20 text-2xl',
};

/**
 * Extract initials from a name.
 * Takes the first letter of the first and last name.
 * 
 * @param {string} name - Full name to extract initials from
 * @returns {string} Extracted initials (up to 2 characters)
 */
const getInitials = (name) => {
  if (!name) return '?';
  
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Generate a deterministic background color based on string.
 * 
 * @param {string} str - String to use for color generation
 * @returns {string} CSS color value
 */
const stringToColor = (str) => {
  if (!str) return 'var(--primary-color)'; // Default to primary color
  
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const colors = [
    'var(--primary-color)',     // Primary
    'var(--secondary-color)',   // Secondary
    'var(--info-color)',        // Info
    'var(--success-color)',     // Success
    'var(--warning-color)',     // Warning
    'var(--danger-color)',      // Danger
    'var(--dark-color)',        // Dark
    'var(--light-color)',       // Light
  ];
  
  // When using light color as background, we need to adjust the text color
  if (colors[Math.abs(hash) % colors.length] === 'var(--light-color)') {
    // We'll handle this special case in the component render function
    return { bg: 'var(--light-color)', text: 'var(--dark-color)' };
  }
  
  return { bg: colors[Math.abs(hash) % colors.length], text: 'var(--light-color)' };
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
 * Avatar component for displaying user profile pictures or initials.
 * 
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'} size - Size of the avatar
 * @param {string} src - URL of the profile image
 * @param {string} alt - Alternative text for the image
 * @param {string} name - User name for initials and color generation
 * @param {boolean} squared - Whether to use squared corners instead of rounded
 * @param {boolean} bordered - Whether to add a border around the avatar
 * @param {string} borderColor - Custom border color (if bordered is true)
 * @param {string} status - Status indicator ('online', 'offline', 'away', 'busy')
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} style - Additional inline styles
 * @param {Object} props - Additional props to pass to the div element
 * @returns {JSX.Element} Avatar component
 */
const Avatar = ({ 
  size = 'md',
  src = '',
  alt = '',
  name = '',
  squared = false,
  bordered = false,
  borderColor = '',
  status = null,
  className,
  style,
  ...props
}) => {
  // Track image loading errors
  const [imgError, setImgError] = useState(false);
  
  // Get theme from context
  const { theme } = useTheme() || {};
  
  // Get component styles from theme
  const componentStyles = getComponentStyles(theme, 'Avatar');
  
  // Show initials if no image or if image fails to load
  const showInitials = !src || imgError;
  
  // Determine background color and text color for initials
  const colorInfo = showInitials ? stringToColor(name) : { bg: undefined, text: 'var(--light-color)' };
  
  // Status indicator colors
  const statusColors = {
    online: 'bg-[var(--success-color)]',
    offline: 'bg-[var(--text-secondary)]',
    away: 'bg-[var(--warning-color)]',
    busy: 'bg-[var(--danger-color)]'
  };
  
  return (
    <div className="relative inline-block">
      <div
        className={cn(
          'inline-flex items-center justify-center overflow-hidden',
          squared ? 'rounded-[var(--radius-default)]' : 'rounded-full',
          bordered && 'ring-2 ring-[var(--bg-base)]',
          sizeMap[size],
          componentStyles?.className,
          className
        )}
        style={{
          backgroundColor: colorInfo.bg,
          ...(bordered && borderColor ? { '--ring-color': borderColor } : {}),
          ...componentStyles?.style,
          ...style
        }}
        {...props}
      >
        {showInitials ? (
          <span className={`text-[${colorInfo.text}] font-medium`}>{getInitials(name)}</span>
        ) : (
          <img
            src={src}
            alt={alt || name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      
      {status && statusColors[status] && (
        <span 
          className={cn(
            'absolute bottom-0 right-0 rounded-full ring-2 ring-[var(--bg-base)]',
            statusColors[status],
            size === 'xs' ? 'w-1.5 h-1.5' : 
            size === 'sm' ? 'w-2 h-2' : 
            size === 'md' ? 'w-2.5 h-2.5' : 
            size === 'lg' ? 'w-3 h-3' : 
            size === 'xl' ? 'w-3.5 h-3.5' : 'w-4 h-4'
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

// Set display name for React DevTools
Avatar.displayName = 'Avatar';

export default Avatar;