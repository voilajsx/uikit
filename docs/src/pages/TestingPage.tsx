import React from 'react';
import TestingLayout from '../components/TestingLayout';

function TestingPage() {
  return (
    <TestingLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Header Component Test</h1>
        <p className="text-muted-foreground">
          This page demonstrates the Header compound component in action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Feature 1</h3>
            <p>Sample content</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Feature 2</h3>
            <p>Sample content</p>
          </div>
        </div>
      </div>
    </TestingLayout>
  );
}

export default TestingPage;