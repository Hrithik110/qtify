// Truncate a string to a specific length and add ellipsis if needed
export function truncate(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }
  