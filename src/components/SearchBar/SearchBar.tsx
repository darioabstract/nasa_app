import React, {  useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { SearchBarProps } from '../../type/appTypes';

export const SearchBar: React.FC<SearchBarProps> = ({ queryValue, setQueryValue, handleSubmit }) => {
    


    return (
        <div className='searchBar_container'>
      <form className='search' onSubmit={handleSubmit}>
        <input
          type="text"
          className="queryWord"
          placeholder='Search for ...'
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
        />
        <button className="searchButton" type="submit" >
          <FaSearch />
        </button>
      </form>
    </div>
    );
}

