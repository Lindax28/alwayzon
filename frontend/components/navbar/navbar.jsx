import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import Address from './address';
import GreetingContainer from './greeting_container';
import CartContainer from './cart_container';
import Flag from './flag';
import SearchbarContainer from './searchbar_container'

const Navbar = () => {
  return(
    <nav className="navbar">
      <Logo />
      <Address />
      <SearchbarContainer/>
      <Flag />
      <GreetingContainer />
      <CartContainer />
    </nav>
  )
};

export default Navbar;