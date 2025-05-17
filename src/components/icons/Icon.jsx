// src/components/icons/Icon.jsx
import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Base Icon component that serves as the foundation for all icon components.
 * Provides consistent sizing and styling across all icons.
 * 
 * @param {Object} props - Component props
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} props.size - Size of the icon
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - SVG paths for the specific icon
 */
const sizeMap = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const Icon = ({
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      className={cn(sizeMap[size], className)}
      {...props}
    >
      {children}
    </svg>
  );
};

Icon.displayName = 'Icon';

export default Icon;