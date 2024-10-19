import React, { useState, useEffect } from 'react';

function ToiletPlumbing() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem('toiletPlumbingFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toiletPlumbingFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://cdn.prod.website-files.com/643dd13153ce80ea0a9ceae9/64a2d407bfcebde9109cf23a_Bathroom%20Plumbing.png" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Toilet Plumbing</h1>
        <h3>Hulk Green</h3>
        <p>420 N John Street, Las Vegas</p>
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

export default ToiletPlumbing;
