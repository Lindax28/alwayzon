import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const loggedIn = () => (
    <div className="logged-in-greeting">
      <h3>Hello, {props.currentUser.firstName}</h3>
      <h2>Account</h2>
    </div>
  )

  const loggedOut = () => (
    <div className="logged-out-greeting">
      <Link to="/login">
        <h3>Hello, Sign In</h3>
        <h2>Account</h2>
      </Link>
    </div>
  )

  return props.currentUser ? loggedIn() : loggedOut()
};

export default Greeting;