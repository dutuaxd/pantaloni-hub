import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fetchImages } from './fetch-images.mjs';
const root = process.cwd();
const blogRoot = path.join(root, 'src', 'content', 'blog');
const stash = path.join(root, '.astro-json-stash');
async function jsonFiles(){
  const out=[];
  for (const d of await fs.readdir(blogRoot,{withFileTypes:true}).catch(()=>[])) if(d.isDirectory()) {
    for (const name of ['images.json','images-meta.json']) out.push({ from:path.join(blogRoot,d.name,name), to:path.join(stash,d.name,name) });
  }
  return out;
}
async function moveAway(files){ await fs.rm(stash,{recursive:true,force:true}); for(const f of files){ try{ await fs.mkdir(path.dirname(f.to),{recursive:true}); await fs.rename(f.from,f.to); } catch {} } }
async function restore(files){ for(const f of files){ try{ await fs.mkdir(path.dirname(f.from),{recursive:true}); await fs.rename(f.to,f.from); } catch {} } await fs.rm(stash,{recursive:true,force:true}); }
function runAstro(){ return new Promise((resolve)=>{ const bin=path.join(root,'node_modules','.bin', process.platform==='win32'?'astro.cmd':'astro'); const command = process.platform === 'win32' ? 'cmd.exe' : bin; const args = process.platform === 'win32' ? ['/c', bin, 'build'] : ['build']; const cp=spawn(command, args, { stdio:'inherit' }); cp.on('exit', code=>resolve(code ?? 1)); }); }
const files = await jsonFiles();
let code = 1;
try { await fetchImages(); await moveAway(files); code = await runAstro(); } finally { await restore(files); }
let built = false; try { await fs.access(path.join(root, 'dist', 'sitemap-index.xml')); built = true; } catch {}
process.exit(code === 0 || built ? 0 : code);
