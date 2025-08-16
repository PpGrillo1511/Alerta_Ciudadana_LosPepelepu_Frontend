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
          
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Reportar Incidente</span>
          </a>
          
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
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
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <div>
                <h1 class="text-2xl font-bold text-white">Mis Reportes</h1>
                <p class="text-purple-100">Griselda Cabrera Franco - Historial de reportes</p>
              </div>
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

      <!-- User Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">{{ myReports.length }}</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Total Reportes</h3>
          <p class="text-blue-400 text-sm">Desde enero 2025</p>
        </div>

        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">{{ resolvedCount }}</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Resueltos</h3>
          <p class="text-green-400 text-sm">{{ effectiveness }}% de efectividad</p>
        </div>

        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">{{ pendingCount }}</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Pendientes</h3>
          <p class="text-yellow-400 text-sm">En proceso</p>
        </div>

        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">{{ mostReported }}</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Más Reportado</h3>
          <p class="text-red-400 text-sm">{{ mostReportedCount }} reportes</p>
        </div>
      </div>

      <!-- Reports Table -->
      <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden">
        <div class="p-6 border-b border-purple-500/20">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-white">Historial de Reportes</h3>
            <div class="flex items-center space-x-4">
              <select v-model="selectedFilter" class="px-4 py-2 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="all">Todos</option>
                <option value="pending">Pendientes</option>
                <option value="resolved">Resueltos</option>
                <option value="in-progress">En progreso</option>
              </select>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Buscar reportes..."
                class="px-4 py-2 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
            </div>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-800/50">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tipo</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Descripción</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ubicación</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-purple-500/20">
              <tr v-for="report in filteredReports" :key="report.id" class="hover:bg-slate-800/30 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                    report.type === 'Atropellamiento' ? 'bg-red-900/50 text-red-300 border border-red-500/30' :
                    report.type === 'Robo' ? 'bg-orange-900/50 text-orange-300 border border-orange-500/30' :
                    report.type === 'Accidente' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30' :
                    'bg-purple-900/50 text-purple-300 border border-purple-500/30'
                  ]">
                    {{ report.type }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-white max-w-xs truncate">{{ report.description }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{{ report.location }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div>{{ report.date }}</div>
                  <div class="text-xs text-gray-500">{{ report.time }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                    report.status === 'Resuelto' ? 'bg-green-900/50 text-green-300 border border-green-500/30' :
                    report.status === 'Pendiente' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30' :
                    'bg-blue-900/50 text-blue-300 border border-blue-500/30'
                  ]">
                    {{ report.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-purple-400 hover:text-purple-300 mr-3 transition-colors">Ver</button>
                  <button v-if="report.status === 'Pendiente'" class="text-blue-400 hover:text-blue-300 transition-colors">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
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
import { ref, computed } from 'vue'

// ── Tipos ─────────────────────────────────────────────────────────
type ReportStatus = 'Resuelto' | 'Pendiente' | 'En progreso'
type ReportType = 'Atropellamiento' | 'Robo' | 'Accidente' | 'Vandalismo'

type Report = {
  id: number
  type: ReportType
  description: string
  location: string
  date: string
  time: string
  status: ReportStatus
}

type FilterOption = 'all' | 'pending' | 'resolved' | 'in-progress'

// ── Estado UI ─────────────────────────────────────────────────────
const sidebarOpen = ref(false)
const selectedFilter = ref<FilterOption>('all')
const searchQuery = ref('')

// ── Datos (mock) ──────────────────────────────────────────────────
const myReports = ref<Report[]>([
  { id: 1,  type: 'Atropellamiento', description: 'Vehículo atropelló a peatón en crucero principal, conductor se dio a la fuga', location: 'Av. Juárez #123', date: '15/08/2025', time: '14:30', status: 'Resuelto' },
  { id: 2,  type: 'Robo',            description: 'Asalto a mano armada en tienda de conveniencia, dos sujetos encapuchados',   location: 'Centro Histórico',  date: '12/08/2025', time: '21:15', status: 'Resuelto' },
  { id: 3,  type: 'Accidente',       description: 'Choque entre dos vehículos, daños materiales, no hay heridos',               location: 'Calle Hidalgo',     date: '10/08/2025', time: '16:45', status: 'Resuelto' },
  { id: 4,  type: 'Atropellamiento', description: 'Motociclista atropelló a niño en zona escolar, heridas leves',               location: 'Escuela Primaria',  date: '08/08/2025', time: '13:20', status: 'Resuelto' },
  { id: 5,  type: 'Vandalismo',      description: 'Grafitis en paredes del parque central, daños a mobiliario urbano',          location: 'Parque Central',    date: '05/08/2025', time: '02:30', status: 'Pendiente' },
  { id: 6,  type: 'Robo',            description: 'Robo de celular a estudiante universitaria, agresor huyó en motocicleta',    location: 'Universidad',       date: '03/08/2025', time: '19:45', status: 'En progreso' },
  { id: 7,  type: 'Atropellamiento', description: 'Camión de carga atropelló ciclista, heridas graves, trasladado al hospital', location: 'Carretera Principal', date: '01/08/2025', time: '07:15', status: 'Resuelto' },
  { id: 8,  type: 'Accidente',       description: 'Volcadura de vehículo en curva peligrosa, conductor bajo influencia del alcohol', location: 'Curva del Mirador', date: '28/07/2025', time: '23:30', status: 'Resuelto' },
  { id: 9,  type: 'Robo',            description: 'Asalto a comerciante en mercado municipal, sustrajeron dinero de ventas',     location: 'Mercado Municipal', date: '25/07/2025', time: '18:20', status: 'Resuelto' },
  { id: 10, type: 'Atropellamiento', description: 'Taxi atropelló a adulto mayor en paso peatonal, heridas moderadas',          location: 'Plaza Principal',   date: '22/07/2025', time: '11:10', status: 'Resuelto' },
  { id: 11, type: 'Vandalismo',      description: 'Destrucción de señalamientos viales, postes de luz dañados',                  location: 'Av. Independencia', date: '20/07/2025', time: '03:45', status: 'Pendiente' },
  { id: 12, type: 'Atropellamiento', description: 'Autobús urbano atropelló a vendedor ambulante, heridas leves',                location: 'Terminal de Autobuses', date: '18/07/2025', time: '15:30', status: 'Resuelto' },
  { id: 13, type: 'Robo',            description: 'Robo a casa habitación, sustrajeron electrodomésticos y dinero',              location: 'Colonia Reforma',   date: '15/07/2025', time: '14:00', status: 'En progreso' },
  { id: 14, type: 'Accidente',       description: 'Colisión múltiple en intersección, tres vehículos involucrados',              location: 'Crucero 5 de Mayo', date: '12/07/2025', time: '17:20', status: 'Resuelto' },
  { id: 15, type: 'Atropellamiento', description: 'Vehículo particular atropelló a joven en bicicleta, heridas graves',          location: 'Ciclovía Principal', date: '10/07/2025', time: '06:45', status: 'Resuelto' }
])

// ── Derivados / métricas ─────────────────────────────────────────
const resolvedCount = computed(() => myReports.value.filter(r => r.status === 'Resuelto').length)
const pendingCount  = computed(() => myReports.value.filter(r => r.status === 'Pendiente').length)
const effectiveness = computed(() => myReports.value.length ? Math.round((resolvedCount.value / myReports.value.length) * 100) : 0)

const mostReported = computed(() => {
  const freq: Record<ReportType, number> = { Atropellamiento: 0, Robo: 0, Accidente: 0, Vandalismo: 0 }
  for (const r of myReports.value) freq[r.type]++
  return (Object.entries(freq).sort((a,b)=>b[1]-a[1])[0]?.[0] ?? 'Atropellamiento') as ReportType
})
const mostReportedCount = computed(() => myReports.value.filter(r => r.type === mostReported.value).length)

// ── Filtro + búsqueda ────────────────────────────────────────────
const filteredReports = computed<Report[]>(() => {
  let filtered = myReports.value.slice()

  if (selectedFilter.value !== 'all') {
    // Tipar el mapa de estado para que coincida con las opciones del select
    const statusMap: Record<Exclude<FilterOption, 'all'>, ReportStatus> = {
      'pending': 'Pendiente',
      'resolved': 'Resuelto',
      'in-progress': 'En progreso'
    }
    filtered = filtered.filter(report => report.status === statusMap[selectedFilter.value as Exclude<FilterOption, 'all'>])
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(report => 
      report.type.toLowerCase().includes(query) ||
      report.description.toLowerCase().includes(query) ||
      report.location.toLowerCase().includes(query)
    )
  }

  return filtered
})
</script>
