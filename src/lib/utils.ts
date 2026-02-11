/**
 * Format a date for display
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format a date range
 */
export function formatDateRange(startDate: Date, endDate?: Date): string {
  if (!endDate) {
    return formatDate(startDate);
  }

  const start = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  }).format(startDate);

  const end = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(endDate);

  return `${start} - ${end}`;
}

/**
 * Create a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Truncate text to a specified length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Check if a date is in the past
 */
export function isPastDate(date: Date): boolean {
  return date < new Date();
}

/**
 * Sort items by date (newest first)
 */
export function sortByDate<T extends { data: { pubDate?: Date; eventDate?: Date } }>(
  items: T[]
): T[] {
  return items.sort((a, b) => {
    const dateA = a.data.pubDate || a.data.eventDate;
    const dateB = b.data.pubDate || b.data.eventDate;
    if (!dateA || !dateB) return 0;
    return dateB.getTime() - dateA.getTime();
  });
}
