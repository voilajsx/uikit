/**
 * Main application component for the dashboard example
 * 
 * Handles routing between dashboard pages and layout structure
 * @module examples/dashboard/App
 */
import React, { useState } from 'react';
import {
  SidebarLayout,
  Button,
  Menu,
  Avatar,
  Dropdown,
  Badge
} from '@voilajsx/uikit';

import {
  HomeIcon,
  UserIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  LogoutIcon,
  DotsVerticalIcon,
  SearchIcon
} from '@voilajsx/uikit/icons';

// Import page components
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';

/**
 * App component with navigation and page routing
 * 
 * @returns {JSX.Element} The rendered App component
 */
const App = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);
  
  // Sample notifications
  const notifications = [
    { id: 1, message: 'New user registration', time: '5 minutes ago' },
    { id: 2, message: 'Server reached 80% capacity', time: '1 hour ago' },
    { id: 3, message: 'Monthly report generated', time: '3 hours ago' }
  ];
  
  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarLayout>
      <SidebarLayout.Sidebar>
        <div className="p-[var(--spacing-4)] flex items-center">
          <div className="text-[var(--primary-color)] font-bold text-xl">VoilaJSX</div>
        </div>
        
        <div className="mt-[var(--spacing-6)]">
          <Menu>
            <Menu.Item 
              icon={<HomeIcon />} 
              active={currentPage === 'dashboard'} 
              onClick={() => setCurrentPage('dashboard')}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item 
              icon={<UserIcon />} 
              active={currentPage === 'users'} 
              onClick={() => setCurrentPage('users')}
            >
              Users
            </Menu.Item>
            <Menu.Item 
              icon={<ChartBarIcon />} 
              active={currentPage === 'analytics'} 
              onClick={() => setCurrentPage('analytics')}
            >
              Analytics
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item 
              icon={<CogIcon />} 
              active={currentPage === 'settings'} 
              onClick={() => setCurrentPage('settings')}
            >
              Settings
            </Menu.Item>
          </Menu>
        </div>
        
        <div className="mt-auto p-[var(--spacing-4)]">
          <div className="flex items-center">
            <Avatar name="John Doe" size="sm" />
            <div className="ml-[var(--spacing-2)]">
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-[var(--text-secondary)]">Administrator</div>
            </div>
            <Dropdown 
              trigger={
                <Button variant="ghost" size="sm" className="ml-auto">
                  <DotsVerticalIcon />
                </Button>
              }
            >
              <Dropdown.Item icon={<UserIcon />}>Profile</Dropdown.Item>
              <Dropdown.Item icon={<CogIcon />}>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={<LogoutIcon />}>Logout</Dropdown.Item>
            </Dropdown>
          </div>
          
          <div className="mt-[var(--spacing-4)] flex items-center">
            <span className="mr-[var(--spacing-2)]">Dark Mode</span>
            <label className="relative inline-block w-10 h-5">
              <input
                type="checkbox"
                className="opacity-0 w-0 h-0"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className={`absolute cursor-pointer inset-0 rounded-full bg-[var(--bg-subtle)] border transition-all duration-300 ${
                darkMode ? 'bg-[var(--primary-color)] border-[var(--primary-color)]' : 'border-[var(--border-color-default)]'
              }`}>
                <span className={`absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 ${
                  darkMode ? 'translate-x-5' : 'translate-x-0'
                }`}></span>
              </span>
            </label>
          </div>
        </div>
      </SidebarLayout.Sidebar>
      
      <SidebarLayout.Main>
        <div className="mb-[var(--spacing-6)]">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h1>
            
            <div className="flex space-x-[var(--spacing-2)]">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-4 py-2 w-full border border-[var(--border-color-default)] rounded-[var(--radius-default)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50"
                />
                <div className="absolute left-3 top-2.5 text-[var(--text-secondary)]">
                  <SearchIcon size="sm" />
                </div>
              </div>
              
              <Dropdown
                trigger={
                  <Button variant="ghost" size="sm" className="relative">
                    <BellIcon />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--error-color)] rounded-full"></span>
                  </Button>
                }
              >
                <div className="px-[var(--spacing-2)] py-[var(--spacing-1)] text-sm font-medium">
                  Notifications
                </div>
                <Dropdown.Divider />
                {notifications.map(notification => (
                  <Dropdown.Item key={notification.id}>
                    <div>
                      <div>{notification.message}</div>
                      <div className="text-xs text-[var(--text-secondary)]">
                        {notification.time}
                      </div>
                    </div>
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item>
                  <div className="text-center text-sm">View all notifications</div>
                </Dropdown.Item>
              </Dropdown>
              
              <Button variant="primary" size="sm">
                New Item
              </Button>
            </div>
          </div>
        </div>
        
        {/* Render the current page */}
        {renderPage()}
      </SidebarLayout.Main>
    </SidebarLayout>
  );
};

export default App;