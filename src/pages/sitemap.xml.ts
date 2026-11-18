import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { absolutePath } from '../lib/paths';
const paths = ['/', '/work', '/about', ...projects.map((project) => `/work/${project.slug}`)];
export const GET: APIRoute = () => {
  const urls = paths.flatMap((path) => [absolutePath(path, 'en'), absolutePath(path, 'es')]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
