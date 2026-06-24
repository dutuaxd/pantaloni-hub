import fs from 'node:fs';
import path from 'node:path';

const inputPath = 'C:/Users/dutua/.codex/attachments/e0723ba8-d6c6-4cc6-95b2-8db167162bef/pasted-text.txt';
const outputRoot = path.resolve('atelieraxd-ro/src/content/blog');
const siteUrl = 'https://atelieraxd.ro';

const raw = fs.readFileSync(inputPath, 'utf8');

const normalizeRomanian = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ăâ]/gi, 'a')
    .replace(/[î]/gi, 'i')
    .replace(/[șş]/gi, 's')
    .replace(/[țţ]/gi, 't');

const cleanPhrase = (value) =>
  normalizeRomanian(value)
    .replace(/varAƒ/gi, 'vara')
    .replace(/Äƒ/gi, 'a')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const titleCase = (value) =>
  value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const slugify = (value) =>
  cleanPhrase(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

const json = (value) => JSON.stringify(value);

const categoryFor = (phrase) => {
  const first = phrase.split(' ')[0];
  const map = {
    tricou: 'tricouri',
    hanorac: 'hanorace',
    pantaloni: 'pantaloni',
    blugi: 'blugi',
    geaca: 'geci',
    fusta: 'fuste',
    rochie: 'rochii',
    camasa: 'camasi',
    maiou: 'maiouri',
    pulover: 'pulovere',
    sacou: 'sacouri',
    vesta: 'veste',
    trening: 'treninguri',
    colanti: 'colanti',
    jacheta: 'jachete',
    cardigan: 'cardigane',
    bluza: 'bluze',
    top: 'topuri',
    bermude: 'bermude',
    salopeta: 'salopete',
    trenci: 'trenciuri',
    palton: 'paltoane',
    costum: 'costume',
  };
  return map[first] ?? 'haine';
};

const materialHints = ['bumbac', 'lana', 'matase', 'in', 'denim', 'satin', 'fas', 'poliester', 'elastan', 'vascoza', 'catifea', 'stofa', 'puf', 'casmir', 'mohair', 'fleece', 'piele', 'dantela', 'voal', 'poplin', 'oxford', 'flanel', 'tricotat', 'raiati', 'tercot'];
const colorHints = ['alb', 'alba', 'negru', 'neagra', 'gri', 'khaki', 'maro', 'rosie', 'verde', 'albastra', 'galben', 'crem', 'bej', 'roz', 'lila', 'visiniu', 'bleumarin', 'fuchsia', 'oliv', 'camel', 'argintie', 'aurie', 'olive'];
const cutHints = ['oversized', 'slim', 'cargo', 'clos', 'elegant', 'sport', 'casual', 'cambrat', 'evazati', 'skinny', 'regular', 'relaxed', 'drepti', 'conici', 'crop', 'lung', 'scurta', 'midi', 'maxi', 'mini', 'office', 'wide', 'fit'];

const detect = (phrase, hints) => hints.filter((hint) => phrase.split(' ').includes(hint));

const paragraphsFor = (phrase) => {
  const title = titleCase(phrase);
  const first = phrase.split(' ')[0];
  const category = categoryFor(phrase);
  const materials = detect(phrase, materialHints);
  const colors = detect(phrase, colorHints);
  const cuts = detect(phrase, cutHints);
  const materialText = materials.length ? materials.join(', ') : 'materialul mentionat in descriere';
  const colorText = colors.length ? colors.join(', ') : 'culoarea aleasa';
  const cutText = cuts.length ? cuts.join(', ') : 'croiala';

  return `# ${title}: definitie, materiale, purtare si ingrijire

Actualizat: Iunie 2026

${title} este o cautare foarte specifica, iar intentia ei este de obicei practica: vrei sa intelegi ce fel de piesa alegi, cum se poarta, cum se intretine si daca se potriveste cu restul garderobei. Pagina aceasta foloseste o structura de tip definitie, inspirata de articolele enciclopedice scurte despre imbracaminte, dar merge mai departe cu recomandari utile pentru cumparare si styling.

<div style="text-align:center; margin: 30px 0;">
  <a href="/tricouri"
     style="display:inline-block; padding: 16px 40px;
            border: 2px solid #000; border-radius: 50px;
            font-weight: bold; font-size: 16px;
            color: #000; text-decoration: none;
            letter-spacing: 0.5px; font-family: sans-serif;">
    Vezi tricouri barbati
  </a>
</div>

## Ce inseamna ${phrase}

In garderoba moderna, ${phrase} descrie o piesa vestimentara definita prin tip, material, culoare sau croiala. Termenul principal este "${first}", iar detaliile din expresie arata directia cautarii: ${materialText}, ${colorText} si ${cutText}. Aceste indicii sunt importante pentru ca doua produse cu acelasi nume pot arata complet diferit in functie de compozitie, grosime si felul in care cade materialul pe corp.

O alegere buna nu se face doar dupa poza. Verifica intai compozitia, apoi croiala si abia dupa aceea detaliile vizuale. Daca piesa este destinata purtarii zilnice, confortul si intretinerea conteaza la fel de mult ca aspectul.

## Materiale si senzatie la purtare

Pentru ${phrase}, materialul influenteaza respirabilitatea, greutatea, textura si felul in care piesa isi pastreaza forma dupa spalari. Fibrele naturale sunt apreciate pentru confort, in timp ce amestecurile cu fibre tehnice pot adauga elasticitate, rezistenta sau uscare mai rapida. Cand citesti eticheta, urmareste procentul materialului dominant si instructiunile de ingrijire.

Daca vrei o piesa pentru vara, cauta materiale mai usoare si croieli care lasa aerul sa circule. Pentru sezon rece, conteaza densitatea, stratificarea si modul in care piesa se asaza sub geaca, palton sau hanorac.

## Cum alegi marimea si croiala

Marimea corecta pentru ${phrase} trebuie sa permita miscare fara sa creeze cute tensionate. La partea de sus, verifica linia umerilor, lungimea manecilor si felul in care cade tivul. La partea de jos, verifica talia, lungimea, buzunarele si cat de mult se strange materialul cand stai jos.

Croiala trebuie aleasa dupa context. O piesa slim poate arata mai ordonat, dar cere masura exacta. O piesa oversized sau relaxed ofera libertate si merge bine in tinute casual, insa are nevoie de proportii echilibrate. O piesa eleganta sau office trebuie sa aiba linii curate si material care nu se sifoneaza excesiv.

## Idei de asortare pentru ${phrase}

Cel mai simplu mod de styling este sa construiesti tinuta in jurul unei culori neutre. Alb, negru, gri, bleumarin, bej si kaki sunt usor de combinat si lasa textura piesei sa conteze. Daca ${phrase} are deja o culoare puternica sau un detaliu vizibil, restul tinutei poate ramane mai calm.

Pentru o tinuta casual, combina piesa cu sneakers curati, tricou basic, hanorac simplu sau pantaloni cu linie relaxata. Pentru o tinuta mai asezata, foloseste straturi curate: camasa, sacou lejer, pulover subtire sau pantaloni din stofa. Important este ca piesele sa para din aceeasi poveste vizuala.

## Tabel rapid de decizie

| Criteriu | Ce verifici | De ce conteaza |
| --- | --- | --- |
| Material | compozitie, grosime, textura | influenteaza confortul si sezonul potrivit |
| Croiala | slim, regular, relaxed, oversized | schimba proportiile si libertatea de miscare |
| Culoare | neutra sau accent | decide cat de usor se asorteaza |
| Intretinere | spalare, uscare, calcare | pastreaza forma si culoarea mai mult timp |
| Context | zi, birou, iesire, vacanta | evita cumparaturile greu de purtat |

## Ingrijire si durata de viata

Spala ${phrase} pe dos, separat pe culori apropiate si la temperatura moderata. Evita uscarea agresiva cand materialul contine bumbac, lana, elastan sau fibre sensibile. Pentru piese inchise la culoare, detergentul bland si uscarea ferita de soare direct ajuta la pastrarea nuantei. Pentru piese deschise, separarea la spalare previne transferul de culoare.

Calca doar daca materialul permite si testeaza intai pe dos. Unele textile arata mai bine lasate sa se usuce pe umeras, fara calcare intensa. Daca piesa are fermoare, nasturi, snururi, broderie sau paiete, protejeaza detaliile la spalare.

## Greseli frecvente

- Alegi ${phrase} doar dupa imagine, fara sa verifici compozitia.
- Cumperi o marime prea mica sperand ca materialul se va lasa.
- Ignori lungimea si proportiile fata de incaltaminte.
- Combini prea multe texturi puternice in aceeasi tinuta.
- Speli piesa la temperatura mare si pierzi forma sau culoarea.

## Intrebari frecvente

### Este ${phrase} potrivit pentru purtare zilnica?

Da, daca materialul este confortabil, croiala nu limiteaza miscarea si culoarea se potriveste cu restul garderobei. Pentru purtare zilnica, cauta detalii simple si intretinere usoara.

### Cum stiu daca ${phrase} este de calitate?

Uita-te la cusaturi, tivuri, densitatea materialului, felul in care revine elasticul si modul in care piesa isi pastreaza forma cand este intinsa usor. Calitatea se vede mai ales in detalii.

### Cu ce se asorteaza cel mai usor?

Cu piese neutre: tricouri simple, pantaloni negri sau bej, denim curat, hanorace fara imprimeu puternic si incaltaminte minimalista. Daca piesa este colorata, restul tinutei poate ramane discret.

## Recapitulare

${title} merita ales printr-o combinatie de informatie si gust personal: material bun, croiala potrivita, culoare usor de integrat si ingrijire simpla. Cand toate aceste lucruri sunt clare, piesa devine mai usor de purtat si mai valoroasa in garderoba.`;
};

const phrases = [
  ...new Set(
    raw
      .split(',')
      .map(cleanPhrase)
      .filter((phrase) => phrase.length > 2)
  ),
];

let created = 0;
let skipped = 0;

for (const phrase of phrases) {
  const slug = slugify(phrase);
  const dir = path.join(outputRoot, slug);
  const file = path.join(dir, 'index.md');
  if (fs.existsSync(file)) {
    skipped += 1;
    continue;
  }

  const title = `${titleCase(phrase)}: ghid complet`;
  const metaTitle = `${titleCase(phrase)}: ghid SEO, materiale si tinute`;
  const metaDescription = `Afla ce inseamna ${phrase}, cum alegi materialul si croiala, cum il asortezi si cum il intretii corect. Ghid practic Atelier AXD.`;
  const category = categoryFor(phrase);
  const tags = [phrase, category, 'haine', 'moda casual', 'atelieraxd'];
  const body = paragraphsFor(phrase);
  const frontmatter = `---\n` +
    `title: ${json(title)}\n` +
    `metaTitle: ${json(metaTitle)}\n` +
    `metaDescription: ${json(metaDescription)}\n` +
    `draft: false\n` +
    `slug: ${json(slug)}\n` +
    `canonicalUrl: ${json(`${siteUrl}/blog/${slug}/`)}\n` +
    `category: ${json(category)}\n` +
    `tags: ${json(tags)}\n` +
    `primaryKeyword: ${json(phrase)}\n` +
    `secondaryKeywords: ${json([`${phrase} ghid`, `${phrase} materiale`, `${phrase} tinute`, `${phrase} ingrijire`, `${phrase} marimi`])}\n` +
    `readingTime: "7 min"\n` +
    `internalLinks:\n` +
    `  - url: "/tricouri"\n` +
    `    anchorText: "tricouri barbati"\n` +
    `  - url: "/pantaloni-lungi"\n` +
    `    anchorText: "pantaloni barbati"\n` +
    `  - url: "/pantaloni-scurti"\n` +
    `    anchorText: "pantaloni scurti barbati"\n` +
    `images:\n` +
    `  hero:\n` +
    `    src: "/og-pantaloni-cu-snur-lung.jpg"\n` +
    `    alt: ${json(`${phrase} - ghid vestimentar`)}\n` +
    `    title: ${json(title)}\n` +
    `---\n`;

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, `${frontmatter}${body}\n`, 'utf8');
  created += 1;
}

console.log(JSON.stringify({ totalUnique: phrases.length, created, skipped }, null, 2));
