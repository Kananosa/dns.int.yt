import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Cloudflare Quick Tunnels (trycloudflare.com) hand out a random
    // subdomain each run, so allow the whole domain instead of one host.
    allowedHosts: ['.trycloudflare.com'],
  },
})