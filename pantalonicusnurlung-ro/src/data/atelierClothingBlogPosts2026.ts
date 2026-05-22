const authoritySource = {
  name: 'GQ',
  url: 'https://www.gq.com/',
};

const imagePool = [
  {
    file: 'images/atelieraxd-long-tail/set-barbati-casual-pantaloni-scurti-si-tricou.jpg',
    alt: 'set casual barbati cu tricou si pantaloni scurti pe fundal alb',
    title: 'Set casual barbati cu tricou',
  },
  {
    file: 'images/atelieraxd-long-tail/set-barbati-bumbac-negru-spalat-hanorac-fermoar-pantaloni-largi-siret.jpg',
    alt: 'set barbati bumbac negru spalat cu hanorac si pantaloni largi',
    title: 'Set barbati bumbac negru spalat',
  },
  {
    file: 'images/atelieraxd-long-tail/set-vara-barbati-crem-tricou-pantaloni-scurti-set-vara-barbati-crem-bumbac-pan.png',
    alt: 'set de vara barbati crem cu tricou si pantaloni scurti',
    title: 'Set vara barbati crem',
  },
  {
    file: 'images/atelieraxd-long-tail/set-camasa-pantaloni-barbati-smart-casual-elas-set-camasa-pantaloni-barbati-po.png',
    alt: 'set camasa si pantaloni barbati smart casual pe fundal alb',
    title: 'Set camasa pantaloni smart casual',
  },
  {
    file: 'images/atelieraxd-long-tail/trening-barbati-bumbac-negru-spalat-cusaturi-pantaloni-largi-siret-lung.jpg',
    alt: 'trening barbati bumbac negru spalat cu pantaloni largi',
    title: 'Trening barbati bumbac negru',
  },
  {
    file: 'images/atelieraxd-long-tail/trening-barbati-fas-gri-cusaturi-pantaloni-largi-siret-lung.jpg',
    alt: 'trening barbati fas gri cu pantaloni largi si cusaturi',
    title: 'Trening barbati fas gri',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-scurti-barbati-negri-snur-lung-pantaloni-scurti-negri-cu-snur-lung.jpg',
    alt: 'pantaloni scurti barbati negri cu snur lung pe fundal alb',
    title: 'Pantaloni scurti negri barbati',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-scurti-barbati-crem-cu-siret-lung-bermude-trening-bumbac-crem-snur-l.jpg',
    alt: 'pantaloni scurti barbati crem cu snur lung pe fundal alb',
    title: 'Pantaloni scurti crem barbati',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-scurti-barbati-bleumarin-flexibil-si-pantaloni-scurti-bleumarin-snur.jpg',
    alt: 'pantaloni scurti barbati bleumarin cu snur pe fundal alb',
    title: 'Pantaloni scurti bleumarin',
  },
  {
    file: 'images/atelieraxd-long-tail/set-barbati-casual-pantaloni-scurti-si-tricou-2.jpg',
    alt: 'set casual barbati cu pantaloni scurti si tricou alb',
    title: 'Set casual vara barbati',
  },
];

const pieces = [
  {
    piece: 'tricou heavyweight barbati',
    slug: 'tricou-heavyweight-barbati',
    product: 'tricouri',
    angle: 'densitate, cadere pe umeri si guler care nu se lasa dupa doua spalari',
    antiTrend: 'tricourile subtiri vandute ca basic premium',
  },
  {
    piece: 'tricou oversized negru',
    slug: 'tricou-oversized-negru',
    product: 'tricouri',
    angle: 'volum controlat, maneca ampla si contrast cu partea de jos',
    antiTrend: 'oversized-ul luat cu doua marimi mai mare fara croiala reala',
  },
  {
    piece: 'hanorac cu fermoar barbati',
    slug: 'hanorac-fermoar-barbati',
    product: 'hanorace',
    angle: 'fermoar curat, gluga asezata si bumbac cu greutate placuta',
    antiTrend: 'hanoracul subtire care se increteste sub geaca',
  },
  {
    piece: 'hanorac oversized negru',
    slug: 'hanorac-oversized-negru',
    product: 'hanorace',
    angle: 'umar cazut, lungime calculata si volum care nu inghite talia',
    antiTrend: 'all black fara textura sau proportie',
  },
  {
    piece: 'set tricou si pantaloni scurti barbati',
    slug: 'set-tricou-pantaloni-scurti-barbati',
    product: 'seturi',
    angle: 'aceeasi familie de material, culoare coerenta si scurti cu talie curata',
    antiTrend: 'seturile prea stramte care par echipament de sala',
  },
  {
    piece: 'set hanorac si pantaloni barbati',
    slug: 'set-hanorac-pantaloni-barbati',
    product: 'seturi',
    angle: 'uniforma urbana, material dens si snur lung la pantaloni ca accent',
    antiTrend: 'treningul lucios purtat ca tinuta premium',
  },
  {
    piece: 'pantaloni scurti negri barbati',
    slug: 'pantaloni-scurti-negri-barbati',
    product: 'pantaloni scurti',
    angle: 'lungime peste genunchi, buzunare curate si snur vizibil',
    antiTrend: 'pantalonii scurti mulati cu tiv prea sus',
  },
  {
    piece: 'pantaloni scurti crem barbati',
    slug: 'pantaloni-scurti-crem-barbati',
    product: 'pantaloni scurti',
    angle: 'ton cald, material netransparent si combinatie usoara cu alb sau gri',
    antiTrend: 'bejul prea galben combinat cu imprimeuri mari',
  },
  {
    piece: 'pantaloni largi cu cusaturi barbati',
    slug: 'pantaloni-largi-cusaturi-barbati',
    product: 'pantaloni',
    angle: 'cusaturi vizibile, cadere ampla si snur lung la pantaloni pastrat ordonat',
    antiTrend: 'pantalonii largi fara structura in zona genunchilor',
  },
  {
    piece: 'set camasa si pantaloni barbati',
    slug: 'set-camasa-pantaloni-barbati',
    product: 'seturi',
    angle: 'smart casual relaxat, camasa fluida si pantalon cu linie curata',
    antiTrend: 'costumul casual purtat cu camasa rigida de birou',
  },
];

const contexts = [
  {
    label: 'la birou creativ',
    slug: 'birou-creativ',
    intent: 'how-to',
    detail: 'dress code relaxat, aer conditionat, drum prin oras si nevoie de tinuta curata',
    persona: 'barbat 25-40 care lucreaza in mediu creativ',
  },
  {
    label: 'la date pe terasa',
    slug: 'date-terasa',
    intent: 'inspiratie',
    detail: 'lumina de seara, tinuta relaxata si prima impresie fara efort teatral',
    persona: 'barbat care vrea sa arate ingrijit fara costum',
  },
  {
    label: 'in city break',
    slug: 'city-break',
    intent: 'checklist',
    detail: 'bagaj mic, mers mult, poze si trecere usoara de la zi la seara',
    persona: 'barbat urban care calatoreste lejer',
  },
  {
    label: 'la concert indoor',
    slug: 'concert-indoor',
    intent: 'style-guide',
    detail: 'caldura in sala, aglomeratie, sneakers comozi si straturi usor de scos',
    persona: 'barbat interesat de streetwear purtabil',
  },
  {
    label: 'in garderoba capsula',
    slug: 'garderoba-capsula',
    intent: 'strategy',
    detail: 'piese putine, combinatii multe, culori neutre si cost per wear mai bun',
    persona: 'barbat care cumpara mai rar, dar mai atent',
  },
];

const productLinks: Record<string, string> = {
  pantaloni: 'https://atelieraxd.ro/collections/pantaloni-barbati-atelier-axd',
  'pantaloni scurti': 'https://atelieraxd.ro/collections/pantaloni-barbati-atelier-axd',
  tricouri: 'https://atelieraxd.ro/collections/tricouri-barbati-atelier-axd',
  hanorace: 'https://atelieraxd.ro/collections/tricouri-barbati-atelier-axd',
  seturi: 'https://atelieraxd.ro/collections/seturi-barbati-atelier-axd',
};

function titleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function imageFor(index: number) {
  const main = imagePool[index % imagePool.length];
  const secondary = imagePool[(index + 3) % imagePool.length];
  const third = imagePool[(index + 6) % imagePool.length];
  return [
    { ...main, alt: `${main.alt} pentru ghid Atelier AXD 2026` },
    { ...secondary, alt: `${secondary.alt} - detaliu material si proportii` },
    { ...third, alt: `${third.alt} - inspiratie outfit masculin` },
  ];
}

function sections(piece: string, product: string, context: string, detail: string, angle: string, antiTrend: string) {
  const collection = productLinks[product];
  return [
    [
      `De ce ${piece} ${context} merita ghid separat`,
      `${titleCase(piece)} ${context} raspunde unei cautari precise, nu unei pagini generale de produs. Inspiratia vine din directia editoriala ${authoritySource.name}, unde piesele simple sunt tratate ca baza de garderoba, dar filtrul Atelier AXD ramane practic: material, cadere, proportie si felul in care hainele se poarta in orase romanesti, nu doar in fotografii perfecte.`,
    ],
    [
      'Raspuns rapid pentru alegere',
      `Alege dupa ${angle}. Contextul conteaza: ${detail}. Daca piesa principala are volum, pastreaza restul tinutei simplu; daca este compacta, poti adauga textura prin sneakers, geaca sau un accesoriu mic. Pentru directia comerciala potrivita, foloseste colectia de ${product} Atelier AXD ca reper de croiala si culoare: ${collection}.`,
    ],
    [
      'Tabel comparativ de styling',
      `Comparatia utila este simpla: pentru prima impresie conteaza linia umerilor si talia; pentru confort conteaza materialul; pentru poze conteaza contrastul; pentru purtare repetata conteaza culoarea. In cazul acestui subiect, varianta castigatoare este cea care ramane curata dupa cateva ore reale de purtare, nu cea care arata spectaculos doar pe umeras.`,
    ],
    [
      'Pozitia Atelier AXD',
      `Spre deosebire de ce vezi pe TikTok, noi nu recomandam ${antiTrend}, pentru ca stilul masculin bun nu se construieste din exagerare, ci din control. O piesa urbana premium trebuie sa aiba greutate, ritm si intentie. Cand apare detaliul de snur lung la pantaloni, el trebuie sa fie accent, nu dezordine.`,
    ],
    [
      'Cum construiesti tinuta in 3 pasi',
      `1. Porneste de la piesa principala si decide daca ea da volumul sau textura. 2. Alege o culoare de baza: negru, gri, crem, bleumarin, maro sau olive. 3. Verifica in oglinda zona taliei si incaltamintea. Daca porti pantaloni cu snur, snur lung la pantaloni trebuie legat central si lasat sa cada natural, nu sa concureze cu restul outfitului.`,
    ],
    [
      'Materiale, croiala si senzatie la purtare',
      `Materialul bun se simte dens, dar nu rigid. Are o cadere moale, lasa aerul sa circule si nu face cute nervoase dupa zece minute pe scaun. Atelier AXD lucreaza in zona de design urban si fashion masculin cu accent pe haine care arata bine in mers, in masina, la terasa si in poze facute rapid, nu doar intr-un cadru de studio.`,
    ],
    [
      'Greseli de evitat',
      `Evita trei lucruri: marimea aleasa doar pentru ca suna oversized, combinatia cu prea multe logo-uri si lipsa unei ancore cromatice. Daca ai ${piece} ${context}, restul tinutei trebuie sa explice piesa, nu sa se certe cu ea. Iar cand apar pantaloni cu detalii frontale, snur lung la pantaloni cere ordine vizuala.`,
    ],
    [
      'FAQ scurt pentru cautari long-tail',
      `Se potriveste in 2026? Da, daca alegi croiala potrivita contextului. Merge cu sneakers? Da, mai ales modele curate, cu volum mediu. E prea casual? Nu, daca materialul are tinuta si paleta ramane controlata. Ce cumperi prima data? Piesa neutra, apoi varianta de accent.`,
    ],
  ];
}

export const atelierClothingBlogPosts2026 = pieces.flatMap((item, pieceIndex) =>
  contexts.map((context, contextIndex) => {
    const index = pieceIndex * contexts.length + contextIndex;
    const imgs = imageFor(index);
    const title = `${titleCase(item.piece)} ${context.label}: ghid Atelier AXD 2026`;
    const slug = `blog/${item.slug}-${context.slug}-2026`;

    return {
      slug,
      title,
      description: `${titleCase(item.piece)} ${context.label}: ghid de styling masculin, materiale, proportii, greseli de evitat si recomandari Atelier AXD.`,
      h1: title,
      intro: `${titleCase(item.piece)} ${context.label} se alege dupa croiala, material si context. Raspunsul scurt: cauta ${item.angle}, pastreaza paleta curata si verifica daca tinuta arata bine in miscare, nu doar in poza.`,
      date: '2026-05-22',
      image: imgs[0].file,
      images: imgs,
      seoEngine: {
        keyword_principal: `${item.piece} ${context.label}`,
        cluster: 'atelier-axd-imbracaminte-masculina',
        intent: context.intent,
        funnel_stage: context.slug === 'garderoba-capsula' ? 'consideration' : 'awareness',
        reason_safe: `micro-intentie pe ${item.slug} + ${context.slug}; evita canibalizarea cu pantalonii cu snur general`,
        recommended_angle: `${item.angle}; ${context.detail}`,
        priority: index + 1,
      },
      sections: sections(item.piece, item.product, context.label, context.detail, item.angle, item.antiTrend),
      author: 'Echipa editoriala Atelier AXD',
      source: authoritySource,
      persona: context.persona,
    };
  })
);
