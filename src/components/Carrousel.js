import { useState } from 'react';
import '../styles/Carrousel.scss';

function Carrousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-nav left" onClick={handlePrevClick}>‹</button>
      <img
        src={pictures[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-nav right" onClick={handleNextClick}>›</button>
    </div>
  );
}

export default Carrousel;
