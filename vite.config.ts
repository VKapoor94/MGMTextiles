import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // important: allows access from outside
    port: 5173,       // optional: make sure it matches your dev port
    allowedHosts: ['.ngrok-free.app']
  }
})
