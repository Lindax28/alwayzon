import React from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/Cg';

const Cart = (props) => {
  const loggedIn = () => (
    <Link to="/cart">
      <CgShoppingCart />
      <span>Cart</span>
    </Link>
  );

  const loggedOut = () => (
    <Link to="/login">
      <CgShoppingCart />
      <span>Cart</span>
    </Link>
  );

  return props.currentUser ? loggedIn() : loggedOut()
};

export default Cart;