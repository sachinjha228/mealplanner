import React from 'react';
import { render, screen } from '@testing-library/react';
import NutritionalSummary from './NutritionalSummary';

const mockSummary = { calories: 2000, protein: 75, carbs: 250, fats: 50 };

test('renders NutritionalSummary with correct summary details', () => {
  render(<NutritionalSummary summary={mockSummary} />);
  const calories = screen.getByText('Calories: 738kcl');
  const protein = screen.getByText('Protein: 41g');
  const carbs = screen.getByText('Carbs: 72g');
  const fats = screen.getByText('Fats: 32.5g');
  expect(calories).toBeInTheDocument();
  expect(protein).toBeInTheDocument();
  expect(carbs).toBeInTheDocument();
  expect(fats).toBeInTheDocument();
});
