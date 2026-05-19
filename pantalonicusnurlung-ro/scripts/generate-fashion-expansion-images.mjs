import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fashionExpansionBlogPosts2026 } from '../src/data/fashionExpansionBlogPosts2026.ts';

const outDir = path.join(process.cwd(), 'public', 'images', 'fashion-expansion-2026');

const palettes = [
  ['#fbf4eb', '#201b18', '#b84f36', '#e9c7a9', '#f6df7b'],
  ['#edf5fb', '#17263d', '#356ea8', '#b8d8ef', '#f0c7d4'],
  ['#f8f0e7', '#3b2a22', '#8a5a44', '#d6a973', '#f7efe1'],
  ['#f1f7ef', '#263829', '#607d55', '#bfd2a4', '#f4d2bd'],
  ['#fbf0f5', '#361d2a', '#9c315f', '#f1a8c7', '#f7d560'],
  ['#f3f2ee', '#1f2933', '#73808c', '#c8ced3', '#cf9b42'],
  ['#edf7f6', '#153f45', '#008080', '#9bd5cf', '#f1c6ad'],
  ['#fff6ea', '#35251e', '#c06f38', '#efc68c', '#8fb4d9'],
  ['#f6f4ef', '#111827', '#4b5563', '#d1d5db', '#b08968'],
  ['#fff8df', '#2c241e', '#d49a2a', '#f2c14e', '#c84f31'],
];

const sceneMeta = [
  ['nunta-terasa', 'terasa cu lumini calde', 'M420 460 H950 V1080 H420Z', 'M445 512 C560 470 760 470 920 520'],
  ['birou-vara', 'birou luminos de vara', 'M370 420 H980 V1100 H370Z', 'M450 505 H920 M450 665 H920'],
  ['city-break', 'strada europeana in city break', 'M280 480 L490 360 L700 480 V1110 H280Z M705 480 L930 350 L1120 480 V1110 H705Z', 'M520 575 H585 M760 575 H825 M975 595 H1040'],
  ['festival-vara', 'festival de vara cu scena', 'M260 470 H1080 V1110 H260Z', 'M390 545 L480 430 L570 545 M760 545 L850 430 L940 545'],
  ['botez-cununie', 'salon elegant de zi', 'M340 430 H1000 V1110 H340Z', 'M420 520 C580 435 800 435 940 520'],
  ['date-terasa', 'masa de terasa seara', 'M380 520 H980 V1110 H380Z', 'M470 610 C620 560 800 560 930 610'],
  ['vacanta-mare', 'plaja si mare', 'M240 760 C420 690 600 810 780 735 S1030 700 1120 760 V1110 H240Z', 'M320 620 C500 560 700 560 930 620'],
  ['concert-aer-liber', 'concert in aer liber', 'M220 420 H1110 V1110 H220Z', 'M370 555 L500 430 L630 555 M750 555 L880 430 L1010 555'],
  ['zi-nastere-vara', 'petrecere de vara', 'M350 445 H1000 V1110 H350Z', 'M430 530 C560 480 770 480 925 530'],
  ['poze-instagram', 'studio foto editorial', 'M320 400 H1030 V1110 H320Z', 'M430 510 H920 M500 600 H850'],
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
}

function slugFromPost(post) {
  return post.slug.replace('blog/', '');
}

function getPieceType(slug) {
  if (slug.includes('rochii-in-vaporoase')) return 'linen-dress';
  if (slug.includes('rochii-midi-office')) return 'office-dress';
  if (slug.includes('rochii-nunta-invitate')) return 'wedding-dress';
  if (slug.includes('sandale-peep-toe')) return 'peep-sandals';
  if (slug.includes('sandale-barete-late')) return 'strap-sandals';
  if (slug.includes('sandale-thong-toc-mic')) return 'thong-sandals';
  if (slug.includes('fuste-plisate-midi')) return 'pleated-skirt';
  if (slug.includes('camasi-lejere-vara')) return 'summer-shirt';
  if (slug.includes('genti-mici-zi')) return 'small-bag';
  if (slug.includes('ochelari-soare-forma-fetei')) return 'sunglasses';
  return 'fashion';
}

function contextKey(slug) {
  return sceneMeta.find(([key]) => slug.includes(key))?.[0] || 'poze-instagram';
}

function scene(slug, colors, index) {
  const [, label, shape, detail] = sceneMeta.find(([key]) => slug.includes(key)) || sceneMeta.at(-1);
  const [bg, ink, accent, soft, gold] = colors;
  const dots = Array.from({ length: 18 }, (_, i) => {
    const x = 120 + ((i * 137 + index * 29) % 960);
    const y = 165 + ((i * 83 + index * 41) % 1060);
    const r = 5 + ((i + index) % 6);
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${i % 3 === 0 ? accent : gold}" opacity=".18"/>`;
  }).join('');

  return `
    <rect width="1200" height="1600" fill="${bg}"/>
    <rect x="52" y="52" width="1096" height="1496" rx="54" fill="#ffffff" opacity=".34"/>
    <path d="${shape}" fill="${soft}" opacity=".52"/>
    <path d="${detail}" fill="none" stroke="${accent}" stroke-width="16" stroke-linecap="round" opacity=".48"/>
    <path d="M90 1225 C270 1150 370 1275 520 1220 C710 1148 825 1325 1110 1210" fill="none" stroke="${ink}" stroke-width="10" opacity=".14"/>
    <path d="M80 1265 C320 1185 510 1370 720 1270 S980 1200 1120 1320" fill="none" stroke="${accent}" stroke-width="13" opacity=".22"/>
    ${dots}
    <text x="90" y="142" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="${ink}" opacity=".62" letter-spacing="3">${esc(label.toUpperCase())}</text>
  `;
}

function modelBase(colors, index) {
  const [bg, ink, accent, soft, gold] = colors;
  const skin = ['#c78f68', '#d8a27a', '#b87555', '#e0b08a'][index % 4];
  const hair = ['#2c1d18', '#5a3428', '#171717', '#7b553e'][index % 4];
  return `
    <ellipse cx="610" cy="1330" rx="318" ry="42" fill="${ink}" opacity=".13"/>
    <path d="M532 306 C532 235 570 198 600 198 C635 198 670 236 670 306 C670 374 635 418 600 418 C565 418 532 374 532 306Z" fill="${skin}" stroke="${ink}" stroke-width="8"/>
    <path d="M518 306 C520 196 684 178 700 316 C655 270 586 256 518 306Z" fill="${hair}"/>
    <path d="M538 292 C565 250 635 250 670 292" fill="none" stroke="${hair}" stroke-width="18" stroke-linecap="round"/>
    <path d="M565 332 C590 342 620 342 646 332" fill="none" stroke="${ink}" stroke-width="4" opacity=".18"/>
    <path d="M575 382 C585 418 615 418 625 382" fill="none" stroke="${skin}" stroke-width="20" stroke-linecap="round"/>
    <path d="M505 1322 L555 780 M695 780 L745 1322" stroke="${ink}" stroke-width="24" stroke-linecap="round" opacity=".42"/>
    <path d="M485 1325 H575 M720 1325 H805" stroke="${ink}" stroke-width="22" stroke-linecap="round"/>
  `;
}

function dress(type, colors, index) {
  const [bg, ink, accent, soft, gold] = colors;
  const satin = type === 'wedding-dress';
  const office = type === 'office-dress';
  const fill = satin ? `url(#satin${index})` : office ? ink : soft;
  const stroke = office ? accent : ink;
  const hem = type === 'linen-dress' ? 'M410 1150 C500 1230 715 1230 800 1150' : 'M455 1130 C535 1170 685 1170 760 1130';
  return `
    ${modelBase(colors, index)}
    <path d="M468 430 C520 380 680 380 732 430 L798 1128 C675 1192 515 1192 402 1128Z" fill="${fill}" stroke="${stroke}" stroke-width="12"/>
    <path d="M505 430 C530 520 672 520 695 430" fill="none" stroke="${office ? soft : accent}" stroke-width="12"/>
    <path d="M470 520 C585 585 680 565 730 515" fill="none" stroke="${gold}" stroke-width="10" opacity=".75"/>
    <path d="${hem}" fill="none" stroke="${accent}" stroke-width="12" opacity=".7"/>
    ${Array.from({ length: 8 }, (_, i) => `<path d="M${445 + i * 42} 540 L${405 + i * 56} 1110" stroke="${office ? '#ffffff' : ink}" stroke-width="5" opacity=".18"/>`).join('')}
    <path d="M468 472 C390 545 350 650 337 775" fill="none" stroke="${stroke}" stroke-width="20" stroke-linecap="round"/>
    <path d="M732 472 C810 545 850 650 863 775" fill="none" stroke="${stroke}" stroke-width="20" stroke-linecap="round"/>
  `;
}

function sandals(type, colors, index) {
  const [bg, ink, accent, soft, gold] = colors;
  const heel = type === 'thong-sandals' || type === 'peep-sandals';
  const wide = type === 'strap-sandals';
  return `
    <g transform="translate(0 40)">
      <ellipse cx="430" cy="875" rx="165" ry="392" fill="${soft}" stroke="${ink}" stroke-width="13" transform="rotate(9 430 875)"/>
      <ellipse cx="760" cy="875" rx="165" ry="392" fill="#fffaf3" stroke="${ink}" stroke-width="13" transform="rotate(-9 760 875)"/>
      <path d="M320 690 C405 755 488 865 548 1070" fill="none" stroke="${accent}" stroke-width="${wide ? 56 : 28}" stroke-linecap="round"/>
      <path d="M872 690 C785 755 702 865 642 1070" fill="none" stroke="${accent}" stroke-width="${wide ? 56 : 28}" stroke-linecap="round"/>
      <path d="M355 588 L525 760 M835 588 L665 760" stroke="${ink}" stroke-width="${wide ? 30 : 18}" stroke-linecap="round"/>
      <path d="M392 950 C455 1010 515 1010 568 950 M812 950 C745 1010 685 1010 632 950" fill="none" stroke="${gold}" stroke-width="16" opacity=".75"/>
      ${heel ? `<path d="M535 1195 L570 1350 M650 1195 L615 1350" stroke="${ink}" stroke-width="20" stroke-linecap="round"/>` : ''}
      <circle cx="430" cy="665" r="18" fill="${gold}"/><circle cx="760" cy="665" r="18" fill="${gold}"/>
    </g>
  `;
}

function skirt(colors, index) {
  const [bg, ink, accent, soft, gold] = colors;
  return `
    ${modelBase(colors, index)}
    <path d="M470 430 H730 L770 685 C690 745 510 745 430 685Z" fill="${accent}" stroke="${ink}" stroke-width="12"/>
    <rect x="420" y="682" width="360" height="86" rx="43" fill="${ink}"/>
    <path d="M450 760 L320 1205 C500 1295 710 1295 880 1205 L750 760Z" fill="${soft}" stroke="${ink}" stroke-width="12"/>
    ${Array.from({ length: 9 }, (_, i) => `<path d="M${455 + i * 36} 790 L${350 + i * 64} 1185" stroke="${accent}" stroke-width="7" opacity=".7"/>`).join('')}
    <path d="M465 475 C390 545 360 650 345 770 M735 475 C810 545 840 650 855 770" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
  `;
}

function shirt(colors, index) {
  const [bg, ink, accent, soft, gold] = colors;
  return `
    ${modelBase(colors, index)}
    <path d="M405 440 L535 380 L600 460 L665 380 L795 440 L905 730 L790 790 L750 1170 L450 1170 L410 790 L295 730Z" fill="${soft}" stroke="${ink}" stroke-width="12"/>
    <path d="M535 382 L600 610 L665 382" fill="none" stroke="${ink}" stroke-width="10"/>
    <path d="M600 610 L600 1145" stroke="${accent}" stroke-width="10"/>
    ${Array.from({ length: 5 }, (_, i) => `<circle cx="628" cy="${690 + i * 82}" r="12" fill="${ink}"/>`).join('')}
    <path d="M445 520 C400 630 390 705 408 785 M755 520 C800 630 810 705 792 785" fill="none" stroke="${gold}" stroke-width="9" opacity=".65"/>
  `;
}

function bag(colors, index) {
  const [bg, ink, accent, soft, gold] = colors;
  return `
    <g transform="translate(0 30)">
      <ellipse cx="610" cy="1280" rx="310" ry="45" fill="${ink}" opacity=".12"/>
      <rect x="330" y="560" width="540" height="520" rx="82" fill="${soft}" stroke="${ink}" stroke-width="14"/>
      <path d="M445 560 C465 330 735 330 755 560" fill="none" stroke="${ink}" stroke-width="28" stroke-linecap="round"/>
      <rect x="395" y="690" width="410" height="96" rx="48" fill="${accent}" opacity=".82"/>
      <path d="M330 820 C470 910 720 910 870 820" fill="none" stroke="${gold}" stroke-width="18" opacity=".72"/>
      <circle cx="600" cy="900" r="45" fill="#fffaf3" stroke="${ink}" stroke-width="10"/>
      <path d="M515 1040 L685 1040" stroke="${ink}" stroke-width="15" stroke-linecap="round" opacity=".45"/>
      <circle cx="455" cy="642" r="12" fill="${gold}"/><circle cx="745" cy="642" r="12" fill="${gold}"/>
    </g>
  `;
}

function glasses(colors, index) {
  const [bg, ink, accent, soft, gold] = colors;
  const face = ['rounda', 'patrata', 'ovala', 'inima'][index % 4];
  return `
    <g transform="translate(0 20)">
      <circle cx="600" cy="650" r="250" fill="${soft}" stroke="${ink}" stroke-width="14"/>
      <path d="M420 665 C500 565 700 565 780 665" fill="none" stroke="${ink}" stroke-width="18" stroke-linecap="round"/>
      <ellipse cx="475" cy="680" rx="132" ry="92" fill="#1f2933" opacity=".86" stroke="${accent}" stroke-width="16"/>
      <ellipse cx="725" cy="680" rx="132" ry="92" fill="#1f2933" opacity=".86" stroke="${accent}" stroke-width="16"/>
      <path d="M607 680 H593" stroke="${gold}" stroke-width="18" stroke-linecap="round"/>
      <path d="M360 642 L255 570 M840 642 L945 570" stroke="${ink}" stroke-width="18" stroke-linecap="round"/>
      <path d="M470 825 C550 895 655 895 735 825" fill="none" stroke="${ink}" stroke-width="12" stroke-linecap="round"/>
      <text x="410" y="1115" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="700" fill="${ink}">fata ${face}</text>
      <rect x="410" y="1155" width="350" height="13" rx="7" fill="${accent}"/>
    </g>
  `;
}

function pieceArt(type, colors, index) {
  if (type.includes('dress')) return dress(type, colors, index);
  if (type.includes('sandals')) return sandals(type, colors, index);
  if (type === 'pleated-skirt') return skirt(colors, index);
  if (type === 'summer-shirt') return shirt(colors, index);
  if (type === 'small-bag') return bag(colors, index);
  if (type === 'sunglasses') return glasses(colors, index);
  return dress('linen-dress', colors, index);
}

function defs(colors, index) {
  const [, ink, accent, soft, gold] = colors;
  return `
    <defs>
      <linearGradient id="satin${index}" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#fff7e8"/>
        <stop offset=".35" stop-color="${soft}"/>
        <stop offset=".65" stop-color="${gold}"/>
        <stop offset="1" stop-color="#f7e4d4"/>
      </linearGradient>
      <filter id="softShadow${index}" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="${ink}" flood-opacity=".18"/>
      </filter>
    </defs>
  `;
}

function svgFor(post, index) {
  const slug = slugFromPost(post);
  const colors = palettes[index % palettes.length];
  const [, ink, accent] = colors;
  const type = getPieceType(slug);
  const title = post.h1.replace(' in 2026', '');
  const shortTitle = title.length > 52 ? `${title.slice(0, 49)}...` : title;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600" role="img" aria-labelledby="title desc">
  <title id="title">${esc(title)}</title>
  <desc id="desc">Imagine editoriala detaliata pentru ${esc(post.h1)}</desc>
  ${defs(colors, index)}
  ${scene(slug, colors, index)}
  <g filter="url(#softShadow${index})">${pieceArt(type, colors, index)}</g>
  <rect x="86" y="1358" width="1028" height="148" rx="34" fill="#ffffff" opacity=".82"/>
  <text x="122" y="1418" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="${ink}">TENDINTE 2026</text>
  <text x="122" y="1470" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="800" fill="${ink}">${esc(shortTitle)}</text>
  <rect x="122" y="1492" width="${260 + (index % 8) * 54}" height="10" rx="5" fill="${accent}"/>
</svg>`;
}

await mkdir(outDir, { recursive: true });

await Promise.all(
  fashionExpansionBlogPosts2026.map(async (post, index) => {
    const slug = slugFromPost(post);
    const svg = svgFor(post, index);
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9, quality: 92 }).toFile(path.join(outDir, `${slug}.png`));
  }),
);

console.log(`Generated ${fashionExpansionBlogPosts2026.length} detailed PNG images in ${outDir}`);
