import React, { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import { Images } from "./components/Images/Images";
import './App.css';


export const App = () => {

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images   />} />
      </Routes>
    </div>

  );
}


