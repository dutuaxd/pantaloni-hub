import { SITE, updated } from '../data/seoSite';
import { editorialArticles } from '../data/portalContent';

const categoryRoots = ['fashion', 'fashion-masculin', 'pantaloni', 'tricouri', 'hanorace', 'tinute', 'ghiduri'];

export function GET() {
  const urls = editorialArticles
    .filter((page) => categoryRoots.some((root) => page.slug === root || page.slug.startsWith(`${root}-`) || page.slug.startsWith(`${root}/`)))
    .map((page) => ({ loc: `${SITE}/${page.slug}/`, priority: page.slug.includes('/') ? '0.7' : '0.85', changefreq: 'weekly' }));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.loc}</loc><lastmod>${updated}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
