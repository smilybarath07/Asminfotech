import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Asminfotech/',
  build:{
    rollupOptions:{
      input:{
        main:'index.html',
      }
    }
  },
  plugins: [react()],
})