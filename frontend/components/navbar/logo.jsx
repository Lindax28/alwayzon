import React from 'react';
import { Link } from 'react-router-dom';

export const DarkLogo = () => {
  return(
    <Link className="dark-logo" to="/"><img src={window.darkLogo} alt="alwayzon logo" /></Link>
  )
};

export const LightLogo = () => {
  return(
    <Link className="light-logo" to="/"><img src={window.lightLogo} alt="alwayzon logo" /></Link>
  )
}
