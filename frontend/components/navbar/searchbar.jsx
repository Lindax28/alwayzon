import React from 'react';
import { Link } from 'react-router-dom';

const Searchbar = () => (
  <div className="searchbar">
    <input className="search-input" type="text" />
    <button type="submit" className="search-button"></button>
  </div>
)

export default Searchbar;