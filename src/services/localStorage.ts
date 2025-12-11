import type { UserPreferences, CachedData } from '@/types/storage'

// Claves para LocalStorage
const STORAGE_KEYS = {
  USER_PREFERENCES: 'alerta_ciudadana_preferences',
  USER_TOKEN: 'alerta_ciudadana_token',
  USER_DATA: 'alerta_ciudadana_user',
  CACHE_PREFIX: 'alerta_ciudadana_cache_'
}

// ===== PREFERENCIAS DE USUARIO =====

export const saveUserPreferences = (preferences: UserPreferences): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences))
    console.log('💾 Preferencias guardadas')
  } catch (error) {
    console.error('❌ Error al guardar preferencias:', error)
  }
}

export const getUserPreferences = (): UserPreferences | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES)
    if (data) {
      return JSON.parse(data)
    }
    return null
  } catch (error) {
    console.error('❌ Error al obtener preferencias:', error)
    return null
  }
}

export const getDefaultPreferences = (): UserPreferences => {
  return {
    theme: 'auto',
    notifications: true,
    language: 'es',
    mapZoom: 13
  }
}

export const updateUserPreferences = (updates: Partial<UserPreferences>): void => {
  const current = getUserPreferences() || getDefaultPreferences()
  const updated = { ...current, ...updates }
  saveUserPreferences(updated)
}

// ===== AUTENTICACIÓN =====

export const saveAuthToken = (token: string): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_TOKEN, token)
    console.log('🔐 Token guardado')
  } catch (error) {
    console.error('❌ Error al guardar token:', error)
  }
}

export const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEYS.USER_TOKEN)
  } catch (error) {
    console.error('❌ Error al obtener token:', error)
    return null
  }
}

export const removeAuthToken = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER_TOKEN)
    console.log('🔓 Token eliminado')
  } catch (error) {
    console.error('❌ Error al eliminar token:', error)
  }
}

export const isAuthenticated = (): boolean => {
  return getAuthToken() !== null
}

// ===== DATOS DE USUARIO =====

export const saveUserData = (userData: any): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData))
    console.log('👤 Datos de usuario guardados')
  } catch (error) {
    console.error('❌ Error al guardar datos de usuario:', error)
  }
}

export const getUserData = (): any | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA)
    if (data) {
      return JSON.parse(data)
    }
    return null
  } catch (error) {
    console.error('❌ Error al obtener datos de usuario:', error)
    return null
  }
}

export const removeUserData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER_DATA)
    console.log('👤 Datos de usuario eliminados')
  } catch (error) {
    console.error('❌ Error al eliminar datos de usuario:', error)
  }
}

// ===== SISTEMA DE CACHÉ =====

export const setCache = (key: string, value: any, expiresInMinutes?: number): void => {
  try {
    const cacheData: CachedData = {
      key,
      value,
      timestamp: Date.now(),
      expiresIn: expiresInMinutes ? expiresInMinutes * 60 * 1000 : undefined
    }
    localStorage.setItem(STORAGE_KEYS.CACHE_PREFIX + key, JSON.stringify(cacheData))
    console.log(`💾 Cache guardado: ${key}`)
  } catch (error) {
    console.error('❌ Error al guardar cache:', error)
  }
}

export const getCache = (key: string): any | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CACHE_PREFIX + key)
    if (!data) return null

    const cacheData: CachedData = JSON.parse(data)
    
    // Verificar si el cache expiró
    if (cacheData.expiresIn) {
      const now = Date.now()
      const age = now - cacheData.timestamp
      
      if (age > cacheData.expiresIn) {
        console.log(`⏰ Cache expirado: ${key}`)
        removeCache(key)
        return null
      }
    }
    
    return cacheData.value
  } catch (error) {
    console.error('❌ Error al obtener cache:', error)
    return null
  }
}

export const removeCache = (key: string): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.CACHE_PREFIX + key)
    console.log(`🗑️ Cache eliminado: ${key}`)
  } catch (error) {
    console.error('❌ Error al eliminar cache:', error)
  }
}

export const clearAllCache = (): void => {
  try {
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith(STORAGE_KEYS.CACHE_PREFIX)) {
        localStorage.removeItem(key)
      }
    })
    console.log('🧹 Todo el cache eliminado')
  } catch (error) {
    console.error('❌ Error al limpiar cache:', error)
  }
}

// ===== UTILIDADES =====

export const clearAllStorage = (): void => {
  try {
    localStorage.clear()
    console.log('🧹 Todo el LocalStorage eliminado')
  } catch (error) {
    console.error('❌ Error al limpiar LocalStorage:', error)
  }
}

export const getStorageSize = (): { used: number; total: number } => {
  try {
    let used = 0
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        used += localStorage[key].length + key.length
      }
    }
    
    // LocalStorage típicamente tiene 5-10 MB
    const total = 5 * 1024 * 1024 // 5 MB en bytes
    
    return {
      used: used * 2, // Multiplicar por 2 para aproximar UTF-16
      total
    }
  } catch (error) {
    console.error('❌ Error al calcular tamaño de storage:', error)
    return { used: 0, total: 0 }
  }
}

export const isStorageAvailable = (): boolean => {
  try {
    const test = '__storage_test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch {
    return false
  }
}

// Logout completo
export const logout = (): void => {
  removeAuthToken()
  removeUserData()
  console.log('👋 Sesión cerrada')
}
