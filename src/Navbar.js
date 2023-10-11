import React from 'react';
import './Navbar.css';
import SearchBar from './Searchbar'; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/Gallery">Gallery</a></li>
      </ul>
      <div className="search-bar-container"> 
        <SearchBar /> 
      </div>
    </nav>
  );
}

export default Navbar;


