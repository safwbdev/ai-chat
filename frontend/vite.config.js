import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const API_URL = `${env.VITE_API_URL ?? 'http://localhost:3000'}`;
  const PORT = `${env.VITE_PORT ?? '5173'}`;
  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: PORT,
      proxy: {
        "/api": {
          target: API_URL,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, "/api"),
        }
      }
    }
  }
})
