import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  base: '/sidepj_bose/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
}
