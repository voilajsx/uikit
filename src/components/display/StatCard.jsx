/**
 * StatCard Component
 * 
 * A component to display a statistic or KPI with label, value, and optional comparison.
 * Built on the Card component, designed for dashboard displays.
 * 
 * @module components/display/StatCard
 */

import React from 'react';
import { cn } from '../../utils/cn';
import Card from './Card';

/**
 * StatCard component for displaying statistics and KPIs.
 * 
 * @param {string} label - Descriptive label for the stat
 * @param {string|number} value - The main statistic value
 * @param {number} change - Optional percentage change
 * @param {'increase'|'decrease'} changeType - Direction of change (calculated from change if not provided)
 * @param {React.ReactNode} icon - Optional icon
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props passed to Card
 * @returns {JSX.Element} StatCard component
 */
const StatCard = ({
  label,
  value,
  change,
  changeType,
  icon,
  className,
  ...props
}) => {
  // Determine change type automatically if not provided
  const effectiveChangeType = changeType || (change > 0 ? 'increase' : change < 0 ? 'decrease' : null);
  
  // Format change value with + or - prefix
  const formattedChange = change ? `${change > 0 ? '+' : ''}${change}%` : null;
  
  return (
    <Card 
      className={cn('overflow-hidden', className)} 
      {...props}
    >
      <Card.Body className="p-6">
        <div className="flex items-start">
          {icon && (
            <div className="mr-[var(--spacing-3)] p-[var(--spacing-2)] bg-[var(--primary-color)] bg-opacity-10 rounded-[var(--radius-default)]">
              {React.cloneElement(icon, {
                className: cn('w-6 h-6', icon.props.className)
              })}
            </div>
          )}
          
          <div className="flex-1">
            <div className="text-sm text-[var(--text-secondary)] mb-1">
              {label}
            </div>
            
            <div className="flex items-baseline">
              <div className="text-2xl font-bold text-[var(--text-primary)]">
                {value}
              </div>
              
              {formattedChange && (
                <div 
                  className={cn(
                    'ml-2 text-sm',
                    effectiveChangeType === 'increase' && 'text-[var(--success-color)]',
                    effectiveChangeType === 'decrease' && 'text-[var(--error-color)]'
                  )}
                >
                  {effectiveChangeType === 'increase' ? '↑' : '↓'} {formattedChange}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Set display name for React DevTools
StatCard.displayName = 'StatCard';

export default StatCard;