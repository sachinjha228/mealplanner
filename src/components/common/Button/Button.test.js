import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  test('renders save button with correct text', () => {
    render(<Button type="save" onClick={() => {}}>Save Button</Button>);
    
    const buttonElement = screen.getByText(/Save Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button-Save');
  });

  test('renders reset button with correct text', () => {
    render(<Button type="reset" onClick={() => {}}>Reset Button</Button>);
    
    const buttonElement = screen.getByText(/Reset Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button-Reset');
  });

  test('calls onClick handler when save button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button type="save" onClick={handleClick}>Save Button</Button>);
    
    const buttonElement = screen.getByText(/Save Button/i);
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('calls onClick handler when reset button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button type="reset" onClick={handleClick}>Reset Button</Button>);
    
    const buttonElement = screen.getByText(/Reset Button/i);
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
