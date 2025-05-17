/**
 * Skeleton Component
 * 
 * A component to display a placeholder preview of content while data is loading.
 * Creates a pulsing animation effect to indicate loading state without using
 * a spinner, providing a more content-aware loading experience.
 * 
 * @module components/feedback/Skeleton
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Skeleton component for loading state placeholders.
 * 
 * @param {'text'|'circular'|'rectangular'} variant - Shape of the skeleton
 * @param {string|number} width - Width of the skeleton (CSS value or number for pixels)
 * @param {string|number} height - Height of the skeleton (CSS value or number for pixels)
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the container
 * @returns {JSX.Element} Skeleton component
 */
const Skeleton = ({
  variant = 'text',
  width,
  height,
  className,
  ...props
}) => {
  // Convert number values to pixel strings for styling
  const widthStyle = width ? 
    (typeof width === 'number' ? `${width}px` : width) : 
    (variant === 'text' ? '100%' : undefined);
  
  const heightStyle = height ? 
    (typeof height === 'number' ? `${height}px` : height) : 
    (variant === 'text' ? '1em' : 
     variant === 'circular' ? (widthStyle || '3rem') : '1.5rem');
  
  return (
    <div
      className={cn(
        // Base styles for all variants
        'bg-[var(--bg-subtle)] animate-pulse',
        
        // Variant-specific styles
        variant === 'text' && 'rounded',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-[var(--radius-default)]',
        
        className
      )}
      style={{
        width: widthStyle,
        height: heightStyle,
        // For circular variant, ensure width equals height if only one is specified
        ...(variant === 'circular' && !width && height ? { width: heightStyle } : {}),
        ...(variant === 'circular' && width && !height ? { height: widthStyle } : {}),
      }}
      aria-hidden="true"
      {...props}
    />
  );
};

// Set display name for React DevTools
Skeleton.displayName = 'Skeleton';

export default Skeleton;