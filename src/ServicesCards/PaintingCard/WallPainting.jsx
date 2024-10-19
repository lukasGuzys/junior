import React, { useState, useEffect } from 'react';

function WallPainting() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem('wallPaintingFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wallPaintingFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://ufcp.ca/customers/wp-content/uploads/sites/2/2021/01/UniversityPainters-29-1536x1024.jpg" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Wall Painting</h1>
        <h3>Peter Parker</h3>
        <p>200 Lincoln Street, San Francisco</p>
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

export default WallPainting;
