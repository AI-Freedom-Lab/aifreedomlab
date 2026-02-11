import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('AI Freedom Lab'),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    eventDate: z.coerce.date(),
    eventEndDate: z.coerce.date().optional(),
    location: z.string(),
    registrationUrl: z.string().url().optional(),
    capacity: z.number().optional(),
    status: z.enum(['upcoming', 'past']).default('upcoming'),
    tags: z.array(z.string()).default([]),
    speakers: z.array(z.object({
      name: z.string(),
      bio: z.string(),
      avatar: z.string().optional(),
    })).optional(),
    featuredImage: z.string().optional(),
    recapContent: z.string().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['tool', 'guide', 'article', 'paper', 'video']),
    url: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    pubDate: z.coerce.date(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  blog,
  events,
  resources,
  pages,
};
