import { test, expect } from '@playwright/test';
import redirects from './fixtures/seo-migration-redirects.json';

const origin = 'https://www.maxlawnv.com';
const discoveryGaps = [
  'bad-checks', 'juvenile-crimes', 'larceny', 'prostitution', 'record-sealing', 'sexual-assault',
];

test('audited migration URLs permanently redirect to direct canonical destinations', async ({ request }) => {
  const checkedDestinations = new Set<string>();
  for (const { source, destination } of redirects) {
    const response = await request.get(source, { maxRedirects: 0 });
    expect(response.status(), source).toBe(308);
    const location = new URL(response.headers().location, origin);
    expect(location.pathname, source).toBe(destination);
    expect(location.search, source).toBe('');

    if (checkedDestinations.has(destination)) continue;
    const target = await request.get(destination, { maxRedirects: 0 });
    expect(target.status(), destination).toBe(200);
    const html = await target.text();
    const canonical = html.match(/<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/);
    expect(canonical, destination).not.toBeNull();
    expect(new URL(canonical![1]).href, destination).toBe(new URL(destination, origin).href);
    expect(html, destination).not.toMatch(/<meta\b[^>]*\bname="(?:robots|googlebot)"[^>]*\bcontent="[^"]*noindex/);
    expect(target.headers()['x-robots-tag'] || '', destination).not.toContain('noindex');
    checkedDestinations.add(destination);
  }
});

test('legacy matching preserves queries, case variants and documented slash normalization', async ({ request }) => {
  for (const source of ['/PERSONAL-INJURY/CAR-ACCIDENTS.HTML', '/Personal-Injury/Car-Accidents.shtml', '/car-accidents.html']) {
    const response = await request.get(source + '?utm_source=legacy&audit=1', { maxRedirects: 0 });
    expect(response.status(), source).toBe(308);
    const location = new URL(response.headers().location, origin);
    expect(location.pathname).toBe('/practice/car-accidents');
    expect(location.searchParams.get('utm_source')).toBe('legacy');
    expect(location.searchParams.get('audit')).toBe('1');
  }
  for (const [source, destination] of [
    ['/About-The-Firm/', '/about'],
    ['/marc-saggese-bio-page/', '/about/marc-a-saggese'],
    ['/practice-areas/', '/practice'],
    ['/practice-areas/seal-your-records/', '/criminal-defense/record-sealing'],
  ]) {
    const normalized = await request.get(source, { maxRedirects: 0 });
    expect(normalized.status(), source).toBe(308);
    expect(normalized.headers().location).toBe(source.slice(0, -1));
    const migrated = await request.get(normalized.headers().location, { maxRedirects: 0 });
    expect(migrated.status(), source).toBe(308);
    expect(new URL(migrated.headers().location, origin).pathname).toBe(destination);
  }
});

test('uncertain, retired and unrelated URLs remain genuine 404s', async ({ request }) => {
  for (const path of [
    '/Woman-beaten-by-Match-com-predator-speaks-out.html', '/Site-Map.html',
    '/Personal-Injury/Medical-Malpractice.html', '/practice/medical-malpractice',
    '/Personal-Injury/index.html', '/Personal-Injury/Types-Of-Accidents.html',
    '/Ask-a-Lawyer.html', '/assault.html', '/probation-violation.html',
    '/possession-of-controlled-substance.html', '/criminal-defense',
    '/audit-nonexistent-7e14', '/Personal-Injury/Car-AccidentsXhtml',
  ]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status(), path).toBe(404);
  }
});

test('practice navigation links exist in initial HTML before interaction', async ({ request }) => {
  for (const path of ['/practice', '/practice/car-accidents', '/criminal-defense/record-sealing']) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    const html = await response.text();
    for (const slug of discoveryGaps) {
      expect(html, `${path} links to ${slug}`).toMatch(new RegExp(`<a\\b[^>]*\\bhref="/criminal-defense/${slug}"`));
    }
    expect(html).toContain('<details');
    expect(html).toContain('<summary');
  }
});

test('sitemap contains only direct canonical public pages', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  const xml = await response.text();
  expect(xml).not.toContain('<lastmod>');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  expect(urls).toHaveLength(36);
  expect(new Set(urls).size).toBe(urls.length);
  const titles = new Set<string>();
  for (const url of urls) {
    expect(url.startsWith(origin)).toBe(true);
    const path = new URL(url).pathname;
    expect(path).not.toMatch(/\.html$|^\/plain|^\/api\//);
    const target = await request.get(path, { maxRedirects: 0 });
    expect(target.status(), path).toBe(200);
    const html = await target.text();
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    expect(title, path).toBeTruthy();
    expect((title!.match(/Saggese (?:&amp;|&) Associates/g) || []).length, path).toBeLessThanOrEqual(1);
    expect(titles.has(title!), path).toBe(false);
    titles.add(title!);
    const canonical = html.match(/<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/);
    expect(canonical, path).not.toBeNull();
    expect(new URL(canonical![1]).href, path).toBe(new URL(url).href);
    expect(html, path).not.toMatch(/<meta\b[^>]*\bname="(?:robots|googlebot)"[^>]*\bcontent="[^"]*noindex/);
  }
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${origin}/sitemap.xml`);
});

test('diagnostics remain noindexed while verification and public pages stay accessible', async ({ request }) => {
  const plain = await request.get('/plain.html');
  expect(plain.status()).toBe(200);
  expect(await plain.text()).toMatch(/<meta name="robots" content="noindex, follow"/);
  for (const path of ['/plain', '/plain-danger']) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(await response.text()).toMatch(/<meta name="robots" content="noindex, nofollow"/);
  }
  const verification = await request.get('/google672e3108f67e1467.html');
  expect(verification.status()).toBe(200);
  expect(await verification.text()).toContain('google-site-verification: google672e3108f67e1467.html');
});

test('car and settlement pages expose sourced content and contextual links in initial HTML', async ({ request }) => {
  const car = await request.get('/practice/car-accidents');
  const carHtml = await car.text();
  for (const heading of ['When Fault Is Disputed', 'Compensation and Supporting Records', 'Preparing for a Car Accident Consultation', 'Attorney Fees and Case Expenses', 'Records After a Las Vegas Crash']) {
    expect(carHtml).toMatch(new RegExp(`<h[23]\\b[^>]*>${heading}</h[23]>`));
  }
  expect(carHtml).toMatch(/<a\b[^>]*href="\/practice\/insurance-settlements-and-checks"[^>]*>settlement offers and disbursement<\/a>/);
  expect(carHtml).toMatch(/<a\b[^>]*href="\/practice\/cell-phone-related-accidents"[^>]*>Distracted driving crashes<\/a>/);
  expect(carHtml).toContain('https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141');
  expect(carHtml).toContain('https://www.leg.state.nv.us/NRS/NRS-011.html#NRS011Sec190');
  expect(carHtml).not.toContain("Nevada&#x27;s statute of limitations for injury claims is two years from the date of the accident.");
  const settlement = await request.get('/practice/insurance-settlements-and-checks');
  const settlementHtml = await settlement.text();
  expect(settlementHtml).toMatch(/<a\b[^>]*href="\/practice\/car-accidents"[^>]*>Las Vegas car accident representation<\/a>/);
  for (const source of ['https://www.leg.state.nv.us/CourtRules/RPC.html', 'https://www.cms.gov/medicare/coordination-benefits-recovery/attorney-services/conditional-payment-information', 'https://www.irs.gov/government-entities/tax-implications-of-settlements-and-judgments']) {
    expect(settlementHtml).toContain(source);
  }
  const statistics = await request.get('/practice/car-accident-statistics');
  const statisticsHtml = await statistics.text();
  expect(statisticsHtml).toContain('FARS Annual Report File');
  expect(statisticsHtml).not.toContain('Final FARS data');
  expect(statisticsHtml).toContain('https://cdan.dot.gov/tsftables/tsfar.htm');
});
