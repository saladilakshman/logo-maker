import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/logo-maker/',
  plugins: [react()],
  server: {
    proxy: {
      '/png/': {
        target: 'https://logoexpress.tubeguruji.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/png/, '/png')
      }
    }
  },
   build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
