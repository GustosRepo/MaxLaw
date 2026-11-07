# Max Law — P3 competitive SEO and keyword analysis

**Current work order:** [SEO Priority Plan](SEO_PRIORITY_PLAN.md) is the concise current reference. Earlier priorities below preserve the research history. The active keyword-map priorities are 1 (car accidents), 2 (premises/slip-and-fall), 3 (brain/spine secondary), Maintain and Later.

**Location correction — November 7:** The user confirms the supplied Keyword Planner file was exported for Las Vegas. The earlier nationwide classification inferred from its `United States` segmentation row is withdrawn: the CSV has no explicit selected-city field. Las Vegas is recorded as user-confirmed scope, with the raw label preserved separately. A repeat export is not required on that basis. Historical dates, raw estimates and missing values are unchanged.

Research date: November 7, 2026, America/Los_Angeles. Scope: Las Vegas and nearby Nevada injury searches, with car accidents as the first content focus. This is the competitive and keyword research phase, following the local P1 migration fixes and P2 content improvements. No application changes or deployment were performed in P3.

**Subsequent implementation:** After this research, the user authorized production release and existing-page improvements. P1/P2 and the Brain & Spine Injury / Premises Liability updates are now deployed and verified; see [the November 7 release record](SEO_RELEASE_NOTES_2026-11-07.md). The account data below remains the pre-release baseline. Planner scope is user-confirmed as Las Vegas; actual query-to-page relationships remain unverified.

**Account-data update, November 7:** The supplied GSC exports now support prioritizing review of **existing Premises Liability and Brain & Spine Injury exposure alongside the car-page release**, before the two supporting resources. See the [account-data analysis](P3_ACCOUNT_DATA_REFRESH_2026-11-07.md) for counts, dates and the revised work order. The Keyword Planner export remains targeted to Las Vegas according to the user and historical through September; the city scope is now user-confirmed rather than independently encoded in the CSV.

The recommendations combine sampled search results, competitor pages, the current site and the supplied account exports. They are not a forecast of rankings, traffic, leads or revenue. GSC supplies aggregate search-performance observations through November 5; localized Google/Maps ranks, current city volumes, backlinks and conversions remain unverified. Keep lawyer/attorney/auto/car variants on the car service page and retain the homepage for broad injury discovery.

## Deliverables and decisions

| Deliverable | Coverage | Use |
|---|---|---|
| [Keyword map](P3_KEYWORD_MAP.csv) | 74 unique phrases across 25 clusters; original 66 plus eight observed GSC phrases | One preferred owner per phrase; separate dated Semrush, Planner and GSC columns; priority and next action |
| [Search evidence](audits/p3-search-evidence-2026-11-07.json) | 20 logged research queries; up to 12 retained standard result URLs per query | Reproduce the query scope and inspect observed domains without treating array order as Google rank |
| [Page evidence](audits/p3-page-evidence-2026-11-07.json) | 11 competitor pages across nine firms, plus four Max Law production pages | Dated HTTP, title, canonical, H1 and internal-link observations |
| [Account-data analysis](P3_ACCOUNT_DATA_REFRESH_2026-11-07.md) and [evidence](audits/p3-account-export-analysis-2026-11-07.json) | 66 Planner phrases, 326 visible GSC queries, 26 pages and supporting scope/daily files | Actual site exposure, limitations and revised priorities |
| [Planner import](P3_KEYWORDS_FOR_PLANNER.csv) | One-column list of all 74 current phrases | Ready for a separately labeled Las Vegas historical-data lookup |
| This report | Comparison, ownership, gaps, briefs and measurement | Choose and implement the next content cycle without reopening completed P2 work |

Decisions:

1. Preserve `/practice/car-accidents` as the commercial owner for car/auto and lawyer/attorney variants. The keyword estimates do not justify separate synonym pages.
2. Retain the report-request and fault resources after the existing-page opportunity review; publication requires full drafts and ordinary editorial/source checks. Neither article exists yet; the paths below are proposals.
3. Treat the improved local car and settlement content as completed P2 work awaiting release verification, rather than recommending the same expansion again.
4. Promote review of the existing premises and serious-injury pages based on their supplied GSC exposure. Retain UM/UIM, motorcycle, truck and pedestrian URLs; choose later refinements from query/page and qualified-inquiry evidence.
5. Support Henderson and Summerlin through truthful service coverage first. The sample does not establish a need for a city-by-practice page grid or a new office.

## Method and limits

The 20 query strings cover commercial car and broad injury searches, proximity, Henderson/Summerlin variants, report retrieval, fault, medical payments, settlement checks, visitors, UM/UIM, trucks, premises, motorcycles, brain injury, statistics and fees. The CSV references the relevant query ID where a cluster was sampled. A query ID supports a cluster observation; it does not mean every phrase in that cluster was separately searched. Brand and some secondary variants are planning candidates without a dedicated logged query.

Searches used a general research web provider. They were not controlled Google searches from specified Las Vegas coordinates, devices or accounts. The retained result URLs are a limited sample, not an exhaustive search-result export; no advertised position, local pack position or rank is assigned. Supplemental searches located representative pages and official guidance. Competitors were selected for relevance and contrasting approaches, not as a verified top-nine ranking list. Irrelevant geographies, including Las Vegas, New Mexico results in a statistics query, were excluded from the recommendations.

Direct read-only GET requests inspected initial HTML from 15 pages on November 7. All 15 returned HTTP 200 directly, contained one actual H1 element and declared a self-referencing canonical. These are page-level technical observations, not proof of Google indexing, Google-selected canonical, legal quality or a whole-site audit. Link-path counts in the evidence include shared navigation and footer links. They are neither backlink counts nor measures of contextual-link quality.

Max Law appeared in the provider responses for UM/UIM (K11), broad Las Vegas injury (K13) and crash statistics (K19). This establishes discoverability in those responses only. Absence from a retained sample does not establish that a page fails to rank on Google. The initial web research supplied no measured current volumes, difficulty or backlink metrics. The later user-supplied exports add historical estimates with user-confirmed Las Vegas scope and aggregate Max Law search observations, with their separate scopes recorded in the account-data analysis.

## Competitor comparison

The following observations describe what the inspected pages publish. Testimonials, results, awards, review bylines and office statements are the publishers' claims; this audit does not independently validate them. The useful comparison is the reader task and the supporting site structure, rather than the number of words or promises on a page.

| Firm and inspected page | Observed approach | Implication for Max Law |
|---|---|---|
| [Ruiz — car service](https://www.ruizlawnv.com/practice-areas/las-vegas/car-accidents/) (H01) | Commercial page combines consultation access, attorney identity, bilingual navigation, local/visitor circumstances, coverage questions and related resource links. | Make the path from a practical question to representation clear. Adopt only services, languages and process details the firm can substantiate. |
| [Boyer — homepage](https://boyerlawyer.com/) (H02) | The homepage itself targets car representation and combines service-area coverage with insurance, collision and consultation information. | Competing architecture varies. Max Law already has a dedicated car owner and broader firm positioning; another firm's homepage is not a reason to redirect or duplicate it. |
| [Clark — auto accidents](https://www.injuryattorneyvegas.com/auto-accidents) (H03) | Consultation preparation, an identified attorney, legal/source references, published results and related practice links appear together. | P2 already addressed preparation and source-backed explanations. Further gains require useful detail or verified proof, rather than adding another general overview. |
| [Winder — car service](https://thewinderlawfirm.com/las-vegas-personal-injury-lawyer/car-accident/) (H04) | A long structured guide uses a contents list, injury/damage categories, local coverage, attorney links and a displayed review attribution. | Use an understandable hierarchy when the subject warrants it. Length and a displayed review date alone do not establish an advantage or justify a word-count target. |
| [Naqvi — homepage](https://naqvilaw.com/) (H05) | Attorney/team identity, published client stories and results, media/community material and office links support an injury-focused offer. | Max Law can connect its real biography, existing media and verified experience more clearly. No authority or backlink deficit can be quantified from this page. |
| [Claggett — car service](https://www.claggettlaw.com/las-vegas-car-accident-lawyer/) (H06) | Question-led commercial content links to related practical topics, including medical payments and injuries discovered after a crash. | Useful resources and service pages can reinforce one another. Blog volume itself is not evidence of ranking benefit. |
| [Ed Bernstein — Henderson car service](https://www.edbernstein.com/henderson-car-accident-lawyer/) (H07) | City-specific context includes roads, relevant agencies/courts, office information and attorney/proof material. | A future Henderson page would need a distinct local task and accurate operational facts, beyond replacing a city name. |
| [Sookiassian — Summerlin injury service](https://thesookiassianfirm.com/summerlin-personal-injury-lawyer) (H08) | Summerlin-focused service content presents an office in that community, attorney information, languages and local circumstances. | Serving Summerlin and maintaining an office there are different claims. This does not establish a Max Law Summerlin location or justify inventing one. |
| [Fletcher — report requests](https://www.fletcherfirmlasvegas.com/practice-areas/car-accidents/las-vegas-crash-report) and [fault explanation](https://www.fletcherfirmlasvegas.com/post/understanding-comparative-fault-in-nevada) (H09–H10) | Separate resources answer agency/request questions and fault/evidence questions, with related links and practical explanations. | These are distinguishable reader tasks that can support Max Law's existing service page without another car-lawyer page. |

[Naqvi's separate report guide](https://naqvilaw.com/how-to-request-an-accident-report-in-nevada/) (H11) provides another example of a procedural resource distinct from commercial representation. It reinforces the report-request topic choice; it does not prove demand volume or a ranking opportunity of a particular size.

Across the sample, consultation offers, trial experience and personal attorney attention recur. Those phrases alone offer weak differentiation. Max Law should make its own verified people, process and evidence useful to a reader: who handles questions, what records help, how the firm explains next steps, and which existing credentials or published matters support its statements. Do not invent a client story, attribution, language service, case result or attorney review.

## Keyword ownership and priorities

The A/B/C letters in this research-era table are historical, not migration phases. They are preserved in the CSV as `research_priority_at_account_analysis`. The active `priority` column now follows [SEO_PRIORITY_PLAN.md](SEO_PRIORITY_PLAN.md): 1 car accidents, 2 premises/slip-and-fall, 3 brain/spine secondary, Maintain and Later. A blank metric means unknown, not zero.

The table summarizes all 25 clusters; the CSV contains the individual variants and provenance. These are preferred editorial owners, not claims that Google will always choose that URL.

| Cluster / representative task | Preferred owner | Priority | Action |
|---|---|---|---|
| Car representation: car/auto, lawyer/attorney, Las Vegas | `/practice/car-accidents` | A | Preserve one service owner; verify P1/P2 release and evaluate query/page data. |
| Broad injury representation | `/` | A | Keep broad firm-selection intent on the homepage; avoid a duplicate generic Las Vegas injury page. |
| Proximity / near me | `/` with relevant service pages | A | Coordinate accurate office/Business Profile information; car-specific proximity intent belongs with the car service. No literal near-me landing page. |
| Consultation | `/practice/car-accidents` | A | Explain established consultation access without inventing fee terms. |
| Report retrieval | Proposed `/resources/las-vegas-car-accident-report` | B | Retain the brief after existing-page review; answer which agency and how to request records. |
| Fault explanation | Proposed `/resources/nevada-car-accident-fault` | B | Retain the brief after existing-page review; explain disputes and evidence beyond the concise service overview. |
| Medical payments | `/practice/car-accidents` | B | Add a concise, sourced coverage/billing answer if warranted; link to UM/UIM before commissioning another article. |
| Settlement process / checks | `/practice/insurance-settlements-and-checks` | A | Release and measure the P2 expansion; distinguish offer, release and distribution stages. |
| Lawyer costs / fees | `/practice/car-accidents` | B | Retain P2 fee-versus-expense explanation; firm-specific terms require factual support. |
| Tourist / visitor claims | `/practice/car-accidents` | B | Evaluate a useful visitor coordination section before a separate resource. |
| UM/UIM | `/practice/underinsured-and-uninsured-accidents` | B | Deepen policy/documentation distinctions on the existing URL. |
| Henderson car representation | `/practice/car-accidents` with `/service-areas` support | B | Start with truthful coverage; evaluate city-page need from distinct intent and operational evidence. |
| Summerlin car representation | `/practice/car-accidents` with `/service-areas` support | B | Same approach; no unverified office claim. |
| Broad geographic injury: Henderson / Summerlin | `/` with `/service-areas` support | B | Keep broad versus car intent distinct; consider a city page only with useful, supported local content. |
| Broader regional injury: Clark County / Nevada | `/` | C | Secondary coverage language; do not infer statewide expansion from a keyword. |
| Premises / slip and fall | `/practice/premises-liability` | A | Review actual query-to-page exposure, then improve the existing owner; 634 page impressions and no clicks in the supplied period. |
| Large trucks | `/practice/truck-accidents` | B | Preserve carrier/evidence focus; choose further work from actual demand and inquiries. |
| Motorcycle | `/practice/motorcycle-accidents` | B | Develop rider-specific explanations on the existing page. |
| Brain / traumatic brain / spine injury | `/practice/brain-and-spine-injury` | A | Review actual query-to-page exposure, then strengthen useful answers in place; 398 page impressions and no clicks. |
| Pedestrian | `/practice/crosswalk-and-pedestrian-accidents` | B | Retain the existing service owner; validate priority from query and inquiry data. |
| Distraction / cell phone crashes | `/practice/cell-phone-related-accidents` | B | Keep cause-specific evidence and the P2 contextual link from Car Accidents. |
| Commercial fleets, buses and vans | `/practice/commercial-vehicle-accidents` | C | Maintain the boundary with large-truck content and existing cross-links. |
| Crash data / statistics | `/practice/car-accident-statistics` | B | Maintain source and geography distinctions; measure service relevance separately from informational visits. |
| Attorney identity | `/about/marc-a-saggese` | B | Keep identity and factual credentials consistent; segment branded demand. |
| Firm brand | `/` | B | Preserve established names and distinguish brand navigation from new-client discovery. |

The `/practice` hub remains a directory and internal navigation aid, not another competing owner for every service phrase. Criminal-defense URLs remain part of the firm architecture; this injury-focused research does not authorize deletion or consolidation. In particular, overlapping theft/larceny wording requires a separate query, content and backlink review before any URL decision.

## Earlier keyword estimates: provenance matters

The following 15 figures were supplied in the October 29, 2026 gameplan as Semrush **US database estimates**. They have been carried into the CSV with their original date and attribution. They were not refreshed or independently validated in P3, are not Las Vegas-only search counts and should not be added across synonyms. Keyword difficulty is a vendor estimate, not a probability of ranking.

| Keyword | Earlier US monthly estimate | Earlier KD % |
|---|---:|---:|
| car accident lawyer las vegas | 5,400 | 66 |
| car accident attorney las vegas | 4,400 | 68 |
| las vegas car accident lawyer | 4,400 | 64 |
| las vegas car accident attorney | 2,400 | 19 |
| auto accident attorney las vegas | 2,400 | 31 |
| auto accident lawyer las vegas | 2,400 | 68 |
| accident lawyer henderson | 1,900 | 21 |
| las vegas premises liability lawyer | 720 | 5 |
| las vegas premises liability attorney | 720 | 6 |
| slip and fall lawyer las vegas | 880 | 17 |
| truck accident lawyer las vegas | 1,600 | 14 |
| motorcycle accident lawyer las vegas | 1,600 | 20 |
| pedestrian accident lawyer las vegas | 390 | 4 |
| brain injury lawyer las vegas | 390 | 11 |
| traumatic brain injury lawyer las vegas | 140 | 6 |

The same car-intent family ranges from KD 19 to 68 in that historical input. Selecting the lowest variant as an easy-win claim would overstate the evidence. The family belongs to one page. The Henderson phrase also has potentially ambiguous accident-versus-injury intent; its volume alone does not justify a new city page.

The supplied Planner file adds 22 coarse historical estimates with user-confirmed Las Vegas scope, including a report phrase and two proximity phrases; 44 original phrases have blank values. It does not supply verified Las Vegas volumes or a populated monthly series. The article briefs remain useful task proposals, with a lower work priority following the account-data review. Earlier competitor authority/traffic estimates in the gameplan are not reused as verified current metrics.

## Remaining gaps versus work already completed

Four live Max Law pages were fetched: [home](https://www.maxlawnv.com/), [car accidents](https://www.maxlawnv.com/practice/car-accidents), [settlement checks](https://www.maxlawnv.com/practice/insurance-settlements-and-checks) and [service areas](https://www.maxlawnv.com/service-areas). The car and settlement responses still showed their earlier content, while the local source contains the P2 expansions. The live settlement and service-area titles also retained the repeated firm suffix corrected locally. P3 therefore uses the **local post-P2 site** for gap decisions and records production differences as release work.

| Area | Current local position | Actual remaining opportunity |
|---|---|---|
| Car service overview | P2 added qualified deadlines, fault, documentation, losses, consultation preparation, fees/expenses, report/visitor guidance and sources. | Verify release; then make the longer procedural/evidence tasks into focused resources. Do not repeat the entire overview. |
| Settlement/check process | P2 expanded offers/releases, gross versus client share, expenses, bills/liens, Medicare and tax questions. | Measure the existing page; clarify stages where readers need it. No second generic settlement-timeline page at present. |
| Report requests | Car page gives a concise starting point; no dedicated resource exists. | A complete agency-selection and request workflow is a distinct gap. |
| Fault disputes | Car page contains a concise qualified explanation; no dedicated evidence guide exists. | A resource can explain disputed facts, evidence and the limits of simple examples. |
| UM/UIM | Existing page provides introductory coverage information; it appeared in K11. | Improve distinctions and useful policy/claim documents; clarify interactions only from reliable sources and actual policy terms. Appearance in one query does not guarantee a quick ranking gain. |
| Premises | Existing page includes duty/notice, maintenance, surveillance and slip/fall topics, with some repeated introductory language. | Review the observed query/page opportunity now; remove repetition and strengthen useful explanations on the existing owner. |
| Truck / commercial fleet | Truck content already distinguishes carriers and fleet scope and addresses electronic/log evidence with cross-links. | Not a missing-content gap. Refine only where actual queries, cases or reader questions establish a need. |
| Motorcycle / serious injury | Existing owners cover relevant categories; some motorcycle points remain lists rather than practical explanations. | Serious-injury exposure now warrants an earlier query/page review. Keep later rider-specific work on its existing owner. |
| Statistics | P2 verified figures and corrected the 2024 FARS release/methodology label. | Update when source data changes; distinguish final/preliminary data, years and geography. No cosmetic date change. |
| Technical/internal links | P1 supplied redirect coverage and ordinary initial-HTML practice links; P2 corrected duplicate title suffixes and synthetic sitemap dates. | Release verification remains. New resources need reciprocal contextual links and ordinary discovery when implemented. |

## Ranked next actions

| Order | Work | Completion evidence |
|---|---|---|
| 1 | Record a release baseline and verify P1/P2 when a deployment is authorized. | Release timestamp; redirects, initial HTML, titles/canonicals, sitemap, internal links and working inquiry flow verified on the deployed site. Do not mark deployment complete from local checks. |
| 2 | Confirm actual query-to-page exposure for premises, combined brain/spine and core car terms in GSC. | Query-filtered Pages exports or page-filtered Queries exports; separate tables alone do not establish the relationship. |
| 3 | Prepare focused Premises Liability and Brain & Spine Injury improvements in place. | Changes address verified reader/query gaps on the intended owner; no synonym page or inferred conversion forecast. |
| 4 | Draft and implement the crash-report request and Nevada fault resources after the existing-page review. | Distinct tasks, current primary sources, accurate qualifications, original copy, contextual links and successful page checks. |
| 5 | Improve existing UM/UIM content and evaluate the concise medical-payment answer. | Accurate policy/document questions, useful coverage boundaries and links; no invented coverage promise. |
| 6 | Select later motorcycle, pedestrian or city work using actual evidence. | Query/page and qualified-inquiry pattern, distinct task, supported facts and a clear owner. Existing keyword estimates alone are insufficient. |

Research and drafting can proceed without waiting for Marc, as the user instructed. Current primary sources and conservative qualifications support general educational content. Firm-specific commercial facts still need evidence: statute research cannot establish the firm's fee agreement, office location, service languages, intake timing or case results. Do not imply attorney authorship or review that has not happened.

## Concrete brief: crash-report request guide

Proposed URL: `/resources/las-vegas-car-accident-report`. Status: **brief only; no page or full draft exists**. Primary task: a person with a Nevada crash needs to identify the investigating agency and request the relevant records. Commercial bridge: how records can help a representation inquiry.

Proposed structure:

1. A short explanation of what this guide helps retrieve, followed by an agency selector based on the report paperwork and investigating agency, rather than the nearest city name.
2. Separate current official request routes for LVMPD, Nevada State Police/Highway Patrol, Henderson and North Las Vegas as applicable. Verify each official destination during drafting; do not assume one agency holds every crash in its city.
3. The identifiers and eligibility information each agency actually asks for; explain alternatives for missing report numbers only where the agency supports them.
4. Distinguish requesting an existing report from reporting obligations, insurance notice and requesting other evidence. Do not treat these as interchangeable processes.
5. Explain unavailable or incomplete records and how to ask the agency about the status. State price, access limits and processing estimates only when current official guidance supports them; no promised delivery day.
6. A small useful question set, source links and a proportionate consultation link. Readers should be able to reach public request instructions without submitting a lead form.

Keep the car page's short report explanation and link it to the guide. The guide links back to `/practice/car-accidents`; it may also link to the fault guide where evidence relevance warrants it. Avoid copying competitor ordering, phrasing or anecdotes. Any paid intermediary must be clearly distinguished from an official agency request, if discussed at all.

The P2 official-source register is a starting point, not a substitute for checking current instructions at drafting time. Some agency pages restrict automated access; use accessible official alternatives or plainly identify an unresolved detail rather than infer instructions from a competitor.

## Concrete brief: Nevada fault guide

Proposed URL: `/resources/nevada-car-accident-fault`. Status: **brief only; no page or full draft exists**. Primary task: a person needs to understand a disputed account of a crash, which evidence matters and why an insurer's assertion does not by itself settle every legal issue.

Proposed structure:

1. Explain the distinction between crash facts, a police report, insurer assessments and legal fault decisions. Avoid suggesting every report conclusively establishes liability.
2. Explain comparative negligence with the conditions and exceptions relevant to the discussion, grounded in [Nevada NRS 41.141](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141) and other applicable primary authorities. Do not extend a simplified percentage rule to every claim or defendant.
3. Discuss evidence preservation: photographs, witness details, records, video, vehicle information and other relevant material. Distinguish useful requests from assurances that evidence is available or can be obtained in every case.
4. Use original, explicitly hypothetical illustrations to explain disputed facts and qualified percentage consequences. Do not present invented examples as firm results; include multiple-party detail only when the explanation is legally supported.
5. Offer a practical consultation checklist and source references. Do not give a universal settlement calculator or promise that a particular item proves a case.

Keep the short P2 fault overview on Car Accidents; link readers needing detail to this guide. Return links should point to the car service and report resource where useful. Do not duplicate the full commercial page or the settlement/check distribution explanation.

When implemented, the two resources also need ordinary initial-HTML discovery, an appropriate resource index/breadcrumb path, correct canonical/title/schema and deliberate sitemap inclusion. The current sitemap route inventory must be checked explicitly; simply placing a file under a new `/resources` directory does not establish that the sitemap will include it. Add links and indexing checks only for pages that actually exist and are ready.

## Local visibility, authority and page expansion

For proximity searches, accurate Business Profile information, real office details and relevant services matter alongside the website. Google describes local results in terms of relevance, distance and prominence/popularity. No website-only change can establish a particular local-pack placement. Review profile accuracy and visibility from defined search locations when account/tool access is available. [Google Business Profile local ranking guidance](https://support.google.com/business/answer/7091).

Henderson and Summerlin competitors show substantive local circumstances and, on the inspected pages, location claims. Before creating a Max Law city page, establish a recurring reader task, truthful service/office facts, useful local information and a clear relationship to the service owner. A city name plus copied service text is insufficient. A dedicated city page is not inherently a policy violation; Google's doorway policy is a reason to avoid sets of near-identical pages designed primarily to capture similar searches. Nothing in this audit establishes a violation by Max Law or a competitor. [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse).

No backlink export, link index or competitor referring-domain comparison was available. The internal links recorded in the page evidence cannot answer which domains link to competitors or whether Max Law lost valuable links. The migration audit's historical URLs also do not establish inbound-link counts. A quantitative authority-gap claim must wait for actual backlink and referral evidence.

Useful later research would inspect Max Law's real linked-to pages, lost/referring URLs and legitimate existing media/organization relationships, then compare a dated competitor export on the same tool basis. Retain accurate citations and real editorial references where relevant. Do not buy links, invent affiliations or manufacture review evidence. Outreach is not part of P3 and no messages were sent.

Content should solve the reader's task and identify trustworthy support. Competitor word count, a publication date or an FAQ count is not an acceptance criterion. Google explicitly favors helpful, reliable content and does not prescribe a preferred word count. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Measurement and unresolved questions

The supplied GSC export establishes an August 13–November 5 baseline, with 107 property clicks and 4,131 impressions. The [account-data analysis](P3_ACCOUNT_DATA_REFRESH_2026-11-07.md) separates page/query aggregation and compares two completed 28-day windows. Before judging a release, keep country, device, search type and comparison windows consistent, obtain the needed query-to-page relationships, and distinguish branded terms, broad injury, car representation and other practices. Save actual release dates so P1/P2 changes and later content are not attributed to the same event indiscriminately.

GSC average position is an aggregate, not a single verified rank for a phrase. Multiple URLs receiving impressions for a query does not by itself establish harmful cannibalization. Look for sustained owner switching, split intent, click/conversion outcomes and meaningful sample sizes before changing URLs. Do not delete a page based only on a shared phrase.

Log completed reporting windows at roughly 14, 28 and 56 days after release, with weekly observations where volume permits. These are review checkpoints, not promised indexing or ranking deadlines. Track impressions and clicks alongside successful inquiry interactions and qualified leads where existing measurement supports that distinction. Avoid collecting case details in analytics. Statistics visits and branded navigation should not be counted as evidence of improved nonbranded car-case acquisition.

For actual local rank monitoring, define coordinates/service areas, device, query and organic-versus-map-pack result type. Refresh keyword estimates through an authorized current export using a documented database and date. Request backlink data only if an authority comparison is needed. This research does not require delaying useful drafts while those datasets are unavailable.

Unresolved: actual query-to-page relationships and the cause of recent performance changes; localized Google and Maps positions; current city keyword volumes/difficulty; competitor backlinks; qualified-lead contribution by landing page; and whether city-specific demand warrants new pages. The supplied aggregate baseline resolves part of the earlier account-data gap, without resolving those separate questions.

## Validation and handoff

Initial P3 validation passed for 66 phrases. The account refresh expands that to 74 unique phrases across the same 25 clusters, retains 13 existing owner routes and two proposed routes, and preserves the 15 historical metric pairs. The supplied account evidence remains separate from the 20 initial research queries and 15 inspected-page records. Local-link, CSV/source-consistency and unchanged application-file checks accompany the refresh. Documentation changes do not require another application build. The P2 build, TypeScript, lint and 40 regression tests remain the last application verification recorded in [the migration audit](SEO_MIGRATION_AUDIT.md).

The competitive research and supplied account-export analysis are complete; the supplied historical Planner data is accepted with user-confirmed Las Vegas scope. The revised next work is the query/page review and focused existing-page improvements, with the two resource briefs retained afterward. Neither publication nor deployment has occurred in this phase.
