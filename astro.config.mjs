import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://resourcegallery.live/',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    optimizeDeps: {
      include: ['./assets/services/noop'], // Replace with the actual module name causing the issue
    },
  },
});
