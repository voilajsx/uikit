import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import Components from './pages/Components';
import Themes from './pages/Themes';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

// Simple route configuration - users can easily add/remove routes here
export const routes = [
  { path: '/', component: Home },
  { path: '/components', component: Components },
  { path: '/themes', component: Themes },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/error', component: ErrorPage },
];

// Simple router - just routes, nothing else
export const AppRouter: React.FC = () => (
  <Routes>
    {routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);