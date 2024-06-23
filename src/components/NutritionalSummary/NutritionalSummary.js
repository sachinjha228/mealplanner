import React from 'react';
import './NutritionalSummary.css';

const NutritionalSummary = ({ summary }) => {
  return (
    <div className="nutritional-summary">
      <h2>Nutritional Summary</h2>
      <p>Calories: {summary.calories.toFixed(2)}kcl</p>
      <p>Protein: {summary.protein.toFixed(2)}g</p>
      <p>Carbs: {summary.carbs.toFixed(2)}g</p>
      <p>Fats: {summary.fats.toFixed(2)}g</p>
    </div>
  );
};

export default NutritionalSummary;
