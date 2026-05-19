const trendContext2026 =
  'Directiile folosite pentru 2026 vin din rapoarte editoriale despre rochii vaporoase, rochii midi, sheer layering, dantela, sandale peep-toe, thong sandals cu toc mic, sandale comode cu barete late, balerini-sneaker si styling de vara mai practic. Articolele sunt gandite ca micro-ghiduri SEO, nu ca pagini comerciale de produs.';

const fashionImages = [
  {
    file: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-rochie-vaporoasa-din-in-alb-pe-plaj.png',
    alt: 'rochie vaporoasa alba din in pentru tinute de vara 2026',
    title: 'Rochie vaporoasa alba de vara',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-tendinte-rochii-nunta-culori-metali.png',
    alt: 'rochii de nunta 2026 in culori metalice si materiale satinate',
    title: 'Rochii de nunta in tendinte 2026',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-pantofi-stiletto-nude-si-sandale-ne.png',
    alt: 'sandale negre si pantofi nude pentru rochii midi si lungi',
    title: 'Sandale si pantofi pentru rochii',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-femeie-deschis-afaceri-purtand-rochie-mi.png',
    alt: 'rochie midi office bleumarin pentru birou modern',
    title: 'Rochie midi office',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-femeie-purtand-fusta-plisata-midi-v.png',
    alt: 'fusta plisata midi verde cu camasa alba pentru tinuta office',
    title: 'Fusta plisata midi',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-cu-snur-lung-sitemap-blogs-1-xml-comparatie-vizuala-ochelari-potrivi.png',
    alt: 'ochelari potriviti pentru forma fetei in tinute 2026',
    title: 'Ochelari potriviti pentru fata',
  },
];

const pieces = [
  ['rochii vaporoase de in', 'rochii-in-vaporoase', 'rochie lejera, material respirabil si lungime care nu incurca mersul'],
  ['rochii midi office', 'rochii-midi-office', 'linie curata, material cu tinuta si pantofi comozi'],
  ['rochii de nunta pentru invitate', 'rochii-nunta-invitate', 'culoare eleganta, luciu discret si croiala care nu concureaza mireasa'],
  ['sandale peep-toe', 'sandale-peep-toe', 'varf deschis, toc mic sau mediu si pedichiura curata'],
  ['sandale comode cu barete late', 'sandale-barete-late', 'confort real, barete stabile si talpa care sustine mersul'],
  ['sandale thong cu toc mic', 'sandale-thong-toc-mic', 'minimalism de vara, toc mic si silueta feminina fara efort'],
  ['fuste plisate midi', 'fuste-plisate-midi', 'miscare verticala, talie clara si top simplu'],
  ['camasi lejere de vara', 'camasi-lejere-vara', 'bumbac sau in, maneca rulata si croiala fluida'],
  ['genti mici de zi', 'genti-mici-zi', 'dimensiune practica, culoare neutra si pozitionare care nu strica silueta'],
  ['ochelari de soare potriviti fetei', 'ochelari-soare-forma-fetei', 'forma ramei aleasa dupa fata, nu doar dupa trend'],
];

const contexts = [
  ['la nunta pe terasa', 'nunta-terasa', 'eveniment relaxat, lumina de seara si fotografii multe'],
  ['la birou vara', 'birou-vara', 'office casual, aer conditionat si drum prin caldura'],
  ['in city break', 'city-break', 'mers mult, bagaj mic si poze in oras'],
  ['la festival de vara', 'festival-vara', 'confort, praf, caldura si stat mult in picioare'],
  ['la botez sau cununie civila', 'botez-cununie', 'eleganta calma si tinuta potrivita pentru zi'],
  ['la date pe terasa', 'date-terasa', 'look ingrijit, relaxat si usor de purtat seara'],
  ['in vacanta la mare', 'vacanta-mare', 'materiale usoare, sandale si tranzitie de la plaja la terasa'],
  ['la concert in aer liber', 'concert-aer-liber', 'miscare, strat subtire seara si incaltaminte stabila'],
  ['la zi de nastere vara', 'zi-nastere-vara', 'fotografii, socializare si tinuta comoda pana seara'],
  ['pentru poze de Instagram', 'poze-instagram', 'contrast, lumina buna si detalii vizibile in cadru'],
];

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function rotateImages(index: number) {
  return [0, 1, 2].map((offset) => {
    const item = fashionImages[(index + offset) % fashionImages.length];
    return {
      ...item,
      alt: `${item.alt} - reper vizual ${offset + 1}`,
    };
  });
}

function sections(piece: string, context: string, angle: string, contextDetail: string) {
  return [
    ['Intentie SEO distincta', `Acest articol raspunde cautarii lungi "${piece} ${context} 2026". Nu canibalizeaza paginile despre pantaloni cu snur, pentru ca intentia este despre piesa ${piece} intr-un context precis: ${contextDetail}.`],
    ['Raspuns rapid', `Pentru ${piece} ${context}, pleaca de la ${angle}. Alege o singura directie vizuala clara: culoare, textura, croiala sau accesoriu. Daca le folosesti pe toate simultan, tinuta pare cautata si greu de purtat.`],
    ['Ce se poarta in 2026', `${trendContext2026} Pentru Romania, regula practica este sa adaptezi trendul la caldura, mers, eveniment si fotografii reale, nu doar la poza de podium.`],
    ['Formula de tinuta', `Construieste tinuta in trei pasi: piesa principala, incaltaminte potrivita si un accent mic. Pentru ${context}, foloseste culori usor de fotografiat: alb cald, crem, negru, bleumarin, gri, maro, rosu tomate, cobalt sau verde olive.`],
    ['Ce incaltaminte merge', `Daca tinuta este eleganta, merg sandale cu toc mic, kitten heel, pantofi nude sau peep-toe. Daca ziua presupune mers mult, alege sandale joase, barete late, balerini-sneaker sau sneakers curati. Incaltamintea trebuie sa sustina proportia, nu doar sa bifeze un trend.`],
    ['Greseli de evitat', `Nu purta ${piece} ${context} cu materiale care se sifoneaza imediat, barete incomode sau accesorii prea mari pentru context. Evita si titlurile SEO generice; pagina trebuie sa raspunda unei situatii concrete, ca sa nu se bata cu alte articole.`],
    ['FAQ pentru cautari long tail', `Se poarta ${piece} in 2026? Da, daca alegi varianta potrivita contextului. Ce alegi prima data: culoarea sau croiala? Croiala. Ce ajuta la indexare? Titlu clar, raspuns direct, imagini cu alt text natural si linkuri interne spre ghiduri conexe.`],
  ];
}

export const fashionExpansionBlogPosts2026 = pieces.flatMap(([piece, pieceSlug, angle], pieceIndex) =>
  contexts.map(([context, contextSlug, contextDetail], contextIndex) => {
    const index = pieceIndex * contexts.length + contextIndex;
    const title = `${piece[0].toUpperCase()}${piece.slice(1)} ${context} in 2026`;
    const slug = `blog/${pieceSlug}-${contextSlug}-2026`;
    const images = rotateImages(index);

    return {
      slug,
      title,
      description: `${title}: ghid SEO long tail cu trenduri 2026, incaltaminte, proportii, greseli de evitat si idei pentru poze.`,
      h1: title,
      intro: `${piece[0].toUpperCase()}${piece.slice(1)} ${context} se aleg dupa context, nu doar dupa trend. In 2026, tinuta buna combina ${angle}, apoi adauga incaltaminte comoda si un accent vizual usor de fotografiat.`,
      date: '2026-05-20',
      image: images[0].file,
      images,
      seoEngine: {
        keyword_principal: `${piece} ${context} 2026`,
        cluster: 'fashion-expansion-2026',
        intent: 'informational-style-guide',
        funnel_stage: 'top-of-funnel',
        reason_safe: `micro-intentie ${slugify(piece)} + ${slugify(context)}`,
        recommended_angle: `${angle}; ${contextDetail}`,
        priority: index + 1,
      },
      sections: sections(piece, context, angle, contextDetail),
    };
  })
);
