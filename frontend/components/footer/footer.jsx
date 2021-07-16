import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-menu">
        <h3>MENU</h3>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="footer-started">
        <h3>GET STARTED</h3>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div className="footer-follow">
        <h3>FOLLOW</h3>
          <a
            href="https://github.com/Lindax28"
            rel="noopener noreferrer"
            target="_blank"
            ><FaGithub />
            &nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lindaxiao/"
            rel="noopener noreferrer"
            target="_blank"
            ><FaLinkedin />
            &nbsp;LinkedIn
            </a>
      </div>
    </div>
  )
}

export default Footer;