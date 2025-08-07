import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // ... other server options ...
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '850d795bbe06.ngrok-free.app'
    ],
  },
})