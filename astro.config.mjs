// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://niposch.github.io',
  output: 'static',
  integrations: [
    vue(),
    tailwind({ 
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./@', import.meta.url)),
      },
    },
  }
});
