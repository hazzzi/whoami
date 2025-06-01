import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/whoami/', // GitHub Pages용 base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
}) 