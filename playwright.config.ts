import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  maxFailures: 1,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:3100', trace: 'retain-on-failure' },
  projects: [
    { name: 'server', testMatch: '**/contact-server.spec.ts' },
    { name: 'desktop', testMatch: '**/website.spec.ts', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', testMatch: '**/website.spec.ts', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: false,
    timeout: 30_000,
    env: { DISABLE_MONITORING: 'true' },
  },
});
