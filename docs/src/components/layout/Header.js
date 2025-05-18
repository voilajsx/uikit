import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import {
  XMarkIcon,
  Bars3Icon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import navigation from '../../data/navigation';

/**
 * Main header component for the documentation site
 */
const Header = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to detect when header should change style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'header-scroll' : 'bg-white dark:bg-gray-900'
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="flex items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary-600"
                    >
                      <path
                        d="M4 5.5C4 4.67157 4.67157 4 5.5 4H18.5C19.3284 4 20 4.67157 20 5.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.67157 20 4 19.3284 4 18.5V5.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8 9C8 8.44772 8.44772 8 9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9Z"
                        fill="white"
                      />
                    </svg>
                    <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                      VoilaJSX UIKit
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                  {navigation.topNav.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                          isActive
                            ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Dark mode toggle */}
                <button
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                  className="ml-3 p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label={
                    darkMode ? 'Switch to light mode' : 'Switch to dark mode'
                  }
                >
                  {darkMode ? (
                    <SunIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>

                {/* GitHub link */}
                <a
                  href="https://github.com/voilajsx/uikit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label="GitHub repository"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.127 8.84 21.496C9.34 21.59 9.517 21.281 9.517 21.012C9.517 20.777 9.51 20.139 9.507 19.308C6.726 19.91 6.141 17.962 6.141 17.962C5.69 16.811 5.029 16.5 5.029 16.5C4.132 15.872 5.098 15.885 5.098 15.885C6.092 15.956 6.624 16.928 6.624 16.928C7.52 18.494 8.97 18.01 9.536 17.752C9.629 17.077 9.889 16.595 10.175 16.344C7.954 16.09 5.62 15.25 5.62 11.39C5.62 10.258 6.01 9.334 6.644 8.616C6.535 8.361 6.2 7.294 6.746 5.976C6.746 5.976 7.586 5.704 9.495 6.939C10.29 6.71 11.15 6.595 12 6.59C12.85 6.595 13.71 6.71 14.505 6.939C16.413 5.704 17.251 5.976 17.251 5.976C17.8 7.294 17.465 8.361 17.356 8.616C17.991 9.334 18.38 10.258 18.38 11.39C18.38 15.262 16.042 16.086 13.81 16.334C14.16 16.641 14.48 17.249 14.48 18.18C14.48 19.499 14.468 20.681 14.468 21.011C14.468 21.281 14.642 21.593 15.152 21.493C19.124 20.121 22 16.439 22 12.017C22 6.484 17.523 2 12 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.topNav.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 text-base font-medium border-l-4 ${
                      isActive
                        ? 'border-primary-600 text-primary-600 bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:bg-primary-900/10'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/30 dark:hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            {/* Mobile component dropdown sections */}
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              {navigation.sections.map((section) => (
                <Disclosure key={section.name} as="div" className="px-3 mb-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/30 rounded-md">
                        <span>{section.name}</span>
                        <ChevronDownIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-gray-500`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Disclosure.Panel className="px-4 pt-2 pb-2 space-y-1">
                          {section.items.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as={NavLink}
                              to={item.href}
                              className={({ isActive }) =>
                                `block py-2 pl-3 pr-4 text-sm rounded-md ${
                                  isActive
                                    ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/10'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/30 dark:hover:text-white'
                                }`
                              }
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>

            {/* Mobile actions */}
            <div className="py-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-4">
                <button
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                >
                  {darkMode ? (
                    <>
                      <SunIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>

                <a
                  href="https://github.com/voilajsx/uikit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.127 8.84 21.496C9.34 21.59 9.517 21.281 9.517 21.012C9.517 20.777 9.51 20.139 9.507 19.308C6.726 19.91 6.141 17.962 6.141 17.962C5.69 16.811 5.029 16.5 5.029 16.5C4.132 15.872 5.098 15.885 5.098 15.885C6.092 15.956 6.624 16.928 6.624 16.928C7.52 18.494 8.97 18.01 9.536 17.752C9.629 17.077 9.889 16.595 10.175 16.344C7.954 16.09 5.62 15.25 5.62 11.39C5.62 10.258 6.01 9.334 6.644 8.616C6.535 8.361 6.2 7.294 6.746 5.976C6.746 5.976 7.586 5.704 9.495 6.939C10.29 6.71 11.15 6.595 12 6.59C12.85 6.595 13.71 6.71 14.505 6.939C16.413 5.704 17.251 5.976 17.251 5.976C17.8 7.294 17.465 8.361 17.356 8.616C17.991 9.334 18.38 10.258 18.38 11.39C18.38 15.262 16.042 16.086 13.81 16.334C14.16 16.641 14.48 17.249 14.48 18.18C14.48 19.499 14.468 20.681 14.468 21.011C14.468 21.281 14.642 21.593 15.152 21.493C19.124 20.121 22 16.439 22 12.017C22 6.484 17.523 2 12 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
