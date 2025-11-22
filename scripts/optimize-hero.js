// Generate responsive WebP/AVIF for hero background image
// Input: public/home-pics/neo-classical-courthouse-facade-illuminated-night-generated-by-ai.jpg
// Output: public/home-pics/courthouse-{w}.webp and courthouse-{w}.avif for w in [640, 960, 1280, 1536]

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main(){
  const projectRoot = path.resolve(__dirname, '..');
  const input = path.join(projectRoot, 'public', 'home-pics', 'neo-classical-courthouse-facade-illuminated-night-generated-by-ai.jpg');
  const outDir = path.join(projectRoot, 'public', 'home-pics');
  if(!fs.existsSync(input)){
    console.error(`Hero input not found: ${input}`);
    process.exit(1);
  }
  const widths = [640, 960, 1280, 1536];
  for(const w of widths){
    const base = `courthouse-${w}`;
    console.log(`Generating ${base}.webp and ${base}.avif`);
    await sharp(input)
      .resize({ width: w })
      .webp({ quality: 58, effort: 4 })
      .toFile(path.join(outDir, `${base}.webp`));
    await sharp(input)
      .resize({ width: w })
      .avif({ quality: 50, effort: 4 })
      .toFile(path.join(outDir, `${base}.avif`));
  }
  console.log('Done generating hero responsive assets.');
}

main().catch(err=>{ console.error(err); process.exit(1); });
