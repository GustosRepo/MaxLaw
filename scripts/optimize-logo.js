// Simple logo optimization script to generate small WebP variants for mobile
// Requires: sharp (installed as devDependency)
// Input: public/home-logo.png (large source)
// Output: public/home-logo-280.webp and public/home-logo-560.webp

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main(){
  const projectRoot = path.resolve(__dirname, '..');
  const input = path.join(projectRoot, 'public', 'home-logo.png');
  const outDir = path.join(projectRoot, 'public');
  if(!fs.existsSync(input)){
    console.error(`Input not found: ${input}`);
    process.exit(1);
  }
  const targets = [
    { width: 280, name: 'home-logo-280.webp' },
    { width: 560, name: 'home-logo-560.webp' },
  ];
  for(const t of targets){
    const out = path.join(outDir, t.name);
    console.log(`Generating ${t.name} at width ${t.width}px ...`);
    await sharp(input)
      .resize({ width: t.width })
      .webp({ quality: 70, effort: 4 })
      .toFile(out);
  }
  console.log('Done. Generated WebP logo variants: home-logo-280.webp, home-logo-560.webp');
}

main().catch(err=>{ console.error(err); process.exit(1); });
