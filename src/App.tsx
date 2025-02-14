import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Background from './components/three/Background';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Deployment from './pages/Deployment';
import Teams from './pages/Teams';
import FAQ from './pages/FAQ';
import CustomCursor from './components/common/CustomCursor';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <CustomCursor />
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/deployment" element={<Deployment />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;