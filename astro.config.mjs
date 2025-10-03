import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import rehypeExternalLinks from 'rehype-external-links';

// Utilise les variables d'environnement (Astro charge automatiquement .env)
const base = process.env.PUBLIC_BASE || '/';
const site = process.env.PUBLIC_SITE || 'http://localhost:4321';

export default defineConfig({
  site,
  base,
  integrations: [react()],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  }
});