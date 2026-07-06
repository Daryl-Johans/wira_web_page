// @ts-check
import { defineConfig } from 'astro/config';

// Configuracion del arnes Astro para Wira Web Page
export default defineConfig({
  site: 'https://Daryl-Johans.github.io',
  base: '/wira_web_page',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: true,
  },
});