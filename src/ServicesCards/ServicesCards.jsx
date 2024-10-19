import '@fortawesome/fontawesome-free/css/all.min.css';

import React, { useState } from 'react';

import BathroomCleaning from '../ServicesCards/CleaningCard/BathroomCleaning';
import HouseCleaning from '../ServicesCards/CleaningCard/HouseCleaning';
import WashingCloths from '../ServicesCards/CleaningCard/WashingCloths';
import CeilingPainting from '../ServicesCards/PaintingCard/CeilingPainting';
import WallPainting from '../ServicesCards/PaintingCard/WallPainting';
import FurnitureRepair from '../ServicesCards/RepairCard/FurnitureRepair';
import OtherRepair from '../ServicesCards/RepairCard/OtherRepair';

import ElectronicDevices from '../ServicesCards/ElectricCard/ElectronicDevices';
import HouseElectric from '../ServicesCards/ElectricCard/HouseElectric';
import BathroomPlumbing from '../ServicesCards/PlumbingCard/BathroomPlumbing';
import ToiletPlumbing from '../ServicesCards/PlumbingCard/ToiletPlumbing';
import HouseShifting from '../ServicesCards/ShiftingCard/HouseShifting';
import './ServicesCards.css'

function Cards() {
  const [selectedCategory, setSelectedCategory] = useState('all'); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <>
      <div className="cards-cards-container">
        <div className="cards-card" onClick={() => handleCategoryClick('cleaning')}>
          <i className="fas fa-broom card-logo"></i>
          <div className="cards-card-title">Cleaning</div>
        </div>
        <div className="cards-card" onClick={() => handleCategoryClick('repair')}>
          <i className="fas fa-tools card-logo"></i>
          <div className="cards-card-title">Repair</div>
        </div>
        <div className="cards-card" onClick={() => handleCategoryClick('painting')}>
          <i className="fas fa-paint-roller card-logo"></i>
          <div className="cards-card-title">Painting</div>
        </div>
        <div className="cards-card" onClick={() => handleCategoryClick('electric')}>
          <i className="fas fa-bolt card-logo"></i>
          <div className="cards-card-title">Electric</div>
        </div>
        <div className="cards-card" onClick={() => handleCategoryClick('plumbing')}>
          <i className="fas fa-wrench card-logo"></i>
          <div className="cards-card-title">Plumbing</div>
        </div>
        <div className="cards-card" onClick={() => handleCategoryClick('shifting')}>
          <i className="fas fa-truck card-logo"></i>
          <div className="cards-card-title">Shifting</div>
        </div>
        <div className="cards-card" onClick={() => handleCategoryClick('all')}>
          <i className="fas fa-list card-logo"></i>
          <div className="cards-card-title">Show All</div>
        </div>
      </div>

      <div className="services-cards-container">
        {selectedCategory === 'cleaning' && (
          <>
            <BathroomCleaning />
            <HouseCleaning />
            <WashingCloths />
          </>
        )}

        {selectedCategory === 'painting' && (
          <>
            <CeilingPainting />
            <WallPainting />
          </>
        )}

        {selectedCategory === 'repair' && (
          <>
            <FurnitureRepair />
            <OtherRepair />
          </>
        )}

        {selectedCategory === 'electric' && (
          <>
            <ElectronicDevices />
            <HouseElectric />
          </>
        )}

        {selectedCategory === 'plumbing' && (
          <>
            <BathroomPlumbing />
            <ToiletPlumbing />
          </>
        )}

        {selectedCategory === 'shifting' && (
          <>
            <HouseShifting />
          </>
        )}

        {selectedCategory === 'all' && (
          <>
            <BathroomCleaning />
            <HouseCleaning />
            <WashingCloths />
            <CeilingPainting />
            <WallPainting />
            <FurnitureRepair />
            <OtherRepair />
            <ElectronicDevices />
            <HouseElectric />
            <BathroomPlumbing />
            <ToiletPlumbing />
            <HouseShifting />
          </>
        )}
      </div>
    </>
  );
}

export default Cards;
