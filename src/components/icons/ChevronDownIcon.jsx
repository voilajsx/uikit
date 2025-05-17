// src/components/icons/ChevronDownIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * ChevronDownIcon component that displays a downward-pointing chevron.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const ChevronDownIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </Icon>
);

ChevronDownIcon.displayName = 'ChevronDownIcon';

export default ChevronDownIcon;