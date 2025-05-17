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

/**
 * Size variants for the avatar
 */
const sizeMap = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
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
  if (!str) return '#9333ea'; // Default to primary color
  
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const colors = [
    '#9333ea', // Primary
    '#d946ef', // Secondary
    '#3b82f6', // Blue
    '#10b981', // Green
    '#f59e0b', // Yellow
    '#ef4444', // Red
  ];
  
  return colors[Math.abs(hash) % colors.length];
};

/**
 * Avatar component for displaying user profile pictures or initials.
 * 
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} size - Size of the avatar
 * @param {string} src - URL of the profile image
 * @param {string} alt - Alternative text for the image
 * @param {string} name - User name for initials and color generation
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the div element
 * @returns {JSX.Element} Avatar component
 */
const Avatar = ({ 
  size = 'md',
  src = '',
  alt = '',
  name = '',
  className,
  ...props
}) => {
  // Track image loading errors
  const [imgError, setImgError] = useState(false);
  
  // Show initials if no image or if image fails to load
  const showInitials = !src || imgError;
  
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full overflow-hidden',
        'bg-[var(--primary-color)] text-white',
        sizeMap[size],
        className
      )}
      style={showInitials ? { backgroundColor: stringToColor(name) } : {}}
      {...props}
    >
      {showInitials ? (
        <span>{getInitials(name)}</span>
      ) : (
        <img
          src={src}
          alt={alt || name}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};

// Set display name for React DevTools
Avatar.displayName = 'Avatar';

export default Avatar;