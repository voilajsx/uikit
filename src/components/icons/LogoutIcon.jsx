// src/components/icons/LogoutIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * LogoutIcon component that displays a logout/sign-out symbol.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const LogoutIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </Icon>
);

LogoutIcon.displayName = 'LogoutIcon';

export default LogoutIcon;