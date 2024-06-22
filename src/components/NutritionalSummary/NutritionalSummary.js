import React from 'react';
import './NutritionalSummary.css';

const NutritionalSummary = ({ summary }) => {
  return (
    <div className="nutritional-summary">
      <h2>Nutritional Summary</h2>
      <p>Calories: {summary.calories}kcl</p>
      <p>Protein: {summary.protein}g</p>
      <p>Carbs: {summary.carbs}g</p>
      <p>Fats: {summary.fats}g</p>
    </div>
  );
};

export default NutritionalSummary;
