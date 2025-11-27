import React from 'react';
import MainLayout from './layout/MainLayout';
import './App.css';
import { Route, Routes } from 'react-router-dom'; 
  import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Register from './pages/Register/Register';
import Price from './pages/Price/Price'
import HowToUse from './pages/HowToUse/HowToUse';
import RoadMap from './pages/RoadMap/RoadMap';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />           
        <Route path="/features" element={<Features />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/price' element ={<Price/>}/>
        <Route path='/how-to-use' element={<HowToUse/>}/>
        <Route path='/roadmap' element={<RoadMap/>}/>
      </Route>

    </Routes>
  );
}

export default App;