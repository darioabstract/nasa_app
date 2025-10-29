import React from 'react';
import "./NavBar.css";
import { NavBarStructure } from '../../utitlities/utility';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return ( 
        <nav className='main_container'>
            <ul className='nav'>
                {NavBarStructure.map((el, index) => {
                    return (
                        <li>
                            <NavLink to={el.to}>{el.link}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
     );
}
 
