/**
 * MetricCard Component
 * 
 * A component to display a single metric or KPI with optional trend indicator.
 * Designed for dashboard use with clean, focused presentation.
 * 
 * @module components/data/MetricCard
 */

import React from 'react';
import Card from '../display/Card';
import { cn } from '../../utils/cn';

/**
 * MetricCard component for displaying a single metric or KPI.
 * 
 * @param {string} title - Title of the metric
 * @param {string|number} value - The main value to display
 * @param {string} subtitle - Optional additional context
 * @param {React.ReactNode} icon - Optional icon
 * @param {'up'|'down'|'neutral'} trend - Optional trend direction
 * @param {string} trendValue - Optional trend value text
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props to pass to Card component
 * @returns {JSX.Element} MetricCard component
 */
const MetricCard = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  className,
  ...props
}) => {
  /**
   * Get appropriate CSS class for trend color
   * 
   * @returns {string} CSS class for trend color
   */
  const getTrendColor = () => {
    if (trend === 'up') return 'text-[var(--success-color)]';
    if (trend === 'down') return 'text-[var(--error-color)]';
    return 'text-[var(--text-secondary)]';
  };
  
  /**
   * Get appropriate trend icon/symbol
   * 
   * @returns {string} Trend symbol (arrow)
   */
  const getTrendIcon = () => {
    if (trend === 'up') return '↑';
    if (trend === 'down') return '↓';
    return '→';
  };
  
  return (
    <Card className={cn('overflow-hidden', className)} {...props}>
      <Card.Body className="p-[var(--spacing-4)]">
        <div className="flex items-start">
          {icon && (
            <div className="mr-[var(--spacing-3)] p-[var(--spacing-2)] bg-[var(--primary-color)] bg-opacity-10 rounded-[var(--radius-default)]">
              {React.cloneElement(icon, {
                className: cn('w-6 h-6', icon.props.className)
              })}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-[var(--text-sm)] font-[var(--font-medium)] text-[var(--text-secondary)]">
              {title}
            </h3>
            <div className="mt-[var(--spacing-1)] flex items-baseline">
              <span className="text-[var(--text-2xl)] font-[var(--font-bold)]">
                {value}
              </span>
              {trend && trendValue && (
                <span className={cn('ml-[var(--spacing-2)] text-[var(--text-sm)]', getTrendColor())}>
                  {getTrendIcon()} {trendValue}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="mt-[var(--spacing-1)] text-[var(--text-sm)] text-[var(--text-secondary)]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Set display name for React DevTools
MetricCard.displayName = 'MetricCard';

export default MetricCard;