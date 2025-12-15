import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ts-cs/',   // <<< IMPORTANT 100% REQUIRED
})
