// Convierte las fotos originales (fotos/originales/<nombre>.jpg|png|webp) a AVIF + WebP + JPG
// en varios anchos para <picture>. Uso: npm run imagenes
// Para reemplazar una foto (p. ej. la sesión real con el fotógrafo), guarda el original con
// el mismo nombre en fotos/originales/ y vuelve a ejecutar.
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'fotos/originales', OUT = 'public/assets/img';
mkdirSync(OUT, { recursive: true });

// nombre, anchos, recorte opcional (aspect ratio ancho/alto, foco horizontal 0..1)
const SPECS = [
  { name: 'hero', widths: [960, 1536] },
  { name: 'hero-m', src: 'hero', widths: [480, 800], crop: { ratio: 4 / 5, x: 0.70 } },
  { name: 'joven', widths: [480, 800] },
  { name: 'adulta', widths: [480, 800] },
  { name: 'adulto', widths: [480, 800] },
  { name: 'mayor', widths: [480, 800] },
  { name: 'doctora', widths: [480, 800, 1100] },
  { name: 'doctora-escucha', widths: [640, 1200], crop: { ratio: 3 / 2, x: 0.5, y: 0.62 } },
  { name: 'endodoncia', widths: [480, 800] },
  { name: 'consultorio-sala', widths: [480, 800], crop: { ratio: 4 / 3, x: 0.5, y: 0.7 } },
  { name: 'recepcion', widths: [480, 800] },
  { name: 'sala-espera', widths: [480, 800] },
  { name: 'doctora-exterior', widths: [480, 800] },
  { name: 'fachada', widths: [480, 960, 1280] },
];

const find = (n) => ['jpg', 'jpeg', 'png', 'webp'].map((e) => join(SRC, `${n}.${e}`)).find(existsSync);

async function base(file, crop) {
  let img = sharp(file).rotate();
  if (!crop) return img;
  const { width: w, height: h } = await img.metadata();
  const cw = Math.min(w, Math.round(h * crop.ratio));
  const ch = Math.min(h, Math.round(cw / crop.ratio));
  const left = Math.round((w - cw) * (crop.x ?? 0.5));
  const top = Math.round((h - ch) * (crop.y ?? 0.5));
  return img.extract({ left, top, width: cw, height: ch });
}

for (const s of SPECS) {
  const file = find(s.src || s.name);
  if (!file) { console.warn(`⚠  falta ${SRC}/${s.src || s.name}.(jpg|png) — se omite`); continue; }
  for (const w of s.widths) {
    const r = () => base(file, s.crop).then((i) => i.resize({ width: w, withoutEnlargement: false }));
    await (await r()).avif({ quality: 50, effort: 6 }).toFile(join(OUT, `${s.name}-${w}.avif`));
    await (await r()).webp({ quality: 72 }).toFile(join(OUT, `${s.name}-${w}.webp`));
    await (await r()).jpeg({ quality: 78, mozjpeg: true, progressive: true }).toFile(join(OUT, `${s.name}-${w}.jpg`));
  }
  console.log('✓', s.name);
}

// Imagen para compartir (WhatsApp, Facebook): retrato real de la doctora
const og = find('doctora') || find('hero');
if (og) {
  await sharp(og).rotate().resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 80, mozjpeg: true }).toFile('public/og-doctora.jpg');
  console.log('✓ og-image.jpg');
}

// Logo en PNG para Google (no acepta SVG como logo)
if (existsSync('public/favicon.svg')) {
  await sharp('public/favicon.svg', { density: 600 }).resize(512, 512, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toFile('public/assets/marca/logo-512.png');
  console.log('✓ logo-512.png');
}
