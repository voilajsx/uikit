import React, { useState } from 'react';
import Button from '../../../src/components/elements/Button';

/**
 * Button Component Example
 * 
 * Demonstrates various button variants, sizes, states, and features
 */
const ButtonExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  
  // Simple icons for testing
  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  );
  
  return (
    <div>
      <div className="test-section">
        <h2>Button Variants</h2>
        <div>
        <h3 className="text-lg font-medium mb-3">Solid Buttons</h3>
        <div className="test-row flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
        </div>
      </div>

      {/* Outline Variants */}
      <div>
        <h3 className="text-lg font-medium mb-3">Outline Buttons</h3>
        <div className="test-row flex flex-wrap gap-2">
          <Button variant="primary-outline">Primary</Button>
          <Button variant="secondary-outline">Secondary</Button>
          <Button variant="success-outline">Success</Button>
          <Button variant="danger-outline">Danger</Button>
          <Button variant="warning-outline">Warning</Button>
          <Button variant="info-outline">Info</Button>
          <Button variant="light-outline">Light</Button>
          <Button variant="dark-outline">Dark</Button>
        </div>
      </div>

      {/* Soft Variants */}
      <div>
        <h3 className="text-lg font-medium mb-3">Soft Buttons</h3>
        <div className="test-row flex flex-wrap gap-2">
          <Button variant="primary-soft">Primary</Button>
          <Button variant="secondary-soft">Secondary</Button>
          <Button variant="success-soft">Success</Button>
          <Button variant="danger-soft">Danger</Button>
          <Button variant="warning-soft">Warning</Button>
          <Button variant="info-soft">Info</Button>
          <Button variant="light-soft">Light</Button>
          <Button variant="dark-soft">Dark</Button>
        </div>
      </div>

      {/* Special Variants */}
      <div>
        <h3 className="text-lg font-medium mb-3">Special Variants</h3>
        <div className="test-row flex flex-wrap gap-2">
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Button States */}
      <div>
        <h3 className="text-lg font-medium mb-3">Button States</h3>
        <div className="test-row flex flex-wrap gap-2">
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" fullWidth className="max-w-xs">Full Width</Button>
        </div>
      </div>
      </div>
      
      <div className="test-section">
        <h2>Button Sizes</h2>
        <div className="test-row">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="2xl">2X Large</Button>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Button with Icons</h2>
        <div className="test-row">
          <Button leftIcon={<PlusIcon />}>With Left Icon</Button>
          <Button rightIcon={<ArrowRightIcon />}>With Right Icon</Button>
          <Button leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />}>With Both Icons</Button>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Button States</h2>
        <div className="test-row">
          <Button disabled>Disabled Button</Button>
          <Button isLoading={isLoading} onClick={handleLoadingClick}>
            {isLoading ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button isLoading loadingText="Processing...">Submit</Button>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Full Width Button</h2>
        <div className="test-row">
          <div style={{ width: '100%' }}>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;