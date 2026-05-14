import { SITE, SHOP, company } from './seoSite';

export type LocalCityPage = {
  slug: string;
  city: string;
  county: string;
  region: string;
  nearby: string[];
  angle: string;
  image: string;
};

export const localCityPages: LocalCityPage[] = [
  {
    slug: 'pantaloni-focsani',
    city: 'Focsani',
    county: 'Vrancea',
    region: 'Moldova de sud',
    nearby: ['Marasesti', 'Adjud', 'Odobesti', 'Panciu'],
    angle: 'pagina locala de baza pentru orasul in care este inregistrata firma',
    image: 'pantaloni-cu-snur-lung-negri-produs-unisex.webp',
  },
  {
    slug: 'pantaloni-bucuresti',
    city: 'Bucuresti',
    county: 'Bucuresti',
    region: 'Muntenia',
    nearby: ['Ilfov', 'Otopeni', 'Voluntari', 'Popesti-Leordeni'],
    angle: 'cerere mare pentru streetwear, pantaloni baggy si tinute casual urbane',
    image: 'pantaloni-cu-snur-lung-negri-barbati-outfit.webp',
  },
  {
    slug: 'pantaloni-cluj-napoca',
    city: 'Cluj-Napoca',
    county: 'Cluj',
    region: 'Transilvania',
    nearby: ['Floresti', 'Turda', 'Dej', 'Gherla'],
    angle: 'oras universitar unde croielile relaxate sunt usor de integrat in tinute zilnice',
    image: 'pantaloni-cu-snur-lung-maro-baggy-produs.webp',
  },
  {
    slug: 'pantaloni-iasi',
    city: 'Iasi',
    county: 'Iasi',
    region: 'Moldova',
    nearby: ['Pascani', 'Harlau', 'Targu Frumos', 'Podu Iloaiei'],
    angle: 'oras mare cu intentii mixte: haine casual, pantaloni comozi si moda urbana',
    image: 'pantaloni-cu-snur-lung-bleumarin-produs-unisex.webp',
  },
  {
    slug: 'pantaloni-timisoara',
    city: 'Timisoara',
    county: 'Timis',
    region: 'Banat',
    nearby: ['Lugoj', 'Sannicolau Mare', 'Jimbolia', 'Giroc'],
    angle: 'zona buna pentru cautari de outfituri urbane, pantaloni largi si piese minimaliste',
    image: 'pantaloni-cu-snur-lung-bej-produs-unisex.webp',
  },
  {
    slug: 'pantaloni-brasov',
    city: 'Brasov',
    county: 'Brasov',
    region: 'Transilvania',
    nearby: ['Sacele', 'Codlea', 'Rasnov', 'Fagaras'],
    angle: 'oras unde pantalonii comozi se potrivesc pentru oras, drumuri si weekend',
    image: 'pantaloni-cu-snur-lung-maro-produs-unisex.webp',
  },
  {
    slug: 'pantaloni-constanta',
    city: 'Constanta',
    county: 'Constanta',
    region: 'Dobrogea',
    nearby: ['Navodari', 'Mamaia', 'Medgidia', 'Mangalia'],
    angle: 'intentii sezoniere pentru pantaloni scurti, tinute lejere si materiale respirabile',
    image: 'pantaloni-scurti-cu-snur-lung-negri-barbati.webp',
  },
  {
    slug: 'pantaloni-craiova',
    city: 'Craiova',
    county: 'Dolj',
    region: 'Oltenia',
    nearby: ['Filiasi', 'Bailesti', 'Segarcea', 'Calafat'],
    angle: 'cautari potrivite pentru haine de oras, croieli relaxate si pantaloni negri versatili',
    image: 'pantaloni-cu-snur-lung-negri-cu-pliuri-produs.webp',
  },
  {
    slug: 'pantaloni-galati',
    city: 'Galati',
    county: 'Galati',
    region: 'Moldova de sud-est',
    nearby: ['Braila', 'Tecuci', 'Targu Bujor', 'Liesti'],
    angle: 'oras bun pentru cautari locale legate de magazine haine si pantaloni casual',
    image: 'pantaloni-cu-snur-lung-gri-deschis-produs-unisex.webp',
  },
  {
    slug: 'pantaloni-bacau',
    city: 'Bacau',
    county: 'Bacau',
    region: 'Moldova',
    nearby: ['Onesti', 'Moinesti', 'Comanesti', 'Buhusi'],
    angle: 'zona relevanta pentru cautari de pantaloni online cu livrare rapida in Moldova',
    image: 'pantaloni-cu-snur-lung-maro-drepti-barbati.webp',
  },
  {
    slug: 'pantaloni-pitesti',
    city: 'Pitesti',
    county: 'Arges',
    region: 'Muntenia',
    nearby: ['Mioveni', 'Curtea de Arges', 'Campulung', 'Stefanesti'],
    angle: 'intentii comerciale pentru haine casual, pantaloni largi si modele usor de purtat',
    image: 'pantaloni-cu-snur-lung-negri-cu-pliuri-barbati.webp',
  },
  {
    slug: 'pantaloni-sibiu',
    city: 'Sibiu',
    county: 'Sibiu',
    region: 'Transilvania',
    nearby: ['Medias', 'Cisnadie', 'Agnita', 'Avrig'],
    angle: 'oras potrivit pentru continut despre tinute curate, minimaliste si croieli comode',
    image: 'pantaloni-cu-snur-lung-bleumarin-femei-outfit.webp',
  },
];

export const localHub = {
  slug: 'pantaloni-pe-orase',
  title: 'Pantaloni pe orase | Ghid local Romania',
  description: 'Hub local cu pagini pentru pantaloni, magazine haine si livrare in principalele orase din Romania.',
  h1: 'Pantaloni pe orase in Romania',
};

export function localCityUrl(page: LocalCityPage) {
  return `${SITE}/orase/${page.slug}/`;
}

export function localCityTitle(page: LocalCityPage) {
  return `Pantaloni in ${page.city} | Magazin haine online cu livrare`;
}

export function localCityDescription(page: LocalCityPage) {
  return `Ghid local pentru pantaloni in ${page.city}, ${page.county}: modele baggy, oversized, pantaloni cu snur lung si livrare prin Atelier AXD.`;
}

export function localFaqs(page: LocalCityPage): [string, string][] {
  return [
    [
      `Pot comanda pantaloni in ${page.city} online?`,
      `Da. Produsele sunt disponibile prin Atelier AXD, iar livrarea se poate face in ${page.city} si in localitatile apropiate din ${page.county}.`,
    ],
    [
      `Exista magazin fizic in ${page.city}?`,
      `Aceasta pagina este un ghid local informativ. Comanda, stocul si plata sunt gestionate online pe atelieraxd.ro.`,
    ],
    [
      `Ce modele se potrivesc pentru ${page.city}?`,
      `Cele mai usor de purtat sunt pantalonii negri, croielile loose fit, modelele baggy si variantele cu snur lung pentru tinute casual urbane.`,
    ],
  ];
}

export function localBusinessSchema(page: LocalCityPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: localCityTitle(page),
    description: localCityDescription(page),
    url: localCityUrl(page),
    inLanguage: 'ro-RO',
    about: [
      { '@type': 'Thing', name: 'pantaloni' },
      { '@type': 'Thing', name: 'magazin haine online' },
      { '@type': 'Place', name: page.city },
      { '@type': 'AdministrativeArea', name: page.county },
    ],
    isPartOf: { '@type': 'WebSite', name: 'PantaloniCuSnurLung.ro', url: SITE },
    publisher: { '@type': 'Organization', name: company.name, url: SHOP },
  };
}
