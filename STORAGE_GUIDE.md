# Guía de uso - Almacenamiento Local

Este proyecto incluye dos sistemas de almacenamiento local:

## 📦 IndexedDB - Para reportes de incidentes

Ubicación: `src/services/indexedDB.ts`

### Uso básico:

```typescript
import {
  addIncidentReport,
  getAllIncidentReports,
  getIncidentReportById,
  getIncidentReportsByStatus,
  updateIncidentReport,
  deleteIncidentReport
} from '@/services/indexedDB'

// Agregar un reporte
const reportId = await addIncidentReport({
  title: 'Bache en la calle',
  description: 'Bache grande que necesita reparación',
  category: 'infraestructura',
  location: {
    lat: 19.4326,
    lng: -99.1332,
    address: 'Calle Principal #123'
  },
  status: 'pending',
  createdAt: new Date().toISOString()
})

// Obtener todos los reportes
const reports = await getAllIncidentReports()

// Obtener reportes pendientes
const pendingReports = await getIncidentReportsByStatus('pending')

// Actualizar un reporte
await updateIncidentReport({
  id: 1,
  title: 'Bache reparado',
  status: 'sent',
  // ... otros campos
})

// Eliminar un reporte
await deleteIncidentReport(1)
```

## 💾 LocalStorage - Para preferencias y autenticación

Ubicación: `src/services/localStorage.ts`

### Uso básico:

```typescript
import {
  saveUserPreferences,
  getUserPreferences,
  updateUserPreferences,
  saveAuthToken,
  getAuthToken,
  isAuthenticated,
  saveUserData,
  getUserData,
  setCache,
  getCache,
  logout
} from '@/services/localStorage'

// Guardar preferencias
saveUserPreferences({
  theme: 'dark',
  notifications: true,
  language: 'es',
  mapZoom: 15
})

// Obtener preferencias
const prefs = getUserPreferences()

// Actualizar preferencias parcialmente
updateUserPreferences({ theme: 'light' })

// Autenticación
saveAuthToken('mi-token-jwt')
const token = getAuthToken()
const authenticated = isAuthenticated()

// Datos de usuario
saveUserData({ id: 1, name: 'Juan', email: 'juan@example.com' })
const user = getUserData()

// Sistema de caché (con expiración opcional)
setCache('reportes_recientes', reportesData, 30) // Expira en 30 minutos
const cachedData = getCache('reportes_recientes')

// Cerrar sesión
logout()
```

## 🎯 Casos de uso sugeridos

### IndexedDB (Grandes volúmenes de datos):
- ✅ Reportes de incidentes guardados offline
- ✅ Fotos adjuntas a reportes (como base64)
- ✅ Historial de reportes del usuario
- ✅ Datos de mapas offline

### LocalStorage (Datos pequeños):
- ✅ Token de autenticación
- ✅ Preferencias de usuario
- ✅ Configuración de la app
- ✅ Caché temporal de respuestas API
- ✅ Estado de UI (tema, idioma, etc.)

## 📱 Integración con PWA

Estos servicios funcionan perfectamente offline gracias a la configuración PWA. Los usuarios pueden:
1. Crear reportes sin conexión
2. Los reportes se guardan en IndexedDB
3. Cuando haya conexión, sincronizar con el servidor
4. Las preferencias persisten entre sesiones
