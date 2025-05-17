/**
 * BarChart Component
 * 
 * A component to display data as rectangular bars with lengths proportional to their values.
 * Built using Recharts library and wrapped in a Card component for consistent styling.
 * 
 * @module components/data/BarChart
 */

import React from 'react';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import Card from '../display/Card';
import { cn } from '../../utils/cn';

/**
 * Helper to get default color based on index
 * 
 * @param {number} index - Index of the bar
 * @returns {string} CSS variable for color
 */
const getDefaultColor = (index) => {
  const colors = [
    'var(--primary-color)',
    'var(--secondary-color)',
    'var(--success-color)',
    'var(--info-color)',
    'var(--warning-color)',
    'var(--error-color)'
  ];
  return colors[index % colors.length];
};

/**
 * BarChart component for comparing values across categories.
 * 
 * @param {any[]} data - Array of data objects to visualize
 * @param {{ dataKey: string, name?: string, color?: string }[]} bars - Configuration for each bar
 * @param {string} xAxisDataKey - The key to use for the x-axis data
 * @param {string} title - Optional chart title
 * @param {number} height - Height of the chart in pixels
 * @param {boolean} stacked - Whether bars should be stacked
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props to pass to the Card component
 * @returns {JSX.Element} BarChart component
 */
const BarChart = ({
  data,
  bars,
  xAxisDataKey,
  title,
  height = 300,
  stacked = false,
  className,
  ...props
}) => {
  return (
    <Card className={className} {...props}>
      {title && <Card.Header>{title}</Card.Header>}
      <Card.Body>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsBarChart 
            data={data} 
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color-light)" />
            <XAxis 
              dataKey={xAxisDataKey} 
              stroke="var(--text-secondary)"
              tick={{ fill: 'var(--text-secondary)' }}
            />
            <YAxis 
              stroke="var(--text-secondary)"
              tick={{ fill: 'var(--text-secondary)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--bg-light)',
                borderColor: 'var(--border-color-default)',
                borderRadius: 'var(--radius-default)',
                boxShadow: 'var(--shadow-default)'
              }}
              labelStyle={{ color: 'var(--text-primary)' }}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: 'var(--spacing-4)',
                color: 'var(--text-secondary)'
              }}
            />
            {bars.map((bar, index) => (
              <Bar 
                key={bar.dataKey}
                dataKey={bar.dataKey} 
                name={bar.name || bar.dataKey} 
                fill={bar.color || getDefaultColor(index)}
                stackId={stacked ? "stack" : undefined}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

// Set display name for React DevTools
BarChart.displayName = 'BarChart';

export default BarChart;