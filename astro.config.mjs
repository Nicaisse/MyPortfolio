import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://astronaut.github.io',
  base: 'https://github.com/Nicaisse/MyPortfolio.git',
  integrations: [react()],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  }
});