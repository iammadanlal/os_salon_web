import React from 'react';
import './Navbar.css';
import SearchBar from './Searchbar'; // Import the SearchBar component

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/Gallery">Gallery</a></li>
      </ul>
      <SearchBar />
    </nav>
  );
}

export default Navbar;

