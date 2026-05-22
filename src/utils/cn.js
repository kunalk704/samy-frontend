import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge for clean conditional class names
 * Usage: cn('base-class', condition && 'conditional-class', 'always-class')
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}