import React from 'react';
import '../styles/Banner.scss';

function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <h1>{text}</h1>
    </div>
  );
}

export default Banner;
