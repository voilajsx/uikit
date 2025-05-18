import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component for the documentation site
 */
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
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
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              A modern React component library built with Tailwind CSS that
              helps you build beautiful and accessible interfaces with speed and
              confidence.
            </p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/voilajsx/uikit"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
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
              <a
                href="https://twitter.com/voilajsx"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/getting-started/installation"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/components/button"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  to="/theming/overview"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Theming
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/voilajsx/uikit/releases"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Community
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://github.com/voilajsx/uikit/issues"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/voilajsx/uikit/issues/new"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Report a bug
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/voilajsx/uikit/discussions"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/voilajsx/uikit/blob/main/CONTRIBUTING.md"
                  className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} VoilaJSX. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️ by developers for developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
