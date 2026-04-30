import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Referência da documentação oficial do Vite caso precise mexer na build: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
