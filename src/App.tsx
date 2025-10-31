import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import { Images } from "./components/Images/Images";
import { SearchBar } from './components/SearchBar/SearchBar';
import './App.css';
import apiCall from './api/apiCall';
import { NasaData } from './type/appTypes';


export const App = () => {
      const [nasamedia, setNasaMedia] = useState<NasaData | []>([]);
  
  
  useEffect(() => {
    apiCall.get(`search?q=moon`).then((res) => {
      const results = res.data.collection.items;
      console.log(results)
    })
  })


  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images  />} />
      </Routes>
      <SearchBar />
    </div>

  );
}


