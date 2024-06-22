import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FoodItem from './FoodItem';

const mockFood = { name: 'Apple', calories: 52, protein: 0.3, carbs: 14, fats: 0.2 };

test('renders FoodItem with correct food details', () => {
  const handleAddFood = jest.fn();
  render(<FoodItem food={mockFood} onAddFood={handleAddFood} />);
  const foodName = screen.getByText('Apple');
  const foodCalories = screen.getByText('Calories: 52');
  expect(foodName).toBeInTheDocument();
  expect(foodCalories).toBeInTheDocument();
});

test('calls onAddFood when clicked', () => {
  const handleAddFood = jest.fn();
  render(<FoodItem food={mockFood} onAddFood={handleAddFood} />);
  const foodItem = screen.getByText('Apple');
  fireEvent.click(foodItem);
  expect(handleAddFood).toHaveBeenCalledWith(mockFood);
});

