const colorTrendSources =
  'Reperele editoriale folosite pentru 2026 sunt: alb cald tip Cloud Dancer, rosu tomate, scarlet, lime, chartreuse, cobalt, powder blue, bubblegum pink, teal, mustar, ciocolatiu si champagne. Articolele de mai jos folosesc aceste directii ca inspiratie de styling, nu ca promisiune ca fiecare nuanta va ramane trend tot anul.';

const baseImages = [
  {
    file: 'images/atelieraxd-long-tail/pantaloni-lungi-largi-barbati-ti-casual-negri-pantaloni-barbati-largi-negri-s.jpg',
    alt: 'pantaloni negri largi Atelier AXD pentru combinatii de culoare in 2026',
    title: 'Pantaloni negri largi pentru tinute colorate',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-barbati-bej-siret-lung-buzunar-spate-pantaloni-bej-cu-siret-lung.png',
    alt: 'pantaloni bej cu siret lung Atelier AXD pentru outfituri cu alb cald si culori trend',
    title: 'Pantaloni bej cu siret lung',
  },
  {
    file: 'images/atelieraxd-long-tail/pantaloni-lungi-largi-barbati-ti-casual-maro-pantaloni-maro-streetwear-trico.png',
    alt: 'pantaloni maro streetwear Atelier AXD pentru asortari cu tonuri calde 2026',
    title: 'Pantaloni maro streetwear',
  },
];

const colorGuides = [
  ['cum-asortezi-alb-cald-cloud-dancer-cu-pantaloni-negri-2026', 'Cum asortezi alb cald Cloud Dancer cu pantaloni negri in 2026', 'alb cald Cloud Dancer', 'pantaloni negri', 'contrast curat, tricou alb cald si snur vizibil', 'minimal urban'],
  ['cum-asortezi-alb-cald-cu-pantaloni-bej-si-sneakers-albi-2026', 'Cum asortezi alb cald cu pantaloni bej si sneakers albi in 2026', 'alb cald', 'pantaloni bej', 'tinuta luminoasa fara sa para pijama', 'smart casual de vara'],
  ['cum-asortezi-rosu-tomate-cu-pantaloni-negri-largi-2026', 'Cum asortezi rosu tomate cu pantaloni negri largi in 2026', 'rosu tomate', 'pantaloni negri largi', 'accent puternic sus si baza neagra jos', 'streetwear curat'],
  ['cum-asortezi-rosu-scarlet-cu-pantaloni-gri-deschis-2026', 'Cum asortezi rosu scarlet cu pantaloni gri deschis in 2026', 'rosu scarlet', 'pantaloni gri deschis', 'contrast rece-cald controlat', 'oras si poze'],
  ['cum-asortezi-lime-cu-pantaloni-bleumarin-cu-snur-2026', 'Cum asortezi lime cu pantaloni bleumarin cu snur in 2026', 'lime', 'pantaloni bleumarin cu snur', 'accent acid langa baza navy', 'vara urbana'],
  ['cum-asortezi-chartreuse-cu-pantaloni-negri-baggy-2026', 'Cum asortezi chartreuse cu pantaloni negri baggy in 2026', 'chartreuse', 'pantaloni negri baggy', 'culoare neon dozata in tricou sau sapca', 'festival si oras'],
  ['cum-asortezi-cobalt-cu-pantaloni-albi-scurti-2026', 'Cum asortezi cobalt cu pantaloni albi scurti in 2026', 'cobalt', 'pantaloni albi scurti', 'albastru intens cu baza de vara', 'tinuta de vacanta'],
  ['cum-asortezi-cobalt-cu-pantaloni-negri-si-tricou-alb-2026', 'Cum asortezi cobalt cu pantaloni negri si tricou alb in 2026', 'cobalt', 'pantaloni negri si tricou alb', 'accent pe jacheta sau sneaker', 'look usor de repetat'],
  ['cum-asortezi-powder-blue-cu-pantaloni-maro-deschis-2026', 'Cum asortezi powder blue cu pantaloni maro deschis in 2026', 'powder blue', 'pantaloni maro deschis', 'albastru prafuit cu ton pamantiu', 'casual cald'],
  ['cum-asortezi-powder-blue-cu-pantaloni-gri-baggy-2026', 'Cum asortezi powder blue cu pantaloni gri baggy in 2026', 'powder blue', 'pantaloni gri baggy', 'paleta rece, calma si moderna', 'daily outfit'],
  ['cum-asortezi-bubblegum-pink-cu-pantaloni-negri-oversized-2026', 'Cum asortezi bubblegum pink cu pantaloni negri oversized in 2026', 'bubblegum pink', 'pantaloni negri oversized', 'roz vizibil temperat de negru', 'contrast foto'],
  ['cum-asortezi-roz-pudrat-cu-pantaloni-crem-cu-snur-2026', 'Cum asortezi roz pudrat cu pantaloni crem cu snur in 2026', 'roz pudrat', 'pantaloni crem cu snur', 'pastel cald cu baza deschisa', 'tinuta lejera'],
  ['cum-asortezi-teal-cu-pantaloni-maro-streetwear-2026', 'Cum asortezi teal cu pantaloni maro streetwear in 2026', 'teal', 'pantaloni maro streetwear', 'verde-albastrui cu maro urban', 'look editorial'],
  ['cum-asortezi-turcoaz-inchis-cu-pantaloni-negri-cu-snur-2026', 'Cum asortezi turcoaz inchis cu pantaloni negri cu snur in 2026', 'turcoaz inchis', 'pantaloni negri cu snur', 'accent rece peste baza neagra', 'seara de vara'],
  ['cum-asortezi-verde-olive-cu-pantaloni-albi-scurti-2026', 'Cum asortezi verde olive cu pantaloni albi scurti in 2026', 'verde olive', 'pantaloni albi scurti', 'utilitar calm cu alb curat', 'vara casual'],
  ['cum-asortezi-verde-armata-cu-pantaloni-bej-largi-2026', 'Cum asortezi verde armata cu pantaloni bej largi in 2026', 'verde armata', 'pantaloni bej largi', 'military soft fara exces', 'oras si facultate'],
  ['cum-asortezi-verde-smarald-cu-pantaloni-negri-slim-2026', 'Cum asortezi verde smarald cu pantaloni negri slim in 2026', 'verde smarald', 'pantaloni negri slim', 'accent elegant pe o baza simpla', 'seara smart casual'],
  ['cum-asortezi-mustar-cu-pantaloni-maro-inchis-2026', 'Cum asortezi mustar cu pantaloni maro inchis in 2026', 'mustar', 'pantaloni maro inchis', 'paleta calda de toamna purtabila vara seara', 'retro urban'],
  ['cum-asortezi-galben-unt-cu-pantaloni-gri-deschis-2026', 'Cum asortezi galben unt cu pantaloni gri deschis in 2026', 'galben unt', 'pantaloni gri deschis', 'soft yellow cu gri rece', 'tinuta luminoasa'],
  ['cum-asortezi-champagne-cu-pantaloni-negri-wide-leg-2026', 'Cum asortezi champagne cu pantaloni negri wide leg in 2026', 'champagne', 'pantaloni negri wide leg', 'luciu discret si croiala larga', 'eveniment relaxat'],
  ['cum-asortezi-ciocolatiu-cu-pantaloni-crem-2026', 'Cum asortezi ciocolatiu cu pantaloni crem in 2026', 'ciocolatiu', 'pantaloni crem', 'maro profund cu baza calda', 'smart casual'],
  ['cum-asortezi-maro-rosiatic-cu-pantaloni-albi-cu-siret-2026', 'Cum asortezi maro rosiatic cu pantaloni albi cu siret in 2026', 'maro rosiatic', 'pantaloni albi cu siret', 'accent teracota cu alb curat', 'vara urbana'],
  ['cum-asortezi-portocaliu-ars-cu-pantaloni-negri-cu-snur-2026', 'Cum asortezi portocaliu ars cu pantaloni negri cu snur in 2026', 'portocaliu ars', 'pantaloni negri cu snur', 'cald puternic pe baza intunecata', 'look de concert'],
  ['cum-asortezi-teracota-cu-pantaloni-bleumarin-2026', 'Cum asortezi teracota cu pantaloni bleumarin in 2026', 'teracota', 'pantaloni bleumarin', 'pamantiu cald cu navy', 'tinuta urbana matura'],
  ['cum-asortezi-mov-pruna-cu-pantaloni-negri-baggy-2026', 'Cum asortezi mov pruna cu pantaloni negri baggy in 2026', 'mov pruna', 'pantaloni negri baggy', 'mov inchis fara efect strident', 'seara urbana'],
  ['cum-asortezi-lavanda-cu-pantaloni-gri-si-tricou-alb-2026', 'Cum asortezi lavanda cu pantaloni gri si tricou alb in 2026', 'lavanda', 'pantaloni gri si tricou alb', 'pastel rece in doza mica', 'outfit curat'],
  ['cum-asortezi-fuchsia-cu-pantaloni-negri-2026', 'Cum asortezi fuchsia cu pantaloni negri in 2026', 'fuchsia', 'pantaloni negri', 'roz intens controlat prin negru', 'statement urban'],
  ['cum-asortezi-albastru-royal-cu-pantaloni-scurti-albi-2026', 'Cum asortezi albastru royal cu pantaloni scurti albi in 2026', 'albastru royal', 'pantaloni scurti albi', 'contrast sport-lux usor de vazut in poze', 'vara activa'],
  ['cum-asortezi-albastru-deschis-cu-pantaloni-maro-baggy-2026', 'Cum asortezi albastru deschis cu pantaloni maro baggy in 2026', 'albastru deschis', 'pantaloni maro baggy', 'rece deschis cu maro lejer', 'tinuta relaxata'],
  ['cum-asortezi-bleumarin-cu-pantaloni-albi-si-siret-lung-2026', 'Cum asortezi bleumarin cu pantaloni albi si siret lung in 2026', 'bleumarin', 'pantaloni albi si siret lung', 'navy curat cu alb de vara', 'tinuta nautica urbana'],
  ['cum-asortezi-gri-carbune-cu-pantaloni-bej-2026', 'Cum asortezi gri carbune cu pantaloni bej in 2026', 'gri carbune', 'pantaloni bej', 'top inchis si baza calda', 'smart casual urban'],
  ['cum-asortezi-gri-deschis-cu-pantaloni-negri-cu-siret-2026', 'Cum asortezi gri deschis cu pantaloni negri cu siret in 2026', 'gri deschis', 'pantaloni negri cu siret', 'monocrom soft cu contrast central', 'tinuta zilnica'],
  ['cum-asortezi-negru-spalat-cu-pantaloni-maro-deschis-2026', 'Cum asortezi negru spalat cu pantaloni maro deschis in 2026', 'negru spalat', 'pantaloni maro deschis', 'vintage soft cu ton pamantiu', 'streetwear lejer'],
  ['cum-asortezi-alb-optic-cu-pantaloni-kaki-2026', 'Cum asortezi alb optic cu pantaloni kaki in 2026', 'alb optic', 'pantaloni kaki', 'contrast proaspat cu utilitar', 'look de zi'],
  ['cum-asortezi-crem-cu-pantaloni-negri-si-snur-alb-2026', 'Cum asortezi crem cu pantaloni negri si snur alb in 2026', 'crem', 'pantaloni negri si snur alb', 'cald sus, contrast jos', 'minimal streetwear'],
  ['cum-asortezi-bej-rece-cu-pantaloni-bleumarin-2026', 'Cum asortezi bej rece cu pantaloni bleumarin in 2026', 'bej rece', 'pantaloni bleumarin', 'neutru elegant cu navy', 'birou relaxat'],
  ['cum-asortezi-sand-cu-pantaloni-gri-inchis-2026', 'Cum asortezi sand cu pantaloni gri inchis in 2026', 'sand', 'pantaloni gri inchis', 'neutru cald cu baza serioasa', 'oras seara'],
  ['cum-asortezi-kaki-cu-pantaloni-negri-oversized-2026', 'Cum asortezi kaki cu pantaloni negri oversized in 2026', 'kaki', 'pantaloni negri oversized', 'utilitar simplu fara camuflaj', 'daily streetwear'],
  ['cum-asortezi-sage-green-cu-pantaloni-crem-2026', 'Cum asortezi sage green cu pantaloni crem in 2026', 'sage green', 'pantaloni crem', 'verde prafuit cu baza calda', 'primavara vara'],
  ['cum-asortezi-menta-cu-pantaloni-albi-scurti-2026', 'Cum asortezi menta cu pantaloni albi scurti in 2026', 'menta', 'pantaloni albi scurti', 'fresh fara efect copilareasca', 'vacanta si terasa'],
  ['cum-asortezi-coral-cu-pantaloni-bej-largi-2026', 'Cum asortezi coral cu pantaloni bej largi in 2026', 'coral', 'pantaloni bej largi', 'accent cald prietenos', 'tinuta de zi'],
  ['cum-asortezi-piersica-cu-pantaloni-gri-bej-2026', 'Cum asortezi piersica cu pantaloni gri bej in 2026', 'piersica', 'pantaloni gri bej', 'soft peach cu neutru cald', 'look calm'],
  ['cum-asortezi-burgundy-cu-pantaloni-negri-wide-leg-2026', 'Cum asortezi burgundy cu pantaloni negri wide leg in 2026', 'burgundy', 'pantaloni negri wide leg', 'rosu inchis cu volum elegant', 'seara smart'],
  ['cum-asortezi-violet-electric-cu-pantaloni-negri-snur-lung-2026', 'Cum asortezi violet electric cu pantaloni negri cu snur lung in 2026', 'violet electric', 'pantaloni negri cu snur lung', 'culoare statement intr-un singur accent', 'concert si festival'],
  ['cum-asortezi-aqua-cu-pantaloni-maro-deschis-2026', 'Cum asortezi aqua cu pantaloni maro deschis in 2026', 'aqua', 'pantaloni maro deschis', 'rece luminos cu pamantiu deschis', 'look de vara'],
  ['cum-asortezi-denim-blue-cu-pantaloni-crem-cu-siret-2026', 'Cum asortezi denim blue cu pantaloni crem cu siret in 2026', 'denim blue', 'pantaloni crem cu siret', 'albastru purtabil langa baza calda', 'casual repetabil'],
  ['cum-asortezi-indigo-cu-pantaloni-gri-deschis-2026', 'Cum asortezi indigo cu pantaloni gri deschis in 2026', 'indigo', 'pantaloni gri deschis', 'albastru profund fara negru total', 'tinuta de tranzitie'],
  ['cum-asortezi-argintiu-cu-pantaloni-negri-largi-2026', 'Cum asortezi argintiu cu pantaloni negri largi in 2026', 'argintiu', 'pantaloni negri largi', 'accent metalic mic pe accesorii', 'seara urbana'],
  ['cum-asortezi-gri-metalizat-cu-pantaloni-albi-2026', 'Cum asortezi gri metalizat cu pantaloni albi in 2026', 'gri metalizat', 'pantaloni albi', 'luciu discret si alb curat', 'look modern'],
  ['cum-asortezi-verde-lime-cu-pantaloni-scurti-negri-2026', 'Cum asortezi verde lime cu pantaloni scurti negri in 2026', 'verde lime', 'pantaloni scurti negri', 'accent acid pe vara neagra', 'festival'],
  ['cum-asortezi-rosu-cireasa-cu-pantaloni-crem-2026', 'Cum asortezi rosu cireasa cu pantaloni crem in 2026', 'rosu cireasa', 'pantaloni crem', 'rosu curat cu baza deschisa', 'tinuta foto'],
  ['cum-asortezi-galben-mustar-cu-pantaloni-bleumarin-2026', 'Cum asortezi galben mustar cu pantaloni bleumarin in 2026', 'galben mustar', 'pantaloni bleumarin', 'clasic cald-rece fara logo mare', 'smart casual'],
  ['cum-asortezi-roz-somon-cu-pantaloni-maro-2026', 'Cum asortezi roz somon cu pantaloni maro in 2026', 'roz somon', 'pantaloni maro', 'pastel cald peste maro urban', 'tinuta relaxata'],
  ['cum-asortezi-alb-murdar-cu-pantaloni-negri-raiati-2026', 'Cum asortezi alb murdar cu pantaloni negri raiati in 2026', 'alb murdar', 'pantaloni negri raiati', 'textura plus contrast moale', 'vintage urban'],
  ['cum-asortezi-caramel-cu-pantaloni-gri-inchis-2026', 'Cum asortezi caramel cu pantaloni gri inchis in 2026', 'caramel', 'pantaloni gri inchis', 'cald premium cu gri serios', 'casual matur'],
  ['cum-asortezi-cappuccino-cu-pantaloni-negri-cu-snur-2026', 'Cum asortezi cappuccino cu pantaloni negri cu snur in 2026', 'cappuccino', 'pantaloni negri cu snur', 'neutru cald pe baza neagra', 'minimal urban'],
  ['cum-asortezi-vanilie-cu-pantaloni-maro-baggy-2026', 'Cum asortezi vanilie cu pantaloni maro baggy in 2026', 'vanilie', 'pantaloni maro baggy', 'galben foarte soft cu maro', 'tinuta calda'],
  ['cum-asortezi-alb-cald-cu-pantaloni-scurti-negri-si-sosete-inalte-2026', 'Cum asortezi alb cald cu pantaloni scurti negri si sosete inalte in 2026', 'alb cald', 'pantaloni scurti negri si sosete inalte', 'contrast sport cu top luminos', 'vara urbana'],
  ['cum-asortezi-verde-petrol-cu-pantaloni-bej-cu-siret-lung-2026', 'Cum asortezi verde petrol cu pantaloni bej cu siret lung in 2026', 'verde petrol', 'pantaloni bej cu siret lung', 'verde inchis cu baza calda', 'look echilibrat'],
];

function pickImages(index: number) {
  const rotated = [baseImages[index % baseImages.length], baseImages[(index + 1) % baseImages.length], baseImages[(index + 2) % baseImages.length]];
  return rotated.map((item, imageIndex) => ({
    ...item,
    alt: `${item.alt} - exemplu ${imageIndex + 1}`,
  }));
}

function buildSections(color: string, base: string, angle: string, context: string) {
  return [
    ['Intentie SEO fara canibalizare', `Acest articol tinteste cautarea lunga "${color} cu ${base}" si raspunde la o combinatie precisa de culoare, piesa si context. Nu concureaza cu ghidul general de culori pentru pantaloni, pentru ca aici decizia este practica: cum porti exact ${color} langa ${base}.`],
    ['Raspuns rapid', `Pentru ${color} cu ${base}, pastreaza o piesa principala, o baza neutra si maximum un accent secundar. Directia buna este ${angle}; directia riscanta este sa adaugi inca doua culori puternice doar pentru ca sunt in trend.`],
    ['De ce functioneaza in 2026', `${colorTrendSources} In aceasta combinatie, ${color} nu trebuie sa acopere toata tinuta; este suficient sa intre in tricou, hanorac, camasa, sapca, geanta sau sneakers.`],
    ['Formula de tinuta', `Porneste de la ${base}, adauga ${color} in partea de sus sau intr-un accesoriu vizibil, apoi leaga totul cu alb cald, negru, gri, crem sau maro. Pentru ${context}, snurul lung trebuie sa ramana vizibil si talia sa nu fie acoperita complet.`],
    ['Greseli de evitat', `Nu combina ${color} cu imprimeuri mari, logo-uri agresive si trei texturi lucioase in aceeasi tinuta. Daca ${base} are deja volum, partea de sus trebuie sa fie mai clara; daca topul este puternic colorat, incaltamintea ramane curata.`],
    ['Checklist pentru poze si indexare', `Fotografia principala trebuie sa arate tinuta completa, iar imaginile secundare trebuie sa surprinda talia, snurul si contrastul dintre ${color} si ${base}. Alt textul natural poate mentiona culoarea, croiala si contextul, fara sa repete mecanic aceeasi expresie.`],
    ['Intrebari frecvente', `Se poarta ${color} in 2026? Da, daca ramane bine dozat. Merge ${color} cu ${base}? Da, mai ales cand restul tinutei ramane neutru. Ce alegi prima data? Alege pantalonul dupa fit si material, apoi ajusteaza culoarea in jurul lui.`],
  ];
}

export const colorTrendBlogPosts2026 = colorGuides.map(([slug, title, color, base, angle, context], index) => ({
  slug: `blog/${slug}`,
  title,
  description: `${title}. Ghid SEO cu intentie long tail: ${color} langa ${base}, proportii, greseli, poze si recomandari pentru indexare rapida.`,
  h1: title,
  intro: `${title.replace(' in 2026', '')}: raspunsul scurt este sa folosesti ${color} ca accent controlat si ${base} ca ancora de proportie. Asa obtii ${angle}, fara sa incarci tinuta.`,
  date: '2026-05-20',
  image: pickImages(index)[0].file,
  images: pickImages(index),
  seoEngine: {
    keyword_principal: `${color} cu ${base}`,
    cluster: 'culori-moda-2026-long-tail',
    intent: 'how-to-color-styling',
    funnel_stage: 'informational',
    reason_safe: `micro-intentie culoare + piesa + context: ${color} cu ${base}`,
    recommended_angle: angle,
    priority: index + 1,
  },
  sections: buildSections(color, base, angle, context),
}));
