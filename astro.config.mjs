import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://basebondsolutions.co.za',
  // Static output: every page is prerendered. The contact endpoint opts out
  // with `export const prerender = false` and runs as a Vercel function.
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
