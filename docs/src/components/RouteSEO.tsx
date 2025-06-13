/**
 * @fileoverview Route-based SEO component using native document API
 * @description React 19 compatible SEO management without external dependencies
 * @package @voilajsx/uikit
 * @file /src/components/RouteSEO.tsx
 */

import { useLocation } from 'react-router-dom';
import { useRouteSEO } from '../hooks/useSEO';
import { seoConfig, defaultSEO } from '../seo';

/**
 * RouteSEO component that automatically applies SEO based on current route
 * Uses native document API for React 19 compatibility
 * @returns {null} This component only manages document head, no render
 */
export function RouteSEO(): null {
  const location = useLocation();
  
  // Apply SEO for current route
  useRouteSEO(location.pathname, seoConfig, defaultSEO);
  
  // This component doesn't render anything
  return null;
}