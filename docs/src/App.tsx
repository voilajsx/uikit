/**
 * Main application with routing structure for auth variants
 * @module @voilajsx/uikit
 * @file src/App.tsx
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Start from './pages/Start';
import Components from './pages/Components';
import Templates from './pages/Templates';
import Themes from './pages/Themes';
import Examples from './pages/Examples';

// Main AuthTemplate page
import AuthTemplatePage from './pages/templates/AuthTemplatePage';

// Individual Auth Variant Pages - NO LAYOUT
import AuthSimpleTemplate from './pages/examples/auth/AuthSimpleTemplate';
import AuthCardTemplate from './pages/examples/auth/AuthCardTemplate';
import AuthSplitGradientTemplate from './pages/examples/auth/AuthSplitGradientTemplate';
import AuthSplitImageTemplate from './pages/examples/auth/AuthSplitImageTemplate';
import AuthCardGradientTemplate from './pages/examples/auth/AuthCardGradientTemplate';
import AuthCardImageTemplate from './pages/examples/auth/AuthCardImageTemplate';

/**
 * Main application component with routing
 * @returns {JSX.Element} Application component
 */
function App(): JSX.Element {
  return (
    <>
      {/* Auth Template Variants WITHOUT Layout - Pure Visual Experience */}
      <Routes>
        <Route path="/examples/auth/simple" element={<AuthSimpleTemplate />} />
        <Route path="/examples/auth/card" element={<AuthCardTemplate />} />
        <Route path="/examples/auth/split-gradient" element={<AuthSplitGradientTemplate />} />
        <Route path="/examples/auth/split-image" element={<AuthSplitImageTemplate />} />
        <Route path="/examples/auth/card-gradient" element={<AuthCardGradientTemplate />} />
        <Route path="/examples/auth/card-image" element={<AuthCardImageTemplate />} />
        
        {/* Main Auth Template Page */}

        {/* All Other Pages WITH Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/start" element={<Start />} />
              <Route path="/components" element={<Components />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/templates/auth" element={<AuthTemplatePage />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/examples" element={<Examples />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </>
  );
}

export default App;