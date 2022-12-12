import React from "react";
import * as Icon from 'react-feather';

export const Navbar = () => {
  return (
    <div className="main__nav">
      <Icon.Map fill="white" />
      <p className="main__title">my travel journal.</p>
    </div>
  );
};

export default Navbar;
