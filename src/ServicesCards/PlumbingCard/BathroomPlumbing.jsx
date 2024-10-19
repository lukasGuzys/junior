import React, { useState, useEffect } from 'react';

function BathroomPlumbing() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem('bathroomPlumbingFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bathroomPlumbingFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://drpipe.ca/wp-content/uploads/2010/08/Bathroom-Plumbing-System.jpg" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Bathroom Plumbing</h1>
        <h3>Ant Man</h3>
        <p>255 N Wall Street, New York</p>
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

export default BathroomPlumbing;
