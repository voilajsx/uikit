/**
 * KpiGrid Component
 * 
 * A component to organize multiple MetricCard components in a responsive grid.
 * Creates a dashboard-style layout for key performance indicators.
 * 
 * @module components/data/KpiGrid
 */

import React from 'react';
import MetricCard from './MetricCard';
import { cn } from '../../utils/cn';

/**
 * Grid column configuration based on column count
 */
const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

/**
 * KpiGrid component for displaying multiple metrics in a grid layout.
 * 
 * @param {any[]} metrics - Array of metric objects to pass to MetricCard
 * @param {1|2|3|4} columns - Number of columns in the grid
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} KpiGrid component
 */
const KpiGrid = ({
  metrics,
  columns = 3,
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'grid gap-[var(--spacing-4)]',
        gridCols[columns] || gridCols[3],
        className
      )} 
      {...props}
    >
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          subtitle={metric.subtitle}
          icon={metric.icon}
          trend={metric.trend}
          trendValue={metric.trendValue}
        />
      ))}
    </div>
  );
};

// Set display name for React DevTools
KpiGrid.displayName = 'KpiGrid';

export default KpiGrid;