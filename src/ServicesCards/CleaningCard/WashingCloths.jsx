import React, { useState, useEffect } from 'react';

function WashingCloths() {
  const [isFavorite, setIsFavorite] = useState(false);

  
  useEffect(() => {
    const savedFavorite = localStorage.getItem('washingClothsFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('washingClothsFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

 
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://cdn.mos.cms.futurecdn.net/MV3t99R9y5zBYgxDWw6kVe-650-80.jpg.webp" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Washing Cloths</h1>
        <h3>Emma Potter</h3>
        <p>525 N Tyron Street, New York</p>
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

export default WashingCloths;
