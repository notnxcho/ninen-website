import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import ProjectIndex from './pages/Projects';
import PerodentHero from './pages/Projects/Perodent/PerodentHero';
import PerodentContent from './pages/Projects/Perodent/PerodentContent';
import LiquidStashHero from './pages/Projects/LiquidStash/LiquidStashHero';
import LiquidStashContent from './pages/Projects/LiquidStash/LiquidStashContent';
import PiacetHero from './pages/Projects/Piacet/PiacetHero';
import PiacetContent from './pages/Projects/Piacet/PiacetContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/liquidStash" element={<ProjectIndex hero={<LiquidStashHero/>} content={<LiquidStashContent/>}/>}/>
        <Route path="/projects/perodent" element={<ProjectIndex hero={<PerodentHero/>} content={<PerodentContent/>}/>}/>
        <Route path='/projects/piacet' element={<ProjectIndex hero={<PiacetHero/>} content={<PiacetContent/>}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

