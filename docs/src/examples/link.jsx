/**
 * Link Component Example
 * 
 * Demonstrates various link variants, sizes, and use cases
 */

import React from 'react';
import { Link } from '../../../src/components/elements';
import { Card } from '../../../src/components/display';
import { Badge } from '../../../src/components/elements';

const LinkExample = () => {
  return (
    <div>
      <div className="test-section">
        <h2>Link Variants</h2>
        <div className="test-row flex flex-wrap gap-6">
          <Link href="#" variant="primary">Primary Link</Link>
          <Link href="#" variant="secondary">Secondary Link</Link>
          <Link href="#" variant="success">Success Link</Link>
          <Link href="#" variant="danger">Danger Link</Link>
          <Link href="#" variant="warning">Warning Link</Link>
          <Link href="#" variant="info">Info Link</Link>
          <Link href="#" variant="light" className="bg-gray-800 p-1">Light Link</Link>
          <Link href="#" variant="dark">Dark Link</Link>
          <Link href="#" variant="subtle">Subtle Link</Link>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Link Sizes</h2>
        <div className="test-row flex flex-wrap items-center gap-6">
          <Link href="#" size="xs">Extra Small</Link>
          <Link href="#" size="sm">Small</Link>
          <Link href="#" size="md">Medium</Link>
          <Link href="#" size="lg">Large</Link>
          <Link href="#" size="xl">Extra Large</Link>
          <Link href="#" size="2xl">2X Large</Link>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Link Styles</h2>
        <div className="test-row flex flex-wrap items-center gap-6">
          <Link href="#" underline={true}>With Underline</Link>
          <Link href="#" underline={false}>Without Underline</Link>
          <Link href="#" external>External Link</Link>
          <Link href="#" disabled>Disabled Link</Link>
          <Link href="#" className="font-bold">Bold Link</Link>
          <Link href="#" className="italic">Italic Link</Link>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Link with Custom Styling</h2>
        <div className="test-row flex flex-wrap items-center gap-6">
          <Link
            href="#"
            className="px-3 py-1 rounded-lg bg-[var(--primary-color)] bg-opacity-10 no-underline"
            underline={false}
          >
            Button-like Link
          </Link>
          
          <Link
            href="#"
            style={{ textDecoration: 'wavy underline' }}
            variant="secondary"
          >
            Wavy Underline
          </Link>
          
          <Link
            href="#"
            className="border-b-2 border-[var(--primary-color)] hover:border-[var(--primary-dark)]"
            underline={false}
          >
            Border Bottom
          </Link>
          
          <Link
            href="#"
            className="flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </Link>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Link Use Cases</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Links in Text</h3>
            <p className="max-w-2xl">
              This is a paragraph of text that includes a <Link href="#">link to another page</Link>. 
              Links can appear anywhere within text content and should be easily distinguishable. 
              You might also want to <Link href="#" variant="secondary">check out this resource</Link> or 
              <Link href="#" variant="danger"> report an issue</Link> if you encounter any problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation Links</h3>
            <nav className="bg-[var(--bg-subtle)] p-4 rounded-lg">
              <ul className="flex space-x-6">
                <li><Link href="#" underline={false} variant="primary">Home</Link></li>
                <li><Link href="#" underline={false} variant="subtle">Products</Link></li>
                <li><Link href="#" underline={false} variant="subtle">Services</Link></li>
                <li><Link href="#" underline={false} variant="subtle">About</Link></li>
                <li><Link href="#" underline={false} variant="subtle">Contact</Link></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Card with Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <Card.Body>
                  <h4 className="text-lg font-medium mb-2">Documentation</h4>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Learn how to use our API with comprehensive guides and examples.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link href="#" underline={false} className="font-medium">
                      Read the docs
                      <span className="ml-1">→</span>
                    </Link>
                    <Badge variant="primary">Updated</Badge>
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Body>
                  <h4 className="text-lg font-medium mb-2">Support</h4>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Get help with our products from our support team.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="#" variant="primary" underline={false}>Contact support</Link>
                    <Link href="#" variant="subtle" underline={false}>FAQs</Link>
                    <Link href="#" variant="subtle" underline={false}>Knowledge base</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Breadcrumb Navigation</h3>
            <div className="flex items-center text-sm">
              <Link href="#" variant="subtle" underline={false}>Home</Link>
              <span className="mx-2 text-[var(--text-secondary)]">/</span>
              <Link href="#" variant="subtle" underline={false}>Products</Link>
              <span className="mx-2 text-[var(--text-secondary)]">/</span>
              <Link href="#" variant="subtle" underline={false}>Categories</Link>
              <span className="mx-2 text-[var(--text-secondary)]">/</span>
              <span className="text-[var(--text-primary)]">Electronics</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Footer Links</h3>
            <footer className="bg-[var(--bg-subtle)] p-6 rounded-lg mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Company</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" variant="subtle" underline={false}>About</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>Careers</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>Press</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>Blog</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Resources</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" variant="subtle" underline={false}>Documentation</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>Help Center</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>API Reference</Link></li>
                    <li><Link href="#" variant="subtle" external underline={false}>Community Forum</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Legal</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" variant="subtle" underline={false}>Privacy Policy</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>Terms of Service</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>Cookie Policy</Link></li>
                    <li><Link href="#" variant="subtle" underline={false}>GDPR</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[var(--border-color-default)] text-center text-[var(--text-secondary)]">
                <p>© 2023 Your Company. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkExample;