import { test, expect, vi } from 'vitest';

const logSpy = vi.spyOn(console, 'log');

test('a super simple test', () => {
  console.log('Hello world');

  expect(logSpy).toBeCalled();
  expect(logSpy).toBeCalledWith('Hello world');
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toHaveBeenCalledTimes(1);
});
