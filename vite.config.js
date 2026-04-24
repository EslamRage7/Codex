import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: '.vite',
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@emailjs/browser',
      '@emotion/react',
      '@emotion/styled',
      '@mui/material',
    ],
  },
})
