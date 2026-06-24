import { allContentPages, pages, SITE, updated } from '../data/seoSite';
import { localCityPages, localCityUrl, localHub } from '../data/localSeo';
import { editorialArticles } from '../data/portalContent';
import { internationalLocales, localizedUrl } from '../data/internationalSeo';

export function GET() {
  const internationalSourcePages = [...pages, ...editorialArticles];
  const hubs = [
    '/moda-urbana-barbati',
    '/moda-urbana-femei',
    '/baggy-cu-snur',
    '/oversized',
    '/pantaloni-pe-orase',
    '/streetwear-romania'
  ];

  const excludeSlugs = [
    'contact',
    'faq',
    'politica-de-confidentialitate',
    'politica-cookies',
    'termeni-si-conditii',
    'informatii-legale',
    'solutionarea-litigiilor',
    'politica-livrare',
    'politica-rambursare',
    'politica-retur',
    'preferinte-cookie'
  ];

  const validPages = allContentPages.filter(p => !excludeSlugs.includes(p.slug));

  const urls = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'monthly' },
    ...hubs.map(hub => ({ loc: `${SITE}${hub}/`, priority: '0.9', changefreq: 'weekly' })),
    ...editorialArticles.map((page) => ({
      loc: `${SITE}/${page.slug}/`,
      priority: page.slug.includes('/') ? '0.7' : '0.85',
      changefreq: page.slug.startsWith('news') ? 'weekly' : 'monthly',
    })),
    ...validPages.map((page) => ({
      loc: `${SITE}/${page.slug}/`,
      priority: page.slug.startsWith('blog/') ? '0.6' : '0.8',
      changefreq: 'monthly',
    })),
    ...localCityPages.map((page) => ({
      loc: localCityUrl(page),
      priority: '0.6',
      changefreq: 'monthly',
    })),
    ...internationalLocales.map((locale) => ({
      loc: `${SITE}/${locale.code}/`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
    ...internationalLocales.flatMap((locale) =>
      internationalSourcePages.map((page) => ({
        loc: `${SITE}${localizedUrl(locale, page)}`,
        priority: '0.5',
        changefreq: 'monthly',
      })),
    ),
  ];
  
  // Deduplicate URLs just in case
  const uniqueUrls = Array.from(new Map(urls.map(item => [item.loc, item])).values());

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls.map((url) => `  <url><loc>${url.loc}</loc><lastmod>${updated}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
