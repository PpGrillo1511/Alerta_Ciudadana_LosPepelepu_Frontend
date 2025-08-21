// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { 
        path: 'dashboard', 
        name: 'dashboard', 
        component: () => import('../views/Dashboard.vue'),
        meta: { title: 'Dashboard' }
      },
      { 
        path: 'report',
        name: 'report',
        component: () => import('../views/ReportIncidentView.vue'),
        meta: { title: 'Reportar Incidente' }
      },
      { 
        path: 'reports', 
        name: 'reports', 
        component: () => import('../views/Reports.vue'),
        meta: { title: 'Reportes' }
      },
      { 
        path: 'my-reports', 
        name: 'my-reports', 
        component: () => import('../views/MyReports.vue'),
        meta: { title: 'Mis Reportes' }
      },
      { 
        path: 'map', 
        name: 'map', 
        component: () => import('../views/IncidentMap.vue'),
        meta: { title: 'Mapa de Incidentes' }
      },
      { 
        path: 'profile', 
        name: 'profile', 
        component: () => import('../views/MyProfile.vue'),
        meta: { title: 'Mi Perfil' }
      },
    ],
  },
  { 
    path: '/login', 
    name: 'login', 
    component: () => import('../views/LoginForm.vue'),
    meta: { title: 'Iniciar Sesión', requiresAuth: false }
  },
  { 
    path: '/register', 
    name: 'register', 
    component: () => import('../views/RegisterForm.vue'),
    meta: { title: 'Registro', requiresAuth: false }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guard de navegación
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token')

  // 🔹 Actualizar el título dinámico
  document.title = to.meta.title 
    ? `${to.meta.title} | Alerta Ciudadana` 
    : 'Alerta Ciudadana'

  // 🔹 Si necesita login y no hay token → redirigir
  if (to.meta.requiresAuth && !token) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } 
  // 🔹 Si ya está logueado e intenta ir al login o register → mandarlo al dashboard
  else if ((to.name === 'login' || to.name === 'register') && token) {
    next({ name: 'dashboard' })
  } 
  else {
    next()
  }
})

export default router
