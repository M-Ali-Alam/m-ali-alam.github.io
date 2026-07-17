import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const researchCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.string(),
    publishDate: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = {
  research: researchCollection,
};
