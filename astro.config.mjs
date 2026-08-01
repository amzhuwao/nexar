// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nexarsolutions.de',
  output: 'static',
  compressHTML: true,
});
