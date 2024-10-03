import React from 'react';
import '../styles/Card.scss';

function Card({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
