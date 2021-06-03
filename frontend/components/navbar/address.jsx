import React from 'react';
import { LocationIcon } from '../../custom_icons/location_icon'
import { BiCurrentLocation } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Address = () => {
  return(
      <Link className="address" to='/login'>
        <p className="nav-small">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello</p>
        <p className="bold"><LocationIcon/>&nbsp;Select your address</p>
        {/* <div className="location">
          <p className="location-box">
            <BiCurrentLocation fill="black"/>
            <span class="location-text">San Francisco, CA</span>
          </p>
        </div> */}
      </Link>
  )
};

export default Address;