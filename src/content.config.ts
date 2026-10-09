import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), summary: z.string(), repository: z.url(),
    stack: z.array(z.string()), status: z.string(), role: z.string(),
    featured: z.boolean().default(false), order: z.number(),
    note: z.string().optional(), draft: z.boolean().default(false),
  }),
});
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({ title: z.string(), summary: z.string(), order: z.number().default(10), draft: z.boolean().default(false) }),
});
const profile = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/profile' }),
  schema: z.object({ title: z.string(), summary: z.string() }),
});
export const collections = { projects, notes, profile };
