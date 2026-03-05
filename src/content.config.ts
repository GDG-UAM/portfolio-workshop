/**
 * ═══════════════════════════════════════════════════════════
 *  CONTENT COLLECTIONS — Astro 5 Content Layer API
 * ═══════════════════════════════════════════════════════════
 *
 *  This file defines the schema (shape) of your portfolio data.
 *  Astro validates all your content against these schemas at
 *  build time, catching typos and missing fields early.
 *
 *  📁 Data files live in src/data/
 *  📝 Blog posts live in src/data/posts/
 *
 *  To add a new field (e.g., a "website" to education):
 *    1. Add it to the schema below (e.g., website: z.string().url().optional())
 *    2. Add the value in the YAML file
 *    3. Use it in the component
 */

import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/* ─── Profile (your personal info) ──────────────────────── */
const profile = defineCollection({
  loader: file('src/data/profile.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    tagline: z.string(),
    location: z.string().optional(),
    email: z.string().email(),
    github: z.string().url(),
    linkedin: z.string().url(),
    avatar: z.string().optional(),
    bio: z.array(z.string()),
    skills: z.array(z.string()),
  }),
});

/* ─── Experience (professional work) ────────────────────── */
const experience = defineCollection({
  loader: file('src/data/experience.yaml'),
  schema: z.object({
    id: z.string(),
    role: z.string(),
    company: z.string(),
    url: z.string().url().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    description: z.string(),
    highlights: z.array(z.string()),
  }),
});

/* ─── Education (academic background) ───────────────────── */
const education = defineCollection({
  loader: file('src/data/education.yaml'),
  schema: z.object({
    id: z.string(),
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    description: z.string().optional(),
    details: z.array(z.string()).optional(),
  }),
});

/* ─── Volunteering ──────────────────────────────────────── */
const volunteering = defineCollection({
  loader: file('src/data/volunteering.yaml'),
  schema: z.object({
    id: z.string(),
    organization: z.string(),
    role: z.string(),
    url: z.string().url().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    description: z.string(),
    contributions: z.array(z.string()),
  }),
});

/* ─── Projects ──────────────────────────────────────────── */
const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

/* ─── Blog Posts (Markdown/MDX) ─────────────────────────── */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* ─── Export all collections ────────────────────────────── */
export const collections = {
  profile,
  experience,
  education,
  volunteering,
  projects,
  posts,
};
