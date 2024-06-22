import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './MealCategory.css';

const MealCategory = ({ category, foods, onAddFood, selectedFoods }) => {
  const selectedFoodNames = selectedFoods.map(food => food.name);
  
  return (
    <div className="meal-category">
      <h2>{category}</h2>
      <div className="food-list">
        {foods.filter(food => food.category === category).map(food => (
          <FoodItem
            key={food.name}
            food={food}
            onAddFood={onAddFood}
            isSelected={selectedFoodNames.includes(food.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default MealCategory;
