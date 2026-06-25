type Section = [string, string];

type TextileCarePost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  date: string;
  image: string;
  imageLimit: number;
  images: { file: string; alt: string; title: string }[];
  serpSnippet: string;
  keyTakeaways: string[];
  comparisonRows: [string, string, string][];
  faqs: [string, string][];
  relatedLinks: [string, string][];
  sections: Section[];
  seoEngine: {
    keyword_principal: string;
    cluster: string;
    intent: string;
    funnel_stage: string;
    reason_safe: string;
    recommended_angle: string;
    priority: number;
  };
};

const careImages = [
  'images/products/pantaloni-cu-snur-lung-negri-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-bej-produs-unisex.webp',
  'images/products/pantaloni-scurti-cu-snur-lung-negri-barbati.webp',
  'images/products/pantaloni-cu-snur-lung-gri-deschis-produs-unisex.webp',
  'images/blog-seo/cum-scoti-pete-vopsea-sange-deodorant-haine/00-hero-pantaloni-cu-snur-lung-negri-produs.webp',
  'images/blog-seo/geaca-puf-jacheta-spalare-uscare/00-hero-pantaloni-cu-snur-lung-negri-barbati.webp',
  'images/blog-seo/pulover-lana-intrat-la-apa-remedii/00-hero-pantaloni-cu-snur-lung-negri-femei-o.webp',
  'images/blog-seo/casmir-scamosare-si-intretinere/00-hero-moda-urbana-pantaloni-unisex-cu-snur.webp',
];

const materials = [
  { name: 'bumbac', kind: 'fibra naturala confortabila', risk: 'poate intra la apa daca temperatura este prea mare', temp: '30-40 C' },
  { name: 'bumbac organic', kind: 'fibra naturala mai putin tratata', risk: 'poate pierde forma daca este frecat agresiv', temp: '30 C' },
  { name: 'bumbac prespalat', kind: 'bumbac tratat pentru aspect purtat', risk: 'poate pierde textura daca este albit agresiv', temp: '30 C' },
  { name: 'poliester', kind: 'fibra sintetica rezistenta', risk: 'poate pastra mirosul daca este incarcat cu balsam', temp: '30-40 C' },
  { name: 'elastan', kind: 'fibra elastica folosita in amestecuri', risk: 'se poate slabi la caldura mare', temp: '30 C' },
  { name: 'vascoza', kind: 'fibra regenerata cu cadere fluida', risk: 'se poate deforma cand este stoarsa puternic', temp: 'rece sau 30 C' },
  { name: 'in', kind: 'fibra naturala aerisita', risk: 'se sifoneaza usor si se poate rigidiza', temp: '30 C' },
  { name: 'lana', kind: 'fibra naturala sensibila la frecare', risk: 'poate intra la apa si se poate impasli', temp: 'program lana rece' },
  { name: 'lana merinos', kind: 'lana fina si respirabila', risk: 'se poate impasli la agitatie si caldura', temp: 'program lana rece' },
  { name: 'casmir', kind: 'fibra fina si delicata', risk: 'se scamosaza si se deformeaza usor', temp: 'spalare manuala rece' },
  { name: 'denim', kind: 'tesatura densa din bumbac', risk: 'poate pierde culoare si poate lasa urme', temp: '30 C pe dos' },
  { name: 'twill', kind: 'tesatura diagonala rezistenta', risk: 'poate face cute dure daca este uscat gresit', temp: '30 C' },
  { name: 'poplin', kind: 'tesatura fina pentru camasi', risk: 'se poate sifona si poate arata urme de detergent', temp: '30 C' },
  { name: 'flanel', kind: 'material moale cu suprafata periata', risk: 'poate face scame daca este frecat excesiv', temp: '30 C' },
  { name: 'fleece', kind: 'material sintetic pufos', risk: 'poate retine miros si scame', temp: '30 C' },
  { name: 'softshell', kind: 'material tehnic pentru exterior', risk: 'isi poate pierde tratamentul daca folosesti balsam', temp: '30 C' },
  { name: 'jersey', kind: 'tricot moale pentru tricouri', risk: 'se poate rasuci sau largi la stoarcere puternica', temp: '30 C' },
  { name: 'ribbed', kind: 'tricot elastic cu nervuri', risk: 'se poate lasa daca este agatat la uscare', temp: '30 C' },
  { name: 'satin', kind: 'tesatura lucioasa si sensibila', risk: 'poate ramane patat de apa sau frecare', temp: 'rece, ciclu delicat' },
  { name: 'material impermeabil', kind: 'textil tratat pentru apa', risk: 'isi poate pierde pelicula daca este spalat agresiv', temp: '30 C fara balsam' },
];

const solutions = [
  {
    name: 'detergent lichid',
    slug: 'detergent-lichid',
    action: 'dizolva murdaria obisnuita si se clateste mai usor decat pudra la temperaturi joase',
    avoid: 'nu folosi prea mult, pentru ca excesul poate ramane in fibra si poate lasa miros',
  },
  {
    name: 'detergent pudra',
    slug: 'detergent-pudra',
    action: 'ajuta pe murdarie generala si haine deschise, mai ales cand se dizolva complet',
    avoid: 'evita supradozarea pe negru sau la spalari reci, unde pot ramane urme albe',
  },
  {
    name: 'detergent pentru rufe colorate',
    slug: 'detergent-rufe-colorate',
    action: 'curata mai bland si protejeaza mai bine pigmentul decat formulele pentru albire',
    avoid: 'nu repara culoarea deja pierduta si nu inlocuieste spalarea pe dos',
  },
  {
    name: 'solutie enzimatica',
    slug: 'solutie-enzimatica',
    action: 'descompune pete organice precum transpiratie, sange, mancare sau sebum',
    avoid: 'testeaza pe materiale sensibile si evita folosirea lunga pe lana, matase sau casmir',
  },
  {
    name: 'degresant textil bland',
    slug: 'degresant-textil-bland',
    action: 'sparge pelicula uleioasa inainte de spalare, fara frecare puternica',
    avoid: 'nu il lasa sa se usuce pe material si testeaza pe culori intense',
  },
  {
    name: 'oxigen activ',
    slug: 'oxigen-activ',
    action: 'oxideaza petele si improspateaza textilele fara clor, cand este folosit corect',
    avoid: 'nu il folosi pe materiale care interzic inalbitorii si nu il amesteca cu alte produse',
  },
  {
    name: 'bicarbonat de sodiu',
    slug: 'bicarbonat-sodiu',
    action: 'ajuta la neutralizarea mirosurilor si la improspatare usoara',
    avoid: 'nu il trata ca pe un detergent complet si clateste bine particulele ramase',
  },
  {
    name: 'otet alb la clatire',
    slug: 'otet-alb-clatire',
    action: 'poate reduce reziduurile alcaline si mirosul usor, folosit separat la clatire',
    avoid: 'nu il amesteca niciodata cu clor sau alti inalbitori si evita excesul pe elastice',
  },
  {
    name: 'balsam de rufe',
    slug: 'balsam-rufe',
    action: 'inmoaie fibra si reduce senzatia aspra, dar nu curata efectiv pata',
    avoid: 'evita-l pe haine sport, softshell, microfibre si materiale care trebuie sa respire',
  },
  {
    name: 'spray de pretratare',
    slug: 'spray-pretratare',
    action: 'tine solutia local pe pata inainte de spalare si scade nevoia de frecare',
    avoid: 'nu il lasa peste timpul indicat pe ambalaj si testeaza mereu pe o zona ascunsa',
  },
];

const contexts = [
  { name: 'haine albe', slug: 'haine-albe', need: 'pastrarea albului fara ingalbenire sau gri', color: 'alb' },
  { name: 'haine negre', slug: 'haine-negre', need: 'evitarea urmelor si a decolorarii', color: 'negru' },
  { name: 'haine colorate', slug: 'haine-colorate', need: 'protejarea pigmentului si evitarea transferului de culoare', color: 'colorat' },
  { name: 'pantaloni si tricouri', slug: 'pantaloni-tricouri', need: 'curatare zilnica fara pierdere de forma', color: 'mixt' },
  { name: 'haine purtate des', slug: 'haine-purtate-des', need: 'controlul mirosului si al uzurii repetate', color: 'mixt' },
];

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function clean(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

function limit(text: string, max: number) {
  const value = clean(text);
  if (value.length <= max) return value;
  const cut = value.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 70 ? lastSpace : cut.length).replace(/[,:;.-]+$/g, '')}.`;
}

function materialLabel(material: { name: string }) {
  return material.name === 'in' ? 'in' : material.name;
}

function sectionsFor(
  material: typeof materials[number],
  solution: typeof solutions[number],
  context: typeof contexts[number],
): Section[] {
  const label = materialLabel(material);
  return [
    [
      'Raspuns rapid',
      `Pentru ${context.name} din ${label}, ${solution.name} are rolul principal de a ${solution.action}. Foloseste-l doar in doza potrivita, respecta eticheta si porneste de la temperatura recomandata pentru material: ${material.temp}.`,
    ],
    [
      `Ce face ${solution.name}`,
      `${solution.name} nu este magie universala. In cazul acestui material, solutia actioneaza asupra murdariei, mirosului sau reziduurilor in functie de chimia ei: ${solution.action}. Pentru ${context.name}, obiectivul este ${context.need}.`,
    ],
    [
      `Cum reactioneaza ${label}`,
      `${label} este ${material.kind}. Principalul risc este ca ${material.risk}. De aceea tratamentul trebuie sa fie bland, cu intoarcerea hainelor pe dos cand este cazul si cu clatire suficienta.`,
    ],
    [
      'Pasi practici',
      `Testeaza solutia pe o zona ascunsa, aplica doar cat este nevoie, lasa materialul sa se inmoaie conform etichetei produsului si spala separat daca haina este noua sau intensa la culoare. Pentru pete locale, tamponeaza in loc sa freci agresiv.`,
    ],
    [
      'Ce sa eviti',
      `${solution.avoid}. Evita uscarea la cald pana cand pata sau mirosul au disparut, pentru ca temperatura poate fixa problema in fibra. La materiale foarte scumpe sau delicate, curatatoria ramane varianta mai sigura.`,
    ],
    [
      'Cum reduci canibalizarea cautarii',
      `Acest ghid raspunde strict la combinatia ${solution.name} + ${label} + ${context.name}. Pentru pete specifice, citeste ghidurile dedicate petelor; pentru alegerea materialului, mergi la articolele despre compozitie textila. Asa fiecare pagina are o intentie separata.`,
    ],
  ];
}

function faqsFor(
  material: typeof materials[number],
  solution: typeof solutions[number],
  context: typeof contexts[number],
): [string, string][] {
  const label = materialLabel(material);
  return [
    [
      `Pot folosi ${solution.name} pe ${label}?`,
      `Da, doar daca eticheta materialului si instructiunile produsului permit asta. Pentru ${label}, incepe cu test pe zona ascunsa si temperatura ${material.temp}.`,
    ],
    [
      `Este sigur pentru ${context.name}?`,
      `Depinde de culoare, doza si timp de contact. Pentru ${context.name}, scopul este ${context.need}, deci evita supradozarea si clateste bine.`,
    ],
    [
      `Ce fac daca ramane pata dupa spalare?`,
      'Nu usca la cald. Repeta pretratarea bland sau apeleaza la curatatorie daca materialul este sensibil ori haina are valoare mare.',
    ],
  ];
}

const posts: TextileCarePost[] = [];

for (const material of materials) {
  for (const solution of solutions) {
    for (const context of contexts) {
      const index = posts.length;
      const label = materialLabel(material);
      const keyword = `${solution.name} pentru ${label} la ${context.name}`;
      const h1 = `Cum folosesti ${solution.name} pentru ${label} la ${context.name}`;
      const slug = `blog/ingrijire-textile/${solution.slug}-${slugify(label)}-${context.slug}`;
      const image = careImages[index % careImages.length];
      posts.push({
        slug,
        title: `${h1}?`,
        description: limit(`${h1}: ce face solutia, ce risc are materialul, ce temperatura alegi si ce greseli sa eviti la spalare.`, 155),
        h1,
        intro: `Acest ghid explica exact ce face ${solution.name} pe ${label}, mai ales cand speli ${context.name}. Scopul este sa cureti fara sa strici fibra, culoarea sau forma hainei.`,
        date: '2026-06-25',
        image,
        imageLimit: 3,
        images: [
          { file: image, alt: `${keyword} - ghid de ingrijire textile`, title: keyword },
          { file: careImages[(index + 2) % careImages.length], alt: `${keyword} - exemplu material`, title: `${keyword} material` },
          { file: careImages[(index + 5) % careImages.length], alt: `${keyword} - spalare si intretinere`, title: `${keyword} spalare` },
        ],
        serpSnippet: `${solution.name} pe ${label}: ${solution.action}. Pentru ${context.name}, foloseste temperatura ${material.temp}, testeaza pe zona ascunsa si evita supradozarea.`,
        keyTakeaways: [
          `${solution.name} are rolul de a ${solution.action}.`,
          `${label} este ${material.kind}, iar riscul principal este ca ${material.risk}.`,
          `Pentru ${context.name}, obiectivul este ${context.need}.`,
        ],
        comparisonRows: [
          ['Doza', 'Doza minima eficienta si clatire buna', 'Mai mult produs decat indica ambalajul'],
          ['Temperatura', material.temp, 'Apa fierbinte fara verificarea etichetei'],
          ['Test', 'Zona ascunsa inainte de aplicare vizibila', 'Aplicare directa pe fata materialului'],
        ],
        faqs: faqsFor(material, solution, context),
        relatedLinks: [
          ['/blog/news/cum-scot-petele-de-ulei-de-pe-haine/', 'Cum scot petele de ulei de pe haine?'],
          ['/blog/news/de-ce-miros-hainele-dupa-spalare/', 'De ce miros hainele dupa spalare?'],
          ['/blog/news/cum-spal-hainele-colorate-fara-sa-se-decoloreze/', 'Cum spal hainele colorate fara sa se decoloreze?'],
          ['/blog/news/care-este-diferenta-dintre-bumbac-si-poliester/', 'Diferenta dintre bumbac si poliester'],
        ],
        sections: sectionsFor(material, solution, context),
        seoEngine: {
          keyword_principal: keyword,
          cluster: `ingrijire-textile-${slugify(label)}`,
          intent: 'how-to',
          funnel_stage: 'awareness',
          reason_safe: `combinatie unica material-solutie-context: ${keyword}`,
          recommended_angle: 'explica ce face solutia, limitele materialului si pasii de spalare fara promisiuni garantate',
          priority: index < 200 ? 1 : 2,
        },
      });
    }
  }
}

export const textileCareBlogPosts2026 = posts.slice(0, 1000);
