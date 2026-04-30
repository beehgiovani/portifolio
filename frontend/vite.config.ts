import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Referência da documentação oficial do Vite caso precise mexer na build: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Separa as libs grandes em chunks individuais
              if (id.includes('react-syntax-highlighter')) {
                return 'vendor-syntax';
              }
              if (id.includes('framer-motion')) {
                return 'vendor-framer';
              }
              if (id.includes('lucide-react')) { 
                return 'vendor-icons';
              }
              
              return 'vendor';
            }
          }
        }
      },
      chunkSizeWarningLimit: 1000 // Aumentar o limite para 1MB se você aceitar o peso
    }
})
