type Section = [string, string];

type SummerFashionPiece = {
  name: string;
  slug: string;
  angle: string;
  image: string;
  audience: string;
};

type SummerFashionContext = {
  name: string;
  slug: string;
  detail: string;
};

const summerTrendContext =
  'Directia editoriala pentru vara 2026 combina materiale respirabile, rochii bleu deschis, alb cald, galben unt, dantela discreta, sandale plate, barete subtiri, piese crosetate, tinute de vacanta si croieli lejere care arata bine in fotografii, dar raman purtabile in caldura din Romania.';

const pieces: SummerFashionPiece[] = [
  {
    name: 'rochie bleu deschis',
    slug: 'rochie-bleu-deschis',
    angle: 'culoare pastel rece, material fluid si accesorii albe sau argintii',
    image: 'images/user-long-tail/whitebg_summer_dress_1779094911406.png',
    audience: 'femei care cauta o rochie de vara luminoasa, dar nu prea dulce',
  },
  {
    name: 'rochie alba din in',
    slug: 'rochie-alba-in',
    angle: 'in respirabil, croiala relaxata si sandale simple',
    image: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-rochie-vaporoasa-din-in-alb-pe-plaj.png',
    audience: 'cititori care vor o piesa curata pentru caldura si vacanta',
  },
  {
    name: 'rochie galben unt',
    slug: 'rochie-galben-unt',
    angle: 'pastel cald, bijuterii aurii si contrast discret cu alb cald',
    image: 'images/user-long-tail/whitebg_summer_dress_1779094911406.png',
    audience: 'femei care vor culoare de vara fara neon sau imprimeu incarcat',
  },
  {
    name: 'rochie maxi transparenta stratificata',
    slug: 'rochie-maxi-transparenta-stratificata',
    angle: 'layering decent, captuseala clara si sandale minimaliste',
    image: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-tendinte-rochii-nunta-culori-metali.png',
    audience: 'cititori care cauta tendinte runway traduse purtabil',
  },
  {
    name: 'set din in dama',
    slug: 'set-in-dama',
    angle: 'camasa lejera, pantalon sau fusta fluida si tonuri naturale',
    image: 'images/user-long-tail/whitebg_office_casual_women_1779094884359.png',
    audience: 'femei care vor tinuta intre vacanta, oras si birou relaxat',
  },
  {
    name: 'set din in barbati',
    slug: 'set-in-barbati',
    angle: 'camasa cu maneca scurta, pantaloni lejeri si sandale sau loafers',
    image: 'images/user-long-tail/whitebg_smart_casual_men_1779094847185.png',
    audience: 'barbati care vor o tinuta de vara ingrijita fara costum',
  },
  {
    name: 'bermude barbati din in',
    slug: 'bermude-barbati-in',
    angle: 'lungime peste genunchi, camasa usoara si incaltaminte curata',
    image: 'images/atelieraxd-long-tail/set-vara-barbati-crem-tricou-pantaloni-scurti-set-vara-barbati-crem-bumbac-pan.png',
    audience: 'barbati care cauta alternativa la pantalonii scurti sport',
  },
  {
    name: 'pantaloni palazzo de vara',
    slug: 'pantaloni-palazzo-vara',
    angle: 'talie clara, material fluid si top compact',
    image: 'images/atelieraxd-long-tail/sitemap-blogs-1-xml-femeie-purtand-pantaloni-largi-din-matase-verde-smarald-in.png',
    audience: 'femei care vor volum elegant fara rochie',
  },
  {
    name: 'fusta pareo satinata',
    slug: 'fusta-pareo-satinata',
    angle: 'luciu discret, nod lateral si top simplu',
    image: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-femeie-purtand-fusta-plisata-midi-v.png',
    audience: 'cititori care cauta tinute feminine rapide pentru vara',
  },
  {
    name: 'fusta alba din dantela',
    slug: 'fusta-alba-dantela',
    angle: 'textura romantica, top mat si sandale joase',
    image: 'images/atelieraxd-long-tail/sitemap-blogs-1-xml-femeie-purt-nd-pantaloni-albi-din-dantel-largi-i-elegan-i.png',
    audience: 'femei care vor dantela purtabila, nu tinuta de seara',
  },
  {
    name: 'top crosetat de vara',
    slug: 'top-crosetat-vara',
    angle: 'textura handmade, baza neutra si layering aerisit',
    image: 'images/user-long-tail/whitebg_minimalist_streetwear_1779094897126.png',
    audience: 'cititori interesati de boho curat si piese texturate',
  },
  {
    name: 'vesta alba de vara',
    slug: 'vesta-alba-vara',
    angle: 'croiala scurta, nasturi discreti si pantaloni cu talie inalta',
    image: 'images/user-long-tail/whitebg_office_casual_women_1779094884359.png',
    audience: 'femei care vor tailoring usor pentru caldura',
  },
  {
    name: 'camasa oversize din poplin',
    slug: 'camasa-oversize-poplin',
    angle: 'bumbac cu tinuta, maneca rulata si proportii relaxate',
    image: 'images/user-long-tail/whitebg_smart_casual_men_1779094847185.png',
    audience: 'cititori care cauta o piesa de vara versatila',
  },
  {
    name: 'tricou alb greu de vara',
    slug: 'tricou-alb-greu-vara',
    angle: 'bumbac mai dens, croiala dreapta si tinuta minimalista',
    image: 'images/user-long-tail/whitebg_minimalist_streetwear_1779094897126.png',
    audience: 'barbati si femei care vor basic premium pentru vara',
  },
  {
    name: 'maiou ribbed alb',
    slug: 'maiou-ribbed-alb',
    angle: 'linie curata, textura fina si pantaloni largi',
    image: 'images/user-long-tail/whitebg_minimalist_streetwear_1779094897126.png',
    audience: 'cititori care vor tinute simple, dar nu banale',
  },
  {
    name: 'sandale plate metalizate',
    slug: 'sandale-plate-metalizate',
    angle: 'accent argintiu sau auriu, barete subtiri si haine neutre',
    image: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-pantofi-stiletto-nude-si-sandale-ne.png',
    audience: 'femei care cauta incaltaminte comoda cu efect vizual',
  },
  {
    name: 'sandale thong cu toc mic',
    slug: 'sandale-thong-toc-mic',
    angle: 'toc mic, bareta minimalista si rochii midi',
    image: 'images/fashion-expansion-2026/sandale-thong-toc-mic-zi-nastere-vara-2026.png',
    audience: 'femei care vor inaltime mica si confort la evenimente',
  },
  {
    name: 'geanta raffia mica',
    slug: 'geanta-raffia-mica',
    angle: 'textura naturala, dimensiune controlata si tinute deschise',
    image: 'images/user-long-tail/whitebg_gorpcore_women_1779094938449.png',
    audience: 'cititori care cauta accesorii de vara cu textura',
  },
  {
    name: 'ochelari ovali de soare',
    slug: 'ochelari-ovali-soare',
    angle: 'rama ovala, lentila fumurie si proportie potrivita fetei',
    image: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-comparatie-vizuala-ochelari-potrivi.png',
    audience: 'cititori care aleg accesorii dupa forma fetei',
  },
  {
    name: 'tinuta all white de vara',
    slug: 'tinuta-all-white-vara',
    angle: 'alb cald, texturi diferite si accesorii bej sau metalice',
    image: 'images/user-long-tail/whitebg_summer_dress_1779094911406.png',
    audience: 'femei si barbati care cauta tinute luminoase pentru vara',
  },
];

const contexts: SummerFashionContext[] = [
  {
    name: 'la nunta de zi',
    slug: 'nunta-zi',
    detail: 'eveniment elegant, lumina puternica, fotografii si nevoie de confort pana seara',
  },
  {
    name: 'la terasa seara',
    slug: 'terasa-seara',
    detail: 'iesire relaxata dupa caldura zilei, lumina buna si tinuta care nu pare prea formala',
  },
  {
    name: 'in vacanta la mare',
    slug: 'vacanta-mare',
    detail: 'bagaj compact, materiale care respira si tranzitie de la plaja la oras',
  },
  {
    name: 'la birou pe canicula',
    slug: 'birou-canicula',
    detail: 'drum prin caldura, aer conditionat si nevoie de tinuta decenta pentru lucru',
  },
  {
    name: 'pentru poze de vara',
    slug: 'poze-vara',
    detail: 'tinuta fotografiabila, culori clare si detalii vizibile in cadru',
  },
];

const relatedByContext: Record<string, [string, string][]> = {
  'nunta-zi': [
    ['/blog/ce-rochii-se-poarta-la-nunti-2026/', 'Ce rochii se poarta la nunti 2026'],
    ['/blog/incaltaminte-rochii-pantofi-mocasini/', 'Incaltaminte pentru rochii si evenimente'],
  ],
  'terasa-seara': [
    ['/blog/business-casual-barbati-femei/', 'Business casual pentru femei si barbati'],
    ['/blog/albastru-cobalt-electric-regal-asortare/', 'Albastru cobalt si electric in tinute'],
  ],
  'vacanta-mare': [
    ['/blog/pantaloni-scurti-barbati-ghid-casual/', 'Pantaloni scurti barbati casual'],
    ['/blog/pantaloni-scurti-barbati-seturi-camasa-tricou/', 'Seturi de vara barbati'],
  ],
  'birou-canicula': [
    ['/blog/business-casual-barbati-femei/', 'Business casual pe inteles'],
    ['/blog/gri-antracit-culoare-asortare/', 'Gri antracit in tinute'],
  ],
  'poze-vara': [
    ['/blog/asortare-culori-haine-tabel/', 'Tabel asortare culori haine'],
    ['/blog/verde-fistic-asortare-culoare/', 'Verde fistic in tinute'],
  ],
};

function upperFirst(value: string) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function keyword(piece: SummerFashionPiece, context: SummerFashionContext) {
  return `${piece.name} ${context.name} vara 2026`;
}

function sections(piece: SummerFashionPiece, context: SummerFashionContext, primaryKeyword: string): Section[] {
  return [
    [
      'Raspuns rapid',
      `${upperFirst(primaryKeyword)} inseamna o tinuta construita pe ${piece.angle}. Contextul este precis: ${context.detail}. Pagina raspunde acestei cautari exacte, nu unui ghid general despre toata moda de vara.`,
    ],
    [
      'De ce merita pagina separata',
      `Intentia "${primaryKeyword}" este diferita de cautarile generale despre trenduri. Utilizatorul nu vrea doar inspiratie, ci o combinatie concreta intre piesa, situatie si sezon. De aceea articolul are H1, titlu si meta description pe acelasi keyword.`,
    ],
    [
      'Formula de outfit',
      `Porneste de la ${piece.name}, adauga o baza neutra si alege un singur accent: metalic, raffia, bleu, galben unt, dantela sau alb cald. Pentru ${context.name}, pastreaza proportiile curate si evita sa combini prea multe trenduri simultan.`,
    ],
    [
      'Ce se poarta vara 2026',
      `${summerTrendContext} Pentru piata din Romania, cheia este sa traduci trendul in tinute care suporta mers, caldura, fotografii si contexte reale, nu doar imagini de podium.`,
    ],
    [
      'Culori si accesorii',
      `Cu ${piece.name}, merg cel mai bine alb cald, crem, bleu, maro deschis, argintiu, galben unt si accente naturale. Daca piesa este deja vizibila, accesoriile trebuie sa sustina tinuta, nu sa concureze cu ea.`,
    ],
    [
      'Greseli de evitat',
      `Evita materialele care se sifoneaza imediat, incaltamintea nepotrivita contextului si descrierile rupte de H1. Pentru ${primaryKeyword}, toate elementele paginii trebuie sa ramana pe aceeasi cautare.`,
    ],
  ];
}

function faqs(piece: SummerFashionPiece, context: SummerFashionContext, primaryKeyword: string): Section[] {
  return [
    [
      `Se poarta ${primaryKeyword}?`,
      `Da, daca tinuta ramane coerenta: ${piece.angle}. Articolul tinteste exact cautarea "${primaryKeyword}", nu un subiect generic.`,
    ],
    [
      `Ce incaltaminte merge cu ${piece.name} ${context.name}?`,
      'Pentru zi merg sandale plate, loafers usori sau sneakers curati. Pentru eveniment merg sandale cu toc mic, barete subtiri sau pantofi nude, in functie de nivelul de eleganta.',
    ],
    [
      'Cum evit suprapunerea intre articole?',
      `Pastrezi pagina pe piesa "${piece.name}", contextul "${context.name}" si sezonul "vara 2026". Linkurile interne duc spre ghiduri complementare, nu spre articole cu acelasi keyword.`,
    ],
  ];
}

function comparisonRows(piece: SummerFashionPiece, context: SummerFashionContext) {
  return [
    ['Intentie cautare', `${piece.name} ${context.name}`, 'trenduri fashion vara prea generale'],
    ['Public', piece.audience, 'toata lumea fara context clar'],
    ['Sezon', 'vara 2026', 'articol evergreen fara sezonalitate'],
  ];
}

export const summerFashionAuthorityBlogPosts2026 = pieces.flatMap((piece, pieceIndex) =>
  contexts.map((context, contextIndex) => {
    const index = pieceIndex * contexts.length + contextIndex;
    const primaryKeyword = keyword(piece, context);
    const h1 = upperFirst(primaryKeyword);
    const slug = `blog/vara-2026-${piece.slug}-${context.slug}`;

    return {
      slug,
      title: `${h1} | Ghid fashion`,
      description: `${h1}: ghid fashion specific cu outfit, culori, accesorii si greseli de evitat pentru o tinuta coerenta.`,
      h1,
      articleType: 'summer-fashion-authority',
      intro: `${h1} se construieste pe ${piece.angle}. Ghidul raspunde direct cautarii exacte si pastreaza meta title, H1 si meta description pe acelasi subiect.`,
      sections: sections(piece, context, primaryKeyword),
      image: piece.image,
      date: `2026-05-${String(10 + (index % 16)).padStart(2, '0')}`,
      serpSnippet: `${h1}: alege ${piece.angle}, apoi adapteaza tinuta la ${context.detail}.`,
      keyTakeaways: [
        `Keyword principal: ${primaryKeyword}.`,
        `Intentie separata: ${piece.name} + ${context.name} + vara 2026.`,
        'Meta title, H1 si meta description raman pe aceeasi cautare.',
      ],
      comparisonRows: comparisonRows(piece, context),
      faqs: faqs(piece, context, primaryKeyword),
      relatedLinks: [
        ...(relatedByContext[context.slug] || []),
        ['/blog/trenduri-moda-2026-haine-sneakers-camasi/', 'Trenduri moda 2026'],
        ['/blog/asortare-culori-haine-tabel/', 'Asortare culori haine'],
        ['/blog/', 'Toate ghidurile fashion'],
      ],
      seoEngine: {
        keyword_principal: primaryKeyword,
        primaryKeyword,
        cluster: `summer-fashion-2026-${piece.slug}`,
        intent: 'summer-fashion-long-tail',
        funnel_stage: 'top-of-funnel',
        intentKey: `summer-fashion-2026|${piece.slug}|${context.slug}`,
        reason_safe: `micro-intentie unica: ${piece.name} + ${context.name} + vara 2026`,
        priority: index + 1,
      },
    };
  }),
);

export const summerFashionAuthorityMeta2026 = {
  total: pieces.length * contexts.length,
  pieces: pieces.length,
  contexts: contexts.length,
};
