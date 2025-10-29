import React from 'react';
import "./SearchBar.css";

export const SearchBar = () => {
    return (
        <div className='searchBar_container'>
            <div className='search'>

                <input type="text" placeholder='Search for ...' />
                <button type="submit">Search</button>
            </div>
        </div>
    );
}

