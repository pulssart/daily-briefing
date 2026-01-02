/**
 * Type definitions for Daily Briefing application
 */

export interface Email {
  id: string
  from: string
  subject: string
  preview: string
  date: Date
  isRead: boolean
  isImportant: boolean
}

export interface CalendarEvent {
  id: string
  title: string
  description?: string
  startTime: Date
  endTime: Date
  location?: string
  isAllDay: boolean
}

export interface HealthData {
  id: string
  type: 'steps' | 'sleep' | 'heartRate' | 'weight'
  value: number
  unit: string
  date: Date
}

export interface DailyBriefing {
  date: Date
  emails: Email[]
  events: CalendarEvent[]
  healthData: HealthData[]
}
