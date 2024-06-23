import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Meal Planner</h3>
          <p>Your one-stop solution to plan your meals and track your nutritional intake effortlessly. Stay healthy, stay happy!</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Meal Planner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
