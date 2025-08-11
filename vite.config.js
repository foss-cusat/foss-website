import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['www.fosscusat.org', 'fosscusat.org', 'localhost'],
    host: '0.0.0.0',
    port: 3000
  },
  preview: {
    allowedHosts: ['www.fosscusat.org', 'fosscusat.org', 'localhost'],
    host: '0.0.0.0',
    port: 3000
  }
})
