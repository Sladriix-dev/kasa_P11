import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import data from '../data/logements.json';
import '../styles/Home.scss';

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(data); // Charge les propriétés depuis le fichier JSON
  }, []);

  return (
    <div className="home">
      <Banner 
        image="/images/banner-image.jpg" 
        text="Chez vous, partout et ailleurs" 
      />
      <div className="cards-grid">
        {properties.map((property) => (
          <Card key={property.id} title={property.title} image={property.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
