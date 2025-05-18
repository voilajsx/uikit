import React, { useState } from 'react';
import Card from '../../../src/components/display/Card';
import Button from '../../../src/components/elements/Button';

/**
 * A simple utility function to merge class names - for test purposes only
 * In real implementation, we'd import from utils/cn
 */
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Mock implementation of useTheme for testing
const useTheme = () => {
  return {
    theme: null,
    darkMode: false
  };
};

// Mock ThemeProvider to avoid import errors
const MockThemeProvider = ({ children }) => children;

// Create temp module reference to avoid import errors
React.forwardRef = React.forwardRef || ((render) => render);

/**
 * Test component for Card
 */
const CardTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <div className="test-section">
        <h2>Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="default">
            <Card.Header>Default Card</Card.Header>
            <Card.Body>
              <p>This is a default card with standard styling.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline" size="sm" className="mr-2">Cancel</Button>
              <Button variant="primary" size="sm">Save</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="elevated">
            <Card.Header>Elevated Card</Card.Header>
            <Card.Body>
              <p>This card has elevated styling with more prominent shadow.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline" size="sm" className="mr-2">Cancel</Button>
              <Button variant="primary" size="sm">Save</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="outline">
            <Card.Header>Outline Card</Card.Header>
            <Card.Body>
              <p>This card has a more prominent border but no shadow.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline" size="sm" className="mr-2">Cancel</Button>
              <Button variant="primary" size="sm">Save</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="filled">
            <Card.Header>Filled Card</Card.Header>
            <Card.Body>
              <p>This card has a subtle background fill and no shadow.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline" size="sm" className="mr-2">Cancel</Button>
              <Button variant="primary" size="sm">Save</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Card Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card hoverable>
            <Card.Header>Hoverable Card</Card.Header>
            <Card.Body>
              <p>This card has a hover effect when you mouse over it.</p>
            </Card.Body>
          </Card>
          
          <Card interactive onClick={() => alert('Card clicked!')}>
            <Card.Header>Interactive Card</Card.Header>
            <Card.Body>
              <p>This entire card is clickable like a button.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Card with Custom Content</h2>
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <Card.Body>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">John Doe</h3>
                  <p className="text-[var(--text-secondary)]">Frontend Developer</p>
                  <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" size="sm" className="mr-2">Follow</Button>
              <Button variant="outline" size="sm">Message</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardTest;