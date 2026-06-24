import { ATELIER_LINKS, SHOP, updated } from './seoSite';

const neutralSections = [
  ['Rol editorial', 'Aceasta pagina functioneaza ca hub informativ pentru stil masculin. Explica piese, croieli, materiale si contexte de purtare, fara checkout local si fara promisiuni despre preturi sau disponibilitate.'],
  ['Cum folosesti hub-ul', 'Porneste de la categoria principala, apoi mergi spre subcategorii, ghiduri si articole conexe. Linkurile comerciale trimit catre AtelierAXD, unde se verifica stocul, preturile si detaliile de comanda.'],
  ['Legaturi utile', 'Pentru context mai larg, continua cu hub-ul de fashion masculin, ghidurile de marimi, articolele despre materiale si recomandarile editoriale conectate cu AtelierAXD.'],
];

function metaTitle(h1: string) {
  return `${h1} | PSL Fashion`;
}

function metaDescription(h1: string, intro: string) {
  const text = `${h1}: ${intro}`.replace(/\s+/g, ' ').trim();
  return text.length <= 158 ? text : `${text.slice(0, 154).replace(/\s+\S*$/, '')}.`;
}

function portalPage(
  slug: string,
  h1: string,
  intro: string,
  category = 'Fashion masculin',
  image = 'images/products/pantaloni-cu-snur-lung-negri-barbati-outfit.webp',
  sections = neutralSections,
) {
  return {
    slug,
    title: metaTitle(h1),
    description: metaDescription(h1, intro),
    h1,
    intro,
    category,
    sections,
    image,
    date: updated,
    articleType: slug.startsWith('news/') ? 'news' : slug.startsWith('ghiduri/') ? 'guide' : 'collection',
  };
}

export const mainNavLinks = [
  ['/', 'Acasa'],
  ['/fashion/', 'Fashion'],
  ['/pantaloni/', 'Pantaloni'],
  ['/tricouri/', 'Tricouri'],
  ['/hanorace/', 'Hanorace'],
  ['/tinute/', 'Tinute'],
  ['/ghiduri/', 'Ghiduri'],
  ['/news/', 'News'],
  ['/blog/', 'Blog'],
  ['/despre-noi/', 'Despre noi'],
  ['/contact/', 'Contact'],
];

export const socialLinks = [
  ['https://www.instagram.com/atelieraxd.ro/', 'Instagram'],
  ['https://www.tiktok.com/@atelieraxd', 'TikTok'],
  ['https://ro.pinterest.com/ATELIERAXD/', 'Pinterest'],
];

export const editorialArticles = [
  portalPage('fashion', 'Fashion masculin', 'Revista PSL Fashion aduna ghiduri despre pantaloni, tricouri, hanorace, tinute casual, streetwear si tendinte masculine.', 'Fashion'),
  portalPage('fashion-masculin', 'Fashion masculin: hub editorial PSL', 'Un punct de plecare pentru tendinte, categorii, outfituri, ghiduri si recomandari editoriale conectate cu AtelierAXD.', 'Fashion'),
  portalPage('pantaloni', 'Pantaloni barbati', 'Ghid editorial despre croieli relaxate, pantaloni scurti, cargo, jogger, largi, casual si modele cu snur.', 'Pantaloni'),
  portalPage('pantaloni-scurti', 'Pantaloni scurti barbati', 'Idei de purtare pentru vara, tinute casual si variante lejere cu tricouri simple sau oversize.', 'Pantaloni'),
  portalPage('pantaloni-cargo', 'Pantaloni cargo barbati', 'Cum alegi buzunarele, volumul si proportiile pentru tinute utilitare si streetwear.', 'Pantaloni'),
  portalPage('pantaloni-largi', 'Pantaloni largi barbati', 'Ghid despre volume, lungime, incaltaminte si echilibrul dintre piese oversized si piese compacte.', 'Pantaloni'),
  portalPage('pantaloni-jogger', 'Pantaloni jogger barbati', 'Cand functioneaza joggerii in tinute casual si cum ii diferentiezi de pantalonii largi sau cargo.', 'Pantaloni'),
  portalPage('pantaloni-cu-snur', 'Pantaloni cu snur', 'Cluster editorial pentru modelele cu snur vizibil, inclusiv paginile vechi despre pantaloni cu snur lung.', 'Pantaloni'),
  portalPage('pantaloni-casual', 'Pantaloni casual barbati', 'Piese usor de purtat zilnic, cu focus pe croiala, material si combinatii curate.', 'Pantaloni'),
  portalPage('tricouri', 'Tricouri barbati', 'Hub despre tricouri oversize, basic, negre, albe si tricouri de vara pentru garderoba masculina.', 'Tricouri'),
  portalPage('tricouri-oversize', 'Tricouri oversize barbati', 'Cum alegi lungimea, umarul cazut si materialul pentru un tricou oversized echilibrat.', 'Tricouri'),
  portalPage('tricouri-basic', 'Tricouri basic barbati', 'Piese simple pentru tinute zilnice, layering si combinatii cu pantaloni relaxati.', 'Tricouri'),
  portalPage('tricouri-negre', 'Tricouri negre barbati', 'Tricoul negru ca baza pentru tinute all black, casual si streetwear minimalist.', 'Tricouri'),
  portalPage('tricouri-albe', 'Tricouri albe barbati', 'Tricoul alb in tinute curate cu pantaloni negri, bej, cargo sau scurti.', 'Tricouri'),
  portalPage('tricouri-vara', 'Tricouri de vara barbati', 'Materiale, culori si croieli potrivite pentru zile calde si outfituri relaxate.', 'Tricouri'),
  portalPage('hanorace', 'Hanorace barbati', 'Hub despre hanorace oversize, negre, streetwear si casual, purtate cu pantaloni relaxati.', 'Hanorace'),
  portalPage('hanorace-oversize', 'Hanorace oversize barbati', 'Cum controlezi volumul unui hanorac oversize prin pantaloni, incaltaminte si layering.', 'Hanorace'),
  portalPage('hanorace-negre', 'Hanorace negre barbati', 'Baza pentru tinute all black, casual si streetwear cu linii curate.', 'Hanorace'),
  portalPage('hanorace-streetwear', 'Hanorace streetwear barbati', 'Idei despre fit, logo-uri discrete, layering si asociere cu pantaloni largi.', 'Hanorace'),
  portalPage('hanorace-casual', 'Hanorace casual barbati', 'Hanorace usor de purtat zilnic, fara styling complicat sau promisiuni comerciale.', 'Hanorace'),
  portalPage('tinute', 'Tinute masculine', 'Idei editoriale pentru outfituri casual, streetwear, de vara si all black.', 'Tinute'),
  portalPage('tinute-streetwear', 'Tinute streetwear barbati', 'Structuri de outfit cu pantaloni largi, tricouri oversize, hanorace si sneakers.', 'Tinute'),
  portalPage('tinute-casual', 'Tinute casual barbati', 'Combinatii simple pentru zi, facultate, oras si weekend.', 'Tinute'),
  portalPage('tinute-vara', 'Tinute de vara barbati', 'Idei pentru pantaloni scurti, tricouri usoare, culori deschise si incaltaminte lejera.', 'Tinute'),
  portalPage('tinute-all-black', 'Tinute all black barbati', 'Cum pastrezi profunzimea unei tinute negre prin texturi, proportii si accente discrete.', 'Tinute'),
  portalPage('ghiduri', 'Ghiduri de stil masculin', 'Ghiduri despre marimi, materiale, croieli, culori si alegeri vestimentare informate.', 'Ghiduri'),
  portalPage('ghiduri/marimi', 'Ghid marimi barbati', 'Cum citesti masuratorile, cum verifici talia si cum alegi fitul in functie de croiala.', 'Ghiduri'),
  portalPage('ghiduri/materiale', 'Ghid materiale haine barbati', 'Bumbac, fleece, jersey si alte materiale explicate pe intelesul cititorului.', 'Ghiduri'),
  portalPage('ghiduri/croieli', 'Ghid croieli barbati', 'Diferente intre slim, drept, loose, baggy, oversized si cargo.', 'Ghiduri'),
  portalPage('ghiduri/culori', 'Ghid culori tinute masculine', 'Cum combini negru, alb, gri, bej, bleumarin si tonuri pamantii.', 'Ghiduri'),
  portalPage('news', 'News fashion masculin', 'Noutati editoriale despre tendinte masculine, streetwear, sezon si piese populare.', 'News'),
  portalPage('news/fashion-masculin', 'News fashion masculin', 'Stiri si note editoriale clare, fara titluri inselatoare sau promisiuni comerciale.', 'News'),
  portalPage('news/trenduri', 'Trenduri fashion masculin', 'Observatii editoriale despre directii vizibile in casual, streetwear si tinute de sezon.', 'News'),
  portalPage('news/streetwear', 'News streetwear', 'Actualizari editoriale despre estetica streetwear si piese purtabile in oras.', 'News'),
  portalPage('news/sezon', 'News de sezon', 'Idei sezoniere pentru garderoba masculina, cu formulare informativa si verificabila.', 'News'),
  portalPage('colaborari', 'Colaborari PSL Fashion', 'Informatii pentru proiecte editoriale, continut de stil si colaborari transparente.', 'Site'),
  portalPage('scrie-pentru-noi', 'Scrie pentru noi', 'Pagina pentru propuneri editoriale, ghiduri de stil si materiale despre fashion masculin.', 'Site'),
  portalPage('cookies', 'Cookies', 'Informatii despre cookie-uri, preferinte si consimtamant pe portalul PSL Fashion.', 'Legal'),
];

export const portalCategoryGroups = [
  ['Pantaloni', ['pantaloni-scurti', 'pantaloni-cargo', 'pantaloni-largi', 'pantaloni-jogger', 'pantaloni-cu-snur', 'pantaloni-casual']],
  ['Tricouri', ['tricouri-oversize', 'tricouri-basic', 'tricouri-negre', 'tricouri-albe', 'tricouri-vara']],
  ['Hanorace', ['hanorace-oversize', 'hanorace-negre', 'hanorace-streetwear', 'hanorace-casual']],
  ['Tinute', ['tinute-streetwear', 'tinute-casual', 'tinute-vara', 'tinute-all-black']],
  ['Ghiduri', ['ghiduri/marimi', 'ghiduri/materiale', 'ghiduri/croieli', 'ghiduri/culori']],
  ['News', ['news/fashion-masculin', 'news/trenduri', 'news/streetwear', 'news/sezon']],
];

export const atelierRecommendations = [
  {
    title: 'Pantaloni cu croiala relaxata',
    image: '/images/products/pantaloni-cu-snur-lung-negri-produs-unisex.webp',
    text: 'Model potrivit pentru tinute casual si streetwear, cu disponibilitate verificata pe AtelierAXD.',
    href: SHOP,
  },
  {
    title: 'Tricouri pentru tinute de vara',
    image: '/tricou-gri-simplu-pantaloni-siret-lung-produs.png',
    text: 'Piese simple, usor de combinat cu pantaloni scurti sau largi.',
    href: ATELIER_LINKS.tricouri,
  },
  {
    title: 'Hanorace pentru layering',
    image: '/images/atelieraxd-long-tail/pantaloni-cu-snur-lung-hanorac-negru-simplu-siret-lung-hoodie-negru-minimalist.jpg',
    text: 'Optiuni de styling pentru vreme mai rece si tinute de oras.',
    href: ATELIER_LINKS.hanorace,
  },
];
