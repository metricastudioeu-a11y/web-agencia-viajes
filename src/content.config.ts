import { defineCollection, z } from 'astro:content';
import { glob } from 'astro:loaders';

// Este es el "guardaespaldas" que revisa los datos de n8n
const viajes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/viajes" }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    fechaCreacion: z.coerce.date(),
    descripcion: z.string(),
    imagenPortada: image(),
    pdfMapa: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    precio: z.number().optional(),
    destacado: z.boolean().default(false),
  })
});

export const collections = { viajes };
