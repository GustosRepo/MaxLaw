# Max Law car and truck accident content audit

Research and verification date: **November 13, 2026, America/Los_Angeles**. Repository inspected at commit `3c34001`. Status: research and recommendations only. No articles, application changes, account changes, deployment, or publication are included. All eventual articles require Corrina’s review before publication; no approval by Corrina or Marc is claimed.

## 1. Findings and evidence boundaries

Keep the existing commercial owners: [Car Accidents](https://www.maxlawnv.com/practice/car-accidents) and [Truck Accidents](https://www.maxlawnv.com/practice/truck-accidents). Improve their usefulness and connect distinct informational resources to them. Do not create separate lawyer/attorney/auto synonym landing pages or substitute city names into near-identical pages.

The car pillar already has substantive, sourced Nevada fault and filing-period explanations, report-request links, damages documentation, consultation preparation, and fee information. The truck pillar is appreciably shorter and introduces federal rules without linking to them. The settlement page already covers releases, deductions, liens, reimbursement, and distribution; it does not need a duplicate general settlement article.

The five strongest **new resource candidates** are an agency-specific crash-report guide, medical bills while a claim is pending, rental-car claims, truck evidence preservation, and identifying potentially liable truck-crash parties. These are recommendations for review, not approved articles. The 15-item opportunity list deliberately includes existing-page improvements.

### What was inspected

| Evidence | Method and finding | Limit |
| --- | --- | --- |
| Repository | Read application routes, all seven core accident pages, related crash/injury pages, shared navigation, metadata, JSON-LD, sitemap, redirects, mobile styles, prior SEO reports and account evidence. | Repository content does not alone prove production behavior. |
| Live website | Read-only HTTP crawl of all **36 URLs** in the production [sitemap](https://www.maxlawnv.com/sitemap.xml); all returned 200. Parsed original HTML, metadata, headings, links and JSON-LD. | A sitemap crawl is not a historical census of every URL ever published. Source-route search and targeted search results supplement it. |
| Legacy migration | Tested all nine configured accident-related legacy sources listed in §2.4 without following the initial redirect; checked destination pages separately. | Unknown URLs in old backlinks, server logs or a historical CMS export remain outside the verified set. |
| Browser | Chromium at 390 × 844 for both pillars; additional desktop, mobile and JavaScript-disabled car-page comparisons. Read-only; no forms submitted. | Single unthrottled lab sessions, fresh consent state; no CrUX, Lighthouse or field CWV dataset. |
| Search research | Queried Las Vegas/Nevada accident topics and inspected competitor pages and official sources in §§3–4. | Search-tool observations, not a geolocated Google rank tracker, Maps audit, live PAA export or search-volume dataset. |
| Account evidence | Used [existing account-export analysis](P3_ACCOUNT_DATA_REFRESH_2026-11-07.md), [machine-readable account evidence](audits/p3-account-export-analysis-2026-11-07.json) and [keyword map](P3_KEYWORD_MAP.csv). | Historical repository evidence; original exports were not newly downloaded or independently reauthenticated this turn. No live GSC, Semrush or Planner session was available. |

The search reader initially returned an older car-page snapshot. Fresh HTTP HTML and browser responses contain the newer sections; this report uses those and the repository. On mobile, `innerText` initially counted fewer words because `main section` uses `content-visibility: auto`. Desktop/mobile response HTML matched; temporarily forcing visibility in the audit browser restored the full text count. **No missing-content or cloaking defect was established.**

### 1.1 Available performance evidence

The saved GSC analysis covers **August 13–November 5, 2026**, Web search, all countries/devices; it has no city dimension. Selected rows:

| Observation | Clicks | Impressions | Aggregate average position | Interpretation |
| --- | ---: | ---: | ---: | --- |
| Car pillar, page-level | 1 | 31 | 11.52 | Small pre-release page sample, not its position for a chosen keyword. |
| Truck pillar, page-level | 0 | 4 | 5.75 | Too few impressions to infer broad truck visibility. |
| Distracted-driving page, page-level | 0 | 19 | 21.11 | Existing exposure worth monitoring. |
| Statistics page, page-level | 0 | 11 | 7.27 | Informational exposure; not proof of commercial leads. |
| Settlement page, page-level | 0 | 7 | 4.86 | Tiny sample, not a reason to publish duplicate settlement content. |
| `las vegas car accident lawyer`, query-level | 0 | 50 | 58.86 | Actual observed query exposure, destination URL unverified. |
| `car accident attorney las vegas`, query-level | 0 | 23 | 23.61 | Same intended commercial owner; separate measured query. |

The separate page and query exports cannot establish which URL appeared for each query. Their totals also differ: property chart 107 clicks/4,131 impressions, page table 110/6,185, visible query table 17/2,588. Do not join independent tables into invented query-to-page measurements. The dates precede the November 7 releases documented in [release notes](SEO_RELEASE_NOTES_2026-11-07.md); they cannot measure those changes’ impact. [Google’s aggregation explanation](https://support.google.com/webmasters/answer/7576553?hl=en).

The saved Planner export covers October 2025–September 2026. Las Vegas targeting was **user-confirmed in the earlier work**; its raw `United States` segmentation label does not independently encode selected-city settings. Preserve that distinction. It has 22 numeric keyword averages and 44 blanks among the original 66 phrases; all monthly keyword cells are blank. Examples:

| Phrase | Raw historical average | Proper use |
| --- | ---: | --- |
| `car accident attorney las vegas` | 5,000 | Coarse historical estimate with user-confirmed Las Vegas scope; not current demand or unique prospective clients. |
| `Las Vegas accident report` | 500 | Best available numeric support for a report-retrieval resource; not expected article traffic. |
| `Las Vegas commercial vehicle accident lawyer` | 50 | Supports maintaining the distinct existing owner; precision is coarse. |
| `truck accident lawyer las vegas` | Blank | Unknown, not zero. |
| `who pays medical bills after car accident Nevada` | Blank | Editorial/search evidence only; local volume unverified. |
| `Las Vegas rental car accident lawyer` | Blank | Local competitor coverage is observed; volume unverified. |

Older October 29 Semrush values in the map are user-supplied **US estimates**, not refreshed Las Vegas measurements. They are not used here as current volume or difficulty. Synonym estimates must not be added together. Planner advertiser competition is not organic difficulty. [Google’s metric definitions](https://support.google.com/google-ads/answer/3022575?hl=en).

## 2. Existing accident content inventory

All URLs in this section are existing unless explicitly labeled proposed. The seven core pages returned 200, have unique absolute titles, self-referencing HTTPS/www canonicals, `index, follow`, and visible breadcrumbs with `BreadcrumbList` JSON-LD. §11 preserves their exact titles, descriptions and heading inventories from the crawl.

Approximate word counts below are original-HTML `<main>` text, including the shared practice menu and excluding scripts/styles. They are comparative observations, not word-count targets or quality scores.

| ID / URL | Intent and primary targeting | Observed depth and Nevada information | Internal links and relationship to pillars | Decision / overlap risk |
| --- | --- | --- | --- | --- |
| C1 [Car](https://www.maxlawnv.com/practice/car-accidents) | Commercial; car accident lawyer/attorney Las Vegas and Nevada auto variants. | About 1,200 words. Sources for comparative negligence, filing periods, fees and damages; links to LVMPD/NHP report instructions. Crash types are mostly a list. | Contextual links to distracted driving, settlement and Marc’s profile; related-practice links to truck, commercial vehicle and UM/UIM. | Preserve primary owner. Add concise reporting/coverage clarifications and links to approved resources. Do not describe fault, deadlines or consultation preparation as absent. |
| T1 [Truck](https://www.maxlawnv.com/practice/truck-accidents) | Commercial; Las Vegas truck/semi/18-wheeler lawyer and attorney variants. | About 440 words. Mentions HOS, maintenance, ELD/ECM and several potential parties, but no official legal citations or explanation of applicability. | Contextual commercial-vehicle, serious-injury and fatal-claim links; car discoverable in shared menu. | Highest substantive practice-page expansion need. Cite federal rules and Nevada framework; add claim-process explanation and resource links. |
| T2 [Commercial vehicle](https://www.maxlawnv.com/practice/commercial-vehicle-accidents) | Commercial; delivery vans, fleet, buses, company cars. | About 305 words. Mentions employment, dispatch, training and maintenance records; no statutory/regulatory citations. Rideshare is mentioned without its distinct legal framework. | Visible car and large-truck links. Supports both pillars with a vehicle-type boundary. | Improve existing page. Truck/commercial overlap is partly controlled already; do not merge automatically or create another fleet landing page. Distinguish rideshare from FMCSA-regulated freight. |
| C2 [UM/UIM](https://www.maxlawnv.com/practice/underinsured-and-uninsured-accidents) | Commercial plus informational; uninsured/underinsured accident representation. | About 306 words. Coverage overview and policy review, but no offer/rejection rules, minimum limits, hit-and-run conditions or official sources. | Contextual car representation link. | Improve this owner before proposing another generic uninsured-driver article. Qualify the sidebar’s unqualified UM/UIM availability label. |
| C3 [Distracted driving](https://www.maxlawnv.com/practice/cell-phone-related-accidents) | Commercial; distracted/cellphone/texting injury claims. | About 410 words. Describes device use and evidence; no NRS 484B.165 citation or statutory exceptions. Broad comparison with drunk driving is unsupported. | Contextual car-claims link. | Improve existing page, remove/qualify unsupported equivalence, explain lawful use versus negligence. No new texting-lawyer page. |
| C4 [Settlement](https://www.maxlawnv.com/practice/insurance-settlements-and-checks) | Commercial/informational; offer, release and settlement-proceeds questions. | About 802 words. Substantive treatment of gross/net proceeds, expenses, liens, Medicare recovery, timing and taxes; official Nevada rules/CMS/IRS sources. | Contextual car representation link; reciprocal car-pillar settlement link already exists. | Adequate coverage of its present task. Maintain and add narrow cross-links when useful; a pending-medical-bills resource must focus on payment during treatment. |
| C5 [Statistics](https://www.maxlawnv.com/practice/car-accident-statistics) | Informational/data; Las Vegas/Nevada/Clark County crash statistics. | About 627 words. Separates 2024 FARS Nevada data and state-reported Clark County 2024/preliminary 2025 figures; links official sources. | Contextual car representation link plus distracted-driving and UM/UIM resources. | Maintain this owner and source/date distinctions. Do not create another annual statistics article or label fatality counts as all crashes. Current numeric totals were not independently recalculated in this audit. |

Structured data observed: C1 and T1 have `LegalService`, page-specific `Service`, `FAQPage`, and breadcrumbs. T2, C2, C3 and C4 have `LegalService`, `Service`, `WebPage`, and breadcrumbs. C5 has `WebPage` and breadcrumbs with citations. None of these seven has `Article`/`BlogPosting` or visible per-page publication/review dates. `og:type=article` is an Open Graph label, not Article JSON-LD.

### 2.1 Contextual pages and discovery surfaces

These existing pages were inspected for accident references and links. They are not invitations to expand unrelated practice areas.

| URL | Finding and pillar role | Recommendation |
| --- | --- | --- |
| [Brain/spine](https://www.maxlawnv.com/practice/brain-and-spine-injury) | About 919 main-text words; crash-related medical documentation and losses; sourced medical/legal material, FAQs and injury-type targeting. | Link selectively where a car/truck article addresses those injuries; preserve its injury-type ownership. No new generic crash-injury duplicate. |
| [Wrongful death](https://www.maxlawnv.com/practice/wrongful-death) | About 354 words; includes fatal car, truck and motorcycle incidents, documents and FAQs. | Existing referral destination for fatal-collision questions. Keep standing and damages review on that owner. |
| [Motorcycle](https://www.maxlawnv.com/practice/motorcycle-accidents) | About 288 words; rear-end causes, rider issues, injuries and related-practice links. | Not a general rear-end car-accident guide; no motorcycle expansion in this plan. |
| [Pedestrian](https://www.maxlawnv.com/practice/crosswalk-and-pedestrian-accidents) | About 441 words; crosswalk evidence and FAQs. | Existing crash-specific contextual destination; no pedestrian expansion in this plan. |
| [Product liability](https://www.maxlawnv.com/practice/product-liability) | About 453 words; explicitly includes vehicles/auto parts, product preservation, suppliers and defect types. FAQs and service schema; no specific vehicle-defect legal citations. Contextual links go to serious-injury/fatal-claim pages; car/truck links are in the shared menu. | Existing destination when a vehicle component may be defective. A selective truck-to-product link can help; no product-practice expansion or duplicate defective-auto article in this plan. |
| [DUI defense](https://www.maxlawnv.com/criminal-defense/dui) | Defense intent: stops, testing and DMV consequences. Commercial service schema; not an injured-victim civil-claim resource. | Do not use as the supporting conversion destination for injured drunk-driving victims or count it as adequate civil-liability coverage. |
| [Homepage](https://www.maxlawnv.com/) | Broad firm discovery, car/truck links and case-type labels, including rideshare and drunk-driver accidents. | Preserve car/truck paths. Labels routed to contact are not separate content pages. |
| [Practice index](https://www.maxlawnv.com/practice) | Existing linked directory of all seven core pages and contextual practice pages. | Add discoverability for a future resources index after approval; retain commercial practice navigation. |
| [Service areas](https://www.maxlawnv.com/service-areas) | Lists Henderson, Summerlin, North Las Vegas and valley communities; car/truck and other case-type links/labels. | Use verified coverage, agency routing and useful local examples; no thin city landing pages. Review the visible implementation-oriented SEO disclosure wording. |
| [Results](https://www.maxlawnv.com/results) | A commercial-vehicle result is described without substantive public case details. | Any accident-specific proof used elsewhere needs factual support, client permission and attorney review; no invented case story. |
| [Media](https://www.maxlawnv.com/media) | Cards link to five relevant Review-Journal columns listed below. The crash-steps card also links directly to C1. The on-site page supplies short excerpts, not full accident articles; no JSON-LD was captured. | Retain the editorial-history distinction and assess older advice before treating it as current guidance. Full third-party article access is a pre-draft overlap check where noted below. |
| [Marc’s profile](https://www.maxlawnv.com/about/marc-a-saggese), [About](https://www.maxlawnv.com/about), [Contact](https://www.maxlawnv.com/contact) | Firm identity, credibility and conversion destinations. Root metadata’s author is the firm, not an article reviewer. | Link from resources as appropriate. A biography link does not establish review of an individual article. |

§11 includes metadata/headings for the five contextual injury/product pages, DUI defense and Media so those references can be assessed without confusing them with new-topic gaps. Shared menus create many sitewide links; the contextual links identified above are the editorial relationships that matter for this plan.

The Media page links these existing externally hosted pieces. They are part of the firm's discoverable editorial history, not undiscovered Max Law resource routes:

| Linked article / intent | Verified coverage and accessibility | Overlap and action |
| --- | --- | --- |
| [What to do if you’re in a car accident](https://www.reviewjournal.com/life/ask-a-lawyer-what-to-do-if-youre-in-a-car-accident/) — informational first steps | Accessible search-reader copy displays Marc Saggese as contributor and October 16, 2014 publication. Discusses then-current police-response policy, scene documentation and crash aftermath. It contains dated operational advice; publisher-controlled meta description/JSON-LD were not independently captured. | Reinforces the decision against another generic first-steps article. Does not replace a current multi-agency records-retrieval workflow. Do not repeat its 2014 response-policy statements as current facts. |
| [Everything you need to know about car insurance](https://www.reviewjournal.com/life/ask-a-lawyer-everything-you-need-to-know-about-car-insurance/) — informational coverage | Title and short insurance/claims excerpt verified on Media. Publisher fetch redirected to an inaccessible Tollbit destination; body, headings, metadata, sources and outbound links unverified. | Review the full authorized publisher copy before approving the pending-medical-bills draft. Current sources and the narrower during-treatment task must justify the resource; do not assert this older column omits a subject that could not be read. |
| [Texting and driving](https://www.reviewjournal.com/life/ask-a-lawyer-texting-and-driving/) — informational device-use rules | Media title/excerpt verified; publisher body blocked by inaccessible redirect. Metadata, legal currency and schema unverified. | Update C3 using current law, rather than creating another broad texting article. Check the original before any reuse or republication. |
| [Drinking and driving in Nevada](https://www.reviewjournal.com/life/ask-a-lawyer-drinking-and-driving-in-nevada/) — DUI overview | Media describes laws/defenses. Publisher returned 429; full content and metadata unverified. | Do not assume it addresses injured victims’ civil claims adequately. Inspect before approving O13; no new DUI-defense work in this plan. |
| [DUI checkpoints](https://www.reviewjournal.com/life/ask-a-lawyer-dui-checkpoints-are-they-legal-and-what-are-your-rights/) — defense/rights | Media title/excerpt verified; publisher returned 402 Payment Required. Full content, sources, metadata and schema unverified. | Different intent from car/truck injury representation. No checkpoint article recommended. |

These external pages were not included in the 36-URL on-domain status count. No paywall or access control was bypassed. Publication rights, article attribution and publisher-controlled canonical/link/schema details require review before any republishing proposal; no republication is recommended here.

### 2.2 Required topic coverage and duplication decisions

| Requested subject | Existing treatment | Decision |
| --- | --- | --- |
| Car/truck accidents | Separate live pillars, C1/T1. | Improve those owners; no new commercial variants. |
| Commercial vehicles | T2, with bus/van/fleet scope and links to T1. | Improve and clarify boundaries. |
| Rear-end collisions | Brief list mention in C1 and motorcycle causes. | Not adequately explained, but defer a dedicated resource until higher-priority work and evidence support it. |
| Hit-and-run | C1 list mention; homepage defense label is not an article. | Focused victim reporting/evidence resource is justified as a later candidate; link UM/UIM rather than recreate its overview. |
| Drunk-driver crashes | C1 list and intake label; DUI defense has different intent. | Later civil-victim resource, subject to conflicts/intake and legal review. |
| Distracted driving | C3 plus C1 contextual link. | Update C3. |
| Rideshare | T2 short mention and intake labels. No dedicated source route found. | Clarify legal boundary on T2; defer separate resource pending app-status research and evidence. |
| Uninsured drivers | C2. | Improve C2 rather than publish a generic duplicate. |
| Accident insurance claims | C1 investigation/negotiation, C2 coverage, C4 settlement; Media also links an older external insurance column whose full text was inaccessible. | Assign each stage to its owner. Pending medical bills is a distinct on-site gap; verify the external column's scope before approving its draft. Broad insurance tactics/timeline articles are not first-month priorities. |
| Nevada liability | C1 sourced fault section; T1/T2 potential-party mentions. | Keep fault summary on C1; develop truck-party detail as a distinct resource. |
| Rental/out-of-state | C1 brief visitor records guidance; no rental-specific resource found. | One rental/visitor resource, not two overlapping articles in month one. |

Source-route inspection found no on-site blog/resources article system and no dedicated rear-end, civil hit-and-run, civil drunk-driving or rideshare article. Media's external columns are inventoried above. Targeted public searches did not establish additional on-domain Max Law accident articles. Unknown historical or orphaned URLs cannot be ruled out without GSC indexed-URL/backlink/log exports; check those before final slug approval.

### 2.3 SEO weaknesses and opportunities

1. **Truck depth and sourcing:** T1 introduces federal issues without explaining applicability, exceptions, insurance classes or record types. Add useful answers and official references, not repeated head terms.
2. **Coverage detail:** C2 needs policy/rejection and UM/UIM distinctions. C3 needs actual Nevada device-use law and evidence limitations. T2 needs company-liability and rideshare qualifications.
3. **Resource relationships:** C1 already links the settlement page and C3; several support pages already return links to C1. Add contextual links from T1 to C1/C4 when discussing ordinary injury-claim steps and payment, and to approved truck resources. Do not describe the current cluster as entirely unlinked.
4. **Trust and maintenance:** There is no per-resource byline/review/date model. Create truthful attribution and verification records before publication. Review existing fee-language consistency and claims about investigations, experience and results with the firm.
5. **Potential overlap, not proven cannibalization:** T1/T2 share commercial-vehicle terminology but already explain different vehicle scopes. C1/C2/C4 overlap at coverage/claims boundaries. Preserve distinct tasks and inspect GSC query-to-page data before consolidating anything.
6. **Technical readiness:** Existing canonical, indexability, SSR and migration basics work in the tested set. The material future gap is resource routing/discovery/sitemap coverage, not a demonstrated need to rebuild the site.

Do not infer that shared keywords or low clicks prove cannibalization, a penalty, or that a particular competitor outranks Max Law.

### 2.4 Verified legacy redirects

Each source below returned **308** with the listed relative `Location`; each destination was separately verified 200 and self-canonical in the crawl. These are permanent, single-hop path redirects on the tested `https://www.maxlawnv.com` origin.

| Legacy path | Destination |
| --- | --- |
| `/Personal-Injury/Car-Accidents.html` | `/practice/car-accidents` |
| `/Personal-Injury/Car-Accidents.shtml` | `/practice/car-accidents` |
| `/car-accidents.html` | `/practice/car-accidents` |
| `/Personal-Injury/Truck-Accidents.html` | `/practice/truck-accidents` |
| `/Personal-Injury/Commercial-Vehicle-Accidents.html` | `/practice/commercial-vehicle-accidents` |
| `/Personal-Injury/Cell-Phone-Related-Accidents.html` | `/practice/cell-phone-related-accidents` |
| `/Personal-Injury/Underinsured-And-Uninsured-Accidents.html` | `/practice/underinsured-and-uninsured-accidents` |
| `/Personal-Injury/Insurance-Settlements-And-Checks.html` | `/practice/insurance-settlements-and-checks` |
| `/Personal-Injury/Car-Accident-Statistics.html` | `/practice/car-accident-statistics` |

Source configuration: [next.config.ts](next.config.ts); migration regression fixtures: [tests/fixtures/seo-migration-redirects.json](tests/fixtures/seo-migration-redirects.json). No broken configured accident redirect was found. HTTP/non-www normalization, undocumented casing/phone variants and historical URLs not in this set were not comprehensively tested; retain a follow-up reconciliation against actual legacy evidence rather than inventing blanket redirects.

## 3. Verified Nevada and federal legal research

Every row below was checked **November 13, 2026**. The date records source verification, not legal approval. Nevada Legislature pages expose revision/effective-date notes; eCFR title 49 displayed currency through November 12, 2026. Use law applicable to the crash date, not automatically the latest text. eCFR is a federal government source but describes its electronic compilation as authoritative and unofficial. Attorney review must resolve case-law application and factual exceptions before publication.

Legal IDs are reused in opportunity cards and briefs; follow their linked sources here rather than treating competitor copy as legal authority.

### 3.1 Car-accident rules

| ID / topic | Verified authority and official source | Plain-English explanation | Exceptions and questions for Corrina | Verified |
| --- | --- | --- | --- | --- |
| L01 Comparative negligence | [NRS 41.141](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141) | Where applicable, plaintiff fault cannot exceed defendant/combined defendant fault; recovery is reduced. A qualifying 50% share does not itself bar recovery. | Several-liability rules, settlements and statutory exceptions affect multi-party cases. Approve any numeric example and its assumptions. | 2026-11-13 |
| L02 Filing periods | [NRS 11.010, 11.190(4)(e), 11.250](https://www.leg.state.nv.us/NRS/NRS-011.html#NRS011Sec190) | Ordinary personal-injury/death actions generally have two years from accrual. Property damage generally has a different, three-year provision in 11.190(3)(c). | Accrual, minors/disability, government defendants, other jurisdictions and insurance-contract claims require separate analysis. Never treat ongoing negotiations as an automatic extension. | 2026-11-13 |
| L03 Scene duties/reporting | [NRS 484E.010–.050 and .070](https://www.leg.state.nv.us/NRS/NRS-484E.html#NRS484ESec070); [DMV SR-1](https://dmv.nv.gov/pdfforms/sr1.pdf) | Stop, exchange information and assist as required. Section .030 requires prompt police reporting in specified circumstances. Section .070 generally requires a DMV report within 10 days for injury/death or apparent damage of $750 or more to a vehicle/item. | Officer-investigation exception requires the specified insurance details; incapacity and certain carrier provisions matter. Separate scene notification, SR-1, insurance notice and report retrieval. Confirm the appropriate agency and facts. | 2026-11-13 |
| L04 Minimum liability insurance | [NRS 485.185](https://www.leg.state.nv.us/NRS/NRS-485.html#NRS485Sec185); [Nevada DMV requirements](https://dmv.nv.gov/insurance.htm) | Required ordinary Nevada vehicle liability limits are $25,000 bodily injury/death per person, $50,000 per crash, and $20,000 property damage. | These are coverage minimums, not damages caps or a promise a policy pays. Registration requirements for Nevada vehicles should not be misapplied to visitors. Commercial classes may differ. | 2026-11-13 |
| L05 UM/UIM | [NRS 687B.145(1), (2), (4), (5)](https://www.leg.state.nv.us/NRS/NRS-687B.html#NRS687BSec145); [NRS 690B.020](https://www.leg.state.nv.us/NRS/NRS-690B.html#NRS690BSec020) | Nevada regulates UM/UIM offers and UM inclusion/rejection. Availability requires examination of the insured, declarations, endorsements and any rejection. | Review stacking/anti-stacking, exclusions, multiple policies, insurer insolvency, releases and first-party deadlines. Do not state every driver bought UM/UIM or that it pays vehicle damage. | 2026-11-13 |
| L06 Hit-and-run | [NRS 484E.010, .030–.050](https://www.leg.state.nv.us/NRS/NRS-484E.html); [NRS 690B.020(3)(f)](https://www.leg.state.nv.us/NRS/NRS-690B.html#NRS690BSec020) | Scene duties remain. The statutory unknown-driver UM provision includes physical-contact and timely police-reporting conditions. | Policy terms, indirect contact and case law need review. Do not promise every unidentified-driver or no-contact crash is covered. | 2026-11-13 |
| L07 Distracted driving | [NRS 484B.165](https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec165) | Restricts manual texting/data use and handheld voice communications while operating on a highway. | Hands-free use, affixed voice-operated navigation and enumerated emergency/official exceptions matter. Lawful device use can still raise negligence questions; a citation alone does not establish the entire civil case. | 2026-11-13 |
| L08 DUI-related civil claims | [NRS 484C.110](https://www.leg.state.nv.us/NRS/NRS-484C.html#NRS484CSec110); [NRS 42.010](https://www.leg.state.nv.us/NRS/NRS-042.html#NRS042Sec010); [NRS 41.1305](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec1305) | DUI rules and civil recovery are separate analyses. Section 42.010 permits punitive damages under its specified vehicle/intoxicant conditions. | No automatic punitive award. Adult alcohol-service immunity and narrow underage rules defeat generic claims that every bar is liable. Review proof, insured damages, parties and parallel proceedings. | 2026-11-13 |
| L09 Rental cars | [NRS 482.305](https://www.leg.state.nv.us/NRS/NRS-482.html#NRS482Sec305); [49 USC 30106, GPO text](https://www.govinfo.gov/content/pkg/USCODE-2024-title49/html/USCODE-2024-title49-subtitleVI-partA-chap301-subchapI-sec30106.htm) | State rental financial-responsibility rules interact with federal protection against liability based only on rental ownership. | Own negligence/criminal wrongdoing and saved state insurance requirements matter; Nevada passenger and dismissal provisions need review. No blanket statement that rental companies are always/never liable or one policy is always primary. Federal currency limitation below. | 2026-11-13 |
| L10 Out-of-state drivers | [NRS 14.065 and 14.070](https://www.leg.state.nv.us/NRS/NRS-014.html#NRS014Sec070) | Nevada provides jurisdiction/service mechanisms relevant to motorists who leave the state. Returning home does not resolve the claim automatically. | Service compliance, forum, choice of law, out-of-state policies and deadlines require attorney analysis. Avoid promising a Nevada forum or Nevada law for every issue. | 2026-11-13 |
| L11 Paying for medical care | [NRS 687B.145(3)](https://www.leg.state.nv.us/NRS/NRS-687B.html#NRS687BSec145); [DOI consumer guide, medical payments discussion](https://doi.nv.gov/uploadedFiles/doi.nv.gov/Content/Consumers/Automobile_Insurance/2024_Auto_Guide_FINAL.pdf); [CMS conditional payments](https://www.cms.gov/medicare/coordination-benefits-recovery/attorney-services/conditional-payment-information) | Nevada requires an offer of at least $1,000 optional medical-expense coverage; purchase is not mandatory. Medicare conditional payments may require repayment under 42 USC 1395y(b). | Distinguish MedPay, health-plan benefits, liability recovery, provider billing and reimbursement. Plan terms, liens and federal plans need individual review; no guaranteed treatment funding or lien reduction. | 2026-11-13 |
| L12 Claims handling | [NRS 686A.310](https://www.leg.state.nv.us/NRS/NRS-686A.html#NRS686ASec310); [NAC 686A.665–.675](https://www.leg.state.nv.us/NAC/NAC-686A.html#NAC686ASec665); [NRS 690B.012](https://www.leg.state.nv.us/NRS/NRS-690B.html#NRS690BSec012) | Rules address acknowledgment, investigation, decisions and payment. Several clocks start from different events; acknowledgment/investigation standards include 20-working-day rules. | First-party versus third-party rights, calendar versus working days, extensions and statutory/regulatory interaction require review. Never translate a response deadline into a guaranteed settlement date. | 2026-11-13 |
| L13 Rear-end liability | [NRS 484B.127](https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec127) | Following distance must be reasonable and prudent for traffic, speed and conditions. | Specialized truck/platoon provisions and the evidence matter; this is not an automatic rule assigning every rear-end crash to the rear driver. | 2026-11-13 |
| L14 Rideshare boundary | [NRS 690B.470](https://www.leg.state.nv.us/NRS/NRS-690B.html#NRS690BSec470); [NRS 706A.080 and .155](https://www.leg.state.nv.us/NRS/NRS-706A.html#NRS706ASec155) | App/trip status affects insurance rules. Chapter 706A has distinct vehicle-classification and company-liability provisions; a rideshare car is not automatically an ordinary trucking case. | Review crash-date amendments, app evidence, commercial exclusions and direct versus vicarious liability. Do not recycle an old blanket $1.5 million coverage statement. | 2026-11-13 |

**Federal rental-source limit:** the GPO full text successfully read is the 2024 edition. Official House preliminary-code search results, labeled laws in effect September 25, 2026, repeated the same operative ownership/own-negligence and financial-responsibility provisions, but full House fetches failed. L09 is a verified statutory foundation with a specifically disclosed currency gap; Corrina must check intervening enactments and controlling interpretation before drafting an unqualified current-law explanation.

**Other source-access limits:** LVMPD, Henderson, North Las Vegas and NDOT pages were discoverable in official-domain results, but direct web-reader fetches returned 403. NHP and the DMV form were readable. DOI’s landing page rejected direct access; its 2024 guide was readable, and a 2025-named PDF actually displayed a 2024 edition. A 2026 guide surfaced but exceeded the reader’s size limit. Use current statutes for operative rules; do not label an older guide “2026 law” or copy competitor fees as verified agency fees.

### 3.2 Truck-accident rules

| ID / topic | Verified authority and official source | Plain-English explanation | Exceptions and questions for Corrina | Verified |
| --- | --- | --- | --- | --- |
| T01 Applicable safety rules | [NAC 706.2471–.2473](https://www.leg.state.nv.us/NAC/NAC-706.html#NAC706Sec2472); [Nevada DMV motor-carrier overview](https://dmv.nv.gov/mcoverview.htm) | Nevada adopts federal motor-carrier rules with state-specific definitions/exceptions and enforcement assignments. | Determine vehicle weight, cargo, commerce, carrier type and crash-date adoption. Company ownership alone does not establish FMCSA applicability. | 2026-11-13 |
| T02 Driver negligence | [NRS 41.130](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec130); [49 CFR 392.3](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-A/section-392.3) | Nevada supplies a civil-liability foundation; federal rules prohibit unsafe operation from fatigue/illness and prohibit carriers from permitting it. | Regulation applicability, breach, causation and harm must be proved. Section 392.3 has a narrow grave-emergency provision. No automatic recovery from a violation. | 2026-11-13 |
| T03 Trucking-company liability | [49 CFR 390.11](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-390/subpart-B/section-390.11); [49 CFR 391.11](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-391/subpart-B/section-391.11); [NRS 41.130](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec130) | Carriers must require driver-rule compliance and use qualified drivers under applicable rules. Company conduct and employee conduct warrant separate investigation. | Employment/control, direct negligence, scope of work, leasing and qualifications exceptions require review. These rules do not make every associated company liable; common-law theories need supporting case law selected by counsel. | 2026-11-13 |
| T04 Hours of service | [49 CFR 395.3](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.3); [395.1](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.1); [FMCSA summary](https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations) | Ordinary property-carrier rules include 10 hours off before driving, an 11-hour driving limit within a 14-hour window, a qualifying 30-minute interruption after eight driving hours, and 60/70 duty-hour limits. | Short-haul, sleeper-berth, adverse-condition and other exceptions matter. Passenger rules differ. A driver can be dangerously fatigued while technically within HOS limits. | 2026-11-13 |
| T05 Maintenance/inspection | [49 CFR 396.3, .7 and .17](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396) | Covered vehicles require systematic inspection/maintenance and periodic inspection. Section .3 record retention is one year and six months after leaving carrier control; it is not a universal rule for every document. | Applicability and record-category exceptions matter. Avoid saying every property-carrying driver must file a no-defect daily report; review §396.11. Prove a relevant defect and causal connection. | 2026-11-13 |
| T06 Duty logs/supporting documents | [49 CFR 395.8(k)](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.8) | Covered carriers retain duty-status records and required supporting documents at least six months from receipt. | Manual logs/ELD exceptions exist. Regulatory retention does not establish when crash data will overwrite or when a litigation hold begins. | 2026-11-13 |
| T07 ELDs | [49 CFR 395.8(a)](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.8); [395.22](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-B/section-395.22) | Where ELD use is required, carriers have device/account obligations and must keep six-month backup copies separately. | Exceptions include specified limited logging, driveaway/towaway and pre-2000 vehicles. ELD duty data is different from ECM/EDR event data and video. Identify the actual device, custodian and retention practice. | 2026-11-13 |
| T08 Evidence preservation | [NRCP 37(e), 34 and 45](https://www.leg.state.nv.us/CourtRules/NRCP.html); [49 CFR 390.15](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-390/subpart-B/section-390.15) | Nevada court rules address lost ESI that should have been preserved in anticipated/conducted litigation. Covered carriers maintain accident registers and required reports for three years. | Register retention does not preserve all video/vehicle data for three years. Loss, reasonable steps, restoration, prejudice and intent affect remedies. A preservation letter is not a court order or guaranteed sanction. | 2026-11-13 |
| T09 Truck financial responsibility | [49 CFR 387.9](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-387/subpart-A/section-387.9) | For-hire interstate nonhazardous property carriers at 10,001+ pounds have a $750,000 minimum; specified hazardous carriage classes carry $1 million or $5 million requirements. | Check applicability, commodities, carrier status and state rules; not every work truck has the same minimum. Limits are not guaranteed recoverable funds. Counsel must review actual policies and any MCS-90 issue separately. | 2026-11-13 |
| T10 Multiple parties/cargo | [NRS 41.141(4)–(5)](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141); [49 CFR 393.100](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-I/section-393.100) | Cargo must be secured against loss and destabilizing movement. Investigate the driver, carrier, maintainer, loader and product maker where facts support it; fault allocation is a separate question. | No automatic liability for every listed participant. Counsel must review sealed loads, contracts, product claims and broker preemption before naming potential defendants. | 2026-11-13 |

This research uses official statutes, regulations and Nevada Supreme Court-adopted civil rules. It does not claim a comprehensive case-law citator search. Corrina should supply/approve controlling Nevada decisions for employment/control, negligent hiring, rental-policy priority, no-contact UM claims and spoliation before those doctrinal details enter articles. No unverified case holding is presented as settled law.

## 4. Las Vegas search and competitor research

### 4.1 Query coverage and observed questions

Queries sampled on November 13 included `car accident lawyer Las Vegas`, `truck accident attorney Las Vegas`, `Las Vegas car accident lawyer Nevada fault medical bills statute limitations`, `Las Vegas truck accident lawyer evidence trucking company liability`, `Las Vegas rental car accident insurance out of state drivers`, `Las Vegas police accident report how to get LVMPD Nevada SR-1 lawyer`, `Nevada who pays medical bills after car accident law firm Las Vegas`, `Nevada uninsured driver hit and run accident claim Las Vegas lawyer`, `Las Vegas truck accident evidence ELD preservation hours service lawyer`, `Nevada drunk driving accident victim civil lawsuit lawyer`, `Nevada rear end collision fault lawyer Las Vegas`, `how Nevada determines fault in car accidents`, and `how insurance companies handle Nevada car accident claims`.

Result sets contained irrelevant news, national insurance material, other states and forums as well as local firms. Those were not used to establish Nevada law or local demand. Question headings below were observed on relevant result pages; **they are not claimed as verified Google People Also Ask entries**.

| Search task / observed question | Relevant observed result | Max Law comparison and use |
| --- | --- | --- |
| Which agency has my Las Vegas crash report? | [Sellouk report guide](https://www.sellouklaw.com/las-vegas-car-accident-report) | C1 links two agencies, but lacks a multi-agency retrieval workflow and request checklist. |
| Who pays medical bills while a Nevada claim is pending? | [Ruiz medical-bills article](https://www.ruizlawnv.com/who-pays-medical-bills-after-car-accident-nevada/) | C1 mentions treatment; C4 addresses proceeds. Payment during treatment is a distinct reader task. |
| What insurance applies after a rental-car crash? | [Kutner rental page](https://www.askadamskutner.com/auto-accident/las-vegas-rental-car-accidents-liability/) | No equivalent rental-specific Max Law resource found. |
| Who can be sued after a truck crash? | [Corena company-liability guide](https://www.corenalaw.com/truck-accidents/truck-driver-vs-trucking-company-liability/) | T1/T2 name parties without a role/evidence explanation. |
| What truck evidence is needed and who controls it? | [Ace evidence article](https://www.acelawgroup.com/blog/2025/07/truck-accident-case-evidence/) | T1 lists records but lacks custody, request and preservation distinctions. |
| How are truck claims different from car claims? | [Ed Bernstein truck pillar](https://www.edbernstein.com/las-vegas-truck-accident-lawyer/) | Cover a concise comparison on T1; do not add a generic competing truck landing page. |
| How long does an insurer have to respond? | [Fletcher response-deadline resource](https://www.fletcherfirmlasvegas.com/practice-areas/car-accidents/how-long-insurer-has-to-respond-nevada) | C1/C4 do not explain response clocks. Add a limited sourced section first; reconsider a separate guide from query evidence. |
| Is the rear driver always at fault? | [Corena rear-end guide](https://www.corenalaw.com/car-accidents/rear-end-collision-fault/), [Kutner rear-end article](https://www.askadamskutner.com/auto-accident/rear-ended-hire-lawyer/) | C1 only names the collision type. A gap exists, but priority below the first five briefs. |

The scene checklist and lawsuit-deadline candidates are already addressed at useful summary depth by C1. Fault also has a sourced C1 section. Improve those answers and resource navigation first; do not automatically turn each candidate into an article.

### 4.2 Competitor observations

These are content comparisons, not backlink/authority measurements or claims of ranking causation.

| Competitor page inspected | Actual content observation | Opportunity for Max Law |
| --- | --- | --- |
| Sellouk, report guide | Agency table, request process, reviewer and update date. | A practical multi-agency task with official links and accurate exceptions; independently verify fees and avoid categorical jurisdiction shortcuts. |
| Ruiz, medical bills | Separates health insurance, MedPay, provider arrangements and eventual settlement; named attorney/date; links to car representation. | Explain payment during treatment and documents to review, then refer settlement-distribution details to C4. |
| Kutner, rental-car liability | Nevada rental coverage/liability and policy-priority discussion; links to auto-accident and other resources. | One informational rental/visitor guide with an explicit coverage-document checklist; primary legal research must control the explanation. |
| Corena, trucking-company liability | Distinguishes driver, employer and other parties, employment/control and direct company conduct. | A role–evidence–legal-question table, with attorney-approved boundaries for contractors and brokers. Do not adopt its citations uncritically. |
| Ace, truck evidence | Evidence/custodian/window table and truck-service link. | Explain record-specific rules accurately. Do not repeat universal 30-day black-box overwrite or combined maintenance/personnel retention claims without supporting device/category evidence. |
| Ed Bernstein, truck pillar | Claim stages, HOS, maintenance/cargo, possible defendants, local references and FAQs. | T1 needs a fuller practical service explanation and authoritative links. Do not copy numeric crash claims or imply local corridor risk without data. |
| Fletcher, car pillar | Question-led first steps and claim process; links to reports, SR-1, insurer-response and limitation resources. | Keep C1’s useful overview and build a smaller set of distinct, reciprocal support resources. Its structure is evidence of a publishing approach, not proof of SEO results. |
| Fletcher, insurer response guide | Separates first-/third-party clocks and links back to car service. | Clarify handling versus resolution timing in existing content; preserve legal review of the statute/regulation interaction. |

Valiente Mott’s [truck-evidence URL](https://valientemott.com/las-vegas-truck-accident-lawyer/important-evidence/) appeared in results, but its full page could not be fetched. It is corroborating discovery evidence only and is not counted as a full-page review.

### 4.3 Local relevance without invented demand

Henderson and North Las Vegas have separate police-records services; a Las Vegas-area guide can help readers identify the actual investigating agency. Summerlin is a service-area context, not a separate city government or an automatic reason for its own content. Clark County information should be labeled county-wide, and Nevada figures statewide. Use I-15/US-95/I-215 as factual location examples, not unsupported claims that a road is the most dangerous or has a particular truck volume.

Official procedural destinations: [LVMPD records](https://www.lvmpd.com/about/bureaus/records-and-fingerprint-bureau/requesting-report-copies-with-lvmpd), [NHP crash reports](https://www.nhp.nv.gov/crashes-citations/crash-report-request/), [Henderson records](https://www.cityofhenderson.com/government/departments/police/police-records/request-records), [North Las Vegas records](https://www.cityofnorthlasvegas.com/residents/police/police-records), and [NDOT data tools](https://www.dot.nv.gov/safety/crash-data-and-tools). Apply §3’s access qualifications before reproducing procedural details or data.

## 5. Fifteen prioritized content opportunities

Priority is an editorial judgment combining observed gaps, available account evidence, legal usefulness, connection to a pillar and review effort. It is not a keyword-difficulty score. The first five new candidates are marked **Brief 1–5**. Proposed titles are working headlines, including replacement/expanded headings for existing pages, not requests to change their URLs.

### O01 — High — Improve the existing car pillar

| Field | Recommendation |
| --- | --- |
| Article/page title | Las Vegas Car Accident Attorney |
| Primary keyword | car accident lawyer Las Vegas |
| Secondary keywords | car accident attorney Las Vegas; Las Vegas car accident lawyer; Nevada car accident lawyer |
| Search intent / local relevance | Commercial; injured valley drivers/passengers need representation and clear next steps. |
| Legal sources | L01–L05, L11–L12; preserve existing citations and qualifications. |
| Existing content / action | C1; **Improve existing page**, concentrating on reporting/coverage clarifications and resource links rather than rewriting recently expanded sections. |
| Internal links | Existing UM/UIM, distracted-driving, settlement and truck owners; future Brief 1–3 resources, reciprocal links. |
| SEO opportunity | Actual GSC query exposure; consolidate synonym intent and strengthen helpful navigation. |
| Attorney review | Fee/expense consistency, comparative-fault example, accrual exceptions, firm service/result statements. |

### O02 — High — Improve the existing truck pillar

| Field | Recommendation |
| --- | --- |
| Article/page title | Las Vegas Truck Accident Lawyer |
| Primary keyword | truck accident lawyer Las Vegas |
| Secondary keywords | truck accident attorney Las Vegas; semi-truck accident lawyer; 18-wheeler crash claim Nevada |
| Search intent / local relevance | Commercial; Las Vegas/Clark County truck-crash victims need investigation and representation. |
| Legal sources | T01–T10; L01–L02. |
| Existing content / action | T1; **Improve existing page** with process, applicability, evidence and coverage summaries. |
| Internal links | C1, T2, C4; Brief 4–5 and eventual HOS resource; source-specific citations. |
| SEO opportunity | Clear commercial owner exists, but lacks sourced explanatory depth. Four GSC impressions do not establish its head-term rank. |
| Attorney review | Actual investigation practices, carrier claims experience, regulatory applicability and potentially liable parties. |

### O03 — High — Crash reports (Brief 1)

| Field | Recommendation |
| --- | --- |
| Article title | How to Get a Las Vegas Car Accident Report |
| Primary keyword | Las Vegas car accident report |
| Secondary keywords | Las Vegas accident report; LVMPD crash report request; Nevada Highway Patrol accident report; Henderson crash report |
| Search intent / local relevance | Informational; readers need the correct valley agency and a records workflow. |
| Legal sources | L03; NHP/DMV and agency records sources in §4.3. |
| Existing content / action | C1 has a short overview; **New article** at proposed `/resources/las-vegas-car-accident-report`, retaining the previously proposed slug. |
| Internal links | C1 primary; T1 for truck crashes, UM/UIM for unidentified-driver issues; pillar links back from report section. |
| SEO opportunity | Saved Planner estimate for the related report query plus observed local resource results; distinct procedural intent. |
| Attorney review | SR-1 exception, access eligibility, report use/admissibility, agency instructions that remain blocked. |

### O04 — High — Medical bills during a claim (Brief 2)

| Field | Recommendation |
| --- | --- |
| Article title | Who Pays Medical Bills After a Nevada Car Accident? |
| Primary keyword | who pays medical bills after car accident Nevada |
| Secondary keywords | MedPay Nevada car accident; health insurance after crash; medical bills before settlement Las Vegas |
| Search intent / local relevance | Informational; valley residents and visitors face bills during treatment. |
| Legal sources | L11, L05; CMS and DOI sources. |
| Existing content / action | C1 treatment overview; C4 proceeds/reimbursement; Media's older external insurance column requires a full-text overlap check. **New article**, narrowly about current payment options and documentation, conditional on that check. |
| Internal links | C1 primary, C2 when coverage is insufficient, C4 for settlement distribution; T1 only where relevant. |
| SEO opportunity | Concrete gap and observed local competitor question. Planner value blank; no quantified demand claim. |
| Attorney review | Health-plan reimbursement, provider arrangements, billing responsibility, insured status and no guarantees of financed care. |

### O05 — High — Truck evidence (Brief 4)

| Field | Recommendation |
| --- | --- |
| Article title | What Evidence Matters After a Las Vegas Truck Accident? |
| Primary keyword | truck accident evidence Las Vegas |
| Secondary keywords | truck accident evidence preservation Nevada; ELD records after truck crash; truck black box evidence |
| Search intent / local relevance | Informational; victims may not control carrier-held records or vehicle data. |
| Legal sources | T05–T08; NRCP 34/37/45. |
| Existing content / action | T1 evidence list/FAQ; **New article** explaining records, custodians and lawful preservation. |
| Internal links | T1 primary, Brief 5 for roles, Brief 1 for reports; T1 evidence section links back. |
| SEO opportunity | Distinct investigative task, multiple relevant local results and weak current Max Law detail; volume unknown. |
| Attorney review | Preservation trigger, requests versus orders, device-specific limits, inspection access and sanctions. |

### O06 — High — Truck parties (Brief 5)

| Field | Recommendation |
| --- | --- |
| Article title | Who May Be Liable After a Nevada Commercial Truck Crash? |
| Primary keyword | who is liable for a truck accident in Nevada |
| Secondary keywords | trucking company liability Nevada; truck driver vs carrier liability; sue trucking company Las Vegas |
| Search intent / local relevance | Informational; a valley crash may involve several businesses and policies. |
| Legal sources | T02–T03, T05, T10; L01. |
| Existing content / action | T1/T2 introductions; **New article**, role/evidence analysis, not another truck-lawyer landing page. |
| Internal links | T1 primary, T2 for vans/fleets, Brief 4 for records, C1 for passenger-car claims. |
| SEO opportunity | Observed local company-liability resource and a clear explanation gap; no asserted search volume. |
| Attorney review | Employment/control, direct negligence, leasing, product theories, broker preemption and allocation. |

### O07 — Medium — Rental cars and visitors (Brief 3)

| Field | Recommendation |
| --- | --- |
| Article title | Rental Car Accident in Las Vegas: Insurance and Next Steps |
| Primary keyword | what happens after a rental car accident in Las Vegas |
| Secondary keywords | rental car accident insurance Nevada; Las Vegas tourist car accident; out-of-state driver Nevada crash |
| Search intent / local relevance | Informational; visitors need to preserve Nevada records and understand rental/policy documents after returning home. |
| Legal sources | L03, L09–L11; recheck federal currency before drafting. |
| Existing content / action | C1 visitor sentence; **New article**, one resource combining rental/visitor questions. |
| Internal links | C1 primary, Brief 1, C2, C4 as appropriate; C1 visitor section links back. |
| SEO opportunity | Multiple relevant local competitors; missing rental-specific explanation. More legal review than the first car resource. |
| Attorney review | Financial-responsibility duties, Graves Amendment, passenger issues, insurance priority, damage-waiver/card terms and service. |

### O08 — High — Improve UM/UIM owner

| Field | Recommendation |
| --- | --- |
| Article/page title | Hit by an Uninsured or Underinsured Driver in Las Vegas? |
| Primary keyword | Las Vegas uninsured motorist lawyer |
| Secondary keywords | uninsured driver accident Nevada; underinsured motorist claim; UM UIM coverage Nevada |
| Search intent / local relevance | Commercial/informational; injured valley users need policy review and coverage options. |
| Legal sources | L04–L06. |
| Existing content / action | C2; **Improve existing page**, preserve title/URL ownership rather than create another generic uninsured article. |
| Internal links | C1, Brief 2, later hit-and-run guide; C1 already links C2. |
| SEO opportunity | Existing page is shallow on a well-defined task and already participates in the cluster. |
| Attorney review | Offer/rejection, insured persons, exclusions, stacking, deadlines and releases before UIM pursuit. |

### O09 — Medium — Improve distracted-driving owner

| Field | Recommendation |
| --- | --- |
| Article/page title | Distracted Driving Accident Claims in Las Vegas |
| Primary keyword | Las Vegas distracted driving lawyer |
| Secondary keywords | Nevada texting driving accident; cell phone crash evidence; NRS 484B.165 |
| Search intent / local relevance | Commercial/informational; explain device evidence and Nevada rules for valley collisions. |
| Legal sources | L07; NRCP 34/45 for lawful records access. |
| Existing content / action | C3; **Improve existing page**, not a new texting article. |
| Internal links | C1 and Brief 1; T1 only for an actual truck example. |
| SEO opportunity | Existing GSC exposure and missing legal specificity; avoids split ownership. |
| Attorney review | Exceptions, causation, phone-record access, privacy and unsupported drunk-driving comparisons. |

### O10 — Medium — Improve commercial-vehicle boundary

| Field | Recommendation |
| --- | --- |
| Article/page title | Las Vegas Commercial Vehicle Accident Lawyer |
| Primary keyword | Las Vegas commercial vehicle accident lawyer |
| Secondary keywords | delivery van accident; company car crash; fleet accident claim Nevada |
| Search intent / local relevance | Commercial; work-vehicle victims need business, driver and insurance analysis. |
| Legal sources | T01–T03; L14 for rideshare distinction. |
| Existing content / action | T2; **Improve existing page**; retain bus/van/fleet scope and cross-link large trucks. |
| Internal links | T1, C1, Brief 5, C4. |
| SEO opportunity | Existing distinct owner and historical Planner evidence; clearer boundaries reduce overlap risk. |
| Attorney review | Employee versus contractor, special carrier classes, company-control facts and TNC exclusions. |

### O11 — Medium — Truck fatigue/HOS resource

| Field | Recommendation |
| --- | --- |
| Article title | Truck Driver Hours and Fatigue: Nevada Crash Claims |
| Primary keyword | truck driver hours of service Nevada accident |
| Secondary keywords | fatigued truck driver crash Las Vegas; FMCSA hours of service; ELD hours records |
| Search intent / local relevance | Informational; explain a possible factor in freight collisions without asserting corridor statistics. |
| Legal sources | T01, T02, T04, T06–T07. |
| Existing content / action | T1 mentions HOS; **New article**, later than core evidence/party resources. |
| Internal links | T1 primary and Brief 4; T1 links back from fatigue summary. |
| SEO opportunity | Distinct regulatory question observed in local truck content; demand unquantified. |
| Attorney review | Rule applicability, short-haul/sleeper exceptions and whether evidence proves fatigue or a violation. |

### O12 — Medium — Hit-and-run victim workflow

| Field | Recommendation |
| --- | --- |
| Article title | Injured in a Las Vegas Hit-and-Run: Reports, Evidence and Coverage |
| Primary keyword | what to do after hit and run Las Vegas |
| Secondary keywords | Nevada hit and run insurance claim; unidentified driver injury; police report hit and run |
| Search intent / local relevance | Informational; fast identification of witnesses/cameras and appropriate reports. |
| Legal sources | L03, L05–L06. |
| Existing content / action | C1 list, C2 coverage overview; **New article** only for the victim workflow, not another UM/UIM overview. |
| Internal links | C1 primary, C2 coverage owner, Brief 1; contextual return link from C2. |
| SEO opportunity | Search results show relevant coverage questions; distinct from criminal defense intake. |
| Attorney review | Unknown-driver contact/reporting conditions, policy notice and no-contact cases. |

### O13 — Medium — Drunk-driving civil victim questions

| Field | Recommendation |
| --- | --- |
| Article title | Injured by a Drunk Driver in Nevada: Civil Claim Questions |
| Primary keyword | Nevada drunk driving accident civil claim |
| Secondary keywords | Las Vegas drunk driver injury claim; DUI victim compensation; Nevada punitive damages DUI crash |
| Search intent / local relevance | Informational; injured valley users need the difference between prosecution and compensation. |
| Legal sources | L08 and L02. |
| Existing content / action | C1 list; DUI defense has a separate audience. **New article**, later pending review. |
| Internal links | C1 primary, C2 if coverage matters, C4 for releases. Do not funnel victims into DUI-defense content. |
| SEO opportunity | Civil-victim gap and observed Nevada competitor coverage; no local-volume claim. |
| Attorney review | Conflicts/intake routing, proof, punitive damages, alcohol-service immunity and case-specific parallel proceedings. |

### O14 — Low — Maintain sourced statistics

| Field | Recommendation |
| --- | --- |
| Article/page title | Las Vegas & Nevada Car Accident Statistics |
| Primary keyword | Las Vegas car accident statistics |
| Secondary keywords | Clark County crash data; Nevada traffic fatalities |
| Search intent / local relevance | Informational/data; distinguish local from statewide measures for valley readers. |
| Legal sources | Official NHTSA/NDOT/OTS source links already in C5; L01 only if discussing why counts do not prove individual fault. |
| Existing content / action | C5; **Improve existing page** only when a source/data refresh is verified. |
| Internal links | C1 primary, C3/C2 as relevant; add a truck link only alongside verified truck-specific data. |
| SEO opportunity | Existing informational owner and small observed exposure; maintain accuracy instead of fragmenting by year. |
| Attorney review | No causal/legal inferences from aggregate counts; final versus preliminary and geography labels. |

### O15 — Low — Maintain settlement owner and connect claim stages

| Field | Recommendation |
| --- | --- |
| Article/page title | Insurance Settlements & Checks |
| Primary keyword | Nevada injury settlement process |
| Secondary keywords | car accident settlement check; settlement disbursement Nevada; gross versus net settlement |
| Search intent / local relevance | Informational/commercial; car/truck clients need release and proceeds explanations. |
| Legal sources | [Nevada RPC 1.2, 1.5, 1.15](https://www.leg.state.nv.us/CourtRules/RPC.html), CMS; L12 only for narrowly added claims-handling context. |
| Existing content / action | C4; **Improve existing page** by selective cross-links and maintenance, not a competing article. |
| Internal links | Existing C1 reciprocal link; T1 where relevant; Brief 2 for bills during treatment. |
| SEO opportunity | Adequate existing depth; clarify journey from pending bills to release/distribution. |
| Attorney review | Engagement terms, liens, trust-fund duties and first-party/third-party timing distinctions. |

**Deferred after comparing existing coverage:** a generic “what to do after a crash,” generic two-year deadline article, another broad comparative-fault article, annual statistics duplicates, average-settlement calculators, stand-alone black-box/ELD/preservation articles with overlapping intent, separate rental/visitor pages, and city/keyword variants. The earlier proposed `/resources/nevada-car-accident-fault` remains an unimplemented brief; this scoped audit recommends strengthening C1 first and reconsidering the longer resource only if it answers a demonstrably distinct task. This does not erase prior research or authorize changing the existing keyword map.

## 6. Cluster A: Las Vegas car accident lawyer

**Commercial pillar:** C1 `/practice/car-accidents` owns all primary car-lawyer/attorney word-order variants, including the statewide variant where relevant. Henderson/Summerlin/North Las Vegas references belong in useful service and procedural context, not competing boilerplate landing pages.

| Support owner | Article/page → pillar | Pillar → support | Lateral link when useful |
| --- | --- | --- | --- |
| Brief 1 report guide | Context: how records support a claim; anchor such as “help with a Las Vegas car accident claim.” | Existing records section → “requesting your crash report.” | Brief 2 for billing records; T1 for truck investigations. |
| Brief 2 pending medical bills | After explaining possible payers → C1 representation. | Medical documentation/treatment section → “paying medical bills while a claim is pending.” | C2 for coverage gaps; C4 for proceeds/reimbursement. |
| Brief 3 rental/visitor guide | Rental injury claim section → C1. | Visitor/records passage → “rental-car and visitor crash questions.” | Brief 1 and C2. |
| C2 UM/UIM (existing) | Keep existing contextual car link. | Keep existing related link; add contextual coverage link only where useful. | Brief 2 and later hit-and-run workflow. |
| C3 distracted driving (existing) | Keep existing car-claims link. | Existing collision-type link already works. | Brief 1 for records. |
| C4 settlement (existing) | Keep existing car representation link. | Existing insurance-negotiation link already works. | Brief 2 with clear treatment-versus-proceeds boundary. |
| C5 statistics (existing) | Keep current car-service bridge. | Optional concise resources list, not a claim that statistics establish fault. | C3/C2 as already implemented. |
| Later hit-and-run/DUI-victim resources | Each returns to C1 after its specific explanation. | Only link after the article is approved and live. | UM/UIM or settlement where the question requires it. |

Use descriptive, varied anchors. One natural contextual pillar link usually suffices; do not force the exact commercial phrase into every paragraph. Do not link proposed slugs from production until the destinations exist and pass checks.

## 7. Cluster B: Las Vegas truck accident lawyer

**Verified commercial pillar:** T1 `/practice/truck-accidents`, 200, self-canonical, H1 “Las Vegas Truck Accident Lawyer.” Keep semi-truck/tractor-trailer/18-wheeler attorney variants on this owner. T2 remains the distinct bus/van/fleet commercial page.

| Support owner | Article/page → pillar | Pillar → support | Lateral link when useful |
| --- | --- | --- | --- |
| Brief 4 evidence | After explaining time-sensitive records → T1 investigation help. | Expand existing evidence section and link “truck crash evidence and preservation.” | Brief 5 for which party holds records; Brief 1 for public reports. |
| Brief 5 parties | When describing legal investigation → T1. | Liability summary → “who may be responsible for a truck crash.” | T2 for non-heavy fleet vehicles; Brief 4 for records. |
| Later HOS/fatigue guide | After the applicability explanation → T1. | Fatigue/HOS summary → later guide once approved. | Brief 4 for logs/device records. |
| T2 commercial vehicle (existing) | Existing large-truck link stays. | Existing bus/van/fleet distinction and return link stay. | Brief 5 where company responsibility is relevant. |
| Shared car resources | Reports and medical-bill resources can mention truck cases and link T1 in that context. | T1 can link these shared guides instead of commissioning truck-only copies. | C4 for offers/releases and proceeds. |

The connection between clusters is reader task: C1 → T1 for heavy trucks; T1 → C1 for ordinary car-claim context; T1 ↔ T2 for vehicle classification; shared report/medical resources support both where useful. Maintenance and insurance-class summaries start on T1. Expand into separate resources later only if their questions are distinct and evidence supports the work.

## 8. Proposed 30-day plan

This is a **post-approval work plan**, not authorization to draft, implement or publish now. Day 1 begins when the firm approves the audit scope. If starting November 14, the 30-day window ends December 13, 2026. Dates are illustrative; attorney review controls release timing. Target **three new resources at most**, not daily publishing. The rental and truck-party briefs remain ready for the next cycle unless review capacity and evidence justify replacing a planned item.

| Days | Work and accountable role | Concrete output / release condition |
| --- | --- | --- |
| 1–3 | SEO lead + Corrina: confirm priorities, reconcile historical orphan/backlink URLs, inspect GSC query-to-page relationships. | Approved ownership map; preserve existing release baselines; select the first three resources. Do not infer URLs from separate GSC tables. |
| 4–6 | Legal researcher + Corrina: review T01–T10, UM/UIM and reporting qualifications; verify blocked agency instructions manually. | Source checklist with effective dates; resolve high-risk statements and actual firm investigation/fee descriptions. |
| 7–10 | Editor + developer, after approval: improve T1 and narrowly improve C1/C2. | Reviewed pillar/coverage updates with accurate citations and functioning existing links; release only after Corrina’s applicable legal review and ordinary deployment approval. |
| 11–14 | Editor + Corrina: develop Brief 1; developer prepares the minimal resource template/index/sitemap support after implementation authorization. | First report resource may publish only after agency/source and technical checks. Keep C1’s short overview; add reciprocal link. |
| 15–18 | Editor + Corrina: develop Brief 4 truck evidence. | Second resource, accurate category-specific retention and preservation explanation; T1 reciprocal link. |
| 19–22 | Editor + Corrina: develop Brief 2 pending medical bills. | Third resource, limited overlap with C4/C2; add contextual links from C1 and applicable truck content. |
| 23–25 | Editor + Corrina: improve C3/T2 if review capacity permits; maintain C4/C5. | Sourced distracted-driving and vehicle-boundary refinements; refresh statistics only with verified data. Otherwise defer. |
| 26–28 | QA + SEO: crawl approved changes, inspect rendered HTML/schema/mobile layouts and actual GSC indexing status. | No broken resource/legacy links; correct canonicals and dates; sitemap includes only live approved content. |
| 29–30 | SEO lead + firm: review early impressions, inquiries and production issues; recheck rental federal source and Brief 5 doctrine. | Next-cycle decision on rental/party resources; retain work if review incomplete. No conclusions about ranking impact from a few days of data. |

Keep the existing November 8 release cohort separate from future content cohorts. Review each new cohort after complete 28-day reporting windows where feasible, with a later comparison as data accumulates. Track page/query clicks and impressions, contextual-link engagement and qualified car/truck inquiries using available consent-compliant measurement. Do not collect accident facts or health information in analytics. GSC average position is descriptive, and submissions/calls are not automatically qualified leads.

## 9. Five detailed new-article briefs

These are planning briefs, **not finished articles**. All proposed URLs are absent from the current route architecture. Before approving a slug, check GSC/backlinks for a historical equivalent. Target lengths, if needed for editing, should follow the task; no minimum length or keyword-density rule is recommended.

### Brief 1 — Crash-report retrieval

| Item | Specification |
| --- | --- |
| SEO title | How to Get a Las Vegas Car Accident Report \| Max Law |
| Meta description | Find the agency that handled your Las Vegas crash, learn what to prepare for a report request, and understand how retrieval differs from DMV reporting. |
| URL slug | `/resources/las-vegas-car-accident-report` |
| Primary keyword | Las Vegas car accident report |
| Secondary keywords | LVMPD accident report request; NHP crash report; Henderson crash report; North Las Vegas police accident report; Nevada SR-1 |
| Intent / audience | Informational retrieval task; residents, passengers and visitors who need records after a valley crash. |
| Scope boundary | Requesting an existing report is primary. Include a short reporting-duty distinction, not a second all-purpose crash checklist or fault article. |

Recommended structure:

1. H1: How to Get a Las Vegas Car Accident Report. Short answer: start with the investigating agency on your paperwork.
2. H2: Which agency handled the crash? Table for LVMPD, NHP, Henderson and North Las Vegas; do not route solely by mailing address or road nickname.
3. H2: What to gather before requesting records. Incident number if available, crash date, involved person details and agency-specific eligibility/identity requirements; protect sensitive data.
4. H2: Official request routes. Link directly to agency pages; distinguish official vendors from unrelated paid intermediaries. Quote fees and timelines only after current agency verification.
5. H2: What if no officer investigated? Explain the SR-1 distinction, threshold and qualified exception using L03; insurer notification is a separate task.
6. H2: What a crash report can and cannot establish. It may assist an investigation; do not call it a conclusive fault decision or guarantee admissibility.
7. H2: Records for visitors and truck crashes. Keep copies after returning home; a public report does not replace carrier-held evidence.
8. H2: Questions about obtaining records for an injury claim. Restrained representation bridge.

**Verified legal references and official sources:** L03, [NRS 484E.070](https://www.leg.state.nv.us/NRS/NRS-484E.html#NRS484ESec070), [DMV SR-1](https://dmv.nv.gov/pdfforms/sr1.pdf), [NHP instructions](https://www.nhp.nv.gov/crashes-citations/crash-report-request/), and the agency destinations in §4.3. NHP currently displays a $10 fee and 7–14-day availability, but recheck before publication and do not universalize that to other agencies. The other agencies’ full procedural details remain a verification dependency because of 403 responses.

**Internal links:** C1 primary after explaining the claim use; T1 in the truck-records passage; future Brief 4 only once live. C1 links back from “Records After a Las Vegas Crash.”

**CTA:** “If you were injured and need help understanding which records may support your claim, request a free consultation with Max Law.” Link `/contact`; phone `(702) 778-8883`. Do not imply free report fulfillment or that requesting records requires hiring the firm.

**Questions for Corrina:** Does the agency/eligibility workflow reflect current practice? How should an incomplete officer report affect SR-1 guidance? What report-use/admissibility qualifications belong here? Which victim/representative records can be requested, and through what secure intake process?

### Brief 2 — Medical bills while the claim is pending

| Item | Specification |
| --- | --- |
| SEO title | Who Pays Medical Bills After a Nevada Car Accident? |
| Meta description | Understand health insurance, MedPay, billing arrangements, and possible repayment issues while a Nevada car accident claim is pending. |
| URL slug | `/resources/medical-bills-after-nevada-car-accident` |
| Primary keyword | who pays medical bills after car accident Nevada |
| Secondary keywords | MedPay Nevada; health insurance after car accident; medical bills before settlement Las Vegas; uninsured driver medical bills |
| Intent / audience | Informational; injured people receiving treatment bills before a liability claim resolves. |
| Scope boundary | Payment and documentation during treatment. C4 owns the release, gross/net proceeds and disbursement explanation. Review Media's external insurance column before draft approval; its full content was inaccessible during the audit. |

Recommended structure:

1. H1: Who Pays Medical Bills After a Nevada Car Accident? Separate immediate billing from eventual recovery.
2. H2: Why a liability claim and a current medical bill are different. Explain uncertainty without asserting every insurer follows one payment sequence.
3. H2: Possible payment sources. Comparison table: health plan, purchased MedPay, other applicable benefits, provider arrangements, liability recovery. For each, list the document to review and what remains uncertain.
4. H2: Nevada MedPay offers and purchased benefits. Explain L11; distinguish a mandatory offer from mandatory purchase.
5. H2: What if the driver lacks sufficient insurance? Brief coverage bridge to C2; avoid copying its UM/UIM explanation.
6. H2: Bills, liens and reimbursement are different. Short overview; identify Medicare-specific process and direct readers to C4 for proceeds issues.
7. H2: Documents and questions to bring to a consultation. Declarations, benefits statements, itemized bills, payment records and letters; no online upload of sensitive records without a secure firm-approved process.
8. H2: Common questions. What if I have no health insurance? Will bills stop while the claim is pending? What if fault is disputed? Answers must remain fact/policy dependent.

**Verified legal references and official sources:** L11 [NRS 687B.145(3)](https://www.leg.state.nv.us/NRS/NRS-687B.html#NRS687BSec145); [DOI coverage guide](https://doi.nv.gov/uploadedFiles/doi.nv.gov/Content/Consumers/Automobile_Insurance/2024_Auto_Guide_FINAL.pdf); [CMS conditional-payment guidance under 42 USC 1395y(b)](https://www.cms.gov/medicare/coordination-benefits-recovery/attorney-services/conditional-payment-information). L05 provides UM/UIM references. Any specific hospital-lien, Medicaid, ERISA or workers’ compensation rule needs additional primary research and legal approval before inclusion; this brief does not assert such rules are verified.

**Internal links:** C1 primary; C2 for inadequate coverage; C4 for settlement proceeds; T1 only in a short truck-crash example. Add return links from C1’s treatment section and C4’s medical-bills section.

**CTA:** Invite a free consultation about available coverage and claim documentation, with `/contact` and the verified firm phone. No promise the firm pays bills, arranges guaranteed lien treatment or obtains a particular reduction.

**Questions for Corrina:** How does the firm accurately explain provider arrangements? Which reimbursement/benefit issues should be omitted until policy-specific review? What can be said about collections and billing obligations without implying automatic protection? Which firm-approved medical-care and secure-record practices may be described?

### Brief 3 — Rental cars and visitors

| Item | Specification |
| --- | --- |
| SEO title | Rental Car Accident in Las Vegas: Insurance & Next Steps |
| Meta description | Learn what records to keep after a Las Vegas rental car crash, which insurance documents matter, and what visitors should ask before signing a release. |
| URL slug | `/resources/rental-car-accident-las-vegas` |
| Primary keyword | what happens after a rental car accident in Las Vegas |
| Secondary keywords | Nevada rental car accident insurance; tourist car accident Las Vegas; out-of-state driver Nevada crash; rental collision damage waiver |
| Intent / audience | Informational; renters, people struck by rental vehicles and visitors who may return home. |
| Scope boundary | One rental/visitor workflow, not a separate rental-car-lawyer service page or duplicate generic visitor guide. |

Recommended structure:

1. H1: Rental Car Accident in Las Vegas: Insurance and Next Steps. Clarify which of the reader’s roles matters.
2. H2: Immediate documentation and notices. Cross-reference official crash duties; notify relevant parties according to policy/agreement rather than inventing a universal notice period.
3. H2: Which documents and coverages may matter? Rental agreement, authorized-driver terms, personal policy, supplemental liability, damage waiver, card benefit. Separate third-party injury protection from rental-vehicle damage.
4. H2: When may a rental business be responsible? Explain state financial responsibility and federal ownership protection together, after resolving L09’s currency and interpretation questions.
5. H2: Why insurance priority needs document review. Do not supply an automatic payment order.
6. H2: Returning home after a Nevada crash. Records, correspondence and follow-up; jurisdiction/service and governing-law questions for counsel.
7. H2: Before accepting a release or paying a rental demand. Link C4 for release scope and deductions; do not duplicate the full settlement guide.
8. H2: What to bring to a consultation. Documents, photos, incident information, coverage letters and billing demands.

**Verified legal references and official sources:** L09 [NRS 482.305](https://www.leg.state.nv.us/NRS/NRS-482.html#NRS482Sec305), [49 USC 30106 GPO text](https://www.govinfo.gov/content/pkg/USCODE-2024-title49/html/USCODE-2024-title49-subtitleVI-partA-chap301-subchapI-sec30106.htm), L10 [NRS 14.070](https://www.leg.state.nv.us/NRS/NRS-014.html#NRS014Sec070), L03 and L04. The federal full-text currency gap is an explicit pre-drafting review item. Do not cite a competitor’s policy-priority case summary as an independently verified holding.

**Internal links:** C1 primary, Brief 1, C2 if insurance gaps apply, C4 for releases. C1’s visitor paragraph links back once live.

**CTA:** Offer a free consultation to review the crash facts and identify relevant rental/insurance documents. No promise that rental insurance, a card benefit or another driver’s policy covers every loss.

**Questions for Corrina:** Which current Nevada cases control policy priority? How do passenger provisions and federal preemption interact? Has federal rental law changed after the accessible code edition? Which damage-waiver/card-benefit distinctions are accurate without reviewing a contract? What limitations apply to representing visitors after they return home?

### Brief 4 — Truck evidence and preservation

| Item | Specification |
| --- | --- |
| SEO title | Las Vegas Truck Accident Evidence: What to Preserve |
| Meta description | Learn how truck logs, ELD records, vehicle data, maintenance files, and video may help a Nevada crash claim, and why early preservation matters. |
| URL slug | `/resources/truck-accident-evidence-nevada` |
| Primary keyword | truck accident evidence Las Vegas |
| Secondary keywords | truck evidence preservation Nevada; ELD crash records; truck ECM evidence; carrier maintenance records |
| Intent / audience | Informational; injured people who need to understand evidence beyond the public police report. |
| Scope boundary | One evidence resource covering logs, ELD, event data, video and preservation. Do not split those into competing articles now. |

Recommended structure:

1. H1: What Evidence Matters After a Las Vegas Truck Accident? Explain that records serve different questions and may have different custodians.
2. H2: Evidence you may already have. Safe scene photos, witness contacts, report identifiers, damage and medical documentation.
3. H2: Evidence held by carriers and third parties. Table of record type, possible custodian, investigative purpose and verified qualification.
4. H2: ELD, ECM/EDR and dashcam data are different. Do not assume all trucks generate or retain identical information.
5. H2: What retention rules actually cover. Duty logs/supporting records, ELD backups, maintenance categories and accident register; cite each rule separately.
6. H2: Preservation versus obtaining records. Counsel’s requests, inspections, party discovery and subpoenas; no suggestion an injured person may access carrier accounts or equipment without permission.
7. H2: What happens if evidence is lost? Explain qualified NRCP 37(e) framework, not automatic sanctions.
8. H2: Preparing for legal review. Bring what is available promptly; do not wait to obtain the entire carrier file before asking for help.

**Verified legal references and official sources:** T05 [49 CFR Part 396](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396); T06 [395.8(k)](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.8); T07 [395.22(i)](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-B/section-395.22); T08 [390.15](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-390/subpart-B/section-390.15) and [NRCP 34/37(e)/45](https://www.leg.state.nv.us/CourtRules/NRCP.html). Keep retention minima distinct from litigation duties and device-specific overwrite behavior.

**Internal links:** T1 primary, Brief 5 when live, Brief 1 for public reports; T2 only for a non-heavy fleet example. T1’s evidence section links back.

**CTA:** Invite a free consultation about the available evidence and appropriate preservation steps. No guarantee records still exist, a letter compels production, or the firm has already preserved this reader’s evidence.

**Questions for Corrina:** When does the preservation duty arise in the intended examples? What can the firm accurately describe about its response/experts? Which records require consent, discovery or subpoenas? What qualifies any discussion of lost physical evidence versus ESI? Should additional Nevada preservation case law be cited?

### Brief 5 — Truck-crash parties and liability

| Item | Specification |
| --- | --- |
| SEO title | Who May Be Liable for a Nevada Truck Accident? |
| Meta description | Explore how a driver, carrier, maintenance provider, cargo loader, or manufacturer may be investigated after a Nevada truck crash, and what evidence matters. |
| URL slug | `/resources/truck-accident-liability-nevada` |
| Primary keyword | who is liable for a truck accident in Nevada |
| Secondary keywords | trucking company liability Nevada; sue a trucking company Las Vegas; truck driver employer liability; multiple parties truck crash |
| Intent / audience | Informational; people unsure whose conduct and business relationships matter. |
| Scope boundary | Explain the investigation of roles, not a second commercial truck page, exhaustive litigation manual or presumption all listed parties should be sued. |

Recommended structure:

1. H1: Who May Be Liable After a Nevada Truck Accident? Start with conduct, causation and evidence, not the company name on a trailer alone.
2. H2: Driver negligence and carrier responsibility. Distinguish driving conduct, employer responsibility and a company’s own conduct.
3. H2: Other possible parties. Role–potential issue–supporting records table for maintainer, loader and product manufacturer; avoid conclusions from role alone.
4. H2: What if the driver is called an independent contractor? Present the question for legal review; do not prescribe a universal control test without approved Nevada authority.
5. H2: What federal trucking rules can contribute. Brief applicability and qualification/maintenance/cargo references; rules do not replace proof of the civil claim.
6. H2: Multiple defendants, fault and insurance. Keep allocation and available coverage distinct; no promise more parties means more recovery.
7. H2: How the investigation identifies parties. Contracts, dispatch, qualification and maintenance records, loading information and vehicle identification; link Brief 4.
8. H2: Questions to bring to a truck-claim consultation. Crash facts and known participants are enough to begin a discussion.

**Verified legal references and official sources:** T02–T03 [NRS 41.130](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec130), [49 CFR 390.11](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-390/subpart-B/section-390.11), [391.11](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-391/subpart-B/section-391.11); T05 maintenance; T10 [393.100](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-I/section-393.100); L01 allocation reference. Corrina must approve common-law authorities, contractor/leasing analysis and any broker discussion before inclusion.

**Internal links:** T1 primary, Brief 4 for evidence, T2 for fleet/van distinctions, C1 for passenger-car representation. T1’s liability summary links back.

**CTA:** Offer a free consultation to discuss the known facts and possible investigation. Do not promise that a carrier, broker, insurer or manufacturer will be held liable.

**Questions for Corrina:** Which Nevada decisions support each employment/direct-negligence theory? Should brokers be excluded until a current preemption review? How should sealed loads, leased equipment and product claims be qualified? Which factual examples reflect the firm’s actual work and can be published with permission?

## 10. Next.js implementation review and recommended next steps

### 10.1 Current architecture

Inspected [package.json](package.json) declares Next `^16.4.5`, React `^19.2.0`. This is an App Router project with static practice routes, not an established blog/CMS. Read the installed Next guides before recommendations: `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`, `01-app/02-guides/json-ld.md`, and `01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`. The installed guides, not assumptions about another Next version, should govern eventual implementation.

| Area | Verified current behavior | Eventual implementation recommendation |
| --- | --- | --- |
| Server-rendered HTML | Full car/truck headings, content, metadata and JSON-LD present before client JavaScript. JavaScript-disabled car rendering retained substantive content. Car’s dynamic import has no `ssr:false`; the file named `CarAccidentsPageClient` currently has no `use client` directive. | Use server page components for article text and metadata. Keep interactive UI narrowly scoped. A filename containing “Client” alone does not establish client-only rendering. |
| Routes | Existing practice routes have `page.tsx`; no resources/article collection or dynamic article route found. | After approval, five static `/resources/<slug>/page.tsx` routes plus shared presentation/data are sufficient for this scale. Do not add a CMS solely for five resources. Choose a maintainable content model before coding. |
| Metadata | Core pages have absolute unique titles and descriptions; root title template exists. Truck inherits broad meta keywords, while its actual title/H1 and service schema target trucks. | Explicit article metadata, correct canonical/OG URL and descriptive image. Avoid repeated title suffixes. Meta-keyword changes are not a substantive SEO priority. |
| Canonicals/indexing | Seven core pages self-canonical, indexable; robots allows public routes. | Give every approved resource its own canonical. Do not canonical distinct informational articles to service pillars. Drafts remain unpublished; ensure production only exposes approved indexable content. |
| Structured data | [PracticeStructuredData.tsx](src/app/practice/PracticeStructuredData.tsx) builds firm + Service + WebPage/FAQ graph; [structured-data.ts](src/lib/structured-data.ts) escapes `<` in JSON-LD. Existing article-like OG type is not Article schema. | Add `Article` or `BlogPosting` for actual resources, with headline, canonical identity, publisher, real author, actual dates and suitable image where available. Reuse firm identity; do not label every article a separate LegalService. Preserve safe serialization. [Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article). |
| FAQs | Car/truck visible questions have matching FAQPage data. | Keep helpful visible answers. Google documents that FAQ rich results ceased appearing beginning May 7, 2026; do not promise them or prioritize FAQ markup as a ranking tactic. [Google update log](https://developers.google.com/search/updates). |
| Breadcrumbs | Visible trails and BreadcrumbList on core practice pages; shared [Breadcrumbs.tsx](src/app/components/Breadcrumbs.tsx). | Home → Resources → specific article, with real URLs and a crawlable Resources index. Preserve corresponding visible/schema labels. |
| Sitemap | [sitemap.ts](src/app/sitemap.ts) includes eight main entries and discovers immediate practice/criminal-defense child pages. Live sitemap has 36 URLs. No fabricated `lastModified`. | Add published resources and their index explicitly or through a reliable published-content registry. A future `/resources` folder will not automatically be included by the current implementation. Use genuine material-update dates only. |
| Internal links | Existing hubs, practice menu and contextual relationships make pillars discoverable. | Resource index plus contextual reciprocal links in §§6–7; no dead links to briefs and no all-to-all keyword link block. |
| Attribution | Root metadata names the firm; C1 links Marc’s biography. No per-page reviewed-by/date system. | Store real author identity, verification date, publication date, substantive update date and approval status separately. Publish a reviewer name/credentials only after that person actually reviews and authorizes attribution. Corrina’s workflow review is not automatically a public attorney byline. |
| Mobile/performance | At 390 × 844, both pillars had one H1, correct canonical/title, no horizontal overflow and no captured JS exceptions. Main call/contact buttons were roughly 44–50 px high; one inline truck phone link was 32 px high. Practice menu fit viewport. | Preserve readable layouts and check inline targets, keyboards, anchor scrolling and content-visibility behavior. Do not turn off deferred rendering based solely on an `innerText` count. Run representative mobile performance checks after implementation. |
| Loading cost | Root layout preloads a courthouse homepage image on all routes; practice pages share navigation/footer code. Analytics/chat loaders depend on consent. | Measure whether the global homepage preload competes with practice/resource loading before altering it. Test consent-accepted loading too. Single fresh-state browser LCP observations around 0.37–0.39 seconds were unthrottled local lab readings, **not field CWV or a performance score**. |

### 10.2 Acceptance checks for later authorized work

For each approved resource, verify successful 200 response, one descriptive H1, original substantive server HTML with JavaScript disabled, correct title/description/self-canonical and OG URL, truthful article/breadcrumb JSON-LD, real source links and honest dates/attribution. Confirm the resource and return links resolve, the published sitemap includes it, and no legacy accident redirect regresses. Check mobile reading and navigation at representative widths, including after consent and when following in-page anchors.

Use the existing SEO/migration checks where relevant and targeted browser checks for the article template. Validate JSON-LD with the existing tooling and an appropriate structured-data validator; do not assume valid schema guarantees search display. A source/legal review is distinct from a technical test.

### 10.3 Recommended next steps

1. Review this audit with Corrina; approve the ownership decisions and select a realistic first three-resource cycle. Resolve the legal/source dependencies listed in the briefs.
2. Check actual GSC query-to-page relationships for car/truck terms and reconcile known historical accident URLs before approving new slugs. Continue using historical Planner evidence with its documented location provenance; a blank metric is not a veto or proof of demand.
3. Authorize a separate implementation/drafting phase if desired. Begin with T1’s sourced expansion, focused C1/C2 refinements and the minimal resource architecture; preserve existing adequate content.
4. Draft only after that authorization, secure Corrina’s actual review, then perform technical QA and normal release approval. Publish only reviewed articles and true review/publication dates.
5. Measure complete cohorts and qualified inquiries over suitable windows. Reprioritize from actual evidence; make no ranking, traffic or recovery promises.

## 11. Crawl evidence appendix

The following metadata and heading inventory is captured from production HTML on the audit date. It is descriptive source evidence, not proposed copy. Core page details and contextual-page metadata follow.

### /practice/car-accidents
Live URL: [/practice/car-accidents](https://www.maxlawnv.com/practice/car-accidents). Source: [page.tsx](src/app/practice/car-accidents/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/car-accidents`.
**Title:** Las Vegas Car Accident Attorney | Saggese & Associates
**Meta description:** Injured in a Las Vegas car accident and not at fault? Talk with a car accident attorney about medical treatment, insurance claims, and compensation.
**Headings in source order:**
- H1: Las Vegas Car Accident Attorney
- H2: Car Accident Attorney for Injured Las Vegas Drivers
- H3: What to Do After a Las Vegas Crash
- H3: Records After a Las Vegas Crash
- H3: Common Types of Car Accidents We Handle
- H3: Insurance, Fault, and Evidence
- H3: When Fault Is Disputed
- H4: Free Consultation Available
- H2: How the Firm Builds a Car Accident Claim
- H3: Medical Documentation
- H3: Investigation
- H3: Insurance Negotiation
- H3: Litigation Readiness
- H2: Compensation and Supporting Records
- H2: Why Saggese & Associates
- H2: Preparing for a Car Accident Consultation
- H3: Attorney Fees and Case Expenses
- H2: Car Accident Questions
- H3: Can you help me find medical treatment after a car accident?
- H3: What if I was not at fault for the crash?
- H3: How much does a car accident consultation cost?
- H2: Legal and Local Resources
- H3: Take Action Now
- H3: Related Practice Areas

**Structured data types:** BreadcrumbList, LegalService, Service, FAQPage.

### /practice/truck-accidents
Live URL: [/practice/truck-accidents](https://www.maxlawnv.com/practice/truck-accidents). Source: [page.tsx](src/app/practice/truck-accidents/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/truck-accidents`.
**Title:** Las Vegas Truck Accident Lawyer | Saggese & Associates
**Meta description:** Las Vegas truck accident lawyer for semi-truck, tractor-trailer, 18-wheeler, and large commercial truck crash claims. Free consultation.
**Headings in source order:**
- H1: Las Vegas Truck Accident Lawyer
- H2: Truck Accident Case Factors
- H2: How we help
- H2: Truck Accident Questions
- H3: What evidence can matter after a Las Vegas truck accident?
- H3: Is a semi-truck crash different from a commercial vehicle accident claim?
- H3: What if a truck accident caused a brain or spine injury?

**Structured data types:** BreadcrumbList, LegalService, Service, FAQPage.

### /practice/commercial-vehicle-accidents
Live URL: [/practice/commercial-vehicle-accidents](https://www.maxlawnv.com/practice/commercial-vehicle-accidents). Source: [page.tsx](src/app/practice/commercial-vehicle-accidents/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/commercial-vehicle-accidents`.
**Title:** Las Vegas Commercial Vehicle Accident Lawyer | Saggese & Associates
**Meta description:** Las Vegas commercial vehicle accident lawyer handling bus, van & fleet crashes with multi-party liability. Free consultation (702) 778‑8883.
**Headings in source order:**
- H1: Las Vegas Commercial Vehicle Accident Lawyer
- H2: Commercial Vehicle Case Factors
- H3: How we help

**Structured data types:** BreadcrumbList, LegalService, Service, WebPage.

### /practice/underinsured-and-uninsured-accidents
Live URL: [/practice/underinsured-and-uninsured-accidents](https://www.maxlawnv.com/practice/underinsured-and-uninsured-accidents). Source: [page.tsx](src/app/practice/underinsured-and-uninsured-accidents/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/underinsured-and-uninsured-accidents`.
**Title:** Las Vegas Uninsured Motorist Lawyer | Saggese & Associates
**Meta description:** Las Vegas uninsured & underinsured motorist (UM/UIM) accident lawyer helping maximize recovery when coverage is limited. Free consultation (702) 778‑8883.
**Headings in source order:**
- H1: Las Vegas Uninsured Motorist Lawyer
- H2: Facts about uninsured/underinsured drivers
- H2: How we help

**Structured data types:** BreadcrumbList, LegalService, Service, WebPage.

### /practice/cell-phone-related-accidents
Live URL: [/practice/cell-phone-related-accidents](https://www.maxlawnv.com/practice/cell-phone-related-accidents). Source: [page.tsx](src/app/practice/cell-phone-related-accidents/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/cell-phone-related-accidents`.
**Title:** Las Vegas Distracted Driving Lawyer | Saggese & Associates
**Meta description:** Las Vegas distracted driving & cell phone accident lawyer preserving evidence to prove negligence. Free consultation (702) 778‑8883.
**Headings in source order:**
- H1: Las Vegas Distracted Driving Accident Lawyer
- H2: An Experienced Firm to Hold Negligent Parties Accountable
- H2: How we help

**Structured data types:** BreadcrumbList, LegalService, Service, WebPage.

### /practice/insurance-settlements-and-checks
Live URL: [/practice/insurance-settlements-and-checks](https://www.maxlawnv.com/practice/insurance-settlements-and-checks). Source: [page.tsx](src/app/practice/insurance-settlements-and-checks/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/insurance-settlements-and-checks`.
**Title:** Las Vegas Insurance Settlement Lawyer | Saggese & Associates
**Meta description:** Las Vegas insurance settlement lawyer negotiating fair payouts, lien reduction & proper disbursement. Free consultation (702) 778‑8883.
**Headings in source order:**
- H1: Insurance Settlements & Checks
- H2: Before Accepting an Offer or Signing a Release
- H2: Gross Settlement and the Client's Share
- H2: Medical Bills, Liens, and Reimbursement Claims
- H2: Why Payment and Distribution Timing Can Differ
- H2: Questions to Ask About a Proposed Settlement
- H2: How we help
- H2: Settlement Resources

**Structured data types:** BreadcrumbList, LegalService, Service, WebPage.

### /practice/car-accident-statistics
Live URL: [/practice/car-accident-statistics](https://www.maxlawnv.com/practice/car-accident-statistics). Source: [page.tsx](src/app/practice/car-accident-statistics/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/car-accident-statistics`.
**Title:** Las Vegas & Nevada Car Accident Statistics | Saggese & Associates
**Meta description:** Review sourced Nevada and Clark County crash fatality statistics, pedestrian and motorcycle trends, and official traffic-safety data sources for Las Vegas-area drivers.
**Headings in source order:**
- H1: Las Vegas & Nevada Car Accident Statistics
- H2: 2024 Nevada Traffic Fatalities
- H2: Clark County Traffic Fatalities
- H2: Pedestrian and Motorcycle Fatalities
- H2: Understanding the Data
- H2: What Crash Statistics Can and Cannot Show
- H2: Related Las Vegas Car Accident Resources
- H3: How we help
- H2: Sources

**Structured data types:** BreadcrumbList, WebPage.

### /practice/brain-and-spine-injury
Live URL: [/practice/brain-and-spine-injury](https://www.maxlawnv.com/practice/brain-and-spine-injury). Source: [page.tsx](src/app/practice/brain-and-spine-injury/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/brain-and-spine-injury`.
**Title:** Las Vegas Brain & Spine Injury Lawyer | Saggese & Associates
**Meta description:** Traumatic brain & spinal cord injury attorneys in Las Vegas — life‑care planning, medical experts & full compensation pursuit. Free consultation.
**Headings in source order:**
- H1: Las Vegas Brain & Spine Injury Lawyer
- H2: Traumatic Brain Injuries After a Crash or Fall
- H2: Spine and Spinal Cord Injuries
- H2: Records That Explain the Injury and Its Impact
- H2: Evaluating Losses in a Nevada Injury Claim
- H2: Preparing for a Brain or Spine Injury Consultation
- H2: Brain and Spine Injury Questions
- H3: Can brain or spine injury symptoms appear after the scene of an accident?
- H3: What records can be important in a brain or spine injury claim?
- H3: What types of incidents can lead to brain or spine injuries?
- H3: Is a spine injury the same as a spinal cord injury?
- H3: How are future treatment costs evaluated in an injury claim?
- H2: Medical and Legal Sources

**Structured data types:** BreadcrumbList, LegalService, Service, FAQPage.

### /practice/wrongful-death
Live URL: [/practice/wrongful-death](https://www.maxlawnv.com/practice/wrongful-death). Source: [page.tsx](src/app/practice/wrongful-death/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/wrongful-death`.
**Title:** Las Vegas Wrongful Death Lawyer | Saggese & Associates
**Meta description:** Compassionate Las Vegas wrongful death attorneys pursuing justice & financial security for families. Free consultation – call (702) 778‑8883.
**Headings in source order:**
- H1: Las Vegas Wrongful Death Lawyer
- H2: Understanding Wrongful Death Claims
- H2: How We Help
- H2: Wrongful Death Questions
- H3: What types of incidents may involve a wrongful death claim?
- H3: What information can help document a fatal incident?

**Structured data types:** BreadcrumbList, LegalService, Service, FAQPage.

### /practice/motorcycle-accidents
Live URL: [/practice/motorcycle-accidents](https://www.maxlawnv.com/practice/motorcycle-accidents). Source: [page.tsx](src/app/practice/motorcycle-accidents/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/motorcycle-accidents`.
**Title:** Las Vegas Motorcycle Accident Lawyer | Saggese & Associates
**Meta description:** Las Vegas motorcycle crash & injury lawyers — helmet law knowledge, severe injury claims & insurer negotiation. Free consultation (702) 778‑8883.
**Headings in source order:**
- H1: Las Vegas Motorcycle Accident Lawyer
- H2: Fighting for Motorcyclists' Rights
- H3: Nevada Motorcycle Laws We Navigate
- H3: Common Motorcycle Accident Causes
- H3: Serious Injuries We Handle
- H4: Don't Let Insurance Companies Minimize Your Claim
- H3: Get Help Today
- H3: Related Practice Areas

**Structured data types:** BreadcrumbList, LegalService, Service, WebPage.

### /practice/crosswalk-and-pedestrian-accidents
Live URL: [/practice/crosswalk-and-pedestrian-accidents](https://www.maxlawnv.com/practice/crosswalk-and-pedestrian-accidents). Source: [page.tsx](src/app/practice/crosswalk-and-pedestrian-accidents/page.tsx). HTTP 200; canonical `https://www.maxlawnv.com/practice/crosswalk-and-pedestrian-accidents`.
**Title:** Las Vegas Pedestrian Accident Lawyer | Saggese & Associates
**Meta description:** Las Vegas pedestrian & crosswalk accident lawyer protecting injured pedestrians. Free consultation (702) 778‑8883.
**Headings in source order:**
- H1: Las Vegas Pedestrian Accident Lawyer
- H2: Pedestrian Accident Case Factors
- H2: How we help
- H2: Pedestrian Accident Questions
- H3: What should I document after being hit as a pedestrian?
- H3: Why is quick investigation important in a crosswalk or pedestrian case?
- H3: What if a pedestrian crash caused a head, neck, back, or spine injury?

**Structured data types:** BreadcrumbList, LegalService, Service, FAQPage.

### /criminal-defense/dui (different search intent)
Live [DUI defense page](https://www.maxlawnv.com/criminal-defense/dui); **Title:** Las Vegas DUI Defense Lawyer | Saggese & Associates. **Meta description:** Las Vegas DUI defense lawyer challenging stops, testing & DMV suspension. Free consultation (702) 778-8883.
**Headings:** H1: DUI Defense; H3: Common defenses; H3: Example scenario; H3: Frequently asked questions; H3: Next steps.

This page has no accident-victim civil-law depth and no visible breadcrumb trail in the inspected response. Its practice menu contains car/truck links, but those are shared navigation. Do not equate that with a dedicated contextual civil-claim link.

### Discovery surfaces: metadata and headings

The following surfaces were checked for accident references, without proposing unrelated content changes. Root/hub meta descriptions and headings are included to distinguish navigation from substantive accident coverage.

**/** — [live page](https://www.maxlawnv.com).
- Title: Las Vegas Injury Lawyer & Criminal Defense Attorney | Max Law
- Description: Talk with a Las Vegas injury lawyer about car accidents and other injury claims. Free consultation. No fee unless we win.
- Headings: H1: The Law Offices of Saggese & AssociatesInjury & Criminal Defense Attorneys; H2: Accident & Injury Help; H3: Injury; H3: Criminal Defense; H3: Need Help Now?; H2: Practice Areas; H3: Injured and not at fault?; H3: Arrested?; H3: Meet Your Lawyer; H4: Marc A. Saggese; H2: Marc A. Saggese, Esq.; H2: Selected Case Results; H2: Awards & Recognitions; H2: Awards & Recognition; H2: As Seen On; H3: The Real Lawyer Behind CBS's The Defenders; H3: Our Mission; H2: Client Reviews; H2: Speak With an Experienced Lawyer Today; H2: Speak With an Experienced Lawyer Today.

**/practice** — [live page](https://www.maxlawnv.com/practice).
- Title: Las Vegas Injury & Criminal Defense Lawyers | Practice Areas | The Law Offices of Saggese & Associates
- Description: Explore injury and criminal defense practice areas at Saggese & Associates, including car accidents, slip and fall, wrongful death, DUI defense, and more.
- Headings: H1: Practice Areas; H2: Injury Law; H3: Car Accidents; H3: Car Accident Statistics; H3: Cell Phone-Related Accidents; H3: Underinsured & Uninsured; H3: Premises Liability; H3: Brain & Spine Injury; H3: Wrongful Death; H3: Motorcycle Accidents; H3: Truck Accidents; H3: Commercial Vehicle Accidents; H3: Pedestrian Accidents; H3: Product Liability; H3: Excessive Force; H3: Elder Abuse; H3: Insurance Settlements & Checks; H2: Criminal Defense; H3: DUI Defense; H3: Domestic Violence; H3: Drug Offenses; H3: Homicide & Murder; H3: Theft; H3: Larceny; H3: Burglary; H3: Forgery; H3: Bad Checks; H3: Juvenile Crimes; H3: Prostitution; H3: Sexual Assault; H3: Record Sealing; H2: Why choose us?.

**/service-areas** — [live page](https://www.maxlawnv.com/service-areas).
- Title: Las Vegas Service Areas | Saggese & Associates
- Description: Law firm serving Las Vegas Valley communities including Summerlin, Henderson, North Las Vegas, Spring Valley, Paradise, Enterprise & more. Injury & criminal defense.
- Headings: H1: Areas We Serve; H2: Primary Coverage; H3: Injury Representation; H3: Criminal Defense; H2: Have a Case Outside These Areas?.

**/results** — [live page](https://www.maxlawnv.com/results).
- Title: Results — Saggese & Associates
- Description: Representative results and outcomes for The Law Offices of Saggese & Associates. Past results do not guarantee future outcomes.
- Headings: H1: Representative Results; H3: Multi-million dollar settlement; H3: Felony charge dismissed; H3: Career-saving plea; H3: Successful trial verdict; H2: Notes on Results.

**/about** — [live page](https://www.maxlawnv.com/about).
- Title: About Our Las Vegas Law Firm | The Law Offices of Saggese & Associates
- Description: Learn about The Law Offices of Saggese & Associates, a premier Las Vegas law firm specializing in injury and criminal defense. Meet attorney Marc A. Saggese.
- Headings: H1: About the Firm; H2: Marc A. Saggese, Esq.; H2: Firm Overview; H3: Media & Publications; H3: Why Clients Choose Us; H3: Biography; H3: Awards & Recognition; H3: Case Types & Results; H3: What Working With Us Looks Like; H3: Your Attorney; H3: What Clients Say; H2: Client Reviews; H3: Frequently Asked Questions.

**/about/marc-a-saggese** — [live page](https://www.maxlawnv.com/about/marc-a-saggese).
- Title: Marc A. Saggese, Esq. | Las Vegas Trial Attorney | The Law Offices of Saggese & Associates
- Description: Profile of Marc A. Saggese — Las Vegas injury & criminal defense attorney with decades of trial experience. Free consultations.
- Headings: H1: Marc A. Saggese, Esq.; H2: Bar Admissions; H2: Education; H2: Awards; H2: Professional Highlights; H3: Associations & Memberships; H3: Contact & Office.

**/contact** — [live page](https://www.maxlawnv.com/contact).
- Title: Contact Our Las Vegas Law Firm | The Law Offices of Saggese & Associates
- Description: Contact The Law Offices of Saggese & Associates for a free consultation. Located in Las Vegas, Nevada. Call (702) 778-8883 or fill out our contact form.
- Headings: H1: Contact; H2: Tell us about your case; H3: Visit; H3: Call; H3: Hours; H3: Directions; H3: Mail.

### /practice/product-liability — additional accident-related references
[Live page](https://www.maxlawnv.com/practice/product-liability); HTTP 200; canonical `https://www.maxlawnv.com/practice/product-liability`.
**Title:** Las Vegas Product Liability Lawyer | Saggese & Associates
**Meta description:** Las Vegas product liability lawyer handling defective product, design, manufacturing & warning defect claims. Free consultation (702) 778‑8883.
**Headings:**
- H1: Las Vegas Product Liability Lawyer
- H2: Product Liability Case Factors
- H2: How we help
- H2: Product Liability Questions
- H3: What should be preserved if a product may have caused an injury?
- H3: What types of products can be involved in product-related injury claims?
- H3: What if a product-related incident caused a serious or fatal injury?

**Structured data:** BreadcrumbList, LegalService, Service, FAQPage.

### /media — additional accident-related references
[Live page](https://www.maxlawnv.com/media); HTTP 200; canonical `https://www.maxlawnv.com/media`.
**Title:** Media & Press | The Law Offices of Saggese & Associates
**Meta description:** Recent media appearances, press coverage, and news featuring The Law Offices of Saggese & Associates. Stay updated on our latest cases and legal insights.
**Headings:**
- H1: Media & Press
- H2: The Real Lawyer Behind CBS's The Defenders
- H2: Television & News Appearances
- H2: Awards & Recognition
- H3: ASK A LAWYER — Should The Boston Marathon Bomber be Sentenced to Death?
- H4: Original Article
- H3: Ninth Circuit Takes New Look at Duty to Warn in Match Gone Bad
- H4: Original Article
- H3: DUI Checkpoints – Are They Legal and What are Your Rights?
- H4: Original Article
- H3: Everything You Need to Know About Car Insurance
- H4: Original Article
- H3: What to Do If You're In A Car Accident
- H4: Original Article
- H3: The Importance of Having a Will
- H4: Original Article
- H3: Drinking and Driving in Nevada
- H4: Original Article
- H3: Texting and Driving
- H4: Original Article
- H2: Press Inquiries
- H2: Send a press inquiry

**Structured data:** No JSON-LD captured in original HTML.
