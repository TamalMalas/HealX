import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No /api proxy needed here anymore. When you run `vercel dev` (see README),
// the Vercel CLI itself serves both the frontend AND the /api functions on
// one port, and routes /api/* to the right function automatically — the
// same way the real deployment on vercel.com will.
export default defineConfig({
  plugins: [react()],
});

