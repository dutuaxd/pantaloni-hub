type Section = [string, string];

type AudiencePost = {
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

const images = [
  'images/products/pantaloni-scurti-cu-snur-lung-negri-barbati.webp',
  'images/products/pantaloni-scurti-cu-snur-lung-negri-femei.webp',
  'images/products/pantaloni-cu-snur-lung-negri-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-bej-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-bleumarin-barbati-outfit.webp',
  'images/products/pantaloni-cu-snur-lung-negri-femei-outfit.webp',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-albi-snur-lung-vara.jpg',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-bleumarin-flexibil-si-pantaloni-scurti-bleumarin-snur.jpg',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-gri-snur-lung-ajustab-pantaloni-scurti-gri-cu-siret-l.jpg',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-largi-negri-snur-casual.jpg',
];

const segments = [
  {
    key: 'pantaloni-scurti-barbati',
    keyword: 'pantaloni scurti barbati',
    cluster: 'pantaloni-scurti-barbati-practic',
    audience: 'barbati care vor pantaloni scurti usor de purtat vara',
    fit: 'lungime pana aproape de genunchi, talie stabila, buzunare utile si material care nu se strange cand te asezi',
    tone: 'evita contrastul prea mare intre pantaloni foarte sport si incaltaminte eleganta',
  },
  {
    key: 'pantaloni-scurti-femei',
    keyword: 'pantaloni scurti femei',
    cluster: 'pantaloni-scurti-femei-practic',
    audience: 'femei care cauta confort, acoperire si proportii curate',
    fit: 'talie care ramane comoda, tiv care nu strange coapsa si material suficient de opac',
    tone: 'alege lungimea dupa context si confort, nu dupa o regula rigida de silueta',
  },
  {
    key: 'pantaloni-trei-sferturi-barbati',
    keyword: 'pantaloni trei sferturi barbati',
    cluster: 'pantaloni-trei-sferturi',
    audience: 'barbati care vor o alternativa intre pantaloni scurti si lungi',
    fit: 'tiv curat sub genunchi, croiala dreapta si pantofi simpli ca linia piciorului sa nu para taiata',
    tone: 'modelul trei sferturi cere proportii atente, mai ales la incaltaminte si sosete',
  },
  {
    key: 'pantaloni-trei-sferturi-femei',
    keyword: 'pantaloni trei sferturi femei',
    cluster: 'pantaloni-trei-sferturi',
    audience: 'femei care vor acoperire medie si tinute relaxate',
    fit: 'tiv sub genunchi, talie asezata si top care nu acopera complet proportia corpului',
    tone: 'functioneaza mai bine cand pantoful lasa glezna vizibila sau are forma curata',
  },
  {
    key: 'pantaloni-copii',
    keyword: 'pantaloni copii',
    cluster: 'pantaloni-copii',
    audience: 'parinti care cauta haine comode si rezistente pentru copii',
    fit: 'elastic in talie, cusaturi care nu jeneaza, material usor de spalat si libertate de miscare',
    tone: 'pentru copii conteaza mai mult siguranta, confortul si intretinerea decat trendul',
  },
  {
    key: 'pantaloni-tineri',
    keyword: 'pantaloni tineri',
    cluster: 'pantaloni-tineri',
    audience: 'tineri care vor tinute urbane fara sa para costumate',
    fit: 'croiala relaxata, buzunare discrete, talie clara si incaltaminte care sustine volumul',
    tone: 'un outfit bun pare intentionat cand ai o singura piesa foarte ampla',
  },
  {
    key: 'pantaloni-adolescenti',
    keyword: 'pantaloni adolescenti',
    cluster: 'pantaloni-adolescenti',
    audience: 'adolescenti si parinti care cauta un echilibru intre stil si practic',
    fit: 'talie reglabila, material rezistent, buzunare reale si lungime care permite miscare',
    tone: 'alegerea trebuie sa fie usor de purtat la scoala, in oras si in weekend',
  },
  {
    key: 'pantaloni-persoane-mature',
    keyword: 'pantaloni persoane mature',
    cluster: 'pantaloni-persoane-mature',
    audience: 'persoane mature care vor confort, tinuta curata si haine usor de combinat',
    fit: 'talie confortabila, material cu tinuta, buzunare accesibile si croiala care nu strange la mers',
    tone: 'stilul poate ramane actual fara piese incomode sau prea incarcate vizual',
  },
  {
    key: 'pantaloni-femei-plus-size',
    keyword: 'pantaloni femei plus size',
    cluster: 'pantaloni-femei-plus-size',
    audience: 'femei plus size care cauta croieli comode si proportii echilibrate',
    fit: 'talie care nu ruleaza, material opac, buzunare care nu deschid lateral si tiv care cade drept',
    tone: 'scopul este confort si proportie, nu ascundere sau schimbarea corpului',
  },
  {
    key: 'pantaloni-femei-siluete-pline',
    keyword: 'pantaloni femei siluete pline',
    cluster: 'pantaloni-femei-plus-size',
    audience: 'femei cu siluete pline care vor ghiduri respectuoase si utile',
    fit: 'betelie stabila, volum controlat, material cu greutate medie si lungime verificata din profil',
    tone: 'alege haine care sustin miscarea si increderea, fara reguli dure despre ce ai voie sa porti',
  },
];

const contexts = [
  { key: 'vara', label: 'vara', detail: 'caldura, transpiratie, plimbari lungi si materiale care se spala usor' },
  { key: 'oras', label: 'in oras', detail: 'mers mult, schimbari de temperatura, cafenea, cumparaturi si transport' },
  { key: 'vacanta', label: 'in vacanta', detail: 'bagaj mic, tinute repetabile, incaltaminte comoda si poze naturale' },
  { key: 'scoala-sau-familie', label: 'la scoala sau in familie', detail: 'activitati de zi, confort, decenta si intretinere simpla' },
  { key: 'eveniment-relaxat', label: 'la un eveniment relaxat', detail: 'aspect ingrijit, material curat, pantofi potriviti si fara exces de sport' },
];

const angles = [
  {
    key: 'ce-sa-porti',
    titlePrefix: 'Ce sa porti cu',
    intent: 'how-to',
    stage: 'consideration',
    hook: 'raspuns scurt, formule de tinuta si greseli usor de evitat',
  },
  {
    key: 'cum-alegi',
    titlePrefix: 'Cum alegi',
    intent: 'fit-guide',
    stage: 'consideration',
    hook: 'marime, talie, lungime, material si detalii care conteaza la proba',
  },
  {
    key: 'idei-tinute',
    titlePrefix: 'Idei de tinute cu',
    intent: 'inspiration',
    stage: 'awareness',
    hook: 'combinatii simple, culori sigure si contexte reale de purtare',
  },
  {
    key: 'greseli-de-evitat',
    titlePrefix: 'Greseli de evitat la',
    intent: 'problem-solving',
    stage: 'consideration',
    hook: 'lucruri mici care pot strica proportia, confortul sau aspectul ingrijit',
  },
];

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function clean(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function limit(value: string, max: number) {
  const text = clean(value);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 70 ? lastSpace : cut.length).replace(/[,:;.-]+$/g, '')}.`;
}

function makeKeyword(segment: (typeof segments)[number], context: (typeof contexts)[number], angle: (typeof angles)[number]) {
  if (angle.key === 'ce-sa-porti') return `ce sa porti cu ${segment.keyword} ${context.label}`;
  if (angle.key === 'cum-alegi') return `cum alegi ${segment.keyword} ${context.label}`;
  if (angle.key === 'idei-tinute') return `idei tinute ${segment.keyword} ${context.label}`;
  return `greseli de evitat ${segment.keyword} ${context.label}`;
}

function makeTitle(segment: (typeof segments)[number], context: (typeof contexts)[number], angle: (typeof angles)[number]) {
  return `${angle.titlePrefix} ${segment.keyword} ${context.label}: ghid practic 2026`;
}

function makeSlug(segment: (typeof segments)[number], context: (typeof contexts)[number], angle: (typeof angles)[number]) {
  return `blog/news/${slugify(`${angle.key} ${segment.keyword} ${context.key}`)}`;
}

function makeSections(
  kw: string,
  segment: (typeof segments)[number],
  context: (typeof contexts)[number],
  angle: (typeof angles)[number],
): Section[] {
  return [
    [
      'Raspuns rapid',
      `${kw} inseamna sa alegi pantalonii dupa context, nu dupa o regula generala. Pentru ${segment.audience}, conteaza mai ales ${segment.fit}.`,
    ],
    [
      'De ce merita ghid separat',
      `Cautarea are intentie proprie pentru ca include publicul, tipul de pantalon si contextul: ${context.detail}. De aceea nu concureaza direct cu ghidurile generale despre pantaloni cu snur lung sau pantaloni largi.`,
    ],
    [
      'Fit si confort',
      `La proba, verifica talia, sezutul, buzunarele si tivul in mers. Pantalonii trebuie sa stea bine cand te misti, nu doar in poza frontala.`,
    ],
    [
      'Cu ce ii combini',
      `Merg bine cu tricouri simple, camasi lejere, hanorace subtiri, jachete scurte si incaltaminte curata. Daca pantalonii au volum, pastreaza partea de sus mai ordonata.`,
    ],
    [
      'Ce sa eviti',
      `${segment.tone}. Evita materialele transparente, talia care strange, buzunarele care trag lateral si combinatiile cu prea multe accente in acelasi outfit.`,
    ],
    [
      'Unghi editorial',
      `Titlul are o nota usor clickbait prin intrebare si problema concreta, dar articolul ramane informativ: ${angle.hook}. Nu promite rezultate garantate si nu foloseste comparatii jignitoare.`,
    ],
    [
      'Checklist final',
      `Alege pantalonii daca poti merge comod, daca materialul ramane curat vizual si daca ai deja doua piese simple cu care ii poti purta. Daca raspunsul este da, tinuta are sanse sa functioneze in viata reala.`,
    ],
  ];
}

const posts: AudiencePost[] = [];

for (const segment of segments) {
  for (const context of contexts) {
    for (const angle of angles) {
      const index = posts.length;
      const keyword = makeKeyword(segment, context, angle);
      const title = makeTitle(segment, context, angle);
      const image = images[index % images.length];
      posts.push({
        slug: makeSlug(segment, context, angle),
        title,
        description: limit(`${keyword}: ${angle.hook}, cu limbaj respectuos si recomandari practice pentru tinute de zi.`, 155),
        h1: title,
        intro: `${keyword} este o cautare foarte practica: cititorul nu vrea doar inspiratie, ci o decizie clara despre croiala, material, lungime si context. Ghidul foloseste un ton respectuos si evita reguli dure despre varsta, corp sau stil personal.`,
        date: '2026-06-02',
        image,
        imageLimit: 3,
        images: [
          { file: image, alt: `${keyword} - imagine principala`, title: `${keyword} ghid` },
          { file: images[(index + 2) % images.length], alt: `${keyword} - detaliu material`, title: `${keyword} material` },
          { file: images[(index + 5) % images.length], alt: `${keyword} - proportii tinuta`, title: `${keyword} proportii` },
        ],
        seoEngine: {
          keyword_principal: keyword,
          cluster: segment.cluster,
          intent: angle.intent,
          funnel_stage: angle.stage,
          reason_safe: `separat prin public si context: ${segment.keyword} ${context.label}`,
          recommended_angle: `${segment.keyword}, ${context.label}, ton respectuos, fara superlative si fara promisiuni exagerate`,
          priority: angle.key === 'ce-sa-porti' || angle.key === 'cum-alegi' ? 1 : 2,
        },
        sections: makeSections(keyword, segment, context, angle),
      });
    }
  }
}

export const respectfulAudiencePantsBlogPosts2026 = posts.slice(0, 200);
