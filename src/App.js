import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import ProjectIndex from './pages/Projects';
import Perodent from './pages/Projects/Perodent/PerodentHero';
import PerodentContent from './pages/Projects/Perodent/PerodentContent';
import LiquidStashHero from './pages/Projects/LiquidStash/LiquidStashHero';
import LiquidStashContent from './pages/Projects/LiquidStash/LiquidStashContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/liquidStash" element={<ProjectIndex hero={<LiquidStashHero/>} content={<LiquidStashContent/>}/>}/>
        <Route path="/projects/perodent" element={<ProjectIndex hero={<Perodent/>} content={<PerodentContent/>}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

