# Max Law SEO Implementation Checklist

**Started:** 2026-08-20  
**Last updated:** 2026-09-16
**Strategy source:** `docs/seo3.md`  
**Audit sources:** `docs/seo-audit-2026-08-20.md`; current codebase audit on 2026-09-08

## Current Status

-   Phase 1 is complete for the approved technical SEO baseline and audit cleanup scope.
-   TypeScript validation passes.
-   ESLint validation passes.
-   Mobile performance pass completed for above-fold images, font loading, analytics, and chat loading.
-   Production build now passes using the webpack build path.
-   Client confirmed car accidents are the firm's number-one SEO priority.
-   Latest post-Phase-1 codebase audit is complete.
-   Pre-Phase-2 Search Console baseline is recorded below.
-   Phase 2 implementation is complete locally across the car accident commercial page, Injury practice architecture, schema/FAQ consistency, internal authority flow, and the sourced Car Accident Statistics support page.
-   Phase 2 strategy was completed as one coordinated Injury SEO implementation window so major Injury pages can begin accumulating post-Phase-2 data at roughly the same time.
-   2026-09-08 current audit cleanup pass completed approved fixes; no new Injury or Criminal Defense hub should be created until the architecture pass is approved.
-   2026-09-15 audit confirmed `/practice` currently functions as a mixed Injury + Criminal Defense hub; do not restructure it yet.
-   Client-facing SEO language should prefer `Injury`, `Injury Lawyer`, `Injury Attorney`, `Injury Law`, or `Accident & Injury`; metadata may preserve `personal injury` terms where useful for rankings.

## Current Handoff: Progress, Waiting On, Next

Progress as of 2026-09-16:

-   Phase 1 technical SEO baseline is complete.
-   Phase 2A Car Accident Commercial SEO + Topic Cluster is implemented.
-   Phase 2B through Phase 2F safe structural SEO work is implemented.
-   Phase 2 internal authority-flow work toward `/practice/car-accidents` is implemented.
-   `/practice/car-accident-statistics` is upgraded into a sourced informational support page using only verified NHTSA FARS and Nevada Office of Traffic Safety figures.
-   Final Phase 2 H1 corrections are complete:
    -   `/practice/cell-phone-related-accidents`: `Las Vegas Distracted Driving Accident Lawyer`
    -   `/practice/excessive-force`: `Las Vegas Excessive Force Lawyer`
    -   `/practice/insurance-settlements-and-checks`: `Insurance Settlements & Checks`
-   Phase 2 client-content drafts are documented separately from published implementation work.
-   Latest Phase 2 QA passed after the Car Accident Statistics upgrade: `git diff --check`, `npm run lint`, and `npm run build`.

Waiting on:

-   User-side testing of the completed Phase 2 implementation.
-   Recording the actual Phase 2 deployment/go-live date after deployment.
-   Google Search Console data after Google crawls and processes the changes; preserve the Pre-Phase-2 baseline below and do not overwrite it.
-   Marc's review only for any future substantial content additions not already published.

Next steps:

-   Let Google crawl and process the Phase 2 changes after deployment.
-   Monitor homepage, `/practice`, `/practice/car-accidents`, `/practice/car-accident-statistics`, and major Injury practice pages.
-   Track car accident query movement against the Pre-Phase-2 Search Console baseline.
-   Watch indexing, coverage, schema, and crawl signals in Google Search Console.
-   Avoid further broad SEO edits until enough post-Phase-2 data is available to identify the next highest-confidence move.

## Phase 1: Technical SEO Baseline

Status: **Completed**

-   [x] Remove `/_next/` from robots disallow rules so Google can render assets.
-   [x] Remove or replace placeholder Google verification metadata.
-   [x] Replace removed `next lint` script with the ESLint CLI.
-   [x] Add `noindex` metadata to diagnostic routes:
    -   [x] `/plain`
    -   [x] `/plain-danger`
-   [x] Resolve missing Open Graph image references.
-   [x] Re-run TypeScript and lint validation.
-   [x] Fix production build blocker.
-   [x] Complete SEO baseline/data collection.
-   [x] Complete Search performance analysis.
-   [x] Complete keyword/opportunity analysis.
-   [x] Complete indexing/crawl analysis.
-   [x] Complete metadata cleanup within approved scope.
-   [x] Complete production build/Sentry fixes within approved scope.

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

## Current Audit Cleanup: 2026-09-08

-   [x] Verify current Nevada motorcycle helmet statute before editing motorcycle page wording.
-   [x] Correct motorcycle page helmet wording without adding new legal claims or statistics.
-   [x] Fix malformed schema URL slug on `/criminal-defense/theft`.
-   [x] Fix malformed schema URL slug on `/criminal-defense/sexual-assault`.
-   [x] Replace broken `/criminal-defense` practice-card link with the most logical existing destination.
-   [ ] Review and approve minimum homepage targeting changes:
    -   Homepage should visibly own Las Vegas injury law firm / injury lawyer intent.
    -   Metadata may preserve personal injury terms where useful for rankings.
    -   `/practice/car-accidents` should continue to own Las Vegas car accident attorney/lawyer intent.
-   [ ] Review and approve `/practice/car-accident-statistics` informational-support positioning changes.
-   [x] Re-run `npm run lint`.
-   [x] Re-run `npm run build`.

## Latest Post-Phase-1 Audit: 2026-09-15

Status: **Completed**

Key conclusions:

-   `/practice` currently functions as a mixed Injury + Criminal Defense hub, not a dedicated Injury hub.
-   Homepage currently owns most search visibility and has the strongest broad commercial SEO/entity signals.
-   `/practice/car-accidents` is the intended dedicated commercial page for Las Vegas car accident attorney/lawyer intent.
-   The current car accident topic cluster and contextual internal linking are underdeveloped.
-   No new Injury hub is approved.
-   No new Henderson, Summerlin, or other location landing pages are approved.
-   No URL changes are approved.
-   Criminal Defense remains important and should not be substantially weakened simply to improve Injury SEO.

## Pre-Phase-2 Search Console Baseline

Official comparison baseline: **28-day window recorded 2026-09-15**

Overall:

-   Impressions: 1,436
-   Clicks: 52
-   CTR: approximately 3.62%

United States:

-   Impressions: 1,355
-   Clicks: 52

Directional query observations:

| Query | Impressions | Avg. position | Notes |
| --- | ---: | ---: | --- |
| `las vegas car accident lawyer` | 50 | ~58.86 | Directional; low-volume position is not stable. |
| `car accident attorney las vegas` | 23 | ~23.61 | Directional; highest-priority commercial query. |
| `las vegas car accident attorney` | 8 | ~16.50 | Directional; near page-two opportunity. |
| `las vegas accident attorney` | 6 | ~17.33 | Directional; broader accident intent. |
| `las vegas car accident lawyers` | not recorded | ~16.50 | Directional; plural variation. |
| `car accident attorney in las vegas` | not recorded | ~18.00 | Directional; long-tail variation. |
| `las vegas injury lawyer` | not recorded | ~21.00 | Directional; broader Injury intent. |
| `car accident attorneys las vegas` | not recorded | ~13.00 | Directional; near page-one/page-two opportunity. |

Page-level observations:

| Page | Approx. impressions | Notes |
| --- | ---: | --- |
| `/` | ~1,207 | Homepage currently receives most commercial/broad visibility. |
| `/practice` | ~85 | Mixed hub visibility. |
| `/practice/car-accidents` | ~2 | Dedicated page receives almost no page-level impressions yet. |

## Phase 2: Revenue Page Optimization

Overall status: **Complete — User Testing / Google Re-Crawl / Monitoring**

Business-priority clarification:

-   The firm's primary Injury marketing focus is people who were injured where another person, business, property owner, manufacturer, driver, or other responsible party may be at fault.
-   The existing positioning `Injured and not at fault?` remains an important conceptual umbrella for Injury SEO, but it should not be repeated literally on every page.
-   High-priority Injury SEO should emphasize existing services involving injuries caused by another party, including Car Accidents, Motorcycle Accidents, Truck Accidents, Commercial Vehicle Accidents, Pedestrian Accidents, Premises Liability / Slip & Fall, Wrongful Death, Product Liability, and Brain / Spine Injury arising from another party's conduct.
-   Do not manufacture negligence or fault claims where the legal theory is more nuanced.
-   Do not force lower-priority or niche routes, including Insurance Settlements & Checks, Elder Abuse, Excessive Force, or other niche Injury routes, into the same SEO priority merely because they exist.
-   Final H1 decision: `/practice/cell-phone-related-accidents` uses `Las Vegas Distracted Driving Accident Lawyer` to avoid ambiguity with defense representation for people accused of distracted driving.
-   Final H1 decision: `/practice/excessive-force` uses `Las Vegas Excessive Force Lawyer`; do not force `Injury` into that H1.
-   Final H1 decision: `/practice/insurance-settlements-and-checks` uses `Insurance Settlements & Checks` because it is a low-priority support/service page for settlement processing, checks, lien review, and disbursement after a claim already exists.

-   [x] Treat car accident SEO as the lead priority without dropping existing ranking opportunities.
    -   [ ] Track and improve current ranking terms such as `lawyer las vegas`, `las vegas lawyer`, and near-page-one criminal defense terms where they support overall organic authority.
    -   [x] Prioritize these client-confirmed car accident terms: `car accident lawyer Las Vegas`, `car accident attorney Las Vegas`, and `Las Vegas car accident lawyer`.
-   [x] Optimize homepage around qualified injury and car accident leads.
    -   [x] Update homepage title/meta toward car accident and broad injury search intent.
    -   [x] Improve hero/supporting copy for injured, not-at-fault accident victims.
    -   [x] Add stronger links to car accident, motorcycle, truck, wrongful death, and contact pages.
    -   [x] Keep "lawyer las vegas" language natural because it is already ranking.
-   [x] Optimize the existing mixed `/practice` hub and preserve `Injury` terminology without creating a new Injury-only hub.
-   [x] Optimize car accident page for `car accident attorney las vegas`.
-   [x] Add visible FAQ about medical treatment after an injury.
-   [x] Clean duplicated/unclear schema on car accident page.

### Phase 2A: Car Accident Commercial SEO + Topic Cluster

Status: **Implemented / Monitoring**

-   [x] Make `/practice/car-accidents` clearer and stronger for Las Vegas car accident lawyer/attorney commercial intent.
-   [x] Preserve homepage ownership of broader Las Vegas Injury Lawyer, Criminal Defense Attorney, and general Las Vegas legal intent.
-   [x] Expand car accident page depth only where it serves user intent, conversion, topical completeness, trust, or SEO clarity.
-   [x] Add focused contextual internal links from existing relevant pages into `/practice/car-accidents`.
-   [x] Use existing support pages before recommending new pages.
-   [x] Do not create Henderson/Summerlin/city car accident landing pages.
-   [x] Do not create doorway-style city + keyword pages.
-   [x] Do not change URLs.
-   [x] Do not restructure `/practice` during Phase 2A.

Implementation date: **2026-09-15**

URLs changed:

-   `/practice/car-accidents`
-   `/`
-   `/practice`
-   `/practice/cell-phone-related-accidents`
-   `/practice/underinsured-and-uninsured-accidents`
-   `/criminal-defense/record-sealing`

Content changes:

-   Added practical car accident guidance around steps after a crash, medical documentation, police reports, photos, witnesses, recorded statements, Nevada fault/evidence context, UM/UIM coverage, insurance negotiation, and litigation readiness.
-   Added a concise trust section to `/practice/car-accidents` using verified existing site facts only: Marc practicing law in Las Vegas since 1999, 2,500+ clients represented, and `$30+ Million Recovered` with the existing past-results disclaimer.
-   Preserved the existing car accident page title and H1.
-   Preserved existing LegalService/FAQ/Breadcrumb schema structure.

Internal links added:

-   Homepage `/` to `/practice/car-accidents` with anchor `Car accident cases`.
-   `/practice` to `/practice/car-accidents` with anchor `car accident cases`.
-   `/practice/cell-phone-related-accidents` to `/practice/car-accidents` with anchor `car accident claims`.
-   `/practice/underinsured-and-uninsured-accidents` to `/practice/car-accidents` with anchor `car accident representation`.

Metadata changes:

-   Fixed `/criminal-defense/record-sealing` title metadata from `Las Vegas Drug Offenses Lawyer` to `Las Vegas Record Sealing Lawyer`.
-   Fixed corresponding Open Graph and Twitter title metadata for `/criminal-defense/record-sealing`.

QA results:

-   `npm run lint`: passed.
-   `./node_modules/.bin/tsc --noEmit`: passed.
-   `npm run build`: passed.
-   Rendered HTML spot checks confirmed car accident title, canonical, single H1, FAQPage output, homepage link, support-page links, and corrected record-sealing title metadata.

### Phase 2B: Broad Injury Architecture + Practice Hub

Status: **Implemented / Monitoring for structural SEO**

-   [x] Keep `/practice` as a mixed Injury + Criminal Defense hub while strengthening the visible Injury hierarchy.
-   [x] Preserve client-facing `Injury` terminology while retaining legitimate `personal injury` SEO signals where useful.
-   [x] Do not create a new Injury hub.
-   [x] Keep the homepage as the primary broad Las Vegas Injury / firm authority page.
-   [x] Keep Criminal Defense visible enough to protect existing relevance and business value.

### Phase 2C: Premises Liability / Slip & Fall

Status: **Implemented / Monitoring for structural SEO; content enhancements pending client approval**

-   [x] Strengthen `/practice/premises-liability` title/H1/schema service intent for Las Vegas premises liability and slip-and-fall intent without creating a separate slip-and-fall page.
-   [x] Remove unsupported national fall statistics and climate/location-sensitive claims from production copy.
-   [x] Add breadcrumb and balanced contextual links.
-   [ ] Review and approve queued client-facing content enhancements before publication.

### Phase 2D: Wrongful Death

Status: **Implemented / Monitoring for structural SEO; content enhancements pending client approval**

-   [x] Strengthen `/practice/wrongful-death` H1 for Las Vegas wrongful death lawyer/attorney intent.
-   [x] Remove unsupported limitation, settlement, and probability claims from production copy.
-   [x] Add breadcrumb and balanced contextual links while preserving independent wrongful death intent.
-   [ ] Review and approve queued client-facing content enhancements before publication.

### Phase 2E: Remaining Injury Commercial Pages

Status: **Implemented / Monitoring for structural SEO; content enhancements pending client approval**

-   [x] Audit and structurally improve Motorcycle, Truck, Commercial Vehicle, Pedestrian/Crosswalk, Brain/Spine, Product Liability, UM/UIM, Distracted Driving, Elder Abuse, Excessive Force, Insurance Settlements/Checks, and statistics/support pages.
-   [x] Improve titles/H1s, breadcrumbs, internal links, and schema consistency where safe.
-   [x] Avoid making Car Accidents the parent or primary destination for every Injury page.
-   [ ] Review and approve queued client-facing content enhancements before publication.

### Phase 2F: Injury Internal Linking + Cannibalization + Final QA

Status: **Completed for safe structural SEO**

-   [x] Build a balanced Injury internal-link map with clear source, destination, anchor concept, and reason.
-   [x] Preserve separate intent ownership for Car Accidents, Premises Liability, Wrongful Death, Motorcycle, Truck, Pedestrian, Brain/Spine, Product Liability, and related pages.
-   [x] Review FAQ/schema consistency, breadcrumbs, titles, meta descriptions, CTAs, and questionable claims.
-   [x] Run final validation after implementation approval.

QA results:

-   `npm run lint`: passed.
-   `./node_modules/.bin/tsc --noEmit`: passed.
-   `npm run build`: passed.
-   `git diff --check`: passed.
-   Rendered HTML spot checks confirmed one H1 per inspected route, BreadcrumbList on high-value practice detail pages, FAQPage only on the Phase 2A car accident page with visible FAQ content, no accidental noindex changes, and no old unsupported statistics from the Phase 2B-2F cleanup scan.

### Phase 2G: Car Accident Authority Flow

Status: **Completed / Monitoring**

-   [x] Audited existing links to `/practice/car-accidents` from homepage, `/practice`, trust pages, service areas, global navigation, footer, and supporting Injury pages.
-   [x] Added selective contextual links from trust/service/supporting pages without bloating global navigation.
-   [x] Preserved homepage as the broad Las Vegas Injury authority page instead of turning it into a duplicate car accident landing page.
-   [x] Preserved natural anchor variation, including `car accident cases`, `car accident representation`, `Car Accidents`, `Car Crashes`, and `Auto Accidents`.

QA results:

-   `git diff --check`: passed.
-   `npm run lint`: passed.
-   `npm run build`: passed.

### Phase 2H: Car Accident Statistics Support Page

Status: **Completed / Monitoring**

-   [x] Upgraded `/practice/car-accident-statistics` from a thin generic page into a sourced informational support asset for `/practice/car-accidents`.
-   [x] Used final 2024 NHTSA FARS Nevada data: `417` traffic fatalities, `108` pedestrian fatalities, `89` motorcyclist fatalities, and `15` pedalcyclist fatalities.
-   [x] Used Nevada Office of Traffic Safety Clark County data: 2024 `296` traffic fatalities, `270` fatal crashes, `97` pedestrian fatalities, `62` motorcycle fatalities; 2025 preliminary `235` traffic fatalities and `229` fatal crashes.
-   [x] Added visible source links for NHTSA FARS, NDOT Crash Data and Tools, Zero Fatalities Nevada Crash Data, and the Nevada OTS 2024-2025 State Fatal Report.
-   [x] Kept the page informational with `WebPage` schema and preserved `/practice/car-accidents` as the commercial landing page.

QA results:

-   `git diff --check`: passed.
-   `npm run lint`: passed.
-   `npm run build`: passed.

## Phase 2 — Client Content Approval Queue

Status: **Pending Client Approval**

Structural Phase 2: **Complete / User Testing / Monitoring**

Substantial new content: **Not Published — Pending Client Approval**

The following copy is not published in production. It is queued for Marc's review because it contains substantial new client-facing legal, process, or marketing content.

### 1. Premises Liability / Slip & Fall

Page / URL: `/practice/premises-liability`

Current section: Main body + FAQ

Why the page needs more content: The live page now safely owns slip-and-fall intent, but it would benefit from clearer client-facing explanation of unsafe property evidence, notice issues, and when to call.

Proposed copy:

```text
Premises liability is the area of injury law involving unsafe conditions on property. These cases can arise in stores, apartment complexes, hotels, parking lots, casinos, private homes, and other places where a dangerous condition caused someone to get hurt.

A slip and fall claim often turns on the details: what caused the fall, how long the condition existed, whether anyone reported it, whether warning signs were present, and how quickly the injury was documented. We investigate those facts carefully because they can become important when liability or the condition of the property is disputed.

Falls can involve spilled liquid, uneven flooring, broken stairs, loose mats, poor lighting, cluttered walkways, or other unsafe or potentially hazardous conditions. Serious falls may also involve brain or spine injuries, especially when symptoms appear or worsen after the initial incident.

Evidence that can matter:
- Photos or video of the condition before it is repaired or cleaned.
- Incident reports, witness names, and employee or manager statements.
- Surveillance footage, maintenance logs, cleaning records, and inspection policies.
- Medical records that connect the fall to the injury and track ongoing symptoms.
- Clothing, footwear, broken items, or other physical evidence from the incident.

When unsafe property conditions cause a fatal injury, the case may also involve a separate wrongful death claim. We review the facts carefully and explain the options that fit the situation.

We look at control of the property, maintenance practices, prior complaints, surveillance, witness accounts, medical documentation, and insurance coverage. The goal is to build a clear picture of how the unsafe condition caused the injury.

FAQ: Is a slip and fall handled as a premises liability case?
Often, yes. Slip and fall claims are commonly evaluated as premises liability matters when an unsafe property condition may have contributed to the injury.

FAQ: What evidence helps after an injury on unsafe property?
Photos or video of the condition, incident reports, witness names, medical records, footwear or damaged items, and any communication with the property owner can all be important.

FAQ: Should I contact a lawyer before speaking with an insurance adjuster?
It can be wise to get legal guidance first, especially when fault, notice of the hazard, medical treatment, or recorded statements are likely to be disputed.
```

SEO / user purpose: Improve slip-and-fall relevance, evidence guidance, and conversion clarity.

Search intent: Las Vegas premises liability lawyer; Las Vegas slip and fall lawyer.

Legal or factual claims Marc should verify: Notice/property-condition framing, property-control language, evidence list, and the third FAQ about contacting a lawyer before speaking with an adjuster.

Status: **Client Approval Required**

Review risk: **Medium**

### 2. Wrongful Death

Page / URL: `/practice/wrongful-death`

Current section: Main body + FAQ

Why the page needs more content: The live page is safer after removing unsupported claims, but it remains thin for a sensitive, high-value practice area.

Proposed copy:

```text
Wrongful death cases are different from ordinary injury claims because the family is grieving while also facing financial, insurance, and legal questions. We help organize the claim, preserve evidence, and pursue accountability with care.

These claims can arise from many kinds of serious incidents, including major vehicle crashes, unsafe property conditions, defective products, and other preventable harm.

What families may need to document:
- Police, incident, workplace, property, or medical reports.
- Photos, video, vehicle data, product evidence, or property-condition evidence.
- Funeral expenses, medical bills, employment records, and insurance correspondence.
- Names of witnesses, responding agencies, employers, property owners, or involved companies.
- Any letters, settlement offers, or recorded-statement requests from insurance carriers.

Fatal incidents may overlap with other practice areas, including truck accidents, unsafe property claims, and defective product cases. We review the circumstances and available evidence to help determine the appropriate legal options.

We manage communication, collect records, evaluate insurance and liability issues, and prepare the case for negotiation or litigation when appropriate. The work is handled with professional distance and personal respect.

FAQ: What should a family preserve after a fatal accident?
Reports, photos, witness names, insurance letters, medical and funeral records, employment information, and any communication from insurers can help the attorney evaluate the claim.

FAQ: Can a wrongful death case involve more than one responsible party?
Yes. Depending on the facts, responsibility may involve a driver, business, property owner, manufacturer, or another party whose conduct contributed to the death.

FAQ: How does the firm handle communication during a wrongful death case?
The firm works to reduce the administrative burden on the family, explain each step clearly, and prepare the claim with care and discretion.
```

SEO / user purpose: Improve usefulness, sensitivity, and commercial intent satisfaction without unsupported outcome claims.

Search intent: Las Vegas wrongful death lawyer; Las Vegas wrongful death attorney; Nevada wrongful death claims.

Legal or factual claims Marc should verify: Responsible-party framing, multiple responsible-party FAQ, insurance/liability language, documentation list, legal-options wording, and family-process wording.

Status: **Client Approval Required**

Review risk: **High**

### 3. Motorcycle

Page / URL: `/practice/motorcycle-accidents`

Current section: No substantial new copy queued.

Status: **No client approval item currently drafted**

Review risk: **Low**

### 4. Truck

Page / URL: `/practice/truck-accidents`

Current section: Main body

Why the page needs more content: The page now clearly owns truck/semi/18-wheeler intent, but Marc may want deeper approved language about carrier evidence and case handling.

Proposed copy:

```text
Depending on the circumstances, truck accident claims may require fast preservation of driver logs, electronic vehicle data, inspection records, maintenance files, dispatch records, and carrier communications. We work to identify the people and companies whose decisions contributed to the crash and prepare the case around the evidence, not assumptions.
```

SEO / user purpose: Improve truck-specific commercial depth and distinguish from general commercial vehicle claims.

Search intent: Las Vegas truck accident lawyer; 18-wheeler accident attorney; semi-truck crash claim.

Legal or factual claims Marc should verify: Whether the firm's truck-case investigation may appropriately involve driver logs, electronic vehicle data / ELD, inspection records, maintenance records, dispatch records, carrier communications, and carrier/company responsibility language.

Status: **Client Approval Required**

Review risk: **Medium**

### 5. Commercial Vehicle

Page / URL: `/practice/commercial-vehicle-accidents`

Current section: Main body

Why the page needs more content: The page now stays distinct from truck accidents, but could use approved examples of company/fleet vehicle scenarios.

Proposed copy:

```text
Commercial vehicle claims may involve delivery vans, buses, rideshare vehicles, municipal vehicles, work trucks, or company cars. These cases can require review of employment records, dispatch instructions, maintenance practices, driver training, and insurance coverage tied to the business or vehicle owner.
```

SEO / user purpose: Clarify fleet/company vehicle intent without cannibalizing semi-truck intent.

Search intent: Las Vegas commercial vehicle accident lawyer; delivery van accident lawyer; bus crash attorney.

Legal or factual claims Marc should verify: Vehicle examples, especially whether rideshare vehicles and municipal vehicles belong within the intended scope of this page, plus employment/dispatch/insurance review language.

Status: **Client Approval Required**

Review risk: **Medium**

### 6. Pedestrian

Page / URL: `/practice/crosswalk-and-pedestrian-accidents`

Current section: Main body

Why the page needs more content: The page now avoids unsupported pedestrian fatality statistics, but could better explain pedestrian-specific evidence.

Proposed copy:

```text
Pedestrian and crosswalk cases often depend on scene evidence: lighting, sightlines, signal timing, vehicle speed, driver attention, witness accounts, and available traffic or surveillance video. We move quickly to preserve evidence that can help establish how the crash happened and how the injury affected the pedestrian's daily life.
```

SEO / user purpose: Improve pedestrian-specific usefulness and conversion clarity.

Search intent: Las Vegas pedestrian accident lawyer; crosswalk accident attorney.

Legal or factual claims Marc should verify: Evidence categories and causation wording.

Status: **Client Approval Required**

Review risk: **Medium**

### 7. Brain / Spine

Page / URL: `/practice/brain-and-spine-injury`

Current section: Main body

Why the page needs more content: The page now avoids unsupported medical statistics, but serious-injury intent would benefit from approved language about documentation and long-term impact.

Proposed copy:

```text
Brain and spine injury claims often require detailed medical documentation, specialist input, rehabilitation records, and a clear timeline of symptoms. We focus on how the injury affects work, mobility, daily activities, potential future treatment needs, and long-term quality of life.
```

SEO / user purpose: Improve serious/catastrophic injury intent without unsupported medical statistics.

Search intent: Las Vegas brain injury lawyer; spinal injury attorney; serious injury lawyer.

Legal or factual claims Marc should verify: Medical documentation language and long-term impact framing.

Status: **Client Approval Required**

Review risk: **Medium**

### 8. Product Liability

Page / URL: `/practice/product-liability`

Current section: Main body

Why the page needs more content: The page now avoids unsupported national product-injury statistics, but could better explain product preservation and defect evaluation.

Proposed copy:

```text
If a product may have caused an injury, preserving the product, packaging, instructions, receipts, photos, and repair or recall information can be important. Product liability cases may involve design defects, manufacturing defects, inadequate warnings, or failures in the supply chain.
```

SEO / user purpose: Improve defective-product intent and evidence guidance.

Search intent: Las Vegas product liability lawyer; defective product attorney.

Legal or factual claims Marc should verify: Defect categories, supply-chain language, and evidence-preservation language.

Status: **Client Approval Required**

Review risk: **Medium**

### 9. Other Pages

No additional substantial legal copy is currently queued for UM/UIM, Cell Phone-Related Accidents, Elder Abuse, Excessive Force, Insurance Settlements and Checks, or Car Accident Statistics. Car Accident Statistics now contains sourced official crash/fatality data and visible citations; future updates should be handled as data refreshes, not as new legal claims.

## Phase 2 — Client-Facing Approval Version

```text
Marc,

As part of the current SEO improvements, I reorganized and strengthened the technical structure of the existing Injury practice pages. During that review, I identified several pages where additional client-facing information could make the pages more useful to potential clients and improve their search visibility.

I have not published the new content below. Before adding it, I'd like you to review the proposed wording for legal accuracy and make any changes you prefer.

The existing pages and services are not being replaced. These are proposed additions to strengthen the information already on the site.

1. Premises Liability / Slip & Fall

PAGE NAME
Premises Liability / Slip & Fall

PROPOSED NEW COPY
Premises liability is the area of injury law involving unsafe conditions on property. These cases can arise in stores, apartment complexes, hotels, parking lots, casinos, private homes, and other places where a dangerous condition caused someone to get hurt.

A slip and fall claim often turns on the details: what caused the fall, how long the condition existed, whether anyone reported it, whether warning signs were present, and how quickly the injury was documented. We investigate those facts carefully because they can become important when liability or the condition of the property is disputed.

Falls can involve spilled liquid, uneven flooring, broken stairs, loose mats, poor lighting, cluttered walkways, or other unsafe or potentially hazardous conditions. Serious falls may also involve brain or spine injuries, especially when symptoms appear or worsen after the initial incident.

Evidence that can matter:
- Photos or video of the condition before it is repaired or cleaned.
- Incident reports, witness names, and employee or manager statements.
- Surveillance footage, maintenance logs, cleaning records, and inspection policies.
- Medical records that connect the fall to the injury and track ongoing symptoms.
- Clothing, footwear, broken items, or other physical evidence from the incident.

When unsafe property conditions cause a fatal injury, the case may also involve a separate wrongful death claim. We review the facts carefully and explain the options that fit the situation.

We look at control of the property, maintenance practices, prior complaints, surveillance, witness accounts, medical documentation, and insurance coverage. The goal is to build a clear picture of how the unsafe condition caused the injury.

FAQ: Is a slip and fall handled as a premises liability case?
Often, yes. Slip and fall claims are commonly evaluated as premises liability matters when an unsafe property condition may have contributed to the injury.

FAQ: What evidence helps after an injury on unsafe property?
Photos or video of the condition, incident reports, witness names, medical records, footwear or damaged items, and any communication with the property owner can all be important.

FAQ: Should I contact a lawyer before speaking with an insurance adjuster?
It can be wise to get legal guidance first, especially when fault, notice of the hazard, medical treatment, or recorded statements are likely to be disputed.

MARC — PLEASE VERIFY:
- Whether the description of notice/property-condition issues is accurate.
- Whether the listed evidence reflects how you handle these cases.
- Whether the third FAQ about speaking with an insurance adjuster is wording you approve.
- Any wording you would prefer changed.

2. Wrongful Death

PAGE NAME
Wrongful Death

PROPOSED NEW COPY
Wrongful death cases are different from ordinary injury claims because the family is grieving while also facing financial, insurance, and legal questions. We help organize the claim, preserve evidence, and pursue accountability with care.

These claims can arise from many kinds of serious incidents, including major vehicle crashes, unsafe property conditions, defective products, and other preventable harm.

What families may need to document:
- Police, incident, workplace, property, or medical reports.
- Photos, video, vehicle data, product evidence, or property-condition evidence.
- Funeral expenses, medical bills, employment records, and insurance correspondence.
- Names of witnesses, responding agencies, employers, property owners, or involved companies.
- Any letters, settlement offers, or recorded-statement requests from insurance carriers.

Fatal incidents may overlap with other practice areas, including truck accidents, unsafe property claims, and defective product cases. We review the circumstances and available evidence to help determine the appropriate legal options.

We manage communication, collect records, evaluate insurance and liability issues, and prepare the case for negotiation or litigation when appropriate. The work is handled with professional distance and personal respect.

FAQ: What should a family preserve after a fatal accident?
Reports, photos, witness names, insurance letters, medical and funeral records, employment information, and any communication from insurers can help the attorney evaluate the claim.

FAQ: Can a wrongful death case involve more than one responsible party?
Yes. Depending on the facts, responsibility may involve a driver, business, property owner, manufacturer, or another party whose conduct contributed to the death.

FAQ: How does the firm handle communication during a wrongful death case?
The firm works to reduce the administrative burden on the family, explain each step clearly, and prepare the claim with care and discretion.

MARC — PLEASE VERIFY:
- Whether the responsible-party language is accurate.
- Whether the multiple responsible-party FAQ is wording you approve.
- Whether the listed documents/evidence reflect what you want families to preserve.
- Whether the communication/process language fits how you handle these cases.

3. Truck Accidents

PAGE NAME
Truck Accidents

PROPOSED NEW COPY
Depending on the circumstances, truck accident claims may require fast preservation of driver logs, electronic vehicle data, inspection records, maintenance files, dispatch records, and carrier communications. We work to identify the people and companies whose decisions contributed to the crash and prepare the case around the evidence, not assumptions.

MARC — PLEASE VERIFY:
- Whether driver logs, electronic vehicle data / ELD, inspection records, maintenance records, dispatch records, and carrier communications are appropriate examples.
- Whether the company/carrier responsibility wording is accurate.
- Any wording you would prefer changed.

4. Commercial Vehicle Accidents

PAGE NAME
Commercial Vehicle Accidents

PROPOSED NEW COPY
Commercial vehicle claims may involve delivery vans, buses, rideshare vehicles, municipal vehicles, work trucks, or company cars. These cases can require review of employment records, dispatch instructions, maintenance practices, driver training, and insurance coverage tied to the business or vehicle owner.

MARC — PLEASE VERIFY:
- Whether delivery vans, buses, work trucks, and company cars are accurate examples for this page.
- Whether rideshare vehicles belong within this page.
- Whether municipal vehicles belong within this page.
- Any wording you would prefer changed.

5. Pedestrian Accidents

PAGE NAME
Pedestrian Accidents

PROPOSED NEW COPY
Pedestrian and crosswalk cases often depend on scene evidence: lighting, sightlines, signal timing, vehicle speed, driver attention, witness accounts, and available traffic or surveillance video. We move quickly to preserve evidence that can help establish how the crash happened and how the injury affected the pedestrian's daily life.

MARC — PLEASE VERIFY:
- Whether the listed evidence categories reflect how you handle these cases.
- Whether the wording around preserving evidence is accurate.
- Any wording you would prefer changed.

6. Brain & Spine Injury

PAGE NAME
Brain & Spine Injury

PROPOSED NEW COPY
Brain and spine injury claims often require detailed medical documentation, specialist input, rehabilitation records, and a clear timeline of symptoms. We focus on how the injury affects work, mobility, daily activities, potential future treatment needs, and long-term quality of life.

MARC — PLEASE VERIFY:
- Whether the medical documentation examples are appropriate.
- Whether the phrase "potential future treatment needs" is accurate.
- Any wording you would prefer changed.

7. Product Liability

PAGE NAME
Product Liability

PROPOSED NEW COPY
If a product may have caused an injury, preserving the product, packaging, instructions, receipts, photos, and repair or recall information can be important. Product liability cases may involve design defects, manufacturing defects, inadequate warnings, or failures in the supply chain.

MARC — PLEASE VERIFY:
- Whether the evidence-preservation list is accurate.
- Whether design defects, manufacturing defects, inadequate warnings, and supply-chain responsibility are appropriate concepts for this page.
- Any wording you would prefer changed.
```

## SEO Backlog From Latest Audit

### Issues

-   [x] Fix `/criminal-defense/record-sealing` metadata/title mismatch. Current title referred to `Las Vegas Drug Offenses Lawyer`; corrected to Record Sealing title metadata on 2026-09-15.

### Warnings

-   [ ] Improve sitemap `lastModified` behavior. Current sitemap broadly uses `new Date()` rather than meaningful page-update dates.
-   [ ] Do not treat sitemap `<priority>` as a ranking lever. Google does not use sitemap priority for rankings, so sitemap priority changes should not be framed as a Car Accident ranking strategy.
-   [x] Review FAQ structured data. Phase 2B-2F pages no longer expose FAQ schema without matching visible FAQ content.
-   [x] Review unsourced statistics and outcome-style claims for content accuracy, E-E-A-T, and legal-content risk. Do not invent sources.
-   [x] Specifically review unsourced statistics previously visible on `/practice/car-accident-statistics`, `/practice/cell-phone-related-accidents`, `/practice/underinsured-and-uninsured-accidents`, `/practice/truck-accidents`, `/practice/commercial-vehicle-accidents`, `/practice/premises-liability`, `/practice/brain-and-spine-injury`, and `/practice/wrongful-death`.

## Prior Mobile PageSpeed Work

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

-   [ ] Rework service-area copy around injury and car accident intent.
-   [ ] Add Las Vegas, Henderson, Summerlin, and Clark County relevance.
-   [ ] Review Google Business Profile after client provides access.

## Phase 5: Tracking And Quality

-   [ ] Track qualified car accident inquiries.
-   [ ] Track not-at-fault injury inquiries.
-   [ ] Track signed cases from organic search.
-   [ ] Review lead quality monthly, not just call volume.
