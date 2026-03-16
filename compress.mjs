import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const ASSETS = '/dev-server/src/assets';
const MIN_SIZE = 200 * 1024; // 200KB threshold
const QUALITY_WEBP = 75;
const QUALITY_JPG = 80;
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1200;

let totalSaved = 0;
let filesProcessed = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) return;
  
  const s = await stat(file);
  if (s.size < MIN_SIZE) return;
  
  try {
    let pipeline = sharp(file).resize(MAX_WIDTH, MAX_HEIGHT, { fit: 'inside', withoutEnlargement: true });
    
    if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: QUALITY_WEBP, effort: 4 });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY_JPG, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: QUALITY_JPG, mozjpeg: true });
    }
    
    const buf = await pipeline.toBuffer();
    
    if (buf.length < s.size * 0.85) { // Only save if >15% reduction
      const { writeFile } = await import('fs/promises');
      await writeFile(file, buf);
      const saved = s.size - buf.length;
      totalSaved += saved;
      filesProcessed++;
      if (saved > 500000) console.log(`  ${path.relative(ASSETS, file)}: ${(s.size/1024).toFixed(0)}KB → ${(buf.length/1024).toFixed(0)}KB (-${(saved/1024).toFixed(0)}KB)`);
    }
  } catch (e) {
    console.error(`Error: ${file}: ${e.message}`);
  }
}

const files = await walk(ASSETS);
console.log(`Found ${files.length} files, processing those > ${MIN_SIZE/1024}KB...`);

// Process in batches of 10
for (let i = 0; i < files.length; i += 10) {
  await Promise.all(files.slice(i, i + 10).map(processFile));
}

console.log(`\nDone: ${filesProcessed} files compressed, ${(totalSaved / 1024 / 1024).toFixed(1)}MB saved total`);
