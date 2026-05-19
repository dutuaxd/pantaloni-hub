import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fashionExpansionBlogPosts2026 } from '../src/data/fashionExpansionBlogPosts2026.ts';

const outDir = path.join(process.cwd(), 'public', 'images', 'fashion-expansion-2026');

const palettes = [
  ['#f8f3ea', '#171717', '#c8563b', '#e7d3bd'],
  ['#eef3f8', '#1d3557', '#79a7d3', '#f2d0c4'],
  ['#f5efe5', '#6f4e37', '#d7b98e', '#222222'],
  ['#f1f7ee', '#4f6f52', '#c9d7a2', '#f7d6bf'],
  ['#f7f1f4', '#8e315b', '#f2a7c3', '#2b2b2b'],
  ['#f4f2ed', '#34495e', '#d8a24a', '#ffffff'],
  ['#eef5f3', '#007d7e', '#a9d6d3', '#2d2d2d'],
  ['#f9f5ee', '#b08968', '#7f5539', '#ffffff'],
  ['#f2f2f2', '#4b5563', '#c0c7ce', '#111827'],
  ['#fff7e8', '#cc7722', '#f4c067', '#2c2c2c'],
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
}

function getPieceType(slug) {
  if (slug.includes('rochii')) return 'dress';
  if (slug.includes('sandale')) return 'sandals';
  if (slug.includes('fuste')) return 'skirt';
  if (slug.includes('camasi')) return 'shirt';
  if (slug.includes('genti')) return 'bag';
  if (slug.includes('ochelari')) return 'glasses';
  return 'outfit';
}

function motif(type, colors, index) {
  const [bg, ink, accent, soft] = colors;
  const patternShift = (index % 5) * 18;
  const common = `
    <circle cx="${220 + patternShift}" cy="260" r="68" fill="${soft}" opacity=".55"/>
    <rect x="${820 - patternShift}" y="190" width="180" height="260" rx="90" fill="${accent}" opacity=".20"/>
    <path d="M130 1350 C360 1240 520 1510 780 1340 S1030 1280 1120 1390" fill="none" stroke="${accent}" stroke-width="14" opacity=".35"/>
  `;

  if (type === 'dress') {
    return `${common}
      <path d="M600 310 C520 410 492 540 505 720 L405 1190 C520 1268 690 1268 795 1190 L692 720 C708 548 680 410 600 310Z" fill="${soft}" stroke="${ink}" stroke-width="12"/>
      <path d="M548 318 C560 430 640 430 652 318" fill="none" stroke="${ink}" stroke-width="10"/>
      <path d="M504 725 C570 768 646 768 696 725" fill="none" stroke="${accent}" stroke-width="12"/>
      <path d="M440 1050 C535 1105 680 1105 760 1050" fill="none" stroke="${ink}" stroke-width="8" opacity=".35"/>
    `;
  }

  if (type === 'sandals') {
    return `${common}
      <ellipse cx="435" cy="830" rx="158" ry="388" fill="${soft}" stroke="${ink}" stroke-width="12" transform="rotate(10 435 830)"/>
      <ellipse cx="745" cy="830" rx="158" ry="388" fill="#ffffff" stroke="${ink}" stroke-width="12" transform="rotate(-10 745 830)"/>
      <path d="M328 680 C420 760 485 865 538 1030" fill="none" stroke="${accent}" stroke-width="34" stroke-linecap="round"/>
      <path d="M852 680 C760 760 695 865 642 1030" fill="none" stroke="${accent}" stroke-width="34" stroke-linecap="round"/>
      <path d="M372 585 L520 730 M808 585 L660 730" stroke="${ink}" stroke-width="18" stroke-linecap="round"/>
    `;
  }

  if (type === 'skirt') {
    return `${common}
      <rect x="420" y="350" width="360" height="96" rx="48" fill="${ink}"/>
      <path d="M450 440 L330 1180 C500 1265 705 1265 870 1180 L750 440Z" fill="${soft}" stroke="${ink}" stroke-width="12"/>
      ${Array.from({ length: 7 }, (_, i) => `<path d="M${455 + i * 48} 460 L${390 + i * 70} 1160" stroke="${accent}" stroke-width="8" opacity=".65"/>`).join('')}
    `;
  }

  if (type === 'shirt') {
    return `${common}
      <path d="M410 390 L540 310 L600 390 L660 310 L790 390 L900 700 L790 760 L750 1190 L450 1190 L410 760 L300 700Z" fill="${soft}" stroke="${ink}" stroke-width="12"/>
      <path d="M540 310 L600 510 L660 310" fill="none" stroke="${ink}" stroke-width="10"/>
      <path d="M600 510 L600 1160" stroke="${accent}" stroke-width="10"/>
      <circle cx="625" cy="635" r="12" fill="${ink}"/><circle cx="625" cy="735" r="12" fill="${ink}"/><circle cx="625" cy="835" r="12" fill="${ink}"/>
    `;
  }

  if (type === 'bag') {
    return `${common}
      <rect x="350" y="610" width="500" height="480" rx="70" fill="${soft}" stroke="${ink}" stroke-width="12"/>
      <path d="M460 610 C470 450 730 450 740 610" fill="none" stroke="${ink}" stroke-width="24" stroke-linecap="round"/>
      <rect x="410" y="720" width="380" height="90" rx="45" fill="${accent}" opacity=".70"/>
      <circle cx="600" cy="880" r="38" fill="#ffffff" stroke="${ink}" stroke-width="10"/>
    `;
  }

  return `${common}
    <path d="M300 690 C405 560 525 560 600 690 C675 560 795 560 900 690" fill="none" stroke="${ink}" stroke-width="28" stroke-linecap="round"/>
    <ellipse cx="435" cy="730" rx="170" ry="115" fill="${soft}" stroke="${ink}" stroke-width="12"/>
    <ellipse cx="765" cy="730" rx="170" ry="115" fill="${soft}" stroke="${ink}" stroke-width="12"/>
    <path d="M275 730 C375 805 500 805 595 730 M605 730 C700 805 825 805 925 730" fill="none" stroke="${accent}" stroke-width="14"/>
  `;
}

function svgFor(post, index) {
  const colors = palettes[index % palettes.length];
  const [bg, ink, accent] = colors;
  const type = getPieceType(post.slug);
  const label = post.h1.replace(' in 2026', '');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600" role="img" aria-labelledby="title desc">
  <title id="title">${esc(label)}</title>
  <desc id="desc">Ilustratie editoriala unica pentru ${esc(post.h1)}</desc>
  <rect width="1200" height="1600" fill="${bg}"/>
  <rect x="74" y="74" width="1052" height="1452" rx="48" fill="none" stroke="${ink}" stroke-width="8" opacity=".12"/>
  <g>${motif(type, colors, index)}</g>
  <text x="120" y="124" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" fill="${ink}" opacity=".88">GHID MODA 2026</text>
  <text x="120" y="1450" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700" fill="${ink}">${esc(label.slice(0, 48))}</text>
  <rect x="120" y="1488" width="${220 + (index % 7) * 48}" height="12" rx="6" fill="${accent}"/>
</svg>`;
}

await mkdir(outDir, { recursive: true });

await Promise.all(
  fashionExpansionBlogPosts2026.map(async (post, index) => {
    const slug = post.slug.replace('blog/', '');
    await writeFile(path.join(outDir, `${slug}.svg`), svgFor(post, index), 'utf8');
  }),
);

console.log(`Generated ${fashionExpansionBlogPosts2026.length} fashion expansion images in ${outDir}`);
