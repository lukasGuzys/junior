import React, { useState, useEffect } from 'react';

function HouseShifting() {
  const [isFavorite, setIsFavorite] = useState(false);

  // Load saved state from localStorage when the component mounts
  useEffect(() => {
    const savedFavorite = localStorage.getItem('houseShiftingFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  // Save state to localStorage whenever `isFavorite` changes
  useEffect(() => {
    localStorage.setItem('houseShiftingFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  // Toggle favorite state
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://www.atulyagati.com/wp-content/uploads/2018/12/Services-e-1.png" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>House Shifting</h1>
        <h3>Doctor Strange</h3>
        <p>650 2nd Street, Orlando</p>
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

export default HouseShifting;
