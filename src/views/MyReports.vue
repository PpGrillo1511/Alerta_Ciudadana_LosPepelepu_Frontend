<template>
  <div>
    <!-- User Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Total Reportes -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">{{ totalCount }}</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Total Reportes</h3>
        <p class="text-cyan-600 text-sm">Desde enero 2025</p>
      </div>

      <!-- Resueltos -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">{{ resolvedCount }}</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Resueltos</h3>
        <p class="text-emerald-600 text-sm">{{ effectiveness }}% de efectividad</p>
      </div>

      <!-- Pendientes -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">{{ pendingCount }}</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Pendientes</h3>
        <p class="text-amber-600 text-sm">En proceso</p>
      </div>

      <!-- Más Reportado -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">{{ mostReported }}</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Más Reportado</h3>
        <p class="text-rose-600 text-sm">{{ mostReportedCount }} reportes</p>
      </div>
    </div>

    <!-- Reports Table -->
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="p-6 border-b border-slate-200">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-slate-900">Historial de Reportes</h3>
          <div class="flex items-center space-x-4">
            <select v-model="selectedFilter"
              class="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
              <option value="all">Todos</option>
              <option value="pending">Pendientes</option>
              <option value="resolved">Resueltos</option>
              <option value="in-progress">En progreso</option>
            </select>
            <input v-model="searchQuery" type="text" placeholder="Buscar reportes..."
              class="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
          </div>
        </div>
      </div>

      <div class="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table class="w-full">
          <thead class="bg-slate-50">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tipo</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Descripción
              </th>
              <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Ubicación</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fecha</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr v-for="report in filteredReports" :key="report.id" class="hover:bg-slate-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="[
                  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
                  report.type === 'Atropellamiento' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                  report.type === 'Robo' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                  report.type === 'Accidente' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  'bg-indigo-50 text-indigo-700 border-indigo-200'
                ]">
                  {{ report.id }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-slate-900 max-w-xs truncate">{{ report.descripcion }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{{ report.location }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{{ report.fecha_reporte }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="[
                  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
                  report.estado === 'atendido' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                  report.estado === 'pendiente' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  'bg-sky-50 text-sky-700 border-sky-200'
                ]">
                  {{ report.estado === 'atendido' ? 'Resuelto' : report.estado === 'pendiente' ? 'Pendiente' : 'En progreso' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button @click="viewReport(report.id)"
                  class="text-cyan-600 hover:text-cyan-700 mr-3 transition-colors">Ver</button>
                <button v-if="report.estado === 'pendiente'" @click="editReport(report.id)"
                  class="text-indigo-600 hover:text-indigo-700 transition-colors">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type ReportStatus = 'pendiente' | 'en_revision' | 'atendido' | 'descartado'
type ReportType = 'Atropellamiento' | 'Robo' | 'Accidente' | 'Vandalismo'

interface Report {
  id: number
  type: ReportType
  descripcion: string
  location: string
  fecha_reporte: string
  estado: ReportStatus
  usuario_id: number
  categoria_id: number
  imagen?: string | null
}

const selectedFilter = ref<'all' | 'pending' | 'resolved' | 'in-progress' | 'descart' >('all')
const searchQuery = ref('')
const myReports = ref<Report[]>([])

const fetchReports = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/incidentes/')
    const data = await res.json()
    myReports.value = data.filter((r: Report) => r.usuario_id === 1)
  } catch (err) {
    console.error('Error al obtener reportes:', err)
  }
}

onMounted(fetchReports)

// Total reportes (incluye todos los estados)
const totalCount = computed(() => myReports.value.length)

// Resueltos y pendientes (solo los estados relevantes)
const resolvedCount = computed(() => myReports.value.filter(r => r.estado === 'atendido').length)
const pendingCount = computed(() => myReports.value.filter(r => r.estado === 'pendiente').length)
const effectiveness = computed(() => {
  const relevantReports = myReports.value.filter(r => r.estado === 'atendido' || r.estado === 'pendiente')
  return relevantReports.length ? Math.round((resolvedCount.value / relevantReports.length) * 100) : 0
})

const mostReported = computed(() => {
  const freq: Record<ReportType, number> = { Atropellamiento: 0, Robo: 0, Accidente: 0, Vandalismo: 0 }
  for (const r of myReports.value) freq[r.type]++
  return (Object.entries(freq).sort((a,b) => b[1] - a[1])[0]?.[0] ?? 'Atropellamiento') as ReportType
})

const mostReportedCount = computed(() => myReports.value.filter(r => r.type === mostReported.value).length)

const filteredReports = computed(() => {
  let filtered = myReports.value.slice()

  if (selectedFilter.value !== 'all') {
    const statusMap: Record<'pending' | 'resolved' | 'in-progress' | 'descart', ReportStatus> = {
      'pending': 'pendiente',
      'resolved': 'atendido',
      'in-progress': 'en_revision',
      'descart': 'descartado'
    }
    filtered = filtered.filter(report => report.estado === statusMap[selectedFilter.value as 'pending' | 'resolved' | 'in-progress' | 'descart'])
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(report =>
      report.type.toLowerCase().includes(query) ||
      report.descripcion.toLowerCase().includes(query) ||
      report.location.toLowerCase().includes(query)
    )
  }

  return filtered
})

const viewReport = (id: number) => router.push({ name: 'report-detail', params: { id } })
const editReport = (id: number) => router.push({ name: 'edit-report', params: { id } })
</script>
