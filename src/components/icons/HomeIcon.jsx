// src/components/icons/HomeIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * HomeIcon component that displays a home/house icon.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const HomeIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </Icon>
);

HomeIcon.displayName = 'HomeIcon';

export default HomeIcon;