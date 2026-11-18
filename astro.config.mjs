import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcovillanueva.com',
  base: process.env.PUBLIC_SITE_BASE || '/',
  trailingSlash: 'always',
  output: 'static',
});
