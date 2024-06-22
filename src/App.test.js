import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App with Meal Planner heading', () => {
  render(<App />);
  const heading = screen.getByText('Meal Planner');
  expect(heading).toBeInTheDocument();
});

test('adds food to selected foods and calculates summary', () => {
  render(<App />);
  const foodItem = screen.getByText('Apple');
  fireEvent.click(foodItem);
  const selectedFood = screen.getByText('Apple');
  const calories = screen.getByText('Calories: 52');
  expect(selectedFood).toBeInTheDocument();
  expect(calories).toBeInTheDocument();
});

test('saves meal plan to local storage', () => {
  render(<App />);
  const foodItem = screen.getByText('Apple');
  fireEvent.click(foodItem);
  const saveButton = screen.getByText('Save');
  fireEvent.click(saveButton);
  const savedData = JSON.parse(localStorage.getItem('mealPlan'));
  expect(savedData.Snacks[0].name).toBe('Apple');
});

test('resets selected foods', () => {
  render(<App />);
  const foodItem = screen.getByText('Apple');
  fireEvent.click(foodItem);
  const resetButton = screen.getByText('Reset');
  fireEvent.click(resetButton);
  const selectedFood = screen.queryByText('Apple');
  expect(selectedFood).not.toBeInTheDocument();
});
