import React, { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import { Images } from "./components/Images/Images";
import { SearchBar } from './components/SearchBar/SearchBar';
import './App.css';
import apiCall from './api/apiCall';
import {  NasaData } from './type/appTypes';
import getImages from './hooks/getImages';


export const App = () => {
  const [nasamedia, setNasaMedia] = useState<NasaData[]>([]);
  const [queryValue, setQueryValue] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await apiCall.get(`search?q=${queryValue}`);
    const results = res.data.collection.items;
    const filteredImages = results.filter(
      (item: any) => item.data[0].media_type === 'image'
    );
    setNasaMedia(filteredImages);
  };

  const handleClick = () => {
    setQueryValue('');
  }


  return (

    <div className="App">
      <NavBar />
      <SearchBar queryValue={queryValue} setQueryValue={setQueryValue} handleSubmit={handleSubmit} handleClick={handleClick} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images data={nasamedia} />} />
      </Routes>
    </div>

  );
}


