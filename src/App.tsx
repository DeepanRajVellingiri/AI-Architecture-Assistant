import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/assets/layout/Navbar';
import Background from './components/assets/three/Background';
import Home from './components/pages/Home';
import Architecture from './components/pages/Architecture';
import Deployment from './components/pages/Deployment';
import Teams from './components/pages/Teams';
import FAQ from './components/pages/FAQ';
import CustomCursor from './components/assets/common/CustomCursor';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <CustomCursor />
        <Background />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Routes>
              <Route path="/AI-Architecture-Assistant" element={<Home />} />
              <Route path="/" element={<Navigate to="/AI-Architecture-Assistant" replace />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/deployment" element={<Deployment />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<Navigate to="/AI-Architecture-Assistant" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;