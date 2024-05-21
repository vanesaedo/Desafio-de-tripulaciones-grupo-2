import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, 
    environment: 'jsdom',
    setupFiles: './tests/setup',
  },
}) //Para hacer todos los imports de Vitest global y evitar hacer importaciones manuales