/**
 * Main application with routing structure
 * @module @voilajsx/uikit
 * @file src/App.tsx
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteSEO } from './components/RouteSEO';

// Main documentation pages
import Home from './pages/Home';
import Start from './pages/Start';
import Themes from './pages/Themes';
import Examples from './pages/Examples';

// Component documentation
import Components from './pages/Components';
import Ui from './pages/Ui';
import Sections from './pages/Sections';
import Layouts from './pages/Layouts';

// Testing pages
import TestingPage from './pages/TestingPage';

// Auth examples (no layout)
import AuthSimpleTemplate from './pages/examples/auth/AuthSimpleTemplate';
import AuthCardTemplate from './pages/examples/auth/AuthCardTemplate';
import AuthSplitGradientTemplate from './pages/examples/auth/AuthSplitGradientTemplate';
import AuthSplitImageTemplate from './pages/examples/auth/AuthSplitImageTemplate';
import AuthCardGradientTemplate from './pages/examples/auth/AuthCardGradientTemplate';
import AuthCardImageTemplate from './pages/examples/auth/AuthCardImageTemplate';

// Layout examples (with custom sidebars)
import PageExample from './pages/examples/layouts/PageExample';
import AdminExample from './pages/examples/layouts/AdminExample';
import BlankExample from './pages/examples/layouts/BlankExample';

// Section examples
import ContainerExample from './pages/examples/sections/ContainerExample';
import HeaderExample from './pages/examples/sections/HeaderExample';
import FooterExample from './pages/examples/sections/FooterExample';

/**
 * Main application component with routing
 * @returns {JSX.Element} Application component
 */
function App(): JSX.Element {
  return (
    <>
      {/* Automatic route-based SEO using native document API */}
      <RouteSEO />

      <Routes>
        {/* Main documentation pages */}
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/testing" element={<TestingPage />} />

        {/* Component documentation */}
        <Route path="/components" element={<Components />} />
        <Route path="/components/ui" element={<Ui />} />
        <Route path="/components/sections" element={<Sections />} />
        <Route path="/components/layouts" element={<Layouts />} />

        {/* Auth examples (no layout wrapper) */}
        <Route path="/examples/layouts/auth/simple" element={<AuthSimpleTemplate />} />
        <Route path="/examples/layouts/auth/card" element={<AuthCardTemplate />} />
        <Route path="/examples/layouts/auth/split-gradient" element={<AuthSplitGradientTemplate />} />
        <Route path="/examples/layouts/auth/split-image" element={<AuthSplitImageTemplate />} />
        <Route path="/examples/layouts/auth/card-gradient" element={<AuthCardGradientTemplate />} />
        <Route path="/examples/layouts/auth/card-image" element={<AuthCardImageTemplate />} />

        {/* Layout examples (with custom layouts) */}
        <Route path="/examples/layouts/page" element={<PageExample />} />
        <Route path="/examples/layouts/admin" element={<AdminExample />} />
        <Route path="/examples/layouts/blank" element={<BlankExample />} />

        {/* Section examples */}
        <Route path="/examples/sections/container" element={<ContainerExample />} />
        <Route path="/examples/sections/header" element={<HeaderExample />} />
        <Route path="/examples/sections/footer" element={<FooterExample />} />

        {/* 404 fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;