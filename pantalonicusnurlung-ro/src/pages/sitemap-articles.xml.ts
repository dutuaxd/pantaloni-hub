import { blogPosts, SITE, updated } from '../data/seoSite';

export function GET() {
  const urls = blogPosts.map((page) => ({
    loc: `${SITE}/${page.slug}/`,
    priority: '0.6',
    changefreq: 'monthly',
  }));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.loc}</loc><lastmod>${updated}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
