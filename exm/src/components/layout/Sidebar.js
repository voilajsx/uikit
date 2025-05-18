import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import navigation from '../../data/navigation';

/**
 * Sidebar navigation component for the documentation site
 */
const Sidebar = ({ className = '' }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Determine which section should be open based on current route
  useEffect(() => {
    const currentPath = location.pathname;

    // Find which section contains the current path
    const section = navigation.sections.find((section) =>
      section.items.some((item) => currentPath.startsWith(item.href))
    );

    if (section) {
      setActiveSection(section.name);
    }
  }, [location.pathname]);

  return (
    <div
      className={`w-full lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:py-6 lg:px-6 ${className}`}
    >
      <nav className="space-y-8">
        {/* Getting Started Section */}
        <div>
          <h5 className="mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wider dark:text-gray-200">
            Getting Started
          </h5>
          <ul className="space-y-2">
            {navigation.sections
              .find((s) => s.name === 'Getting Started')
              ?.items.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>

        {/* Components Sections */}
        {navigation.sections
          .filter((section) => section.name !== 'Getting Started')
          .map((section) => (
            <Disclosure
              key={section.name}
              as="div"
              defaultOpen={section.name === activeSection}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full text-left mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wider dark:text-gray-200">
                    <span>{section.name}</span>
                    <ChevronRightIcon
                      className={`${
                        open ? 'transform rotate-90' : ''
                      } w-5 h-5 text-gray-500`}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mb-4">
                    <ul className="space-y-2 pl-2 border-l border-gray-200 dark:border-gray-700">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              `nav-link ${isActive ? 'active' : ''}`
                            }
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}

        {/* Footer Area in Sidebar */}
        <div className="lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-6">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 lg:mt-0">
            <a
              href="https://github.com/voilajsx/uikit/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              Report an issue
            </a>

            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              <p>© {new Date().getFullYear()} VoilaJSX UIKit</p>
              <p>Version: v1.0.0</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
