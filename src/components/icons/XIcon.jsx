// src/components/icons/XIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * XIcon component that displays an X/close symbol.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const XIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </Icon>
);

XIcon.displayName = 'XIcon';

export default XIcon;