import { SITE, updated } from '../data/seoSite';
import { editorialArticles } from '../data/portalContent';

export function GET() {
  const urls = editorialArticles
    .filter((page) => page.slug === 'news' || page.slug.startsWith('news/'))
    .map((page) => ({ loc: `${SITE}/${page.slug}/`, priority: '0.7', changefreq: 'weekly' }));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.loc}</loc><lastmod>${updated}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
