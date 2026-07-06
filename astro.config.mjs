// @ts-check
import { defineConfig } from 'astro/config';

// Configuracion del arnes Astro para Wira Web Page
export default defineConfig({
  site: 'https://wira.systems',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: true,
  },
});