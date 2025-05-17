/**
 * Progress Component
 * 
 * A component to show the completion status of a task or operation.
 * Displays a horizontal bar that fills based on the current progress value,
 * with options for different sizes, colors, and value display.
 * 
 * @module components/feedback/Progress
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Size variants for the progress bar
 */
const sizeMap = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
};

/**
 * Color variants for the progress bar
 */
const variantMap = {
  primary: 'bg-[var(--primary-color)]',
  secondary: 'bg-[var(--secondary-color)]',
  success: 'bg-[var(--success-color)]',
  warning: 'bg-[var(--warning-color)]',
  error: 'bg-[var(--error-color)]',
  info: 'bg-[var(--info-color)]',
};

/**
 * Progress component for displaying task completion status.
 * 
 * @param {number} value - Current progress value
 * @param {number} max - Maximum value (100%)
 * @param {'xs'|'sm'|'md'|'lg'} size - Height of the progress bar
 * @param {'primary'|'secondary'|'success'|'warning'|'error'|'info'} variant - Color variant
 * @param {boolean} showValue - Whether to display the percentage value
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the container
 * @returns {JSX.Element} Progress component
 */
const Progress = ({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'primary',
  showValue = false,
  className,
  ...props
}) => {
  // Ensure the value is within the valid range
  const clampedValue = Math.min(Math.max(0, value), max);
  
  // Calculate percentage for width and display
  const percentage = (clampedValue / max) * 100;

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Value display (if enabled) */}
      {showValue && (
        <div className="flex justify-between mb-1">
          <div className="text-sm font-medium text-[var(--text-primary)]">
            {value}%
          </div>
        </div>
      )}
      
      {/* Progress bar track */}
      <div
        className={cn(
          'w-full bg-[var(--bg-subtle)] rounded-full',
          sizeMap[size]
        )}
      >
        {/* Progress bar fill */}
        <div
          className={cn(
            'rounded-full transition-all duration-300 ease-[var(--timing-ease)]',
            variantMap[variant],
            sizeMap[size]
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        ></div>
      </div>
    </div>
  );
};

// Set display name for React DevTools
Progress.displayName = 'Progress';

export default Progress;