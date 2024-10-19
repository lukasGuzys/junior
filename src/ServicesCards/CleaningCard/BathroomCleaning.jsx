import React, { useState, useEffect } from 'react';

function BathroomCleaning() {
  const [isFavorite, setIsFavorite] = useState(false);

 
  useEffect(() => {
    const savedFavorite = localStorage.getItem('bathroomCleaningFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('bathroomCleaningFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://smarterpestcontrol.com/wp-content/uploads/2017/09/shutterstock_140634028-500x300.jpg" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Bathroom Cleaning</h1>
        <h3>Henny Wilson</h3>
        <p>525 N Tryon Street, NC</p>
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

export default BathroomCleaning;
