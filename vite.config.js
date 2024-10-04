import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    devSourcemap: true
  },
  server: {
    port: 1207
  }
})
