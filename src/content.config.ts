import { defineCollection, z } from 'astro:content';
import { glob } from 'astro:loaders';

// Colección para los Puertos del Mundo
const puertos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/puertos" }),
  schema: z.object({
    nombre: z.string(),
    pais: z.string(),
    region: z.string(), // Ejemplo: Mediterráneo, Caribe, Norte de Europa
    imagen: z.string(),
    linkCivitatis: z.string().optional(), // Tu enlace de afiliado
  }),
});

// Colección para los Consejos/Blog (Tráfico Masivo)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    categoria: z.string(),
    imagen: z.string(),
  }),
});

export const collections = { puertos, blog };
