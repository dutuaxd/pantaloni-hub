type Section = [string, string];

type LongTailPost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  date: string;
  image: string;
  imageLimit: number;
  images: { file: string; alt: string; title: string }[];
  seoEngine: {
    keyword_principal: string;
    cluster: string;
    intent: string;
    funnel_stage: string;
    reason_safe: string;
    recommended_angle: string;
    priority: number;
  };
  sections: Section[];
};

const sourceNotes = [
  'SERP pattern: ghiduri romanesti despre pantaloni albi si chino pun accent pe material, vara, contrast si pantofi.',
  'SERP pattern: paginile de produs pentru pantaloni scurti cu snur insista pe talie elastica, buzunare, confort si zile calde.',
  'SERP pattern: ghidurile pentru pantaloni evazati discuta silueta, lungime, toc/platforma si echilibru intre volum si top.',
  'SERP pattern: discutiile romanesti despre pantaloni pentru femei ating des probleme de lungime, talie, coapse si buzunare.',
];

const imagePool = [
  'images/products/pantaloni-cu-snur-lung-negri-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-negri-barbati-outfit.webp',
  'images/products/pantaloni-cu-snur-lung-negri-femei-outfit.webp',
  'images/products/pantaloni-cu-snur-lung-bej-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-bleumarin-barbati-outfit.webp',
  'images/products/pantaloni-cu-snur-lung-maro-baggy-barbati.webp',
  'images/products/pantaloni-scurti-cu-snur-lung-negri-barbati.webp',
  'images/products/pantaloni-scurti-cu-snur-lung-negri-femei.webp',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-bej-siret-lung-wide.jpg',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-largi-negri-snur-casual.jpg',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-roz-snur-lung-ajustabil-fata.jpg',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-albi-snur-lung-vara.jpg',
];

const colors = [
  { key: 'negri', label: 'negri', palette: 'alb, gri, denim, bleumarin si accente metalice' },
  { key: 'albi', label: 'albi', palette: 'bleumarin, bej, gri deschis, olive si negru curat' },
  { key: 'roz', label: 'roz', palette: 'alb, negru, gri, denim deschis si burgundy discret' },
  { key: 'rosii', label: 'rosii', palette: 'alb, negru, bleumarin, crem si denim inchis' },
  { key: 'bej', label: 'bej', palette: 'alb cald, maro, olive, bleumarin si negru' },
  { key: 'gri', label: 'gri', palette: 'alb, negru, cobalt, verde petrol si roz pudrat' },
  { key: 'bleumarin', label: 'bleumarin', palette: 'alb, gri, bej, maro si rosu inchis' },
  { key: 'verzi', label: 'verzi', palette: 'alb, negru, bej, denim si maro' },
  { key: 'maro', label: 'maro', palette: 'crem, alb, denim, verde olive si negru' },
  { key: 'crem', label: 'crem', palette: 'maro, gri, negru, bleumarin si verde sage' },
];

const audiences = [
  { key: 'barbati', label: 'barbati', pronoun: 'barbat', fit: 'umeri, talie si incaltaminte cu volum controlat' },
  { key: 'femei', label: 'femei', pronoun: 'femeie', fit: 'talie, sold, lungime si linia pantofului' },
];

const garments = [
  {
    key: 'pantaloni-scurti',
    label: 'pantaloni scurti',
    cluster: 'pantaloni-scurti-culoare',
    intent: 'shopping-guide',
    base: 'Subiectul este separat de ghidurile generale de vara pentru ca trateaza lungimea deasupra genunchiului, talia elastica, buzunarele si materialul care nu se lipeste de piele.',
    formula: 'Verifica tivul din profil, lasa snurul vizibil doar daca adauga intentie tinutei si alege tricouri cu greutate medie ca pantalonii scurti sa nu para de casa.',
  },
  {
    key: 'pantaloni-lungi',
    label: 'pantaloni lungi',
    cluster: 'pantaloni-lungi-culoare',
    intent: 'style-guide',
    base: 'Subiectul merita pagina proprie deoarece combina lungime, cadere peste pantof si culoare; nu este acelasi lucru cu un articol generic despre pantaloni largi.',
    formula: 'Lungimea trebuie sa atinga pantoful fara sa se adune masiv, iar partea de sus trebuie sa lase talia vizibila cand croiala este relaxata.',
  },
  {
    key: 'pantaloni-chino',
    label: 'pantaloni chino',
    cluster: 'chino-culoare',
    intent: 'comparison-guide',
    base: 'Intentia chino cere explicatii despre bumbac twill, tinuta smart casual si diferenta fata de pantaloni de trening, cargo sau denim.',
    formula: 'Alege o croiala dreapta sau usor conica, poarta materialul calcat curat si evita topurile foarte sport daca vrei un rezultat smart casual.',
  },
  {
    key: 'pantaloni-evazati',
    label: 'pantaloni evazati',
    cluster: 'evazati-culoare',
    intent: 'fit-guide',
    base: 'Intentia evazata este despre silueta si proportie: talie, deschiderea de la tiv, pantofi si cat de mult volum poate sustine topul.',
    formula: 'Tivul trebuie gandit impreuna cu pantoful; platformele, botinele sau sneakersii cu talpa curata pot schimba complet linia piciorului.',
  },
  {
    key: 'pantaloni-largi',
    label: 'pantaloni largi',
    cluster: 'pantaloni-largi-culoare',
    intent: 'style-guide',
    base: 'Pagina se diferentiaza prin combinatia dintre volum si culoare, nu prin repetarea ghidului general de wide leg sau baggy.',
    formula: 'Pastreaza o singura piesa cu volum mare, foloseste contrast la talie si verifica in oglinda daca tivul ascunde prea mult incaltamintea.',
  },
];

const angles = [
  { key: 'ghid', label: 'ghid', stage: 'consideration', title: 'ghid complet', section: 'Ghid rapid', priority: 1 },
  { key: 'outfit', label: 'outfit', stage: 'awareness', title: 'idei de outfit', section: 'Idei de tinute', priority: 2 },
  { key: 'vara', label: 'vara', stage: 'consideration', title: 'ghid de vara', section: 'Cum ii porti vara', priority: 2 },
  { key: 'casual', label: 'casual', stage: 'consideration', title: 'tinute casual', section: 'Casual fara neglijenta', priority: 2 },
  { key: 'birou', label: 'birou', stage: 'consideration', title: 'smart casual la birou', section: 'La birou', priority: 2 },
];

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function compact(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function limitText(value: string, max: number) {
  const clean = compact(value);
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : cut.length).replace(/[,:;.-]+$/g, '')}.`;
}

function keyword(garment: string, audience: string, color: string, angle: string) {
  return compact(`${garment} ${audience} ${color} ${angle}`);
}

function makeSections(
  kw: string,
  garment: (typeof garments)[number],
  audience: (typeof audiences)[number],
  color: (typeof colors)[number],
  angle: (typeof angles)[number],
  sourceNote: string,
): Section[] {
  return [
    [
      'Intentia cautarii',
      `${kw} este o cautare long-tail cu intentie clara: cititorul stie tipul de pantalon, publicul si culoarea, dar are nevoie de decizie rapida. ${garment.base}`,
    ],
    [
      angle.section,
      `${garment.formula} Pentru ${audience.label}, punctul critic este ${audience.fit}, nu doar culoarea vazuta pe umeras.`,
    ],
    [
      'Culori si piese care merg',
      `Cu ${garment.label} ${color.label}, paleta sigura este: ${color.palette}. Daca tinuta pare plata, adauga textura prin tricou gros, camasa deschisa, sacou moale sau sneakers cu forma simpla.`,
    ],
    [
      'Fit, material si lungime',
      `Alege material cu tinuta, nu doar moale. Pentru ${kw}, proba buna inseamna talie stabila, buzunare care nu trag lateral si tiv care ramane curat cand mergi, stai jos sau faci poze.`,
    ],
    [
      'Greseli de evitat',
      `Evita sa amesteci prea multe directii: sport, office, elegant si streetwear in acelasi look. Daca pantalonii sunt ${color.label}, lasa culoarea sa fie ancora si construieste restul tinutei in doua-trei tonuri.`,
    ],
    [
      'Ce fac competitorii si cum depasim',
      `${sourceNote} Articolul acesta merge mai specific: combina culoarea, publicul, croiala, ocazia si problemele reale de proba intr-un singur ghid usor de scanat.`,
    ],
    [
      'Raspuns rapid',
      `Da, ${kw} merita purtati daca alegi croiala dupa context si nu dupa poza de produs. Cea mai sigura formula este top simplu, pantofi curati, talie ordonata si o singura zona de accent.`,
    ],
  ];
}

function makePost(
  garment: (typeof garments)[number],
  audience: (typeof audiences)[number],
  color: (typeof colors)[number],
  angle: (typeof angles)[number],
  index: number,
): LongTailPost {
  const kw = keyword(garment.label, audience.label, color.label, angle.label);
  const slug = `blog/news/${slugify(kw)}`;
  const title = `${kw}: ${angle.title} 2026`;
  const description = limitText(
    `${kw}: ghid SEO original cu fit, culori, materiale, greseli de evitat si formule de tinuta pentru ${audience.label}.`,
    155,
  );
  const hero = imagePool[index % imagePool.length];
  const imageTwo = imagePool[(index + 3) % imagePool.length];
  const imageThree = imagePool[(index + 7) % imagePool.length];
  const sourceNote = sourceNotes[index % sourceNotes.length];

  return {
    slug,
    title,
    description,
    h1: title,
    intro: `${kw} nu trebuie tratati ca o cautare generica. Handle-ul spune exact intentia: ${garment.label}, ${audience.label}, culoarea ${color.label} si un context de tip ${angle.label}. De aici porneste un ghid care ajuta la alegere, styling si evitare de canibalizare cu paginile deja existente.`,
    date: '2026-06-02',
    image: hero,
    imageLimit: 3,
    images: [
      { file: hero, alt: `${kw} - tinuta principala`, title: `${kw} tinuta` },
      { file: imageTwo, alt: `${kw} - detaliu talie si material`, title: `${kw} detaliu` },
      { file: imageThree, alt: `${kw} - proportii si incaltaminte`, title: `${kw} proportii` },
    ],
    seoEngine: {
      keyword_principal: kw,
      cluster: garment.cluster,
      intent: garment.intent,
      funnel_stage: angle.stage,
      reason_safe: `long-tail separat prin tip, public, culoare si context: ${kw}`,
      recommended_angle: `${garment.label}, ${audience.label}, ${color.label}, ${angle.label}, cu focus pe fit si intentie SERP`,
      priority: angle.priority,
    },
    sections: makeSections(kw, garment, audience, color, angle, sourceNote),
  };
}

const generatedPosts: LongTailPost[] = [];
const seen = new Set<string>();
let combinationIndex = 0;

for (const garment of garments) {
  for (const audience of audiences) {
    for (const color of colors) {
      const alternateAngle = angles[(combinationIndex % (angles.length - 1)) + 1] || angles[1];
      combinationIndex += 1;
      for (const angle of [angles[0], alternateAngle]) {
        const post = makePost(garment, audience, color, angle, generatedPosts.length);
        if (seen.has(post.slug)) continue;
        seen.add(post.slug);
        generatedPosts.push(post);
      }
    }
  }
}

export const researchedPantsLongTailBlogPosts2026 = generatedPosts.slice(0, 200);
