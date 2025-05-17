// src/components/icons/DotsVerticalIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * DotsVerticalIcon component that displays three vertical dots (often used for menus).
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const DotsVerticalIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </Icon>
);

DotsVerticalIcon.displayName = 'DotsVerticalIcon';

export default DotsVerticalIcon;