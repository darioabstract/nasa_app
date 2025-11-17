import React from 'react';
import { FaSearch } from "react-icons/fa";
import { SearchBarProps } from '../../type/appTypes';
import { MdClear } from "react-icons/md";
import "./SearchBar.css";

export const SearchBar = ({ queryValue, setQueryValue, handleSubmit, handleClick }: SearchBarProps) => {

    return (
        <div className='searchBar_container'>
            <form className='search' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="queryWord"
                    placeholder="search for .."
                    value={queryValue}
                    onChange={(e) => setQueryValue(e.target.value)}
                />
                <div className='clear_input' onClick={handleClick}>
                    <MdClear className='clear_button' />
                </div>
                <button className="searchButton" type="submit" >
                    <FaSearch />
                </button>
            </form>
        </div>
    );
}

