/**
 * Format a date into a human-readable string.
 *
 * Examples:
 *  formatDate(new Date('2024-03-15'))          → "Mar 2024"
 *  formatDate(new Date('2024-03-15'), 'long')  → "March 2024"
 *  formatDate(new Date('2024-03-15'), 'full')  → "March 15, 2024"
 *
 * @param date  - The date to format
 * @param style - 'short' (default), 'long', or 'full'
 * @param locale - BCP 47 locale string (default: 'en-US')
 */
export function formatDate(
  date: Date,
  style: 'short' | 'long' | 'full' = 'short',
  locale: string = 'en-US',
): string {
  if (style === 'full') {
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
  });
}

/**
 * Format a date range for experience/education entries.
 *
 * @param start - Start date
 * @param end   - End date (omit or pass undefined for "Present")
 * @param style - Date formatting style
 */
export function formatDateRange(
  start: Date,
  end?: Date,
  style: 'short' | 'long' = 'short',
): string {
  const startStr = formatDate(start, style);
  const endStr = end ? formatDate(end, style) : 'Present';
  return `${startStr} — ${endStr}`;
}
