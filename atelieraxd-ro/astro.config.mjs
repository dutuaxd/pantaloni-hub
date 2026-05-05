import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fetchImages } from './scripts/fetch-images.mjs';
export default defineConfig({ experimental: { contentLayer: true }, site: 'https://atelieraxd.ro', integrations: [tailwind(), sitemap(), { name:'unsplash-build-images', hooks:{ 'astro:build:start': async()=>{ await fetchImages(); } } }] });
