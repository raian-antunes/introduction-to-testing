import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // vi.setSystemTime('2025-01-01');
  });

  afterEach(() => {
    vi.getRealSystemTime();
  });

  it('should call callback after delay', () => {
    const callback = vi.fn();

    delay(callback);
    // vi.advanceTimersByTime(1000);
    vi.advanceTimersToNextTimer();

    expect(callback).toHaveBeenCalledOnce();
  });
});
