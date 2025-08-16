<!-- src/views/LoginForm.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img
          class="w-16 h-16 rounded-xl shadow-lg"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-N5NgJJ9kcwMeVSd6Gof1EzbuAkkl4L.jpeg"
          alt="Alerta Ciudadana"
        />
      </div>

      <!-- Card -->
      <div class="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 class="text-center text-2xl font-bold text-white">Alerta Ciudadana</h1>
        <p class="text-center text-purple-200 mt-1">
          Inicia sesión para contribuir a la seguridad
        </p>

        <form class="mt-6 space-y-4" @submit.prevent="login">
          <div>
            <label class="block text-sm text-purple-200 mb-1">Correo Electrónico</label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="tu@email.com"
              class="w-full rounded-xl px-4 py-3 bg-slate-800/60 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label class="block text-sm text-purple-200 mb-1">Contraseña</label>
            <div class="relative">
              <input
                :type="showPass ? 'text' : 'password'"
                v-model="password"
                required
                class="w-full rounded-xl px-4 py-3 bg-slate-800/60 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                class="absolute inset-y-0 right-3 my-auto text-gray-300 hover:text-white"
                @click="showPass = !showPass"
                aria-label="Mostrar/ocultar contraseña"
              >
                <svg v-if="!showPass" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.966 9.966 0 012.54-4.26M6.1 6.1C7.81 4.788 9.83 4 12 4c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-3.145 4.568M3 3l18 18"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="inline-flex items-center text-purple-200">
              <input type="checkbox" v-model="remember" class="mr-2 rounded bg-slate-800/60 border-purple-500/30" />
              Recordarme
            </label>
            <a class="text-purple-300 hover:text-white cursor-pointer" @click="goRegister">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            class="w-full rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Iniciar Sesión
          </button>

          <p class="text-center text-purple-200 text-sm">
            ¿No tienes cuenta?
            <a class="text-purple-300 hover:text-white cursor-pointer" @click="goRegister">Regístrate aquí</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const email = ref('')
const password = ref('')
const remember = ref(false)
const showPass = ref(false)

const router = useRouter()
const route = useRoute()

const login = () => {
  // Validación mínima
  if (!email.value || !password.value) return

  // Guardar un token de prueba para que el guard te deje pasar
  localStorage.setItem('token', 'dummy-token')

  // Redirigir a donde intentabas entrar o al dashboard
  const redirect = (route.query.redirect as string) || '/'
  router.push(redirect)
}

const goRegister = () => {
  router.push('/register')
}
</script>
