import React from 'react';
import logo from '../../../assets/icons8-meal-64.png';
import './Header.css';

const Header = ({ points }) => {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" className="app-logo" />
      <h1>Meal Planner</h1>
      <img src={logo} alt="logo" className="app-logo" />
    </header>
  );
};

export default Header;
