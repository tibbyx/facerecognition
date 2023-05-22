import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from '../../brain.png';

const Logo = () => {
  return (
    <div className="m-3 mt-0">
      <div className="Tilt-inner">
        <img className="h-12" src={brain} alt="" />
      </div>
    </div>
  );
};

export default Logo;
