import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'development');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('logs to the console in development', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello world!');

      expect(logSpy).toHaveBeenCalledOnce();
    });
  });

  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should no call console.log in production', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello world!');

      expect(logSpy).not.toHaveBeenCalledOnce();
    });
  });
});
