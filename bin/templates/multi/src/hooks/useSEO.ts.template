/**
 * Simple SEO Hook
 * Manages page title and meta description using native document API
 */

import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description?: string;
}

export const useSEO = ({
  title = 'UIKit Multi-Page Demo',
  description = 'Professional React components with file-based routing, showcasing layouts, navigation, and code organization'
}: SEOOptions = {}) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    // Set viewport if not already present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }
  }, [title, description]);
};