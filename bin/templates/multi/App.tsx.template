import React, { Suspense } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { PageLayout } from '@voilajsx/uikit/page';
import { Header, Footer } from './components';
import { AppRouter } from './router';

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex items-center gap-3 text-muted-foreground">
      <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
      <span>Loading page...</span>
    </div>
  </div>
);

// Layout wrapper that chooses layout based on current route
const LayoutWrapper: React.FC = () => {
  const location = useLocation();
  
  if (location.pathname === '/login') {
    // Login page handles its own AuthLayout
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AppRouter />
      </Suspense>
    );
  }
  
  
  if (location.pathname === '/dashboard' || location.pathname.startsWith('/dashboard')) {
    // Dashboard uses its own AdminLayout from the page component
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AppRouter />
      </Suspense>
    );
  }
  
  if (location.pathname === '/error' || location.pathname.startsWith('/error')) {
    // ErrorPage uses its own BlankLayout
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AppRouter />
      </Suspense>
    );
  }
  
  // Default: PageLayout for all other pages
  return (
    <PageLayout scheme="default" tone="clean" size="xl">
      <Header />
      <PageLayout.Content>
        <Suspense fallback={<LoadingSpinner />}>
          <AppRouter />
        </Suspense>
      </PageLayout.Content>
      <Footer />
    </PageLayout>
  );
};

function App() {
  return (
    <ThemeProvider theme="elegant" mode="light">
      <Router>
        <LayoutWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;