import React, { useState, useEffect } from 'react';

function HouseElectric() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem('houseElectricFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('houseElectricFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://www.peanc.org/sites/default/files/styles/call_to_action/public/Electrify-Everything-House-landscape.jpg?itok=ph2y_O7g" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>House Electric</h1>
        <h3>Natasha Romanoff</h3>
        <p>1200 Stars Street, Los Angeles</p>
        <button className="book-now-button">Book Now</button>
        <div 
          className={`heart-icon ${isFavorite ? 'favorite' : ''}`} 
          onClick={handleFavoriteClick}
          style={{ cursor: 'pointer', fontSize: '24px', color: isFavorite ? 'red' : 'grey' }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </div>
      </div>
    </div>
  );
}

export default HouseElectric;
