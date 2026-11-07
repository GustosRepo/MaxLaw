import { test, expect, type Page } from '@playwright/test';

async function fillInquiry(page: Page, press = false) {
  const form = page.getByRole('form', { name: press ? 'Press inquiry form' : 'Free consultation form' });
  if (!press) await form.getByLabel('What type of matter is this?').selectOption('Injury');
  await form.getByLabel('First name').fill('Test');
  await form.getByLabel('Last name').fill('Visitor');
  await form.getByRole('textbox', { name: /^Email/ }).fill('visitor@example.test');
  await form.getByPlaceholder('Briefly describe your matter').fill('Test inquiry, no real message should be sent.');
  await form.getByRole('checkbox').check();
  return form;
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    let issued = 0;
    window.grecaptcha = {
      ready: callback => callback(),
      execute: async (_key, options) => {
        if (options.action !== 'contact_submit') throw new Error('Unexpected CAPTCHA action');
        return `browser-captcha-token-${++issued}`;
      },
    };
  });
  // No test may transmit contact data, analytics, chat or map requests off this machine.
  await page.route('**/*', route => {
    if (new URL(route.request().url()).pathname.startsWith('/monitoring')) return route.fulfill({ status: 200, body: '' });
    if (new URL(route.request().url()).hostname === '127.0.0.1') return route.continue();
    return route.fulfill({ status: 200, contentType: 'application/javascript', body: '' });
  });
});

test('Reject blocks analytics/chat and contact remains usable', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Reject', exact: true }).click();
  await expect(page.getByRole('form', { name: 'Free consultation form' })).toBeVisible();
  expect(await page.locator('script[src*="googletagmanager"],script[src*="apexchat"]').count()).toBe(0);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Reject', exact: true })).toHaveCount(0);
  expect(await page.locator('script[src*="googletagmanager"],script[src*="apexchat"]').count()).toBe(0);
  await page.route('**/api/send-email', route => route.fulfill({ json: { success: true, submissionId: 'accepted-test' } }));
  const form = await fillInquiry(page);
  await form.getByRole('button', { name: 'Request a free consultation' }).click();
  await expect(form.getByRole('status')).toContainText('received your inquiry');
  expect(await page.evaluate(() => window.dataLayer?.length || 0)).toBe(0);
});

test('accepted consent tracks only successful inquiries without personal data', async ({ page }) => {
  await page.goto('/contact?email=must-not-enter-analytics@example.test');
  await page.getByRole('button', { name: 'Accept', exact: true }).click();
  await expect(page.locator('script[data-maxlaw-analytics]')).toHaveCount(1);
  let calls = 0;
  await page.route('**/api/send-email', route => {
    expect(route.request().postDataJSON().recaptchaToken).toBe(`browser-captcha-token-${calls + 1}`);
    calls++;
    return route.fulfill({ status: calls === 1 ? 503 : 200, json: calls === 1 ? { success: false, error: 'Please retry.' } : { success: true, submissionId: 'accepted-test' } });
  });
  const form = await fillInquiry(page);
  await form.getByRole('button', { name: 'Request a free consultation' }).click();
  await expect(form.getByRole('alert')).toContainText('Please retry');
  await expect(form.getByLabel('First name')).toHaveValue('Test');
  let events = await page.evaluate(() => (window.dataLayer || []).map(item => Array.from(item as ArrayLike<unknown>)));
  expect(events.filter(event => event[1] === 'generate_lead')).toHaveLength(0);
  await form.getByRole('button', { name: 'Request a free consultation' }).click();
  await expect(form.getByRole('status')).toBeVisible();
  events = await page.evaluate(() => (window.dataLayer || []).map(item => Array.from(item as ArrayLike<unknown>)));
  expect(events.filter(event => event[1] === 'generate_lead')).toHaveLength(1);
  expect(JSON.stringify(events)).not.toContain('visitor@example.test');
  expect(JSON.stringify(events)).not.toContain('must-not-enter-analytics');
  expect(JSON.stringify(events)).not.toContain('Test inquiry');
});

test('press form submits a real inquiry with consent and correct case type', async ({ page }) => {
  await page.goto('/media');
  await page.getByRole('button', { name: 'Reject', exact: true }).click();
  let submitted: Record<string, unknown> | undefined;
  await page.route('**/api/send-email', route => {
    submitted = route.request().postDataJSON();
    return route.fulfill({ json: { success: true, submissionId: 'press-test' } });
  });
  const form = await fillInquiry(page, true);
  await form.getByRole('button', { name: 'Send press inquiry' }).click();
  await expect(form.getByRole('status')).toBeVisible();
  expect(submitted?.caseType).toBe('Media / Press');
  expect(submitted?.consent).toBe(true);
  expect(submitted?.recaptchaToken).toBe('browser-captcha-token-1');
});

test('cookie preferences can revoke consent and unload third-party scripts', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Accept', exact: true }).click();
  await expect(page.locator('script[data-maxlaw-analytics]')).toHaveCount(1);
  await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
  await page.getByRole('button', { name: 'Reject', exact: true }).click();
  await expect(page.locator('script[data-maxlaw-analytics]')).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => localStorage.getItem('maxlaw-cookie-consent'))).toBe('rejected');
});

test('main pages render without overflow, duplicate headings, nested main or browser errors', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem('maxlaw-cookie-consent', 'rejected'));
  for (const route of ['/', '/about', '/media', '/results', '/contact', '/practice/car-accidents', '/criminal-defense/record-sealing']) {
    await page.goto(route);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('main main')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (route === '/') {
      await expect(page.locator('#results')).toHaveCount(1);
      await expect(page.locator('#reviews')).toHaveCount(1);
      await expect(page.getByText('3 weeks ago', { exact: true })).toHaveCount(0);
      await page.screenshot({ path: testInfo.outputPath('homepage.png') });
      for (const id of ['results', 'reviews']) {
        const section = page.locator('#' + id);
        await section.scrollIntoViewIfNeeded();
        await expect(section.getByRole('heading').first()).toBeVisible();
        await section.screenshot({ path: testInfo.outputPath(id + '.png') });
      }
      await page.getByRole('button', { name: 'Cookie preferences', exact: true }).scrollIntoViewIfNeeded();
      await expect(page.getByRole('button', { name: 'Cookie preferences', exact: true })).toBeVisible();
    }
    if (route === '/criminal-defense/record-sealing') await expect(page.locator('h1')).toHaveText('Las Vegas Record Sealing Lawyer');
  }
  expect(errors).toEqual([]);
});

test('practice directory links to every retained criminal service', async ({ page }) => {
  await page.goto('/practice');
  for (const slug of ['bad-checks', 'burglary', 'domestic-violence', 'drugs', 'dui', 'forgery', 'juvenile-crimes', 'larceny', 'murder', 'prostitution', 'record-sealing', 'sexual-assault', 'theft']) {
    await expect(page.locator(`main a[href="/criminal-defense/${slug}"]`).last()).toBeVisible();
  }
});

test('practice disclosure supports keyboard, outside click and accurate active links', async ({ page }) => {
  await page.goto('/criminal-defense/record-sealing');
  const disclosure = page.locator('details').filter({ has: page.locator('nav[aria-label="Practice areas"]') });
  const summary = disclosure.locator('summary');
  const navigation = disclosure.getByRole('navigation', { name: 'Practice areas' });
  await expect(summary).toHaveText('Record Sealing▾');
  await expect(navigation).toBeHidden();
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(navigation).toBeVisible();
  await expect(navigation.getByRole('link', { name: 'Record Sealing', exact: true })).toHaveAttribute('aria-current', 'page');
  await page.keyboard.press('Escape');
  await expect(navigation).toBeHidden();
  await expect(summary).toBeFocused();
  await summary.click();
  // The open panel intentionally overlays the heading; use uncovered page chrome.
  await page.mouse.click(4, 4);
  await expect(navigation).toBeHidden();
  await summary.click();
  await navigation.getByRole('link', { name: 'Car Accidents', exact: true }).click();
  await expect(page).toHaveURL(/\/practice\/car-accidents$/);
  await expect(summary).toHaveText('Car Accidents▾');
  await expect(navigation).toBeHidden();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('practice navigation and core content work without JavaScript', async ({ page }) => {
  const context = await page.context().browser()!.newContext({ javaScriptEnabled: false, viewport: page.viewportSize()! });
  try {
    await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1'
      ? route.continue() : route.fulfill({ status: 200, body: '' }));
    const noJs = await context.newPage();
    await noJs.goto('http://127.0.0.1:3100/practice/car-accidents');
    await expect(noJs.locator('h1')).toHaveText('Las Vegas Car Accident Attorney');
    await expect(noJs.getByRole('heading', { name: 'How the Firm Builds a Car Accident Claim' })).toBeVisible();
    const navigation = noJs.getByRole('navigation', { name: 'Practice areas' });
    await noJs.locator('summary').click();
    const recordSealing = navigation.getByRole('link', { name: 'Record Sealing', exact: true });
    await expect(recordSealing).toBeVisible();
    await recordSealing.click();
    await expect(noJs.locator('h1')).toHaveText('Las Vegas Record Sealing Lawyer');
  } finally {
    await context.close();
  }
});

test('analytics errors cannot turn an accepted inquiry into a submission failure', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Accept', exact: true }).click();
  await page.evaluate(() => { window.gtag = () => { throw new Error('Analytics blocked'); }; });
  await page.route('**/api/send-email', route => route.fulfill({ json: { success: true, submissionId: 'saved-test' } }));
  const form = await fillInquiry(page);
  await form.getByRole('button', { name: 'Request a free consultation' }).click();
  await expect(form.getByRole('status')).toContainText('received your inquiry');
  await expect(form.getByRole('alert')).toHaveCount(0);
});

test('blocked browser storage does not break the consent controls', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error('Storage unavailable'); };
    Storage.prototype.setItem = () => { throw new Error('Storage unavailable'); };
  });
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Reject', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Reject', exact: true })).toHaveCount(0);
  await expect(page.getByRole('form', { name: 'Free consultation form' })).toBeVisible();
});

test('CAPTCHA errors preserve the inquiry and do not contact the email endpoint', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Reject', exact: true }).click();
  await page.evaluate(() => { window.grecaptcha!.execute = async () => { throw new Error('CAPTCHA unavailable'); }; });
  let submitted = false;
  await page.route('**/api/send-email', route => { submitted = true; return route.fulfill({ json: { success: true } }); });
  const form = await fillInquiry(page);
  await form.getByRole('button', { name: 'Request a free consultation' }).click();
  await expect(form.getByRole('alert')).toContainText('Spam verification failed');
  await expect(form.getByLabel('First name')).toHaveValue('Test');
  expect(submitted).toBe(false);
});

test('loads reCAPTCHA only when the form is submitted and sends the issued token', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Reject', exact: true }).click();
  await page.evaluate(() => { delete window.grecaptcha; });
  await expect(page.locator('script[data-maxlaw-recaptcha]')).toHaveCount(0);
  await page.route('https://www.google.com/recaptcha/api.js?*', route => route.fulfill({
    contentType: 'application/javascript',
    body: "window.grecaptcha={ready:function(cb){cb();},execute:async function(){return 'loaded-captcha-token';}};",
  }));
  let token = '';
  await page.route('**/api/send-email', route => {
    token = route.request().postDataJSON().recaptchaToken;
    return route.fulfill({ json: { success: true } });
  });
  const form = await fillInquiry(page);
  await form.getByRole('button', { name: 'Request a free consultation' }).click();
  await expect(form.getByRole('status')).toContainText('received your inquiry');
  expect(token).toBe('loaded-captcha-token');
  await expect(page.locator('script[data-maxlaw-recaptcha]')).toHaveCount(1);
});
