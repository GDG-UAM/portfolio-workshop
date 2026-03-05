import { describe, it, expect } from 'vitest';
import { formatDate, formatDateRange } from '../../src/utils/formatDate';

describe('formatDate', () => {
  it('formats a date in short style (default)', () => {
    const date = new Date('2024-03-15');
    const result = formatDate(date);
    expect(result).toContain('2024');
    expect(result).toContain('Mar');
  });

  it('formats a date in long style', () => {
    const date = new Date('2024-03-15');
    const result = formatDate(date, 'long');
    expect(result).toContain('March');
    expect(result).toContain('2024');
  });

  it('formats a date in full style', () => {
    const date = new Date('2024-03-15');
    const result = formatDate(date, 'full');
    expect(result).toContain('March');
    expect(result).toContain('15');
    expect(result).toContain('2024');
  });

  it('respects custom locale', () => {
    const date = new Date('2024-03-15');
    const result = formatDate(date, 'long', 'es-ES');
    // Spanish month name for March
    expect(result.toLowerCase()).toContain('marzo');
  });
});

describe('formatDateRange', () => {
  it('formats a range with both start and end dates', () => {
    const start = new Date('2023-01-01');
    const end = new Date('2024-06-15');
    const result = formatDateRange(start, end);
    expect(result).toContain('Jan 2023');
    expect(result).toContain('Jun 2024');
    expect(result).toContain('—');
  });

  it('shows "Present" when end date is omitted', () => {
    const start = new Date('2024-06-01');
    const result = formatDateRange(start);
    expect(result).toContain('Present');
  });

  it('shows "Present" when end date is undefined', () => {
    const start = new Date('2024-06-01');
    const result = formatDateRange(start, undefined);
    expect(result).toContain('Present');
  });
});
