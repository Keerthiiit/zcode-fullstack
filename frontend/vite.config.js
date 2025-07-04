// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/zcode-fullstack/',  // 👈 important for subfolder deployment
  plugins: [react()],
})
