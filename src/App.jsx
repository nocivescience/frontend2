import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.jsx'; 
import { Fiscalia } from './components/Fiscalia.jsx';
import { NavBar } from './components/NavBar.jsx';
import { JuzgadoPoliciaLocal } from './components/JuzgadoPoliciaLocal.jsx';
import { CorteApelaciones } from './components/CorteApelaciones.jsx';
import { CorteSuprema } from './components/CorteSuprema.jsx';
import { Leyes } from './components/Leyes.jsx';
export const  App=()=> {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiscalia" element={<Fiscalia />} />
        <Route path="/jpl" element={<JuzgadoPoliciaLocal />} />
        <Route path="/corteapelaciones" element={<CorteApelaciones />} />
        <Route path="/cortesuprema" element={<CorteSuprema />} />
        <Route path="/leyes" element={<Leyes />} />
      </Routes>
    </BrowserRouter>
  )
}