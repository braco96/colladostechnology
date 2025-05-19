import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  // outDir: './dist',  // Opcional, por defecto es dist
});