import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Navigation/Navigation'; 
import TextArea from './TextArea/TextArea';
import ServicesCards from '../src/ServicesCards/ServicesCards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />  
  </React.StrictMode>
);
