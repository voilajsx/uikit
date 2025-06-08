import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // ✅ Correct - this should be in App.tsx
import Home from './pages/Home';
import Start from './pages/Start';
import Components from './pages/Components';
import Templates from './pages/Templates';
import Themes from './pages/Themes';
import Examples from './pages/Examples';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/components" element={<Components />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </Layout>
  );
}

export default App;