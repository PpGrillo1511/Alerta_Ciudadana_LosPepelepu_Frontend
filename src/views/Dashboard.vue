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
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
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
      <!-- Header Banner -->
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
                <h1 class="text-2xl font-bold text-white">¡Bienvenid@ Griselda Cabrera Franco!</h1>
                <p class="text-purple-100">Gracias por contribuir a hacer de Xicotepec un lugar más seguro</p>
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

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">30%</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Atropellamientos</h3>
          <p class="text-red-400 text-sm">↑ Este mes</p>
        </div>

        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">25%</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Robos</h3>
          <p class="text-orange-400 text-sm">— Sin cambios</p>
        </div>

        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">85%</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Reportes Resueltos</h3>
          <p class="text-green-400 text-sm">↑ Mejorando</p>
        </div>

        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">1,247</span>
          </div>
          <h3 class="text-gray-300 font-medium mb-1">Ciudadanos Activos</h3>
          <p class="text-blue-400 text-sm">↑ +12% este mes</p>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Trend Chart -->
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <h3 class="text-xl font-bold text-white mb-6">Tendencia de Incidentes</h3>
          <div class="h-64 flex items-center justify-center">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <p class="text-gray-300">Gráfica de tendencias mensuales</p>
            </div>
          </div>
        </div>

        <!-- Distribution Chart -->
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <h3 class="text-xl font-bold text-white mb-6">Distribución por Tipo de Incidente</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 rounded-full bg-red-500"></div>
                <span class="text-gray-300">Atropellamientos</span>
              </div>
              <span class="text-white font-semibold">30%</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 rounded-full bg-orange-500"></div>
                <span class="text-gray-300">Robos</span>
              </div>
              <span class="text-white font-semibold">25%</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span class="text-gray-300">Accidentes</span>
              </div>
              <span class="text-white font-semibold">20%</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 rounded-full bg-purple-500"></div>
                <span class="text-gray-300">Otros</span>
              </div>
              <span class="text-white font-semibold">25%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendations and Tips -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Recommendations -->
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <h3 class="text-xl font-bold text-white mb-6">Recomendaciones Basadas en Datos</h3>
          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20">
              <h4 class="font-semibold text-red-400 mb-2">Atropellamientos (30% este mes)</h4>
              <p class="text-gray-300 text-sm">Evita caminar por la Av. Juárez entre 6-8 PM. Usa pasos peatonales y mantente alerta.</p>
            </div>
            <div class="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
              <h4 class="font-semibold text-orange-400 mb-2">Robos (25% constante)</h4>
              <p class="text-gray-300 text-sm">Zona centro: evita mostrar objetos de valor después de las 9 PM. Camina en grupos.</p>
            </div>
          </div>
        </div>

        <!-- Safety Tips -->
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <h3 class="text-xl font-bold text-white mb-6">Consejos de Seguridad</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Mantente Conectado</h4>
                <p class="text-gray-300 text-sm">Comparte tu ubicación con familiares cuando salgas de noche.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">App Siempre Lista</h4>
                <p class="text-gray-300 text-sm">Ten la app abierta en situaciones de riesgo para reportar rápidamente.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Comunidad Unida</h4>
                <p class="text-gray-300 text-sm">Participa en grupos vecinales y mantente informado de tu zona.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="text-center py-6">
        <p class="text-gray-400">alerta_cuidadana para un Xicotepec más seguro 2025</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sidebarOpen = ref(false)
</script>
