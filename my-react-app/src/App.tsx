// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Components from './pages/Components';
import Utilities from './pages/Utilities';
import Documentation from './pages/Documentation';
import Examples from './pages/Examples';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </Router>
  );
};

export default App;
