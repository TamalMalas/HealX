import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Any browser call to fetch('/api/...') gets silently forwarded to
      // the backend at localhost:4000. This means React code never needs
      // to hardcode a backend URL — handy now, and essential later when
      // the app is deployed somewhere the backend URL isn't localhost.
      '/api': 'http://localhost:4000',
    },
  },
});
