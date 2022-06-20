import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: !process.env.TAURI_DEBUG && 'esbuild',
    sourcemap: !!process.env.TAURI_DEBUG,
    target: ['es2021', 'chrome97', 'safari13'],
  },
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_'],
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
});