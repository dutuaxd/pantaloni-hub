import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const root = process.cwd();
const blogRoot = path.join(root, 'src', 'content', 'blog');
const kebab = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60).replace(/-$/, '');
async function download(url){ const res = await fetch(url, { redirect:'follow' }); if(!res.ok) throw new Error('Unsplash failed '+res.status); return Buffer.from(await res.arrayBuffer()); }
export async function fetchImages(){
  const folders = await fs.readdir(blogRoot, { withFileTypes:true }).catch(()=>[]);
  for (const folder of folders.filter(f=>f.isDirectory())) {
    const dir = path.join(blogRoot, folder.name);
    const cfgPath = path.join(dir, 'images.json');
    let cfg; try { cfg = JSON.parse(await fs.readFile(cfgPath, 'utf8')); } catch { continue; }
    const meta = [];
    for (let i=0;i<cfg.images.length;i++) {
      const item = cfg.images[i];
      const base = kebab(item.filename || ('pantaloni-cu-snur-lung-'+item.keyword));
      const filename = base.endsWith('.jpg') ? base : base.replace(/-jpg$/, '') + '.jpg';
      const out = path.join(dir, filename);
      try { await fs.access(out); } catch {
        try {
          const buf = await download('https://source.unsplash.com/featured/1200x630/?' + encodeURIComponent(item.keyword));
          await sharp(buf).resize(1200, 630, { fit:'cover' }).jpeg({ quality:82, mozjpeg:true }).toFile(out);
        } catch {
          await sharp({ create:{ width:1200, height:630, channels:3, background:'#f4f7f5' } }).jpeg({ quality:82 }).toFile(out);
        }
      }
      const hero = i === 0;
      meta.push({ filename, alt: (item.alt || 'Pantaloni cu snur lung intr-o tinuta casual confortabila pentru barbati si femei').slice(0,125), title: (item.title || 'Pantaloni cu snur lung').slice(0,60), width:1200, height:630, loading: hero ? 'eager' : 'lazy', fetchpriority: hero ? 'high' : undefined, decoding: hero ? undefined : 'async', caption: item.caption || 'Imagine cu pantaloni cu snur lung pentru inspiratie de stil casual' });
    }
    await fs.writeFile(path.join(dir, 'images-meta.json'), JSON.stringify(meta, null, 2));
  }
}
if (import.meta.url === 'file://' + process.argv[1]) fetchImages();
