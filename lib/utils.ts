import { type ClassValue, clsx } from 'clsx'

/**
 * Utility function for merging CSS classes
 * Uses clsx for conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * Format date to French locale
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Format time to French locale
 */
export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Format datetime to French locale
 */
export function formatDateTime(date: Date | string): string {
  return `${formatDate(date)} à ${formatTime(date)}`
}

/**
 * Get relative time (e.g., "il y a 2 heures")
 */
export function getRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000)

  if (diffInSeconds < 60) return "à l'instant"
  if (diffInSeconds < 3600) return `il y a ${Math.floor(diffInSeconds / 60)} min`
  if (diffInSeconds < 86400) return `il y a ${Math.floor(diffInSeconds / 3600)} h`
  if (diffInSeconds < 604800) return `il y a ${Math.floor(diffInSeconds / 86400)} j`
  
  return formatDate(date)
}
