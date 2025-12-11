import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      
      manifest: {
        name: 'Alerta Ciudadana LosPepelepu', 
        short_name: 'AlertaCiudadana',         
        description: 'Aplicación PWA para reportar incidentes ciudadanos', 
        theme_color: '#ffffff',  
        background_color: '#000000ff',
        icons: [
          {
            src: '/icons/icono192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icono512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
