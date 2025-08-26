import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.maxlawnv.com'
  
  // Main pages
  const mainPages = [
    '',
    '/about',
    '/practice',
    '/results',
    '/media',
    '/contact',
    '/about/marc-a-saggese',
  ]

  // Personal injury practice areas
  const personalInjuryAreas = [
    '/practice/car-accidents',
    '/practice/car-accident-statistics',
    '/practice/cell-phone-related-accidents',
    '/practice/underinsured-and-uninsured-accidents',
    '/practice/motorcycle-accidents',
    '/practice/truck-accidents',
    '/practice/commercial-vehicle-accidents',
    '/practice/crosswalk-and-pedestrian-accidents',
    '/practice/premises-liability',
    '/practice/product-liability',
    '/practice/brain-and-spine-injury',
    '/practice/excessive-force',
    '/practice/elder-abuse',
    '/practice/medical-malpractice',
    '/practice/wrongful-death',
    '/practice/insurance-settlements-and-checks',
  ]

  // Criminal defense practice areas
  const criminalDefenseAreas = [
    '/criminal-defense/dui',
    '/criminal-defense/prostitution',
    '/criminal-defense/larceny',
    '/criminal-defense/domestic-violence',
    '/criminal-defense/drugs',
    '/criminal-defense/theft',
    '/criminal-defense/sexual-assault',
    '/criminal-defense/burglary',
    '/criminal-defense/forgery',
    '/criminal-defense/bad-checks',
    '/criminal-defense/murder',
    '/criminal-defense/juvenile-crimes',
    '/criminal-defense/record-sealing',
  ]

  const allPages = [...mainPages, ...personalInjuryAreas, ...criminalDefenseAreas]

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
