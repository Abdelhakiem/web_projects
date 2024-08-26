import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
  const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    );
  };

export default App;
