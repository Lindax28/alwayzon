import React from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';

const Cart = (props) => {
  const loggedIn = () => (
    <Link to="/cart" className="cart bold">
      <CgShoppingCart className="cart-icon"/>
      <span>&nbsp;Cart</span>
    </Link>
  );

  const loggedOut = () => (
    <Link to="/login" className="cart bold">
      <CgShoppingCart className="cart-icon" />
      <span>&nbsp;Cart</span>
    </Link>
  );

  return props.currentUser ? loggedIn() : loggedOut()
};

export default Cart;