# Max Law SEO Implementation Checklist

**Started:** 2026-08-20  
**Strategy source:** `docs/seo3.md`  
**Audit source:** `docs/seo-audit-2026-08-20.md`

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

Build blocker note:

-   `npm run build` still fails in Turbopack while parsing Sentry instrumentation files:
    -   `instrumentation-client.ts`
    -   `instrumentation.ts`
-   The error remained after escalation, so this is not just the default sandbox.

## Phase 2: Revenue Page Optimization

-   [ ] Optimize homepage around qualified PI/car accident leads.
-   [ ] Optimize or create personal injury hub.
-   [ ] Optimize car accident page for `car accident attorney las vegas`.
-   [ ] Add visible FAQ about medical treatment after an injury.
-   [ ] Clean duplicated/unclear schema on priority pages.

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
