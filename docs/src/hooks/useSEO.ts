/**
 * @fileoverview Native SEO hook using document API
 * @description React 19 compatible SEO management without external dependencies
 * @package @voilajsx/uikit
 * @file /src/hooks/useSEO.ts
 */

import { useEffect } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article';
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalUrl?: string;
}

/**
 * Custom hook for managing document head SEO
 * @param seoData - SEO configuration object
 */
export function useSEO(seoData: SEOData) {
  useEffect(() => {
    // Store original values for cleanup
    const originalTitle = document.title;
    const originalMetas: Array<{ element: HTMLMetaElement; originalContent: string }> = [];
    const originalLinks: Array<{ element: HTMLLinkElement; originalHref: string }> = [];

    // Update title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string, property?: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (meta) {
        // Store original for cleanup
        originalMetas.push({ element: meta, originalContent: meta.content });
        meta.content = content;
      } else {
        // Create new meta tag
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        }
        meta.content = content;
        document.head.appendChild(meta);
        // Mark for removal on cleanup
        originalMetas.push({ element: meta, originalContent: '' });
      }
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (link) {
        originalLinks.push({ element: link, originalHref: link.href });
        link.href = href;
      } else {
        link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
        originalLinks.push({ element: link, originalHref: '' });
      }
    };

    // Update meta tags
    if (seoData.description) {
      updateMetaTag('meta[name="description"]', seoData.description);
    }

    if (seoData.keywords) {
      updateMetaTag('meta[name="keywords"]', seoData.keywords);
    }

    // Open Graph tags
    if (seoData.ogTitle) {
      updateMetaTag('meta[property="og:title"]', seoData.ogTitle, 'og:title');
    }

    if (seoData.ogDescription) {
      updateMetaTag('meta[property="og:description"]', seoData.ogDescription, 'og:description');
    }

    if (seoData.ogUrl) {
      updateMetaTag('meta[property="og:url"]', seoData.ogUrl, 'og:url');
    }

    if (seoData.ogType) {
      updateMetaTag('meta[property="og:type"]', seoData.ogType, 'og:type');
    }

    // Twitter tags
    if (seoData.twitterTitle) {
      updateMetaTag('meta[property="twitter:title"]', seoData.twitterTitle, 'twitter:title');
    }

    if (seoData.twitterDescription) {
      updateMetaTag('meta[property="twitter:description"]', seoData.twitterDescription, 'twitter:description');
    }

    // Canonical URL
    if (seoData.canonicalUrl) {
      updateLinkTag('canonical', seoData.canonicalUrl);
    }

    // Cleanup function
    return () => {
      // Restore original title
      document.title = originalTitle;

      // Restore or remove meta tags
      originalMetas.forEach(({ element, originalContent }) => {
        if (originalContent) {
          element.content = originalContent;
        } else {
          element.remove();
        }
      });

      // Restore or remove link tags
      originalLinks.forEach(({ element, originalHref }) => {
        if (originalHref) {
          element.href = originalHref;
        } else {
          element.remove();
        }
      });
    };
  }, [seoData]);
}

/**
 * Hook specifically for route-based SEO
 * @param route - Current route path
 * @param seoConfig - SEO configuration object
 * @param defaultSEO - Default SEO fallback
 */
export function useRouteSEO(
  route: string, 
  seoConfig: Record<string, any>, 
  defaultSEO: any
) {
  const config = seoConfig[route] || defaultSEO;
  
  const fullTitle = config.title?.includes('@voilajsx/uikit') 
    ? config.title 
    : `${config.title} - @voilajsx/uikit`;
    
  const baseUrl = 'https://voilajsx.github.io/uikit/';
  const canonicalUrl = route === '/' ? baseUrl : `${baseUrl}#${route}`;
  const ogUrl = `${baseUrl}#${route}`;

  useSEO({
    title: fullTitle,
    description: config.description,
    keywords: config.keywords,
    ogTitle: fullTitle,
    ogDescription: config.description,
    ogUrl: ogUrl,
    ogType: config.type || 'website',
    twitterTitle: fullTitle,
    twitterDescription: config.description,
    canonicalUrl: canonicalUrl
  });
}