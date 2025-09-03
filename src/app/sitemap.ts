import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.maxlawnv.com'
  const mainPages = ['', '/about', '/practice', '/results', '/media', '/contact', '/about/marc-a-saggese', '/service-areas'];

  const discover = (segment: string) => {
    const root = path.join(process.cwd(), 'src', 'app', segment);
    if (!fs.existsSync(root)) return [] as string[];
    return fs.readdirSync(root)
      .filter(name => {
        const full = path.join(root, name);
        return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, 'page.tsx'));
      })
      .map(name => `/${segment}/${name}`);
  };

  const personalInjuryAreas = discover('practice');
  const criminalDefenseAreas = discover('criminal-defense');
  const allPages = [...mainPages, ...personalInjuryAreas, ...criminalDefenseAreas];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: getPriority(path),
  }))
}

function getPriority(path: string): number {
  if (path === '') return 1.0
  if (path === '/practice' || path === '/contact') return 0.9
  if (path === '/about' || path === '/results' || path === '/media') return 0.8
  if (path.startsWith('/practice/') || path.startsWith('/criminal-defense/')) return 0.7
  return 0.6
}
