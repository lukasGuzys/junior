import React, { useState, useEffect } from 'react';

function OtherRepair() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem('otherRepairFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('otherRepairFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://thumbs.dreamstime.com/z/concept-repair-house-repair-construction-house-tool-box-near-trees-58152813.jpg?ct=jpeg" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Other Repair</h1>
        <h3>John Krimsby</h3>
        <p>204 N Washington Street, Chicago</p>
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

export default OtherRepair;
