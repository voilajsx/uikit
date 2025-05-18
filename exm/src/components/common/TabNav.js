import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

/**
 * TabNav component provides tab navigation for different content sections
 *
 * @param {Array} tabs - Array of tab objects with label and content
 * @param {string} defaultTab - Label of the default active tab
 * @param {string} className - Additional CSS classes
 */
const TabNav = ({ tabs = [], defaultTab, className = '' }) => {
  // Find default tab index
  const defaultIndex = tabs.findIndex((tab) => tab.label === defaultTab);
  const [selectedIndex, setSelectedIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0
  );

  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="tab-nav">
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              className={({ selected }) =>
                `tab-nav-item ${selected ? 'active' : ''}`
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {tabs.map((tab) => (
            <Tab.Panel key={tab.label} className="focus:outline-none">
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabNav;
