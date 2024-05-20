import { greet } from '../components/test-file';

describe('greet function', () => {
  it('should return a greeting message with the provided name', () => {
    const name = 'John';
    const expectedGreeting = 'Hello, John!';
    expect(greet(name)).toBe(expectedGreeting);
  });

  it('should return a greeting message with an empty name', () => {
    const name = '';
    const expectedGreeting = 'Hello, !';
    expect(greet(name)).toBe(expectedGreeting);
  });

  it('should return a greeting message with a name containing special characters', () => {
    const name = 'John@Doe';
    const expectedGreeting = 'Hello, John@Doe!';
    expect(greet(name)).toBe(expectedGreeting);
  });
});

