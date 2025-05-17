// src/components/icons/CheckIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * CheckIcon component that displays a checkmark.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const CheckIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </Icon>
);

CheckIcon.displayName = 'CheckIcon';

export default CheckIcon;