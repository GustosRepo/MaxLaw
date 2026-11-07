# Max Law — account export analysis, November 7, 2026

**Current work order:** [SEO Priority Plan](SEO_PRIORITY_PLAN.md) is the concise current reference. Earlier priorities below preserve the research history. The active keyword-map priorities are 1 (car accidents), 2 (premises/slip-and-fall), 3 (brain/spine secondary), Maintain and Later.

**Location correction — November 7:** The user confirms the supplied Keyword Planner file was exported for Las Vegas. The earlier nationwide classification inferred from its `United States` segmentation row is withdrawn: the CSV has no explicit selected-city field. Las Vegas is recorded as user-confirmed scope, with the raw label preserved separately. A repeat export is not required on that basis. Historical dates, raw estimates and missing values are unchanged.

Subsequent work: the user authorized production release and focused existing-page improvements. Those releases are now verified in [the release notes](SEO_RELEASE_NOTES_2026-11-07.md). The figures and validation below preserve the earlier account-analysis snapshot; they do not measure the effect of the new content or establish a query-to-page relationship.

The supplied exports establish an actual Max Law search-performance baseline and change the next-work priorities. **Prioritize review of the existing Premises Liability and Brain & Spine Injury pages alongside the car-page release.** Retain the report-request and fault article briefs, after that review. Their usefulness remains plausible; this dataset does not establish their local search volume or disprove demand for them.

The supplied Keyword Planner file is accepted with user-confirmed Las Vegas scope. Its historical coverage ends September 2026; the download date and reporting period remain separate. The CSV segmentation label does not independently establish the selected city, and no repeat export is required on that basis.

## What was supplied and verified

| Input | Observed scope | What it establishes |
|---|---|---|
| `Saved Keywords Stats 2026-11-07 at 14_14_11.csv` | UTF-16 tab-separated export; October 1, 2025–September 30, 2026; a `United States` segmentation row | Historical estimates with user-confirmed Las Vegas scope; selected city not explicitly stored in CSV |
| `Pages.csv` | 26 landing-page rows | Page-level search clicks, impressions, CTR and aggregate average position |
| `Queries.csv` | 326 visible query rows | Query-level observations, independently of the page table |
| Companion `Filters.csv` and `Chart.csv` in the same GSC export | Filter label `Last 3 months`; Web (text-based); 85 continuous available dates, August 13–November 5, 2026 | The actual reporting dates and property-level daily totals |
| Companion `Countries.csv`, `Devices.csv`, `Search appearance.csv` | Multiple countries; desktop/mobile/tablet; no search-appearance rows | No country/device restriction was applied; no Las Vegas filter is established |

The companion files were read to establish dates, filters and totals. Originals were not modified. File names, sizes, SHA-256 hashes, calculations and limitations are recorded in [the account evidence](audits/p3-account-export-analysis-2026-11-07.json). Export contents were treated as data, not instructions.

## What the Keyword Planner export can support

All 66 original P3 phrases occur in the file. Only **22 have a numeric average-search value**; **44 have blank values**. The nonblank figures fall into just four values: 50, 500, 5,000 and 500,000. This is coarse evidence. The exact reason for that precision is not established by the file; no hidden range is inferred from it.

The 12 monthly columns, October 2025 through September 2026, have **no populated keyword values**. We cannot reconstruct a three-month monthly series, verify seasonality or calculate a current local volume from this export. Network and language settings are not stated in the CSV and remain unverified.

| Example phrase | Raw exported average | Interpretation |
|---|---:|---|
| auto accident attorney las vegas | 5,000 | Historical estimate with user-confirmed Las Vegas scope and coarse precision |
| car accident attorney las vegas | 5,000 | Same qualifications; do not add synonymous phrases into unique demand |
| las vegas accident report | 500 | Historical estimate with user-confirmed Las Vegas scope; not a forecast of guide traffic |
| las vegas premises liability lawyer | 500 | Historical estimate; advertiser competition is not organic ranking difficulty |
| car accident lawyer near me | 500,000 | Raw historical estimate; its magnitude alone does not establish national targeting |
| car accident lawyer las vegas | blank | Unknown in this export, not zero |
| brain injury lawyer las vegas | blank | Unknown in this export, not zero |

The aggregate `All` and `United States` rows each show 1,022,600. Do not report that as a count of unique potential clients or Las Vegas searches: the phrases and close variants may overlap. Google's documentation describes averages for selected locations/date ranges, close variants, rounding and advertiser competition. [Keyword Planner metric definitions](https://support.google.com/google-ads/answer/3022575?hl=en).

The original 15 October 29 Semrush figures are retained in separate dated columns. They are not overwritten by a different vendor's different-period estimates. The refresh supplies no new organic keyword difficulty score.

## What Max Law actually received in Search

The daily chart totals **107 clicks and 4,131 impressions**, with a calculated CTR of **2.59%**, across the available August 13–November 5 dates. The country and device exports independently sum to the same property totals. The United States accounts for 106 clicks and 3,913 impressions; this still does not isolate Las Vegas searchers.

| Landing page | Clicks | Impressions | Reported average position |
|---|---:|---:|---:|
| `/about/marc-a-saggese` | 57 | 615 | 3.88 |
| `/` | 33 | 2,249 | 24.61 |
| `/about` | 9 | 540 | 5.63 |
| `/contact` | 5 | 453 | 13.45 |
| `/practice/premises-liability` | 0 | 634 | 62.24 |
| `/practice/brain-and-spine-injury` | 0 | 398 | 30.23 |
| `/practice/car-accidents` | 1 | 31 | 11.52 |
| `/practice/insurance-settlements-and-checks` | 0 | 7 | 4.86 |

These are page totals across their observed queries, dates, devices and countries, not the rank of each page for its preferred keyword. A position of 4.86 on seven impressions does not establish broad settlement-search visibility. The homepage, biography, about and contact pages account for 104 of 110 **page-level** clicks; their destinations do not by themselves prove branded intent or qualified inquiries.

The query export provides useful, separate signals:

| Visible query | Clicks | Impressions | Reported average position | Use |
|---|---:|---:|---:|---|
| marc saggese | 14 | 99 | 1.22 | Verified named-attorney navigation |
| brain and spine injury attorney | 0 | 234 | 20.38 | Existing injury-type visibility worth investigating |
| brain and spine injury lawyer | 0 | 96 | 28.40 | Same existing-page review; no synonym page |
| las vegas premises liability lawyer | 0 | 134 | 51.07 | Relevant commercial exposure, with weak aggregate position |
| premises liability lawyer las vegas | 0 | 122 | 52.42 | Another phrase for the same preferred owner |
| premises liability attorney las vegas | 0 | 113 | 73.58 | Same preferred owner; not a new page opportunity |
| las vegas car accident lawyer | 0 | 50 | 58.86 | Core commercial target; identify the actual ranking URL |
| car accident attorney las vegas | 0 | 23 | 23.61 | Same service intent, different aggregate performance |
| las vegas personal injury lawyer | 1 | 2 | 131.50 | Too small a sample to establish a stable ranking opportunity |

The brain/spine phrases in the table have no geographic qualifier. They establish observed site exposure, not demand specifically originating in Las Vegas. Case and whitespace are normalized for matching; different word orders and synonyms are not silently merged into an exact match.

For a broader query-only view, literal substring groups contain 540 premises-liability impressions across 13 phrases, 384 brain/spine/spinal impressions across 12 phrases, and 121 car-accident impressions across 14 phrases, all with zero visible clicks. These are transparent text groupings, not complete intent classifications, page totals, unique people or market search volumes. Rules and totals are recorded in the JSON evidence.

## Important limits on joining these tables

The page table sums to **110 clicks / 6,185 impressions**; the chart sums to **107 / 4,131**. Use the chart for property totals. Google documents page-versus-property aggregation differences; do not add the two tables together or treat their difference as a tracking failure. [GSC aggregation explanation](https://support.google.com/webmasters/answer/7576553?hl=en).

The visible query table contains only **17 clicks / 2,588 impressions**. Sixteen visible clicks belong to `marc saggese`, `saggese and associates` and `maxlaw`. That does not establish that 16 of 17 represents the brand share of all 107 property clicks. Privacy omissions and reporting limits prevent a complete query census. The exact omitted-query mix cannot be reconstructed. [GSC discrepancies and anonymized queries](https://support.google.com/webmasters/answer/17010575?hl=en).

The separate query and page exports have no shared row identifier. They cannot tell us whether the homepage or car page appeared for `las vegas car accident lawyer`. The preferred owners in the keyword map are recommendations, not measured query-to-page relationships. The car page's 11.52 page average and that query's 58.86 average must not be presented as the same measurement.

## Recent trend to investigate

The available daily chart permits two complete adjacent 28-day windows:

| Window | Clicks | Impressions | Calculated CTR |
|---|---:|---:|---:|
| September 11–October 8 | 38 | 803 | 4.73% |
| October 9–November 5 | 15 | 1,894 | 0.79% |

Clicks fell **60.5%**, while impressions rose **135.9%**. That warrants investigation; it does not establish a migration loss, penalty, technical defect or a single cause. Query mix, visibility, brand demand and other factors cannot be separated with these full-period query/page tables. Comparable query/page exports for each window are the next useful diagnostic.

All these GSC dates precede the local November 7 P1/P2 implementation. They cannot measure the effect of those changes or establish that a release occurred. There is also no lead-quality or conversion dataset here.

## Revised priorities and keyword map

The [updated keyword map](P3_KEYWORD_MAP.csv) now contains **74 phrases across the same 25 clusters**: the original 66 plus eight phrases observed in GSC. It adds the strongest combined brain/spine phrases, two premises word-order variants, the observed broad injury phrase and three explicit brand phrases. Seventeen mapped phrases exactly match visible GSC queries after case/whitespace normalization, compared with nine in the original map.

The CSV keeps the original Semrush columns and adds separate Keyword Planner and GSC columns, with scope, dates and missing-data status. The 22 numeric Planner values carry user-confirmed Las Vegas scope; 44 original phrases remain blank and eight added phrases were not in that Planner export. Location provenance distinguishes user confirmation from the raw CSV label. Query metrics are never assigned to a preferred page as though that relationship were observed.

| Order | Next work | Reason |
|---|---|---|
| 1 | Preserve the baseline; verify P1/P2 when deployment is authorized. | Completed local changes need release checks before measuring their impact. No deployment is part of this analysis. |
| 2 | In GSC, inspect actual query-to-page relationships for premises, combined brain/spine and the main car terms. | Determines whether the intended service owner is receiving the exposure, and avoids fixing the wrong page. |
| 3 | Prepare focused improvements to the existing Premises Liability and Brain & Spine Injury pages. | Both have observed page exposure and relevant query exposure, without clicks. Scope the work from the verified page/query relationship and existing content, rather than merely adding keywords. |
| 4 | Continue the two car-support resource briefs using the supplied historical estimates. | The tasks remain useful; their market size is still unverified. Existing-page opportunity review now comes first. |
| 5 | Evaluate UM/UIM and other practice expansions from subsequent data. | A sampled search appearance, a blank volume or a tiny impression count is insufficient to promise an opportunity. |

Premises and serious injury move from CSV priority B to A. The report-request and fault guides move from A to B to reflect this work order, not a conclusion that they have no demand. Car representation retains A and the same owner. The URL inventory is unchanged; no new service, synonym or city pages are created.

## Optional future refresh and remaining GSC detail

Use [this one-column Planner import](P3_KEYWORDS_FOR_PLANNER.csv), containing all 74 current phrases. It is prepared for upload; nothing has been uploaded to Google Ads.

1. For an optional future refresh, retain the Las Vegas target and record the selected city separately from segmentation labels. No repeat export is requested for the already supplied file.
2. Use Google as the network and record the language setting. Export the selected date range and settings with the result. Choose the latest complete historical months the tool actually offers; do not label unavailable October/November data as observed.
3. Download monthly historical values, if available, for the latest three complete available months and a 12-month context. Verify that the monthly columns contain values rather than only headers. A range or an unavailable cell remains a range or unavailable value.
4. If broader service-area coverage matters, run Henderson and Clark County as separately labeled comparisons. Do not sum overlapping locations. A separately targeted US export could measure national interest; the supplied file is not classified as that dataset.
5. For GSC diagnosis, filter each priority query and export its Pages tab, or filter each priority page and export its Queries tab. Repeat the relevant comparisons for September 11–October 8 and October 9–November 5. GSC does not supply a city dimension for this task.

No ad campaign, spend, account change, new subscription or waiting for Marc is needed to perform this analysis. Account features may limit precision; the data available should be labeled honestly. The supplied export can guide work now with its user-confirmed scope; a replacement location export is not a prerequisite.

## Validation

Validation passed: the map and import have 74 unique phrases and matching keyword sets; all 13 existing owner routes resolve to source files and both proposed resource routes remain absent. The 15 earlier metric pairs are preserved. All 66 original phrases match the supplied Planner rows; all 17 map-to-GSC matches preserve the exact exported metrics after the stated normalization. Evidence totals reconcile chart, countries and devices independently; page and query totals remain explicitly separate. All eight source-file hashes match, local links and `git diff --check` pass, and all 108 application/config/test files in the P3 starting snapshot remain unchanged. No application code or deployment is part of these document changes.
