/**
 * LineChart Component
 * 
 * A component to display data as a series of points connected by straight line segments.
 * Built using Recharts library and wrapped in a Card component for consistent styling.
 * 
 * @module components/data/LineChart
 */

import React from 'react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
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
 * LineChart component for visualizing data trends over time or categories.
 * 
 * @param {any[]} data - Array of data objects to visualize
 * @param {{ dataKey: string, name?: string, color?: string }[]} lines - Configuration for each line
 * @param {string} xAxisDataKey - The key to use for the x-axis data
 * @param {string} title - Optional chart title
 * @param {number} height - Height of the chart in pixels
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props to pass to the Card component
 * @returns {JSX.Element} LineChart component
 */
const LineChart = ({
  data,
  lines,
  xAxisDataKey,
  title,
  height = 300,
  className,
  ...props
}) => {
  return (
    <Card className={className} {...props}>
      {title && <Card.Header>{title}</Card.Header>}
      <Card.Body>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            {lines.map((line, index) => (
              <Line 
                key={line.dataKey}
                type="monotone" 
                dataKey={line.dataKey} 
                name={line.name || line.dataKey} 
                stroke={line.color || (index === 0 ? 'var(--primary-color)' : 'var(--secondary-color)')}
                activeDot={{ r: 6 }}
                strokeWidth={2}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

// Set display name for React DevTools
LineChart.displayName = 'LineChart';

export default LineChart;