import { format, parseISO, isAfter, isBefore, isSameDay } from "date-fns";

/**
 * Format a date in a human-readable format
 * @param {Date|string} date The date to format
 * @param {string} formatStr The format string (default: 'dd/MM/yyyy')
 * @returns {string} The formatted date
 */
export function formatDate(date, formatStr = "dd/MM/yyyy") {
  if (!date) return "";
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  
  return format(dateObj, formatStr);
}

/**
 * Check if a date is in the future
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the future
 */
export function isFutureDate(date) {
  if (!date) return false;
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  const now = new Date();

  // Treat events occurring today as upcoming
  return isSameDay(dateObj, now) || isAfter(dateObj, now);
}

/**
 * Check if a date is in the past
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the past
 */
export function isPastDate(date) {
  if (!date) return false;
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  const now = new Date();

  // Exclude today's events from past
  return isBefore(dateObj, now) && !isSameDay(dateObj, now);
}