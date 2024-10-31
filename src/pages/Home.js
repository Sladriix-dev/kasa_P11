import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import data from '../data/logements.json';
import '../styles/Home.scss';

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(data);
  }, []);

  return (
    <div className="home">
      <Banner 
        image="images/banner-image.jpg" 
        text="Chez vous, partout et ailleurs" 
      />
      <div className="cards-wrapper">
        <div className="cards-grid">
          {properties.map((property) => (
            <Link to={`/listing/${property.id}`} key={property.id} className="card-link">
              <Card 
                title={property.title} 
                image={property.cover} 
                key={property.id} 
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
