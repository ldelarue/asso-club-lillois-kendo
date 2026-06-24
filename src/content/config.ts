import { defineCollection, z } from 'astro:content';

const staffCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(), // e.g., "Senior Pastor", "Deaconess"
    image: z.string().startsWith('/uploads/staff/').optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    bio: z.string().optional(), // Short bio in frontmatter
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Support both `startDate` (new) and `date` (legacy). Prefer `startDate`.
    startDate: z.date(), // Event start date
    date: z.date().optional(), // Legacy alias for startDate
    endDate: z.date().optional(), // Event end date
    time: z.string().optional(), // e.g., "09:00 AM - 11:00 AM"
    location: z.string(),
    image: z.string().startsWith('/uploads/events/'),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    registrationLink: z.string().url().optional(),
    registrationRequired: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});


const disciplinesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().startsWith('/uploads/disciplines/').optional(),
    summary: z.string(),
    coordinator: z.string().optional(),
    contact: z.string().optional(), // Email or text
    schedule: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});



const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    author: z.string().default("Church Staff"),
    image: z.union([
      z.string().startsWith('/uploads/'),
      z.object({
        url: z.string().startsWith('/uploads/'),
        alt: z.string()
      })
    ]).optional(),
    tags: z.array(z.string()).default(["general"]),
    draft: z.boolean().default(false),
  }),
});


const siteInfoCollection = defineCollection({
  type: 'content', // Could be 'data' if only frontmatter is needed
  schema: z.object({
    title: z.string(), // For identifying the content block
  }),
});

export const collections = {
  staff: staffCollection,
  events: eventsCollection,
  disciplines: disciplinesCollection,
  articles: articlesCollection,
  siteInfo: siteInfoCollection,
};