/**
 * Dashboard Example App Component
 * 
 * Main application component for the dashboard example that handles navigation
 * between different pages and implements the overall layout structure.
 * 
 * @module examples/dashboard/App
 */

import React, { useState } from 'react';
import { 
  SidebarLayout, 
  Menu, 
  Avatar, 
  Button, 
  Dropdown,
  Badge,
  useTheme
} from '@voilajsx/uikit';
import { 
  HomeIcon, 
  UserIcon, 
  ChartBarIcon, 
  CogIcon, 
  LogoutIcon, 
  DotsVerticalIcon
} from '@voilajsx/uikit/icons';

// Import page components
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';

/**
 * App component that manages routing and overall layout
 * 
 * @returns {JSX.Element} App component
 */
const App = () => {
  // State for current page and mobile menu
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { darkMode, toggleDarkMode } = useTheme();
  
  // Render the current page based on state
  const renderPage = () => {
    switch(currentPage) {
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
    <SidebarLayout collapsible>
      <SidebarLayout.Sidebar>
        {/* Logo/Brand */}
        <div className="p-[var(--spacing-4)] flex items-center">
          <div className="text-[var(--primary-color)] font-bold text-xl">VoilaJS</div>
        </div>
        
        {/* Navigation Menu */}
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
              <Badge className="ml-2" size="sm" variant="primary">New</Badge>
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
        
        {/* User Profile Area */}
        <div className="mt-auto p-[var(--spacing-4)] border-t border-[var(--border-color-default)]">
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
              <Dropdown.Item icon={<CogIcon />}>Account Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={<LogoutIcon />} className="text-[var(--error-color)]">
                Logout
              </Dropdown.Item>
            </Dropdown>
          </div>
          
          {/* Dark Mode Toggle */}
          <div className="mt-[var(--spacing-4)] flex items-center">
            <span className="mr-[var(--spacing-2)] text-sm">Dark Mode</span>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="opacity-0 w-0 h-0"
              />
              <span className={`
                absolute cursor-pointer inset-0 
                rounded-full bg-[var(--bg-subtle)] 
                transition-all duration-300
                ${darkMode ? 'bg-[var(--primary-color)]' : ''}
              `}>
                <span className={`
                  absolute h-5 w-5 rounded-full 
                  bg-white shadow-md
                  transition-all duration-300
                  top-0.5 left-0.5
                  ${darkMode ? 'transform translate-x-6' : ''}
                `}></span>
              </span>
            </label>
          </div>
        </div>
      </SidebarLayout.Sidebar>
      
      <SidebarLayout.Main>
        {/* Render the current page */}
        {renderPage()}
      </SidebarLayout.Main>
    </SidebarLayout>
  );
};

export default App;