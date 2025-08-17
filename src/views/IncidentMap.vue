<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// ─────────────────────────────────────────────────────────────
// TIPOS
type FilterKey = 'incidentes' | 'callesPeligrosas' | 'callesCerradas' | 'eventos'

// ─────────────────────────────────────────────────────────────
// ROUTER
const router = useRouter()

// ─────────────────────────────────────────────────────────────
// Estado del menú lateral
const sidebarOpen = ref(false)

// Estado de filtros
const selectedFilters = reactive<Record<FilterKey, boolean>>({
  incidentes: true,
  callesPeligrosas: true,
  callesCerradas: true,
  eventos: true
})

// Datos simulados de incidentes
const incidents = ref([
  {
    id: 1,
    type: 'Robo',
    location: 'Av. Juárez y 5 de Mayo',
    coordinates: [19.9789, -97.9564],
    date: '2025-01-15',
    status: 'Activo',
    severity: 'Alto'
  },
  {
    id: 2,
    type: 'Accidente',
    location: 'Calle Hidalgo 123',
    coordinates: [19.9792, -97.9568],
    date: '2025-01-14',
    status: 'Resuelto',
    severity: 'Medio'
  },
  {
    id: 3,
    type: 'Vandalismo',
    location: 'Plaza Principal',
    coordinates: [19.9785, -97.9560],
    date: '2025-01-13',
    status: 'En proceso',
    severity: 'Bajo'
  }
])

// Calles peligrosas
const dangerousStreets = ref([
  {
    id: 1,
    name: 'Av. Revolución (Tramo Centro)',
    reason: 'Múltiples robos reportados',
    level: 'Alto',
    coordinates: [19.9788, -97.9562]
  },
  {
    id: 2,
    name: 'Calle Morelos (Noche)',
    reason: 'Poca iluminación',
    level: 'Medio',
    coordinates: [19.9790, -97.9565]
  }
])

// Calles cerradas y eventos
const closedStreets = ref([
  {
    id: 1,
    name: 'Av. Juárez (Centro)',
    reason: 'Desfile Patrio',
    startDate: '2025-09-16',
    endDate: '2025-09-16',
    startTime: '09:00',
    endTime: '14:00',
    coordinates: [19.9789, -97.9564]
  },
  {
    id: 2,
    name: 'Plaza Principal',
    reason: 'Festival de la Flor',
    startDate: '2025-03-15',
    endDate: '2025-03-17',
    startTime: '08:00',
    endTime: '22:00',
    coordinates: [19.9785, -97.9560]
  }
])

// Eventos próximos
const upcomingEvents = ref([
  {
    id: 1,
    title: 'Desfile de Independencia',
    date: '2025-09-16',
    time: '09:00 - 14:00',
    location: 'Av. Juárez',
    type: 'Desfile',
    daysUntil: 238
  },
  {
    id: 2,
    title: 'Festival de la Flor',
    date: '2025-03-15',
    time: '08:00 - 22:00',
    location: 'Plaza Principal',
    type: 'Festival',
    daysUntil: 54
  }
])

// ─────────────────────────────────────────────────────────────
// Funciones de UI
const toggleSidebar = () => { sidebarOpen.value = !sidebarOpen.value }
const closeSidebar = () => { sidebarOpen.value = false }
const toggleFilter = (filter: FilterKey) => { selectedFilters[filter] = !selectedFilters[filter] }

// Formato y estilos
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Alto': return 'bg-red-900/50 text-red-300 border-red-500/30'
    case 'Medio': return 'bg-yellow-900/50 text-yellow-300 border-yellow-500/30'
    case 'Bajo': return 'bg-green-900/50 text-green-300 border-green-500/30'
    default: return 'bg-gray-900/50 text-gray-300 border-gray-500/30'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Activo': return 'bg-red-900/50 text-red-300 border-red-500/30'
    case 'En proceso': return 'bg-yellow-900/50 text-yellow-300 border-yellow-500/30'
    case 'Resuelto': return 'bg-green-900/50 text-green-300 border-green-500/30'
    default: return 'bg-gray-900/50 text-gray-300 border-gray-500/30'
  }
}

// Navegación
const navigateTo = (routeName: string) => {
  router.push({ name: routeName })
  closeSidebar()
}

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}

onMounted(() => {
  console.log('[v0] Mapa de incidentes inicializado para Xicotepec de Juárez, Puebla')
})
</script>

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
          <button @click="closeSidebar" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <nav class="space-y-2">
          <button 
            @click="navigateTo('dashboard')"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all w-full text-left"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            </svg>
            <span class="font-medium">Dashboard</span>
          </button>
          
          <button 
            @click="navigateTo('report')"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all w-full text-left"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Reportar Incidente</span>
          </button>
          
          <button 
            @click="navigateTo('my-reports')"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all w-full text-left"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span class="font-medium">Mis Reportes</span>
          </button>
          
          <button 
            @click="navigateTo('map')"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="font-medium">Mapa de Incidentes</span>
          </button>
          
          <button 
            @click="navigateTo('profile')"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all w-full text-left"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span class="font-medium">Mi Perfil</span>
          </button>
        </nav>
        
        <div class="mt-8 pt-6 border-t border-purple-500/20">
          <button 
            @click="logout"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all w-full"
          >
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
      @click="closeSidebar"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
    ></div>

    <!-- Main Content -->
    <div class="p-6">
      <!-- Header Simplificado -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-white">Mapa de Incidentes</h1>
            <p class="text-purple-200">Xicotepec de Juárez, Puebla - Monitoreo en tiempo real</p>
          </div>
          <button 
            @click="toggleSidebar"
            class="p-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all lg:hidden"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Map Content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Filters and Controls Panel -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Filters -->
          <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <h3 class="text-lg font-bold text-white mb-4">Filtros del Mapa</h3>
            <div class="space-y-4">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="selectedFilters.incidentes"
                  class="w-4 h-4 rounded border-purple-500/30 bg-slate-700/50 text-purple-600 focus:ring-purple-500 focus:ring-2"
                />
                <span class="text-gray-300">Incidentes Reportados</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="selectedFilters.callesPeligrosas"
                  class="w-4 h-4 rounded border-purple-500/30 bg-slate-700/50 text-yellow-600 focus:ring-yellow-500 focus:ring-2"
                />
                <span class="text-gray-300">Calles Peligrosas</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="selectedFilters.callesCerradas"
                  class="w-4 h-4 rounded border-purple-500/30 bg-slate-700/50 text-red-600 focus:ring-red-500 focus:ring-2"
                />
                <span class="text-gray-300">Calles Cerradas</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="selectedFilters.eventos"
                  class="w-4 h-4 rounded border-purple-500/30 bg-slate-700/50 text-purple-600 focus:ring-purple-500 focus:ring-2"
                />
                <span class="text-gray-300">Eventos Próximos</span>
              </label>
            </div>
          </div>

          <!-- Upcoming Events -->
          <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <h3 class="text-lg font-bold text-white mb-4">Eventos Próximos</h3>
            
            <div class="space-y-3">
              <div v-for="event in upcomingEvents" :key="event.id" class="p-4 bg-purple-600/10 rounded-xl border border-purple-500/20">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h4 class="font-semibold text-purple-300">{{ event.title }}</h4>
                    <p class="text-sm text-gray-300 mt-1">{{ formatDate(event.date) }}</p>
                    <p class="text-sm text-gray-300">{{ event.time }}</p>
                    <p class="text-sm text-gray-300">📍 {{ event.location }}</p>
                  </div>
                  <span class="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                    {{ event.daysUntil }} días
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <h3 class="text-lg font-bold text-white mb-4">Estadísticas</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Incidentes Activos</span>
                <span class="font-semibold text-red-400">{{ incidents.filter(i => i.status === 'Activo').length }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Calles Peligrosas</span>
                <span class="font-semibold text-yellow-400">{{ dangerousStreets.length }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Calles Cerradas</span>
                <span class="font-semibold text-red-400">{{ closedStreets.length }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Eventos Próximos</span>
                <span class="font-semibold text-purple-400">{{ upcomingEvents.length }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Map -->
        <div class="lg:col-span-3">
          <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden">
            <!-- Map Header -->
            <div class="p-6 border-b border-purple-500/20">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-white">Mapa Interactivo</h3>
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-gray-300">Última actualización:</span>
                  <span class="text-sm font-medium text-purple-400">{{ new Date().toLocaleTimeString('es-MX') }}</span>
                </div>
              </div>
            </div>

            <!-- Map Area -->
            <div class="relative h-96 bg-gradient-to-br from-slate-700/30 to-purple-800/30">
              <!-- Map Simulation -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h4 class="text-xl font-bold text-white mb-2">Mapa de Xicotepec de Juárez</h4>
                  <p class="text-gray-300">Aquí se mostraría el mapa interactivo con todos los incidentes y alertas</p>
                </div>
              </div>

              <!-- Map Legend -->
              <div class="absolute top-4 left-4 space-y-2">
                <div class="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-purple-500/20">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span class="text-sm text-white">Incidentes</span>
                </div>
                <div class="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-purple-500/20">
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span class="text-sm text-white">Calles Peligrosas</span>
                </div>
                <div class="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-purple-500/20">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span class="text-sm text-white">Calles Cerradas</span>
                </div>
                <div class="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-purple-500/20">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span class="text-sm text-white">Eventos</span>
                </div>
              </div>
            </div>

            <!-- Recent Incidents List -->
            <div class="p-6 border-t border-purple-500/20">
              <h4 class="font-bold text-white mb-4">Incidentes Recientes</h4>
              <div class="space-y-3 max-h-40 overflow-y-auto">
                <div
                  v-for="incident in incidents"
                  :key="incident.id"
                  class="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-purple-500/20"
                >
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <span class="font-medium text-white">{{ incident.type }}</span>
                      <span :class="['text-xs px-2 py-1 rounded-full border', getSeverityColor(incident.severity)]">
                        {{ incident.severity }}
                      </span>
                    </div>
                    <p class="text-sm text-gray-300 mt-1">📍 {{ incident.location }}</p>
                    <p class="text-xs text-gray-400">{{ formatDate(incident.date) }}</p>
                  </div>
                  <span :class="['text-xs px-2 py-1 rounded-full border', getStatusColor(incident.status)]">
                    {{ incident.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Street Closure Alerts -->
      <div class="mt-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
        <h3 class="text-xl font-bold text-white mb-6">🚧 Alertas de Calles Cerradas</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="street in closedStreets" :key="street.id" class="p-4 bg-red-600/10 rounded-xl border border-red-500/20">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h4 class="font-semibold text-red-300">{{ street.name }}</h4>
                <p class="text-sm text-gray-300 mt-1">{{ street.reason }}</p>
                <div class="mt-3 space-y-1">
                  <p class="text-sm text-gray-300">
                    📅 {{ formatDate(street.startDate) }}
                    {{ street.startDate !== street.endDate ? ` - ${formatDate(street.endDate)}` : '' }}
                  </p>
                  <p class="text-sm text-gray-300">🕐 {{ street.startTime }} - {{ street.endTime }}</p>
                </div>
              </div>
              <span class="text-xs bg-red-600/20 text-red-300 px-2 py-1 rounded-full border border-red-500/30">
                Cerrada
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="text-center py-6 mt-8">
        <p class="text-gray-400">alerta_ciudadana para un Xicotepec más seguro 2025</p>
      </footer>
    </div>
  </div>
</template>