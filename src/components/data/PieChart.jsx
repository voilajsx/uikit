/**
 * PieChart Component
 * 
 * A component to display data as slices of a circular pie, each proportional to the quantity it represents.
 * Built using Recharts library and wrapped in a Card component for consistent styling.
 * 
 * @module components/data/PieChart
 */

import React from 'react';
import { 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import Card from '../display/Card';
import { cn } from '../../utils/cn';

/**
 * PieChart component for showing proportional distribution of data.
 * 
 * @param {{ name: string, value: number, color?: string }[]} data - Array of data objects to visualize
 * @param {string} title - Optional chart title
 * @param {number} height - Height of the chart in pixels
 * @param {number} innerRadius - Inner radius for creating donut charts
 * @param {number} outerRadius - Outer radius of the pie
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props to pass to the Card component
 * @returns {JSX.Element} PieChart component
 */
const PieChart = ({
  data,
  title,
  height = 300,
  innerRadius = 0,
  outerRadius = 80,
  className,
  ...props
}) => {
  const COLORS = [
    'var(--primary-color)',
    'var(--secondary-color)',
    'var(--success-color)',
    'var(--info-color)',
    'var(--warning-color)',
    'var(--error-color)'
  ];

  return (
    <Card className={className} {...props}>
      {title && <Card.Header>{title}</Card.Header>}
      <Card.Body>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color || COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--bg-light)',
                borderColor: 'var(--border-color-default)',
                borderRadius: 'var(--radius-default)',
                boxShadow: 'var(--shadow-default)'
              }}
              labelStyle={{ color: 'var(--text-primary)' }}
              formatter={(value) => [`${value}`, 'Value']}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: 'var(--spacing-4)',
                color: 'var(--text-secondary)'
              }}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

// Set display name for React DevTools
PieChart.displayName = 'PieChart';

export default PieChart;