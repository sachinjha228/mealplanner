import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectedFoods from './SelectedFoods';

const mockFoods = [
  { name: 'Apple', calories: 52, protein: 0.3, carbs: 14, fats: 0.2 },
];

test('renders SelectedFoods with correct meal and food items', () => {
  const handleRemoveFood = jest.fn();
  render(<SelectedFoods meal="Snacks" foods={mockFoods} onRemoveFood={handleRemoveFood} />);
  const heading = screen.getByText('Snacks');
  const foodItem = screen.getByText('Apple');
  expect(heading).toBeInTheDocument();
  expect(foodItem).toBeInTheDocument();
});

test('calls onRemoveFood when remove button is clicked', () => {
  const handleRemoveFood = jest.fn();
  render(<SelectedFoods meal="Snacks" foods={mockFoods} onRemoveFood={handleRemoveFood} />);
  const removeButton = screen.getByText('Remove');
  fireEvent.click(removeButton);
  expect(handleRemoveFood).toHaveBeenCalledWith('Snacks', 0);
});
