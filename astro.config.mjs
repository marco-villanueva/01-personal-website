import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcovillanueva.com',
  base: process.env.PUBLIC_SITE_BASE || '/',
  trailingSlash: 'always',
  output: 'static',
  // Match the existing Cloudflare Pages output directory so previews work
  // without changing production's legacy Create React App build settings.
  outDir: './build',
});
