import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return(
    <div>
      <div>
        <h3>MENU</h3>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <h3>GET STARTED</h3>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div>
        <h3>FOLLOW</h3>
          <a
            href="https://github.com/Lindax28"
            rel="noopener noreferrer"
            target="_blank"
            ><FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lindaxiao/"
            rel="noopener noreferrer"
            target="_blank"
            ><FaLinkedin />
            LinkedIn
            </a>
      </div>
    </div>
  )
}