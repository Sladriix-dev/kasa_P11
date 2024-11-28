import { useParams, Navigate } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carrousel';
import data from '../data/logements.json';
import '../styles/Listing.scss';

function Listing() {
  const { id } = useParams();
  const listing = data.find((item) => item.id === id);

  if (!listing) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="listing-container">
      {/* Utilisation du composant Carousel */}
      <Carousel pictures={listing.pictures} />

      <div className="listing-details">
        <div className="listing-info-wrapper">
          <div className="listing-info">
            <h1>{listing.title}</h1>
            <p>{listing.location}</p>
          </div>
          <div className="tags">
            {listing.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating-wrapper">
          <div className="host-info">
            <p>{listing.host.name}</p>
            <img src={listing.host.picture} alt={listing.host.name} className="host-picture" />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < listing.rating ? 'star filled' : 'star'}>&#9733;</span>
            ))}
          </div>
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
