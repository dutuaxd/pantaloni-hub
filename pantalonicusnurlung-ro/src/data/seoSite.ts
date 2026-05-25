import { scheduledBlogPosts } from './scheduledBlogPosts';
import { queryDrivenBlogPosts } from './queryDrivenBlogPosts';
import { summerFashionAuthorityBlogPosts2026 } from './summerFashionAuthorityBlogPosts2026';
// Removed programmatic arrays to comply with Phase 1 - Crawl Budget & Topo-SEO Restructuring
// Focus on pillar articles instead of spam combinations
import { withPremiumEditorialImages } from './editorialImagePrompts';

export const SITE = 'https://pantalonicusnurlung.ro';
export const SHOP = 'https://atelieraxd.ro/collections/pantaloni-barbati-atelier-axd';
export const FEATURED_PRODUCT = 'https://atelieraxd.ro/products/pantaloni-barba%C8%9Bi-negri-croiala-larga-wide-leg-cu-%C8%99nur-lung';
export const ATELIER_HOME = 'https://atelieraxd.ro/';
export const ATELIER_LINKS = {
  colectii: 'https://atelieraxd.ro/collections/colectii',
  hanorace: 'https://atelieraxd.ro/collections/hanorace-barbati-atelier-axd',
  tricouri: 'https://atelieraxd.ro/collections/tricouri-barbati-atelier-axd',
  pantaloni: SHOP,
  pantaloniScurti: 'https://atelieraxd.ro/collections/pantaloni-scurti-barbati-atelier-axd',
  seturi: 'https://atelieraxd.ro/collections/seturi-barbati-atelier-axd',
  seturiScurte: 'https://atelieraxd.ro/collections/seturi-scurte-barbati-atelier-axd',
  copii: 'https://atelieraxd.ro/collections/pantaloni-scur%C8%9Bi-comfort-stil-pentru-copii',
  despre: 'https://atelieraxd.ro/pages/despre-atelier-axd-povestea-noastra-viziunea-si-valorile-noastre',
  contact: 'https://atelieraxd.ro/pages/contact',
  partener: 'https://atelieraxd.ro/pages/devino-partener-atelieraxd',
  blog: 'https://atelieraxd.ro/blogs/news',
};
export const updated = '2026-05-20';
export const brandName = 'PantaloniCuSnurLung.ro';
export const merchantReturnPolicyId = `${SITE}/#merchant-return-policy`;
const todayInRomania = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Bucharest',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date());
const publishDate = import.meta.env.PUBLISH_DATE || todayInRomania;
const showFuturePosts = String(import.meta.env.SHOW_FUTURE_POSTS) === 'true';
const visibleScheduledBlogPosts = scheduledBlogPosts.filter((post) => showFuturePosts || post.date <= publishDate);

export const company = {
  name: 'SC ATELIER AXD SRL',
  cui: '50848938',
  reg: 'J2024039294009',
  address: 'Str. Mare a Unirii 4, Bl. 5, Sc. 2, Et. 1, Ap. 17, Focsani, Vrancea, Romania',
  email: 'atelieraxd@outlook.com',
  phone: 'Telefon disponibil la cerere prin email',
  author: 'Echipa editoriala Atelier AXD',
};

export const editorialClusters = [
  {
    title: 'Cluster siret lung',
    links: [
      ['/pantaloni-cu-siret-lung/', 'Pantaloni cu siret lung'],
      ['/pantaloni-negri-cu-siret-lung/', 'Pantaloni negri cu siret lung'],
      ['/pantaloni-scurti-cu-siret-lung/', 'Pantaloni scurti cu siret lung'],
      ['/pantaloni-cu-siret-lung-barbati/', 'Pantaloni cu siret lung barbati'],
      ['/tricou-gri-pantaloni-albi-siret-lung/', 'Tricou gri cu pantaloni albi'],
      ['/set-alb-pantaloni-scurti-siret-lung/', 'Set alb cu pantaloni scurti'],
      ['/tricou-bej-pantaloni-albi-siret-lung/', 'Tricou bej cu pantaloni albi'],
      ['/tricou-verde-armata-pantaloni-siret-lung/', 'Tricou verde armata'],
      ['/tricou-verde-armata-pantaloni-albi-siret-lung/', 'Verde armata cu pantaloni albi'],
      ['/tricou-bleumarin-pantaloni-albi-siret-lung/', 'Bleumarin cu pantaloni albi'],
      ['/tricou-gri-simplu-pantaloni-siret-lung/', 'Tricou gri simplu'],
      ['/tricou-tie-dye-pantaloni-albi-siret-lung/', 'Tie dye cu pantaloni albi'],
      ['/tricou-tie-dye-pantaloni-siret-lung/', 'Tricou tie dye'],
      ['/blog/siret-lung-vs-snur-lung/', 'Siret lung vs snur lung'],
    ],
  },
  {
    title: 'Croieli explicate',
    links: [
      ['/pantaloni-baggy-negri/', 'Pantaloni baggy negri'],
      ['/pantaloni-oversized/', 'Pantaloni oversized'],
      ['/pantaloni-loose-fit/', 'Pantaloni loose fit'],
      ['/pantaloni-urban-fit/', 'Pantaloni urban fit'],
      ['/baggy-cu-snur/', 'Baggy cu snur'],
    ],
  },
  {
    title: 'Moda urbana Romania',
    links: [
      ['/moda-urbana-barbati/', 'Moda urbana barbati'],
      ['/moda-urbana-femei/', 'Moda urbana femei'],
      ['/blog/moda-urbana-minimalist/', 'Moda urbana minimalist'],
      ['/blog/outfituri-monocrome-moda-urbana/', 'Outfituri monocrome'],
      ['/blog/trenduri-moda-urbana-2026/', 'Trenduri moda urbana 2026'],
    ],
  },
  {
    title: 'Pantaloni pe orase',
    links: [
      ['/pantaloni-pe-orase/', 'Hub local Romania'],
      ['/orase/pantaloni-focsani/', 'Pantaloni Focsani'],
      ['/orase/pantaloni-bucuresti/', 'Pantaloni Bucuresti'],
      ['/orase/pantaloni-cluj-napoca/', 'Pantaloni Cluj-Napoca'],
      ['/orase/pantaloni-iasi/', 'Pantaloni Iasi'],
      ['/orase/pantaloni-constanta/', 'Pantaloni Constanta'],
    ],
  },
  {
    title: 'Ghiduri de fit',
    links: [
      ['/ghid-marimi/', 'Ghid marimi moda urbana'],
      ['/blog/cum-alegi-marimea-corecta/', 'Cum alegi marimea'],
      ['/blog/baggy-daca-esti-scund/', 'Baggy pentru persoane scunde'],
      ['/blog/incaltaminte-pantaloni-oversized/', 'Incaltaminte pentru oversized'],
      ['/blog/greseli-outfit-oversized/', 'Greseli in oversized'],
    ],
  },
  {
    title: 'Publicatie',
    links: [
      ['/despre-noi/', 'Despre publicatie'],
      ['/despre-atelier-axd/', 'Despre Atelier AXD'],
      ['/cum-produsem/', 'Materiale si croieli'],
      ['/galerie-pantaloni-snur-lung/', 'Galerie vizuala'],
    ],
  },
];

export const scheduledTopics = [
  'pantaloni cu siret lung',
  'pantaloni negri cu siret lung',
  'pantaloni scurti cu siret lung',
  'tricou gri pantaloni albi siret lung',
  'set alb pantaloni scurti siret lung',
  'tricou bej pantaloni albi siret lung',
  'tricou verde armata pantaloni siret lung',
  'tricou verde armata pantaloni albi siret lung',
  'tricou bleumarin pantaloni albi siret lung',
  'tricou gri simplu pantaloni siret lung',
  'tricou tie dye pantaloni albi siret lung',
  'tricou tie dye gri albastru pantaloni siret lung',
  'siret lung vs snur lung',
  'baggy cu sneakers voluminosi',
  'pantaloni oversized vara',
  'moda urbana minimalist pentru facultate',
  'outfit negru cu pantaloni largi',
  'diferenta dintre cargo si baggy',
  'cum alegi pant stacking',
  'ghid materiale textile pentru pantaloni largi',
  'outfituri de oras pentru vreme rece',
  'pantaloni cu fermoare si snur lung',
  'pantaloni scurti gri cu fermoare',
];

export const galleryImages = [
  ['pantaloni-scurti-gri-100-bumbac-fermoar.png', 'Pantaloni scurti gri 100% bumbac cu fermoare si snur lung'],
  ['pantaloni-maro-snur-lung-fermoare-mijloc.png', 'Pantaloni maro cu snur lung si fermoare negre pe fata'],
  ['pantaloni-maro-casual-snur-lung-modern.png', 'Tinuta casual cu pantaloni cu snur lung si fermoare'],
  ['pantaloni-barbati-largi-negri-snur-casual.jpg', 'Pantaloni cu snur lung negri barbati, croiala larga casual'],
  ['pantaloni-barbati-negri-snur-lung.jpg', 'Pantaloni cu snur lung barbati, model negru urban'],
  ['pantaloni-negri-oversized-barbati-snur-lung.jpg', 'Pantaloni negri oversized barbati cu snur lung'],
  ['pantaloni-negri-slim-snur-lung-atelieraxd.jpg', 'Pantaloni negri slim cu snur lung Atelier AXD'],
  ['pantaloni-scurti-negri-cu-snur-lung.jpg', 'Pantaloni scurti negri cu snur lung pentru vara'],
  ['pantaloni-negri-scurti-snur-lung.jpg', 'Pantaloni negri scurti snur lung stil urban'],
  ['tricou-gri-pantaloni-albi-siret-lung-outfit.png', 'Tinuta unisex cu tricou gri si pantaloni scurti albi cu siret lung'],
  ['set-alb-pantaloni-scurti-siret-lung-outfit.png', 'Set alb unisex cu tricou oversized si pantaloni scurti cu siret lung'],
  ['tricou-bej-pantaloni-albi-siret-lung-outfit.png', 'Tinuta cu tricou bej si pantaloni scurti albi cu siret lung'],
  ['tricou-verde-armata-pantaloni-siret-lung-produs.png', 'Tricou verde armata simplu pentru tinute cu pantaloni cu siret lung'],
  ['tricou-verde-armata-pantaloni-albi-siret-lung-outfit.png', 'Tinuta cu tricou verde armata si pantaloni scurti albi cu siret lung'],
  ['tricou-bleumarin-pantaloni-albi-siret-lung-outfit.png', 'Tinuta cu tricou bleumarin si pantaloni scurti albi cu siret lung'],
  ['tricou-gri-simplu-pantaloni-siret-lung-produs.png', 'Tricou gri simplu din bumbac pentru tinute cu pantaloni cu siret lung'],
  ['tricou-tie-dye-pantaloni-albi-siret-lung-outfit.png', 'Tinuta unisex cu tricou tie dye gri albastru si pantaloni scurti albi cu siret lung'],
  ['tricou-tie-dye-gri-albastru-pantaloni-siret-lung-produs.png', 'Tricou tie dye gri albastru pentru tinute cu pantaloni cu siret lung'],
  ['pantaloni-femei-moda-urbana-snur-lung.png', 'Pantaloni cu snur lung femei in tinuta moda urbana'],
  ['tinuta-unisex-pantaloni-largi-snur-extra-lung.png', 'Tinuta unisex cu pantaloni largi si snur extra lung'],
  ['outfit-casual-tricou-pantaloni-negri-snur-lung.png', 'Tinuta casual cu tricou si pantaloni negri cu snur lung'],
  ['pantaloni-baggy-fete-snur-lung-atelieraxd.png', 'Pantaloni baggy pentru fete cu snur lung Atelier AXD'],
  ['detaliu-snur-lung-pantaloni-oversized-dama.png', 'Detaliu snur lung la pantaloni oversized de dama'],
  ['moda-urbana-pantaloni-unisex-cu-snur-lung.png', 'Moda urbana cu pantaloni unisex cu snur lung'],
  ['pantaloni-barbati-largi-negri-snur-casual.jpg', 'Pantaloni cu snur lung negri unisex, vedere laterala'],
  ['pantaloni-barbati-negri-snur-lung.jpg', 'Pantaloni cu snur lung negru, stilizare cu incaltaminte sport'],
  ['pantaloni-negri-oversized-barbati-snur-lung.jpg', 'Pantaloni cu snur lung baggy pentru stil urban'],
  ['pantaloni-negri-slim-snur-lung-atelieraxd.jpg', 'Pantaloni cu snur lung cu talie reglabila'],
  ['pantaloni-femei-moda-urbana-snur-lung.png', 'Pantaloni cu snur lung femei, look urban relaxat'],
  ['tinuta-unisex-pantaloni-largi-snur-extra-lung.png', 'Pantaloni largi cu snur extra lung unisex'],
  ['outfit-casual-tricou-pantaloni-negri-snur-lung.png', 'Pantaloni negri cu snur lung si tricou oversized'],
  ['moda-urbana-pantaloni-unisex-cu-snur-lung.png', 'Pantaloni cu snur lung pentru moda urbana romaneasca'],
];

export const faqs = [
  ['Ce sunt pantalonii cu snur lung?', 'Pantalonii cu snur lung sunt pantaloni cu snur decorativ sau functional la talie, lasat vizibil pentru un efect urban si o reglare usoara a taliei.'],
  ['Snur lung si siret lung inseamna acelasi lucru?', 'In cautarile din Romania, multi utilizatori folosesc snur lung si siret lung pentru acelasi detaliu vizibil de la talia pantalonilor. Tehnic, snurul este termenul mai corect, iar siret lung este o formulare populara.'],
  ['Cum se poarta pantalonii cu snur lung?', 'Se poarta cu snurul lasat natural in fata, alaturi de tricouri oversized, hanorace, jachete simple si incaltaminte sport cu volum mediu.'],
  ['Sunt pantalonii cu snur lung unisex?', 'Da, majoritatea modelelor moda urbana cu snur lung pot fi purtate unisex, diferenta fiind data mai ales de croiala si marime.'],
  ['Ce material este potrivit?', 'Bumbacul gros sau mixurile cu bumbac sunt potrivite deoarece tin forma, respira bine si lasa snurul sa cada curat.'],
  ['Cat de lung trebuie sa fie snurul?', 'Snurul ar trebui sa ramana vizibil sub tivul superior, fara sa incurce mersul sau sa depaseasca exagerat zona genunchilor.'],
  ['Se pot purta vara?', 'Da, vara merg modelele din bumbac mai usor, variantele scurte si croielile relaxate care permit circulatia aerului.'],
  ['Unde gasesc pantaloni cu snur lung?', 'Colectia comerciala recomandata este pe atelieraxd.ro, magazinul Atelier AXD catre care trimite transparent acest site informativ.'],
  ['Cum se spala pantalonii cu snur lung?', 'Spala-i pe dos la temperatura joasa, evita uscatorul agresiv si strange snurul lejer ca sa nu se retraga in betelie.'],
];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#organization`,
    name: brandName,
    url: SITE,
    logo: `${SITE}/og-pantaloni-cu-snur-lung.jpg`,
    description: 'Publicatie editoriala romaneasca pentru pantaloni baggy, joggeri oversized, croieli relaxate si outfituri moda urbana.',
    sameAs: ['https://www.instagram.com/atelieraxd.ro/', 'https://www.facebook.com/profile.php?id=100067635362487', 'https://atelieraxd.ro'],
    contactPoint: { '@type': 'ContactPoint', email: company.email, contactType: 'serviciu clienti', availableLanguage: 'Romanian' },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      '@id': merchantReturnPolicyId,
      merchantReturnLink: 'https://atelieraxd.ro/policies/refund-policy',
      applicableCountry: 'RO',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 14,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brandName,
    url: SITE,
    inLanguage: 'ro-RO',
    publisher: { '@type': 'Organization', name: brandName },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE}/search/{search_term_string}/`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function productSchema(
  name = 'Pantaloni barbati negri croiala larga cu snur lung',
  url = FEATURED_PRODUCT,
  image = `${SITE}/images/products/pantaloni-cu-snur-lung-negri-produs-unisex.webp`,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name,
    image: [
      image,
      `${SITE}/images/products/pantaloni-cu-snur-lung-negri-barbati-outfit.webp`,
      `${SITE}/images/products/pantaloni-cu-snur-lung-negri-femei-outfit.webp`,
    ],
    description: 'Pantaloni casual largi cu talie reglabila, croiala relaxata si estetica moda urbana.',
    brand: { '@type': 'Brand', name: 'Atelier AXD' },
    category: 'Pantaloni moda urbana',
    url,
    sku: 'atelier-axd-wide-leg-snur-negru',
    mpn: 'AXD-WIDE-LEG-SNUR-NEGRU',
    offers: {
      '@type': 'Offer',
      '@id': `${url}#offer`,
      url,
      price: 100.00,
      priceCurrency: 'RON',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: 100.00,
        priceCurrency: 'RON',
      },
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'Atelier AXD', url: ATELIER_HOME },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'RO',
        },
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: 19.00,
          currency: 'RON',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        '@id': merchantReturnPolicyId,
        applicableCountry: 'RO',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 14,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
      },
    },
  };
}

export function faqSchema(list = faqs) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: list.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) };
}

export function breadcrumbSchema(title: string, url: string) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Acasa', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: title, item: url }] };
}

export function articleSchema(page: PageLike) {
  const imagePath = page.image.endsWith('.webp') ? `images/products/${page.image}` : page.image;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.description,
    image: `${SITE}/${imagePath}`,
    author: { '@type': 'Person', name: company.author, url: `${SITE}/despre-noi/` },
    publisher: { '@type': 'Organization', name: brandName, logo: { '@type': 'ImageObject', url: `${SITE}/og-pantaloni-cu-snur-lung.jpg` } },
    datePublished: page.date || '2026-01-01',
    dateModified: updated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${page.slug}/` },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.direct-answer'] },
  };
}

type PageLike = { slug: string; title: string; description: string; h1: string; image: string; date?: string };

function compactText(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

function stripTrailingPunctuation(text: string) {
  return compactText(text).replace(/[.?!:;]+$/g, '');
}

function limitText(text: string, maxLength: number) {
  const clean = compactText(text);
  if (clean.length <= maxLength) return clean;
  const cut = clean.slice(0, maxLength - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ') > 55 ? cut.lastIndexOf(' ') : cut.length).replace(/[,:;|-]+$/g, '')}.`;
}

function seoTitle(slug: string, title: string, h1: string) {
  const brand = slug.startsWith('blog/') ? 'Ghid Atelier AXD' : brandName;
  const base = stripTrailingPunctuation(h1 || title);
  return limitText(`${base} | ${brand}`, 66);
}

function seoDescription(description: string, h1: string, intro: string) {
  const topic = stripTrailingPunctuation(h1);
  const detail = compactText(intro || description).replace(/^Aceasta pagina\s+/i, '').replace(/^Afla\s+/i, 'Afla ');
  return limitText(`${topic}: ${detail}`, 158);
}

const baseSections = [
  ['Pe scurt', 'Un fit urban reusit inseamna volum controlat, talie stabila si materiale care cad natural. Pantalonii baggy, pantalonii oversized si modelele cu snur lung raspund unor nevoi diferite: inspiratie, informare, comparatie si ghid de marime. De aceea, fiecare pagina raspunde direct in primul paragraf, apoi extinde subiectul cu exemple concrete, tabele, intrebari frecvente si linkuri utile.'],
  ['Cum alegi modelul potrivit', 'Urmareste trei lucruri: croiala, materialul si felul in care pantalonul se aseaza peste incaltaminte. Pentru tinute zilnice, un urban fit drept sau loose fit este usor de purtat. Pentru impact vizual, pantalonii casual largi functioneaza mai bine cu sneakers voluminosi, hoodie compact sau tricou greu. Pentru un aspect curat, alege culori neutre, betelie stabila si o lungime care creeaza stacking usor, nu excesiv.'],
  ['Materiale si confort', 'Bumbacul dens, fleece-ul subtire si amestecurile cu elastan discret sunt cele mai usor de purtat. Materialul trebuie sa tina forma, sa permita miscare si sa nu creeze cute rigide in zona genunchilor. Cand materialul este prea subtire, croiala relaxata pare neglijenta; cand este prea grea, pantalonul poate pierde mobilitatea. Un echilibru bun lasa silueta fluida, dar ordonata.'],
  ['Stilizare si proportii', 'Pantalonii oversized se combina bine cu tricouri simple, hanorace scurte, jachete bomber si sneakers cu talpa medie. Pentru persoane scunde, talia usor mai sus si partea de sus mai scurta ajuta proportia. Pentru persoane inalte, un volum mai pronuntat poate arata intentionat. Regula practica este simpla: daca pantalonul are volum, restul tinutei trebuie sa aiba o logica vizuala clara.'],
  ['Termeni utili', 'Cand alegi pantaloni cu snur lung, merita sa urmaresti termeni simpli precum moda urbana, croiala oversized, loose fit, cargo, sneakers, tinute monocrome, siret lung, snur lung si outfituri ton pe ton. Aceste detalii te ajuta sa compari mai usor modelele si sa alegi o pereche potrivita pentru garderoba ta.'],
  ['Unde cumperi', 'Acest site este informativ si apartine ecosistemului Atelier AXD. Pentru achizitie, vezi colectia completa pe atelieraxd.ro, unde sunt publicate produsele disponibile, preturile si conditiile comerciale actualizate. Linkurile comerciale sunt marcate transparent, iar ghidurile raman orientate spre alegere, styling si educatie vestimentara.'],
];

function page(slug: string, title: string, description: string, h1: string, intro: string, sections = baseSections, image = 'pantaloni-barbati-largi-negri-snur-casual.jpg') {
  return { slug, title: seoTitle(slug, title, h1), description: seoDescription(description, h1, intro), h1, intro, sections, image, date: '2026-05-01' };
}

export const pages = [
  page('ce-sunt-pantalonii-cu-snur-lung', 'Pantaloni cu snur lung: ce sunt si cum se poarta', 'Afla ce sunt pantalonii cu snur lung, cum au devenit piesa moda urbana si unde gasesti modele potrivite in Romania.', 'Ce sunt pantalonii cu snur lung?', 'Pantalonii cu snur lung sunt pantaloni casual sau moda urbana cu snur vizibil la talie, lasat sa cada natural. Detaliul poate fi functional, decorativ sau ambele, iar efectul principal este un look urban relaxat.'),
  page('ghid-alegere-pantaloni-snur-lung', 'Ghid alegere pantaloni snur lung 2026', 'Ghid complet despre cum alegi pantalonii cu snur lung in 2026: croiala, material, marime, lungimea snurului si tinute.', 'Cum alegi pantalonii cu snur lung potriviti in 2026', 'Alege pantalonii cu snur lung dupa croiala, densitatea materialului si felul in care snurul cade peste talie. O pereche buna ramane comoda, arata curat si se potriveste cu incaltaminte urbana care ramane actuala pana in 2027.'),
  page('cum-se-poarta-pantaloni-snur-lung', 'Cum se poarta pantaloni snur lung | Tinute', 'Idei clare de tinuta pentru pantaloni cu snur lung: barbati, femei, unisex, negru, bumbac si stil urban.', 'Cum se poarta pantaloni cu snur lung', 'Pantalonii cu snur lung se poarta cel mai bine in tinute relaxate, unde snurul ramane vizibil si natural. Combina-i cu piese simple ca sa pastrezi accentul pe croiala.'),
  page('pantaloni-cu-snur-lung-barbati', 'Pantaloni cu snur lung barbati | Ghid complet', 'Ghid pentru pantaloni cu snur lung barbati: croieli largi, negre, bumbac, tinute si link spre colectia Atelier AXD.', 'Pantaloni cu snur lung barbati - tot ce trebuie sa stii', 'Pentru barbati, pantalonii cu snur lung functioneaza cel mai bine in croieli loose, drepte sau oversized, purtate cu tricouri compacte si incaltaminte sport.', baseSections, 'pantaloni-barbati-negri-snur-lung.jpg'),
  page('pantaloni-cu-snur-lung-femei', 'Pantaloni cu snur lung femei | Ghid stilizare', 'Cum alegi pantaloni cu snur lung femei pentru tinute moda urbana, oversized, casual si vara. Vezi recomandari Atelier AXD.', 'Pantaloni cu snur lung femei - ghid de stilizare', 'Pentru femei, snurul lung adauga contrast unei tinute relaxate si merge excelent cu topuri scurte, tricouri oversized si jachete curate.', baseSections, 'pantaloni-femei-moda-urbana-snur-lung.png'),
  page('pantaloni-cu-snur-lung-unisex', 'Pantaloni cu snur lung unisex | Modele versatile', 'Modele unisex de pantaloni cu snur lung, cum alegi marimea si cum ii porti in tinute urbane pentru orice garderoba.', 'Pantaloni cu snur lung unisex', 'Modelele unisex sunt alegerea naturala pentru snur lung deoarece se bazeaza pe talie reglabila, croiala relaxata si stilizare simplu.', baseSections, 'tinuta-unisex-pantaloni-largi-snur-extra-lung.png'),
  page('pantaloni-cu-snur-lung-negri', 'Pantaloni cu snur lung negri | Ghid urban', 'De ce pantalonii cu snur lung negri sunt cei mai versatili: materiale, combinatii, intretinere si informare online.', 'Pantaloni cu snur lung negri', 'Negrul este varianta cea mai cautata pentru pantaloni cu snur lung deoarece subtiaza vizual, se combina usor si pune in valoare snurul.', baseSections, 'pantaloni-negri-oversized-barbati-snur-lung.jpg'),
  page('pantaloni-cu-snur-lung-bumbac', 'Pantaloni cu snur lung bumbac | Materiale bune', 'Afla de ce bumbacul este recomandat pentru pantaloni cu snur lung, ce densitate alegi si cum pastrezi forma materialului.', 'Pantaloni cu snur lung bumbac', 'Bumbacul este materialul de baza pentru pantaloni cu snur lung comozi si structurati, mai ales cand are greutate suficienta pentru cadere buna.', baseSections, 'outfit-casual-tricou-pantaloni-negri-snur-lung.png'),
  page('pantaloni-cu-snur-lung-stil-urban', 'Pantaloni cu snur lung stil urban | Tinute', 'Tinute stil urban cu pantaloni cu snur lung: combinatii moderne, proportii, incaltaminte sport si inspiratie pentru oras.', 'Pantaloni cu snur lung stil urban', 'In stil urban, pantalonii cu snur lung sunt folositi ca piesa de accent: simpla, practica si vizibila in mers.', baseSections, 'moda-urbana-pantaloni-unisex-cu-snur-lung.png'),
  page('galerie-pantaloni-snur-lung', 'Galerie pantaloni snur lung | imagini Atelier AXD', 'Galerie foto extinsa cu imagini Atelier AXD pentru pantaloni cu snur lung, siret lung, tricouri, seturi si stil urban.', 'Galerie pantaloni cu snur lung', 'Galeria aduna imagini clare pentru inspiratie vizuala: fiecare fotografie are descriere concreta, titlu si detalii utile despre tinuta.'),
  page('despre-noi', 'Despre noi | Pantaloni cu Snur Lung', 'Afla cine este Atelier AXD, de ce exista pantalonicusnurlung.ro si care este legatura transparenta cu atelieraxd.ro.', 'Despre noi', 'Pantalonicusnurlung.ro este site-ul informativ al brandului Atelier AXD, creat pentru ghiduri, explicatii si inspiratie despre moda urbana cu snur lung.', [
    ['Cine suntem', `${company.name} opereaza ecosistemul Atelier AXD si acest site informativ. Date firma: CUI ${company.cui}, Reg. Com. ${company.reg}, sediu ${company.address}.`],
    ['Misiunea noastra', 'Am creat site-ul pentru ca utilizatorii din Romania sa gaseasca raspunsuri clare despre pantaloni cu snur lung, nu doar liste de produse.'],
    ['Expertiza', 'Lucram cu moda urbana, croieli casual, materiale si selectie de produse pentru clienti care vor tinute relaxate si distinctive.'],
    ['Legatura cu atelieraxd.ro', 'Acesta este site-ul informativ al brandului Atelier AXD. Comenzile, preturile si stocurile sunt gestionate pe atelieraxd.ro.'],
    ['Contact', `Email: ${company.email}. Magazin: atelieraxd.ro.`],
  ], 'pantaloni-barbati-negri-snur-lung.jpg'),
  page('contact', 'Contact pantaloni cu snur lung | Atelier AXD', 'Contacteaza echipa Atelier AXD pentru intrebari despre site, ghiduri, colaborari si informatii despre pantaloni cu snur lung.', 'Contact', `Pentru intrebari despre acest site informativ sau despre legatura cu Atelier AXD, scrie la ${company.email}.`),
  page('politica-de-confidentialitate', 'Politica de confidentialitate GDPR | Pantaloni', 'Politica de confidentialitate GDPR pentru pantalonicusnurlung.ro: date colectate, scop, durata, drepturi si ANSPDCP.', 'Politica de confidentialitate', 'Aceasta politica explica modul in care prelucram date personale pe pantalonicusnurlung.ro, conform GDPR si legislatiei aplicabile in Romania.', [
    ['Operatorul de date', `${company.name}, CUI ${company.cui}, sediu ${company.address}, email GDPR ${company.email}, telefon: ${company.phone}.`],
    ['Ce date colectam', 'Date tehnice automate: IP, browser, sistem de operare, pagini vizitate si durata vizitei prin Cloudflare Analytics sau Google Analytics doar dupa consimtamant. Date voluntare: email si mesaj trimis prin contact.'],
    ['Scop si temei legal', 'Analiza traficului se bazeaza pe interes legitim sau consimtamant pentru analytics neesential. Raspunsul la solicitari se bazeaza pe Art. 6(1)(b) GDPR.'],
    ['Durata stocarii', 'Date analitice: pana la 26 luni. Date formular contact: pana la 3 ani de la ultima interactiune. Cookie-uri: conform politicii cookies.'],
    ['Drepturile utilizatorilor', 'Ai drept de acces, rectificare, stergere, restrictionare, portabilitate, opozitie si dreptul de a nu fi supus deciziilor automate. Scrie la emailul GDPR; raspundem in maximum 30 zile.'],
    ['Transferuri internationale', 'Google LLC si Cloudflare Inc. pot procesa date in SUA prin mecanisme de protectie recunoscute, inclusiv DPF si clauze contractuale standard.'],
    ['Autoritatea de supraveghere', 'ANSPDCP, B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucuresti, dataprotection.ro.'],
    ['Data ultimei actualizari', updated],
  ]),
  page('politica-cookies', 'Politica cookies | Pantaloni cu Snur Lung', 'Politica de cookies pentru pantalonicusnurlung.ro: categorii, consimtamant, analytics si retragere preferinte.', 'Politica Cookies', 'Cookie-urile sunt fisiere mici salvate in browser pentru functionarea site-ului, statistici si preferinte, in functie de consimtamantul tau.', [
    ['Categorii folosite', 'Strict necesare: sesiune si securitate, fara consimtamant. Analitice: Google Analytics (_ga, _gid), pana la 26 luni, doar cu acord. Functionale: preferinte UI, pana la 1 an, cu acord. Marketing: doar daca va fi activat explicit.'],
    ['Banner de consimtamant', 'La primul acces poti accepta toate, refuza toate sau personaliza preferintele. Cookie-urile analitice si marketing nu trebuie activate inainte de consimtamant. Consimtamantul se pastreaza pana la 12 luni.'],
    ['Retragere consimtamant', 'Butonul Retrage consimtamantul este disponibil permanent in footer si redeschide bannerul de preferinte.'],
    ['Dezactivare in browser', 'In Chrome, Firefox, Safari si Edge poti sterge sau bloca fisierele cookie din setarile de confidentialitate si securitate.'],
    ['Data ultimei actualizari', updated],
  ]),
  page('termeni-si-conditii', 'Termeni si conditii | Pantaloni cu Snur Lung', 'Termeni de utilizare pentru pantalonicusnurlung.ro: scop informativ, proprietar, proprietate intelectuala si lege aplicabila.', 'Termeni si Conditii de Utilizare', 'Pantalonicusnurlung.ro este un site informativ, nu un magazin online direct. Achizitiile se realizeaza pe atelieraxd.ro.', [
    ['Scopul site-ului', 'Site informativ despre pantaloni cu snur lung, ghiduri, articole, galerie si link-uri catre magazinul Atelier AXD.'],
    ['Proprietarul', `${company.name}, CUI ${company.cui}, sediu ${company.address}.`],
    ['Utilizarea site-ului', 'Este permisa pentru uz personal si non-comercial. Utilizarea abuziva, scraping-ul si copierea masiva sunt interzise.'],
    ['Proprietate intelectuala', `Textele, imaginile si designul apartin ${company.name} sau sunt folosite cu permisiune. Copierea fara acord este interzisa.`],
    ['Link-uri externe', 'Site-ul contine link-uri spre atelieraxd.ro. Nu suntem responsabili pentru eventuale schimbari pe site-uri externe.'],
    ['Excluderea raspunderii', 'Informatia este oferita ca atare. Depunem eforturi pentru actualizare, dar nu garantam completitudinea permanenta.'],
    ['Legea aplicabila', 'Se aplica legislatia romana, iar litigiile se solutioneaza de instantele competente din Romania.'],
    ['Data ultimei actualizari', updated],
  ]),
];

const landingPages = [
  page('pantaloni-cu-siret-lung', 'Pantaloni cu siret lung | Ghid vizual urban', 'Ghid despre pantaloni cu siret lung: ce inseamna, cum se diferentiaza de snur lung, modele negre, scurte si outfituri urbane.', 'Pantaloni cu siret lung', 'Pantalonii cu siret lung sunt cautati de multi utilizatori pentru acelasi detaliu vizibil numit corect snur lung: capetele albe sau contrastante lasate in fata, care regleaza talia si dau tinutei un accent urban clar.', [
    ['Siret lung sau snur lung?', 'In limbajul de zi cu zi, oamenii spun des pantaloni cu siret lung, mai ales cand vad capetele albe lungi in fata. In descrierile tehnice, termenul folosit este snur lung. Pagina aceasta acopera ambele cautari ca utilizatorul sa gaseasca exact tipul de pantalon vazut in imagini.'],
    ['De ce este un detaliu puternic in imagini', 'Siretul lung creeaza contrast vertical pe pantaloni negri, bleumarin, maro sau gri. In poze, acest detaliu se vede imediat si ajuta utilizatorul sa diferentieze modelul fata de joggeri simpli sau pantaloni de trening clasici.'],
    ['Modele potrivite', 'Variante cautate variante sunt pantalonii negri cu siret lung, pantalonii scurti cu siret lung pentru vara si modelele baggy cu talie elastica. Fiecare intentie merita pagina proprie, pentru ca utilizatorul cauta alta imagine si alt context de purtare.'],
    ['Cum ii porti', 'Pentru o tinuta curata, poarta pantalonii cu tricou alb oversized, tricou negru simplu sau hanorac scurt. Lasa siretul sa cada natural si evita imprimeurile mari in zona taliei, ca detaliul central sa ramana vizibil.'],
    ['Legaturi utile', 'Continua cu pagina pentru pantaloni negri cu siret lung, ghidul pentru pantaloni scurti cu siret lung si comparatia dintre siret lung si snur lung. Astfel, alegi rapid termenul si modelul potrivit pentru cautarea ta.'],
  ], 'pantaloni-cu-snur-lung-negri-produs-unisex.webp'),
  page('pantaloni-negri-cu-siret-lung', 'Pantaloni negri cu siret lung | Outfituri si poze', 'Pantaloni negri cu siret lung pentru tinute urbane: imagini, styling cu tricou alb, croieli baggy si variante unisex.', 'Pantaloni negri cu siret lung', 'Pantalonii negri cu siret lung sunt cei mai usor de recunoscut in imagini: materialul inchis scoate in evidenta siretul alb, iar croiala larga duce rapid tinuta in zona moda urbana.', [
    ['Intentia cautarii', 'Cine cauta pantaloni negri cu siret lung vrea de obicei o imagine clara cu contrast alb-negru, nu un text generic despre pantaloni. De aceea pagina pune accent pe croiala, culoare, siret vizibil si combinatii simple cu tricou alb sau negru.'],
    ['Ce imagini functioneaza', 'Fotografiile frontale de produs arata cel mai bine siretul lung, iar pozele cu model masculin sau feminin explica proportia reala. O descriere buna include culoarea, siretul lung si croiala, fara repetitii inutile.'],
    ['Baggy, oversized sau drepti', 'Modelele baggy sunt mai vizibile, cele oversized au volum mai mare, iar pantalonii drepti sunt mai usor de purtat zilnic. Toate pot functiona cu siret lung daca talia ramane stabila si capetele cad curat.'],
    ['Tinuta recomandata', 'Cea mai simpla combinatie este tricou alb oversized, pantaloni negri cu siret lung si sneakers albi. Pentru un look mai inchis, tricoul negru simplu pastreaza tinuta minimalista si lasa siretul sa fie accentul principal.'],
    ['Unde continui', 'Pentru context mai larg, intra pe pagina principala de pantaloni cu siret lung, apoi pe ghidul de pantaloni baggy negri si pe galeria vizuala cu pantaloni cu snur lung.'],
  ], 'pantaloni-cu-snur-lung-negri-barbati-outfit.webp'),
  page('pantaloni-scurti-cu-siret-lung', 'Pantaloni scurti cu siret lung | Vara si streetwear', 'Ghid despre pantaloni scurti cu siret lung: modele negre, gri, bumbac, fermoare, tricou alb si outfituri de vara.', 'Pantaloni scurti cu siret lung', 'Pantalonii scurti cu siret lung duc acelasi accent urban intr-o forma de vara: talie elastica, capete vizibile in fata si croiala lejera pentru miscare.', [
    ['De ce merita pagina separata', 'Cautarea pentru pantaloni scurti cu siret lung are intentie diferita fata de pantalonii lungi. Utilizatorul vrea vara, libertate de miscare si imagini cu lungime deasupra genunchiului, nu ghid general despre croieli lungi.'],
    ['Negru, gri sau fermoare', 'Modelele negre sunt cele mai versatile, iar cele gri cu fermoare atrag atentia prin contrastul dintre material, siret si detaliile frontale. Fermoarele adauga directie vizuala fara imprimeuri mari.'],
    ['Cum ii porti vara', 'Tricoul alb basic este varianta cea mai curata: lumineaza partea de sus si lasa pantalonii negri sau gri cu siret lung sa fie piesa principala. Sneakersii albi completeaza contrastul fara sa incarce tinuta.'],
    ['Pentru barbati si femei', 'Croiala scurta cu siret lung poate fi purtata unisex daca talia sta bine si lungimea este aleasa dupa confort. Modelele largi arata relaxat, iar snurul/siretul lung pastreaza identitatea urbana.'],
    ['Pagini conexe', 'Vezi si pagina de pantaloni negri cu siret lung, ghidul pentru pantaloni cu snur scurti si articolul despre pantaloni cu fermoare si snur lung.'],
  ], 'pantaloni-scurti-cu-snur-lung-negri-barbati.webp'),
  page('pantaloni-cu-siret-lung-barbati', 'Pantaloni cu siret lung barbati | Ghid marimi si fit', 'Pantaloni cu siret lung barbati: cum alegi fitul, croiala, lungimea, outfitul cu tricou alb si modelele negre baggy.', 'Pantaloni cu siret lung barbati', 'Pentru barbati, pantalonii cu siret lung functioneaza cel mai bine in croieli largi, baggy sau loose fit, unde talia elastica ramane comoda si detaliul frontal se vede clar.', [
    ['Fit potrivit pentru barbati', 'Alege talie stabila, material cu greutate medie si lungime care nu strange la glezna. Daca pantalonul este foarte larg, partea de sus trebuie sa fie simpla: tricou alb, tricou negru sau hanorac scurt.'],
    ['De ce negrul se vede bine', 'Pe pantaloni negri, siretul alb lung se vede cel mai bine. Aceasta combinatie este usor de citit in poze, mai ales cand imaginea este clara si detaliile produsului sunt bine incadrate.'],
    ['Siret lung, snur lung si cautari reale', 'Pagina foloseste ambele formulari pentru ca utilizatorii cauta diferit acelasi produs. Snur lung este termenul recomandat in descrieri, iar siret lung acopera limbajul popular folosit cand oamenii descriu ce vad in poza.'],
    ['Outfit simplu', 'Tricou alb oversized, pantaloni negri cu siret lung si sneakers albi este combinatia de baza. Pentru seara, poti schimba tricoul cu hanorac negru sau jacheta scurta.'],
    ['Urmatorul pas', 'Compara cu pagina de pantaloni negri cu siret lung si cu ghidul de marimi pentru croieli relaxate ca sa alegi lungimea si volumul corect.'],
  ], 'pantaloni-cu-snur-lung-negri-cu-pliuri-barbati.webp'),
  page('tricou-gri-pantaloni-albi-siret-lung', 'Tricou gri cu pantaloni albi cu siret lung', 'Outfit unisex cu tricou gri oversized si pantaloni scurti albi cu siret lung: contrast soft, tinuta de vara si styling urban curat.', 'Tricou gri cu pantaloni albi cu siret lung', 'Tricoul gri oversized si pantalonii scurti albi cu siret lung creeaza o tinuta de vara luminoasa, unisex si usor de citit in imagini: sus neutru, jos curat, cu siretul alb vizibil ca detaliu central.', [
    ['Intentia paginii', 'Aceasta pagina nu este o categorie de tricouri, ci un ghid de outfit pentru pantaloni scurti albi cu siret lung. Imaginea ajuta clusterul vizual pentru cautari precum pantaloni albi cu siret lung, pantaloni scurti cu snur lung si tinuta gri cu pantaloni albi.'],
    ['De ce functioneaza gri cu alb', 'Griul deschis este mai moale decat negrul si pastreaza tinuta curata, fara contrast dur. Pantalonii albi scurti lumineaza partea de jos, iar siretul lung ramane vizibil prin cadere si pozitie, chiar daca este ton pe ton.'],
    ['Cum folosim imaginea', 'Descrierea imaginii trebuie sa spuna exact ce se vede: tricou gri, pantaloni scurti albi, siret lung si tinuta unisex. Aceasta precizie este mai utila decat repetarea fortata a aceleiasi expresii.'],
    ['Styling recomandat', 'Pastreaza sneakers albi si evita imprimeurile mari. Daca tricoul este oversized, pantalonii scurti trebuie sa ramana vizibili, iar siretul sa cada natural in fata pentru a mentine identitatea outfitului.'],
    ['Pagini conexe', 'Pentru intentia principala mergi la pantaloni scurti cu siret lung. Pentru termenul general, foloseste pantaloni cu siret lung. Pentru explicatia termenilor, citeste siret lung vs snur lung.'],
  ], 'tricou-gri-pantaloni-albi-siret-lung-outfit.png'),
  page('set-alb-pantaloni-scurti-siret-lung', 'Set alb cu pantaloni scurti cu siret lung', 'Outfit all white cu tricou alb oversized, pantaloni scurti albi cu siret lung si sneakers albi pentru tinute unisex de vara.', 'Set alb cu pantaloni scurti cu siret lung', 'Setul alb cu tricou oversized si pantaloni scurti cu siret lung este o tinuta de vara foarte curata vizual: aceeasi culoare sus-jos, volum relaxat si siretul lasat in fata ca detaliu central.', [
    ['Intentia paginii', 'Pagina raspunde celor care cauta outfit all white, pantaloni scurti albi cu siret lung si set alb casual. Arata o combinatie concreta pentru vara, usor de inteles din prima imagine.'],
    ['De ce merge all white', 'Tinuta alba arata curat in poze si scoate in evidenta forma pantalonilor prin umbre, tiv si caderea siretului. Pentru utilizator, imaginea transmite rapid confort si simplitate.'],
    ['Cum pastrezi siretul vizibil', 'Cand pantalonii si siretul sunt albe, vizibilitatea vine din pozitie si textura, nu din contrast. De aceea conteaza ca tricoul sa nu acopere complet talia si ca siretul sa cada drept in fata.'],
    ['Pentru barbati si femei', 'Croiala oversized face setul usor de purtat unisex. Diferenta se face prin marime si lungimea tricoului, nu printr-o separare stricta intre modele de barbati si femei.'],
    ['Pagini conexe', 'Continua cu pantaloni scurti cu siret lung, tricou gri cu pantaloni albi cu siret lung si pagina siret lung vs snur lung pentru diferenta de termeni.'],
  ], 'set-alb-pantaloni-scurti-siret-lung-outfit.png'),
  page('tricou-bej-pantaloni-albi-siret-lung', 'Tricou bej cu pantaloni albi cu siret lung', 'Tinuta soft cu tricou bej oversized si pantaloni scurti albi cu siret lung: paleta neutra, vara, stil urban minimalist.', 'Tricou bej cu pantaloni albi cu siret lung', 'Tricoul bej oversized si pantalonii scurti albi cu siret lung creeaza o tinuta neutra, calda si usor de purtat vara. Este o varianta mai soft decat contrastul alb-negru, dar pastreaza detaliul siretului vizibil.', [
    ['Intentia paginii', 'Pagina acopera zona de tinute neutre: tricou bej, pantaloni albi, siret lung si outfit casual unisex. Este o pagina de inspiratie vizuala, nu o pagina comerciala pentru tricouri.'],
    ['De ce bej cu alb', 'Bejul reduce contrastul si face tinuta sa para mai calda. Pantalonii albi scurti raman piesa luminoasa, iar siretul lung mentine legatura cu clusterul principal de pantaloni cu siret lung.'],
    ['Cum o porti', 'Merg sneakers albi, sosete albe si accesorii minime. Daca tricoul este foarte lung, lasa partea de sus usor ridicata sau alege o marime care nu acopera complet siretul.'],
    ['Descrierea imaginii', 'Textul descriptiv spune exact ce include tinuta: tricou bej, pantaloni scurti albi, siret lung si context unisex. Aceasta precizie este mai utila decat repetarea excesiva a expresiei pantaloni cu siret lung.'],
    ['Pagini conexe', 'Vezi setul alb cu pantaloni scurti cu siret lung si pagina principala de pantaloni scurti cu siret lung pentru intentia de vara.'],
  ], 'tricou-bej-pantaloni-albi-siret-lung-outfit.png'),
  page('tricou-verde-armata-pantaloni-siret-lung', 'Tricou verde armata pentru pantaloni cu siret lung', 'Cum combini un tricou verde armata simplu cu pantaloni cu siret lung: tinute neutre, negru, alb, bej si styling urban.', 'Tricou verde armata pentru pantaloni cu siret lung', 'Tricoul verde armata este o piesa neutra care merge bine cu pantaloni negri, albi sau bej cu siret lung. Culoarea adauga profunzime fara sa concureze detaliul central al pantalonilor.', [
    ['De ce verde armata', 'Verdele armata functioneaza ca neutru urban: este mai interesant decat griul, dar mai usor de combinat decat o culoare puternica. Cu pantaloni cu siret lung, pastreaza tinuta simpla si echilibrata.'],
    ['Cu pantaloni negri', 'Cea mai directa combinatie este tricou verde armata cu pantaloni negri cu siret lung. Siretul alb ramane contrastul principal, iar tricoul adauga culoare fara imprimeuri.'],
    ['Cu pantaloni albi sau bej', 'Pentru vara, verdele armata merge cu pantaloni scurti albi cu siret lung sau cu variante bej. Tinuta devine mai luminoasa si mai relaxata, dar ramane in zona moda urbana.'],
    ['Imagine de produs', 'Poza frontala cu tricou verde armata este folosita ca reper de culoare si material. Pagina ramane despre combinarea lui cu pantaloni cu siret lung, nu despre vanzarea tricoului ca produs separat.'],
    ['Pagini conexe', 'Continua cu pantaloni negri cu siret lung, pantaloni cu siret lung barbati si ghidul despre siret lung vs snur lung.'],
  ], 'tricou-verde-armata-pantaloni-siret-lung-produs.png'),
  page('tricou-verde-armata-pantaloni-albi-siret-lung', 'Tricou verde armata cu pantaloni albi cu siret lung', 'Outfit unisex cu tricou verde armata oversized si pantaloni scurti albi cu siret lung, pentru vara si stil urban minimalist.', 'Tricou verde armata cu pantaloni albi cu siret lung', 'Tricoul verde armata oversized si pantalonii scurti albi cu siret lung creeaza un contrast urban curat: culoare inchisa sus, alb luminos jos si siret vizibil in fata.', [
    ['Intentia paginii', 'Pagina raspunde cautarilor de outfit cu tricou verde armata, pantaloni albi scurti si siret lung. Intentia ramane vizuala si de styling, nu categorie comerciala de tricouri.'],
    ['De ce merge verde armata cu alb', 'Verdele armata adauga profunzime fara sa fie agresiv, iar pantalonii albi pastreaza tinuta luminoasa pentru vara. Siretul lung ramane reperul central care leaga pagina de clusterul principal.'],
    ['Cum o porti', 'Pastreaza sneakers albi si croiala relaxata. Daca tricoul este oversized, ai grija ca talia pantalonilor si siretul sa ramana vizibile in fata.'],
    ['Descrierea imaginii', 'Imaginea trebuie descrisa concret: tricou verde armata, pantaloni scurti albi, siret lung, tinuta unisex. Asa utilizatorul intelege rapid piesele, culorile si proportiile.'],
    ['Pagini conexe', 'Continua cu tricou verde armata pentru pantaloni cu siret lung, pantaloni scurti cu siret lung si pagina generala de pantaloni cu siret lung.'],
  ], 'tricou-verde-armata-pantaloni-albi-siret-lung-outfit.png'),
  page('tricou-bleumarin-pantaloni-albi-siret-lung', 'Tricou bleumarin cu pantaloni albi cu siret lung', 'Tinuta cu tricou bleumarin oversized si pantaloni scurti albi cu siret lung: contrast navy-alb, unisex, casual urban.', 'Tricou bleumarin cu pantaloni albi cu siret lung', 'Tricoul bleumarin oversized si pantalonii scurti albi cu siret lung formeaza o tinuta navy-alb foarte clara in imagini, potrivita pentru vara si pentru outfituri unisex simple.', [
    ['Intentia paginii', 'Aceasta pagina acopera cautari de tip tricou bleumarin cu pantaloni albi, set navy-alb si pantaloni scurti albi cu siret lung. Este o pagina de inspiratie vizuala in clusterul siret lung.'],
    ['De ce bleumarin cu alb', 'Bleumarinul ofera contrast puternic, dar mai elegant decat negrul. Pantalonii albi scurti si siretul lung creeaza un centru vizual curat in partea de jos.'],
    ['Cum o porti', 'Tinuta functioneaza cu sneakers albi, sosete albe si accesorii minime. Evita imprimeurile mari pentru ca bleumarinul si siretul lung sa ramana elementele principale.'],
    ['Fotografie cu tinuta completa', 'Fotografia cu model purtand tinuta completa este mai utila decat o poza de produs izolata, pentru ca arata proportia dintre tricou oversized, pantaloni scurti si siretul lung.'],
    ['Pagini conexe', 'Vezi si setul alb cu pantaloni scurti cu siret lung, tricou verde armata cu pantaloni albi si ghidul de pantaloni scurti cu siret lung.'],
  ], 'tricou-bleumarin-pantaloni-albi-siret-lung-outfit.png'),
  page('tricou-gri-simplu-pantaloni-siret-lung', 'Tricou gri simplu pentru pantaloni cu siret lung', 'Tricou gri simplu din bumbac ca piesa neutra pentru pantaloni cu siret lung: combinatii cu negru, alb, bej si bleumarin.', 'Tricou gri simplu pentru pantaloni cu siret lung', 'Tricoul gri simplu este o piesa neutra care sustine pantalonii cu siret lung fara sa concureze detaliul vizual. Merge cu pantaloni negri, albi, bej sau bleumarin in tinute casual urbane.', [
    ['Rolul tricoului gri', 'Griul simplu este util cand vrei ca pantalonii si siretul lung sa ramana punctul central. Nu creeaza contrast dur si lasa croiala pantalonilor sa conduca tinuta.'],
    ['Cu pantaloni negri', 'Cu pantaloni negri cu siret lung, tricoul gri pastreaza tinuta monocroma si mai soft decat all black. Siretul alb ramane elementul vizibil.'],
    ['Cu pantaloni albi', 'Cu pantaloni scurti albi cu siret lung, tricoul gri creeaza o tinuta luminoasa si usor de purtat vara, mai discreta decat bleumarinul sau verdele armata.'],
    ['Imagine de produs', 'Poza frontala de produs este folosita ca reper pentru culoare si croiala. Pagina ramane despre combinatii cu pantaloni cu siret lung, nu despre tricou ca produs principal.'],
    ['Pagini conexe', 'Compara cu tricou gri cu pantaloni albi cu siret lung, set alb cu pantaloni scurti si pantaloni negri cu siret lung.'],
  ], 'tricou-gri-simplu-pantaloni-siret-lung-produs.png'),
  page('tricou-tie-dye-pantaloni-albi-siret-lung', 'Tricou tie dye cu pantaloni albi cu siret lung', 'Outfit unisex cu tricou tie dye gri-albastru si pantaloni scurti albi cu siret lung: tinuta statement, vara si stil urban.', 'Tricou tie dye cu pantaloni albi cu siret lung', 'Tricoul tie dye gri-albastru si pantalonii scurti albi cu siret lung creeaza o tinuta statement: partea de sus atrage privirea, iar pantalonii albi pastreaza outfitul curat si lasa siretul vizibil in fata.', [
    ['Intentia paginii', 'Pagina acopera o intentie vizuala diferita fata de tricourile basic: utilizatorul cauta inspiratie pentru un top tie dye purtat cu pantaloni scurti albi si siret lung. Astfel evitam canibalizarea cu paginile de tricouri simple.'],
    ['De ce merge tie dye cu alb', 'Modelul tie dye are deja textura vizuala puternica, asa ca pantalonii albi scurti echilibreaza tinuta. Siretul lung adauga detaliu urban fara sa incarce suplimentar partea de sus.'],
    ['Cum o porti', 'Pastreaza sneakers albi, sosete simple si accesorii minime. Daca tricoul este oversized, lasa talia pantalonilor vizibila in zona centrala pentru ca siretul sa ramana reperul outfitului.'],
    ['Imagine cu model', 'Imaginea completa cu model este potrivita pentru inspiratie vizuala: arata proportia tricoului tie dye, lungimea pantalonilor scurti si pozitia siretului. Descrierea mentioneaza concret piesele si culorile.'],
    ['Pagini conexe', 'Vezi si setul alb cu pantaloni scurti cu siret lung, tricou bleumarin cu pantaloni albi si pagina principala de pantaloni scurti cu siret lung.'],
  ], 'tricou-tie-dye-pantaloni-albi-siret-lung-outfit.png'),
  page('tricou-tie-dye-pantaloni-siret-lung', 'Tricou tie dye gri albastru pentru pantaloni cu siret lung', 'Cum combini un tricou tie dye gri-albastru cu pantaloni cu siret lung: alb, negru, scurt, urban si unisex.', 'Tricou tie dye gri albastru pentru pantaloni cu siret lung', 'Tricoul tie dye gri-albastru este o piesa vizuala puternica, potrivita langa pantaloni cu siret lung atunci cand restul tinutei ramane simplu: pantaloni albi, negri sau gri si sneakers curati.', [
    ['Rolul tricoului tie dye', 'Tie dye-ul nu trebuie sa concureze cu pantalonii, ci sa ofere textura in partea de sus. Pantalonii cu siret lung raman ancora tinutei daca sunt alesi in culori simple.'],
    ['Cu pantaloni albi', 'Cea mai luminoasa combinatie este tricou tie dye cu pantaloni scurti albi cu siret lung. Albul calmeaza imprimeul si pastreaza tinuta de vara curata.'],
    ['Cu pantaloni negri', 'Cu pantaloni negri cu siret lung, tricoul tie dye capata contrast mai puternic. Este varianta mai streetwear, buna pentru outfituri in care partea de sus trebuie sa fie piesa principala.'],
    ['Imagine de produs', 'Poza izolata cu tricoul tie dye ajuta la identificarea modelului si a culorii. Pagina ramane despre combinarea lui cu pantaloni cu siret lung, nu despre vanzarea tricoului separat.'],
    ['Pagini conexe', 'Continua cu tricou tie dye cu pantaloni albi cu siret lung, pantaloni negri cu siret lung si blogul siret lung vs snur lung.'],
  ], 'tricou-tie-dye-gri-albastru-pantaloni-siret-lung-produs.png'),
  page('pantaloni-baggy-negri', 'Pantaloni baggy negri | Ghid urban 2026', 'Ghid despre pantaloni baggy negri: proportii, sneakers potriviti, outfituri monochrome, materiale si recomandari Atelier AXD.', 'Pantaloni baggy negri pentru outfituri urbane', 'Pantalonii baggy negri sunt alegerea cea mai versatila pentru moda urbana: alungesc vizual silueta, merg cu sneakers albi sau negri si sustin outfituri minimaliste fara sa para rigide.', baseSections, 'pantaloni-cu-snur-lung-negri-produs-unisex.webp'),
  page('pantaloni-oversized', 'Pantaloni oversized | Croieli relaxate si styling', 'Afla cum alegi pantaloni oversized, cum ii porti fara volum excesiv si ce piese completeaza un outfit urban fit.', 'Pantaloni oversized cu proportii curate', 'Pantalonii oversized functioneaza cand volumul este intentionat: talie stabila, material cu cadere buna si partea superioara echilibrata prin tricou dens sau hoodie scurt.', baseSections, 'pantaloni-cu-snur-lung-maro-baggy-produs.webp'),
  page('moda-urbana-barbati', 'Moda urbana barbati | Pantaloni largi si outfituri 2026', 'Ghid moda urbana barbati cu pantaloni loose fit, joggeri oversized, hoodie, sneakers si layering urban.', 'Moda urbana barbati construit pe croieli relaxate', 'Stilul de moda urbana pentru barbati in 2026 pleaca de la pantaloni loose fit, sneakers cu prezenta si piese simple care pastreaza silueta moderna.', baseSections, 'pantaloni-cu-snur-lung-negri-barbati-outfit.webp'),
  page('moda-urbana-femei', 'Moda urbana femei | Outfituri oversized si urban fit', 'Idei moda urbana femei cu pantaloni baggy, topuri simple, jachete scurte, sneakers si outfituri monocrome.', 'Moda urbana femei cu volum controlat', 'Stilul de moda urbana pentru femei arata cel mai bine cand pantalonul larg este echilibrat cu topuri compacte, tricouri curate si incaltaminte care sustine vizual croiala.', baseSections, 'pantaloni-cu-snur-lung-negri-femei-outfit.webp'),
  page('baggy-cu-snur', 'Baggy cu snur | Fit relaxat si detaliu vizual', 'Ghid baggy cu snur pentru tinute urbane: cum alegi lungimea, materialul, talia si pant stacking.', 'Baggy cu snur pentru tinute relaxate', 'Modelele baggy cu snur adauga miscare in zona taliei si transforma un pantalon casual larg intr-o piesa moda urbana recognoscibila.', baseSections, 'pantaloni-cu-snur-lung-maro-baggy-barbati.webp'),
  page('pantaloni-loose-fit', 'Pantaloni loose fit | Ghid de croiala relaxata', 'Ce inseamna loose fit, cum se diferentiaza de baggy si oversized, cu exemple de outfituri si recomandari de marime.', 'Pantaloni loose fit pentru confort zilnic', 'Loose fit inseamna volum moderat, suficient pentru miscare si confort, dar mai usor de purtat decat o croiala baggy extrema.', baseSections, 'pantaloni-cu-snur-lung-gri-bej-produs.webp'),
  page('pantaloni-urban-fit', 'Pantaloni urban fit | Ghid styling 2026', 'Pantaloni urban fit pentru tinute minimal moda urbana: culori, materiale, sneakers, layering si recomandari de sezon.', 'Pantaloni urban fit pentru garderoba moderna', 'Urban fit inseamna croiala relaxata, utila in oras, suficient de clara pentru tinute minimaliste si suficient de comoda pentru purtare zilnica.', baseSections, 'pantaloni-cu-snur-lung-bleumarin-produs-unisex.webp'),
  page('despre-atelier-axd', 'Despre Atelier AXD | Brand romanesc moda urbana', 'Povestea Atelier AXD, experienta brandului, filosofia de styling si legatura cu publicatia pantalonicusnurlung.ro.', 'Despre Atelier AXD', 'Atelier AXD construieste un ecosistem moda urbana romanesc in jurul croielilor relaxate, al confortului zilnic si al unei estetici urbane clare.', baseSections, 'og-pantaloni-cu-snur-lung.jpg'),
  page('cum-produsem', 'Cum producem si alegem fiturile | Atelier AXD', 'Proces editorial despre materiale, selectie de croieli, verificarea proportiilor si filosofia Atelier AXD.', 'Cum alegem materialele si croielile', 'Un produs bun incepe cu materialul, continua cu proportia si se termina cu felul in care se misca in tinute reale.', baseSections, 'detaliu-snur-lung-pantaloni-oversized-dama.png'),
  page('ghid-marimi', 'Ghid marimi moda urbana | Fit finder rapid', 'Ghid de marimi pentru pantaloni baggy, loose fit si oversized: talie, lungime, stacking si recomandare dupa inaltime.', 'Ghid marimi pentru croieli relaxate', 'Marimea corecta se alege dupa talie, lungime si nivelul de volum dorit, nu doar dupa litera de pe eticheta.', baseSections, 'pantaloni-cu-snur-lung-negri-cu-pliuri-produs.webp'),
];

pages.push(...landingPages);

const rawBlogPosts = withPremiumEditorialImages([
  // Programmatic arrays removed to reduce thin pages and focus on pillar content
  page('blog/siret-lung-vs-snur-lung', 'Siret lung vs snur lung la pantaloni', 'Explicatie clara intre siret lung si snur lung la pantaloni, cu exemple de cautari, imagini si recomandari utile pentru utilizatori.', 'Siret lung vs snur lung la pantaloni', 'Siret lung si snur lung sunt folosite des pentru acelasi detaliu vizibil la talia pantalonilor. Snur lung este termenul mai corect, iar siret lung este varianta populara pe care multi utilizatori o tasteaza dupa ce vad poza.', [
    ['Diferenta de termen', 'Snurul este cordonul textil folosit la talia pantalonilor. Siretul este termenul asociat incaltamintei, dar in cautari oamenii il folosesc pentru orice cordon lung si vizibil. Merita explicate ambele formulari clar, fara formulari fortate sau confuze.'],
    ['Cum cauta oamenii', 'Utilizatorii pot scrie pantaloni cu siret lung, pantaloni negri cu siret alb, pantaloni cu snur lung sau pantaloni cu sireturi lungi. Toate descriu un detaliu vizual, iar pagina trebuie sa explice natural termenii.'],
    ['Cum optimizam imaginile', 'Pentru imagini, folosim nume de fisier, alt text si caption cu descriere concreta: culoare, croiala, siret/snur lung, barbati/femei/unisex si contextul tinutei. Evitam sa repetam exact aceeasi fraza pe toate pozele.'],
    ['Ce pagini sa folosesti', 'Pagina de pantaloni cu siret lung acopera termenul general. Pantaloni negri cu siret lung acopera culoarea principala. Pantaloni scurti cu siret lung acopera intentia de vara. Pagina de snur lung ramane pilonul principal.'],
    ['Concluzie', 'Nu trebuie aleasa o singura formulare. Folosim snur lung pentru autoritate si siret lung pentru limbaj real de cautare, cu pagini diferite ca sa reducem canibalizarea.'],
  ], 'detaliu-snur-lung-pantaloni-oversized-dama.png'),
  page('blog/pantaloni-snur-lung-outfit-idei', 'Tinute cu pantaloni cu snur lung in 2026', 'Idei de tinuta cu pantaloni cu snur lung pentru tinute casual, moda urbana, unisex si vara, fara intentie comerciala agresiva.', 'Tinute cu pantaloni cu snur lung in 2026', 'Tinutele echilibrate cu pantaloni cu snur lung pornesc de la proportii simple: pantaloni relaxati, top curat si incaltaminte urbana.', baseSections, 'outfit-casual-tricou-pantaloni-negri-snur-lung.png'),
  page('blog/cum-faci-nod-snur-pantaloni', 'Cum faci nod la snurul pantalonilor', 'Ghid practic: cum faci nod la snurul pantalonilor fara sa strangi excesiv si fara sa pierzi aspectul moda urbana.', 'Cum faci nod la snurul pantalonilor', 'Pentru pantalonii cu snur lung, nodul trebuie sa tina talia stabila, dar sa lase capetele vizibile. Cel mai simplu este nodul lejer dublu, centrat in fata.', baseSections, 'detaliu-snur-lung-pantaloni-oversized-dama.png'),
  page('blog/diferente-snur-scurt-lung', 'Diferente intre snur scurt si snur lung', 'Comparam snurul scurt cu snurul lung la pantaloni: functie, estetica, confort si potrivire in moda urbana.', 'Diferente intre snur scurt si snur lung', 'Snurul scurt este discret si functional; snurul lung este vizibil, editorial si mai asociat cu moda urbana contemporan.', baseSections, 'pantaloni-barbati-largi-negri-snur-casual.jpg'),
  page('blog/trenduri-urbane-pantaloni-2026', 'Trenduri urbane pentru pantaloni in 2026', 'Trenduri 2026 pentru pantaloni in moda urbana: croieli baggy, croiala oversized, snur vizibil, materiale dense si tinute care raman actuale in 2027.', 'Trenduri urbane pentru pantaloni in 2026', 'In 2026, pantalonii cu snur lung raman relevanti prin croieli largi, culori neutre, materiale dense si stilizare unisex. Directia are sanse bune sa ramana actuala si in 2027.', baseSections, 'moda-urbana-pantaloni-unisex-cu-snur-lung.png'),
  page('blog/pantaloni-snur-lung-vara', 'Pantaloni cu snur lung vara | Ghid confort', 'Cum porti pantaloni cu snur lung vara: materiale usoare, croieli lejere, variante scurte si combinatii respirabile.', 'Pantaloni cu snur lung vara', 'Vara, pantalonii cu snur lung se poarta in bumbac mai usor, cu tricouri simple si croieli care lasa aerul sa circule.', baseSections, 'pantaloni-scurti-negri-cu-snur-lung.jpg'),
  page('blog/pantaloni-cu-fermoare-snur-lung', 'Pantaloni cu fermoare si snur lung | Ghid outfit', 'Ghid despre pantaloni cu fermoare si snur lung: croiala, material, contrast, tinute cu tricou oversized si sneakers.', 'Pantaloni cu fermoare si snur lung', 'Pantalonii cu fermoare si snur lung sunt o varianta mai vizibila a pantalonilor casual: snurul alb creeaza contrast central, iar fermoarele negre traseaza linii pe picior.', baseSections, 'pantaloni-scurti-gri-100-bumbac-fermoar.png'),
  page('blog/pantaloni-scurti-gri-fermoare', 'Pantaloni scurti gri cu fermoare | 100% bumbac', 'Pantaloni scurti gri cu fermoare negre, snur lung alb, talie elastica si styling casual urban pentru vara.', 'Pantaloni scurti gri cu fermoare', 'Modelul scurt gri cu fermoare functioneaza bine vara pentru ca pastreaza confortul pantalonului scurt, dar adauga detaliu vizual prin fermoarele frontale si snurul lung.', baseSections, 'pantaloni-scurti-gri-100-bumbac-fermoar.png'),
  page('blog/cum-porti-pantaloni-baggy-2026', 'Cum porti pantaloni baggy in 2026', 'Ghid complet pentru pantaloni baggy in 2026: proportii, incaltaminte, culori, greseli si tinute urbane.', 'Cum porti pantaloni baggy in 2026', 'Pantalonii baggy se poarta in 2026 cu volum controlat, sneakers potriviti si piese simple care lasa croiala sa conduca outfitul.', baseSections, 'pantaloni-cu-snur-lung-maro-baggy-barbati.webp'),
  page('blog/baggy-vs-wide-leg', 'Baggy vs wide leg | Diferente clare', 'Comparam baggy vs wide leg: volum, cadere, pant stacking, pentru cine se potriveste si exemple de tinute.', 'Baggy vs wide leg', 'Baggy are volum relaxat si estetica moda urbana, in timp ce wide leg are linie mai uniforma si aspect mai curat.', baseSections, 'pantaloni-cu-snur-lung-gri-bej-produs.webp'),
  page('blog/incaltaminte-pantaloni-oversized', 'Ce incaltaminte merge cu pantaloni oversized', 'Sneakers, ghete si siluete de pantofi care se potrivesc cu pantaloni oversized si loose fit.', 'Ce incaltaminte merge cu pantaloni oversized', 'Incaltamintea potrivita pentru pantaloni oversized are volum mediu, talpa clara si o forma care nu dispare sub tiv.', baseSections, 'pantaloni-cu-snur-lung-negri-barbati-outfit.webp'),
  page('blog/outfituri-moda-urbana', 'Outfituri moda urbana cu proportii curate', 'Outfituri moda urbana pentru 2026: monocrom, minimal, skater, Japanese moda urbana si urban fit romanesc.', 'Outfituri moda urbana cu proportii curate', 'Un outfit moda urbana reusit are o idee clara: volum, culoare, textura sau layering, nu toate simultan.', baseSections, 'moda-urbana-pantaloni-unisex-cu-snur-lung.png'),
  page('blog/cum-alegi-marimea-corecta', 'Cum alegi marimea corecta la pantaloni largi', 'Ghid de marime pentru pantaloni baggy, oversized si loose fit: talie, lungime, body type si pant stacking.', 'Cum alegi marimea corecta', 'Marimea corecta la pantaloni largi se decide dupa talie si lungime, apoi dupa cat de mult volum vrei in silueta.', baseSections, 'pantaloni-cu-snur-lung-negri-cu-pliuri-produs.webp'),
  page('blog/outfituri-monocrome-moda-urbana', 'Outfituri monocrome moda urbana', 'Cum construiesti outfituri monocrome moda urbana: all black, ton pe ton, contrast subtil si texturi.', 'Outfituri monocrome moda urbana', 'Outfiturile monocrome functioneaza cand textura si proportia inlocuiesc contrastul puternic de culoare.', baseSections, 'pantaloni-cu-snur-lung-negri-produs-unisex.webp'),
  page('blog/moda-urbana-minimalist', 'Moda urbana minimalist | Ghid de stil', 'Moda urbana minimalist cu pantaloni loose fit, tricouri grele, sneakers simpli si palete neutre.', 'Moda urbana minimalist', 'Stilul minimalist pastreaza liniile curate, culorile putine si croielile suficient de interesante ca sa nu para basic.', baseSections, 'pantaloni-cu-snur-lung-bleumarin-produs-unisex.webp'),
  page('blog/baggy-daca-esti-scund', 'Cum porti baggy daca esti scund', 'Ghid pentru persoane scunde: pantaloni baggy, proportii, talie, sneakers si greseli de evitat.', 'Cum porti baggy daca esti scund', 'Daca esti scund, pantalonii baggy trebuie sa pastreze talia clara si tivul controlat, ca volumul sa nu scurteze vizual silueta.', baseSections, 'pantaloni-cu-snur-lung-bej-femei-outfit.webp'),
  page('blog/greseli-outfit-oversized', 'Greseli in outfituri oversized', 'Intrebari utile greseli in outfituri oversized: volum fara proportie, materiale slabe, culori haotice si pant stacking excesiv.', 'Greseli in outfituri oversized', 'Oversized nu inseamna haine prea mari, ci volum ales intentionat si echilibrat prin proportii.', baseSections, 'pantaloni-cu-snur-lung-maro-produs-unisex.webp'),
  page('blog/trenduri-moda-urbana-2026', 'Trenduri moda urbana 2026', 'Trenduri moda urbana 2026: baggy, loose fit, monochrome, influente japoneze, layering si materiale dense.', 'Trenduri moda urbana 2026', 'In 2026, moda urbana se muta spre croieli relaxate, palete mai curate si outfituri care pot fi purtate zilnic.', baseSections, 'tinuta-unisex-pantaloni-largi-snur-extra-lung.png'),
  ...summerFashionAuthorityBlogPosts2026,
  ...queryDrivenBlogPosts,
  ...visibleScheduledBlogPosts,
]);

function clusterOf(page: any) {
  return page.seoEngine?.cluster || page.slug.split('/')[1]?.split('-').slice(0, 2).join('-') || 'general';
}

function blogRelatedLinks(page: any, index: number, allPosts: any[]) {
  const cluster = clusterOf(page);
  const sameCluster = allPosts
    .filter((candidate) => candidate.slug !== page.slug && clusterOf(candidate) === cluster)
    .slice(0, 4)
    .map((candidate) => [`/${candidate.slug}/`, candidate.h1 || candidate.title]);
  const structural = [
    allPosts[index - 1] && [`/${allPosts[index - 1].slug}/`, allPosts[index - 1].h1 || allPosts[index - 1].title],
    allPosts[index + 1] && [`/${allPosts[index + 1].slug}/`, allPosts[index + 1].h1 || allPosts[index + 1].title],
    ['/pantaloni-cu-snur-lung/', 'Pantaloni cu snur lung'],
    ['/blog/', 'Toate ghidurile fashion'],
  ].filter(Boolean);
  const seen = new Set<string>();
  return [...sameCluster, ...structural].filter((item: any) => {
    if (seen.has(item[0])) return false;
    seen.add(item[0]);
    return item[0] !== `/${page.slug}/`;
  }).slice(0, 8);
}

export const blogPosts = rawBlogPosts.map((post, index, allPosts) => ({
  ...post,
  relatedLinks: Array.isArray((post as any).relatedLinks) && (post as any).relatedLinks.length > 0
    ? (post as any).relatedLinks
    : blogRelatedLinks(post, index, allPosts),
}));

export const allContentPages = [...pages, ...blogPosts];
