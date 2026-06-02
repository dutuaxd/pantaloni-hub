type Section = [string, string];

type QuestionPost = {
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
  'images/products/pantaloni-cu-snur-lung-negri-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-bej-produs-unisex.webp',
  'images/products/pantaloni-cu-snur-lung-negri-femei-outfit.webp',
  'images/products/pantaloni-scurti-cu-snur-lung-negri-barbati.webp',
  'images/products/pantaloni-scurti-cu-snur-lung-negri-femei.webp',
  'images/atelieraxd-long-tail/atelier-axd-pantaloni-barbati-largi-negri-snur-casual.jpg',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-albi-snur-lung-vara.jpg',
  'images/atelieraxd-long-tail/pantaloni-scurti-barbati-gri-snur-lung-ajustab-pantaloni-scurti-gri-cu-siret-l.jpg',
];

const stainProblems = [
  'petele de vin rosu',
  'petele de vin alb',
  'petele de cafea',
  'petele de ceai',
  'petele de ulei',
  'petele de grasime',
  'petele de fond de ten',
  'petele de ruj',
  'petele de deodorant',
  'petele galbene de transpiratie',
  'petele de sange',
  'petele de iarba',
  'petele de noroi',
  'petele de pix',
  'petele de cerneala',
  'petele de marker',
  'petele de vopsea',
  'petele de ketchup',
  'petele de mustar',
  'petele de ciocolata',
  'petele de sos',
  'petele de parfum',
  'petele de crema solara',
  'petele de autobronzant',
  'petele de machiaj',
  'petele de rimel',
  'petele de blush',
  'petele de oja',
  'petele de lipici',
  'guma de mestecat',
  'ceara de lumanare',
  'petele de rugina',
  'petele de apa',
  'petele de sare',
  'urmele de clor',
];

const stainGarments = [
  'haine',
  'tricouri',
  'camasi',
  'pantaloni',
  'haine albe',
  'haine negre',
];

const smellProblems = [
  'mirosul de transpiratie',
  'mirosul de umezeala',
  'mirosul de fum',
  'mirosul de mancare',
  'mirosul de mucegai',
  'mirosul de parfum prea puternic',
  'mirosul de second hand',
  'mirosul de dulap',
  'mirosul din haine sport',
  'mirosul din tricouri dupa spalare',
];

const washingGarments = [
  'tricourile albe',
  'hainele negre',
  'hainele colorate',
  'hainele rosii',
  'hainele delicate',
  'hainele din bumbac',
  'hainele din poliester',
  'hainele din lana',
  'hainele din in',
  'hainele din vascoza',
  'hainele din denim',
  'pantalonii negri',
  'tricourile oversized',
  'hanoracele',
  'camasile albe',
  'hainele cu imprimeu',
  'hainele cu broderie',
  'hainele cu fermoare',
  'hainele cu snur lung',
  'pantalonii cu talie elastica',
  'pantalonii scurti',
  'pantalonii trei sferturi',
  'blugii negri',
  'hainele noi',
  'hainele de sala',
];

const washingNeeds = [
  'fara sa se ingalbeneasca',
  'fara sa se decoloreze',
  'fara sa se lase',
  'fara sa se sifoneze prea tare',
  'fara sa prinda miros',
  'fara urme de detergent',
];

const materials = [
  'bumbacul',
  'bumbacul organic',
  'bumbacul pieptanat',
  'bumbacul mercerizat',
  'bumbacul prespalat',
  'poliesterul',
  'elastanul',
  'vascoza',
  'inul',
  'lana',
  'lana merinos',
  'casmirul',
  'denimul',
  'twill-ul',
  'poplinul',
  'flanelul',
  'fleece-ul',
  'softshell-ul',
  'materialul ribbed',
  'jerseul',
  'materialul prespalat',
  'materialul respirabil',
  'materialul opac',
  'materialul elastic',
  'materialul cu GSM mare',
];

const materialUses = [
  'tricouri',
  'pantaloni',
  'pantaloni scurti',
  'pantaloni trei sferturi',
  'haine de vara',
  'haine de iarna',
  'haine pentru copii',
  'haine sport',
  'haine de zi',
  'haine sensibile la spalare',
];

const whyQuestions = [
  'De ce se ingalbenesc hainele albe?',
  'De ce se ingalbenesc tricourile la subrat?',
  'De ce miros hainele dupa spalare?',
  'De ce miros tricourile chiar dupa spalare?',
  'De ce raman pete albe pe hainele negre?',
  'De ce se decoloreaza hainele negre?',
  'De ce ies scame pe haine?',
  'De ce se scamosaza tricourile?',
  'De ce se largesc pantalonii in talie?',
  'De ce se strang hainele la spalat?',
  'De ce intra bumbacul la apa?',
  'De ce intra lana la apa?',
  'De ce se sifoneaza inul?',
  'De ce se electrizeaza hainele?',
  'De ce se lipesc hainele de corp?',
  'De ce unele tricouri tin mirosul?',
  'De ce poliesterul poate pastra mirosul?',
  'De ce bumbacul este confortabil?',
  'De ce elastanul ajuta la pantaloni?',
  'De ce hainele albe devin gri?',
  'De ce masina de spalat poate pata hainele?',
  'De ce apar urme pe haine dupa detergent?',
  'De ce hainele miros a umezeala in dulap?',
  'De ce se rup pantalonii intre picioare?',
  'De ce se uzeaza tricourile la guler?',
];

const fitItems = [
  'tricou',
  'pantaloni',
  'pantaloni copii',
  'pantaloni adolescenti',
  'pantaloni barbati',
  'pantaloni femei',
  'haine online',
  'talie pentru pantaloni',
  'solduri pentru pantaloni',
  'lungimea pantalonilor',
  'pantaloni care nu strang',
  'pantaloni care nu se ridica la mers',
  'pantaloni care nu se lipesc de piele',
  'pantaloni pentru coapse puternice',
  'pantaloni pentru solduri late',
  'pantaloni pentru talie confortabila',
  'pantaloni pentru persoane scunde',
  'pantaloni pentru persoane inalte',
  'haine pentru persoane mature',
  'haine pentru femei plus size',
];

const definitionItems = [
  'regular fit',
  'slim fit',
  'loose fit',
  'oversized',
  'baggy',
  'wide leg',
  'straight fit',
  'tapered fit',
  'relaxed fit',
  'cropped',
  'talie inalta',
  'talie medie',
  'talie joasa',
  'pantaloni cu pense',
  'pantaloni cu pliuri',
  'pantaloni cargo',
  'pantaloni jogger',
  'pantaloni chino',
  'pantaloni palazzo',
  'pantaloni evazati',
  'pantaloni trei sferturi',
  'bermude',
  'tricou basic',
  'tricou premium',
  'snur la pantaloni',
];

const differencePairs = [
  ['bumbac', 'poliester'],
  ['bumbac', 'vascoza'],
  ['in', 'bumbac'],
  ['lana', 'casmir'],
  ['denim', 'twill'],
  ['tricou slim', 'tricou oversized'],
  ['pantaloni slim', 'pantaloni drepti'],
  ['pantaloni largi', 'baggy'],
  ['pantaloni cargo', 'pantaloni jogger'],
  ['pantaloni scurti', 'bermude'],
  ['bermude', 'pantaloni trei sferturi'],
  ['pantaloni chino', 'pantaloni casual'],
  ['pantaloni de trening', 'joggeri'],
  ['talie elastica', 'talie fixa'],
  ['snur', 'siret la pantaloni'],
  ['material gros', 'material greu'],
  ['material respirabil', 'material subtire'],
  ['material opac', 'material transparent'],
  ['haine prespalate', 'haine normale'],
  ['tricou basic', 'tricou premium'],
];

const stylingItems = [
  'pantaloni scurti negri',
  'pantaloni scurti albi',
  'pantaloni scurti bej',
  'pantaloni trei sferturi',
  'pantaloni largi',
  'pantaloni chino',
  'pantaloni de trening',
  'pantaloni cargo',
  'pantaloni albi',
  'pantaloni negri',
  'pantaloni bej',
  'pantaloni bleumarin',
  'tricou de bumbac',
  'tricou alb',
  'tricou negru',
  'tricou oversized',
  'camasa deschisa',
  'haine negre vara',
  'haine albe',
  'haine largi',
];

const stylingComplements = [
  'tricou simplu',
  'tricou oversized',
  'camasa deschisa',
  'hanorac subtire',
  'sneakers albi',
  'sandale',
  'mocasini',
  'ghete',
  'geaca de blugi',
  'sacou casual',
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
  const cut = value.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 70 ? lastSpace : cut.length).replace(/[,:;.-]+$/g, '')}.`;
}

function keywordFromTitle(title: string) {
  return title.replace(/\?+$/g, '').toLowerCase();
}

function clusterFor(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes('pete') || lower.includes('guma') || lower.includes('ceara')) return 'intrebari-pete-haine';
  if (lower.includes('miros')) return 'intrebari-miros-haine';
  if (lower.includes('spal') || lower.includes('usuc') || lower.includes('calc')) return 'intrebari-spalare-haine';
  if (lower.includes('bumbac') || lower.includes('poliester') || lower.includes('material') || lower.includes('lana') || lower.includes('vascoza') || lower.includes('inul')) return 'intrebari-materiale-textile';
  if (lower.startsWith('de ce')) return 'intrebari-de-ce-haine';
  if (lower.includes('marime') || lower.includes('masor') || lower.includes('imi vine')) return 'intrebari-marimi-fit';
  if (lower.includes('diferenta') || lower.includes('inseamna')) return 'intrebari-definitii-fashion';
  return 'intrebari-styling-haine';
}

function sectionSet(title: string): Section[] {
  const keyword = keywordFromTitle(title);
  const lower = title.toLowerCase();

  if (lower.includes('pete') || lower.includes('guma') || lower.includes('ceara')) {
    return [
      ['Raspuns rapid', `Pentru ${keyword}, actioneaza cat mai repede si evita frecarea agresiva. Tamponeaza zona, testeaza solutia pe o parte ascunsa si spala haina conform etichetei.`],
      ['Ce sa faci prima data', 'Indeparteaza excesul fara sa intinzi pata. Apa rece ajuta la pete proteice, iar petele uleioase au nevoie de degresare blanda inainte de spalare.'],
      ['Ce sa eviti', 'Nu folosi clor sau apa fierbinte fara sa stii materialul. Unele solutii fixeaza pata sau pot decolora zona tratata.'],
      ['Cand mergi la curatatorie', 'Daca haina este din lana, matase, casmir, piele, satin sensibil sau are eticheta de curatare chimica, e mai sigur sa ceri ajutor profesional.'],
      ['Checklist final', 'Repeta tratamentul bland daca pata ramane, dar nu usca la cald pana nu esti sigur ca urma a disparut. Caldura poate fixa pata in fibra.'],
    ];
  }

  if (lower.includes('miros')) {
    return [
      ['Raspuns rapid', `Pentru ${keyword}, problema vine de obicei din umezeala, detergent ramas in fibra sau material care pastreaza mirosul.`],
      ['Pasi practici', 'Aeriseste haina, spala la temperatura permisa de eticheta si nu incarca masina peste limita. Hainele trebuie sa aiba spatiu sa se clateasca bine.'],
      ['Ce ajuta', 'Uscarea completa este esentiala. Daca haina ramane umeda prea mult timp, mirosul poate reveni chiar daca spalarea a fost corecta.'],
      ['Ce sa eviti', 'Balsamul in exces poate acoperi mirosul pe termen scurt, dar uneori incarca fibra si face problema mai persistenta.'],
      ['Checklist final', 'Curata periodic masina de spalat, sertarul de detergent si garnitura usii. Multe mirosuri vin din masina, nu din haina.'],
    ];
  }

  if (lower.includes('bumbac') || lower.includes('poliester') || lower.includes('material') || lower.includes('lana') || lower.includes('vascoza') || lower.includes('inul')) {
    return [
      ['Raspuns rapid', `${title.replace(/\?+$/g, '')} se intelege cel mai usor prin confort, respirabilitate, rezistenta, elasticitate si felul in care materialul se comporta la spalare.`],
      ['Ce inseamna in practica', 'Un material bun pentru o piesa nu este automat bun pentru toate. Tricourile, pantalonii, hainele sport si hainele de iarna au nevoi diferite.'],
      ['Avantaje posibile', 'Bumbacul este apreciat pentru confort, poliesterul pentru uscare rapida, elastanul pentru mobilitate, iar inul pentru senzatia aerisita vara.'],
      ['Limite de stiut', 'Materialele naturale se pot sifona sau pot intra la apa, iar materialele sintetice pot pastra mirosul daca nu sunt spalate si uscate corect.'],
      ['Cum alegi', 'Citeste compozitia, verifica grosimea si testeaza materialul in lumina. Opacitatea, caderea si cusaturile spun mult despre cum se va purta haina.'],
    ];
  }

  if (lower.includes('diferenta') || lower.includes('inseamna')) {
    return [
      ['Raspuns rapid', `${title.replace(/\?+$/g, '')} tine de croiala, material, utilizare si context. Diferenta reala se vede la proba, nu doar in denumire.`],
      ['Cum verifici', 'Uita-te la talie, lungime, volum, cusaturi si felul in care piesa cade cand te misti. Denumirile comerciale pot varia intre branduri.'],
      ['De ce conteaza', 'Cand intelegi termenul, alegi mai usor marimea, materialul si combinatiile potrivite pentru garderoba ta.'],
      ['Greseala frecventa', 'Nu alege doar dupa nume. Un model oversized poate fi bine proportionat sau doar prea mare, in functie de croiala.'],
      ['Checklist final', 'Compara doua piese similare, verifica eticheta si gandeste-te unde le porti cel mai des: oras, birou, scoala, vacanta sau acasa.'],
    ];
  }

  return [
    ['Raspuns rapid', `${keyword} se rezolva cel mai bine prin context: unde porti haina, cat mergi, ce temperaturi sunt si cat de usor vrei sa o intretii.`],
    ['Formula simpla', 'Alege o baza curata, o singura piesa cu volum sau culoare mai puternica si incaltaminte potrivita cu lungimea pantalonilor.'],
    ['Fit si confort', 'Verifica talia, umerii, lungimea, tivul si libertatea de miscare. O tinuta buna trebuie sa functioneze si cand stai jos sau mergi mult.'],
    ['Ce sa eviti', 'Evita combinatiile incarcate, materialele nepotrivite pentru sezon si hainele care cer prea multa grija daca le porti zilnic.'],
    ['Checklist final', 'Daca piesa se combina cu doua-trei haine pe care le ai deja si se intretine usor, are sanse bune sa fie purtata des.'],
  ];
}

function addQuestion(list: string[], seen: Set<string>, title: string) {
  const cleanTitle = clean(title).replace(/\?*$/g, '?');
  const key = cleanTitle.toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  list.push(cleanTitle);
}

const questionTitles: string[] = [];
const seenTitles = new Set<string>();

for (const problem of stainProblems) {
  for (const garment of stainGarments) {
    addQuestion(questionTitles, seenTitles, `Cum scot ${problem} de pe ${garment}?`);
  }
}

for (const problem of smellProblems) {
  for (const garment of ['haine', 'tricouri', 'pantaloni', 'haine sport']) {
    addQuestion(questionTitles, seenTitles, `Cum scot ${problem} din ${garment}?`);
  }
}

for (const garment of washingGarments) {
  for (const need of washingNeeds) {
    addQuestion(questionTitles, seenTitles, `Cum spal ${garment} ${need}?`);
  }
}

for (const material of materials) {
  addQuestion(questionTitles, seenTitles, `Ce este ${material}?`);
  for (const use of materialUses.slice(0, 3)) {
    addQuestion(questionTitles, seenTitles, `Este bun ${material} pentru ${use}?`);
  }
}

whyQuestions.forEach((title) => addQuestion(questionTitles, seenTitles, title));

for (const item of fitItems) {
  addQuestion(questionTitles, seenTitles, `Cum aleg marimea corecta la ${item}?`);
  addQuestion(questionTitles, seenTitles, `Cum stiu daca ${item} imi vine bine?`);
}

for (const item of definitionItems) {
  addQuestion(questionTitles, seenTitles, `Ce inseamna ${item}?`);
}

for (const [first, second] of differencePairs) {
  addQuestion(questionTitles, seenTitles, `Care este diferenta dintre ${first} si ${second}?`);
}

for (const item of stylingItems) {
  for (const complement of stylingComplements.slice(0, 3)) {
    addQuestion(questionTitles, seenTitles, `Cum port ${item} cu ${complement}?`);
  }
}

for (const item of stylingItems) {
  addQuestion(questionTitles, seenTitles, `Ce pantofi merg cu ${item}?`);
  addQuestion(questionTitles, seenTitles, `Ce tricou merge cu ${item}?`);
}

const selectedQuestions = questionTitles.slice(0, 500);

export const questionAnswerClothingBlogPosts2026: QuestionPost[] = selectedQuestions.map((title, index) => {
  const keyword = keywordFromTitle(title);
  const image = images[index % images.length];
  const cluster = clusterFor(title);
  return {
    slug: `blog/news/${slugify(title)}`,
    title,
    description: limit(`${title.replace(/\?+$/g, '')}: raspuns practic, pasi simpli, greseli de evitat si recomandari utile pentru haine de zi.`, 155),
    h1: title,
    intro: `${title} Raspunsul depinde de material, culoare, eticheta de ingrijire si contextul in care porti haina. Ghidul de mai jos explica pasii importanti fara promisiuni exagerate si fara recomandari riscante pentru materiale sensibile.`,
    date: '2026-06-02',
    image,
    imageLimit: 3,
    images: [
      { file: image, alt: `${keyword} - imagine principala`, title: `${keyword} ghid` },
      { file: images[(index + 2) % images.length], alt: `${keyword} - detaliu haine`, title: `${keyword} detaliu` },
      { file: images[(index + 5) % images.length], alt: `${keyword} - exemplu practic`, title: `${keyword} exemplu` },
    ],
    seoEngine: {
      keyword_principal: keyword,
      cluster,
      intent: title.toLowerCase().startsWith('ce este') || title.toLowerCase().includes('diferenta') ? 'informational' : 'how-to',
      funnel_stage: 'awareness',
      reason_safe: `intrebare Q&A distincta despre haine: ${keyword}`,
      recommended_angle: 'raspuns direct, pasi practici, ton informativ, fara superlative si fara promisiuni garantate',
      priority: index < 120 ? 1 : 2,
    },
    sections: sectionSet(title),
  };
});
