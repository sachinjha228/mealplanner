import React from 'react';
import { render, screen } from '@testing-library/react';
import Rewards from './Rewards';

describe('Rewards component', () => {
  test('renders Rewards component', () => {
    const summary = {
      calories: 350, 
      protein: 50,
      carbs: 300,
      fats: 80
    };

    render(<Rewards summary={summary} />);
    
    const pointsEarnedElement = screen.getByText(/Points Earned:/i);
    expect(pointsEarnedElement).toBeInTheDocument();
  });

  test('displays reward message when points are earned', () => {
    const summary = {
      calories: 400,
      protein: 50,
      carbs: 300,
      fats: 80
    };

    render(<Rewards summary={summary} />);

    const rewardMessageElement = screen.queryByText(/Congratulations! You've earned 10 points for balanced nutrition./i);
    expect(rewardMessageElement).toBeInTheDocument();
  });
});

