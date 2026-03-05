// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual deployed URL before publishing
  site: 'https://your-portfolio.netlify.app',
  integrations: [mdx(), sitemap()],
});
