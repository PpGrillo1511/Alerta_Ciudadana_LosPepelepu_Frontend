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
          
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
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
              <h1 class="text-2xl font-bold text-white">Mi Perfil</h1>
              <p class="text-purple-100">Gestiona tu información personal y configuración</p>
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

      <!-- Profile Content -->
      <div class="max-w-4xl mx-auto">
        <!-- Profile Header -->
        <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 mb-8">
          <div class="flex items-center space-x-6">
            <div class="relative">
              <div class="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                G
              </div>
              <button class="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-white mb-1">Griselda Cabrera Franco</h2>
              <p class="text-purple-300 mb-2">Ciudadano Activo</p>
              <div class="flex items-center space-x-4 text-sm text-gray-400">
                <span>Miembro desde: Enero 2025</span>
                <span>•</span>
                <span>15 reportes realizados</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Sections -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Personal Information -->
          <div class="lg:col-span-2">
            <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 mb-8">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-xl font-bold text-white">Información Personal</h3>
                <button 
                  @click="editingPersonal = !editingPersonal"
                  class="px-4 py-2 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 transition-all"
                >
                  {{ editingPersonal ? 'Cancelar' : 'Editar' }}
                </button>
              </div>
              
              <form @submit.prevent="savePersonalInfo" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                    <input
                      v-model="personalInfo.firstName"
                      :disabled="!editingPersonal"
                      type="text"
                      class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Apellidos</label>
                    <input
                      v-model="personalInfo.lastName"
                      :disabled="!editingPersonal"
                      type="text"
                      class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
                  <input
                    v-model="personalInfo.email"
                    :disabled="!editingPersonal"
                    type="email"
                    class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
                  <input
                    v-model="personalInfo.phone"
                    :disabled="!editingPersonal"
                    type="tel"
                    class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Dirección</label>
                  <textarea
                    v-model="personalInfo.address"
                    :disabled="!editingPersonal"
                    rows="3"
                    class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all resize-none"
                  ></textarea>
                </div>
                
                <div v-if="editingPersonal" class="flex justify-end">
                  <button
                    type="submit"
                    class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>

            <!-- Security Section -->
            <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <h3 class="text-xl font-bold text-white mb-6">Seguridad</h3>
              
              <form @submit.prevent="changePassword" class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Contraseña Actual</label>
                  <input
                    v-model="passwordForm.current"
                    type="password"
                    class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="••••••••"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Nueva Contraseña</label>
                  <input
                    v-model="passwordForm.new"
                    type="password"
                    class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="••••••••"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Confirmar Nueva Contraseña</label>
                  <input
                    v-model="passwordForm.confirm"
                    type="password"
                    class="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="••••••••"
                  >
                </div>
                
                <button
                  type="submit"
                  class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Cambiar Contraseña
                </button>
              </form>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Activity Stats -->
            <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <h3 class="text-lg font-bold text-white mb-4">Estadísticas</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-gray-300">Reportes Enviados</span>
                  <span class="text-white font-semibold">15</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-300">Reportes Resueltos</span>
                  <span class="text-green-400 font-semibold">12</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-300">Puntos de Confianza</span>
                  <span class="text-purple-400 font-semibold">850</span>
                </div>
              </div>
            </div>

            <!-- Notifications -->
            <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <h3 class="text-lg font-bold text-white mb-4">Notificaciones</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-gray-300">Alertas por Email</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="notifications.email" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-300">Notificaciones Push</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="notifications.push" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-300">SMS de Emergencia</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="notifications.sms" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <h3 class="text-lg font-bold text-white mb-4">Acciones Rápidas</h3>
              <div class="space-y-3">
                <button class="w-full px-4 py-3 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 transition-all text-left">
                  Descargar mis datos
                </button>
                <button class="w-full px-4 py-3 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 transition-all text-left">
                  Exportar reportes
                </button>
                <button class="w-full px-4 py-3 rounded-xl bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600/30 transition-all text-left">
                  Eliminar cuenta
                </button>
              </div>
            </div>
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
import { ref } from 'vue'

const sidebarOpen = ref(false)
const editingPersonal = ref(false)

const personalInfo = ref({
  firstName: 'Griselda',
  lastName: 'Cabrera Franco',
  email: 'griselda@email.com',
  phone: '764 123 4567',
  address: 'Calle Hidalgo #123, Centro, Xicotepec de Juárez, Puebla'
})

const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

const notifications = ref({
  email: true,
  push: true,
  sms: false
})

const savePersonalInfo = () => {
  // Simulate API call
  editingPersonal.value = false
  alert('Información actualizada exitosamente')
}

const changePassword = () => {
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    alert('Las contraseñas no coinciden')
    return
  }
  
  // Simulate API call
  passwordForm.value = { current: '', new: '', confirm: '' }
  alert('Contraseña cambiada exitosamente')
}
</script>
