import React from 'react';
import { GrLocation } from 'react-icons/Gr';
import { IconContext } from 'react-icons';
import { LocationIcon } from '../../custom_icons/location_icon'

const Address = () => {
  return(
      <ul className="address">
        <li className="nav-small">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello</li>
        <li className="bold"><LocationIcon/>&nbsp;Select your address</li>
      </ul>
  )
};

export default Address;