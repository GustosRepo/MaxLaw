# Max Law SEO Implementation Checklist

**Started:** 2026-08-20  
**Last updated:** 2026-08-20  
**Strategy source:** `docs/seo3.md`  
**Audit source:** `docs/seo-audit-2026-08-20.md`

## Current Status

-   Phase 1 technical SEO fixes are mostly complete.
-   TypeScript validation passes.
-   ESLint validation passes.
-   Mobile performance pass completed for above-fold images, font loading, analytics, and chat loading.
-   Production build is still blocked by the existing Sentry/Turbopack instrumentation failure.
-   Next recommended work: choose whether to build a dedicated personal injury hub or move to motorcycle/truck/wrongful death supporting pages.

## Phase 1: Technical SEO Baseline

-   [x] Remove `/_next/` from robots disallow rules so Google can render assets.
-   [x] Remove or replace placeholder Google verification metadata.
-   [x] Replace removed `next lint` script with the ESLint CLI.
-   [x] Add `noindex` metadata to diagnostic routes:
    -   [x] `/plain`
    -   [x] `/plain-danger`
-   [x] Resolve missing Open Graph image references.
-   [x] Re-run TypeScript and lint validation.
-   [ ] Fix production build blocker.

Completed files:

-   `src/app/robots.ts`
-   `src/app/layout.tsx`
-   `package.json`
-   `eslint.config.mjs`
-   `src/app/plain/page.tsx`
-   `src/app/plain-danger/layout.tsx`
-   `src/app/about/page.tsx`
-   `src/app/media/page.tsx`
-   `src/app/practice/car-accidents/page.tsx`
-   `src/app/practice/motorcycle-accidents/page.tsx`
-   `sentry.server.config.ts`
-   `sentry.edge.config.ts`

Build blocker note:

-   `npm run build` still fails in Turbopack while parsing Sentry instrumentation files:
    -   `instrumentation-client.ts`
    -   `instrumentation.ts`
-   The error remained after escalation, so this is not just the default sandbox.

Build blocker next steps:

-   [ ] Decide whether to keep Sentry enabled during local/production builds.
-   [ ] Test a Sentry config change separately from SEO edits.
-   [ ] Re-run `npm run build`.

## Phase 2: Revenue Page Optimization

-   [ ] Optimize homepage around qualified PI/car accident leads.
    -   [x] Update homepage title/meta toward `car accident attorney las vegas` and `personal injury lawyer las vegas`.
    -   [x] Improve hero/supporting copy for injured, not-at-fault accident victims.
    -   [x] Add stronger links to car accident, motorcycle, truck, wrongful death, and contact pages.
    -   [x] Keep "lawyer las vegas" language natural because it is already ranking.
-   [ ] Optimize or create personal injury hub.
-   [x] Optimize car accident page for `car accident attorney las vegas`.
-   [x] Add visible FAQ about medical treatment after an injury.
-   [x] Clean duplicated/unclear schema on car accident page.

## Phase 2A: Mobile PageSpeed

-   [x] Replace above-fold `plainlogo.png` usage with small WebP variants.
-   [x] Add responsive logo `srcSet` for navbar and mobile hero.
-   [x] Preload responsive AVIF courthouse hero image.
-   [x] Remove render-blocking Google Fonts CSS import and use system font fallbacks.
-   [x] Render the lightweight responsive hero media path before mobile hydration.
-   [x] Defer Google Analytics until user interaction or delayed load.
-   [x] Defer ApexChat until user interaction or delayed load.
-   [x] Defer mobile below-fold lite sections until scroll or delayed load.
-   [x] Split footer and cookie banner out of the initial client shell.
-   [x] Delay cookie banner display to reduce first-load work and CLS risk.
-   [x] Re-run TypeScript and lint validation.
-   [ ] Re-run Google PageSpeed Insights after deployment.

Notes:

-   Local PageSpeed Insights API request was blocked by Google API quota on 2026-08-20.
-   Original `public/plainlogo.png` remains available as a fallback/source asset.
-   The Aug. 20, 2026 2:45 PM PDT live report still showed the old render-blocking Google Fonts import and early Google Tag Manager output on production.

## Phase 3: Supporting High-Value Pages

-   [ ] Optimize motorcycle accident page.
-   [ ] Optimize truck accident page.
-   [ ] Optimize wrongful death page.
-   [ ] Add stronger internal links between accident pages.

## Phase 4: Local SEO

-   [ ] Rework service-area copy around PI and car accident intent.
-   [ ] Add Las Vegas, Henderson, Summerlin, and Clark County relevance.
-   [ ] Review Google Business Profile after client provides access.

## Phase 5: Tracking And Quality

-   [ ] Track qualified car accident inquiries.
-   [ ] Track not-at-fault injury inquiries.
-   [ ] Track signed cases from organic search.
-   [ ] Review lead quality monthly, not just call volume.
