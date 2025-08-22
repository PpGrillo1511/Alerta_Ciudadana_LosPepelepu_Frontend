// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // URL de tu API FastAPI
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adjuntar token en cada petición (si existe)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
