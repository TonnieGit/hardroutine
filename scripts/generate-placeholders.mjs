// Generates on-brand placeholder imagery (no product photography exists yet —
// nothing has been manufactured). Run with: node scripts/generate-placeholders.mjs
// Replace every file this produces with real photography before launch.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'img');
const fieldNotesOutDir = path.join(outDir, 'field-notes');

const COLORS = {
  bitumen: '#101311',
  char: '#1A1F1C',
  line: '#2F3630',
  bone: '#E8E4DA',
  lichen: '#7E8B7A',
  brass: '#B5894E',
};

function contourLines(width, height, seedOffset = 0) {
  const cx = width * 0.5;
  const cy = height * 0.45;
  const rings = 7;
  let paths = '';
  for (let i = 0; i < rings; i++) {
    const rx = (width * 0.18) + i * (width * 0.11) + seedOffset;
    const ry = (height * 0.16) + i * (height * 0.14) + seedOffset * 0.6;
    const wobble = Math.sin(i * 1.7 + seedOffset) * (width * 0.02);
    paths += `<ellipse cx="${cx + wobble}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${COLORS.brass}" stroke-opacity="${0.14 - i * 0.012}" stroke-width="1.5" />`;
  }
  return paths;
}

function placeholderSvg({ width, height, eyebrow, title, sub, seedOffset = 0 }) {
  const fontSize = Math.max(20, Math.round(width * 0.052));
  const eyebrowSize = Math.max(11, Math.round(width * 0.018));
  const subSize = Math.max(12, Math.round(width * 0.02));
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${COLORS.bitumen}" />
    ${contourLines(width, height, seedOffset)}
    <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="${COLORS.line}" stroke-width="2" />
    <text x="${width * 0.08}" y="${height * 0.5 - fontSize * 0.4}" font-family="Arial, sans-serif" font-weight="700" font-size="${eyebrowSize}" letter-spacing="${eyebrowSize * 0.25}" fill="${COLORS.brass}">${eyebrow.toUpperCase()}</text>
    <text x="${width * 0.08}" y="${height * 0.5 + fontSize * 0.25}" font-family="Arial, sans-serif" font-weight="800" font-size="${fontSize}" letter-spacing="${fontSize * 0.02}" fill="${COLORS.bone}">${title.toUpperCase()}</text>
    ${sub ? `<text x="${width * 0.08}" y="${height * 0.5 + fontSize * 0.25 + subSize * 2}" font-family="Arial, sans-serif" font-weight="500" font-size="${subSize}" fill="${COLORS.lichen}">${sub}</text>` : ''}
  </svg>`;
}

async function writeJpg(svg, outPath) {
  await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(outPath);
  console.log('wrote', path.relative(process.cwd(), outPath));
}

// Writes .avif, .webp and .jpg side by side from the same source SVG, so
// pages can serve a <picture> with a modern-format source and a JPEG
// fallback (spec.md §10.3). outPathNoExt has no extension.
async function writeImageSet(svg, outPathNoExt) {
  const buf = Buffer.from(svg);
  await sharp(buf).avif({ quality: 55 }).toFile(`${outPathNoExt}.avif`);
  await sharp(buf).webp({ quality: 80 }).toFile(`${outPathNoExt}.webp`);
  await sharp(buf).jpeg({ quality: 82 }).toFile(`${outPathNoExt}.jpg`);
  console.log('wrote', path.relative(process.cwd(), outPathNoExt) + '.{avif,webp,jpg}');
}

async function writePng(svg, outPath) {
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log('wrote', path.relative(process.cwd(), outPath));
}

const products = [
  { slug: 'roll-900', line: 'ROLL', size: '900', sku: 'HR-ROLL-900', category: 'Swag Transit Bag' },
  { slug: 'roll-1200', line: 'ROLL', size: '1200', sku: 'HR-ROLL-1200', category: 'Swag Transit Bag' },
  { slug: 'roll-1400', line: 'ROLL', size: '1400', sku: 'HR-ROLL-1400', category: 'Swag Transit Bag' },
  { slug: 'haul-40', line: 'HAUL', size: '40', sku: 'HR-HAUL-40', category: 'Duffle Bag' },
  { slug: 'haul-70', line: 'HAUL', size: '70', sku: 'HR-HAUL-70', category: 'Duffle Bag' },
  { slug: 'haul-100', line: 'HAUL', size: '100', sku: 'HR-HAUL-100', category: 'Duffle Bag' },
  { slug: 'dump-60', line: 'DUMP', size: '60', sku: 'HR-DUMP-60', category: 'Rear Wheel Bag' },
  { slug: 'dump-90', line: 'DUMP', size: '90', sku: 'HR-DUMP-90', category: 'Rear Wheel Bag' },
];

const fieldNotes = [
  'why-swag-bags-fail',
  'packing-up-wet',
  'mould-on-canvas',
  'canvas-vs-nylon',
  'dust-and-zips',
  'dirty-recovery-gear',
  'bone-lining',
];

const ratios = [
  { suffix: '1x1', width: 1200, height: 1200 },
  { suffix: '4x3', width: 1200, height: 900 },
  { suffix: '16x9', width: 1200, height: 675 },
];

async function run() {
  await mkdir(outDir, { recursive: true });
  await mkdir(fieldNotesOutDir, { recursive: true });

  let seed = 0;
  for (const p of products) {
    for (const r of ratios) {
      const svg = placeholderSvg({
        width: r.width,
        height: r.height,
        eyebrow: p.category,
        title: `${p.line} ${p.size}`,
        sub: p.sku,
        seedOffset: seed,
      });
      await writeImageSet(svg, path.join(outDir, `${p.slug}-${r.suffix}`));
    }
    seed += 1;
  }

  for (const slug of fieldNotes) {
    const svg = placeholderSvg({
      width: 1200,
      height: 630,
      eyebrow: 'Field Notes',
      title: slug.replace(/-/g, ' '),
      sub: 'hardroutine.com.au',
      seedOffset: seed,
    });
    await writeImageSet(svg, path.join(fieldNotesOutDir, slug));
    seed += 1;
  }

  const ogSvg = placeholderSvg({
    width: 1200,
    height: 630,
    eyebrow: 'Hard Routine',
    title: 'No lights. No noise. No trace.',
    sub: 'Blackout 4WD storage — launching early 2027',
    seedOffset: 9,
  });
  await writeJpg(ogSvg, path.join(outDir, 'og-default.jpg'));

  const logoSvg = `<svg width="1200" height="1200" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="${COLORS.bitumen}" />
    ${contourLines(1200, 1200, 3)}
    <text x="600" y="560" font-family="Arial, sans-serif" font-weight="800" font-size="120" letter-spacing="4" fill="${COLORS.bone}" text-anchor="middle">HARD</text>
    <text x="600" y="680" font-family="Arial, sans-serif" font-weight="800" font-size="120" letter-spacing="4" fill="${COLORS.brass}" text-anchor="middle">ROUTINE</text>
  </svg>`;
  await writePng(logoSvg, path.join(outDir, 'logo-1200.png'));

  console.log('Done. These are placeholders — replace with real photography before launch.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
