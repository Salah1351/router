import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Super Salaaah's Page!!!</h1>
      <p className="home-message">Get ready for an amazing experience!</p>
      <div className="navigation-buttons">
        <Link to="/contact" className="home-navigation-button">Contact</Link>
        <Link to="/about" className="home-navigation-button">About</Link>
      </div>
      
    </div>
  );
};

export default HomePage;
