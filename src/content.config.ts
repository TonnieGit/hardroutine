import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fieldNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/field-notes' }),
  schema: z.object({
    title: z.string(),
    standfirst: z.string(),
    targetKeyword: z.string().optional(),
    metaDescription: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    authorName: z.string(),
    readingTime: z.string(),
    relatedCategory: z.enum(['swag-bags', 'duffle-bags', 'rear-wheel-bags']),
  }),
});

export const collections = { 'field-notes': fieldNotes };
