// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'dashboard', component: () => import('../views/Dashboard.vue') },
      { path: 'report', name: 'report', component: () => import('../views/ReportIncidentView.vue') },
      { path: 'reports', name: 'reports', component: () => import('../views/Reports.vue') },
      { path: 'my-reports', name: 'my-reports', component: () => import('../views/MyReports.vue') },
      { path: 'map', name: 'map', component: () => import('../views/IncidentMap.vue') },
      { path: 'profile', name: 'profile', component: () => import('../views/MyProfile.vue') },
    ],
  },
  { path: '/login', name: 'login', component: () => import('../views/LoginForm.vue') },
  { path: '/register', name: 'register', component: () => import('../views/RegisterForm.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard simple (déjalo si quieres proteger rutas)
router.beforeEach((to) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    return { name: 'login', query: { redirect: to.fullPath } };
  }
});

export default router;
