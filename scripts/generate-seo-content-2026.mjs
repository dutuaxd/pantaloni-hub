import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'output');
const articlesDir = path.join(outDir, 'articles');
fs.mkdirSync(articlesDir, { recursive: true });

const read = (file) => fs.existsSync(path.join(root, file)) ? fs.readFileSync(path.join(root, file), 'utf8') : '';
const slugify = (value) => value
  .toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const seoSite = read('pantalonicusnurlung-ro/src/data/seoSite.ts');
const expansion = read('pantalonicusnurlung-ro/src/data/contentExpansionBlogPosts.ts');
const scheduled = read('pantalonicusnurlung-ro/src/data/scheduledBlogPosts.ts');
const markdownFiles = [
  ...fs.existsSync(path.join(root, 'pantalonicusnurlung-ro/src/content/blog'))
    ? fs.readdirSync(path.join(root, 'pantalonicusnurlung-ro/src/content/blog')).map((dir) => `pantalonicusnurlung-ro/src/content/blog/${dir}/index.md`)
    : [],
  ...fs.existsSync(path.join(root, 'atelieraxd-ro/src/content/blog'))
    ? fs.readdirSync(path.join(root, 'atelieraxd-ro/src/content/blog')).map((dir) => `atelieraxd-ro/src/content/blog/${dir}/index.md`)
    : [],
].filter((file) => fs.existsSync(path.join(root, file)));

function extractPages(source, origin) {
  const pages = [];
  const pageRegex = /page\(\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'/g;
  let match;
  while ((match = pageRegex.exec(source))) {
    pages.push(toAuditItem({
      slug: match[1],
      title: match[2],
      description: match[3],
      h1: match[4],
      intro: match[5],
      origin,
    }));
  }

  const scheduledRegex = /"slug":\s*"([^"]+)"[\s\S]{0,500}?"title":\s*"([^"]+)"[\s\S]{0,500}?"description":\s*"([^"]+)"[\s\S]{0,500}?"h1":\s*"([^"]+)"[\s\S]{0,500}?"intro":\s*"([^"]+)"/g;
  while ((match = scheduledRegex.exec(source))) {
    pages.push(toAuditItem({
      slug: match[1],
      title: match[2],
      description: match[3],
      h1: match[4],
      intro: match[5],
      origin,
    }));
  }

  const articleRegex = /article\(\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'/g;
  while ((match = articleRegex.exec(source))) {
    pages.push(toAuditItem({
      slug: `blog/${match[1]}`,
      title: match[2],
      description: match[3],
      h1: match[4],
      intro: match[5],
      intentText: match[6],
      origin,
    }));
  }

  return pages;
}

function extractMarkdown(file) {
  const source = read(file);
  const h1 = (source.match(/^#\s+(.+)$/m) || [null, path.basename(path.dirname(file))])[1];
  const h2 = [...source.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1]).slice(0, 8);
  const frontmatterTitle = (source.match(/title:\s*["']?(.+?)["']?\s*$/m) || [null, h1])[1];
  const description = (source.match(/description:\s*["']?(.+?)["']?\s*$/m) || [null, ''])[1];
  return toAuditItem({
    slug: `blog/${path.basename(path.dirname(file))}`,
    title: frontmatterTitle,
    description,
    h1,
    h2,
    intro: source.replace(/^---[\s\S]*?---/, '').split('\n').find((line) => line.trim() && !line.startsWith('#')) || '',
    origin: file,
  });
}

function classifyCluster(text) {
  const t = text.toLowerCase();
  if (/(marim|fit|scund|inalt|proport|stacking|incaltaminte|sneakers)/.test(t)) return 'fit-si-proportii';
  if (/(siret|snur)/.test(t)) return 'snur-siret-lung';
  if (/(baggy|wide leg|oversized|loose|cargo|urban fit)/.test(t)) return 'croieli-urbane';
  if (/(vara|iunie|iulie|august|cald|festival|city break|vacanta)/.test(t)) return 'sezon-si-ocazii';
  if (/(tricou|hanorac|geaca|set|camasa)/.test(t)) return 'combinatii-outfit';
  return 'pantaloni-barbati';
}

function inferIntent(text) {
  const t = text.toLowerCase();
  if (/vs|compar|diferent/.test(t)) return 'comparatie';
  if (/cum|ghid|aleg|porti|asorteaz|legi|nod/.test(t)) return 'how-to';
  if (/trend|2026|idei|outfit|inspir/.test(t)) return 'inspiratie';
  if (/cumpar|unde|pret|colectie|produs/.test(t)) return 'commercial investigation';
  return 'informational';
}

function toAuditItem({ slug, title, description, h1, h2 = [], intro = '', intentText = '', origin }) {
  const text = `${slug} ${title} ${description} ${h1} ${intro} ${intentText}`;
  const tokens = [...new Set(text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(/[a-z0-9]{4,}/g) || [])]
    .filter((word) => !['pentru', 'pantaloni', 'snur', 'lung', 'ghid', 'cum', 'care', 'este', 'sunt'].includes(word))
    .slice(0, 14);
  return {
    url: `https://pantalonicusnurlung.ro/${slug.replace(/^blog\//, 'blog/')}/`,
    slug,
    keyword_principal: title.toLowerCase().replace(/[|:–-].*$/, '').trim(),
    keywords_secundare: tokens.slice(0, 8),
    intent: inferIntent(text),
    h1,
    h2_dominante: h2.length ? h2 : ['Intentia cautarii', 'Cum alegi', 'Stilizare si proportii', 'Pagini conexe'],
    topic_cluster: classifyCluster(text),
    entity_terms: tokens,
    search_angle: intentText || description,
    persona: /femei|dama/.test(text.toLowerCase()) ? 'femei interesate de moda urbana' : /barbati/.test(text.toLowerCase()) ? 'barbati 18-35 interesati de streetwear' : 'public unisex urban',
    seasonality: /vara|iunie|iulie|august|cald/.test(text.toLowerCase()) ? 'vara' : /iarna|rece/.test(text.toLowerCase()) ? 'iarna' : 'evergreen',
    content_type: slug.includes('/blog/') || slug.startsWith('blog/') ? 'blog article' : 'landing page',
    origin,
  };
}

const audit = [
  ...extractPages(seoSite, 'pantalonicusnurlung-ro/src/data/seoSite.ts'),
  ...extractPages(expansion, 'pantalonicusnurlung-ro/src/data/contentExpansionBlogPosts.ts'),
  ...extractPages(scheduled, 'pantalonicusnurlung-ro/src/data/scheduledBlogPosts.ts'),
  ...markdownFiles.map(extractMarkdown),
];
const uniqueAudit = [...new Map(audit.map((item) => [item.slug, item])).values()];

const existingKeywordSet = new Set(uniqueAudit.map((item) => slugify(item.keyword_principal)));
const clusterMap = Object.values(uniqueAudit.reduce((acc, item) => {
  acc[item.topic_cluster] ||= { cluster: item.topic_cluster, pillar: '', supporting_articles: [] };
  if (!acc[item.topic_cluster].pillar) acc[item.topic_cluster].pillar = item.slug;
  acc[item.topic_cluster].supporting_articles.push(item.slug);
  return acc;
}, {}));

const sources = [
  {
    title: 'Atelier AXD - Pantaloni Wide Leg Barbati: Ghid de Styling',
    url: 'https://atelieraxd.ro/blogs/news/pantaloni-wide-leg-barbati-styling',
    takeaways: ['continut puternic pe wide leg barbati', 'risc ridicat de canibalizare pe ghid general wide leg', 'lipsesc micro-intentii foarte specifice despre birou, ploaie, poze si capsule'],
  },
  {
    title: 'Casoteca - Tipuri de blugi care se poarta in 2026',
    url: 'https://casoteca.ro/tipuri-de-blugi-care-se-poarta-in-2026/',
    takeaways: ['acopera trenduri denim largi', 'format scurt de revista', 'nu intra profund in fit masculin romanesc si SEO de imagini'],
  },
  {
    title: 'H&M Romania - Pantaloni cu snur pentru barbati',
    url: 'https://www2.hm.com/ro_ro/men/shop-by-product/trousers/drawstring-trousers.html',
    takeaways: ['pagina ecommerce cu autoritate mare', 'slaba pentru explicatii editoriale', 'nu optimizeaza long-tail romanesc contextual'],
  },
  {
    title: 'Reddit RoFashionAdvice - discutii despre elegant, slim, baggy si perceptii sociale',
    url: 'https://www.reddit.com/r/RoFashionAdvice/comments/1ryls68/de_ce_barbatii_sunt_judecati_daca_se_imbraca_mai/',
    takeaways: ['limbaj natural romanesc', 'tensiune reala intre slim, baggy si elegant', 'oportunitate pentru articole despre incredere, birou, date si normalizarea croielilor largi'],
  },
  {
    title: 'Reddit RoFashionAdvice - pantaloni baggy la sala',
    url: 'https://www.reddit.com/r/RoFashionAdvice/comments/1sd4ybn/pantaloni_de_trening_la_sala/',
    takeaways: ['intent conversational despre confort si styling', 'intrebari reale despre ce porti sus cu pantaloni baggy', 'oportunitate separata fitness/lifestyle'],
  },
];

const opportunities = [
  ['pantaloni largi barbati la birou vara', 'how-to', 'fit-si-proportii', 'consideration', 'birou vara smart casual, nu ghid general de pantaloni largi', 'dress code romanesc, materiale usoare, limite intre casual si nepotrivit', 1],
  ['pantaloni cu snur pentru festival vara 2026', 'inspiratie', 'sezon-si-ocazii', 'awareness', 'festival si utilitate, diferit de vara general', 'buzunare, lumina, mers mult, seara racoroasa', 2],
  ['cum porti pantaloni baggy daca esti scund', 'how-to', 'fit-si-proportii', 'consideration', 'persona si problema de inaltime, nu baggy general', 'proportii, talie, tiv, incaltaminte', 1],
  ['pantaloni cu snur in city break', 'checklist', 'sezon-si-ocazii', 'consideration', 'context travel, diferit de tinute urbane generice', 'capsula 3 zile, bagaj mic, poze', 2],
  ['pantaloni crem barbati smart casual', 'how-to', 'combinatii-outfit', 'consideration', 'culoare si dress code, diferit de pantaloni albi', 'crem ca alternativa mai purtabila decat alb', 2],
  ['pantaloni bleumarin cu snur cum se poarta', 'how-to', 'snur-siret-lung', 'consideration', 'culoare neacoperita profund fata de negru/alb', 'navy urban, tricouri si incaltaminte', 2],
  ['greseli pantaloni oversized barbati', 'checklist', 'croieli-urbane', 'consideration', 'format greseli, nu inspiratie generala', 'volum, tiv, buzunare, top prea lung', 1],
  ['pantaloni largi barbati pentru date', 'inspiratie', 'sezon-si-ocazii', 'consideration', 'ocazie sociala distincta fata de zi de nastere/nunta', 'relaxat dar atent, fara costum', 2],
  ['pantaloni cu snur pentru sala outfit', 'how-to', 'combinatii-outfit', 'awareness', 'sport/lifestyle diferit de streetwear de oras', 'topuri, materiale, low rise, confort', 3],
  ['cum alegi lungimea pantalonilor wide leg', 'how-to', 'fit-si-proportii', 'consideration', 'micro-intentie de tiv, nu ghid wide leg', 'break, stacking, pantofi', 1],
  ['pantaloni cu snur pe ploaie', 'how-to', 'sezon-si-ocazii', 'awareness', 'vreme si material, complet nou', 'evita tiv ud, culori, materiale', 3],
  ['pantaloni maro barbati cu ce se asorteaza', 'how-to', 'combinatii-outfit', 'consideration', 'culoare maro, diferit de negru/crem', 'palete, piele, tricouri, sneakers', 2],
  ['pantaloni gri largi barbati outfit', 'inspiratie', 'combinatii-outfit', 'awareness', 'culoare gri si fit larg, nu snur general', 'gri rece/cald, sala vs oras', 2],
  ['pantaloni cu snur pentru poze de produs', 'technical editorial', 'google-images-seo', 'consideration', 'SEO images si ecommerce, nu styling pur', 'cadre, alt text, lumina, zoom detaliu', 1],
  ['haine old money barbati cu pantaloni lejeri', 'trend', 'croieli-urbane', 'awareness', 'aesthetic trend, diferit de streetwear', 'old money relaxat romanesc, fara costum rigid', 3],
  ['pantaloni largi cu camasa deschisa vara', 'how-to', 'combinatii-outfit', 'consideration', 'combinatie piesa sus specifica', 'camasa peste tricou, lungime, materiale', 2],
  ['pantaloni scurti cu sosete inalte barbati', 'comparison', 'sezon-si-ocazii', 'awareness', 'micro-intentie vizuala controversata', 'cand merge, cand nu, proportii', 3],
  ['pantaloni cu snur pentru adolescenti', 'guide', 'persona', 'awareness', 'persona adolescenti, diferit de barbati adulti', 'scoala, weekend, parinti, buget', 3],
  ['pantaloni relaxati pentru barbati 30 plus', 'guide', 'persona', 'consideration', 'persona 30+, diferit de streetwear tanar', 'matur, curat, fara skinny', 2],
  ['pantaloni largi barbati la concert', 'checklist', 'sezon-si-ocazii', 'awareness', 'concert, diferit de festival general', 'mobilitate, buzunare, layering', 3],
  ['pantaloni cu snur in tinute monochrome', 'inspiratie', 'combinatii-outfit', 'awareness', 'snur ca accent in monocrom, nu monocrom general', 'all black, gri, navy, cream', 2],
  ['pantaloni cu snur si geaca piele', 'how-to', 'combinatii-outfit', 'consideration', 'geaca piele, diferit de denim/hanorac', 'contrast masculin, textura, seara', 3],
  ['pantaloni cu snur pentru zbor avion', 'checklist', 'sezon-si-ocazii', 'consideration', 'travel avion, complet distinct', 'confort, buzunare, materiale, security', 2],
  ['pantaloni largi barbati capsule wardrobe', 'strategy', 'topical-authority', 'consideration', 'arhitectura garderoba, nu outfit singular', '5 perechi, 12 tinute, culori', 1],
  ['pantaloni cu snur pentru Google Images', 'technical SEO', 'google-images-seo', 'decision', 'meta-articol SEO imagini, nu concurenta comerciala', 'filename, alt, schema, WebP, captions', 1],
].map(([keyword, search_intent, cluster, funnel_stage, reason_safe, recommended_angle, priority]) => ({
  keyword,
  search_intent,
  cluster,
  funnel_stage,
  reason_safe,
  recommended_angle,
  priority,
}));

const safeOpportunities = opportunities.filter((item) => !existingKeywordSet.has(slugify(item.keyword)));

const highRisk = uniqueAudit
  .filter((item) => /(albi|wide leg|baggy|vara|siret lung|snur lung|oversized|negru)/i.test(`${item.slug} ${item.keyword_principal}`))
  .slice(0, 40)
  .map((item) => ({
    slug: item.slug,
    keyword: item.keyword_principal,
    risk: 'Nu genera variante generale; foloseste doar persona/context/format diferit.',
  }));

const topicGapAnalysis = {
  generated_at: new Date().toISOString(),
  audit_scope: {
    audited_items: uniqueAudit.length,
    sources: [
      'pantalonicusnurlung-ro/src/data/seoSite.ts',
      'pantalonicusnurlung-ro/src/data/contentExpansionBlogPosts.ts',
      'pantalonicusnurlung-ro/src/data/scheduledBlogPosts.ts',
      'pantalonicusnurlung-ro/src/content/blog/**/*.md',
      'atelieraxd-ro/src/content/blog/**/*.md',
      'dist/**/*.html considered as rendered duplicates of source content',
    ],
  },
  existing_clusters: clusterMap,
  covered_keywords: uniqueAudit.map((item) => item.keyword_principal).slice(0, 220),
  high_risk_cannibalization: highRisk,
  missing_topics: [
    'dress code romanesc pentru pantaloni largi la birou',
    'proportii pentru barbati scunzi sau 30+',
    'travel/city break/zbor avion',
    'weather-based styling: ploaie si canicula',
    'Google Images SEO operational pentru produs si blog',
    'micro-ocazii sociale: date, concert, festival',
    'culori subexploatate: bleumarin, maro, gri, crem',
  ],
  new_article_opportunities: safeOpportunities,
  full_existing_content_audit: uniqueAudit,
};

const competitorGapAnalysis = {
  generated_at: new Date().toISOString(),
  keyword: 'cluster pantaloni barbati cu snur / croieli largi / moda urbana 2026',
  top_competitors: [
    {
      title: 'Atelier AXD - Pantaloni Wide Leg Barbati',
      url: 'https://atelieraxd.ro/blogs/news/pantaloni-wide-leg-barbati-styling',
      domain_authority_estimat: 'mediu pentru nisa locala, mare relevanta topicala',
      content_length: 'mediu-lung',
      semantic_keywords: ['wide leg', 'barbati', 'croiala larga', 'sneakers', 'smart casual'],
      entities: ['Atelier AXD', 'wide leg', 'hanorace', 'sneakers'],
      h2_structure: ['Ce sunt pantalonii wide leg', 'Cum porti', 'Greseli'],
      featured_snippet_type: 'definitie + lista',
      image_count: 3,
      content_angle: 'ghid general wide leg',
      weaknesses: ['risc de overlap cu orice articol wide leg general', 'nu acopera micro-intentii de lungime, birou, ploaie, travel'],
      missing_information: ['Google Images metadata extins', 'persona scund/30+', 'dress code Romania'],
      content_score_estimat: 82,
    },
    {
      title: 'Casoteca - Tipuri de blugi care se poarta in 2026',
      url: 'https://casoteca.ro/tipuri-de-blugi-care-se-poarta-in-2026/',
      domain_authority_estimat: 'mediu publisher',
      content_length: 'scurt',
      semantic_keywords: ['blugi baggy', 'cargo', 'croieli statement', '2026'],
      entities: ['baggy', 'cargo', 'denim', 'streetwear'],
      h2_structure: ['Tipuri de blugi', 'Blugi baggy'],
      featured_snippet_type: 'lista',
      image_count: 1,
      content_angle: 'trend roundup',
      weaknesses: ['putina profunzime practica', 'nu este specializat pe pantaloni cu snur', 'imagini generice'],
      missing_information: ['outfit formulas', 'FAQ PAA', 'comparatii fit romanesc'],
      content_score_estimat: 68,
    },
    {
      title: 'H&M Romania - Pantaloni cu snur pentru barbati',
      url: 'https://www2.hm.com/ro_ro/men/shop-by-product/trousers/drawstring-trousers.html',
      domain_authority_estimat: 'foarte mare ecommerce',
      content_length: 'scurt, comercial',
      semantic_keywords: ['pantaloni cu snur', 'barbati', 'in', 'chino', 'cargo'],
      entities: ['H&M', 'in', 'chino', 'cargo'],
      h2_structure: ['categorie ecommerce'],
      featured_snippet_type: 'product/category',
      image_count: 20,
      content_angle: 'categorie produse',
      weaknesses: ['nu educa utilizatorul', 'nu targeteaza long-tail romanesc editorial', 'alt text repetitiv de catalog'],
      missing_information: ['styling local', 'context social', 'raspunsuri scurte pentru snippet'],
      content_score_estimat: 74,
    },
    {
      title: 'Reddit RoFashionAdvice - discutii despre barbati si stil',
      url: 'https://www.reddit.com/r/RoFashionAdvice/comments/1ryls68/de_ce_barbatii_sunt_judecati_daca_se_imbraca_mai/',
      domain_authority_estimat: 'foarte mare UGC',
      content_length: 'lung conversational',
      semantic_keywords: ['slim', 'baggy', 'elegant', 'trening', 'barbati'],
      entities: ['Reddit', 'RoFashionAdvice', 'baggy', 'slim'],
      h2_structure: ['thread conversational'],
      featured_snippet_type: 'forum discussion',
      image_count: 0,
      content_angle: 'perceptie sociala reala',
      weaknesses: ['nestructurat', 'limbaj mixt', 'fara solutie editoriala clara'],
      missing_information: ['reguli practice', 'tabele', 'imagini SEO'],
      content_score_estimat: 60,
    },
    {
      title: 'Atelier AXD - Pantaloni Scurti Barbati Negri cu Siret Lung',
      url: 'https://atelieraxd.ro/products/pantaloni-scurti-barbati-negrii-cu-siret-lung',
      domain_authority_estimat: 'mediu local, relevanta comerciala ridicata',
      content_length: 'scurt, product page',
      semantic_keywords: ['pantaloni scurti', 'siret lung', 'vara', 'regular fit'],
      entities: ['Atelier AXD', 'Italia', 'poliester', 'viscoza', 'elastan'],
      h2_structure: ['Detalii produs', 'Ghid marimi'],
      featured_snippet_type: 'product rich result',
      image_count: 4,
      content_angle: 'pagina produs pantaloni scurti',
      weaknesses: ['nu acopera outfituri si contexte', 'continut editorial redus', 'FAQ absent'],
      missing_information: ['combinatii vara', 'Google Images long-tail', 'comparatii de material'],
      content_score_estimat: 66,
    },
    {
      title: 'Ziarul de Iasi - 7 outfituri de vara cu pantaloni scurti pentru barbati',
      url: 'https://www.ziaruldeiasi.ro/stiri/7-outfituri-de-vara-cu-pantaloni-scurti-pentru-barbati-p--1856881.html',
      domain_authority_estimat: 'mediu-ridicat publisher local',
      content_length: 'mediu',
      semantic_keywords: ['outfit casual', 'pantaloni scurti', 'vara', 'barbati'],
      entities: ['Ziarul de Iasi', 'pantaloni scurti', 'vara'],
      h2_structure: ['lista outfituri'],
      featured_snippet_type: 'lista numerotata',
      image_count: 1,
      content_angle: 'advertorial outfituri de vara',
      weaknesses: ['nu este specializat pe snur/siret lung', 'imagine limitata', 'putina diferentiere semantic NLP'],
      missing_information: ['tabele decizie', 'FAQ long-tail', 'SEO de imagini per outfit'],
      content_score_estimat: 64,
    },
    {
      title: 'Real Men Real Style - Are Wide Leg Pants For Men Stylish In 2026?',
      url: 'https://www.realmenrealstyle.com/wide-leg-pants-stylish/',
      domain_authority_estimat: 'ridicat international',
      content_length: 'lung',
      semantic_keywords: ['wide leg pants', 'men', '2026', 'slim vs loose fit'],
      entities: ['Real Men Real Style', 'wide leg', 'loose fit', 'menswear'],
      h2_structure: ['fit guide', 'style rules', 'mistakes'],
      featured_snippet_type: 'definitie + comparatie',
      image_count: 5,
      content_angle: 'menswear authority wide leg',
      weaknesses: ['engleza, nu Romania', 'nu acopera snur lung', 'nu foloseste limbaj local de cautare'],
      missing_information: ['cautari romanesti', 'Atelier AXD imagery', 'context social Romania'],
      content_score_estimat: 85,
    },
    {
      title: 'Go Elm & Co - Men Wide Leg Jeans 2026 Fit Guide',
      url: 'https://goelmbrands.com/blogs/news/mens-wide-leg-jeans-style-guide-2026',
      domain_authority_estimat: 'mediu international',
      content_length: 'lung',
      semantic_keywords: ['wide leg jeans', 'rise rules', 'shoe mistakes', 'fit guide'],
      entities: ['Go Elm', 'jeans', 'rise', 'shoes'],
      h2_structure: ['fit guide', 'rise rules', 'shoe mistakes'],
      featured_snippet_type: 'how-to + mistakes',
      image_count: 4,
      content_angle: 'denim wide leg fit',
      weaknesses: ['focus denim, nu pantaloni cu snur', 'engleza', 'nu are optimizare pentru SERP romanesc'],
      missing_information: ['materiale non-denim', 'snur/siret', 'Romanian long-tail'],
      content_score_estimat: 78,
    },
    {
      title: 'WEAR2AM - Wide Pants Are the New Skinny',
      url: 'https://wear2am.com/blog/wide-pants-trend-2026',
      domain_authority_estimat: 'mediu international nisa',
      content_length: 'mediu',
      semantic_keywords: ['wide pants', 'skinny', 'streetwear', 'silhouette trends'],
      entities: ['WEAR2AM', 'streetwear', 'silhouette shift', 'baggy fit'],
      h2_structure: ['trend overview', 'streetwear'],
      featured_snippet_type: 'trend explanation',
      image_count: 2,
      content_angle: 'silhouette trend 2026',
      weaknesses: ['trend broad', 'nu raspunde la micro-intentii', 'nu are context Romania'],
      missing_information: ['cum alegi lungimea', 'birou/date/travel', 'FAQ specific'],
      content_score_estimat: 70,
    },
    {
      title: 'Ufit - Pantaloni lungi cu snur usor conic Black',
      url: 'https://www.ufit.ro/barbati/pantaloni-lungi-cu-snur-usor-conic-black.html',
      domain_authority_estimat: 'mediu ecommerce Romania',
      content_length: 'scurt',
      semantic_keywords: ['pantalon lung', 'elastic in talie', 'croiala conica', 'snur'],
      entities: ['Ufit', 'croiala conica', 'snur'],
      h2_structure: ['detalii produs', 'recenzii'],
      featured_snippet_type: 'product/category',
      image_count: 3,
      content_angle: 'produs conic cu snur',
      weaknesses: ['nu acopera styling', 'nu are continut informational profund', 'nu targeteaza Google Images long-tail'],
      missing_information: ['outfit formulas', 'materiale', 'diferente conic vs loose'],
      content_score_estimat: 58,
    },
    {
      title: 'Reginald - Pantaloni barbati slim fit casual gri cu snur',
      url: 'https://www.reginald.ro/produs/pantaloni-de-barbati-slim-fit-casual-gri-cu-snur-lant-inclus-pnt166/',
      domain_authority_estimat: 'mediu ecommerce Romania',
      content_length: 'scurt',
      semantic_keywords: ['slim fit', 'casual', 'gri', 'snur', 'lant'],
      entities: ['Reginald', 'slim fit', 'gri', 'lant'],
      h2_structure: ['produs', 'descriere'],
      featured_snippet_type: 'product result',
      image_count: 3,
      content_angle: 'produs slim cu snur',
      weaknesses: ['intent diferit fata de croieli largi', 'continut editorial minim', 'nu explica asortarea culorii gri'],
      missing_information: ['comparatie slim vs loose', 'piese sus', 'pantofi si proportii'],
      content_score_estimat: 55,
    },
  ],
  serp_weaknesses: [
    'multe pagini sunt fie ecommerce, fie articole scurte de trend',
    'putine raspunsuri directe 40-60 cuvinte pentru PAA',
    'lipsesc tabele de decizie si checklist-uri mobile-friendly',
    'Google Images este tratat prin poze, nu prin strategie de filename/alt/caption/context',
  ],
  content_gaps: safeOpportunities.map((item) => item.keyword),
  image_gaps: [
    'cadre verticale Pinterest/Discover pentru fiecare context',
    'detaliu talie/snur, cadru full outfit si cadru incaltaminte pentru acelasi articol',
    'alt text variat pe intentie, nu repetitie cu keyword exact',
  ],
  long_tail_opportunities: safeOpportunities.map((item) => `${item.keyword} ${item.recommended_angle}`),
  featured_snippet_opportunities: [
    'definitie scurta sub H1',
    'liste numerotate pentru cum porti',
    'tabele: context / piesa / evita',
    'FAQ unic per articol',
  ],
  people_also_ask: [
    'Ce pantofi merg cu pantaloni largi barbati?',
    'Pot purta pantaloni largi la birou vara?',
    'Cum port pantaloni baggy daca sunt scund?',
    'Ce culori merg cu pantaloni maro barbati?',
    'Cum optimizez imaginile de produs pentru Google Images?',
  ],
  semantic_entities: ['Atelier AXD', 'pantaloni cu snur', 'siret lung', 'baggy', 'wide leg', 'loose fit', 'streetwear', 'smart casual', 'bumbac', 'elastan', 'sneakers', 'Bucuresti', 'festival', 'city break'],
  recommended_superiority_plan: {
    content_depth: 'fiecare articol intra pe o micro-intentie cu checklist, tabel, outfit formulas, greseli si FAQ unic',
    image_strategy: '3 imagini per articol: hero full outfit, detaliu snur/material, cadru incaltaminte/proportii; WebP, lazy loading, alt NLP si caption contextual',
    seo_advantage: 'evitam keywordurile generale deja acoperite si castigam long-tail prin contexte reale romanesti',
    ctr_strategy: 'titluri specifice cu persona/context/an, meta descrieri cu promisiune concreta si diferentiere fata de ecommerce',
    internal_linking_strategy: '1 link spre pillar, 1 link spre articol suport diferit, 1 CTA spre colectie doar unde intentia este consideration/decision',
  },
  sources,
};

const articleImages = [
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-bej-siret-lung-wide.jpg',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-bleumarin-siret-lung.jpg',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-largi-negri-snur-casual.jpg',
  'images/atelieraxd-long-tail/atelier-axd-outfit-masculin-pantaloni-wide-leg-maro.png',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-negri-snur-lung-pantaloni-scurti-negri-cu-snur-lung.jpg',
  'images/atelieraxd-long-tail/set-camasa-pantaloni-barbati-smart-casual-elas-set-camasa-pantaloni-barbati-po.png',
];

function imagePlan(keyword, index) {
  const base = slugify(keyword);
  return [0, 1, 2].map((offset) => ({
    filename: `${base}-${['hero-outfit', 'detaliu-snur', 'proportii-incaltaminte'][offset]}.webp`,
    source_candidate: articleImages[(index + offset) % articleImages.length],
    alt_text: `${keyword} - ${['tinuta completa', 'detaliu talie si snur', 'incaltaminte si proportii'][offset]} Atelier AXD`,
    title_text: `${keyword} ${['outfit', 'detaliu', 'proportii'][offset]}`,
    caption: `${['Tinuta completa', 'Detaliu de material si snur', 'Cadru pentru pantofi si lungime'][offset]} pentru cautarea long-tail "${keyword}".`,
    surrounding_semantic_text: `Imagine folosita langa sectiunea despre ${keyword}, cu context vizual concret si limbaj natural pentru Google Images.`,
    image_search_intent: ['inspiratie outfit', 'inspectare produs', 'alegere proportii'][offset],
    long_tail_target: `${keyword} ${['outfit', 'detaliu snur', 'ce pantofi merg'][offset]}`,
  }));
}

function differentiationMatrix(item, index) {
  return {
    search_intent: item.search_intent,
    persona: index % 3 === 0 ? 'barbat scund sau atent la proportii' : index % 3 === 1 ? 'barbat urban 25-35' : 'public unisex lifestyle',
    context: item.recommended_angle,
    funnel_stage: item.funnel_stage,
    format: index % 4 === 0 ? 'checklist + tabel' : index % 4 === 1 ? 'ghid practic' : index % 4 === 2 ? 'comparatie editoriala' : 'lookbook explicat',
    stil_narativ: index % 2 === 0 ? 'editorial practic' : 'stylist conversational',
    unghi_seo: item.reason_safe,
    tip_keyword: item.search_intent === 'technical SEO' ? 'technical long-tail' : 'informational long-tail',
  };
}

function articleMarkdown(item, index) {
  const slug = slugify(item.keyword);
  const title = `${item.keyword.charAt(0).toUpperCase()}${item.keyword.slice(1)}: ghid editorial 2026`;
  const images = imagePlan(item.keyword, index);
  const matrix = differentiationMatrix(item, index);
  const answer = `${item.keyword.charAt(0).toUpperCase()}${item.keyword.slice(1)} se abordeaza prin context, proportii si material, nu prin repetarea unei retete generale. Alege croiala dupa locul in care mergi, pastreaza talia curata, verifica lungimea peste incaltaminte si foloseste culori neutre ca baza. Asa obtii o tinuta urbana actuala, fara sa concurezi vizual cu articolele deja existente.`;
  const faqs = [
    [`Este ${item.keyword} potrivit pentru 2026?`, `Da, daca tema este tratata specific: ${item.recommended_angle}. Intentia nu este sa repetam ghidurile generale, ci sa raspundem unei situatii clare.`],
    [`Ce greseala apare cel mai des la ${item.keyword}?`, 'Cea mai frecventa greseala este excesul de volum fara o ancora vizuala: top prea lung, tiv prea jos sau pantofi prea subtiri pentru croiala pantalonului.'],
    [`Ce imagine ar trebui folosita pentru ${item.keyword}?`, `O imagine buna arata tinuta completa, apoi un detaliu al taliei/snurului si un cadru cu incaltamintea. Fiecare poza trebuie sa aiba alt text diferit si caption contextual.`],
  ];

  return `---
title: "${title}"
slug: "blog/${slug}"
keyword_principal: "${item.keyword}"
cluster: "${item.cluster}"
intent: "${item.search_intent}"
funnel_stage: "${item.funnel_stage}"
date: "2026-05-18"
---

# ${title}

${answer}

> Unghi editorial: ${item.recommended_angle}. Articolul este sigur anti-canibalizare deoarece ${item.reason_safe}.

## Cuprins

- [De ce merita articol separat](#de-ce-merita-articol-separat)
- [Formula rapida de styling](#formula-rapida-de-styling)
- [Tabel de decizie](#tabel-de-decizie)
- [Greseli de evitat](#greseli-de-evitat)
- [Google Images SEO](#google-images-seo)
- [FAQ](#faq)

## De ce merita articol separat

Acest subiect nu trebuie amestecat cu ghidurile generale despre pantaloni cu snur lung, wide leg sau baggy. Cautarea "${item.keyword}" are un context propriu: utilizatorul nu vrea doar definitia pantalonilor, ci vrea o decizie aplicabila intr-o situatie reala. Aici intra diferentierea prin persona, sezon, ocazie si nivel de intentie.

Din auditul local, riscul mare este sa repetam aceleasi structuri: ce sunt pantalonii, cum ii porti, materiale, proportii. De aceea articolul merge pe micro-intentie si raspunde cu exemple concrete. Tonul recomandat este de consultant de imagine: observatii vizuale, reguli scurte si explicatii care se pot verifica in oglinda.

## Formula rapida de styling

1. Alege pantalonul dupa context, nu dupa trend. Pentru ${item.keyword}, contextul principal este: ${item.recommended_angle}.
2. Pastreaza talia vizibila cand snurul sau siretul este elementul cheie.
3. Foloseste o singura piesa cu volum evident. Daca pantalonii sunt largi, topul trebuie sa fie compact sau intentionat scurt.
4. Verifica incaltamintea din profil. Pantofii prea subtiri dispar sub tiv, iar sneakersii prea voluminosi pot scurta vizual piciorul.
5. Limiteaza paleta la doua culori principale si un accent mic.

## Tabel de decizie

| Situatie | Alege | Evita | De ce conteaza |
| --- | --- | --- | --- |
| Prima impresie | croiala curata, material cu tinuta | material subtire, sifonat | creste increderea si dwell time vizual |
| Poze pentru articol | cadru frontal + detaliu talie | crop taiat peste snur | ajuta Google Images si intentia vizuala |
| Tinuta de oras | tricou greu, camasa deschisa sau jacheta scurta | top foarte lung peste talie | pastreaza proportiile citibile |
| Cautare long-tail | fraze naturale in H2, caption si FAQ | keyword stuffing | Google NLP intelege contextul, nu doar repetitia |

## Greseli de evitat

- Sa tratezi articolul ca o varianta a unui ghid existent. Subiectul trebuie sa aduca o decizie noua.
- Sa repeti aceleasi FAQ despre "ce sunt pantalonii cu snur". FAQ-ul trebuie sa raspunda cautarii "${item.keyword}".
- Sa folosesti acelasi alt text pentru toate imaginile. Fiecare imagine are alt intent: inspiratie, detaliu, proportii.
- Sa pui CTA comercial prea devreme. Pentru ${item.funnel_stage}, CTA-ul trebuie sa fie natural si contextual.

## Diferentiere anti-canibalizare

\`\`\`json
${JSON.stringify(matrix, null, 2)}
\`\`\`

## Google Images SEO

\`\`\`json
${JSON.stringify(images, null, 2)}
\`\`\`

## Internal linking recomandat

- Link spre pillar: \`/pantaloni-cu-snur-lung/\` cu anchor variat, de tip "ghidul principal despre snur lung".
- Link spre suport contextual: \`/blog/cum-alegi-marimea-corecta/\` sau \`/blog/incaltaminte-pantaloni-oversized/\`, in functie de sectiunea de proportii.
- CTA natural: "Vezi modelele Atelier AXD doar dupa ce ai stabilit fitul, culoarea si contextul de purtare."

## FAQ

${faqs.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n')}

## Schema-ready notes

- Tip schema: \`Article\` + \`FAQPage\`.
- Featured snippet target: paragraful de sub H1.
- Primary image: \`${images[0].filename}\`.
- Secondary long-tail: ${images.map((image) => image.long_tail_target).join('; ')}.
`;
}

fs.writeFileSync(path.join(outDir, 'existing-content-audit.json'), `${JSON.stringify(uniqueAudit, null, 2)}\n`);
fs.writeFileSync(path.join(outDir, 'topic-gap-analysis.json'), `${JSON.stringify(topicGapAnalysis, null, 2)}\n`);
fs.writeFileSync(path.join(outDir, 'competitor-gap-analysis.json'), `${JSON.stringify(competitorGapAnalysis, null, 2)}\n`);

for (const [index, item] of safeOpportunities.entries()) {
  fs.writeFileSync(path.join(articlesDir, `${String(index + 1).padStart(2, '0')}-${slugify(item.keyword)}.md`), articleMarkdown(item, index));
}

const indexMd = `# AI SEO Content Engine 2026 - Output

Generated on ${new Date().toISOString()}.

- Audited content items: ${uniqueAudit.length}
- New article opportunities: ${safeOpportunities.length}
- Articles generated: ${safeOpportunities.length}

## Files

- topic-gap-analysis.json
- competitor-gap-analysis.json
- existing-content-audit.json
- articles/*.md
`;

fs.writeFileSync(path.join(outDir, 'README.md'), indexMd);

console.log(JSON.stringify({
  audited_items: uniqueAudit.length,
  generated_articles: safeOpportunities.length,
  output: path.relative(root, outDir),
}, null, 2));
