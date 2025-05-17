/**
 * Tooltip Component
 * 
 * A component to display informative text when users hover over or focus on an element.
 * Shows on hover and focus, with support for different placements and delay.
 * 
 * @module components/display/Tooltip
 */

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

/**
 * Position adjustments for different tooltip placements
 */
const placementStyles = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
};

/**
 * Arrow classes for different tooltip placements
 */
const arrowStyles = {
  top: 'bottom-0 translate-y-full left-1/2 -translate-x-1/2 border-t-[var(--bg-dark)] border-r-transparent border-b-transparent border-l-transparent',
  right: 'left-0 -translate-x-full top-1/2 -translate-y-1/2 border-t-transparent border-r-[var(--bg-dark)] border-b-transparent border-l-transparent',
  bottom: 'top-0 -translate-y-full left-1/2 -translate-x-1/2 border-t-transparent border-r-transparent border-b-[var(--bg-dark)] border-l-transparent',
  left: 'right-0 translate-x-full top-1/2 -translate-y-1/2 border-t-transparent border-r-transparent border-b-transparent border-l-[var(--bg-dark)]',
};

/**
 * Tooltip component for displaying contextual information on hover/focus.
 * 
 * @param {React.ReactNode} content - Text or content to show in tooltip
 * @param {'top'|'right'|'bottom'|'left'} placement - Position of the tooltip
 * @param {number} delay - Delay before showing tooltip (ms)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Element to attach tooltip to
 * @param {Object} props - Additional props for the tooltip div
 * @returns {JSX.Element} Tooltip component
 */
const Tooltip = ({
  content,
  placement = 'top',
  delay = 0,
  className,
  children,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);
  const tooltipId = useRef(`tooltip-${Math.random().toString(36).substr(2, 9)}`);
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (delay) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  };
  
  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };
  
  // Clone the child element to attach event handlers
  const childElement = React.Children.only(children);
  const child = React.cloneElement(childElement, {
    ref: triggerRef,
    onMouseEnter: (e) => {
      showTooltip();
      if (childElement.props.onMouseEnter) {
        childElement.props.onMouseEnter(e);
      }
    },
    onMouseLeave: (e) => {
      hideTooltip();
      if (childElement.props.onMouseLeave) {
        childElement.props.onMouseLeave(e);
      }
    },
    onFocus: (e) => {
      showTooltip();
      if (childElement.props.onFocus) {
        childElement.props.onFocus(e);
      }
    },
    onBlur: (e) => {
      hideTooltip();
      if (childElement.props.onBlur) {
        childElement.props.onBlur(e);
      }
    },
    'aria-describedby': isVisible ? tooltipId.current : undefined,
  });
  
  return (
    <div className="relative inline-block">
      {child}
      
      {isVisible && (
        <div
          id={tooltipId.current}
          role="tooltip"
          className={cn(
            'absolute z-[var(--z-index-tooltip)]',
            'bg-[var(--bg-dark)] text-[var(--text-light)]',
            'px-2 py-1 text-sm',
            'rounded-[var(--radius-default)]',
            'max-w-xs',
            'shadow-md',
            'animate-in fade-in-50 zoom-in-95 duration-100',
            placementStyles[placement],
            className
          )}
          {...props}
        >
          {content}
          <span 
            className={cn(
              'absolute border-4',
              arrowStyles[placement]
            )}
          />
        </div>
      )}
    </div>
  );
};

// Set display name for React DevTools
Tooltip.displayName = 'Tooltip';

export default Tooltip;