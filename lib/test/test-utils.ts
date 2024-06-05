import { render } from '@testing-library/react';
import { ReactElement } from 'react';

// Utility function to render a component with all necessary providers
export function renderWithProviders(ui: ReactElement, { ...renderOptions } = {}) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Example utility function to create a mock of a function
export function createMockFunction<T extends (...args: any[]) => any>(implementation?: T): jest.MockedFunction<T> {
  return jest.fn(implementation) as jest.MockedFunction<T>;
}

// Example utility function to wait for a specific amount of time
export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

