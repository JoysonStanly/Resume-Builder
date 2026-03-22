import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    // Enable HTTPS for local dev to avoid mixed content issues with external HTTPS images
    https: process.env.VITE_HTTPS === 'true' ? {
      rejectUnauthorized: false
    } : false,
    cors: true,
  }
})
