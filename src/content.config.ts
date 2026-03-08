import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Cambiado de ":" a "/" para Cloudflare

const viajes = defineCollection({
  // Usamos la ruta desde la raíz del proyecto para que no haya dudas
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/viajes" }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    descripcion: z.string(),
    imagenPortada: z.string(), 
    precio: z.number().optional(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { viajes };
