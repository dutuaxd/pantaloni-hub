type Section = [string, string];

type ProgrammaticTopic = {
  silo: string;
  pattern: string;
  main: string;
  modifier: string;
  audience: string;
  title: string;
  slug: string;
  intentKey: string;
  image: string;
};

const images = [
  'pantaloni-cu-snur-lung-negri-produs-unisex.webp',
  'pantaloni-cu-snur-lung-bej-produs-unisex.webp',
  'pantaloni-cu-snur-lung-maro-produs-unisex.webp',
  'pantaloni-cu-snur-lung-bleumarin-produs-unisex.webp',
  'pantaloni-cu-snur-lung-gri-bej-produs.webp',
  'pantaloni-cu-snur-lung-negri-femei-outfit.webp',
  'pantaloni-cu-snur-lung-negri-barbati-outfit.webp',
  'pantaloni-scurti-cu-snur-lung-negri-femei.webp',
  'tinuta-unisex-pantaloni-largi-snur-extra-lung.png',
  'moda-urbana-pantaloni-unisex-cu-snur-lung.png',
];

const asortezPieces = [
  'pantalonii bej', 'pantalonii maro', 'pantalonii albi', 'pantalonii gri', 'pantalonii negri', 'pantalonii cargo',
  'pantalonii evazati', 'pantalonii de in', 'pantalonii din piele', 'pantalonii de costum', 'pantalonii wide leg',
  'pantalonii palazzo', 'pantalonii scurti din denim', 'pantalonii scurti negri', 'pantalonii cu snur lung',
  'blugii largi', 'blugii skinny', 'blugii mom fit', 'blugii albastri', 'blugii negri', 'fusta satinata',
  'fusta plisata', 'fusta midi', 'fusta mini', 'rochia neagra', 'rochia alba', 'sacoul oversized', 'sacoul gri',
  'sacoul bej', 'trench-ul bej', 'geaca de piele', 'geaca bomber', 'cardiganul', 'puloverul oversized',
  'hanoracul gri', 'tricoul alb', 'tricoul negru', 'camasa alba', 'camasa oversized', 'vesta tricotata',
];

const asortezModifiers = [
  'pentru tinute casual', 'pentru birou', 'pentru vara', 'pentru toamna', 'cu sneakers albi', 'cu pantofi negri',
  'cu sacou', 'cu camasa alba', 'in stil old money', 'in stil minimalist', 'pentru femei petite', 'pentru plus size',
  'pentru city break', 'pentru date night', 'fara sa para incarcat', 'ca sa arate scump', 'in tinute all black',
  'cu piese crem', 'cu maro si bej', 'pentru poze Pinterest',
];

const colors = [
  'bej', 'maro', 'crem', 'gri', 'kaki', 'bleumarin', 'verde olive', 'roz pudrat', 'burgundy', 'baby blue',
  'galben unt', 'lavanda', 'rosu', 'portocaliu', 'mov', 'negru', 'alb', 'denim', 'animal print', 'leopard print',
  'verde smarald', 'cobalt', 'turcoaz', 'coral', 'caramel', 'cappuccino', 'gri carbune', 'alb cald', 'argintiu', 'auriu',
  'fuchsia', 'rosu cireasa', 'verde petrol', 'sage green', 'mint', 'ciocolatiu', 'camel', 'ivory', 'indigo', 'terracotta',
];

const colorContexts = ['in tinute casual', 'la pantaloni largi', 'in garderoba capsula', 'in outfituri elegante', 'in moda urbana 2026'];

const shoePieces = [
  'rochie midi', 'rochie satinata', 'rochie neagra', 'rochie alba', 'rochie de nunta pentru invitate',
  'blugi largi', 'blugi drepti', 'pantaloni de costum', 'pantaloni cargo', 'pantaloni cu snur lung',
  'pantaloni palazzo', 'pantaloni wide leg', 'fusta mini', 'fusta midi', 'fusta plisata', 'trench bej',
  'outfit all black', 'outfit old money', 'sacou oversized', 'camasa alba', 'pantaloni scurti', 'pantaloni albi',
  'pantaloni maro', 'pantaloni gri', 'tinuta de aeroport',
];

const shoeContexts = ['pentru zi', 'pentru seara', 'pentru femei petite', 'pentru mers mult'];

const occasions = [
  'nunta vara', 'botez', 'interviu', 'cununie civila', 'majorat', 'banchet', 'brunch', 'petrecere corporate',
  'date night', 'munte iarna', 'teatru', 'opera', 'restaurant', 'aeroport', 'city break', 'festival', 'concert',
  'facultate', 'birou vara', 'birou iarna', 'ploaie', 'canicula', 'prima intalnire', 'zi de nastere', 'revelion',
  'craciun', 'vacanta la mare', 'road trip', 'sedinta foto', 'shopping', 'baby shower', 'nunta pe plaja',
  'nunta la cort', 'botez ziua', 'cununie la primarie', 'interviu online', 'office casual friday', 'cina eleganta',
  'garden party', 'absolvire', 'cocktail party', 'black tie', 'smart casual event', 'weekend la munte',
  'plimbare de seara', 'meeting creativ', 'eveniment de zi', 'eveniment de seara', 'zbor lung', 'work from cafe',
];

const occasionProfiles = ['femei', 'barbati', 'tinute cu pantaloni'];

const utilityIssues = [
  'petele de ulei', 'petele de vin rosu', 'petele de cafea', 'petele de deodorant', 'petele galbene',
  'petele de fond de ten', 'petele de transpiratie', 'petele de sange', 'petele de pix', 'petele de iarba',
  'petele de machiaj', 'petele de parfum', 'petele de ketchup', 'petele de ciocolata', 'petele de noroi',
  'petele de cerneala', 'petele de ruj', 'petele de grasime', 'petele vechi', 'mirosul de transpiratie',
  'scamele', 'hainele electrizate', 'cutele fara fier', 'gulerul lasat', 'snurul intrat in betelie',
];

const utilityGarments = ['haine negre', 'haine albe', 'pantaloni din bumbac', 'tricouri albe'];

const capsuleAngles = [
  'capsule wardrobe 2026', 'capsule wardrobe minimalista', 'capsule wardrobe pentru birou', 'capsule wardrobe pentru calatorii',
  'capsule wardrobe de vara', 'capsule wardrobe de iarna', 'capsule wardrobe old money', 'capsule wardrobe pentru femei petite',
  'capsule wardrobe plus size', 'capsule wardrobe pentru studente', 'quiet luxury pe buget', 'old money cu buget mic',
  'branduri old money accesibile', 'piese esentiale old money', 'old money vs quiet luxury', 'culori old money',
  'classy outfits pentru zi', 'clean girl outfits', 'French girl style', 'Scandinavian style', 'Italian girl style',
  'minimalist wardrobe', 'travel wardrobe pentru city break', 'travel wardrobe pentru vara', 'travel wardrobe pentru iarna',
  'organizare dressing mic', 'organizare garderoba digitala', 'fashion AI outfit planner', 'aplicatii capsule wardrobe',
  'aplicatii outfit planning',
];

const bodyAngles = [
  'cum sa pari mai inalta prin haine', 'cum sa pari mai slaba prin haine', 'haine pentru femei petite',
  'haine pentru femei plus size', 'haine pentru silueta para', 'haine pentru silueta mar', 'haine pentru silueta clepsidra',
  'pantaloni pentru solduri late', 'blugi pentru femei scunde', 'rochii care subtiaza talia', 'pantaloni care alungesc picioarele',
  'haine pentru femei de 30 de ani', 'haine pentru femei de 40 de ani', 'haine pentru femei de 50 de ani',
  'haine pentru mamici ocupate', 'tinute pentru bust generos', 'tinute pentru umeri lati', 'tinute pentru talie nedefinita',
  'pantaloni pentru coapse puternice', 'croieli care echilibreaza silueta',
];

const trendAngles = [
  'trenduri fashion 2026', 'culorile anului 2026 in fashion', 'ce nu se mai poarta in 2026', 'trenduri TikTok fashion 2026',
  'trenduri Pinterest fashion 2026', 'loafers in 2026', 'balerini in 2026', 'sneakers minimalisti in 2026',
  'pantaloni largi in 2026', 'denim in 2026', 'quiet luxury in 2026', 'old money in 2026', 'clean girl style in 2026',
  'office outfits in 2026', 'wedding guest outfits in 2026', 'fashion hacks 2026', 'materiale textile 2026',
  'haine care arata scump in 2026', 'Pinterest outfits 2026', 'AI fashion styling 2026',
];

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function uniquePush(list: ProgrammaticTopic[], topic: Omit<ProgrammaticTopic, 'image'>) {
  if (list.some((item) => item.intentKey === topic.intentKey || item.slug === topic.slug)) return;
  list.push({ ...topic, image: images[list.length % images.length] });
}

const topics: ProgrammaticTopic[] = [];

asortezPieces.forEach((piece) => {
  asortezModifiers.forEach((modifier) => {
    uniquePush(topics, {
      silo: 'styling-asortare',
      pattern: 'cum-asortez',
      main: piece,
      modifier,
      audience: 'cititori care cauta combinatii clare',
      title: `Cum asortezi ${piece} ${modifier}`,
      slug: `blog/cum-asortezi-${slugify(piece)}-${slugify(modifier)}`,
      intentKey: `cum-asortez|${piece}|${modifier}`,
    });
  });
});

colors.forEach((color) => {
  colorContexts.forEach((context) => {
    uniquePush(topics, {
      silo: 'culori-care-merg-cu',
      pattern: 'ce-culori-merg-cu',
      main: color,
      modifier: context,
      audience: 'cititori care aleg tinute dupa culoare',
      title: `Ce culori merg cu ${color} ${context}`,
      slug: `blog/ce-culori-merg-cu-${slugify(color)}-${slugify(context)}`,
      intentKey: `culori|${color}|${context}`,
    });
  });
});

shoePieces.forEach((piece) => {
  shoeContexts.forEach((context) => {
    uniquePush(topics, {
      silo: 'pantofi-potriviti',
      pattern: 'ce-pantofi-merg-la',
      main: piece,
      modifier: context,
      audience: 'cititori care vor proportii bune intre incaltaminte si haine',
      title: `Ce pantofi merg la ${piece} ${context}`,
      slug: `blog/ce-pantofi-merg-la-${slugify(piece)}-${slugify(context)}`,
      intentKey: `pantofi|${piece}|${context}`,
    });
  });
});

occasions.forEach((occasion) => {
  occasionProfiles.forEach((profile) => {
    uniquePush(topics, {
      silo: 'occasion-seo',
      pattern: 'ce-port-la',
      main: occasion,
      modifier: profile,
      audience: 'cititori care cauta o tinuta potrivita pentru context',
      title: `Ce porti la ${occasion}: ghid pentru ${profile}`,
      slug: `blog/ce-porti-la-${slugify(occasion)}-${slugify(profile)}`,
      intentKey: `ce-port|${occasion}|${profile}`,
    });
  });
});

utilityIssues.forEach((issue) => {
  utilityGarments.forEach((garment) => {
    uniquePush(topics, {
      silo: 'fashion-utility',
      pattern: 'cum-curat-spal-intretin',
      main: issue,
      modifier: garment,
      audience: 'cititori care au o problema practica de intretinere',
      title: `Cum scoti ${issue} de pe ${garment}`,
      slug: `blog/cum-scoti-${slugify(issue)}-de-pe-${slugify(garment)}`,
      intentKey: `utility|${issue}|${garment}`,
    });
  });
});

capsuleAngles.forEach((angle) => {
  ['pentru femei', 'pentru barbati', 'cu pantaloni largi'].forEach((modifier) => {
    uniquePush(topics, {
      silo: 'capsule-luxury-ai',
      pattern: 'capsule-wardrobe-luxury-ai',
      main: angle,
      modifier,
      audience: 'cititori interesati de garderobe eficiente si stil premium accesibil',
      title: `${angle}: ghid ${modifier}`,
      slug: `blog/${slugify(angle)}-${slugify(modifier)}`,
      intentKey: `capsule|${angle}|${modifier}`,
    });
  });
});

bodyAngles.forEach((angle) => {
  ['cu tinute casual', 'cu tinute elegante'].forEach((modifier) => {
    uniquePush(topics, {
      silo: 'body-type-styling',
      pattern: 'body-type',
      main: angle,
      modifier,
      audience: 'cititori care aleg haine dupa proportii reale',
      title: `${angle} ${modifier}`,
      slug: `blog/${slugify(angle)}-${slugify(modifier)}`,
      intentKey: `body|${angle}|${modifier}`,
    });
  });
});

trendAngles.forEach((angle) => {
  ['Romania', 'Pinterest', 'tinute purtabile'].forEach((modifier) => {
    uniquePush(topics, {
      silo: 'trend-seasonal',
      pattern: 'trenduri-sezon',
      main: angle,
      modifier,
      audience: 'cititori care cauta trenduri aplicabile, nu teorie de podium',
      title: `${angle}: ${modifier}`,
      slug: `blog/${slugify(angle)}-${slugify(modifier)}`,
      intentKey: `trend|${angle}|${modifier}`,
    });
  });
});

function takeSilo(silo: string, count: number) {
  return topics.filter((topic) => topic.silo === silo).slice(0, count);
}

const finalTopics = [
  ...takeSilo('styling-asortare', 300),
  ...takeSilo('culori-care-merg-cu', 200),
  ...takeSilo('pantofi-potriviti', 100),
  ...takeSilo('occasion-seo', 150),
  ...takeSilo('fashion-utility', 100),
  ...takeSilo('capsule-luxury-ai', 90),
  ...takeSilo('body-type-styling', 40),
  ...takeSilo('trend-seasonal', 20),
];

function sections(topic: ProgrammaticTopic): Section[] {
  const isUtility = topic.silo === 'fashion-utility';
  const isOccasion = topic.silo === 'occasion-seo';
  const isColor = topic.silo === 'culori-care-merg-cu';
  const isShoe = topic.silo === 'pantofi-potriviti';
  return [
    [
      'Raspuns rapid',
      isUtility
        ? `Pentru ${topic.main} pe ${topic.modifier}, actioneaza local, testeaza solutia pe o zona ascunsa si evita caldura pana cand problema nu mai este vizibila. Intentia articolului este intretinere practica, nu styling, deci nu concureaza cu ghidurile de outfit.`
        : `Pentru ${topic.title.toLowerCase()}, porneste de la o baza neutra, apoi adauga o singura directie vizuala: culoare, textura sau proportie. Intentia exacta este ${topic.pattern}, cu subiectul ${topic.main} si contextul ${topic.modifier}.`,
    ],
    [
      'De ce nu se suprapune cu alte ghiduri',
      `Aceasta pagina are intentKey unic: ${topic.intentKey}. Ea raspunde unei singure combinatii de cautare si trimite mai departe spre articole vecine din acelasi silo, in loc sa repete un ghid pilon. Asa reducem suprapunerea intre articole similare.`,
    ],
    [
      isColor ? 'Paleta recomandata' : isShoe ? 'Incaltaminte si proportii' : isOccasion ? 'Formula de tinuta' : isUtility ? 'Pasi de lucru' : 'Formula practica',
      isColor
        ? `Combina ${topic.main} cu tonuri calme: alb cald, negru, gri, crem, denim sau maro, apoi ajusteaza intensitatea dupa sezon. Daca folosesti doua culori puternice, pastreaza incaltamintea simpla.`
        : isShoe
          ? 'Pantofii trebuie sa sustina lungimea si volumul piesei principale. Daca tivul este amplu, alege incaltaminte vizibila; daca tinuta este eleganta, evita talpile foarte sport.'
          : isUtility
            ? 'Indeparteaza excesul, tamponeaza, aplica local produs potrivit materialului si spala conform etichetei. Verifica rezultatul inainte de uscare, pentru ca uscarea la cald poate fixa problema.'
            : 'Construieste tinuta in trei pasi: piesa principala, stratul care echilibreaza volumul si incaltamintea. Pentru rezultate bune in Google si Pinterest, fotografia trebuie sa arate tinuta complet, nu doar un detaliu izolat.',
    ],
    [
      'Greseli de evitat',
      'Evita titlurile prea generale, repetarea aceluiasi raspuns in mai multe pagini si combinatiile fara context. La nivel de tinuta, evita volumul mare peste tot, materialele sifonate si culorile folosite fara ierarhie.',
    ],
    [
      'Legaturi utile',
      'Continua cu articolele din acelasi cluster, apoi mergi spre ghidurile pilon despre pantaloni cu snur lung, pantaloni baggy, outfituri minimaliste si ghidul de marimi. Linkurile interne sunt alese ca sa transfere autoritate fara sa confunde intentia paginii.',
    ],
  ];
}

function faqs(topic: ProgrammaticTopic): Section[] {
  return [
    [`Este buna cautarea "${topic.title}" pentru SEO?`, `Da, pentru ca are intentie clara si long-tail. Pagina nu tinteste tot subiectul ${topic.main}, ci combinatia precisa cu ${topic.modifier}.`],
    ['Cum evit suprapunerea cu alte articole?', 'Pastreaza un singur H1 pentru intentia exacta, foloseste linkuri catre ghidurile vecine si nu copia aceleasi paragrafe intre articole.'],
    ['Ce imagine ajuta cel mai mult?', 'O imagine verticala, clara, cu tinuta completa sau cu problema textila vizibila. Alt textul trebuie sa descrie natural piesa, culoarea si contextul.'],
  ];
}

function comparisonRows(topic: ProgrammaticTopic) {
  return [
    ['Intentie', topic.pattern, 'subiect general fara context'],
    ['Subiect', topic.main, 'mai multe piese amestecate in acelasi articol'],
    ['Context', topic.modifier, 'aceeasi introducere repetata pe toate paginile'],
  ];
}

export const programmaticFashionSeo1000Posts2026 = finalTopics.map((topic, index) => ({
  slug: topic.slug,
  title: topic.title,
  description: `${topic.title}: ghid SEO fashion 2026 cu raspuns rapid, exemple practice, greseli de evitat si linkuri interne fara suprapunere.`,
  h1: topic.title,
  intro: `${topic.title} raspunde unei cautari precise din silo-ul ${topic.silo}. Ghidul este construit pentru utilitate reala: raspuns scurt, reguli clare, tabel de decizie si legaturi spre articole conexe.`,
  sections: sections(topic),
  image: topic.image,
  date: `2026-05-${String(22 - (index % 9)).padStart(2, '0')}`,
  serpSnippet: `Pentru ${topic.title.toLowerCase()}, foloseste o regula simpla: o intentie, un context, o recomandare principala si linkuri interne doar catre ghiduri complementare.`,
  keyTakeaways: [
    `Intentie unica: ${topic.intentKey}.`,
    `Silo: ${topic.silo}.`,
    'Structura este optimizata pentru raspuns rapid, AI Overview si fragmente recomandate.',
  ],
  comparisonRows: comparisonRows(topic),
  faqs: faqs(topic),
  seoEngine: {
    keyword_principal: topic.title.toLowerCase(),
    cluster: topic.silo,
    intent: topic.pattern,
    funnel_stage: topic.silo === 'fashion-utility' ? 'support' : 'top-of-funnel',
    intentKey: topic.intentKey,
    reason_safe: `pagina unica prin pattern + main + modifier: ${topic.intentKey}`,
    priority: index + 1,
  },
}));

export const programmaticFashionSeo1000Meta = {
  total: finalTopics.length,
  silos: Array.from(new Set(finalTopics.map((topic) => topic.silo))),
};
