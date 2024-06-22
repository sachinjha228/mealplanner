import React from 'react';
import './FoodItem.css';

const FoodItem = ({ food, onAddFood, isSelected }) => {
  return (
    <div
      className={`food-item ${isSelected ? 'selected' : ''}`}
      onClick={() => !isSelected && onAddFood(food)}
    >
      <h3>{food.name}</h3>
      <p>Calories: {food.calories}</p>
      <p>Protein: {food.protein}g</p>
      <p>Carbs: {food.carbs}g</p>
      <p>Fats: {food.fats}g</p>
      {isSelected && <p className="selected-label">Selected</p>}
    </div>
  );
};

export default FoodItem;

