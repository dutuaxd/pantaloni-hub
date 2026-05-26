import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const manifestPath = path.join(publicDir, 'images', 'blog-seo', 'manifest.json');

function text(value, fallback = '') {
  return String(value || fallback).replace(/\s+/g, ' ').trim().slice(0, 240);
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

export async function optimizeBlogSeoImages() {
  if (!(await exists(manifestPath))) return { converted: 0, skipped: 0, missing: 0 };

  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  let converted = 0;
  let skipped = 0;
  let missing = 0;
  let failed = 0;

  for (const item of manifest) {
    const source = path.join(publicDir, item.source);
    const target = path.join(publicDir, item.target);

    if (!(await exists(source))) {
      missing += 1;
      continue;
    }

    const [sourceStat, targetExists] = await Promise.all([fs.stat(source), exists(target)]);
    if (targetExists) {
      const targetStat = await fs.stat(target);
      if (targetStat.mtimeMs >= sourceStat.mtimeMs) {
        skipped += 1;
        continue;
      }
    }

    try {
      await fs.mkdir(path.dirname(target), { recursive: true });
      const title = text(item.title, item.slug);
      const description = text(item.alt, title);
      await sharp(source)
        .rotate()
        .webp({ quality: 84, effort: 5 })
        .withMetadata({
          exif: {
            IFD0: {
              ImageDescription: description,
              XPTitle: title,
              XPSubject: description,
              Artist: 'Atelier AXD',
              Copyright: 'Atelier AXD',
            },
          },
        })
        .toFile(target);
      converted += 1;
    } catch {
      failed += 1;
    }
  }

  return { converted, skipped, missing, failed };
}

if (process.argv[1] && import.meta.url === new URL(process.argv[1], 'file:').href) {
  const result = await optimizeBlogSeoImages();
  console.log(JSON.stringify(result, null, 2));
}
