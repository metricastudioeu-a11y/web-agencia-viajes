import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Cambiamos ":" por "/" para máxima compatibilidad

const viajes = defineCollection({
  // Busca tus archivos de viajes en esta carpeta específica
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/viajes" }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    descripcion: z.string(),
    imagenPortada: image(),
    precio: z.number().optional(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { viajes };
