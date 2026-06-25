import { SITE, updated } from '../data/seoSite';

const recommendationUrls = [
  '/pantaloni-cu-snur-lung/',
  '/pantaloni-cu-snur-scurti/',
  '/pantaloni-cu-snur-lung-barbati/',
  '/pantaloni-cu-snur-lung-femei/',
  '/pantaloni-cu-snur-lung-unisex/',
];

export function GET() {
  const urls = recommendationUrls.map((slug) => ({ loc: `${SITE}${slug}`, priority: '0.7', changefreq: 'weekly' }));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.loc}</loc><lastmod>${updated}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
