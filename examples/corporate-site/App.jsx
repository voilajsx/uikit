/**
 * Corporate Site Example App Component
 * 
 * Main application component for the corporate website example that handles navigation
 * between different pages and implements the overall layout structure.
 * 
 * @module examples/corporate-site/App
 */

import React, { useState } from 'react';
import { 
  HeaderFooterLayout, 
  Button, 
  Link, 
  Dropdown,
  useTheme
} from '@voilajsx/uikit';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

/**
 * App component that manages routing and overall layout for corporate site
 * 
 * @returns {JSX.Element} App component
 */
const App = () => {
  // State for current page and mobile menu
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  
  // Navigation items
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];
  
  // Render the current page based on state
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        // Placeholder - would be a separate page in a full implementation
        return (
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              This page is under construction. Please check back later.
            </p>
          </div>
        );
      default:
        return <Home />;
    }
  };
  
  return (
    <HeaderFooterLayout>
      <HeaderFooterLayout.Header fixed>
        <div className="container mx-auto px-4 flex justify-between items-center h-[var(--header-height)]">
          {/* Logo */}
          <div 
            className="text-[var(--primary-color)] font-bold text-xl cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            VoilaJS Corp
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <Link
                key={item.id}
                className={`text-[var(--text-primary)] hover:text-[var(--primary-color)] ${
                  currentPage === item.id ? 'font-medium text-[var(--primary-color)]' : ''
                }`}
                onClick={() => setCurrentPage(item.id)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <Button 
              variant="primary" 
              onClick={() => setCurrentPage('contact')}
            >
              Get in Touch
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] mr-4"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button
              className="text-[var(--text-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[var(--bg-dark)] border-b border-[var(--border-color-default)]">
            <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {navItems.map(item => (
                <Link
                  key={item.id}
                  className={`block py-2 ${
                    currentPage === item.id ? 'font-medium text-[var(--primary-color)]' : 'text-[var(--text-primary)]'
                  }`}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="primary" 
                className="mt-4"
                onClick={() => {
                  setCurrentPage('contact');
                  setMobileMenuOpen(false);
                }}
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </HeaderFooterLayout.Header>
      
      <HeaderFooterLayout.Content headerFixed footerFixed>
        {/* Render the current page */}
        {renderPage()}
      </HeaderFooterLayout.Content>
      
      <HeaderFooterLayout.Footer fixed>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center h-full py-4 md:py-0">
          <div className="mb-4 md:mb-0 text-[var(--text-secondary)] text-center md:text-left">
            © {new Date().getFullYear()} VoilaJS Corp. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="#" variant="secondary">Privacy Policy</Link>
            <Link href="#" variant="secondary">Terms of Service</Link>
            <Link href="#" variant="secondary">Sitemap</Link>
          </div>
        </div>
      </HeaderFooterLayout.Footer>
    </HeaderFooterLayout>
  );
};

export default App;