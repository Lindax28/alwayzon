import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return(
    <Link className="logo" to="/"><img src="/logo.jpg" alt="alwayzon logo" /></Link>
  )
};

export default Logo;