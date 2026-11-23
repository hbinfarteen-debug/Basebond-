import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { articles } from '../data/articles';
import { site } from '../data/site';

export const prerender = true;

const staticRoutes: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'yearly' },
  { path: '/about', priority: '0.7', changefreq: 'yearly' },
  { path: '/industries', priority: '0.7', changefreq: 'yearly' },
  { path: '/resources', priority: '0.7', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/paia', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookies', priority: '0.3', changefreq: 'yearly' },
];

const today = new Date().toISOString().split('T')[0];

const url = (path: string, priority: string, changefreq: string, lastmod = today) =>
  `  <url>
    <loc>${new URL(path, site.url).toString()}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

export const GET: APIRoute = () => {
  const serviceUrls = services.map((service) =>
    url(`/services/${service.slug}`, '0.8', 'monthly'),
  );

  const articleUrls = articles.map((article) =>
    url(`/resources/${article.slug}`, '0.6', 'monthly', article.date),
  );

  // /medical-billing is covered by the service route; drop the duplicate.
  const base = staticRoutes
    .filter((route) => route.path !== '/medical-billing')
    .map((route) => url(route.path, route.priority, route.changefreq));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...base, ...serviceUrls, ...articleUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
