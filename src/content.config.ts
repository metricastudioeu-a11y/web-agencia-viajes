import { defineCollection, z } from 'astro:content';
import { glob } from 'astro:loaders'; // IMPORTANTE: que use ":"

const viajes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/viajes" }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    descripcion: z.string(),
    imagenPortada: z.string(), 
    precio: z.number().optional(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { viajes };
