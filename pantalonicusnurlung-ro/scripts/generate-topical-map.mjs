import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://pantalonicusnurlung.ro';
const outDir = path.join(process.cwd(), 'content-plan');
const outFile = path.join(outDir, 'topical-map.json');

const uniq = (items) => [...new Set(items.filter(Boolean))];
const slugify = (text) => text
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/ă/g, 'a')
  .replace(/â/g, 'a')
  .replace(/î/g, 'i')
  .replace(/ș|ş/g, 's')
  .replace(/ț|ţ/g, 't')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const colors = uniq([
  'alb', 'negru', 'gri', 'gri deschis', 'gri inchis', 'gri antracit', 'antracit', 'carbune', 'argintiu',
  'bej', 'crem', 'ivoriu', 'ecru', 'nisipiu', 'camel', 'taupe', 'grej', 'cappuccino', 'caramel',
  'maro', 'maro ciocolatiu', 'maro coniac', 'maro castaniu', 'maro tabac', 'maro cafea', 'brun',
  'bleumarin', 'albastru', 'albastru cobalt', 'albastru regal', 'albastru petrol', 'albastru deschis', 'bleu', 'bleu ciel', 'denim', 'indigo', 'turcoaz', 'teal', 'aqua',
  'verde', 'verde kaki', 'kaki', 'oliv', 'verde masliniu', 'verde fistic', 'verde smarald', 'verde inchis', 'verde padure', 'verde salvie', 'verde menta', 'verde lime', 'verde armata',
  'rosu', 'rosu burgundy', 'burgundy', 'visiniu', 'bordo', 'grena', 'caramiziu', 'teracota', 'corai',
  'portocaliu', 'portocaliu ars', 'ocru', 'mustar', 'galben', 'galben unt', 'galben pal', 'auriu',
  'roz', 'roz pudrat', 'roz prafuit', 'roz somon', 'fucsia',
  'mov', 'lila', 'lavanda', 'purpuriu', 'violet', 'pruna',
  'off white', 'stone', 'greige', 'charcoal', 'navy', 'olive', 'sage', 'mint', 'cream', 'sand', 'khaki',
  'graphite', 'petrol', 'cobalt', 'royal blue', 'sky blue', 'ice blue', 'forest green', 'bottle green',
]);

const colorModifiers = [
  'mat', 'prespalat', 'inchis', 'deschis', 'rece', 'cald', 'prafuit', 'saturat', 'stins', 'pastel',
  'mineral', 'urban', 'soft', 'intens', 'neutru', 'metalizat', 'melanj', 'washed', 'ton pe ton', 'monocrom',
];

const expandedColors = uniq([
  ...colors,
  ...colors.flatMap((color) => colorModifiers.map((modifier) => `${color} ${modifier}`)),
]).slice(0, 330);

const colorPairsBase = [
  ['bej', 'gri'], ['bej', 'negru'], ['bej', 'bleumarin'], ['bej', 'alb'], ['bej', 'verde oliv'],
  ['gri', 'bleumarin'], ['gri', 'negru'], ['gri', 'alb'], ['gri antracit', 'alb'], ['antracit', 'bej'],
  ['albastru', 'portocaliu'], ['albastru cobalt', 'alb'], ['albastru petrol', 'bej'], ['bleumarin', 'alb'],
  ['verde fistic', 'bej'], ['verde kaki', 'negru'], ['oliv', 'crem'], ['verde smarald', 'gri'],
  ['visiniu', 'negru'], ['bordo', 'gri'], ['caramiziu', 'bej'], ['ocru', 'bleumarin'],
  ['mustar', 'gri'], ['camel', 'negru'], ['taupe', 'alb'], ['crem', 'maro'], ['maro ciocolatiu', 'bleu'],
  ['purpuriu', 'gri'], ['turcoaz', 'alb'], ['roz pudrat', 'gri'], ['lavanda', 'alb'],
];

const colorPairs = uniq([
  ...colorPairsBase.map(([a, b]) => `${a} cu ${b}`),
  ...expandedColors.slice(0, 90).flatMap((color, index) => {
    const anchors = ['negru', 'alb', 'bej', 'gri', 'bleumarin'];
    return [`${color} cu ${anchors[index % anchors.length]}`];
  }),
  ...expandedColors.slice(90, 160).map((color, index) => `${color} cu ${expandedColors[index % 60]}`),
]).slice(0, 260);

const materials = uniq([
  'bumbac', 'bumbac organic', 'bumbac pieptanat', 'bumbac mercerizat', 'bumbac pima', 'bumbac supima',
  'poliester', 'poliester reciclat', 'poliamida', 'nylon', 'elastan', 'spandex', 'lycra',
  'in', 'canepa', 'vascoza', 'lyocell', 'tencel', 'modal', 'cupro',
  'lana', 'lana merino', 'casmir', 'alpaca', 'mohair', 'angora',
  'fleece', 'french terry', 'jersey', 'interlock', 'rib', 'piquet', 'poplin', 'oxford cloth', 'twill',
  'denim', 'canvas', 'ripstop', 'gabardina', 'catifea', 'catifea cord', 'velur', 'piele', 'piele intoarsa',
  'satin', 'matase', 'microfibra', 'softshell', 'neopren', 'mesh', 'tricot', 'croset', 'polar',
  'seersucker', 'flanel', 'panza', 'tercot', 'rayon', 'acril', 'triacetat', 'acetat',
  'bambus', 'ramie', 'juta', 'sherpa', 'boucle', 'tweed', 'herringbone', 'jacquard',
  'material impermeabil', 'material respirabil', 'material elastic', 'material opac', 'material cu gsm mare',
  'bumbac 180 gsm', 'bumbac 220 gsm', 'bumbac 240 gsm', 'bumbac 280 gsm', 'bumbac 320 gsm',
  'jersey greu', 'jersey subtire', 'fleece subtire', 'fleece gros', 'french terry greu',
  'denim rigid', 'denim elastic', 'in spalat', 'lana rece', 'lana fiarta', 'poliester tehnic',
  'nylon ripstop', 'canvas bumbac', 'poplin bumbac', 'twill bumbac', 'tricot bumbac',
]).slice(0, 110);

const materialPairs = uniq([
  ['bumbac', 'poliester'], ['bumbac', 'elastan'], ['in', 'bumbac'], ['lana', 'casmir'], ['lana', 'poliester'],
  ['vascoza', 'elastan'], ['lyocell', 'bumbac'], ['modal', 'bumbac'], ['canepa', 'bumbac'], ['poliester', 'elastan'],
  ['nylon', 'elastan'], ['denim', 'elastan'], ['fleece', 'bumbac'], ['french terry', 'bumbac'], ['jersey', 'elastan'],
  ...materials.slice(0, 70).flatMap((mat, index) => [[mat, materials[(index + 7) % materials.length]], [mat, materials[(index + 19) % materials.length]]]),
]).map(([a, b]) => `${a} cu ${b}`).slice(0, 220);

const pantTypes = [
  'pantaloni cargo', 'pantaloni jogger', 'pantaloni wide leg', 'pantaloni loose fit', 'pantaloni oversized',
  'pantaloni streetwear', 'pantaloni urban', 'pantaloni casual', 'pantaloni cu snur', 'pantaloni cu siret',
  'pantaloni cu elastic', 'pantaloni scurti', 'pantaloni din in', 'pantaloni chino', 'pantaloni drepti',
  'pantaloni slim', 'pantaloni regular fit', 'pantaloni tapered', 'pantaloni relaxed fit', 'pantaloni baggy',
  'pantaloni palazzo barbati', 'pantaloni de trening', 'pantaloni utilitari', 'pantaloni techwear',
  'pantaloni workwear', 'pantaloni de vara', 'pantaloni de iarna', 'pantaloni de toamna',
];

const fits = ['slim fit', 'regular fit', 'relaxed fit', 'loose fit', 'oversized fit', 'tapered fit', 'straight fit', 'wide leg fit', 'skinny fit'];
const garments = ['pantaloni', 'tricouri', 'hanorace', 'camasi', 'sacouri', 'pantofi', 'geci', 'seturi'];
const seasons = ['primavara', 'vara', 'toamna', 'iarna', 'vreme schimbatoare', 'canicula', 'ploaie', 'city break'];
const occasions = [
  'smart casual', 'business casual', 'formal', 'black tie', 'cocktail', 'summer formal',
  'nunta ca invitat barbat', 'botez', 'majorat', 'banquet', 'absolvire', 'interviu', 'o intalnire',
  'birou', 'petrecere', 'concert', 'festival', 'city break', 'cafenea', 'restaurant', 'facultate',
];
const bodyTopics = [
  'corp triunghi', 'corp triunghi inversat', 'corp rectangular', 'corp oval', 'corp atletic',
  'cum creezi iluzia de inaltime', 'cum te imbraci daca esti scund', 'cum te imbraci daca esti inalt',
  'cum te imbraci daca ai umerii lati', 'cum te imbraci daca ai umerii ingusti',
  'cum alegi pantalonii pentru tipul tau de corp',
];
const cultureTopics = [
  'istoria pantalonului cargo', 'de ce s-a intors wide leg', 'istoria jeansilor', 'istoria tricoului alb',
  'streetwear vs techwear', 'streetwear vs workwear', 'oversized vs relaxed fit', 'evolutia modei masculine',
  'moda anilor 90', 'moda anilor 2000', 'trenduri fashion romania', 'normcore', 'gorpcore', 'quiet luxury',
  'workwear modern', 'techwear urban', 'minimalism masculin', 'capsule wardrobe masculin', 'athleisure',
];
const footwear = ['adidasi', 'sneakers', 'mocasini', 'oxford', 'derby', 'chelsea boots', 'loafers', 'sandale', 'papuci', 'bocanci', 'ghete', 'pantofi sport', 'espadrile'];
const accessories = ['ceasuri', 'ochelari', 'cravate', 'batiste', 'curele', 'rucsacuri', 'genti', 'portofele', 'bijuterii barbati', 'sepci', 'esarfe', 'sosete', 'curea piele', 'geanta crossbody'];
const careProblems = [
  'cum pastrezi hainele mai mult timp', 'cum depozitezi hainele sezonier', 'cum elimini cutele fara fier de calcat',
  'cum repari o cusatura rupta', 'cum repari un nasture', 'cum scoti petele de transpiratie', 'cum scoti petele de vin',
  'cum scoti petele de ulei', 'cum scoti petele de sange', 'cum scoti petele de fond de ten', 'cum scoti mirosul din haine',
  'cum eviti scamosarea', 'cum usuci hainele corect', 'cum calci tricourile', 'cum pastrezi pantalonii pe umeras',
];

const entries = [];
const slugIndex = new Map();
const keywordIndex = new Map();

function addEntry(input) {
  const slug = input.slug.startsWith('/') ? input.slug : `/${input.slug}`;
  if (slugIndex.has(slug)) return;
  const primaryKeyword = input.primaryKeyword || input.title.toLowerCase();
  if (keywordIndex.has(primaryKeyword)) return;
  const entry = {
    id: slug.replace(/^\//, '').replaceAll('/', ':'),
    url: slug,
    absoluteUrl: `${SITE}${slug}`,
    indexable: input.indexable ?? true,
    title: input.title,
    h1: input.h1 || input.title,
    hub: input.hub,
    cluster: input.cluster,
    pageType: input.pageType,
    primaryKeyword,
    secondaryKeywords: uniq(input.secondaryKeywords || []),
    intent: input.intent,
    semanticDifferentiator: input.semanticDifferentiator,
    priority: input.priority || 'P3',
    schema: input.schema || ['WebPage', 'BreadcrumbList', 'FAQPage'],
    breadcrumbs: ['PSL Fashion', input.hub, input.cluster].filter(Boolean),
    internalLinks: uniq(input.internalLinks || ['/fashion-masculin/', '/blog/', '/pantaloni/']).slice(0, 12),
    avoidCannibalizationWith: uniq(input.avoidCannibalizationWith || []).slice(0, 10),
    faq: input.faq || [
      { q: `Cand merita citita pagina despre ${primaryKeyword}?`, a: 'Cand vrei o explicatie editoriala, exemple concrete si legaturi spre ghiduri apropiate, fara promisiuni comerciale neverificate.' },
      { q: 'Pagina include informatii de stoc sau pret?', a: 'Nu. Informatiile despre stoc, preturi si comanda se verifica pe AtelierAXD.' },
    ],
    contentBrief: input.contentBrief,
  };
  entries.push(entry);
  slugIndex.set(slug, entry);
  keywordIndex.set(primaryKeyword, entry);
}

function p1Content(topic, type) {
  return {
    status: 'draft-ready',
    format: type,
    intro: `${topic} este tratat ca subiect editorial separat, cu accent pe intentia utilizatorului, exemple practice si legaturi catre hub-uri apropiate.`,
    sections: [
      { h2: 'Raspuns rapid', body: `Explica pe scurt ce inseamna ${topic}, cand este relevant si ce trebuie evitat pentru o alegere informata.` },
      { h2: 'Context vestimentar', body: 'Include exemple pentru pantaloni, tricouri, hanorace, incaltaminte si accesorii, acolo unde subiectul permite.' },
      { h2: 'Cum il aplici in tinute masculine', body: 'Ofera formule concrete, cu atentie la proportii, sezon, culoare, material si grad de formalitate.' },
      { h2: 'Greseli frecvente', body: 'Listeaza confuzii, suprapuneri de intentie si exagerari comerciale care trebuie evitate.' },
      { h2: 'Legaturi interne', body: 'Trimite catre pagini parinte, pagini surori si ghiduri complementare, fara ancore repetitive.' },
    ],
    cta: 'Verifica disponibilitatea pe AtelierAXD',
  };
}

function addHub(slug, title, cluster) {
  addEntry({
    slug,
    title,
    hub: title,
    cluster,
    pageType: 'hub',
    primaryKeyword: title.toLowerCase(),
    secondaryKeywords: [`ghid ${title.toLowerCase()}`, `${title.toLowerCase()} barbati`, `fashion masculin ${title.toLowerCase()}`],
    intent: `Navigational + informational: hub principal pentru ${title.toLowerCase()}.`,
    semanticDifferentiator: 'Pagina de navigare editoriala, nu articol granular.',
    priority: 'P1',
    schema: ['CollectionPage', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/fashion-masculin/', '/pantaloni/', '/tricouri/', '/hanorace/', '/tinute/'],
    avoidCannibalizationWith: ['/fashion/', '/blog/', '/news/trenduri/', '/fashion-masculin/'].filter((url) => url !== slug),
    contentBrief: p1Content(title.toLowerCase(), 'hub'),
  });
}

addHub('/culori/', 'Culori', 'culori');
expandedColors.forEach((color, index) => {
  const slug = `/culori/${slugify(color)}/`;
  addEntry({
    slug,
    title: `${color} in moda masculina`,
    hub: 'Culori',
    cluster: `culoare:${color.split(' ')[0]}`,
    pageType: 'color-guide',
    primaryKeyword: `${color} haine barbati`,
    secondaryKeywords: [`culoarea ${color}`, `${color} pantaloni`, `${color} outfit barbati`, `cu ce se asorteaza ${color}`],
    intent: `Informational: defineste culoarea ${color}, asortari si utilizari in tinute masculine.`,
    semanticDifferentiator: `Pagina trateaza culoarea ${color} ca entitate cromatica, nu o combinatie sau un produs.`,
    priority: index < 30 ? 'P1' : index < 120 ? 'P2' : 'P3',
    schema: ['Article', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/culori/', '/combinatii-culori/', '/pantaloni/', `/outfituri/`, `/culori/${slugify(expandedColors[(index + 1) % expandedColors.length])}/`],
    avoidCannibalizationWith: [`/combinatii-culori/${slugify(`${color} cu negru`)}/`, `/pantaloni-${slugify(color)}/`, `/outfit-pantaloni-${slugify(color)}/`],
    contentBrief: index < 30 ? p1Content(`culoarea ${color}`, 'color-guide') : undefined,
  });
});

addHub('/combinatii-culori/', 'Combinatii culori', 'combinatii-culori');
colorPairs.forEach((pair, index) => {
  const [a, b] = pair.split(' cu ');
  addEntry({
    slug: `/combinatii-culori/${slugify(pair)}/`,
    title: `${a} cu ${b} in tinute masculine`,
    hub: 'Combinatii culori',
    cluster: `combinatie-culori:${slugify(a)}`,
    pageType: 'color-combination',
    primaryKeyword: `${a} cu ${b} haine barbati`,
    secondaryKeywords: [`${a} cu ${b} outfit`, `pantaloni ${a} tricou ${b}`, `culori care merg cu ${a}`],
    intent: `Informational: explica daca si cum functioneaza combinatia ${a} + ${b}.`,
    semanticDifferentiator: `Pagina compara relatia dintre doua culori, spre deosebire de paginile individuale ${a} sau ${b}.`,
    priority: index < 25 ? 'P1' : index < 100 ? 'P2' : 'P3',
    internalLinks: ['/combinatii-culori/', `/culori/${slugify(a)}/`, `/culori/${slugify(b)}/`, '/outfituri/', '/pantaloni/'],
    avoidCannibalizationWith: [`/culori/${slugify(a)}/`, `/culori/${slugify(b)}/`],
    contentBrief: index < 25 ? p1Content(`combinatia ${a} cu ${b}`, 'color-combination') : undefined,
  });
});

addHub('/materiale/', 'Materiale', 'materiale');
materials.forEach((material, index) => {
  addEntry({
    slug: `/materiale/${slugify(material)}/`,
    title: `${material}: ghid pentru haine masculine`,
    hub: 'Materiale',
    cluster: `material:${material.split(' ')[0]}`,
    pageType: 'material-guide',
    primaryKeyword: `${material} haine`,
    secondaryKeywords: [`ce este ${material}`, `${material} pantaloni`, `${material} tricouri`, `cum se poarta ${material}`],
    intent: `Informational: caracteristici, avantaje, limite si utilizari pentru ${material}.`,
    semanticDifferentiator: `Pagina explica materialul ${material}, nu amestecuri sau instructiuni de spalare.`,
    priority: index < 20 ? 'P1' : index < 60 ? 'P2' : 'P3',
    internalLinks: ['/materiale/', '/combinatii-materiale/', `/cum-se-spala-${slugify(material)}/`, '/pantaloni/', '/tricouri/'],
    avoidCannibalizationWith: [`/cum-se-spala-${slugify(material)}/`, `/combinatii-materiale/${slugify(`${material} cu bumbac`)}/`],
    contentBrief: index < 20 ? p1Content(`materialul ${material}`, 'material-guide') : undefined,
  });
});

addHub('/combinatii-materiale/', 'Combinatii materiale', 'combinatii-materiale');
materialPairs.forEach((pair, index) => {
  const [a, b] = pair.split(' cu ');
  addEntry({
    slug: `/combinatii-materiale/${slugify(pair)}/`,
    title: `${a} cu ${b}: comportament si confort`,
    hub: 'Combinatii materiale',
    cluster: `amestec:${slugify(a)}`,
    pageType: 'material-combination',
    primaryKeyword: `${a} cu ${b}`,
    secondaryKeywords: [`amestec ${a} ${b}`, `${a} ${b} spalare`, `${a} ${b} haine`],
    intent: `Informational: avantaje, respirabilitate, spalare si sezon pentru ${a} + ${b}.`,
    semanticDifferentiator: 'Pagina trateaza blendul materialelor, nu materialele separat.',
    priority: index < 20 ? 'P1' : index < 80 ? 'P2' : 'P3',
    internalLinks: ['/combinatii-materiale/', `/materiale/${slugify(a)}/`, `/materiale/${slugify(b)}/`, `/cum-se-spala-${slugify(pair)}/`],
    avoidCannibalizationWith: [`/materiale/${slugify(a)}/`, `/materiale/${slugify(b)}/`],
    contentBrief: index < 20 ? p1Content(`amestecul ${a} cu ${b}`, 'material-combination') : undefined,
  });
});

addHub('/intretinere-haine/', 'Intretinere haine', 'spalare-si-intretinere');
[...materials.slice(0, 75), ...materialPairs.slice(0, 130)].forEach((topic, index) => {
  addEntry({
    slug: `/cum-se-spala-${slugify(topic)}/`,
    title: `Cum se spala ${topic}`,
    hub: 'Intretinere haine',
    cluster: topic.includes(' cu ') ? 'spalare-amestecuri' : 'spalare-materiale',
    pageType: 'washing-guide',
    primaryKeyword: `cum se spala ${topic}`,
    secondaryKeywords: [`temperatura spalare ${topic}`, `uscare ${topic}`, `calcare ${topic}`, `greseli spalare ${topic}`],
    intent: `Instructional: temperatura, uscare, calcare si greseli pentru ${topic}.`,
    semanticDifferentiator: 'Pagina este strict procedurala, diferita de ghidul materialului sau blendului.',
    priority: index < 30 ? 'P1' : index < 100 ? 'P2' : 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/intretinere-haine/', '/ingrijire-haine/', topic.includes(' cu ') ? `/combinatii-materiale/${slugify(topic)}/` : `/materiale/${slugify(topic)}/`],
    avoidCannibalizationWith: [topic.includes(' cu ') ? `/combinatii-materiale/${slugify(topic)}/` : `/materiale/${slugify(topic)}/`],
    contentBrief: index < 30 ? p1Content(`spalarea pentru ${topic}`, 'how-to') : undefined,
  });
});

addHub('/pantaloni/', 'Pantaloni', 'pantaloni');
const pantPages = uniq([
  ...pantTypes,
  ...pantTypes.slice(0, 18).flatMap((type) => expandedColors.slice(0, 9).map((color) => `${type} ${color}`)),
  ...pantTypes.slice(0, 16).flatMap((type) => materials.slice(0, 8).map((mat) => `${type} din ${mat}`)),
  ...pantTypes.slice(0, 14).flatMap((type) => seasons.slice(0, 5).map((season) => `${type} pentru ${season}`)),
]).slice(0, 330);
pantPages.forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de stil masculin`,
    hub: 'Pantaloni',
    cluster: topic.includes('din ') ? 'pantaloni-material' : topic.match(/negru|bej|gri|bleumarin|kaki|alb/) ? 'pantaloni-culoare' : 'pantaloni-tip',
    pageType: 'pants-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} outfit`, `${topic} marimi`, `${topic} materiale`],
    intent: `Commercial investigation + informational: explica tipul ${topic}, fara checkout local.`,
    semanticDifferentiator: `Pagina este despre categoria ${topic}, nu despre outfit complet sau culoare izolata.`,
    priority: index < 35 ? 'P1' : index < 140 ? 'P2' : 'P3',
    schema: ['CollectionPage', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/pantaloni/', '/outfituri/', '/marimi-si-fit/', '/materiale/', '/culori/'],
    avoidCannibalizationWith: [`/outfit-${slugify(topic)}/`, `/culori/${slugify(topic.replace(/^pantaloni\s+/, ''))}/`],
    contentBrief: index < 35 ? p1Content(topic, 'pants-guide') : undefined,
  });
});

addHub('/outfituri/', 'Outfituri', 'outfituri');
const outfitTopics = uniq([
  ...pantTypes.slice(0, 20).flatMap((type) => expandedColors.slice(0, 8).map((color) => `outfit ${type} ${color}`)),
  ...['tricou alb oversize', 'tricou negru oversize', 'hanorac negru', 'hanorac gri', 'camasa alba', 'tricou bej', 'pantaloni cargo negri', 'pantaloni in bej'].flatMap((piece) => seasons.slice(0, 8).map((season) => `outfit ${piece} ${season}`)),
]).slice(0, 320);
outfitTopics.forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: idee de tinuta masculina`,
    hub: 'Outfituri',
    cluster: topic.includes('pantaloni') ? 'outfit-pantaloni' : topic.includes('tricou') ? 'outfit-tricouri' : 'outfit-layering',
    pageType: 'outfit-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} culori`, `${topic} materiale`, `${topic} sezon`],
    intent: `Inspirational + instructional: propune structura de tinuta pentru ${topic}.`,
    semanticDifferentiator: 'Pagina trateaza combinatia completa de piese, nu categoria produsului separat.',
    priority: index < 35 ? 'P1' : index < 130 ? 'P2' : 'P3',
    schema: ['Article', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/outfituri/', '/pantaloni/', '/tricouri/', '/hanorace/', '/combinatii-culori/'],
    avoidCannibalizationWith: [`/${slugify(topic.replace(/^outfit\s+/, ''))}/`],
    contentBrief: index < 35 ? p1Content(topic, 'outfit-guide') : undefined,
  });
});

addHub('/marimi-si-fit/', 'Marimi si fit', 'sizing-fit');
[
  'ghid marimi eu', 'ghid marimi us', 'ghid marimi uk', 'ghid marimi it',
  ...garments.map((g) => `ghid marimi ${g}`),
  ...fits,
  'cum masori talia', 'cum masori soldul', 'cum masori lungimea piciorului', 'cum masori lungimea bratului', 'cum alegi marimea online',
  ...garments.flatMap((g) => fits.map((fit) => `${fit} la ${g}`)),
  ...garments.flatMap((g) => ['S', 'M', 'L', 'XL', 'XXL'].map((size) => `marimea ${size} la ${g}`)),
].slice(0, 170).forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de masurare si proportii`,
    hub: 'Marimi si fit',
    cluster: topic.includes('fit') ? 'fit' : topic.includes('masori') ? 'masuratori' : 'marimi',
    pageType: 'sizing-fit-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} online`, `${topic} tabel`, `${topic} explicat`],
    intent: `Instructional: clarifica masurarea, conversia sau fitul pentru ${topic}.`,
    semanticDifferentiator: 'Pagina raspunde unei intrebari de masurare/fit, nu unei cautari de styling.',
    priority: index < 25 ? 'P1' : index < 80 ? 'P2' : 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/marimi-si-fit/', '/pantaloni/', '/ghiduri/marimi/', '/outfituri/'],
    avoidCannibalizationWith: ['/ghid-marimi/', '/ghiduri/marimi/'],
    contentBrief: index < 25 ? p1Content(topic, 'sizing-fit-guide') : undefined,
  });
});

addHub('/ingrijire-haine/', 'Ingrijire haine', 'longevitate');
[
  ...careProblems,
  ...careProblems.flatMap((problem) => garments.slice(0, 5).map((g) => `${problem} la ${g}`)),
  ...['pete de transpiratie', 'pete de vin', 'pete de ulei', 'pete de sange', 'pete de fond de ten', 'miros de transpiratie', 'scame', 'cute'].flatMap((p) => materials.slice(0, 12).map((m) => `${p} pe ${m}`)),
].slice(0, 220).forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid practic`,
    hub: 'Ingrijire haine',
    cluster: topic.includes('pete') ? 'pete' : topic.includes('repari') ? 'reparatii' : 'longevitate',
    pageType: 'care-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} haine`, `${topic} acasa`, `${topic} greseli`, `${topic} materiale`],
    intent: `Instructional: pasi practici pentru ${topic}.`,
    semanticDifferentiator: 'Pagina trateaza longevitatea si interventia practica, nu spalarea standard a materialului.',
    priority: index < 30 ? 'P1' : index < 100 ? 'P2' : 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/ingrijire-haine/', '/intretinere-haine/', '/materiale/'],
    avoidCannibalizationWith: ['/intretinere-haine/'],
    contentBrief: index < 30 ? p1Content(topic, 'care-guide') : undefined,
  });
});

addHub('/stil-si-ocazii/', 'Stil si ocazii', 'stil-ocazii');
[
  ...occasions,
  ...occasions.flatMap((occasion) => garments.slice(0, 5).map((g) => `${g} pentru ${occasion}`)),
  ...occasions.flatMap((occasion) => expandedColors.slice(0, 6).map((color) => `ce porti ${color} la ${occasion}`)),
].slice(0, 330).forEach((topic, index) => {
  const normalized = topic.startsWith('ce porti') ? topic : `ce porti la ${topic}`;
  addEntry({
    slug: `/${slugify(normalized)}/`,
    title: `${normalized}: ghid masculin`,
    hub: 'Stil si ocazii',
    cluster: topic.includes('business') || topic.includes('formal') ? 'dress-code' : 'evenimente',
    pageType: 'occasion-guide',
    primaryKeyword: normalized,
    secondaryKeywords: [`${normalized} barbat`, `${normalized} tinuta`, `${normalized} pantaloni`, `${normalized} pantofi`],
    intent: `Instructional: ajuta cititorul sa aleaga tinuta potrivita pentru ${topic}.`,
    semanticDifferentiator: 'Pagina este despre context social/dress code, nu despre piesa individuala.',
    priority: index < 35 ? 'P1' : index < 130 ? 'P2' : 'P3',
    schema: ['Article', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/stil-si-ocazii/', '/outfituri/', '/incaltaminte/', '/accesorii/', '/culori/'],
    avoidCannibalizationWith: [`/outfit-${slugify(topic)}/`],
    contentBrief: index < 35 ? p1Content(normalized, 'occasion-guide') : undefined,
  });
});

addHub('/tipuri-de-corp/', 'Tipuri de corp', 'corp-proportii');
[
  ...bodyTopics,
  ...bodyTopics.slice(5).flatMap((topic) => garments.slice(0, 7).map((g) => `${topic} ${g}`)),
  ...fits.flatMap((fit) => bodyTopics.slice(0, 5).map((body) => `${fit} pentru ${body}`)),
].slice(0, 170).forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: proportii in stil masculin`,
    hub: 'Tipuri de corp',
    cluster: topic.includes('corp') ? 'tip-corp' : 'proportii',
    pageType: 'body-proportion-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} pantaloni`, `${topic} fit`, `${topic} outfit`],
    intent: `Informational: explica proportii si alegeri vestimentare pentru ${topic}.`,
    semanticDifferentiator: 'Pagina se diferentiaza prin morfologie si proportii, nu prin produs sau culoare.',
    priority: index < 20 ? 'P1' : index < 70 ? 'P2' : 'P3',
    internalLinks: ['/tipuri-de-corp/', '/marimi-si-fit/', '/pantaloni/', '/outfituri/'],
    avoidCannibalizationWith: ['/marimi-si-fit/'],
    contentBrief: index < 20 ? p1Content(topic, 'body-proportion-guide') : undefined,
  });
});

addHub('/sezoane/', 'Sezoane', 'sezon-tranzitie');
[
  'primavara', 'vara', 'toamna', 'iarna', 'cum faci layering primavara', 'cum faci layering toamna',
  'garderoba capsula vara', 'garderoba capsula iarna', 'piese valabile tot anul', 'haine pentru canicula',
  'haine pentru ploaie', 'haine pentru vreme schimbatoare',
  ...seasons.flatMap((season) => garments.slice(0, 6).map((g) => `${g} pentru ${season}`)),
  ...seasons.flatMap((season) => colors.slice(0, 12).map((color) => `${color} in tinute de ${season}`)),
].slice(0, 220).forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de sezon`,
    hub: 'Sezoane',
    cluster: topic.includes('vara') || topic.includes('canicula') ? 'vara' : topic.includes('iarna') ? 'iarna' : 'tranzitie',
    pageType: 'season-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} haine`, `${topic} pantaloni`, `${topic} layering`],
    intent: `Informational: adapteaza garderoba masculina pentru ${topic}.`,
    semanticDifferentiator: 'Pagina este despre context meteo/sezonier, nu despre produsul generic.',
    priority: index < 25 ? 'P1' : index < 90 ? 'P2' : 'P3',
    internalLinks: ['/sezoane/', '/outfituri/', '/materiale/', '/culori/'],
    avoidCannibalizationWith: ['/outfituri/'],
    contentBrief: index < 25 ? p1Content(topic, 'season-guide') : undefined,
  });
});

addHub('/cultura-fashion/', 'Cultura fashion', 'tendinte-cultura');
[
  ...cultureTopics,
  ...cultureTopics.flatMap((topic) => ['barbati', 'romania', 'streetwear', 'casual'].map((angle) => `${topic} ${angle}`)),
  ...pantTypes.slice(0, 20).map((type) => `istoria ${type}`),
  ...fits.map((fit) => `${fit} vs relaxed fit`),
].slice(0, 320).forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: context si evolutie`,
    hub: 'Cultura fashion',
    cluster: topic.includes('vs') ? 'comparatii-cultura' : 'istorie-tendinte',
    pageType: 'culture-article',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} moda masculina`, `${topic} istorie`, `${topic} tendinte`, `${topic} explicat`],
    intent: `Informational: explica originea, evolutia sau diferenta culturala pentru ${topic}.`,
    semanticDifferentiator: 'Pagina este culturala/istorica, nu ghid practic de cumparare.',
    priority: index < 25 ? 'P1' : index < 100 ? 'P2' : 'P3',
    internalLinks: ['/cultura-fashion/', '/pantaloni/', '/stil-si-ocazii/', '/outfituri/'],
    avoidCannibalizationWith: ['/news/trenduri/', '/fashion/'],
    contentBrief: index < 25 ? p1Content(topic, 'culture-article') : undefined,
  });
});

addHub('/incaltaminte/', 'Incaltaminte', 'incaltaminte');
[
  ...footwear,
  ...footwear.flatMap((shoe) => pantTypes.slice(0, 12).map((pant) => `${shoe} cu ${pant}`)),
  ...expandedColors.slice(0, 60).map((color) => `ce pantofi merg cu pantaloni ${color}`),
].slice(0, 320).forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid pentru tinute masculine`,
    hub: 'Incaltaminte',
    cluster: topic.includes('pantaloni') ? 'pantofi-cu-pantaloni' : 'tip-incaltaminte',
    pageType: 'footwear-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} outfit`, `${topic} pantaloni`, `${topic} culori`],
    intent: `Informational: explica alegerea incaltamintei pentru ${topic}.`,
    semanticDifferentiator: 'Pagina raspunde intentiei despre incaltaminte, nu despre pantalon ca piesa principala.',
    priority: index < 25 ? 'P1' : index < 100 ? 'P2' : 'P3',
    internalLinks: ['/incaltaminte/', '/pantaloni/', '/outfituri/', '/stil-si-ocazii/'],
    avoidCannibalizationWith: ['/pantaloni/', '/outfituri/'],
    contentBrief: index < 25 ? p1Content(topic, 'footwear-guide') : undefined,
  });
});

addHub('/accesorii/', 'Accesorii', 'accesorii');
[
  ...accessories,
  'cum alegi ochelarii dupa forma fetei', 'cum alegi ceasul', 'cum alegi cravata', 'cum alegi cureaua',
  ...accessories.flatMap((acc) => occasions.slice(0, 12).map((occasion) => `${acc} pentru ${occasion}`)),
  ...accessories.flatMap((acc) => colors.slice(0, 10).map((color) => `${acc} ${color}`)),
].slice(0, 320).forEach((topic, index) => {
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de accesorii masculine`,
    hub: 'Accesorii',
    cluster: topic.includes('pentru') ? 'accesorii-ocazii' : 'tip-accesoriu',
    pageType: 'accessory-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} outfit`, `${topic} stil`, `${topic} culori`],
    intent: `Informational: explica rolul accesoriului in tinute masculine pentru ${topic}.`,
    semanticDifferentiator: 'Pagina trateaza accesoriul ca element de styling, nu piesele de imbracaminte principale.',
    priority: index < 25 ? 'P1' : index < 100 ? 'P2' : 'P3',
    internalLinks: ['/accesorii/', '/stil-si-ocazii/', '/outfituri/', '/culori/'],
    avoidCannibalizationWith: ['/outfituri/'],
    contentBrief: index < 25 ? p1Content(topic, 'accessory-guide') : undefined,
  });
});

const femaleSecondary = [
  'rochii', 'fuste', 'genti dama', 'sandale dama', 'pantofi dama', 'tinute dama',
  'rochii de vara', 'fuste plisate', 'genti raffia', 'sandale plate', 'tinute dama vara',
];
femaleSecondary.forEach((topic, index) => addEntry({
  slug: `/${slugify(topic)}/`,
  title: `${topic}: subiect secundar monitorizat`,
  hub: 'Femei secundar',
  cluster: 'femei-search-console',
  pageType: 'secondary-opportunity',
  primaryKeyword: topic,
  secondaryKeywords: [`${topic} fashion`, `${topic} outfit`, `${topic} culori`],
  intent: 'Secondary informational: se publica doar daca Search Console confirma cerere si impresii.',
  semanticDifferentiator: 'Pagina este marcata ca oportunitate secundara, nu focus principal PSL Fashion.',
  priority: 'P4',
  indexable: false,
  internalLinks: ['/fashion/', '/blog/'],
  avoidCannibalizationWith: ['/fashion-masculin/'],
}));

function hubCount(hub) {
  return entries.filter((entry) => entry.hub === hub).length;
}

function supplementColorCombinations() {
  const anchors = ['negru', 'alb', 'bej', 'gri', 'bleumarin', 'kaki', 'crem', 'antracit'];
  for (const color of expandedColors) {
    for (const anchor of anchors) {
      if (hubCount('Combinatii culori') >= 250) return;
      if (color === anchor) continue;
      const pair = `${color} cu ${anchor}`;
      addEntry({
        slug: `/combinatii-culori/${slugify(pair)}/`,
        title: `${pair} in tinute masculine`,
        hub: 'Combinatii culori',
        cluster: `combinatie-culori:${slugify(anchor)}`,
        pageType: 'color-combination',
        primaryKeyword: `${pair} haine barbati`,
        secondaryKeywords: [`${pair} outfit`, `asortare ${pair}`, `pantaloni ${color} cu top ${anchor}`],
        intent: `Informational: explica rolul combinatiei ${pair} in garderoba masculina.`,
        semanticDifferentiator: 'Pagina are intentie de asortare intre doua culori, nu de definire a unei culori individuale.',
        priority: 'P3',
        internalLinks: ['/combinatii-culori/', `/culori/${slugify(color)}/`, `/culori/${slugify(anchor)}/`, '/outfituri/'],
        avoidCannibalizationWith: [`/culori/${slugify(color)}/`, `/culori/${slugify(anchor)}/`],
      });
    }
  }
}

function supplementMaterials() {
  const bases = ['bumbac', 'lana', 'poliester', 'nylon', 'in', 'denim', 'jersey', 'fleece', 'modal', 'vascoza'];
  const traits = ['greu', 'subtire', 'elastic', 'respirabil', 'opac', 'mat', 'premium', 'tehnic', 'prespalat', 'moale'];
  for (const base of bases) {
    for (const trait of traits) {
      if (hubCount('Materiale') >= 120) return;
      const material = `${base} ${trait}`;
      addEntry({
        slug: `/materiale/${slugify(material)}/`,
        title: `${material}: ghid pentru haine masculine`,
        hub: 'Materiale',
        cluster: `material:${base}`,
        pageType: 'material-guide',
        primaryKeyword: `${material} haine`,
        secondaryKeywords: [`ce este ${material}`, `${material} pantaloni`, `${material} tricouri`],
        intent: `Informational: explica proprietatile materialului ${material}.`,
        semanticDifferentiator: 'Pagina trateaza o varianta tehnica de material, nu materialul de baza.',
        priority: 'P3',
        internalLinks: ['/materiale/', `/materiale/${slugify(base)}/`, '/intretinere-haine/'],
        avoidCannibalizationWith: [`/materiale/${slugify(base)}/`],
      });
    }
  }
}

function supplementMaterialCombinations() {
  for (const a of materials.slice(0, 85)) {
    for (const b of materials.slice(10, 95)) {
      if (hubCount('Combinatii materiale') >= 220) return;
      if (a === b) continue;
      const pair = `${a} cu ${b}`;
      addEntry({
        slug: `/combinatii-materiale/${slugify(pair)}/`,
        title: `${pair}: confort, spalare si sezon`,
        hub: 'Combinatii materiale',
        cluster: `amestec:${slugify(a.split(' ')[0])}`,
        pageType: 'material-combination',
        primaryKeyword: `${pair} haine`,
        secondaryKeywords: [`amestec ${pair}`, `spalare ${pair}`, `respirabilitate ${pair}`],
        intent: `Informational: compara comportamentul amestecului ${pair}.`,
        semanticDifferentiator: 'Pagina trateaza blendul si comportamentul lui practic, nu materialele izolate.',
        priority: 'P3',
        internalLinks: ['/combinatii-materiale/', `/materiale/${slugify(a)}/`, `/materiale/${slugify(b)}/`],
        avoidCannibalizationWith: [`/materiale/${slugify(a)}/`, `/materiale/${slugify(b)}/`],
      });
    }
  }
}

function supplementGeneric(hub, target, sourceTopics, contexts, build) {
  for (const topic of sourceTopics) {
    for (const context of contexts) {
      if (hubCount(hub) >= target) return;
      build(topic, context);
    }
  }
}

supplementColorCombinations();
supplementMaterials();
supplementMaterialCombinations();

supplementGeneric('Outfituri', 320, pantTypes, [...seasons, ...occasions.slice(0, 10)], (type, context) => {
  const topic = `outfit ${type} pentru ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: formula de tinuta masculina`,
    hub: 'Outfituri',
    cluster: 'outfit-context',
    pageType: 'outfit-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} culori`, `${topic} materiale`],
    intent: `Inspirational: construieste o tinuta cu ${type} pentru ${context}.`,
    semanticDifferentiator: 'Pagina combina piesa si contextul de purtare, diferit de ghidul generic al piesei.',
    priority: 'P3',
    internalLinks: ['/outfituri/', '/pantaloni/', '/stil-si-ocazii/', '/sezoane/'],
    avoidCannibalizationWith: [`/${slugify(type)}/`, `/${slugify(`ce porti la ${context}`)}/`],
  });
});

supplementGeneric('Marimi si fit', 170, garments, fits, (garment, fit) => {
  const topic = `cum alegi ${fit} la ${garment}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de fit`,
    hub: 'Marimi si fit',
    cluster: 'fit-pe-piesa',
    pageType: 'sizing-fit-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${fit} ${garment}`, `marime ${garment} ${fit}`, `proportii ${garment}`],
    intent: `Instructional: explica alegerea fitului ${fit} pentru ${garment}.`,
    semanticDifferentiator: 'Pagina imbina fitul cu piesa concreta, nu tabel general de marimi.',
    priority: 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/marimi-si-fit/', '/ghiduri/marimi/', '/tipuri-de-corp/'],
    avoidCannibalizationWith: [`/${slugify(fit)}/`, `/${slugify(`ghid marimi ${garment}`)}/`],
  });
});

supplementGeneric('Ingrijire haine', 220, careProblems, materials.slice(0, 20), (problem, material) => {
  const topic = `${problem} pe ${material}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: pasi practici`,
    hub: 'Ingrijire haine',
    cluster: problem.includes('pete') ? 'pete-pe-materiale' : 'longevitate-pe-materiale',
    pageType: 'care-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} haine`, `${topic} acasa`, `greseli ${topic}`],
    intent: `Instructional: explica interventia pentru ${problem} pe ${material}.`,
    semanticDifferentiator: 'Pagina combina problema concreta cu materialul afectat, diferita de ghidul general de spalare.',
    priority: 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/ingrijire-haine/', `/materiale/${slugify(material)}/`, '/intretinere-haine/'],
    avoidCannibalizationWith: [`/cum-se-spala-${slugify(material)}/`, `/${slugify(problem)}/`],
  });
});

supplementGeneric('Stil si ocazii', 320, occasions, fits.concat(expandedColors.slice(0, 10)), (occasion, angle) => {
  const topic = `ce porti la ${occasion} cu ${angle}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid masculin`,
    hub: 'Stil si ocazii',
    cluster: 'ocazii-cu-restrictie',
    pageType: 'occasion-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbat`, `${topic} tinuta`, `${topic} pantaloni`],
    intent: `Instructional: rezolva tinuta pentru ${occasion} cand criteriul principal este ${angle}.`,
    semanticDifferentiator: 'Pagina are o restrictie de styling clara, diferita de pagina generala a ocaziei.',
    priority: 'P3',
    internalLinks: ['/stil-si-ocazii/', '/outfituri/', '/marimi-si-fit/', '/culori/'],
    avoidCannibalizationWith: [`/${slugify(`ce porti la ${occasion}`)}/`, `/${slugify(angle)}/`],
  });
});

supplementGeneric('Tipuri de corp', 160, bodyTopics, [...pantTypes.slice(0, 12), ...fits], (body, item) => {
  const topic = `${item} pentru ${body}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: proportii si alegeri`,
    hub: 'Tipuri de corp',
    cluster: 'piesa-pe-tip-corp',
    pageType: 'body-proportion-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} fit`, `${topic} outfit`],
    intent: `Informational: explica alegerea ${item} pentru ${body}.`,
    semanticDifferentiator: 'Pagina are intentie morfologica si o piesa concreta, nu ghid general de fit.',
    priority: 'P3',
    internalLinks: ['/tipuri-de-corp/', '/marimi-si-fit/', '/pantaloni/'],
    avoidCannibalizationWith: [`/${slugify(body)}/`, `/${slugify(item)}/`],
  });
});

supplementGeneric('Sezoane', 220, seasons, [...pantTypes.slice(0, 10), ...materials.slice(0, 10)], (season, item) => {
  const topic = `${item} pentru ${season}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de sezon`,
    hub: 'Sezoane',
    cluster: 'piese-pe-sezon',
    pageType: 'season-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} materiale`, `${topic} outfit`],
    intent: `Informational: explica folosirea ${item} in contextul ${season}.`,
    semanticDifferentiator: 'Pagina combina sezonul cu piesa/materialul, nu este un hub general de sezon.',
    priority: 'P3',
    internalLinks: ['/sezoane/', '/materiale/', '/outfituri/'],
    avoidCannibalizationWith: [`/${slugify(season)}/`, `/${slugify(item)}/`],
  });
});

supplementGeneric('Cultura fashion', 300, cultureTopics.concat(pantTypes), ['origine', 'evolutie', 'romania', 'streetwear', 'casual', 'barbati', 'anii 90', 'anii 2000'], (topic, angle) => {
  const full = `${topic} ${angle}`;
  addEntry({
    slug: `/${slugify(full)}/`,
    title: `${full}: context fashion masculin`,
    hub: 'Cultura fashion',
    cluster: angle.includes('anii') ? 'decade-fashion' : 'istorie-tendinte',
    pageType: 'culture-article',
    primaryKeyword: full,
    secondaryKeywords: [`${full} moda`, `${full} explicat`, `${full} tendinte`],
    intent: `Informational: ofera context cultural pentru ${topic}, din unghiul ${angle}.`,
    semanticDifferentiator: 'Pagina are un unghi cultural explicit, nu ghid de styling sau produs.',
    priority: 'P3',
    internalLinks: ['/cultura-fashion/', '/pantaloni/', '/outfituri/'],
    avoidCannibalizationWith: [`/${slugify(topic)}/`, '/news/trenduri/'],
  });
});

supplementGeneric('Incaltaminte', 320, footwear, [...expandedColors.slice(0, 10), ...occasions.slice(0, 12)], (shoe, context) => {
  const topic = context.includes(' ') ? `${shoe} pentru ${context}` : `${shoe} ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de incaltaminte masculina`,
    hub: 'Incaltaminte',
    cluster: context.includes(' ') ? 'incaltaminte-ocazii' : 'incaltaminte-culori',
    pageType: 'footwear-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} pantaloni`, `${topic} outfit`],
    intent: `Informational: explica alegerea de incaltaminte pentru ${context}.`,
    semanticDifferentiator: 'Pagina porneste de la incaltaminte si context, nu de la pantaloni.',
    priority: 'P3',
    internalLinks: ['/incaltaminte/', '/pantaloni/', '/stil-si-ocazii/'],
    avoidCannibalizationWith: [`/${slugify(shoe)}/`],
  });
});

const deepTargets = {
  'Culori': 2000,
  'Combinatii culori': 1500,
  'Materiale': 1000,
  'Combinatii materiale': 1500,
  'Intretinere haine': 1100,
  'Pantaloni': 2000,
  'Outfituri': 2200,
  'Marimi si fit': 2200,
  'Ingrijire haine': 2200,
  'Stil si ocazii': 15000,
  'Tipuri de corp': 1000,
  'Sezoane': 2500,
  'Cultura fashion': 12000,
  'Incaltaminte': 2000,
  'Accesorii': 2000,
};

function topUp(hub, sources, contexts, build) {
  for (const source of sources) {
    for (const context of contexts) {
      if (hubCount(hub) >= deepTargets[hub]) return;
      build(source, context);
    }
  }
}

const styleContexts = uniq([...garments, ...fits, ...seasons, ...occasions, ...['streetwear', 'smart casual', 'business casual', 'all black', 'capsule wardrobe']]);
const practicalContexts = uniq([...garments, ...seasons, ...['birou', 'facultate', 'city break', 'weekend', 'vreme calda', 'vreme rece', 'layering']]);
const silhouettes = ['scund', 'inalt', 'slab', 'solid', 'atletic', 'umeri lati', 'umeri ingusti', 'talie lata', 'picioare lungi', 'picioare scurte'];
const cityContexts = ['Bucuresti', 'Cluj', 'Iasi', 'Timisoara', 'Constanta', 'Brasov', 'Sibiu', 'Craiova', 'Galati', 'Focsani', 'Oradea', 'Arad'];
const moments = ['dimineata', 'seara', 'weekend', 'vacanta', 'drum lung', 'zbor avion', 'terasa', 'restaurant', 'concert', 'festival', 'plimbare', 'sedinta foto'];
const styleConstraints = [
  ...garments,
  ...fits,
  ...footwear,
  ...accessories,
  ...expandedColors.slice(0, 80),
  ...materials.slice(0, 60),
  ...seasons,
  ...silhouettes.map((item) => `barbat ${item}`),
  ...cityContexts.map((city) => `oras ${city}`),
  ...moments,
  'fara sacou', 'cu sacou', 'fara camasa', 'cu tricou alb', 'cu tricou negru', 'cu sneakers albi',
  'cu pantaloni largi', 'cu pantaloni cargo', 'cu hanorac', 'cu geaca denim', 'cu geaca piele',
  'buget redus', 'minimalist', 'streetwear discret', 'smart casual relaxat', 'tinuta monocroma',
  'culori neutre', 'materiale respirabile', 'layering subtire', 'piese oversized', 'piese slim',
];
const expandedOccasionSources = uniq([
  ...occasions,
  ...occasions.flatMap((occasion) => seasons.map((season) => `${occasion} ${season}`)),
  ...occasions.flatMap((occasion) => silhouettes.map((shape) => `${occasion} pentru barbat ${shape}`)),
  ...occasions.flatMap((occasion) => cityContexts.map((city) => `${occasion} in ${city}`)),
]);
const cultureSources = uniq([
  ...cultureTopics,
  ...pantTypes,
  ...fits,
  ...footwear,
  ...accessories,
  ...garments.map((garment) => `istoria ${garment}`),
  ...materials.slice(0, 80).map((material) => `evolutia materialului ${material}`),
  ...expandedColors.slice(0, 80).map((color) => `semnificatia culorii ${color}`),
  ...occasions.map((occasion) => `evolutia tinutelor pentru ${occasion}`),
  ...seasons.map((season) => `moda masculina in ${season}`),
  ...cityContexts.map((city) => `streetwear in ${city}`),
  ...silhouettes.map((shape) => `moda masculina pentru barbat ${shape}`),
]);
const cultureAngles = uniq([
  'origine', 'evolutie', 'romania', 'barbati', 'streetwear', 'workwear', 'techwear', 'anii 90', 'anii 2000',
  'minimalism', 'tendinte', 'influente', 'social media', 'lookbook', 'subculturi', 'muzica', 'sport',
  'utilitar', 'lux discret', 'garderoba capsula', 'estetica urbana', 'croieli relaxate', 'materiale tehnice',
  'culori neutre', 'proportii', 'sneakers culture', 'festivaluri', 'birou modern', 'generatia z', 'barbati 30 plus',
  ...cityContexts.map((city) => `context ${city}`),
  ...seasons.map((season) => `context ${season}`),
  ...expandedColors.slice(0, 30).map((color) => `culoarea ${color}`),
]);
const fitContexts = uniq([
  ...expandedColors.slice(0, 30),
  ...pantTypes.slice(0, 40),
  ...occasions,
  ...seasons,
  ...silhouettes,
  ...materials.slice(0, 40),
  ...moments,
  ...cityContexts,
]);
const careContexts = uniq([...garments, ...materials.slice(0, 80), ...seasons, ...moments, ...expandedColors.slice(0, 30)]);
const seasonContexts = uniq([...garments, ...materials.slice(0, 80), ...expandedColors.slice(0, 80), ...pantTypes.slice(0, 60), ...occasions, ...footwear, ...accessories.slice(0, 20), ...moments]);
const footwearContexts = uniq([...pantPages.slice(0, 120), ...expandedColors.slice(0, 80), ...occasions, ...seasons, ...fits, ...materials.slice(0, 30), ...silhouettes, ...moments]);
const accessoryContexts = uniq([...occasions, ...expandedColors.slice(0, 80), ...fits, ...bodyTopics, ...seasons, ...garments, ...footwear, ...moments, ...cityContexts, ...materials.slice(0, 30)]);

topUp('Culori', expandedColors, styleContexts, (color, context) => {
  const topic = `${color} in ${context}`;
  addEntry({
    slug: `/culori/${slugify(topic)}/`,
    title: `${topic}: ghid cromatic masculin`,
    hub: 'Culori',
    cluster: `culoare-aplicata:${slugify(color.split(' ')[0])}`,
    pageType: 'color-context-guide',
    primaryKeyword: `${topic} barbati`,
    secondaryKeywords: [`${color} ${context} outfit`, `asortare ${color} ${context}`, `${color} haine ${context}`],
    intent: `Informational: aplica nuanta ${color} in contextul ${context}.`,
    semanticDifferentiator: 'Pagina trateaza o culoare intr-un context vestimentar specific, nu definitia generala a culorii.',
    priority: 'P3',
    internalLinks: ['/culori/', `/culori/${slugify(color)}/`, '/combinatii-culori/', '/outfituri/'],
    avoidCannibalizationWith: [`/culori/${slugify(color)}/`, `/${slugify(context)}/`],
  });
});

topUp('Combinatii culori', colorPairs, styleContexts, (pair, context) => {
  const topic = `${pair} in ${context}`;
  const [a, b] = pair.split(' cu ');
  addEntry({
    slug: `/combinatii-culori/${slugify(topic)}/`,
    title: `${topic}: asortare pentru tinute masculine`,
    hub: 'Combinatii culori',
    cluster: `combinatie-context:${slugify(a)}`,
    pageType: 'color-combination-context',
    primaryKeyword: `${topic} barbati`,
    secondaryKeywords: [`${pair} outfit ${context}`, `${a} ${b} ${context}`, `asortare ${pair}`],
    intent: `Informational: explica folosirea combinatiei ${pair} in contextul ${context}.`,
    semanticDifferentiator: 'Pagina adauga context de purtare unei combinatii de culori, diferit de combinatia generala.',
    priority: 'P3',
    internalLinks: ['/combinatii-culori/', `/culori/${slugify(a)}/`, `/culori/${slugify(b)}/`, '/outfituri/'],
    avoidCannibalizationWith: [`/combinatii-culori/${slugify(pair)}/`, `/culori/${slugify(a)}/`, `/culori/${slugify(b)}/`],
  });
});

topUp('Materiale', materials, practicalContexts, (material, context) => {
  const topic = `${material} pentru ${context}`;
  addEntry({
    slug: `/materiale/${slugify(topic)}/`,
    title: `${topic}: ghid de material`,
    hub: 'Materiale',
    cluster: `material-context:${slugify(material.split(' ')[0])}`,
    pageType: 'material-context-guide',
    primaryKeyword: `${topic} haine`,
    secondaryKeywords: [`${material} ${context}`, `${material} avantaje ${context}`, `${material} confort`],
    intent: `Informational: evalueaza materialul ${material} pentru ${context}.`,
    semanticDifferentiator: 'Pagina trateaza materialul intr-un scenariu de utilizare, nu materialul in abstract.',
    priority: 'P3',
    internalLinks: ['/materiale/', `/materiale/${slugify(material)}/`, '/intretinere-haine/', '/sezoane/'],
    avoidCannibalizationWith: [`/materiale/${slugify(material)}/`, `/${slugify(context)}/`],
  });
});

topUp('Combinatii materiale', materialPairs, practicalContexts, (pair, context) => {
  const [a, b] = pair.split(' cu ');
  const topic = `${pair} pentru ${context}`;
  addEntry({
    slug: `/combinatii-materiale/${slugify(topic)}/`,
    title: `${topic}: confort si comportament`,
    hub: 'Combinatii materiale',
    cluster: `amestec-context:${slugify(a)}`,
    pageType: 'material-combination-context',
    primaryKeyword: `${topic} haine`,
    secondaryKeywords: [`${pair} ${context}`, `amestec ${pair}`, `spalare ${pair}`],
    intent: `Informational: analizeaza blendul ${pair} in contextul ${context}.`,
    semanticDifferentiator: 'Pagina combina blendul cu o utilizare concreta, diferita de ghidul blendului general.',
    priority: 'P3',
    internalLinks: ['/combinatii-materiale/', `/combinatii-materiale/${slugify(pair)}/`, `/materiale/${slugify(a)}/`, `/materiale/${slugify(b)}/`],
    avoidCannibalizationWith: [`/combinatii-materiale/${slugify(pair)}/`, `/materiale/${slugify(a)}/`, `/materiale/${slugify(b)}/`],
  });
});

topUp('Intretinere haine', uniq([...materials, ...materialPairs]), garments.concat(seasons), (topic, context) => {
  const full = `cum se spala ${context} din ${topic}`;
  addEntry({
    slug: `/${slugify(full)}/`,
    title: `${full}: temperatura, uscare si calcare`,
    hub: 'Intretinere haine',
    cluster: topic.includes(' cu ') ? 'spalare-amestec-pe-piesa' : 'spalare-material-pe-piesa',
    pageType: 'washing-context-guide',
    primaryKeyword: full,
    secondaryKeywords: [`spalare ${context} ${topic}`, `uscare ${context} ${topic}`, `calcare ${context} ${topic}`],
    intent: `Instructional: explica spalarea pentru ${context} din ${topic}.`,
    semanticDifferentiator: 'Pagina are instructiuni pentru piesa + material, nu doar materialul generic.',
    priority: 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/intretinere-haine/', '/materiale/', topic.includes(' cu ') ? `/combinatii-materiale/${slugify(topic)}/` : `/materiale/${slugify(topic)}/`],
    avoidCannibalizationWith: [`/cum-se-spala-${slugify(topic)}/`, topic.includes(' cu ') ? `/combinatii-materiale/${slugify(topic)}/` : `/materiale/${slugify(topic)}/`],
  });
});

topUp('Pantaloni', pantPages, uniq([...expandedColors.slice(0, 25), ...materials.slice(0, 25), ...fits, ...seasons, ...occasions.slice(0, 12)]), (pant, context) => {
  const topic = context.startsWith('pentru') ? `${pant} ${context}` : `${pant} ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de pantaloni barbati`,
    hub: 'Pantaloni',
    cluster: context.includes('fit') ? 'pantaloni-fit' : materials.includes(context) ? 'pantaloni-material' : expandedColors.includes(context) ? 'pantaloni-culoare' : 'pantaloni-context',
    pageType: 'pants-context-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} outfit`, `${topic} marimi`, `${topic} materiale`],
    intent: `Commercial investigation + informational: diferentiaza ${topic} de pagina generala ${pant}.`,
    semanticDifferentiator: 'Pagina adauga un atribut concret pantalonului: culoare, material, fit, sezon sau ocazie.',
    priority: 'P3',
    schema: ['CollectionPage', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/pantaloni/', `/${slugify(pant)}/`, '/outfituri/', '/marimi-si-fit/'],
    avoidCannibalizationWith: [`/${slugify(pant)}/`, `/outfit-${slugify(topic)}/`],
  });
});

topUp('Outfituri', outfitTopics, uniq([...expandedColors.slice(0, 20), ...materials.slice(0, 20), ...occasions, ...seasons]), (outfit, context) => {
  const topic = `${outfit} cu accent ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: idee de styling masculin`,
    hub: 'Outfituri',
    cluster: 'outfit-cu-accent',
    pageType: 'outfit-variant-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} culori`, `${topic} materiale`],
    intent: `Inspirational: creeaza o varianta distincta pentru ${outfit}, cu accent pe ${context}.`,
    semanticDifferentiator: 'Pagina este varianta contextualizata a unui outfit, cu accent unic de culoare/material/ocazie.',
    priority: 'P3',
    internalLinks: ['/outfituri/', '/pantaloni/', '/combinatii-culori/', '/materiale/'],
    avoidCannibalizationWith: [`/${slugify(outfit)}/`],
  });
});

topUp('Marimi si fit', uniq([...garments, ...fits, ...bodyTopics, ...pantTypes.slice(0, 60), ...footwear.slice(0, 10)]), fitContexts, (source, context) => {
  const topic = `cum alegi marimea pentru ${source} in ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de fit online`,
    hub: 'Marimi si fit',
    cluster: 'marime-contextuala',
    pageType: 'sizing-context-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`marime ${source} ${context}`, `fit ${source} ${context}`, `masuratori ${source}`],
    intent: `Instructional: clarifica alegerea marimii pentru ${source} cand contextul este ${context}.`,
    semanticDifferentiator: 'Pagina are o restrictie de context pentru masura, nu tabel general.',
    priority: 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/marimi-si-fit/', '/ghiduri/marimi/', '/tipuri-de-corp/'],
    avoidCannibalizationWith: [`/${slugify(`ghid marimi ${source}`)}/`, `/${slugify(context)}/`],
  });
});

topUp('Ingrijire haine', uniq([...careProblems, ...careProblems.flatMap((problem) => garments.map((garment) => `${problem} la ${garment}`))]), careContexts, (problem, context) => {
  const topic = `${problem} pentru ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de longevitate`,
    hub: 'Ingrijire haine',
    cluster: problem.includes('pete') ? 'pete-context' : 'longevitate-context',
    pageType: 'care-context-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} haine`, `${topic} acasa`, `greseli ${topic}`],
    intent: `Instructional: aplica problema ${problem} in contextul ${context}.`,
    semanticDifferentiator: 'Pagina trateaza o problema de ingrijire intr-un context specific, nu problema generala.',
    priority: 'P3',
    schema: ['HowTo', 'BreadcrumbList', 'FAQPage'],
    internalLinks: ['/ingrijire-haine/', '/intretinere-haine/', '/materiale/'],
    avoidCannibalizationWith: [`/${slugify(problem)}/`, '/intretinere-haine/'],
  });
});

topUp('Stil si ocazii', expandedOccasionSources, styleConstraints, (occasion, context) => {
  const topic = `ce porti la ${occasion} cu ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de stil masculin`,
    hub: 'Stil si ocazii',
    cluster: 'ocazie-cu-element',
    pageType: 'occasion-element-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbat`, `${topic} tinuta`, `${topic} outfit`],
    intent: `Instructional: rezolva tinuta pentru ${occasion} folosind ${context} ca element principal.`,
    semanticDifferentiator: 'Pagina are ocazie + element dominant, diferita de pagina generala pentru ocazie.',
    priority: 'P3',
    internalLinks: ['/stil-si-ocazii/', '/outfituri/', '/incaltaminte/', '/accesorii/'],
    avoidCannibalizationWith: [`/${slugify(`ce porti la ${occasion}`)}/`, `/${slugify(context)}/`],
  });
});

topUp('Tipuri de corp', uniq([...bodyTopics, ...silhouettes.map((shape) => `barbat ${shape}`)]), uniq([...garments, ...fits, ...pantTypes.slice(0, 70), ...footwear, ...occasions, ...seasons, ...materials.slice(0, 30)]), (body, context) => {
  const topic = `${context} pentru ${body}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: proportii si tinute`,
    hub: 'Tipuri de corp',
    cluster: 'corp-element-context',
    pageType: 'body-context-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} fit`, `${topic} outfit`],
    intent: `Informational: adapteaza ${context} la proportia ${body}.`,
    semanticDifferentiator: 'Pagina are combinatie intre tip corporal si element vestimentar concret.',
    priority: 'P3',
    internalLinks: ['/tipuri-de-corp/', '/marimi-si-fit/', '/outfituri/'],
    avoidCannibalizationWith: [`/${slugify(body)}/`, `/${slugify(context)}/`],
  });
});

topUp('Sezoane', uniq([...seasons, ...seasons.flatMap((season) => moments.map((moment) => `${season} ${moment}`)), ...seasons.flatMap((season) => cityContexts.map((city) => `${season} in ${city}`))]), seasonContexts, (season, context) => {
  const topic = `${context} in ${season}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid sezonier masculin`,
    hub: 'Sezoane',
    cluster: 'sezon-cu-element',
    pageType: 'season-context-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} haine`, `${topic} outfit`],
    intent: `Informational: explica adaptarea ${context} la sezonul/contextul ${season}.`,
    semanticDifferentiator: 'Pagina are sezon + element concret, diferita de hub-ul sezonului.',
    priority: 'P3',
    internalLinks: ['/sezoane/', '/outfituri/', '/materiale/', '/culori/'],
    avoidCannibalizationWith: [`/${slugify(season)}/`, `/${slugify(context)}/`],
  });
});

topUp('Cultura fashion', cultureSources, cultureAngles, (topic, angle) => {
  const full = `${topic} si ${angle}`;
  addEntry({
    slug: `/${slugify(full)}/`,
    title: `${full}: analiza de cultura fashion`,
    hub: 'Cultura fashion',
    cluster: 'cultura-unghi-extins',
    pageType: 'culture-analysis',
    primaryKeyword: full,
    secondaryKeywords: [`${full} moda masculina`, `${full} explicat`, `${full} context`],
    intent: `Informational: analizeaza ${topic} prin unghiul ${angle}.`,
    semanticDifferentiator: 'Pagina are un unghi cultural explicit si nu raspunde unei cautari de produs.',
    priority: 'P3',
    internalLinks: ['/cultura-fashion/', '/pantaloni/', '/stil-si-ocazii/', '/outfituri/'],
    avoidCannibalizationWith: [`/${slugify(topic)}/`, '/news/trenduri/'],
  });
});

topUp('Incaltaminte', footwear, footwearContexts, (shoe, context) => {
  const topic = `${shoe} cu ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de incaltaminte si styling`,
    hub: 'Incaltaminte',
    cluster: 'incaltaminte-cu-context-extins',
    pageType: 'footwear-context-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} outfit`, `${topic} pantaloni`],
    intent: `Informational: explica asocierea ${shoe} cu ${context}.`,
    semanticDifferentiator: 'Pagina porneste de la incaltaminte si asociere, diferita de ghidul piesei principale.',
    priority: 'P3',
    internalLinks: ['/incaltaminte/', '/pantaloni/', '/outfituri/', '/stil-si-ocazii/'],
    avoidCannibalizationWith: [`/${slugify(shoe)}/`, `/${slugify(context)}/`],
  });
});

topUp('Accesorii', accessories, accessoryContexts, (accessory, context) => {
  const topic = `${accessory} pentru ${context}`;
  addEntry({
    slug: `/${slugify(topic)}/`,
    title: `${topic}: ghid de accesorii masculine`,
    hub: 'Accesorii',
    cluster: 'accesorii-context-extins',
    pageType: 'accessory-context-guide',
    primaryKeyword: topic,
    secondaryKeywords: [`${topic} barbati`, `${topic} outfit`, `${topic} stil`],
    intent: `Informational: explica folosirea accesoriului ${accessory} pentru ${context}.`,
    semanticDifferentiator: 'Pagina are accesoriu + context de utilizare, nu ghid generic despre accesoriu.',
    priority: 'P3',
    internalLinks: ['/accesorii/', '/stil-si-ocazii/', '/outfituri/', '/culori/'],
    avoidCannibalizationWith: [`/${slugify(accessory)}/`, `/${slugify(context)}/`],
  });
});

const p1Entries = entries.filter((entry) => entry.priority === 'P1');
const map = {
  generatedAt: new Date().toISOString(),
  site: SITE,
  project: 'PSL Fashion / pantalonicusnurlung.ro',
  editorialPolicy: {
    positioning: 'Portal fashion masculin, revista de stil si catalog informativ conectat cu AtelierAXD.',
    compliance: [
      'Fara superlative comerciale absolute neverificate.',
      'Fara comparatii directe cu branduri fara criterii obiective.',
      'Fara preturi, reduceri sau stoc declarate local.',
      'CTA recomandat: Vezi stocul actualizat pe AtelierAXD sau Verifica disponibilitatea pe AtelierAXD.',
    ],
  },
  summary: {
    totalUrls: entries.length,
    indexableUrls: entries.filter((entry) => entry.indexable).length,
    p1Urls: p1Entries.length,
    hubs: Object.fromEntries(Object.entries(entries.reduce((acc, entry) => {
      acc[entry.hub] = (acc[entry.hub] || 0) + 1;
      return acc;
    }, {})).sort((a, b) => a[0].localeCompare(b[0]))),
  },
  publishWaves: [
    { wave: 1, priority: 'P1', description: 'Hub-uri, categorii pilon si pagini cu intentie clara, pregatite cu content brief complet.' },
    { wave: 2, priority: 'P2', description: 'Extindere semantica dupa validare in Search Console si analiza crawl budget.' },
    { wave: 3, priority: 'P3', description: 'Long-tail editorial publicat gradual, doar cu continut util si diferentiere reala.' },
    { wave: 4, priority: 'P4', description: 'Oportunitati secundare pentru femei, doar daca datele Search Console confirma cerere.' },
  ],
  urlPatterns: {
    colors: '/culori/{culoare}/',
    colorCombinations: '/combinatii-culori/{culoare-a}-cu-{culoare-b}/',
    materials: '/materiale/{material}/',
    materialCombinations: '/combinatii-materiale/{material-a}-cu-{material-b}/',
    washing: '/cum-se-spala-{material}/',
    pants: '/{tip-pantaloni}/',
    outfits: '/outfit-{piese-context}/',
  },
  pages: entries,
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, `${JSON.stringify(map, null, 2)}\n`, 'utf8');

console.log(JSON.stringify(map.summary, null, 2));
