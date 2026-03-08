import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Configuración maestra para conectar tu código con Cloudflare
export default defineConfig({
  output: 'server', 
  adapter: cloudflare(), 
  site: 'https://viajesselva.es',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});