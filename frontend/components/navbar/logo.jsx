import React from 'react';
import { Link } from 'react-router-dom';

export const DarkLogo = () => {
  return(
    <Link className="dark-logo" to="/"><img src="/dark-logo.jpg" alt="alwayzon logo" /></Link>
  )
};

export const LightLogo = () => {
  return(
    <Link className="light-logo" to="/"><img src="/light-logo.jpg" alt="alwayzon logo" /></Link>
  )
}
