import React from 'react';
import { LocationIcon } from '../../custom_icons/location_icon'
import { BiCurrentLocation } from 'react-icons/bi';

const Address = () => {
  return(
    <div className="address-nav">
      <div className="address">
        <p className="nav-small">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello</p>
        <p className="bold"><LocationIcon/>&nbsp;Select your address</p>
      </div>
        <div className="location">
          <p className="location-box">
            <BiCurrentLocation fill="black"/>
            <span className="location-text">San Francisco, CA</span>
          </p>
        </div>
    </div>
  )
};

export default Address;