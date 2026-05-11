import { mkdir, copyFile, stat, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');

const sourceOg = path.join(publicDir, 'og.png');

function pretty(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

function monogramSvg(size) {
  const fontSize = Math.round(size * 0.55);
  const cornerRadius = Math.round(size * 0.22);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0c"/>
      <stop offset="100%" stop-color="#111114"/>
    </linearGradient>
    <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${cornerRadius}" ry="${cornerRadius}" fill="url(#bg)"/>
  <rect x="2" y="2" width="${size - 4}" height="${size - 4}" rx="${cornerRadius - 2}" ry="${cornerRadius - 2}" fill="none" stroke="rgba(96,165,250,0.25)" stroke-width="2"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Inter, -apple-system, Segoe UI, Roboto, sans-serif" font-size="${fontSize}" font-weight="800" fill="url(#fg)">A</text>
</svg>`;
}

async function main() {
  await mkdir(publicDir, { recursive: true });

  const inputStat = await stat(sourceOg).catch(() => null);
  if (!inputStat) {
    console.error('No og.png found at', sourceOg);
    process.exit(1);
  }
  console.log('Source og.png:', pretty(inputStat.size));

  const ogJpgPath = path.join(publicDir, 'og.jpg');
  await sharp(sourceOg)
    .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(ogJpgPath);
  const ogJpgStat = await stat(ogJpgPath);
  console.log('Generated og.jpg:', pretty(ogJpgStat.size));

  const ogPngOptimizedPath = path.join(publicDir, 'og.optimized.png');
  await sharp(sourceOg)
    .png({ quality: 82, compressionLevel: 9, palette: true })
    .toFile(ogPngOptimizedPath);
  const ogPngOptStat = await stat(ogPngOptimizedPath);
  console.log('Generated og.optimized.png:', pretty(ogPngOptStat.size));
  if (ogPngOptStat.size < inputStat.size) {
    await copyFile(ogPngOptimizedPath, sourceOg);
    console.log('Replaced og.png with optimized version');
  }

  const faviconSvgPath = path.join(publicDir, 'favicon.svg');
  await writeFile(faviconSvgPath, monogramSvg(64), 'utf8');
  const faviconStat = await stat(faviconSvgPath);
  console.log('Generated favicon.svg:', pretty(faviconStat.size));

  const sizes = [
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
  ];

  for (const { name, size } of sizes) {
    const svg = Buffer.from(monogramSvg(size), 'utf8');
    const outPath = path.join(publicDir, name);
    await sharp(svg).png({ compressionLevel: 9 }).toFile(outPath);
    const s = await stat(outPath);
    console.log(`Generated ${name}:`, pretty(s.size));
  }

  console.log('\nDone. Optimized assets in /public:');
  console.log('  - og.jpg / og.png (compressed)');
  console.log('  - favicon.svg (modern browsers)');
  console.log('  - apple-touch-icon.png (180x180)');
  console.log('  - icon-192.png · icon-512.png (manifest PWA)');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
