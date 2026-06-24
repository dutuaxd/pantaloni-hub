import type { allContentPages } from './seoSite';

type SourcePage = (typeof allContentPages)[number];

export const internationalLocales = [
  { code: 'en', language: 'English', region: 'International', hubTitle: 'English Fashion Hub' },
  { code: 'sq', language: 'Albanian', region: 'Albania and Kosovo', hubTitle: 'Albanian Fashion Hub' },
  { code: 'de', language: 'German', region: 'Germany, Austria and Switzerland', hubTitle: 'German Fashion Hub' },
  { code: 'hy', language: 'Armenian', region: 'Armenia', hubTitle: 'Armenian Fashion Hub' },
  { code: 'az', language: 'Azerbaijani', region: 'Azerbaijan', hubTitle: 'Azerbaijani Fashion Hub' },
  { code: 'be', language: 'Belarusian', region: 'Belarus', hubTitle: 'Belarusian Fashion Hub' },
  { code: 'bs', language: 'Bosnian', region: 'Bosnia and Herzegovina', hubTitle: 'Bosnian Fashion Hub' },
  { code: 'bg', language: 'Bulgarian', region: 'Bulgaria', hubTitle: 'Bulgarian Fashion Hub' },
  { code: 'ca', language: 'Catalan', region: 'Catalan-speaking regions', hubTitle: 'Catalan Fashion Hub' },
  { code: 'hr', language: 'Croatian', region: 'Croatia', hubTitle: 'Croatian Fashion Hub' },
  { code: 'cs', language: 'Czech', region: 'Czechia', hubTitle: 'Czech Fashion Hub' },
  { code: 'da', language: 'Danish', region: 'Denmark', hubTitle: 'Danish Fashion Hub' },
  { code: 'et', language: 'Estonian', region: 'Estonia', hubTitle: 'Estonian Fashion Hub' },
  { code: 'fi', language: 'Finnish', region: 'Finland', hubTitle: 'Finnish Fashion Hub' },
  { code: 'fr', language: 'French', region: 'France and francophone Europe', hubTitle: 'French Fashion Hub' },
  { code: 'gl', language: 'Galician', region: 'Galicia', hubTitle: 'Galician Fashion Hub' },
  { code: 'ka', language: 'Georgian', region: 'Georgia', hubTitle: 'Georgian Fashion Hub' },
  { code: 'el', language: 'Greek', region: 'Greece and Cyprus', hubTitle: 'Greek Fashion Hub' },
  { code: 'hu', language: 'Hungarian', region: 'Hungary', hubTitle: 'Hungarian Fashion Hub' },
  { code: 'ga', language: 'Irish', region: 'Ireland', hubTitle: 'Irish Fashion Hub' },
  { code: 'is', language: 'Icelandic', region: 'Iceland', hubTitle: 'Icelandic Fashion Hub' },
  { code: 'it', language: 'Italian', region: 'Italy', hubTitle: 'Italian Fashion Hub' },
  { code: 'kk', language: 'Kazakh', region: 'Kazakhstan', hubTitle: 'Kazakh Fashion Hub' },
  { code: 'lv', language: 'Latvian', region: 'Latvia', hubTitle: 'Latvian Fashion Hub' },
  { code: 'lt', language: 'Lithuanian', region: 'Lithuania', hubTitle: 'Lithuanian Fashion Hub' },
  { code: 'lb', language: 'Luxembourgish', region: 'Luxembourg', hubTitle: 'Luxembourgish Fashion Hub' },
  { code: 'mk', language: 'Macedonian', region: 'North Macedonia', hubTitle: 'Macedonian Fashion Hub' },
  { code: 'mt', language: 'Maltese', region: 'Malta', hubTitle: 'Maltese Fashion Hub' },
  { code: 'md', language: 'Moldovan and Romanian', region: 'Moldova', hubTitle: 'Moldovan Fashion Hub' },
  { code: 'cnr', language: 'Montenegrin', region: 'Montenegro', hubTitle: 'Montenegrin Fashion Hub' },
  { code: 'nl', language: 'Dutch', region: 'Netherlands and Flanders', hubTitle: 'Dutch Fashion Hub' },
  { code: 'no', language: 'Norwegian', region: 'Norway', hubTitle: 'Norwegian Fashion Hub' },
  { code: 'pl', language: 'Polish', region: 'Poland', hubTitle: 'Polish Fashion Hub' },
  { code: 'pt', language: 'Portuguese', region: 'Portugal', hubTitle: 'Portuguese Fashion Hub' },
  { code: 'ro', language: 'Romanian', region: 'Romania', hubTitle: 'Romanian Fashion Hub' },
  { code: 'ru', language: 'Russian', region: 'Russian-speaking Europe', hubTitle: 'Russian Fashion Hub' },
  { code: 'sr', language: 'Serbian', region: 'Serbia', hubTitle: 'Serbian Fashion Hub' },
  { code: 'sk', language: 'Slovak', region: 'Slovakia', hubTitle: 'Slovak Fashion Hub' },
  { code: 'sl', language: 'Slovenian', region: 'Slovenia', hubTitle: 'Slovenian Fashion Hub' },
  { code: 'es', language: 'Spanish', region: 'Spain', hubTitle: 'Spanish Fashion Hub' },
  { code: 'sv', language: 'Swedish', region: 'Sweden', hubTitle: 'Swedish Fashion Hub' },
  { code: 'tr', language: 'Turkish', region: 'Turkey', hubTitle: 'Turkish Fashion Hub' },
  { code: 'uk', language: 'Ukrainian', region: 'Ukraine', hubTitle: 'Ukrainian Fashion Hub' },
  { code: 'yi', language: 'Yiddish', region: 'Yiddish-speaking communities', hubTitle: 'Yiddish Fashion Hub' },
  { code: 'eu', language: 'Basque', region: 'Basque Country', hubTitle: 'Basque Fashion Hub' },
  { code: 'br', language: 'Breton', region: 'Brittany', hubTitle: 'Breton Fashion Hub' },
  { code: 'co', language: 'Corsican', region: 'Corsica', hubTitle: 'Corsican Fashion Hub' },
  { code: 'fy', language: 'Frisian', region: 'Frisia', hubTitle: 'Frisian Fashion Hub' },
  { code: 'cy', language: 'Welsh', region: 'Wales', hubTitle: 'Welsh Fashion Hub' },
  { code: 'se', language: 'Sami', region: 'Northern Europe', hubTitle: 'Sami Fashion Hub' },
  { code: 'hsb', language: 'Sorbian', region: 'Lusatia', hubTitle: 'Sorbian Fashion Hub' },
  { code: 'gag', language: 'Gagauz', region: 'Gagauzia', hubTitle: 'Gagauz Fashion Hub' },
  { code: 'tt', language: 'Tatar', region: 'Tatar-speaking communities', hubTitle: 'Tatar Fashion Hub' },
  { code: 'oc', language: 'Occitan', region: 'Occitania', hubTitle: 'Occitan Fashion Hub' },
] as const;

export type InternationalLocale = (typeof internationalLocales)[number];

const tokenMap: Record<string, string> = {
  acasa: 'home',
  alegere: 'choice',
  alegi: 'choose',
  albi: 'white',
  alb: 'white',
  atelier: 'atelier',
  barbati: 'men',
  barbatesti: 'men',
  bej: 'beige',
  bleumarin: 'navy',
  blog: 'guide',
  bumbac: 'cotton',
  care: 'which',
  ce: 'what',
  copii: 'kids',
  croiala: 'cut',
  croieli: 'cuts',
  culoare: 'color',
  culori: 'colors',
  cum: 'how',
  cu: 'with',
  dama: 'women',
  despre: 'about',
  detaliu: 'detail',
  femei: 'women',
  fermoare: 'zippers',
  ghid: 'guide',
  gri: 'gray',
  haine: 'clothing',
  incaltaminte: 'shoes',
  ingrijire: 'care',
  largi: 'wide',
  lung: 'long',
  lunga: 'long',
  lungi: 'long',
  marime: 'size',
  marimi: 'sizes',
  maro: 'brown',
  materiale: 'materials',
  moda: 'fashion',
  negri: 'black',
  negru: 'black',
  oversized: 'oversized',
  pantaloni: 'pants',
  pantalonii: 'pants',
  poarta: 'wear',
  porti: 'wear',
  potriviti: 'right',
  pentru: 'for',
  sau: 'or',
  scurti: 'short',
  siret: 'drawstring',
  snur: 'drawstring',
  stil: 'style',
  streetwear: 'streetwear',
  sunt: 'are',
  textile: 'textiles',
  tinuta: 'outfit',
  tinute: 'outfits',
  tricou: 't-shirt',
  tricouri: 't-shirts',
  unisex: 'unisex',
  urban: 'urban',
  urbana: 'urban',
  vara: 'summer',
  vezi: 'see',
};

const fallbackTerms = [
  'fashion',
  'style',
  'clothing',
  'guide',
  'outfit',
  'streetwear',
  'fit',
  'wardrobe',
];

function compactText(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

function hashText(text: string) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }
  return hash.toString(36).slice(0, 6);
}

function englishSlugFromSource(sourceSlug: string) {
  const parts = sourceSlug.split('/');
  const lastPart = parts[parts.length - 1] || sourceSlug;
  const translated = lastPart
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .split('-')
    .map((token) => tokenMap[token])
    .filter(Boolean)
    .join('-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
  const fallback = fallbackTerms[hashText(sourceSlug).charCodeAt(0) % fallbackTerms.length];
  return `${translated || fallback}-${hashText(sourceSlug)}`;
}

function pageKind(page: SourcePage) {
  const source = `${page.slug} ${page.title || ''}`.toLowerCase();
  if (source.includes('material') || source.includes('textil') || source.includes('cotton') || source.includes('bumbac')) return 'material guide';
  if (source.includes('brand') || source.includes('atelier')) return 'brand profile';
  if (source.includes('culo') || source.includes('color')) return 'color guide';
  if (source.includes('ingrijire') || source.includes('care') || source.includes('spal')) return 'care guide';
  if (source.includes('pantaloni') || source.includes('pants') || source.includes('snur') || source.includes('siret')) return 'pants guide';
  return 'fashion guide';
}

function titleTopic(page: SourcePage) {
  const kind = pageKind(page);
  const slug = englishSlugFromSource(page.slug).replace(/-[a-z0-9]{4,6}$/i, '').replace(/-/g, ' ');
  const topic = compactText(slug).replace(/\b\w/g, (letter) => letter.toUpperCase());
  if (!topic || topic.length < 5) return `European ${kind.replace(/\b\w/g, (letter) => letter.toUpperCase())}`;
  return topic;
}

export function localizedSlug(page: SourcePage) {
  const prefix = page.slug.startsWith('blog/') ? 'guides/' : '';
  return `${prefix}${englishSlugFromSource(page.slug)}`;
}

export function localizedUrl(locale: InternationalLocale, page: SourcePage) {
  return `/${locale.code}/${localizedSlug(page)}/`;
}

export function localizedPage(page: SourcePage, locale: InternationalLocale) {
  const topic = titleTopic(page);
  const kind = pageKind(page);
  const title = `${topic} | English ${locale.language} Fashion Guide`;
  const description = `English guide for ${topic.toLowerCase()}: fit, styling, materials, proportions, care notes and buying context for readers in ${locale.region}.`;
  return {
    sourceSlug: page.slug,
    slug: localizedSlug(page),
    title,
    description,
    h1: topic,
    locale,
    kind,
    image: page.image || 'og-pantaloni-cu-snur-lung.jpg',
    sections: [
      ['Quick Answer', `${topic} is covered here as an English fashion reference for readers who want clear context before choosing an outfit, comparing a garment or reading a product page.`],
      ['Fit And Proportion', `Start with proportion. A good ${kind} explains how volume, waist placement, fabric weight and footwear work together so the outfit looks intentional rather than accidental.`],
      ['Material Notes', 'Look for fabric that keeps its shape, feels comfortable on the body and supports daily movement. Cotton blends, denim, jersey, fleece and structured woven fabrics each behave differently in real outfits.'],
      ['Styling Ideas', 'Keep the base simple. Neutral tops, clean sneakers, balanced layers and one visible detail usually make the outfit easier to read in person and in photos.'],
      ['Buying Context', 'Use this page as a neutral reference before visiting a shop, checking size information, comparing product photos or deciding whether a garment belongs in your wardrobe.'],
    ],
    faqs: [
      [`What is the main idea behind ${topic}?`, `The main idea is to explain ${topic.toLowerCase()} in practical English, with focus on fit, styling, comfort and everyday use.`],
      ['Is this page written in English?', 'Yes. The international pages use English content, English metadata and English interface text.'],
      ['Can I use this as a buying guide?', 'Yes. It is an informational guide that helps you compare details before you check current stock, pricing or delivery conditions on a shop website.'],
    ],
  };
}

export function localizedHub(locale: InternationalLocale, pages: SourcePage[]) {
  const featuredPages = pages.slice(0, 24).map((page) => localizedPage(page, locale));
  return {
    locale,
    title: `${locale.hubTitle} | English Fashion Pages`,
    description: `English fashion hub for ${locale.language} and ${locale.region}: browse translated URL paths with English content, English metadata and fashion guides.`,
    h1: locale.hubTitle,
    featuredPages,
  };
}
