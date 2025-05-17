// src/components/icons/PlusIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * PlusIcon component that displays a plus/add symbol.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const PlusIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </Icon>
);

PlusIcon.displayName = 'PlusIcon';

export default PlusIcon;