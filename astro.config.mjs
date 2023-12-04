import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
site: 'https://astronaut.github.io';
base: 'https://github.com/bastian2012/portfolio';

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});