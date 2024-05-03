import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
site: 'https://astronaut.github.io';
base: 'https://github.com/Nicaisse/Portfolio_astro.git';

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});