<!-- src/layouts/MainLayout.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const sidebarOpen = ref(false);
const router = useRouter();

const goto = (name: string) => {
  router.push({ name });
  sidebarOpen.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-800/95 to-purple-900/95 backdrop-blur-xl border-l border-purple-500/20 transform transition-transform duration-300 ease-in-out z-50',
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-white">Menú de Navegación</h2>
          <button @click="sidebarOpen = false" class="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <!-- Opción A: RouterLink (recomendado) -->
        <nav class="space-y-2">
          <RouterLink
            :to="{ name: 'dashboard' }"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all"
            @click="sidebarOpen = false"
          >
            <span class="font-medium">Dashboard</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'report' }"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all"
            @click="sidebarOpen = false"
          >
            <span class="font-medium">Reportar Incidente</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'my-reports' }"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all"
            @click="sidebarOpen = false"
          >
            <span class="font-medium">Mis Reportes</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'reports' }"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all"
            @click="sidebarOpen = false"
          >
            <span class="font-medium">Estadísticas</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'map' }"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all"
            @click="sidebarOpen = false"
          >
            <span class="font-medium">Mapa de Incidentes</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'profile' }"
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-800/50 hover:text-white transition-all"
            @click="sidebarOpen = false"
          >
            <span class="font-medium">Mi Perfil</span>
          </RouterLink>
        </nav>

        <!-- Opción B: Botones con goto('ruta') -->
        <!--
        <nav class="space-y-2 mt-6">
          <button @click="goto('dashboard')" class="...">Dashboard</button>
          <button @click="goto('report')" class="...">Reportar Incidente</button>
          ...
        </nav>
        -->

        <div class="mt-8 pt-6 border-t border-purple-500/20">
          <button
            class="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all w-full"
            @click="localStorage.removeItem('token'); router.push({ name: 'login' })"
          >
            <span class="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Overlay -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
    />

    <!-- Header de tu app (botón para abrir sidebar, etc.) -->
    <header class="p-4">
      <button
        @click="sidebarOpen = true"
        class="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
      >
        ☰
      </button>
    </header>

    <!-- AQUÍ se renderizan las pantallas hijas -->
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
