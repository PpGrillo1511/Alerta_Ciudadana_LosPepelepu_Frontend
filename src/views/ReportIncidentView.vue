<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Sidebar -->
    <div 
      :class="[
        'fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-800/95 to-purple-900/95 backdrop-blur-xl border-l border-purple-500/20 transform transition-transform duration-300 ease-in-out z-50',
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-white">Menú de Navegación</h2>
          <button @click="sidebarOpen = false" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <nav class="space-y-2">
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            </svg>
            <span class="font-medium">Dashboard</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Reportar Incidente</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span class="font-medium">Mis Reportes</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Estadísticas</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="font-medium">Mapa de Incidentes</span>
          </a>

          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span class="font-medium">Mi Perfil</span>
          </a>
        </nav>

        <div class="mt-8 pt-6 border-t border-purple-500/20">
          <button class="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all w-full">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            <span class="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div 
      v-if="sidebarOpen" 
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
    ></div>

    <!-- Main Content -->
    <div class="p-6">
      <!-- Header -->
      <div class="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 rounded-2xl p-6 mb-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div class="relative flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <button 
              @click="sidebarOpen = true"
              class="p-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div>
              <h1 class="text-2xl font-bold text-white">Reportar Incidente</h1>
              <p class="text-purple-100">Ayuda a mantener Xicotepec seguro reportando incidentes</p>
            </div>
          </div>
          <div class="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-N5NgJJ9kcwMeVSd6Gof1EzbuAkkl4L.jpeg" alt="Alerta Ciudadana" class="w-8 h-8 rounded-lg">
            <div class="text-right">
              <p class="text-white font-semibold">Alerta_ciudadana</p>
              <p class="text-purple-100 text-sm">Sistema de Alertas</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Report Form -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
          <form @submit.prevent="submitReport" class="space-y-8">
            <!-- Incident Type -->
            <div>
              <label class="block text-lg font-semibold text-white mb-4">Tipo de Incidente</label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  v-for="type in incidentTypes"
                  :key="type.id"
                  type="button"
                  @click="selectedType = type.id"
                  :class="[
                    'p-4 rounded-xl border-2 transition-all text-center',
                    selectedType === type.id
                      ? 'border-purple-500 bg-purple-600/20 text-white'
                      : 'border-purple-500/30 bg-slate-700/30 text-gray-300 hover:border-purple-500/50 hover:bg-purple-600/10'
                  ]"
                >
                  <div class="text-2xl mb-2">{{ type.icon }}</div>
                  <div class="font-medium">{{ type.name }}</div>
                </button>
              </div>
            </div>

            <!-- Description -->
            <div>
              <label for="description" class="block text-lg font-semibold text-white mb-4">
                Descripción del Incidente
              </label>
              <textarea
                id="description"
                v-model="description"
                rows="4"
                required
                maxlength="500"
                class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe detalladamente lo que estás viendo o lo que ocurrió..."
              ></textarea>
              <p class="mt-2 text-sm text-gray-400">{{ description.length }}/500 caracteres</p>
            </div>

            <!-- Date and Time -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="date" class="block text-lg font-semibold text-white mb-4">Fecha</label>
                <input
                  id="date"
                  v-model="selectedDate"
                  type="date"
                  :max="today"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
              </div>
              <div>
                <label for="time" class="block text-lg font-semibold text-white mb-4">Hora</label>
                <input
                  id="time"
                  v-model="selectedTime"
                  type="time"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
              </div>
            </div>

            <!-- Location -->
            <div>
              <label class="block text-lg font-semibold text-white mb-4">Ubicación</label>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <button
                    type="button"
                    @click="getCurrentLocation"
                    :disabled="gettingLocation"
                    class="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:opacity-50"
                  >
                    <svg v-if="!gettingLocation" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{{ gettingLocation ? 'Obteniendo ubicación...' : 'Usar mi ubicación actual' }}</span>
                  </button>
                </div>
                <input
                  v-model="location"
                  type="text"
                  placeholder="O escribe la dirección manualmente..."
                  class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
              </div>
            </div>

            <!-- Photo Evidence -->
            <div>
              <label class="block text-lg font-semibold text-white mb-4">Evidencia Fotográfica (Opcional)</label>
              <div class="border-2 border-dashed border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/50 transition-all">
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  @change="handleFileUpload"
                  class="hidden"
                >
                <div v-if="!selectedFile" @click="fileInput?.click()" class="cursor-pointer">
                  <svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p class="text-gray-300 font-medium mb-2">Toca para tomar una foto</p>
                  <p class="text-gray-400 text-sm">O selecciona una imagen de tu galería</p>
                </div>
                <div v-else class="space-y-4">
                  <img :src="filePreview" alt="Preview" class="max-w-xs mx-auto rounded-xl">
                  <div class="flex items-center justify-center space-x-4">
                    <button
                      type="button"
                      @click="fileInput?.click()"
                      class="px-4 py-2 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 transition-all"
                    >
                      Cambiar foto
                    </button>
                    <button
                      type="button"
                      @click="removeFile"
                      class="px-4 py-2 rounded-xl bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600/30 transition-all"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center justify-between pt-6 border-t border-purple-500/20">
              <button
                type="button"
                @click="saveDraft"
                class="px-6 py-3 rounded-xl bg-slate-700/50 text-gray-300 border border-purple-500/30 hover:bg-slate-700/70 hover:text-white transition-all"
              >
                Guardar Borrador
              </button>
              <div class="flex items-center space-x-4">
                <button
                  type="button"
                  @click="goBack"
                  class="px-6 py-3 rounded-xl bg-slate-700/50 text-gray-300 border border-purple-500/30 hover:bg-slate-700/70 hover:text-white transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  :disabled="!isFormValid || isSubmitting"
                  class="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">Enviar Reporte</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Success Modal -->
      <div v-if="showConfirmation" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-gradient-to-br from-slate-800/95 to-purple-900/95 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 max-w-md mx-4">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">¡Reporte Enviado!</h3>
            <p class="text-gray-300 mb-6">Tu reporte ha sido enviado exitosamente. Las autoridades han sido notificadas y se tomará acción pronto.</p>
            <button
              @click="closeConfirmation"
              class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="text-center py-6 mt-8">
        <p class="text-gray-400">alerta_cuidadana para un Xicotepec más seguro 2025</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Refs de UI
const sidebarOpen = ref(false)

// Formulario
const selectedType = ref<string>('')
const description  = ref<string>('')
const selectedDate = ref<string>('')
const selectedTime = ref<string>('')

const location     = ref<string>('')

// Archivo / imagen
const fileInput   = ref<HTMLInputElement | null>(null)   // <<<<<< usar ref en template
const selectedFile = ref<File | null>(null)
const filePreview  = ref<string>('')

// Estados
const gettingLocation = ref(false)
const isSubmitting    = ref(false)
const showConfirmation = ref(false)

// Util
const today = new Date().toISOString().split('T')[0]

type IncidentType =
  | 'atropellamiento' | 'robo' | 'accidente' | 'vandalismo'
  | 'violencia' | 'drogas' | 'incendio' | 'otro'

const incidentTypes: Array<{id: IncidentType; name: string; icon: string}> = [
  { id: 'atropellamiento', name: 'Atropellamiento', icon: '🚗' },
  { id: 'robo',            name: 'Robo',            icon: '🔒' },
  { id: 'accidente',       name: 'Accidente',       icon: '⚠️' },
  { id: 'vandalismo',      name: 'Vandalismo',      icon: '🔨' },
  { id: 'violencia',       name: 'Violencia',       icon: '⚡' },
  { id: 'drogas',          name: 'Drogas',          icon: '💊' },
  { id: 'incendio',        name: 'Incendio',        icon: '🔥' },
  { id: 'otro',            name: 'Otro',            icon: '📝' }
]

const isFormValid = computed(() =>
  Boolean(
    selectedType.value &&
    description.value.trim() &&
    selectedDate.value &&
    selectedTime.value &&
    (location.value.trim() || gettingLocation.value)
  )
)

onMounted(() => {
  const now = new Date()
  selectedDate.value = now.toISOString().split('T')[0]
  selectedTime.value = now.toTimeString().slice(0, 5)
})

const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert('La geolocalización no está soportada en este navegador')
    return
  }
  gettingLocation.value = true
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      location.value = `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`
      gettingLocation.value = false
    },
    (error) => {
      console.error('Error getting location:', error)
      alert('No se pudo obtener la ubicación. Por favor, ingresa la dirección manualmente.')
      gettingLocation.value = false
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  )
}

// ---- CORREGIDO: tipado del event + casteo de e.target.result
const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0] ?? null
  if (!file) return

  selectedFile.value = file
  const reader = new FileReader()
  reader.onload = (e: ProgressEvent<FileReader>) => {
    filePreview.value = (e.target?.result as string) ?? ''
  }
  reader.readAsDataURL(file)
}

const removeFile = () => {
  selectedFile.value = null
  filePreview.value = ''
  if (fileInput.value) fileInput.value.value = '' // Permite volver a elegir el mismo archivo
}

const saveDraft = () => {
  const draft = {
    type: selectedType.value,
    description: description.value,
    date: selectedDate.value,
    time: selectedTime.value,
    location: location.value,
    timestamp: new Date().toISOString()
  }
  localStorage.setItem('incident_draft', JSON.stringify(draft))
  alert('Borrador guardado exitosamente')
}

const submitReport = async () => {
  if (!isFormValid.value) return
  isSubmitting.value = true
  try {
    await new Promise((r) => setTimeout(r, 2000)) // Simula API
    selectedType.value = ''
    description.value  = ''
    location.value     = ''
    removeFile()
    localStorage.removeItem('incident_draft')
    showConfirmation.value = true
  } catch (err) {
    console.error(err)
    alert('Error al enviar el reporte. Por favor, intenta de nuevo.')
  } finally {
    isSubmitting.value = false
  }
}

const closeConfirmation = () => {
  showConfirmation.value = false
  window.location.href = '/dashboard'
}

const goBack = () => {
  window.location.href = '/dashboard'
}
</script>
