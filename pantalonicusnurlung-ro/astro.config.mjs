import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fetchImages } from './scripts/fetch-images.mjs';

export default defineConfig({
  experimental: { contentLayer: true },
  site: 'https://pantalonicusnurlung.ro',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [
    tailwind(),
    {
      name: 'unsplash-build-images',
      hooks: {
        'astro:build:start': async () => {
          await fetchImages();
        }
      }
    }
  ]
});
