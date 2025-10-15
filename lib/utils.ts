import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * Used throughout components for dynamic styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}