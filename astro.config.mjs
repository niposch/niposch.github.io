import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://niposch.de',
  output: 'static',
  integrations: [sitemap()],
  markdown: { shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } } },
});
