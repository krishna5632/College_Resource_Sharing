import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  server:{
    proxy:{
      '/user':'http://localhost:4000'
    }
  },

  //Rule:
//  for Development  → Vite proxy.
// for Production → CORS or reverse proxy (NGINX, Traefik, etc.).

  plugins: [react()],
})
