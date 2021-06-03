import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/Ai';
import { GoTriangleDown } from 'react-icons/Go';

const Searchbar = () => (
  <div className="searchbar">
    <button type="button" className="search-menu">All<GoTriangleDown fill="gray" className="dropdown-arrow"/></button>
    <input className="search-input" type="text" />
    <button type="submit" className="search-button"><AiOutlineSearch fill="#555555" /></button>
  </div>
)

export default Searchbar;