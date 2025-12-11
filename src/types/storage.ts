// Tipos para el almacenamiento local

export interface IncidentReport {
  id?: number
  title: string
  description: string
  category: string
  location: {
    lat: number
    lng: number
    address?: string
  }
  photos?: string[]
  status: 'pending' | 'sent' | 'error'
  createdAt: string
  userId?: string
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto'
  notifications: boolean
  language: string
  mapZoom: number
}

export interface CachedData {
  key: string
  value: any
  timestamp: number
  expiresIn?: number
}
