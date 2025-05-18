/**
 * Badge Component Example
 * 
 * Demonstrates various badge variants, sizes, and use cases
 */

import React from 'react';
import { Badge } from '../../../src/components/elements';
import { Card } from '../../../src/components/display';

const BadgeExample = () => {
  return (
    <div>
      <div className="test-section">
        <h2>Badge Variants</h2>
        <div className="test-row">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info" >Info</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="dark">Dark</Badge>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Badge Sizes</h2>
        <div className="test-row">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="bg-primary-soft">Badge with Custom Styling</h2>
        <div className="text-primary">Sample</div>
        <div className="flex gap-2">
          this is sample 
          <Badge
            variant="primary"
            className="px-3 py-1 font-bold rounded-xl"
          >
            Custom Padding
          </Badge>
          new one
          <Badge
            variant="secondary"
            style={{ borderRadius: '0.25rem' }}
          >
            Custom Border Radius
          </Badge>
          
          <Badge
            variant="success"
            className="border border-red-500 border-opacity-50"
          >
            With Border
          </Badge>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Badge Use Cases</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Badges with Text</h3>
            <p className="flex items-center gap-2">
              This feature is <Badge variant="primary">New</Badge>
            </p>
            
            <p className="flex items-center gap-2 mt-2">
              Notifications <Badge variant="danger">5</Badge>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Status Indicators</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="success">Active</Badge>
                <span>User account is active and in good standing</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="warning">Pending</Badge>
                <span>Waiting for email verification</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="danger">Suspended</Badge>
                <span>Account has been temporarily suspended</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Badges in Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <Card.Body>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">Product Name</h3>
                      <p className="text-[var(--text-secondary)]">Product description goes here</p>
                    </div>
                    <Badge variant="primary">$19.99</Badge>
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Body>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">Support Ticket #1234</h3>
                      <p className="text-[var(--text-secondary)]">Reported issue with login</p>
                    </div>
                    <Badge variant="warning">In Progress</Badge>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeExample;