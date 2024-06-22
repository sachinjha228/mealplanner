import React from 'react';
import { render, screen } from '@testing-library/react';
import MealCategory from './MealCategory';

const mockFoods = [
  { name: 'Apple', category: 'Snacks', calories: 52, protein: 0.3, carbs: 14, fats: 0.2 },
  { name: 'Chicken Breast', category: 'Lunch', calories: 165, protein: 31, carbs: 0, fats: 3.6 },
];

test('renders MealCategory with correct heading and food items', () => {
  const handleAddFood = jest.fn();
  render(<MealCategory category="Snacks" foods={mockFoods} onAddFood={handleAddFood} />);
  const heading = screen.getByText('Snacks');
  const foodItem = screen.getByText('Apple');
  expect(heading).toBeInTheDocument();
  expect(foodItem).toBeInTheDocument();
});
