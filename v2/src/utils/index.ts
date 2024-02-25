import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert a UTC date string to local time and return an array of formatted date and time parts.
 *
 * @param {string} utcDateString - The input UTC date string.
 * @returns {string[]} - An array containing formatted date and time parts.
 */

export function convertUTCtoLocalTime(utcDateString: string): string[] {
  const utcDate = new Date(utcDateString);
  const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);

  // Options for formatting the date and time
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };

  // Format the local date and time and split into an array
  const formattedTime: string[] = localDate.toLocaleString('en-US', options).split(', ');

  // Return the array containing formatted date and time parts
  return formattedTime;
}
