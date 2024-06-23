import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders About section', () => {
    render(<Footer />);
    const aboutSection = screen.getByText(/About Meal Planner/i);
    expect(aboutSection).toBeInTheDocument();
  });

  test('renders copyright information', () => {
    render(<Footer />);
    const copyright = screen.getByText(/© 2024 Meal Planner. All rights reserved./i);
    expect(copyright).toBeInTheDocument();
  });
});
