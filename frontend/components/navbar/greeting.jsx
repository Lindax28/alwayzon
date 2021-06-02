import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const loggedIn = () => (
    <div className="logged-in-greeting">
      <div>
        <h3>Hello, {props.currentUser.firstName}</h3>
        <h2>Account</h2>
      </div>
      <nav className="nav-flyout">
        <h2>Your Account</h2>
        <ul>
          <li>Account</li>
          <li>{<Link onClick={props.logout} to="/">Sign Out</Link>}</li>
        </ul>
      </nav>
    </div>
  )

  const loggedOut = () => (
    <div className="logged-out-greeting">
      <Link to="/login">
        <h3>Hello, Sign In</h3>
        <h2>Account</h2>
      </Link>
      <nav className="nav-flyout">
        <Link to="/login">Sign in</Link>
        <div>
          New customer? <Link to="/signup">Start here.</Link>
        </div>
      </nav>
    </div>
  )

  return props.currentUser ? loggedIn() : loggedOut()
};

export default Greeting;