import React from 'react';
import './SelectedFoods.css';

const SelectedFoods = ({ meal, foods, onRemoveFood }) => {
  return (
    <div className="selected-foods-container">
      <h3>{meal}</h3>
      {foods.length === 0 ? (
        <p className="no-food-selected">No food selected</p>
      ) : (
        <ul className="selected-foods-list">
          {foods.map((food, index) => (
            <li key={index} className="selected-food">
              <span>{food.name}</span>
              <button onClick={() => onRemoveFood(meal, index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedFoods;
