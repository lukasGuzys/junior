import React, { useState, useEffect } from 'react';

function HouseCleaning() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem('houseCleaningFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('houseCleaningFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);


  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://aspenclean.com/cdn/shop/articles/Read-our-easy-move-in-cleaning-checklist.webp?v=1668732526" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>House Cleaning</h1>
        <h3>Jenny Wilson</h3>
        <p>255 Grand Park Ave, New York</p>
        <button className="book-now-button">Book Now</button>
        {/* Heart icon */}
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

export default HouseCleaning;
