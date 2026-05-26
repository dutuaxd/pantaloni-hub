import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

type Section = [string, string];

type BlogImage = {
  file: string;
  alt: string;
  title?: string;
  role?: string;
  prompt?: string;
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  image: string;
  imageLimit?: number;
  images?: BlogImage[];
  sections?: Section[];
};

type SeoImageManifestEntry = {
  source: string;
  target: string;
  alt: string;
  title: string;
  slug: string;
  role: string;
};

const seoImageManifestPath = join(process.cwd(), 'public', 'images', 'blog-seo', 'manifest.json');
const seoImageManifest = new Map<string, SeoImageManifestEntry>();

const fallbackFiles = [
  'images/products/pantaloni-cu-snur-lung-negri-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-negri-barbati-outfit.webp',
  'images/products/pantaloni-cu-snur-lung-negri-femei-outfit.webp',
  'images/products/pantaloni-cu-snur-lung-bej-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-bleumarin-barbati-outfit.webp',
  'images/products/pantaloni-cu-snur-lung-maro-baggy-barbati.webp',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-bej-siret-lung-wide.jpg',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-bleumarin-siret-lung.jpg',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-largi-negri-snur-casual.jpg',
  'images/atelieraxd-long-tail/atelier-axd-outfit-masculin-pantaloni-wide-leg-maro.png',
];

function normalizeFile(file: string) {
  if (file.startsWith('images/')) return file;
  if (file.endsWith('.webp')) return `images/products/${file}`;
  return file.replace(/^\/+/, '');
}

function slugifyText(text: string, maxLength = 80) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, maxLength)
    .replace(/-+$/g, '');
}

function fileBaseName(file: string) {
  const name = file.split('/').pop() || 'imagine-blog';
  return name.replace(/\.[a-z0-9]+$/i, '');
}

function uniqueBlogFile(post: BlogPost, sourceFile: string, index: number) {
  const slug = post.slug.replace(/^blog\//, '');
  const cleanSlug = slugifyText(slug, 64) || 'blog';
  const cleanSource = slugifyText(fileBaseName(sourceFile), 36) || 'imagine';
  return `images/blog-seo/${cleanSlug}/${String(index + 1).padStart(2, '0')}-${cleanSource}.webp`;
}

function uniqueBlogHeroFile(post: BlogPost, sourceFile: string) {
  const slug = post.slug.replace(/^blog\//, '');
  const cleanSlug = slugifyText(slug, 64) || 'blog';
  const cleanSource = slugifyText(fileBaseName(sourceFile), 36) || 'imagine';
  return `images/blog-seo/${cleanSlug}/00-hero-${cleanSource}.webp`;
}

function registerSeoImage(post: BlogPost, sourceFile: string, targetFile: string, alt: string, title: string, role: string) {
  const normalizedSource = normalizeFile(sourceFile);
  const publicDir = join(process.cwd(), 'public');
  const sourcePath = join(publicDir, normalizedSource);
  if (!existsSync(sourcePath)) return normalizedSource;

  mkdirSync(dirname(join(publicDir, targetFile)), { recursive: true });
  seoImageManifest.set(targetFile, {
    source: normalizedSource,
    target: targetFile,
    alt,
    title,
    slug: post.slug,
    role,
  });
  mkdirSync(dirname(seoImageManifestPath), { recursive: true });
  writeFileSync(seoImageManifestPath, JSON.stringify([...seoImageManifest.values()], null, 2));
  return targetFile;
}

function seoImageFile(post: BlogPost, sourceFile: string, index: number, alt: string, title: string, role: string, isHero = false) {
  const normalizedSource = normalizeFile(sourceFile);
  const targetFile = isHero ? uniqueBlogHeroFile(post, normalizedSource) : uniqueBlogFile(post, normalizedSource, index);
  return registerSeoImage(post, normalizedSource, targetFile, alt, title, role);
}

function slugNumber(slug: string) {
  return [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function pickFallback(slug: string, index: number) {
  return fallbackFiles[(slugNumber(slug) + index) % fallbackFiles.length];
}

function uniqFiles(files: string[], slug: string) {
  const out: string[] = [];
  for (const file of files) {
    const normalized = normalizeFile(file);
    if (!out.includes(normalized)) out.push(normalized);
  }
  let cursor = 0;
  while (out.length < 4) {
    const file = pickFallback(slug, cursor++);
    if (!out.includes(file)) out.push(file);
  }
  return out.slice(0, 4);
}

function detectSubject(post: BlogPost) {
  const text = `${post.slug} ${post.title} ${post.h1} ${post.description} ${post.intro}`.toLowerCase();
  if (text.includes('rochii') || text.includes('rochie')) return 'rochie purtata de o femeie reala';
  if (text.includes('sandale')) return 'sandale reale purtate intr-o tinuta de vara';
  if (text.includes('fuste') || text.includes('fusta')) return 'fusta purtata de o femeie reala';
  if (text.includes('camasi') || text.includes('camasa')) return 'camasa lejera purtata intr-o tinuta reala';
  if (text.includes('genti') || text.includes('geanta')) return 'geanta mica reala purtata cu outfit complet';
  if (text.includes('ochelari')) return 'ochelari de soare reali purtati pe fata naturala';
  if (text.includes('tricou')) return 'tricou premium purtat cu pantaloni cu snur lung';
  if (text.includes('pantaloni scurti')) return 'pantaloni scurti cu snur lung purtati de persoana reala';
  return 'pantaloni cu snur lung purtati de persoana reala';
}

function detectContext(post: BlogPost) {
  const text = `${post.slug} ${post.title} ${post.h1} ${post.description} ${post.intro}`.toLowerCase();
  if (text.includes('nunta')) return 'nunta relaxata pe terasa, decor real de eveniment si lumina golden hour';
  if (text.includes('birou')) return 'birou modern vara, strada spre office si lumina naturala';
  if (text.includes('city-break') || text.includes('city break')) return 'city break european, strada pavata, cafenea si mers mult';
  if (text.includes('festival')) return 'festival de vara in aer liber, praf fin, apus si oameni reali in fundal';
  if (text.includes('botez') || text.includes('cununie')) return 'botez sau cununie civila de zi, terasa eleganta si lumina calda';
  if (text.includes('date')) return 'date pe terasa seara, masa discreta, lumina calda de interior-exterior';
  if (text.includes('mare') || text.includes('plaja') || text.includes('vacanta')) return 'vacanta la mare, promenada, terasa de plaja si lumina naturala';
  if (text.includes('concert')) return 'concert in aer liber, scena in fundal indepartat si lumina de seara';
  if (text.includes('zi de nastere')) return 'zi de nastere vara pe terasa, grup discret in fundal si lumina calda';
  if (text.includes('poze') || text.includes('instagram')) return 'strada urbana fotogenica, lumina buna pentru poze si fundal real';
  if (text.includes('avion') || text.includes('zbor')) return 'aeroport real si zona de imbarcare, lumina neutra de terminal';
  return 'oras real, terasa, strada sau magazin boutique, lumina naturala';
}

function promptFor(role: string, title: string, subject: string, context: string) {
  const common =
    'Fotografie fotorealista premium, verticala 4:5, fashion editorial realist, persoana reala sau obiect real dupa subiect, aparat profesional, imagine sharp si clara, texturi vizibile, fara text, fara logo, fara watermark, fara ilustratie, fara cartoon, fara vector, fara randare 3D, fara fundal generic AI, fara blur excesiv, fara corpuri deformate, fara fete deformate, fara maini gresite, fara haine topite.';
  if (role === 'hero') return `${common} Imagine hero pentru articolul "${title}", cu ${subject}. Fundal real: ${context}. Styling premium street style/lookbook, croiala vizibila, materiale naturale, incaltaminte si accesorii coerente.`;
  if (role === 'detaliu') return `${common} Close-up realist pentru articolul "${title}", accent pe material, croiala, cusaturi, cute naturale, snur sau siret, talie, accesorii sau incaltaminte relevante. Fundal real usor estompat, lumina calda sau naturala.`;
  if (role === 'context') return `${common} Cadru full outfit pentru articolul "${title}", cu ${subject} in context real: ${context}. Se vad proportiile tinutei, incaltamintea, miscarea naturala si atmosfera reala, editorial fashion credibil.`;
  return `${common} Imagine secundara diferita pentru articolul "${title}", cu alta lumina reala, alt unghi sau detaliu de variatie: accesoriu, incaltaminte, material sau situatie reala. Subiect: ${subject}. Context: ${context}.`;
}

function altFor(post: BlogPost, subject: string, role: string, index: number) {
  const h1 = stripAltNoise(post.h1 || post.title);
  const roleText: Record<string, string> = {
    hero: 'imagine principala',
    detaliu: 'detaliu de material si croiala',
    context: 'tinuta completa in context urban',
    variatie: 'variatie vizuala pentru inspiratie',
  };
  return `${subject} pentru ${h1}, ${roleText[role] || `imagine ${index + 1}`} SEO Atelier AXD`.slice(0, 155);
}

function stripAltNoise(text: string) {
  return text
    .replace(/\s*\|\s*Ghid Atelier AXD\s*$/i, '')
    .replace(/\s*\|\s*PantaloniCuSnurLung\.ro\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function withPremiumEditorialImages<T extends BlogPost>(posts: T[]): T[] {
  return posts.map((post) => {
    const subject = detectSubject(post);
    const context = detectContext(post);
    const existingFiles = [post.image, ...(post.images || []).map((item) => item.file)];
    const files = uniqFiles(existingFiles, post.slug);
    const roles = ['hero', 'detaliu', 'context', 'variatie'];
    const labels = ['HERO', 'DETALIU', 'CONTEXT', 'VARIATIE'];
    const imageLimit = Math.max(1, Math.min(post.imageLimit || roles.length, roles.length));
    const images = roles.slice(0, imageLimit).map((role, index) => {
      const title = `${stripAltNoise(post.h1 || post.title)} - ${labels[index]}`.slice(0, 90);
      const alt = altFor(post, subject, role, index);
      const file = seoImageFile(post, files[index], index, alt, title, role);
      return {
        file,
        alt,
        title,
        role,
        prompt: promptFor(role, post.title, subject, context),
      };
    });
    const heroAlt = altFor(post, subject, 'hero', 0);
    const heroTitle = `${stripAltNoise(post.h1 || post.title)} - HERO`.slice(0, 90);

    return {
      ...post,
      image: seoImageFile(post, files[0] || post.image, 0, heroAlt, heroTitle, 'hero', true),
      images,
    };
  });
}
