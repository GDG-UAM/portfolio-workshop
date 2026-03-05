# Astro Portfolio Template

> A beautiful, themeable portfolio template built with [Astro](https://astro.build) for students and developers. Change your content, pick a theme, and deploy — without touching a single layout file.

---

## Features

- **3 built-in themes** — Classic Minimal, Bold Gradient, Mono Tech — switch instantly
- **Content Collections** — Edit YAML and Markdown files to update your portfolio
- **Fully responsive** — Mobile-first design that looks great on every screen
- **Accessible** — Semantic HTML, ARIA labels, skip-to-content, contrast-checked
- **SEO-ready** — Open Graph, Twitter Cards, canonical URLs, sitemap
- **Fast** — Zero client-side frameworks, minimal JavaScript, optimized fonts
- **Type-safe** — Strict TypeScript with validated content schemas
- **Tested** — Unit tests (Vitest) + E2E tests (Playwright)

---

## Quick Start

```bash
# 1. Clone or use this template
git clone https://github.com/your-username/astro-portfolio-template.git
cd astro-portfolio-template

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → Open http://localhost:4321
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Section, Container
│   ├── portfolio/       # HeroSection, ExperienceList, PostCard, etc.
│   └── ui/              # Badge, Button, Card, Tag, ThemeSwitcher
├── content.config.ts    # Content collection schemas (Astro 5 Content Layer)
├── data/                # ✏️  YOUR CONTENT LIVES HERE
│   ├── profile.yaml     # Name, role, bio, skills, links
│   ├── experience.yaml  # Work experience entries
│   ├── education.yaml   # Education entries
│   ├── volunteering.yaml# Volunteering entries
│   ├── projects.yaml    # Project showcase entries
│   └── posts/           # Blog posts (Markdown/MDX)
│       ├── my-post.md
│       └── another.md
├── layouts/             # BaseLayout, PostLayout
├── pages/               # Route pages
├── styles/
│   ├── base.css         # Reset, tokens, typography, layout utilities
│   └── themes/          # Theme files (one per theme)
│       ├── classic.css
│       ├── bold.css
│       └── mono.css
└── utils/               # Helpers (formatDate, constants)
```

---

## How to Edit Your Content

All your personal data lives in `src/data/`. **You never need to edit components or layouts.**

| Section       | File to edit                | Format  |
| ------------- | --------------------------- | ------- |
| Name, bio, links | `src/data/profile.yaml`  | YAML    |
| Experience    | `src/data/experience.yaml`  | YAML    |
| Education     | `src/data/education.yaml`   | YAML    |
| Volunteering  | `src/data/volunteering.yaml`| YAML    |
| Projects      | `src/data/projects.yaml`    | YAML    |
| Blog posts    | `src/data/posts/*.md`       | Markdown|

### Edit your profile

Open `src/data/profile.yaml` and replace the values:

```yaml
- id: me
  name: Your Name
  role: Your Role
  tagline: A short sentence about you.
  location: Your City, Country
  email: you@example.com
  github: https://github.com/yourusername
  linkedin: https://linkedin.com/in/yourusername
  avatar: /avatar-placeholder.svg  # Replace with your photo
  bio:
    - "First paragraph of your bio."
    - "Second paragraph (optional)."
  skills:
    - TypeScript
    - React
    - Python
```

### Add a new experience entry

Open `src/data/experience.yaml` and add:

```yaml
- id: my-job
  role: Your Role
  company: Company Name
  url: https://company.com          # optional
  startDate: 2024-01-15
  endDate: 2025-06-01               # omit for current job
  description: Brief description of the position.
  highlights:
    - "Achievement with quantifiable impact"
    - "Another achievement"
```

### Create a new blog post

Create a new `.md` file in `src/data/posts/`:

```markdown
---
title: My New Post
description: A short summary for cards and SEO.
pubDate: 2026-03-05
tags:
  - Topic
  - Another
draft: false    # Set to true to hide from listings
---

Your Markdown content goes here. You can use **bold**, *italic*,
[links](https://example.com), code blocks, and more.
```

---

## Theme System

### How it works

1. All themes define the **same CSS custom properties** (colors, shadows, radii)
2. The active theme is set via `data-theme="name"` on `<html>`
3. A `ThemeSwitcher` component lets visitors choose; the preference is saved in `localStorage`
4. You can also force a theme with a query parameter: `?theme=bold`

### Available themes

| Theme            | File                         | Description                         |
| ---------------- | ---------------------------- | ----------------------------------- |
| Classic Minimal  | `src/styles/themes/classic.css` | Warm whites, indigo accent, editorial feel |
| Bold Gradient    | `src/styles/themes/bold.css`    | Dark with violet/rose gradients     |
| Mono Tech        | `src/styles/themes/mono.css`    | Pure black, green accent, terminal aesthetic |

### Create a new theme

1. **Copy** any existing theme file:
   ```bash
   cp src/styles/themes/classic.css src/styles/themes/ocean.css
   ```

2. **Change the selector** at the top:
   ```css
   [data-theme='ocean'] {
     --color-bg: #0B1929;
     --color-text: #C5D0DC;
     /* ... redefine all variables ... */
   }
   ```

3. **Register it** in `src/utils/constants.ts`:
   ```ts
   export const THEMES = [
     { id: 'classic', label: 'Classic' },
     { id: 'bold', label: 'Bold' },
     { id: 'mono', label: 'Mono' },
     { id: 'ocean', label: 'Ocean' },  // ← add here
   ] as const;
   ```

4. **Import it** in `src/layouts/BaseLayout.astro`:
   ```astro
   import '../styles/themes/ocean.css';
   ```

That's it! The layout doesn't change — only colors and visual details.

---

## Available Scripts

| Script            | Command                        | Description                     |
| ----------------- | ------------------------------ | ------------------------------- |
| `dev`             | `npm run dev`                  | Start dev server (localhost:4321) |
| `build`           | `npm run build`                | Production build to `dist/`     |
| `preview`         | `npm run preview`              | Preview the build locally       |
| `lint`            | `npm run lint`                 | Check formatting with Prettier  |
| `format`          | `npm run format`               | Auto-fix formatting             |
| `typecheck`       | `npm run typecheck`            | Run Astro type checking         |
| `test`            | `npm run test`                 | Run unit + integration tests    |
| `test:e2e`        | `npm run test:e2e`             | Run Playwright E2E tests        |
| `test:all`        | `npm run test:all`             | Run all tests                   |

---

## Deploy

### Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Astro** (auto-detected)
4. Click Deploy

### Netlify

1. Push your repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy

### GitHub Pages

Add this to `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  // ...
});
```

Then use the official [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

---

## Pre-publish Checklist

Before sharing your portfolio with the world:

- [ ] Replace **name, role, bio** in `src/data/profile.yaml`
- [ ] Replace **avatar** image in `public/` (and update the path in profile.yaml)
- [ ] Update **experience, education, volunteering** YAML files
- [ ] Write or remove **blog posts** in `src/data/posts/`
- [ ] Update **projects** in `src/data/projects.yaml`
- [ ] Change **site URL** in `astro.config.mjs`
- [ ] Replace **OG image** (`public/og-image.png`) with your own
- [ ] Update **site title** in `src/utils/constants.ts`
- [ ] Update `public/robots.txt` sitemap URL
- [ ] Run `npm run build` and verify everything looks good
- [ ] Deploy!

---

## Tech Stack

- [Astro 5](https://astro.build) — Static site generator
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [MDX](https://mdxjs.com/) — Enhanced Markdown for blog posts
- [Vitest](https://vitest.dev/) — Unit testing
- [Playwright](https://playwright.dev/) — E2E testing
- CSS Custom Properties — Theming
- Zero client-side frameworks

---

## License

MIT — use freely for personal and commercial projects.
