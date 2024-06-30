import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VariantSelector from '../variant-selector';

const mockOptions = [
  { name: 'Color', values: ['Red', 'Blue', 'Green'] },
  { name: 'Size', values: ['S', 'M', 'L'] }
];

const mockCombinations = [
  { Color: 'Red', Size: 'S' },
  { Color: 'Blue', Size: 'M' },
  { Color: 'Green', Size: 'L' }
];

const mockPathname = '/product';

const createUrl = (pathname: string, params: URLSearchParams) => {
  return `${pathname}?${params.toString()}`;
};

jest.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams()
}));

describe('VariantSelector', () => {
  it('correctly filters and displays available options', () => {
    render(
      <VariantSelector
        options={mockOptions}
        combinations={mockCombinations}
        createUrl={createUrl}
      />
    );

    // Check if all options are rendered
    mockOptions.forEach(option => {
      option.values.forEach(value => {
        expect(screen.getByText(value)).toBeInTheDocument();
      });
    });

    // Check if unavailable options are disabled
    const unavailableOption = screen.getByText('Red').closest('button');
    expect(unavailableOption).toHaveClass('cursor-not-allowed');
  });
});

