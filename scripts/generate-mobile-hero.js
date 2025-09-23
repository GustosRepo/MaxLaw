#!/usr/bin/env node
// Small helper to generate a mobile-optimized WebP from the large hero photo using sharp.
// Usage: node scripts/generate-mobile-hero.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const src = path.join(__dirname, '..', 'public', 'home-pics', 'neo-classical-courthouse-facade-illuminated-night-generated-by-ai.jpg');
  const out = path.join(__dirname, '..', 'public', 'home-pics', 'neo-classical-courthouse-facade-illuminated-night-generated-by-ai-mobile.webp');

  if (!fs.existsSync(src)) {
    console.error('Source image not found:', src);
    process.exit(1);
  }

  try {
    await sharp(src)
      .resize({ width: 900 })
      .webp({ quality: 70 })
      .toFile(out);
    console.log('Generated mobile WebP at', out);
  } catch (err) {
    console.error('Failed to generate mobile WebP:', err);
    process.exit(2);
  }
}

run();
