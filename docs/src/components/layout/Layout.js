import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

/**
 * Main layout component that wraps all pages
 */
const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Initialize dark mode from local storage or system preference
  useEffect(() => {
    // Check for saved preference
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // If no saved preference, use system preference
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  // Update dark mode class and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Check if current page is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex-1 flex">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Mobile sidebar toggle */}
        {!isHomePage && (
          <button
            type="button"
            className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary-600 text-white shadow-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        )}

        {/* Sidebar - only show on non-home pages */}
        {!isHomePage && (
          <aside
            className={`fixed lg:sticky z-50 lg:z-auto top-16 bottom-0 left-0 lg:top-16 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <Sidebar />
          </aside>
        )}

        {/* Main content area */}
        <main className={`flex-1 ${!isHomePage ? 'lg:ml-72' : ''}`}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>

          <Footer />
        </main>
      </div>

      {/* Development tools - breakpoint indicator */}
      {process.env.NODE_ENV === 'development' && (
        <div className="breakpoint-indicator" />
      )}
    </div>
  );
};

export default Layout;
