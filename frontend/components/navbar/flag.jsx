import React from 'react';
import { GoTriangleDown } from 'react-icons/Go';
import { IoMdRadioButtonOn } from 'react-icons/Io';

const Flag = () => (
  <div className="flag">
    <img src="/usflag.jpeg" alt="regional language" />
    <GoTriangleDown fill="gray" className="dropdown-arrow"/>
    <div className="language">
      <span>English - EN</span>
      <IoMdRadioButtonOn fill="gray" className="radio-button"/>
    </div>
  </div>
);

export default Flag;