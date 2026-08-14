import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Para desarrollo local: base: '/'
  // Para GitHub Pages: base: '/portafolio/'
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
