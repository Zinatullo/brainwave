import React from 'react';
import Header from './components/Header'; // если используешь внутри MainLayout
import MainLayout from './layout/MainLayout'; // ← правильный путь (src не нужен)
import './App.css';
import { Route, Routes } from 'react-router-dom'; // ← dom в конце!

import Home from './components/Home';
import Features from './pages/Features/Features';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />           
        <Route index element={<Home />} />              
        <Route path="/features" element={<Features />} />
      </Route>

    </Routes>
  );
}

export default App;