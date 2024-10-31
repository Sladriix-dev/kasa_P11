import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { useParams } from 'react-router-dom';
import data from '../data/logements.json';
import '../styles/Listing.scss';

function Listing() {
  const { id } = useParams();
  const listing = data.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? listing.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === listing.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="listing-container">
      {/* Carrousel d'images */}
      <div className="carousel">
        <button className="carousel-nav left" onClick={handlePrevClick}>‹</button>
        <img
          src={listing.pictures[currentImageIndex]}
          alt={listing.title}
          className="carousel-image"
        />
        <button className="carousel-nav right" onClick={handleNextClick}>›</button>
      </div>

      <div className="listing-details">
        <div className="listing-info">
          <h1>{listing.title}</h1>
          <p>{listing.location}</p>
        </div>
        <div className="host-info">
          <p>{listing.host.name}</p>
          <img src={listing.host.picture} alt={listing.host.name} className="host-picture" />
        </div>
      </div>

      <div className="tags-rating">
        <div className="tags">
          {listing.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < listing.rating ? 'star filled' : 'star'}>&#9733;</span>
          ))}
        </div>
      </div>

      <div className="dropdowns-container">
        <Dropdown title="Description">
          <p>{listing.description}</p>
        </Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {listing.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}

export default Listing;
