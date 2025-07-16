import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification for better performance
    minify: 'terser',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  },
  // Improve development server performance
  server: {
    host: true,
    port: 3000
  }
})
