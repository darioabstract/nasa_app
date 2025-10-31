import React, {  useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ( ) => {
    const [queryValue, setQueryValue] = useState<string>('');
    


    return (
        <div className='searchBar_container'>
            <div className='search'>

                <input
                    type="text"
                    className="queryWord"
                    placeholder='Search for ...'
                    value={queryValue}
                    onChange={(e) => setQueryValue(e.target.value)}
                />
                <button
                    className="searchButton"
                    type="submit"
                    
                >
                    <FaSearch/>
                </button>
            </div>
        </div>
    );
}

