/**
 * Ultra minimal examples app with hash routing
 * @module @voilajsx/uikit
 * @file examples/src/App.tsx
 */

import { useState, useEffect } from 'react';
// Direct imports from parent directory
import { ThemeProvider } from '../../src/themes/theme-provider';
import { Button } from '../../src/components/ui/button';
import HeaderDemo from './pages/sections/HeaderDemo';
import FooterDemo from './pages/sections/FooterDemo';
import ContainerDemo from './pages/sections/ContainerDemo';
import PageDemo from './pages/layouts/PageDemo';
import AdminDemo from './pages/layouts/AdminDemo';
import AuthDemo from './pages/layouts/AuthDemo';
import BlankDemo from './pages/layouts/BlankDemo';

function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentRoute(hash);
    };

    // Set initial route
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation function
  const navigate = (path: string) => {
    window.location.hash = path;
  };

  // Render current page
  const renderPage = () => {
    switch (currentRoute) {
      case '/header':
        return <HeaderDemo />;
      case '/footer':
        return <FooterDemo />;
      case '/container':
        return <ContainerDemo />;
      case '/page':
        return <PageDemo />;
        case '/admin':
        return <AdminDemo />;
      case '/auth':
        return <AuthDemo />;
      case '/blank':
        return <BlankDemo />;
      case '/':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div>
{renderPage()}
    </div>
      
  );
}

// Home page component
function HomePage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-foreground">@voilajsx/uikit</h1>
        <p className="text-muted-foreground">Component Examples</p>
        
        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/header')}
            className="w-full"
          >
            Header Demo
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => navigate('/footer')}
            className="w-full"
            disabled
          >
            Footer Demo (Coming Soon)
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => navigate('/admin')}
            className="w-full"
            disabled
          >
            Admin Layout (Coming Soon)
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground mt-8">
          <p>Current route: {window.location.hash || '#/'}</p>
          <p>Try: <code className="bg-muted px-1 rounded">#/header</code></p>
        </div>
      </div>
    </div>
  );
}

export default App;