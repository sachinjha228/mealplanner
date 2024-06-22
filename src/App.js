import React, { useState, useEffect } from 'react';
import MealCategory from './components/MealCategory/MealCategory';
import SelectedFoods from './components/SelectedFoods/SelectedFoods';
import NutritionalSummary from './components/NutritionalSummary/NutritionalSummary';
import Rewards from './components/Rewards/Rewards';
import Button from './components/common/Button/Button';
import foodsData from './data/foods.json';
import './App.css';
import logo from './assets/icons8-meal-64.png';

const App = () => {
  const [selectedFoods, setSelectedFoods] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: []
  });

  const [summary, setSummary] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0
  });

  const handleAddFood = (meal, food, index) => {
    setSelectedFoods(prevState => ({
      ...prevState,
      [meal]: [...prevState[meal], food]
    }));
  };

  const handleRemoveFood = (meal, index) => {
    setSelectedFoods(prevState => {
      const updatedMeal = [...prevState[meal]];
      updatedMeal.splice(index, 1);
      return { ...prevState, [meal]: updatedMeal };
    });
  };

  const calculateSummary = () => {
    let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFats = 0;

    Object.values(selectedFoods).flat().forEach(food => {
      totalCalories += food.calories;
      totalProtein += food.protein;
      totalCarbs += food.carbs;
      totalFats += food.fats;
    });

    setSummary({
      calories: totalCalories,
      protein: totalProtein,
      carbs: totalCarbs,
      fats: totalFats
    });
  };

  useEffect(() => {
    calculateSummary();
  }, [selectedFoods]);

  const handleSave = () => {
    localStorage.setItem('mealPlan', JSON.stringify(selectedFoods));
  };

  useEffect(() => {
    const savedMealPlan = localStorage.getItem('mealPlan');
    if (savedMealPlan) {
      setSelectedFoods(JSON.parse(savedMealPlan));
    }
  }, []);

  const handleReset = () => {
    setSelectedFoods({
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snacks: []
    });
    localStorage.removeItem('mealPlan');
  };


  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} alt="logo" className="app-logo" />
        <h1>Meal Planner</h1>
        <img src={logo} alt="logo" className="app-logo" />
      </header>
      <div className="nutritional-details">
          <NutritionalSummary summary={summary} />
          <Rewards summary={summary} />
      </div>
      <div className="desktop-view">
        <div className="food-items">
          <h2>All Food Items</h2>
          {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(meal => (
            <MealCategory
              key={meal}
              category={meal}
              foods={foodsData}
              onAddFood={food => handleAddFood(meal, food)}
              selectedFoods={selectedFoods[meal]}
            />
          ))}
        </div>
        <div className="selected-foods">
          <h2>Selected Foods</h2>
          {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(meal => (
            <SelectedFoods
              key={meal}
              meal={meal}
              foods={selectedFoods[meal]}
              onRemoveFood={handleRemoveFood}
            />
          ))}
        </div>
      </div>
      <div className="mobile-view">
        {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(meal => (
          <div key={meal} className="meal-category-mobile">
            <MealCategory
              category={meal}
              foods={foodsData}
              onAddFood={food => handleAddFood(meal, food)}
              selectedFoods={selectedFoods[meal]}
            />
            <SelectedFoods
              meal={meal}
              foods={selectedFoods[meal]}
              onRemoveFood={handleRemoveFood}
            />
          </div>
        ))}
      </div>
      <div className="actions">
        <Button onClick={handleSave} label="Save" type="save" />
        <Button onClick={handleReset} label="Reset" type="reset" />
      </div>
    </div>
  );
};

export default App;
