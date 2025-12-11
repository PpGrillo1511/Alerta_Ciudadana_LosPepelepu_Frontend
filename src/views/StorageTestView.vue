<template>
  <div class="storage-test-container p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">🧪 Pruebas de Storage</h1>

    <!-- LocalStorage Tests -->
    <div class="card bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-blue-600">📦 LocalStorage</h2>
      
      <!-- Auth Token -->
      <div class="test-section mb-4">
        <h3 class="text-lg font-medium mb-2">🔐 Token de Autenticación</h3>
        <div class="flex gap-2 mb-2">
          <input 
            v-model="testToken" 
            type="text" 
            placeholder="Ingresa un token de prueba"
            class="flex-1 px-3 py-2 border rounded"
          />
          <button @click="testSaveToken" class="btn-primary px-4 py-2 bg-blue-500 text-white rounded">
            Guardar
          </button>
          <button @click="testGetToken" class="btn-secondary px-4 py-2 bg-gray-500 text-white rounded">
            Obtener
          </button>
          <button @click="testRemoveToken" class="btn-danger px-4 py-2 bg-red-500 text-white rounded">
            Eliminar
          </button>
        </div>
        <div class="result p-2 bg-gray-100 rounded">
          <strong>Resultado:</strong> {{ tokenResult }}
        </div>
      </div>

      <!-- User Preferences -->
      <div class="test-section mb-4">
        <h3 class="text-lg font-medium mb-2">⚙️ Preferencias de Usuario</h3>
        <div class="grid grid-cols-2 gap-2 mb-2">
          <select v-model="testPreferences.theme" class="px-3 py-2 border rounded">
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
            <option value="auto">Auto</option>
          </select>
          <select v-model="testPreferences.language" class="px-3 py-2 border rounded">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <input 
            v-model.number="testPreferences.mapZoom" 
            type="number" 
            placeholder="Zoom del mapa"
            class="px-3 py-2 border rounded"
          />
          <label class="flex items-center px-3 py-2 border rounded">
            <input v-model="testPreferences.notifications" type="checkbox" class="mr-2" />
            Notificaciones
          </label>
        </div>
        <div class="flex gap-2 mb-2">
          <button @click="testSavePreferences" class="btn-primary px-4 py-2 bg-blue-500 text-white rounded">
            Guardar Preferencias
          </button>
          <button @click="testGetPreferences" class="btn-secondary px-4 py-2 bg-gray-500 text-white rounded">
            Obtener Preferencias
          </button>
        </div>
        <div class="result p-2 bg-gray-100 rounded">
          <strong>Resultado:</strong> {{ preferencesResult }}
        </div>
      </div>

      <!-- User Data -->
      <div class="test-section mb-4">
        <h3 class="text-lg font-medium mb-2">👤 Datos de Usuario</h3>
        <div class="flex gap-2 mb-2">
          <input v-model="testUser.name" placeholder="Nombre" class="flex-1 px-3 py-2 border rounded" />
          <input v-model="testUser.email" placeholder="Email" class="flex-1 px-3 py-2 border rounded" />
          <button @click="testSaveUserData" class="btn-primary px-4 py-2 bg-blue-500 text-white rounded">
            Guardar
          </button>
          <button @click="testGetUserData" class="btn-secondary px-4 py-2 bg-gray-500 text-white rounded">
            Obtener
          </button>
        </div>
        <div class="result p-2 bg-gray-100 rounded">
          <strong>Resultado:</strong> {{ userDataResult }}
        </div>
      </div>
    </div>

    <!-- IndexedDB Tests -->
    <div class="card bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-green-600">🗄️ IndexedDB</h2>
      
      <!-- Add Incident Report -->
      <div class="test-section mb-4">
        <h3 class="text-lg font-medium mb-2">➕ Agregar Reporte de Incidente</h3>
        <div class="grid grid-cols-2 gap-2 mb-2">
          <input v-model="testReport.title" placeholder="Título" class="px-3 py-2 border rounded" />
          <input v-model="testReport.category" placeholder="Categoría" class="px-3 py-2 border rounded" />
          <textarea 
            v-model="testReport.description" 
            placeholder="Descripción" 
            class="col-span-2 px-3 py-2 border rounded"
            rows="2"
          ></textarea>
          <input v-model.number="testReport.location.lat" type="number" step="0.0001" placeholder="Latitud" class="px-3 py-2 border rounded" />
          <input v-model.number="testReport.location.lng" type="number" step="0.0001" placeholder="Longitud" class="px-3 py-2 border rounded" />
          <input v-model="testReport.location.address" placeholder="Dirección" class="col-span-2 px-3 py-2 border rounded" />
          <select v-model="testReport.status" class="px-3 py-2 border rounded">
            <option value="pending">Pendiente</option>
            <option value="sent">Enviado</option>
            <option value="error">Error</option>
          </select>
        </div>
        <button @click="testAddReport" class="btn-primary px-4 py-2 bg-green-500 text-white rounded">
          Agregar Reporte
        </button>
        <div class="result p-2 bg-gray-100 rounded mt-2">
          <strong>Resultado:</strong> {{ addReportResult }}
        </div>
      </div>

      <!-- Get All Reports -->
      <div class="test-section mb-4">
        <h3 class="text-lg font-medium mb-2">📋 Obtener Todos los Reportes</h3>
        <button @click="testGetAllReports" class="btn-secondary px-4 py-2 bg-gray-500 text-white rounded mb-2">
          Obtener Reportes
        </button>
        <div class="result p-2 bg-gray-100 rounded max-h-60 overflow-y-auto">
          <strong>Total de reportes:</strong> {{ allReports.length }}
          <div v-for="report in allReports" :key="report.id" class="border-b py-2">
            <div><strong>ID:</strong> {{ report.id }}</div>
            <div><strong>Título:</strong> {{ report.title }}</div>
            <div><strong>Categoría:</strong> {{ report.category }}</div>
            <div><strong>Estado:</strong> {{ report.status }}</div>
            <div><strong>Ubicación:</strong> {{ report.location.address || `${report.location.lat}, ${report.location.lng}` }}</div>
            <button 
              @click="testGetReportById(report.id!)" 
              class="text-blue-500 text-sm mr-2"
            >
              Ver
            </button>
            <button 
              @click="testUpdateReport(report.id!)" 
              class="text-yellow-500 text-sm mr-2"
            >
              Actualizar
            </button>
            <button 
              @click="testDeleteReport(report.id!)" 
              class="text-red-500 text-sm"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>

      <!-- Get Report by ID -->
      <div class="test-section mb-4">
        <h3 class="text-lg font-medium mb-2">🔍 Buscar Reporte por ID</h3>
        <div class="flex gap-2 mb-2">
          <input 
            v-model.number="searchId" 
            type="number" 
            placeholder="ID del reporte"
            class="flex-1 px-3 py-2 border rounded"
          />
          <button @click="testGetReportById(searchId)" class="btn-secondary px-4 py-2 bg-gray-500 text-white rounded">
            Buscar
          </button>
        </div>
        <div class="result p-2 bg-gray-100 rounded">
          <strong>Resultado:</strong> {{ searchResult }}
        </div>
      </div>

      <!-- Clear All Data -->
      <div class="test-section">
        <h3 class="text-lg font-medium mb-2 text-red-600">🗑️ Limpiar Datos</h3>
        <button @click="testClearAllReports" class="btn-danger px-4 py-2 bg-red-500 text-white rounded">
          Limpiar Todos los Reportes
        </button>
      </div>
    </div>

    <!-- Console Output -->
    <div class="card bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">📝 Consola de Salida</h2>
      <div class="console p-3 bg-black text-green-400 rounded font-mono text-sm h-60 overflow-y-auto">
        <div v-for="(log, index) in consoleLogs" :key="index">{{ log }}</div>
      </div>
      <button @click="clearConsole" class="mt-2 px-4 py-2 bg-gray-500 text-white rounded">
        Limpiar Consola
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IncidentReport, UserPreferences } from '@/types/storage'
import {
  saveAuthToken,
  getAuthToken,
  removeAuthToken,
  saveUserPreferences,
  getUserPreferences,
  saveUserData,
  getUserData
} from '@/services/localStorage'
import {
  addIncidentReport,
  getAllIncidentReports,
  getIncidentReportById,
  updateIncidentReport,
  deleteIncidentReport,
  clearAllIncidentReports
} from '@/services/indexedDB'

// Estado para LocalStorage
const testToken = ref('test-token-' + Date.now())
const tokenResult = ref('')
const testPreferences = ref<UserPreferences>({
  theme: 'auto',
  notifications: true,
  language: 'es',
  mapZoom: 13
})
const preferencesResult = ref('')
const testUser = ref({ name: 'Juan Pérez', email: 'juan@example.com' })
const userDataResult = ref('')

// Estado para IndexedDB
const testReport = ref({
  title: 'Reporte de prueba',
  description: 'Esta es una descripción de prueba',
  category: 'vandalismo',
  location: {
    lat: 18.4861,
    lng: -69.9312,
    address: 'Calle Principal #123'
  },
  status: 'pending' as 'pending' | 'sent' | 'error',
  userId: '1',
  createdAt: new Date().toISOString()
})
const addReportResult = ref('')
const allReports = ref<IncidentReport[]>([])
const searchId = ref<number>(1)
const searchResult = ref('')

// Console logs
const consoleLogs = ref<string[]>([])

const log = (message: string) => {
  const timestamp = new Date().toLocaleTimeString()
  consoleLogs.value.push(`[${timestamp}] ${message}`)
}

const clearConsole = () => {
  consoleLogs.value = []
}

// LocalStorage Tests
const testSaveToken = () => {
  try {
    saveAuthToken(testToken.value)
    tokenResult.value = `Token guardado: ${testToken.value}`
    log(`✅ Token guardado: ${testToken.value}`)
  } catch (error) {
    tokenResult.value = `Error: ${error}`
    log(`❌ Error al guardar token: ${error}`)
  }
}

const testGetToken = () => {
  try {
    const token = getAuthToken()
    tokenResult.value = token ? `Token: ${token}` : 'No hay token guardado'
    log(`📥 Token obtenido: ${token || 'ninguno'}`)
  } catch (error) {
    tokenResult.value = `Error: ${error}`
    log(`❌ Error al obtener token: ${error}`)
  }
}

const testRemoveToken = () => {
  try {
    removeAuthToken()
    tokenResult.value = 'Token eliminado'
    log('🗑️ Token eliminado')
  } catch (error) {
    tokenResult.value = `Error: ${error}`
    log(`❌ Error al eliminar token: ${error}`)
  }
}

const testSavePreferences = () => {
  try {
    saveUserPreferences(testPreferences.value)
    preferencesResult.value = `Preferencias guardadas: ${JSON.stringify(testPreferences.value)}`
    log(`✅ Preferencias guardadas`)
  } catch (error) {
    preferencesResult.value = `Error: ${error}`
    log(`❌ Error al guardar preferencias: ${error}`)
  }
}

const testGetPreferences = () => {
  try {
    const prefs = getUserPreferences()
    preferencesResult.value = prefs ? JSON.stringify(prefs, null, 2) : 'No hay preferencias guardadas'
    log(`📥 Preferencias obtenidas`)
  } catch (error) {
    preferencesResult.value = `Error: ${error}`
    log(`❌ Error al obtener preferencias: ${error}`)
  }
}

const testSaveUserData = () => {
  try {
    saveUserData(testUser.value)
    userDataResult.value = `Usuario guardado: ${JSON.stringify(testUser.value)}`
    log(`✅ Datos de usuario guardados`)
  } catch (error) {
    userDataResult.value = `Error: ${error}`
    log(`❌ Error al guardar usuario: ${error}`)
  }
}

const testGetUserData = () => {
  try {
    const user = getUserData()
    userDataResult.value = user ? JSON.stringify(user, null, 2) : 'No hay datos de usuario'
    log(`📥 Datos de usuario obtenidos`)
  } catch (error) {
    userDataResult.value = `Error: ${error}`
    log(`❌ Error al obtener usuario: ${error}`)
  }
}

// IndexedDB Tests
const testAddReport = async () => {
  try {
    const report: IncidentReport = {
      title: testReport.value.title,
      description: testReport.value.description,
      category: testReport.value.category,
      location: {
        lat: testReport.value.location.lat,
        lng: testReport.value.location.lng,
        address: testReport.value.location.address
      },
      status: testReport.value.status,
      userId: testReport.value.userId,
      createdAt: new Date().toISOString()
    }
    const id = await addIncidentReport(report)
    addReportResult.value = `Reporte agregado con ID: ${id}`
    log(`✅ Reporte agregado con ID: ${id}`)
    await testGetAllReports()
  } catch (error) {
    addReportResult.value = `Error: ${error}`
    log(`❌ Error al agregar reporte: ${error}`)
  }
}

const testGetAllReports = async () => {
  try {
    allReports.value = await getAllIncidentReports()
    log(`📋 ${allReports.value.length} reportes obtenidos`)
  } catch (error) {
    log(`❌ Error al obtener reportes: ${error}`)
  }
}

const testGetReportById = async (id: number) => {
  try {
    const report = await getIncidentReportById(id)
    searchResult.value = report ? JSON.stringify(report, null, 2) : 'Reporte no encontrado'
    log(`🔍 Reporte ${id} obtenido`)
  } catch (error) {
    searchResult.value = `Error: ${error}`
    log(`❌ Error al buscar reporte: ${error}`)
  }
}

const testUpdateReport = async (id: number) => {
  try {
    const report = await getIncidentReportById(id)
    if (report) {
      report.status = report.status === 'pending' ? 'sent' : 'pending'
      report.title = report.title.includes('(Actualizado)') ? report.title : report.title + ' (Actualizado)'
      await updateIncidentReport(report)
      log(`✏️ Reporte ${id} actualizado`)
      await testGetAllReports()
    }
  } catch (error) {
    log(`❌ Error al actualizar reporte: ${error}`)
  }
}

const testDeleteReport = async (id: number) => {
  try {
    await deleteIncidentReport(id)
    log(`🗑️ Reporte ${id} eliminado`)
    await testGetAllReports()
  } catch (error) {
    log(`❌ Error al eliminar reporte: ${error}`)
  }
}

const testClearAllReports = async () => {
  if (confirm('¿Estás seguro de que quieres eliminar todos los reportes?')) {
    try {
      await clearAllIncidentReports()
      allReports.value = []
      log('🗑️ Todos los reportes eliminados')
    } catch (error) {
      log(`❌ Error al limpiar reportes: ${error}`)
    }
  }
}
</script>

<style scoped>
.storage-test-container {
  font-family: system-ui, -apple-system, sans-serif;
}

.test-section {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
}

.console {
  white-space: pre-wrap;
  word-break: break-all;
}

button {
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}
</style>
