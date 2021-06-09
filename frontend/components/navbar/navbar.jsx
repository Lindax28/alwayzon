import React from 'react';
import { Link } from 'react-router-dom';
import { DarkLogo } from './logo';
import Address from './address';
import SearchbarContainer from './searchbar_container'
import Flag from './flag';
import GreetingContainer from './greeting_container';
import CartContainer from './cart_container';
import CategoryNavbarContainer from './category_navbar_container';

const Navbar = () => {
  return(
    <div>
      <nav className="navbar">
        <DarkLogo />
        <Address />
        <SearchbarContainer/>
        <Flag />
        <GreetingContainer />
        <CartContainer />
      </nav>
      <CategoryNavbarContainer />
    </div>
  )
};

export default Navbar;