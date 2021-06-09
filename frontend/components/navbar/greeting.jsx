import React from 'react';
import { Link } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';

const Greeting = (props) => {
  const loggedIn = () => (
    <div className="greeting">
      <Link className="greeting-text" to="/">
        <p className="nav-small">Hello, {props.currentUser.firstName}</p>
        <h2 className="bold space-above">Account&nbsp; 
        <GoTriangleDown fill="gray" className="dropdown-arrow"/></h2>
      </Link>
      <nav className="login-flyout">
        <h2>Your Account</h2>
        <ul>
          {/* <li>Account</li> */}
          <li>{<Link onClick={props.logout} to="/">Sign Out</Link>}</li>
        </ul>
      </nav>
    </div>
  )

  const loggedOut = () => (
    <div className="greeting">
      <Link className="greeting-text" to="/login">
        <p className="nav-small">Hello, Sign In</p>
        <h2 className="bold space-above">Account&nbsp;
        <GoTriangleDown fill="gray" className="dropdown-arrow"/></h2>
      </Link>
      <nav className="login-flyout">
        <Link to="/login" className="login-button">Sign in</Link>
        <div id="small-msg">
          <p>New customer? <Link to="/signup">Start here.</Link></p>
        </div>
      </nav>
    </div>
  )

  return props.currentUser ? loggedIn() : loggedOut()
};

export default Greeting;