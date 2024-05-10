import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders the button with the correct label', () => {
    const { getByText } = render(<Button label="Click me" />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = getByText('Click me');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});