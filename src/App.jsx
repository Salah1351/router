import React from 'react';
import { Link } from 'react-router-dom';
import Header from './units/Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div><Header />
    <div className="home-container">
      <h1 className="home-title">Welcome to the <span>Super Salaaah's </span>Page!!!</h1>
      <p className="home-message">Get ready for an amazing experience!</p>
    </div>
    </div>
  );
};

export default HomePage;
