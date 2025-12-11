<template>
  <!-- Contenido principal del reporte SIN el layout duplicado -->
  <div class="max-w-4xl mx-auto">
    <!-- Formulario de Reporte -->
    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 class="text-2xl font-bold text-slate-900 mb-2">Reportar Incidente</h2>
      <p class="text-slate-600 mb-6">Ayuda a mantener Xicotepec seguro reportando incidentes</p>

      <form @submit.prevent="submitReport" class="space-y-8">
        <!-- Título -->
        <div>
          <label for="titulo" class="block text-lg font-semibold text-slate-900 mb-4">
            Título del Incidente
          </label>
          <input
            v-model="titulo"
            id="titulo"
            type="text"
            required
            placeholder="Escribe un título para el incidente..."
            class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
          />
        </div>

        <!-- Descripción -->
        <div>
          <label for="description" class="block text-lg font-semibold text-slate-900 mb-4">
            Descripción del Incidente
          </label>
          <textarea
            id="description"
            v-model="description"
            rows="4"
            required
            maxlength="500"
            class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
            placeholder="Describe detalladamente lo que estás viendo o lo que ocurrió..."
          ></textarea>
          <p class="mt-2 text-sm text-slate-500">{{ description.length }}/500 caracteres</p>
        </div>

        <!-- Tipo de Incidente -->
        <div>
          <label for="category" class="block text-lg font-semibold text-slate-900 mb-4">
            Categoría
          </label>
          <select
            v-model="selectedCategory"
            id="category"
            required
            class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
          >
            <option value="" disabled>-- Selecciona una categoría --</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.nombre }}
            </option>
          </select>
        </div>

        <!-- Fecha y Hora -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="date" class="block text-lg font-semibold text-slate-900 mb-4">Fecha</label>
            <input
              id="date"
              v-model="selectedDate"
              type="date"
              :max="today"
              required
              class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            >
          </div>
          <div>
            <label for="time" class="block text-lg font-semibold text-slate-900 mb-4">Hora</label>
            <input
              id="time"
              v-model="selectedTime"
              type="time"
              required
              class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            >
          </div>
        </div>

        <!-- Ubicación -->
        <div>
          <label class="block text-lg font-semibold text-slate-900 mb-4">Ubicación</label>
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <button
                type="button"
                @click="getCurrentLocation"
                :disabled="gettingLocation"
                class="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium hover:from-sky-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all disabled:opacity-50"
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
              class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            >
          </div>
        </div>

        <!-- Estado del Incidente -->
        <div>
          <label for="estado" class="block text-lg font-semibold text-slate-900 mb-4">
            Estado
          </label>
          <select
            v-model="selectedEstado"
            id="estado"
            required
            class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
          >
            <option value="" disabled>-- Selecciona el estado --</option>
            <option v-for="estado in estados" :key="estado.value" :value="estado.value">
              {{ estado.label }}
            </option>
          </select>
        </div>


        <!-- Foto -->
        <div>
          <label class="block text-lg font-semibold text-slate-900 mb-4">Evidencia Fotográfica (Opcional)</label>
          <div class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-sky-400 transition-all bg-white">
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              capture="environment"
              @change="handleFileUpload"
              class="hidden"
            >
            <div v-if="!selectedFile" @click="fileInput?.click()" class="cursor-pointer">
              <svg class="w-12 h-12 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p class="text-slate-700 font-medium mb-2">Toca para tomar una foto</p>
              <p class="text-slate-500 text-sm">O selecciona una imagen de tu galería</p>
            </div>
            <div v-else class="space-y-4">
              <img :src="filePreview" alt="Preview" class="max-w-xs mx-auto rounded-xl">
              <div class="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  @click="fileInput?.click()
                  "
                  class="px-4 py-2 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100 transition-all"
                >
                  Cambiar foto
                </button>
                <button
                  type="button"
                  @click="removeFile"
                  class="px-4 py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-all"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Botones de acción -->
        <div class="flex items-center justify-between pt-6 border-t border-slate-200">
          <button
            type="button"
            @click="saveDraft"
            class="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 transition-all"
          >
            Guardar Borrador
          </button>
          <div class="flex items-center space-x-4">
            <button
              type="button"
              @click="goBack"
              class="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              :disabled="!isFormValid || isSubmitting"
              class="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:from-sky-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

    <!-- Modal de confirmación -->
    <div v-if="showConfirmation" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl max-w-md mx-4">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">¡Reporte Enviado!</h3>
          <p class="text-slate-600 mb-6">Tu reporte ha sido enviado exitosamente. Las autoridades han sido notificadas.</p>
          <button
            @click="closeConfirmation"
            class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold hover:from-sky-600 hover:to-indigo-600 transition-all"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { addIncidentReport } from '@/services/indexedDB'
import type { IncidentReport } from '@/types/storage'

const router = useRouter()

// Datos del formulario
const selectedCategory = ref<number | null>(null)
const titulo = ref('')
const description = ref('')
const selectedDate = ref('')
const selectedTime = ref('')
const location = ref('')
const selectedEstado = ref('pendiente')  // Valor por defecto


// Archivos
const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const filePreview = ref('')

// Estados
const categories = ref<{ id: number; nombre: string; descripcion: string }[]>([
  { id: 1, nombre: 'Robo', descripcion: 'Robo o intento de robo' },
  { id: 2, nombre: 'Accidente', descripcion: 'Accidente de tránsito' },
  { id: 3, nombre: 'Incendio', descripcion: 'Incendio o humo sospechoso' },
  { id: 4, nombre: 'Violencia', descripcion: 'Actos de violencia' },
  { id: 5, nombre: 'Vandalismo', descripcion: 'Daños a propiedad' },
  { id: 6, nombre: 'Sospechoso', descripcion: 'Actividad sospechosa' },
  { id: 7, nombre: 'Otro', descripcion: 'Otro tipo de incidente' }
])

const estados = ref([
  { value: 'pendiente', label: 'Pendiente' },
  { value: 'en_revision', label: 'En Revisión' },
  { value: 'atendido', label: 'Atendido' },
  { value: 'descartado', label: 'Descartado' }
])

const gettingLocation = ref(false)
const isSubmitting = ref(false)
const showConfirmation = ref(false)

// Fecha actual
const today = new Date().toISOString().split('T')[0]

// Validación del formulario
const isFormValid = computed(() => {
  return (
    titulo.value.trim() &&
    selectedCategory.value !== null &&
    description.value.trim() &&
    selectedDate.value &&
    selectedTime.value &&
    location.value.trim() &&
    selectedEstado.value
  )
})

// Inicializar fecha y hora
onMounted(() => {
  const now = new Date()
  selectedDate.value = now.toISOString().split('T')[0]
  selectedTime.value = now.toTimeString().slice(0, 5)
})

// Obtener ubicación actual
const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert('Geolocalización no soportada en tu navegador')
    return
  }

  gettingLocation.value = true
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      location.value = `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)}`
      gettingLocation.value = false
    },
    (error) => {
      console.error('Error obteniendo ubicación:', error)
      alert('No se pudo obtener la ubicación. Por favor ingrésala manualmente.')
      gettingLocation.value = false
    }
  )
}

// Manejar subida de archivo
const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return

  const file = input.files[0]
  selectedFile.value = file

  const reader = new FileReader()
  reader.onload = (e) => {
    filePreview.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

// Eliminar archivo
const removeFile = () => {
  selectedFile.value = null
  filePreview.value = ''
  if (fileInput.value) fileInput.value.value = ''
}

// Guardar borrador en IndexedDB
const saveDraft = async () => {
  try {
    // Extraer coordenadas si existen
    let lat = 18.476
    let lng = -97.394
    let address = location.value

    if (location.value.includes('Lat:')) {
      const parts = location.value.split(',')
      lat = parseFloat(parts[0].replace('Lat:', '').trim())
      lng = parseFloat(parts[1].replace('Long:', '').trim())
      address = `${lat.toFixed(6)}, ${lng.toFixed(6)}`
    }

    const draft: IncidentReport = {
      title: titulo.value || 'Borrador sin título',
      description: description.value,
      category: selectedCategory.value?.toString() || 'sin categoría',
      location: {
        lat,
        lng,
        address
      },
      photos: filePreview.value ? [filePreview.value] : [],
      status: 'pending',
      createdAt: new Date().toISOString(),
      userId: '1'
    }

    await addIncidentReport(draft)
    alert('✅ Borrador guardado en IndexedDB')
  } catch (error) {
    console.error('Error al guardar borrador:', error)
    alert('❌ Error al guardar borrador')
  }
}

// Enviar reporte (solo IndexedDB por ahora)
const submitReport = async () => {
  if (!isFormValid.value) {
    console.log('❌ Formulario no válido')
    return
  }
  
  isSubmitting.value = true
  console.log('📝 Iniciando envío de reporte...')

  try {
    // Extraer lat/long si vienen del GPS
    let lat = 18.476
    let lng = -97.394
    let address = location.value

    if (location.value.includes("Lat:")) {
      const parts = location.value.split(",")
      lat = parseFloat(parts[0].replace("Lat:", "").trim())
      lng = parseFloat(parts[1].replace("Long:", "").trim())
      address = `${lat.toFixed(6)}, ${lng.toFixed(6)}`
    }

    // Validar que categoria_id no sea null
    if (!selectedCategory.value) {
      alert('⚠️ Debes seleccionar una categoría')
      isSubmitting.value = false
      return
    }

    // Guardar en IndexedDB
    const reportForIndexedDB: IncidentReport = {
      title: titulo.value,
      description: description.value,
      category: selectedCategory.value?.toString() || 'sin categoría',
      location: {
        lat,
        lng,
        address
      },
      photos: filePreview.value ? [filePreview.value] : [],
      status: 'sent',
      createdAt: new Date().toISOString(),
      userId: '1'
    }
    
    console.log('📦 Datos a guardar en IndexedDB:', reportForIndexedDB)
    const reportId = await addIncidentReport(reportForIndexedDB)
    console.log('✅ Reporte guardado en IndexedDB con ID:', reportId)

    // Resetear formulario
    selectedCategory.value = null
    titulo.value = ""
    description.value = ""
    location.value = ""
    selectedEstado.value = "pendiente"
    removeFile()

    // Mostrar confirmación
    showConfirmation.value = true
  } catch (err) {
    console.error('❌ Error completo:', err)
    alert("Ocurrió un error al guardar el reporte: " + (err as Error).message)
  } finally {
    isSubmitting.value = false
  }
}

// Cerrar modal de confirmación
const closeConfirmation = () => {
  showConfirmation.value = false
  router.push({ name: 'dashboard' })
}

// Volver al dashboard
const goBack = () => {
  router.push({ name: 'dashboard' })
}
</script>
