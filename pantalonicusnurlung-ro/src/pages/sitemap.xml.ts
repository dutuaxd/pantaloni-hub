import { allContentPages, SITE, updated } from '../data/seoSite';

export function GET() {
  const urls = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'monthly' },
    { loc: `${SITE}/blog/`, priority: '0.8', changefreq: 'weekly' },
    ...allContentPages.map((page) => ({
      loc: `${SITE}/${page.slug}/`,
      priority: page.slug.startsWith('blog/') ? '0.7' : '0.9',
      changefreq: page.slug.startsWith('blog/') ? 'weekly' : 'monthly',
    })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.loc}</loc><lastmod>${updated}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
