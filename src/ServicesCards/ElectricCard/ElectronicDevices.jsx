import React, { useState, useEffect } from 'react';

function ElectronicDevices() {
  const [isFavorite, setIsFavorite] = useState(false);

  
  useEffect(() => {
    const savedFavorite = localStorage.getItem('electronicDevicesFavorite');
    if (savedFavorite) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('electronicDevicesFavorite', JSON.stringify(isFavorite));
  }, [isFavorite]);

  
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img 
        src="https://img.freepik.com/free-vector/electronic-devices-collection_23-2147677356.jpg?t=st=1727700560~exp=1727704160~hmac=89041f2576e95fe4dee88a8431f94804cd8e5f3b1ef995084a08673651f41cf5&w=740" 
        alt="Cleaning Service" 
        className="card-image" 
      />
      <div className="card-content">
        <h1>Electronic Devices</h1>
        <h3>Thor Odinson</h3>
        <p>40 N Peter Street, Los Angeles</p>
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

export default ElectronicDevices;
