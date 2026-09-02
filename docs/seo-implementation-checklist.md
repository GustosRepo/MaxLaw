# Max Law SEO Implementation Checklist

**Started:** 2026-08-20  
**Last updated:** 2026-09-02  
**Strategy source:** `docs/seo3.md`  
**Audit source:** `docs/seo-audit-2026-08-20.md`

## Current Status

-   Phase 1 technical SEO fixes are mostly complete.
-   TypeScript validation passes.
-   ESLint validation passes.
-   Mobile performance pass completed for above-fold images, font loading, analytics, and chat loading.
-   Production build now passes using the webpack build path.
-   Client confirmed car accidents are the firm's number-one SEO priority.
-   Next recommended work: deepen the car accident SEO cluster first, while continuing to preserve and improve keywords already ranking.

## Phase 1: Technical SEO Baseline

-   [x] Remove `/_next/` from robots disallow rules so Google can render assets.
-   [x] Remove or replace placeholder Google verification metadata.
-   [x] Replace removed `next lint` script with the ESLint CLI.
-   [x] Add `noindex` metadata to diagnostic routes:
    -   [x] `/plain`
    -   [x] `/plain-danger`
-   [x] Resolve missing Open Graph image references.
-   [x] Re-run TypeScript and lint validation.
-   [x] Fix production build blocker.

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

-   The default Turbopack build still fails in this environment while parsing Sentry instrumentation files:
    -   `instrumentation-client.ts`
    -   `instrumentation.ts`
-   The production build script now uses `next build --webpack`, which completes successfully.
-   Sentry source-map upload is disabled in `next.config.ts` so builds do not upload source maps without an intentional config change.

Build blocker next steps:

-   [x] Keep Sentry runtime instrumentation enabled.
-   [x] Disable Sentry source-map upload for deterministic local/CI builds.
-   [x] Re-run `npm run build`.

## Phase 2: Revenue Page Optimization

-   [ ] Treat car accident SEO as the lead priority without dropping existing ranking opportunities.
    -   [ ] Track and improve current ranking terms such as `lawyer las vegas`, `las vegas lawyer`, and near-page-one criminal defense terms where they support overall organic authority.
    -   [ ] Prioritize these client-confirmed car accident terms: `car accident lawyer Las Vegas`, `car accident attorney Las Vegas`, and `Las Vegas car accident lawyer`.
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
