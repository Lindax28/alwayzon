import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import Address from './address';
import GreetingContainer from './greeting_container';
import CartContainer from './cart_container';


const Navbar = () => {
  return(
    <div className="navbar">
      <Logo />
      <Address />
      <GreetingContainer />
      <CartContainer />
    </div>
  )
};

export default Navbar;