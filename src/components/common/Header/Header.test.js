import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders the logo and title', () => {
    render(<Header />);
    
    const logos = screen.getAllByAltText('logo');
    expect(logos.length).toBe(2);

    const title = screen.getByText(/Meal Planner/i);
    expect(title).toBeInTheDocument();
  });

});
