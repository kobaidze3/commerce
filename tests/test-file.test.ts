import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestFile from '../components/test-file';

describe('TestFile Component', () => {
  it('renders correctly with a given message', () => {
    const message = 'Hello, World!';
    render(<TestFile message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('applies additional class names passed via className prop', () => {
    const message = 'Hello, World!';
    const className = 'additional-class';
    render(<TestFile message={message} className={className} />);
    const containerElement = screen.getByText(message).parentElement;
    expect(containerElement).toHaveClass(className);
  });

  it('renders correctly without any additional class names', () => {
    const message = 'Hello, World!';
    render(<TestFile message={message} />);
    const containerElement = screen.getByText(message).parentElement;
    expect(containerElement).not.toHaveClass('additional-class');
  });
});

