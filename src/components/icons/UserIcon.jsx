// src/components/icons/UserIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * UserIcon component that displays a user/person icon.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const UserIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </Icon>
);

UserIcon.displayName = 'UserIcon';

export default UserIcon;