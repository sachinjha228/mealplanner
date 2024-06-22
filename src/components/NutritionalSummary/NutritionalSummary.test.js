import React from 'react';
import { render, screen } from '@testing-library/react';
import NutritionalSummary from './NutritionalSummary';

const mockSummary = { calories: 2000, protein: 75, carbs: 250, fats: 50 };

test('renders NutritionalSummary with correct summary details', () => {
  render(<NutritionalSummary summary={mockSummary} />);
  const calories = screen.getByText('Calories: 2000');
  const protein = screen.getByText('Protein: 75g');
  const carbs = screen.getByText('Carbs: 250g');
  const fats = screen.getByText('Fats: 50g');
  expect(calories).toBeInTheDocument();
  expect(protein).toBeInTheDocument();
  expect(carbs).toBeInTheDocument();
  expect(fats).toBeInTheDocument();
});
