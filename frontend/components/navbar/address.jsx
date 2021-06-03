import React from 'react';
import { GrLocation } from 'react-icons/Gr';
import { IconContext } from 'react-icons';
import { LocationIcon } from '../../custom_icons/location_icon'

const Address = () => {
  return(
      <div className="address">
        <p className="nav-small">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello</p>
        <p className="bold"><LocationIcon/>&nbsp;Select your address</p>
        <div className="location">
          <input type="text" value="San Francisco"/>
        </div>
      </div>
  )
};

export default Address;