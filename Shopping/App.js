import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './pages/Nav';
import Collection from './pages/Collection';

  const App = () => {
    return (
      <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>


    );
  };

export default App;