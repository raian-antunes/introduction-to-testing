import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should return the same number when adding zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('should throw an error if arguments are not numbers', () => {
    expect(() => add('2', 3)).toThrow('Both arguments must be numbers');
    expect(() => add(2, '3')).toThrow('Both arguments must be numbers');
    expect(() => add('2', 'potato')).toThrow('Both arguments must be numbers');
  });
});

describe.todo('subtract', () => {
  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  it('should return the same number when subtracting zero', () => {
    expect(subtract(5, 0)).toBe(5);
  });
  it('should handle negative numbers', () => {
    expect(subtract(-2, -3)).toBe(1);
  });
});

describe('multiply', () => {
  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it('should return zero when multiplying by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
  it('should handle negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });
});

describe('divide', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(6, 3)).toBe(2);
  });
  it('should return the same number when dividing by one', () => {
    expect(divide(5, 1)).toBe(5);
  });
  it('should handle negative numbers', () => {
    expect(divide(-6, -3)).toBe(2);
  });
});
