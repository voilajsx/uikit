/**
 * Ultra minimal home page (not needed with current App.tsx)
 * @module @voilajsx/uikit
 * @file examples/src/pages/Home.tsx
 */

import React from 'react';
import { Button } from '@voilajsx/uikit/button';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-foreground mb-4">UIKit Examples</h1>
      <Button>Hello World</Button>
    </div>
  );
}

export default Home;