import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import LiquidStash from './pages/Projects/LiquidStash/LiquidStash';
import ProjectIndex from './pages/Projects';
import Perodent from './pages/Projects/Perodent/Perodent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/liquidStash" element={<ProjectIndex hero={<LiquidStash/>}/>}/>
        <Route path="/projects/perodent" element={<ProjectIndex hero={<Perodent/>}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

