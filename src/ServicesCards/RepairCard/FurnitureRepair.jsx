import React, { useState, useEffect } from 'react';

function FurnitureRepair() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem('furnitureRepairFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('furnitureRepairFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://res.cloudinary.com/taskrabbit-com/image/upload/w_928,f_auto,q_auto/dl0hw3kpgkvuhx3asbrf" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Furniture Repair</h1>
        <h3>Ronaldo Epric</h3>
        <p>412 N Tryon Street, New York</p>
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

export default FurnitureRepair;
