import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { IoMdRadioButtonOn } from 'react-icons/io';

const Flag = () => (
  <div className="flag">
    <img src={window.usFlag} alt="regional language" />
    <GoTriangleDown fill="gray" className="dropdown-arrow"/>
    <div className="language">
      <span>English - EN</span>
      <IoMdRadioButtonOn fill="gray" className="radio-button"/>
    </div>
  </div>
);

export default Flag;