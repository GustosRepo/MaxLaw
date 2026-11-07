# Max Law — November 7 SEO releases and existing-page improvements

**Current work order:** [SEO Priority Plan](SEO_PRIORITY_PLAN.md) is the concise current reference. Earlier priorities below preserve the research history. The active keyword-map priorities are 1 (car accidents), 2 (premises/slip-and-fall), 3 (brain/spine secondary), Maintain and Later.

**Location correction — November 7:** The user confirms the supplied Keyword Planner file was exported for Las Vegas. The earlier nationwide classification inferred from its `United States` segmentation row is withdrawn: the CSV has no explicit selected-city field. Las Vegas is recorded as user-confirmed scope, with the raw label preserved separately. A repeat export is not required on that basis. Historical dates, raw estimates and missing values are unchanged.

The user's “ok go” authorized the recommended release and next content cycle. Independent Nevada/medical source research remains authorized without waiting for Marc. No attorney review or authorship is attributed to him for this copy.

## Release record

| Batch | Commit | State |
|---|---|---|
| Migration, car/settlement content and metadata/sitemap corrections | [`a83eac9`](https://github.com/GustosRepo/MaxLaw/commit/a83eac9c2b8ff2437bdbfa9894d79b7719c09851) | Both existing Vercel production projects succeeded. Public-domain verification passed November 7 at 22:40:39 UTC / 14:40:39 PST. |
| Brain & Spine Injury and Premises Liability improvements | [`7b6b9d0`](https://github.com/GustosRepo/MaxLaw/commit/7b6b9d074cf9adc35c54713c6063f607a5c81fac) | Both existing Vercel production projects succeeded. Public-domain verification passed November 7 at 22:43:13 UTC / 14:43:13 PST. |

The `maxlawprod` success timestamps are **22:38:18 UTC / 14:38:18 PST** for the first batch and **22:42:17 UTC / 14:42:17 PST** for the second. These are the recorded deployment success times; the checks above independently establish when the expected content was observed on the custom domain. [Durable release evidence](audits/seo-release-2026-11-07.json).

GitHub's existing `main` integration deploys the `maxlawprod` and `max-law` projects. This work used that existing setup. Only application files and regression tests were committed/pushed; account exports, keyword research and these local notes were excluded. No hosting account, domain, credentials, billing or campaign settings were changed.

## First production release: verified behavior

Read-only checks against `https://www.maxlawnv.com` confirmed:

- All **68 audited migration rules** return permanent 308 responses to the intended destinations.
- All **36 sitemap URLs** return HTTP 200 with their direct self-canonical, unique titles and no index exclusion; duplicate firm suffixes are absent.
- The sitemap omits unsupported modification dates.
- Four sampled uncertain/retired/nonexistent URLs remain genuine 404s, including the historical Match.com article and HTML sitemap.
- The plain diagnostic page is noindexed, the existing Google verification file remains accessible, and the car/settlement expansions appear in initial HTML.

This establishes deployed behavior, not Google recrawling, indexing, ranking improvement or case acquisition. No forms were submitted to production and no real inquiry was sent.

## Second content batch: what changed and why

The supplied GSC baseline shows 634 page impressions without clicks for Premises Liability and 398 without clicks for Brain & Spine Injury. Separate page/query exports cannot identify the URL that appeared for a given query. These updates address observable content gaps on the established pages; they do not assume a verified query-to-page relationship, harmful cannibalization or the cause of the recent click decline.

### Brain & Spine Injury

[Source file](src/app/practice/brain-and-spine-injury/page.tsx) · [Public URL](https://www.maxlawnv.com/practice/brain-and-spine-injury)

- Added distinct explanations of traumatic brain injury, concussion and spinal cord injury, with medical-source links and concise emergency guidance.
- Explained how incident evidence, diagnosis, prior medical history, work restrictions and daily-life changes serve different purposes in a claim.
- Added a practical records checklist, supported future-care/loss considerations and consultation preparation.
- Added contextual links to car representation, premises injuries and the existing settlement/payment guide.
- Replaced broad expert/outcome language with explanations tied to the evidence. No expert engagement, guaranteed recovery or future-cost amount is invented.
- Expanded the shared visible/schema FAQ set from three to five questions.

### Premises Liability

[Source file](src/app/practice/premises-liability/page.tsx) · [Public URL](https://www.maxlawnv.com/practice/premises-liability)

- Removed repeated opening claims and replaced the blanket “owners must keep visitors safe” / universal-notice framing with qualified responsibility, control, reasonable-care and causation explanations.
- Explained why the source of a hazard and notice evidence matter, and why an obvious condition does not automatically resolve liability.
- Added a practical incident/photograph/witness/video/medical-record checklist, with realistic preservation qualifications.
- Distinguished covered hotel/innkeeper security claims from a routine spill, linking to NRS 651.015.
- Added qualified comparative-fault, damages and filing-period guidance, plus consultation preparation and a biography link.
- Reused the existing shared FAQ component so all five visible answers and their schema use the same data.

Both pages keep their existing URLs, titles, descriptions, H1s, canonicals and service ownership. The two existing pages link to one another. No synonym, city or new resource page was created. The crash-report and fault resources remain briefs for a later cycle.

## Source register

Sources were inspected November 7, 2026. Case-law links reproduce the court opinions; the jury-instruction reference is explicitly the 2018 edition, not a claim of a newly issued instruction book.

| Source | Use |
|---|---|
| [CDC concussion symptoms and warning signs](https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/) | Delayed symptoms and emergency warning signs |
| [MedlinePlus traumatic brain injury](https://medlineplus.gov/ency/article/000799.htm) | Concussion and loss-of-consciousness distinction |
| [MedlinePlus spinal cord injuries](https://medlineplus.gov/spinalcordinjuries.html) | Cord function, variable effects and urgent evaluation |
| [Sprague v. Lucky Stores, 109 Nev. 247 (1993)](https://law.justia.com/cases/nevada/supreme-court/1993/22617-1.html) | Hazard source, notice and recurring conditions |
| [Foster v. Costco, 128 Nev. Adv. Op. 71 (2012)](https://law.justia.com/cases/nevada/supreme-court/2012/128-nev-adv-op-no-71.html) | Reasonable care and obvious hazards |
| [NRS 651.015](https://www.leg.state.nv.us/NRS/NRS-651.html#NRS651Sec015) | Covered innkeeper liability, foreseeability and due care |
| [NRS 41.141](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141) | Qualified comparative-negligence explanation |
| [NRS 11.190](https://www.leg.state.nv.us/NRS/NRS-011.html#NRS011Sec190) | General personal-injury filing period, with exceptions and accrual qualifications |
| [Nevada civil jury instructions, 2018 edition, chapter 5](https://ag.nv.gov/uploadedfiles/agnvgov/content/issues/09292021_nv-jury-instructions-civil-2018-pdf-version.pdf#page=81) | Evidence-based damages categories and future-loss support |

Medical content remains general education; the page does not diagnose a visitor. Statute research does not establish the firm's fee terms, new offices, case results or a particular attorney's review. No new business facts were inferred.

## Local verification

For the first release and again after the two-page batch:

- Production build, explicit TypeScript, ESLint and **all 40 regression tests passed**.
- The production build continues to prerender the public pages.

Additional checks on the two-page batch:

- **Eight browser cases passed:** each page on desktop/mobile, with and without JavaScript. Checked HTTP 200, a single H1, no nested main, no horizontal overflow, working internal link targets and consultation/phone anchors, and exact parity of all five visible FAQ pairs with schema.
- Desktop and mobile screenshots were visually reviewed.
- All **42 generated HTML resources** retain their routes, titles, descriptions, canonicals and H1s relative to the post-P2 baseline.
- All **51 JSON-LD blocks** parse; only the two intended FAQ entities changed. Their service/business data and all other schema blocks are unchanged.
- The application diff after the first release contains exactly the two intended page files. The sitemap remains at 36 URLs.

Final public-domain checks passed for both updated pages, their five FAQ/schema pairs each, direct canonicals, the retained car/settlement expansions, and the unchanged 36-URL sitemap. No production forms were submitted.

Temporary local evidence is in `/tmp/maxlaw-p4`, including rendered comparison, eight browser results, screenshots and production check summaries. This document and [the release evidence JSON](audits/seo-release-2026-11-07.json) preserve the durable summary.

## Remaining data and measurement

The supplied Planner file remains **targeted to Las Vegas according to the user, October 2025–September 2026**, with 22 numeric averages, 44 blanks and no populated monthly values. The scope is recorded from the user’s confirmation, while the CSV’s original labels and historical dates are preserved. The [74-phrase import](P3_KEYWORDS_FOR_PLANNER.csv) remains available for an optional future refresh, not a required repeat.

For query-to-page evidence, export the Pages tab after filtering each priority query, or the Queries tab after filtering each priority page. The existing full-period tables cannot supply that relationship. An optional Windsor.ai integration was found and suggested for GSC query/page access; it is not confirmed installed/connected. Its description does not establish access to Keyword Planner city-volume research, so it is not being presented as a source of Keyword Planner metrics.

The [account-data analysis](P3_ACCOUNT_DATA_REFRESH_2026-11-07.md) remains the pre-release baseline. Record the two actual release times separately. Compare completed post-release periods with equivalent earlier periods by page/query/device/country; a same-day ranking check cannot measure the impact. No ranking, traffic, lead or revenue improvement is claimed at release time.
