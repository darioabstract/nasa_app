import React, { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import { Images } from "./components/Images/Images";
import { Apod } from './components/Apod/Apod';
import './App.css';


export const App = () => {


  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/apod" element={<Apod />} />


      </Routes>
    </div>

  );
}


