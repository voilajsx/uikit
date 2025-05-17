// src/components/icons/SearchIcon.jsx
import React from 'react';
import Icon from './Icon';

/**
 * SearchIcon component that displays a search/magnifying glass.
 * Extends the base Icon component with a specific SVG path.
 * 
 * @param {Object} props - Component props, passed to the base Icon component
 */
const SearchIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </Icon>
);

SearchIcon.displayName = 'SearchIcon';

export default SearchIcon;