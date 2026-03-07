import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// Configuración maestra para conectar tu código con Cloudflare
export default defineConfig({
  output: 'server', // Esto permite que n8n actualice la web al instante
  adapter: cloudflare(), // Le dice a Astro que su "casa" es Cloudflare
  site: 'https://viajesselva.es',
});
