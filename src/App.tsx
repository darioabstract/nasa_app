import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import { Images } from "./components/Images/Images";
import { SearchBar } from './components/SearchBar/SearchBar';
import './App.css';
import apiCall from './api/apiCall';
import { LinksObject, NasaData } from './type/appTypes';


export const App = () => {
      const [nasamedia, setNasaMedia] = useState<NasaData[]>([]);
  
  
  useEffect(() => {
    apiCall.get(`search?q=moon`).then((res) => {
      const results = res.data.collection.items;
      setNasaMedia(results);
      const filteredImages = results.filter((item: any) => item.data[0].media_type === 'image');
      console.log('filter', results);
      const images = filteredImages.map((image: any) => image.links[1].href);
    });
  }, []);


  return (

    <div className="App">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images data={nasamedia} />} />
      </Routes>
    </div>

  );
}


