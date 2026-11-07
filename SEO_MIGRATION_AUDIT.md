# Max Law — SEO Migration & Redirect Audit

**Location correction — November 7:** The user confirms the supplied Keyword Planner file was exported for Las Vegas. The earlier nationwide classification inferred from its `United States` segmentation row is withdrawn: the CSV has no explicit selected-city field. Las Vegas is recorded as user-confirmed scope, with the raw label preserved separately. A repeat export is not required on that basis. Historical dates, raw estimates and missing values are unchanged.

**Audit date:** November 7, 2026 (America/Los_Angeles)  
**Production:** https://www.maxlawnv.com/  
**Repository baseline:** `8c79705` (November 3, 2026); working tree initially clean. Installed Next.js: **16.4.5**.  
**Original audit scope:** investigation and documentation only; no implementation occurred during that audit. The original findings and production matrices below remain the pre-implementation snapshot. The subsequent user-authorized P1 and P2 implementations are recorded in the final sections; neither has been deployed.

## Executive Summary

**The migration has unresolved redirect gaps, but the ten supplied GSC examples substantially understate and partly misdescribe the current situation.** Eight of those ten URLs already return **308 → 200** in production. The other two return real 404s and have no verified equivalent current page. Restoring those two indiscriminately is not the highest-impact work.

The public Internet Archive index and archived HTML sitemap reveal additional historical service pages that still return 404 despite having relevant modern pages. Most importantly, **`/Personal-Injury/Car-Accidents.html` and `/car-accidents.html` return 404**, while `/practice/car-accidents` returns 200 with the correct canonical and substantive initial HTML. Archived car-page content confirms the first URL's representation/claim intent. Missing redirects also affect truck accidents, brain/spine injuries, distracted driving, uninsured motorists and other service pages.

**The present technical foundation is largely sound.** All **38 index-eligible application pages** return 200, have unique page titles and descriptions, and declare self-canonicals. All have substantive route-specific text in their initial HTML and production prerender headers. The 36-URL sitemap covers the eight core routes and all 28 practice/criminal detail pages; Privacy and Disclaimer are linked but intentionally not assumed to require sitemap inclusion. Robots permits public crawling. The homepage and car page also render their main content with JavaScript disabled.

The main additional discovery problem is **six criminal-defense pages with no incoming initial-HTML links from other public pages**. Five are available only through a menu populated after a click; Record Sealing is omitted even from that menu. These URLs are in the sitemap, so this is weak navigation/discovery, not total invisibility.

**No critical sitewide indexing failure, redirect loop, temporary migration redirect, or current commercial-page soft 404 was confirmed.** Missing historical mappings are a credible migration defect and recovery opportunity. Their contribution to the reported 16 clicks / 1,860 impressions / 0.9% CTR / position 42.1 cannot be quantified or established as a cause without historical GSC, landing-page, deployment and backlink evidence. No penalty or confirmed ranking cannibalization is alleged.

### Evidence and limits

- Read-only production GET crawl: **171 distinct starting URLs**, including all current application pages, every archived path/query found in the retrieved index, all 15 configured redirect sources, additional archived references, hostname/protocol/slash/case variants and a nonexistent control. Headers and bodies were captured without executing site JavaScript; redirects were followed separately in the recorded header chains. Requests completed without transport errors. Snapshot responses are from approximately **13:02–13:05 PST on November 7**; this is a point-in-time audit.
- Direct HTTP requests initially failed sandbox DNS; read-only network execution succeeded. Production conclusions below use those successful requests, not search snippets.
- Browser checks: closed/open practice menu, plus homepage and car page with JavaScript disabled. No form POST, email, deployment, account setting change or production write occurred.
- Repository inspection: all `src/app` pages/layouts/route handlers, navigation/shared components, metadata/robots/sitemap/configuration; reachable Git history including redirect additions and deleted routes; existing SEO planning documents; existing `.next` manifests and HTML. Existing build files corroborate source but are not treated as proof of deployment identity. No new build was necessary or run for this documentation-only task.
- Historical index: **129 archive records**, collapsed by URL key, filtered to historical HTTP 200 HTML. Of these, 95 path/query spellings are outside the current application-route inventory: **80 now end in 404; 15 end in 200** on the preferred production origin. Some are retired utilities or old slash forms rather than defects. Seven additional references came from archived page links/metadata. The index's `limit=500` was not reached, but filters, capture coverage, host aliases, excluded redirects and other historical versions make this inventory incomplete.
- The [public CDX query](https://web.archive.org/cdx/search/cdx?url=maxlawnv.com%2F%2A&output=json&filter=statuscode%3A200&filter=mimetype%3Atext%2Fhtml&collapse=urlkey&fl=original%2Ctimestamp&limit=500), [archived HTML sitemap](https://web.archive.org/web/20230519164955/https://www.maxlawnv.com/Site-Map.html), [archived Car Accidents](https://web.archive.org/web/20230519165242/https://www.maxlawnv.com/Personal-Injury/Car-Accidents.html), [archived Injury hub](https://web.archive.org/web/20230519165259/https://www.maxlawnv.com/Personal-Injury/index.html), [archived accident-types page](https://web.archive.org/web/20230519165242/https://www.maxlawnv.com/Personal-Injury/Types-Of-Accidents.html), and [archived Match.com story](https://web.archive.org/web/20230519165131/https://www.maxlawnv.com/Woman-beaten-by-Match-com-predator-speaks-out.html) were retrieved. Some historical HTML identifies itself as an HTTrack mirror; references prove historical structure, not original publication dates or backlinks.
- Supplied GSC aggregate counts are user-provided, not independently accessed. Apart from the ten 404 examples, the exact affected URLs, Google-selected canonicals, last crawl dates and validation dates were not supplied. No authenticated GSC, GA4, Vercel deployment/domain settings, verified server logs or backlink export was available. Public search queries added no reliable deep-link/backlink evidence.

## Confirmed Problems

Severity describes likely practical impact and breadth, not proof that Google lowered rankings. No **CRITICAL** issue was confirmed.

| ID / severity | Discovery and evidence | Potential impact / confidence | Recommended correction | Complexity |
|---|---|---|---|---|
| M1 — **HIGH** | Historical injury service URLs still return 404 despite matching 200 modern pages. Examples: `/Personal-Injury/Car-Accidents.html`, `/car-accidents.html`, `/Personal-Injury/Truck-Accidents.html`, `/Personal-Injury/Brain-And-Spine-Injury.html`. CDX, archived navigation/content, live GET and `next.config.ts:10` support this. Existing config covers only selected legacy pages. | Confirmed missing mappings. Old referrals/crawls terminate at errors instead of the replacement; loss of any historical link signals is conditional on links actually existing. No quantified traffic attribution. | Approve exact, relevant permanent mappings in the matrix, beginning with injury service pages. Link each directly to its verified final 200 URL. Do not use a blanket `.html` → homepage rule. | Low–medium: explicit config rules plus regression and production checks. |
| M2 — **MEDIUM** | Eight archived criminal-service URLs, plus historical About, Contact and other support URLs, lack migration redirects. E.g. `/Criminal-Defense/DUI.html` and `/Contact.html` return 404; their modern pages return 200. | Confirmed migration inconsistency; actual commercial value varies by URL. | Add verified equivalent mappings alongside M1 after approval. Preserve useful criminal pages. | Low. |
| D1 — **MEDIUM** | Six index-eligible criminal pages have zero incoming initial-HTML anchors from other public routes: Bad Checks, Juvenile Crimes, Larceny, Prostitution, Record Sealing, Sexual Assault. `src/components/PracticeNav.tsx:45` initializes the menu closed and conditionally mounts links; `/practice` lists only four criminal cards. | Confirmed weak discovery. Sitemap discovery remains available; this cannot identify the nine GSC “discovered” URLs or prove their exclusion cause. | Add ordinary rendered links to retained service pages, preferably in `/practice`'s criminal section. Keep menu anchors in initial markup, e.g. native details or an accessible hidden rendered panel. Include Record Sealing explicitly. | Low–medium. |
| D2 — **LOW** | `/plain.html`, served from `public/plain.html`, returns 200 with a diagnostic sentence, no canonical, no robots meta and no X-Robots-Tag. `/plain` and `/plain-danger` already have noindex and are not this issue. | Confirmed unintended index eligibility for a noncommercial diagnostic resource; actual indexing and GSC soft-404 classification unverified. | If the diagnostic is retained, narrowly exclude `/plain.html` with a noindex HTTP header or its own robots meta after approval. Do not change the Google verification file. | Low. |
| S1 — **LOW** | `src/app/sitemap.ts:26` assigns `new Date()` to every URL. Live XML gives all 36 URLs `2026-11-04T03:29:20.045Z`, without recording actual content updates. | Confirmed imprecise modification signals; cached/generated sitemap behavior means this does not necessarily change every request. No evidence it causes exclusion. | Use meaningful editorial dates or omit `lastModified` when unknown. Preserve current valid canonical URLs. | Low. |
| R1 — **LOW** | Normalization adds hops: `http://maxlawnv.com/` is 308 → 308 → 200; the same host's old motorcycle URL is 308 → 308 → 308 → 200. A legacy `.html/` path also takes two redirects. | Confirmed extra hops; all sampled hops are permanent, end correctly, and do not loop. This is not a critical migration failure. | Prefer direct final canonical links now. Consider shorter edge/domain redirects later if Vercel supports an uncomplicated configuration; retain HTTPS enforcement. | Low–medium; domain settings access needed. |
| T1 — **LOW** | 29 of the 38 index-eligible pages repeat the firm name within one title, usually a page brand suffix plus the inherited root title template. `/media` repeats the complete firm suffix. All 38 page titles remain unique; the priority car/premises absolute-title fixes work. | Confirmed title verbosity, distinct from the already-fixed duplicate-title issue. No demonstrated indexing or ranking impact. | Optional targeted metadata cleanup of affected pages only. Preserve current priority titles, H1s and URLs. | Low; not migration-critical. |

An ancillary live **`/api/reviews` 500** reports missing Google Places configuration. `src/app/api/reviews/route.ts:47` explains that response. The currently used `GoogleReviews.tsx` renders static shared testimonials, so a missing public content block or indexing failure was not established. Treat this as **LOW operational follow-up**, not a proposed SEO infrastructure project. No secrets were read.

## Potential Problems Requiring Verification

| Question | Evidence so far | What would settle it / recommendation |
|---|---|---|
| Did the migration cause a loss in organic visibility? | Historical paths changed and many relevant paths remain 404. Git dates the known redirect additions to October 2026, well after the modern app already appears in history. | Obtain the actual migration/deploy dates and compare pre/post GSC query/page data, organic landings and qualified leads over comparable periods. The supplied snapshots show indexing improving, not an independently proven traffic decline. |
| Do dead URLs have valuable backlinks? | Archive evidence proves historical URLs, not backlinks. Car, attorney, service hubs and media/case-story URLs are priority **backlink-check candidates** only. | Join GSC Links and a dated backlink export to this matrix. Record source URL, exact target spelling/host, anchor, live link, follow/redirect behavior and last seen. Do not assign invented link counts or value. |
| Which pages are discovered/crawled but not indexed? | Six weakly linked criminal pages and several brief service pages are plausible review candidates; all current public pages are crawlable. | Export exact GSC URLs, inspect last crawl, referring page/sitemap, crawled HTML, declared/selected canonical and Live Test. Do not label candidates as the reported nine or three. |
| Is the Match.com 404 worth restoring? | Archived old page is a standalone 2015 Inside Edition story, with original reporting link and substantial story content. Current `/media` has only an excerpt of a different Review-Journal story about the same person. | Check links, traffic and editorial value. Retain 404 now; recreate an appropriate specific page only after review. `/media`, the attorney profile and homepage are not proven substitutes. |
| Was medical malpractice intentionally withdrawn? | `e93b7cd` deleted `src/app/practice/medical-malpractice/page.tsx` on September 24, 2025. Both historical HTML variants and the former modern route now return 404. No equivalent page survives. | Confirm service scope with the firm before restoration. Retain 404, or choose 410 for confirmed permanent retirement; do not redirect to unrelated injury pages. The deletion predates the current October redirect work. |
| Has broad injury/criminal landing-page intent been diluted? | Archived injury hub had a dedicated injury overview; current `/practice` combines injury and criminal services. Existing criminal index redirect leads to that relevant mixed hub. `/criminal-defense` is 404 and has no page file. | Review historical landing traffic, links and conversion intent before commissioning dedicated hubs. `/practice` is the best existing directory substitute, but not a like-for-like standalone injury/criminal page. Do not invent a destination or change structures now. |
| Do Theft and Larceny compete in search? | Both self-canonical 200 pages use nearly interchangeable theft/larceny titles, headings and defenses; Larceny lacks initial incoming links. | Compare GSC query → URL selection and traffic/backlinks, then differentiate scope or consolidate with a justified winner. Overlapping intent is confirmed; damaging cannibalization is not. |
| What is the reported soft 404? | No current commercial 200 page expresses “not found,” unavailable or coming soon. Missing controls and legacy pages return actual 404. `/plain.html` is a low-value 200 diagnostic candidate, not a proven GSC match. | Export the exact soft-404 URL and inspect Google's saved/live HTML and status. Test unknown URLs and variants; do not select a page by guesswork. |
| Do the two “alternate canonical” entries indicate an error? | Current public pages declare self-canonicals. Query variants `/?safe=1`, `/?lite=1` and a redirected legacy query canonicalize to their clean base pages. | Identify GSC's exact examples and Google-selected canonical. Correct canonicalization can be expected and does not require making every variant indexable. |
| Are location/authority signals sufficient for competitive searches? | One service-area page lists relevant communities; there are no dedicated Henderson/Summerlin landing routes. Firm credentials, testimonials and attorney information exist. | Review query/location demand, Google Business Profile, citation consistency, actual local work and earned links. Absence of city pages alone is not a defect or reason for mass content creation. |

## Legacy URL Redirect Matrix

All OLD paths below were tested on **`https://www.maxlawnv.com`**, with the exact displayed case, suffix and query. Historical source links preserve the older host/scheme where recorded. Current protocol/host tests appear separately below; the full archived HTTP host variants were not individually crawled. This matrix contains **106 distinct historical/retired path or query spellings** across its four tables, including the supplied ten examples. Arrows are real HTTP response sequences, not proposed behavior. Each named modern destination was independently fetched and returns 200. “No equivalent” means no relevant complete replacement was verified in the repository/current HTML.

**Confidence:** High = explicit existing rule or strong topic/identity match to an existing route; not a claim that every old paragraph survives. Medium = broader destination or scope uncertainty requiring content review before approval. Low for redirect = do not redirect until equivalence is established. Every rule remains a proposal unless it already exists. No valuable backlink is asserted for any row.

### Ten supplied GSC examples

None of these ten paths appears as an internal `<a href>` in the current initial-HTML crawl or in the live XML sitemap. Source inspection found the configured legacy references in `next.config.ts`, not live navigation. There are no loops. The eight configured redirects each have one hop on the preferred HTTPS origin.

| OLD URL | NEW URL / verified destination | CURRENT STATUS | REDIRECT STATUS | CONFIDENCE | RECOMMENDATION |
|---|---|---|---|---|---|
| [/Woman-beaten-by-Match-com-predator-speaks-out.html](https://www.maxlawnv.com/Woman-beaten-by-Match-com-predator-speaks-out.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 for now; review recreating the specific story. /media covers a different Match.com story, not this full article. |
| [/About-The-Firm/Marc-A-Saggese-Esq.html](https://www.maxlawnv.com/About-The-Firm/Marc-A-Saggese-Esq.html) | /about/marc-a-saggese (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/Criminal-Defense/index.html](https://www.maxlawnv.com/Criminal-Defense/index.html) | /practice (200) | 308 → 200 | 308, existing | High | KEEP current relevant mixed hub for now; no dedicated criminal landing page exists. Review hub coverage before changing target. |
| [/Criminal-Defense/Drugs.html](https://www.maxlawnv.com/Criminal-Defense/Drugs.html) | /criminal-defense/drugs (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/Personal-Injury/Motorcycle-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Motorcycle-Accidents.html) | /practice/motorcycle-accidents (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/Criminal-Defense/Burglary.html](https://www.maxlawnv.com/Criminal-Defense/Burglary.html) | /criminal-defense/burglary (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/Site-Map.html](https://www.maxlawnv.com/Site-Map.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; optional replacement HTML sitemap requires a separate content decision. Do not automatically send HTML users to XML. |
| [/Criminal-Defense/Forgery.html](https://www.maxlawnv.com/Criminal-Defense/Forgery.html) | /criminal-defense/forgery (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/Criminal-Defense/Record-Sealing.html](https://www.maxlawnv.com/Criminal-Defense/Record-Sealing.html) | /criminal-defense/record-sealing (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/Personal-Injury/Wrongful-Death.html](https://www.maxlawnv.com/Personal-Injury/Wrongful-Death.html) | /practice/wrongful-death (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |

`/Criminal-Defense/index.html` → `/practice` is a working, relevant fallback with a Criminal Defense section, not a nonexistent dedicated landing page. It is broader than the old page and should be reviewed for coverage, not casually replaced with `/criminal-defense` (404).

`/Site-Map.html` was an HTML navigation page. `/sitemap.xml` is a valid XML crawler file, not a verified equivalent HTML user destination. Retaining a true 404 is acceptable while considering whether an HTML sitemap is useful. A 410 is optional only when permanent removal is deliberate; 404 counts do not all have to reach zero.

### Additional archived URLs and directory spellings

Evidence for every row is a captured HTTP-200 HTML record in the CDX query. Record dates identify the retrieved capture, not the first/last publication or migration date. These paths were discovered rather than invented. Some HTML bodies were not individually reviewed; broader mappings are deliberately marked provisional.

| OLD URL | NEW URL / verified destination | CURRENT STATUS | REDIRECT STATUS | CONFIDENCE | RECOMMENDATION / historical evidence |
|---|---|---|---|---|---|
| [/.old_site/](https://www.maxlawnv.com/.old_site/) | — (no verified equivalent) | 308 → 404 | 308 | Low for redirect | Retain 404; archived backup namespace, not a current marketing destination. [CDX 2023-10-29](https://web.archive.org/web/20231029031516/https://www.maxlawnv.com/.old_site/) |
| [/.old_site/www.maxlawnv.com/index.html](https://www.maxlawnv.com/.old_site/www.maxlawnv.com/index.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; archived backup namespace; do not restore site backups. [CDX 2023-10-29](https://web.archive.org/web/20231029065011/https://www.maxlawnv.com/.old_site/www.maxlawnv.com/index.html) |
| [/About-The-Firm/](https://www.maxlawnv.com/About-The-Firm/) | /about (200) | 308 → 404 | 308 | High | REDIRECT: map normalized slashless old path directly to this verified final page; default slash normalization may add one hop. Approval required. [CDX 2025-03-23](https://web.archive.org/web/20250323030426/https://www.maxlawnv.com/About-The-Firm/) |
| [/About-The-Firm/index.html](https://www.maxlawnv.com/About-The-Firm/index.html) | /about (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165306/https://www.maxlawnv.com/About-The-Firm/index.html) |
| [/Contact.html](https://www.maxlawnv.com/Contact.html) | /contact (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165242/https://www.maxlawnv.com/Contact.html) |
| [/Criminal-Defense/Bad-Checks.html](https://www.maxlawnv.com/Criminal-Defense/Bad-Checks.html) | /criminal-defense/bad-checks (200) | 308 → 200 | 308 | High | KEEP existing 308; no new rule required. [CDX 2023-05-19](https://web.archive.org/web/20230519165027/https://www.maxlawnv.com/Criminal-Defense/Bad-Checks.html) |
| [/Criminal-Defense/DUI.html](https://www.maxlawnv.com/Criminal-Defense/DUI.html) | /criminal-defense/dui (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165130/https://www.maxlawnv.com/Criminal-Defense/DUI.html) |
| [/Criminal-Defense/Domestic-Violence.html](https://www.maxlawnv.com/Criminal-Defense/Domestic-Violence.html) | /criminal-defense/domestic-violence (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165107/https://www.maxlawnv.com/Criminal-Defense/Domestic-Violence.html) |
| [/Criminal-Defense/Juvenile-Crimes.html](https://www.maxlawnv.com/Criminal-Defense/Juvenile-Crimes.html) | /criminal-defense/juvenile-crimes (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165022/https://www.maxlawnv.com/Criminal-Defense/Juvenile-Crimes.html) |
| [/Criminal-Defense/Larceny.html](https://www.maxlawnv.com/Criminal-Defense/Larceny.html) | /criminal-defense/larceny (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165123/https://www.maxlawnv.com/Criminal-Defense/Larceny.html) |
| [/Criminal-Defense/Murder.html](https://www.maxlawnv.com/Criminal-Defense/Murder.html) | /criminal-defense/murder (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165023/https://www.maxlawnv.com/Criminal-Defense/Murder.html) |
| [/Criminal-Defense/Prostitution.html](https://www.maxlawnv.com/Criminal-Defense/Prostitution.html) | /criminal-defense/prostitution (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165127/https://www.maxlawnv.com/Criminal-Defense/Prostitution.html) |
| [/Criminal-Defense/Sexual-Assault.html](https://www.maxlawnv.com/Criminal-Defense/Sexual-Assault.html) | /criminal-defense/sexual-assault (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165043/https://www.maxlawnv.com/Criminal-Defense/Sexual-Assault.html) |
| [/Criminal-Defense/Theft.html](https://www.maxlawnv.com/Criminal-Defense/Theft.html) | /criminal-defense/theft (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165052/https://www.maxlawnv.com/Criminal-Defense/Theft.html) |
| [/Disclaimer.html](https://www.maxlawnv.com/Disclaimer.html) | /disclaimer (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165008/https://www.maxlawnv.com/Disclaimer.html) |
| [/Media.html](https://www.maxlawnv.com/Media.html) | /media (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165257/https://www.maxlawnv.com/Media.html) |
| [/Personal-Injury/](https://www.maxlawnv.com/Personal-Injury/) | /practice (200; provisional) | 308 → 404 | 308 | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. [CDX 2025-03-11](https://web.archive.org/web/20250311231812/https://www.maxlawnv.com/Personal-Injury/) |
| [/Personal-Injury/Brain-And-Spine-Injury.html](https://www.maxlawnv.com/Personal-Injury/Brain-And-Spine-Injury.html) | /practice/brain-and-spine-injury (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165147/https://www.maxlawnv.com/Personal-Injury/Brain-And-Spine-Injury.html) |
| [/Personal-Injury/Car-Accident-Statistics.html](https://www.maxlawnv.com/Personal-Injury/Car-Accident-Statistics.html) | /practice/car-accident-statistics (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165224/https://www.maxlawnv.com/Personal-Injury/Car-Accident-Statistics.html) |
| [/Personal-Injury/Car-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Car-Accidents.html) | /practice/car-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165242/https://www.maxlawnv.com/Personal-Injury/Car-Accidents.html) |
| [/Personal-Injury/Cell-Phone-Related-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Cell-Phone-Related-Accidents.html) | /practice/cell-phone-related-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165224/https://www.maxlawnv.com/Personal-Injury/Cell-Phone-Related-Accidents.html) |
| [/Personal-Injury/Commercial-Vehicle-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Commercial-Vehicle-Accidents.html) | /practice/commercial-vehicle-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165154/https://www.maxlawnv.com/Personal-Injury/Commercial-Vehicle-Accidents.html) |
| [/Personal-Injury/Crosswalk-And-Pedestrian-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Crosswalk-And-Pedestrian-Accidents.html) | /practice/crosswalk-and-pedestrian-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165151/https://www.maxlawnv.com/Personal-Injury/Crosswalk-And-Pedestrian-Accidents.html) |
| [/Personal-Injury/Elder-Abuse.html](https://www.maxlawnv.com/Personal-Injury/Elder-Abuse.html) | /practice/elder-abuse (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165146/https://www.maxlawnv.com/Personal-Injury/Elder-Abuse.html) |
| [/Personal-Injury/Excessive-Force.html](https://www.maxlawnv.com/Personal-Injury/Excessive-Force.html) | /practice/excessive-force (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165146/https://www.maxlawnv.com/Personal-Injury/Excessive-Force.html) |
| [/Personal-Injury/Insurance-Settlements-And-Checks.html](https://www.maxlawnv.com/Personal-Injury/Insurance-Settlements-And-Checks.html) | /practice/insurance-settlements-and-checks (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165130/https://www.maxlawnv.com/Personal-Injury/Insurance-Settlements-And-Checks.html) |
| [/Personal-Injury/Medical-Malpractice.html](https://www.maxlawnv.com/Personal-Injury/Medical-Malpractice.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 pending firm service decision; no current equivalent. Consider reviewed restoration only if service remains offered. [CDX 2023-05-19](https://web.archive.org/web/20230519165144/https://www.maxlawnv.com/Personal-Injury/Medical-Malpractice.html) |
| [/Personal-Injury/Premises-Liability.html](https://www.maxlawnv.com/Personal-Injury/Premises-Liability.html) | /practice/premises-liability (200) | 308 → 200 | 308 | High | KEEP existing 308; no new rule required. [CDX 2023-05-19](https://web.archive.org/web/20230519165150/https://www.maxlawnv.com/Personal-Injury/Premises-Liability.html) |
| [/Personal-Injury/Product-Liability.html](https://www.maxlawnv.com/Personal-Injury/Product-Liability.html) | /practice/product-liability (200) | 308 → 200 | 308 | High | KEEP existing 308; no new rule required. [CDX 2023-05-19](https://web.archive.org/web/20230519165149/https://www.maxlawnv.com/Personal-Injury/Product-Liability.html) |
| [/Personal-Injury/Truck-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Truck-Accidents.html) | /practice/truck-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165205/https://www.maxlawnv.com/Personal-Injury/Truck-Accidents.html) |
| [/Personal-Injury/Types-Of-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Types-Of-Accidents.html) | /practice (200; provisional) | 404 | None | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. [CDX 2023-05-19](https://web.archive.org/web/20230519165242/https://www.maxlawnv.com/Personal-Injury/Types-Of-Accidents.html) |
| [/Personal-Injury/Underinsured-And-Uninsured-Accidents.html](https://www.maxlawnv.com/Personal-Injury/Underinsured-And-Uninsured-Accidents.html) | /practice/underinsured-and-uninsured-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165212/https://www.maxlawnv.com/Personal-Injury/Underinsured-And-Uninsured-Accidents.html) |
| [/Personal-Injury/index.html](https://www.maxlawnv.com/Personal-Injury/index.html) | /practice (200; provisional) | 404 | None | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. [CDX 2023-05-19](https://web.archive.org/web/20230519165259/https://www.maxlawnv.com/Personal-Injury/index.html) |
| [/Privacy-Policy.html](https://www.maxlawnv.com/Privacy-Policy.html) | /privacy-policy (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2023-05-19](https://web.archive.org/web/20230519165001/https://www.maxlawnv.com/Privacy-Policy.html) |
| [/Search.html](https://www.maxlawnv.com/Search.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; no current site-search page. 410 optional if intentionally retired. [CDX 2023-05-19](https://web.archive.org/web/20230519165131/https://www.maxlawnv.com/Search.html) |
| [/about-marc-saggese.html](https://www.maxlawnv.com/about-marc-saggese.html) | /about/marc-a-saggese (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124222652/http://maxlawnv.com/about-marc-saggese.html) |
| [/ask-a-lawyer.html](https://www.maxlawnv.com/ask-a-lawyer.html) | /media (200; provisional) | 404 | None | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. [CDX 2015-11-24](https://web.archive.org/web/20151124091330/http://maxlawnv.com/ask-a-lawyer.html) |
| [/assault.html](https://www.maxlawnv.com/assault.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 pending archived-content/service review; domestic-violence and excessive-force pages are not equivalent. [CDX 2015-11-24](https://web.archive.org/web/20151124184034/http://maxlawnv.com/assault.html) |
| [/bad-checks.html](https://www.maxlawnv.com/bad-checks.html) | /criminal-defense/bad-checks (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124145358/http://maxlawnv.com/bad-checks.html) |
| [/battery---domestic-violence.html](https://www.maxlawnv.com/battery---domestic-violence.html) | /criminal-defense/domestic-violence (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124071034/http://maxlawnv.com/battery---domestic-violence.html) |
| [/burglary.html](https://www.maxlawnv.com/burglary.html) | /criminal-defense/burglary (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124063124/http://maxlawnv.com/burglary.html) |
| [/car-accidents.html](https://www.maxlawnv.com/car-accidents.html) | /practice/car-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124020554/http://maxlawnv.com/car-accidents.html) |
| [/contact/](https://www.maxlawnv.com/contact/) | /contact (200) | 308 → 200 | 308 | High | KEEP working normalization; no additional migration rule needed. [CDX 2012-03-22](https://web.archive.org/web/20120322200855/http://maxlawnv.com:80/contact/) |
| [/defenses-to-drug-charges.html](https://www.maxlawnv.com/defenses-to-drug-charges.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 until archival intent review. /criminal-defense/drugs is 200 but only a brief overview, not a verified replacement for this specific article. [CDX 2015-11-24](https://web.archive.org/web/20151124112325/http://maxlawnv.com/defenses-to-drug-charges.html) |
| [/dui.html](https://www.maxlawnv.com/dui.html) | /criminal-defense/dui (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124081736/http://maxlawnv.com/dui.html) |
| [/elder-abuse.html](https://www.maxlawnv.com/elder-abuse.html) | /practice/elder-abuse (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124121915/http://maxlawnv.com/elder-abuse.html) |
| [/excessive-force.html](https://www.maxlawnv.com/excessive-force.html) | /practice/excessive-force (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124150453/http://maxlawnv.com/excessive-force.html) |
| [/forgery.html](https://www.maxlawnv.com/forgery.html) | /criminal-defense/forgery (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-25](https://web.archive.org/web/20151125100205/http://maxlawnv.com/forgery.html) |
| [/index.html](https://www.maxlawnv.com/index.html) | / (200) | 308 → 200 | 308 | High | KEEP existing 308; no new rule required. [CDX 2015-02-14](https://web.archive.org/web/20150214192359/http://maxlawnv.com:80/index.html) |
| [/index.html?devicelock=desktop](https://www.maxlawnv.com/index.html?devicelock=desktop) | / (200) | 308 → 200 | 308 | High | KEEP working normalization; no additional migration rule needed. [CDX 2016-04-12](https://web.archive.org/web/20160412134946/http://maxlawnv.com/index.html?devicelock=desktop) |
| [/juvenile-crimes.html](https://www.maxlawnv.com/juvenile-crimes.html) | /criminal-defense/juvenile-crimes (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124132144/http://maxlawnv.com/juvenile-crimes.html) |
| [/larceny.html](https://www.maxlawnv.com/larceny.html) | /criminal-defense/larceny (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-25](https://web.archive.org/web/20151125055435/http://maxlawnv.com/larceny.html) |
| [/las-vegas-police-ordered-to-pay-in-fatal-crash.html](https://www.maxlawnv.com/las-vegas-police-ordered-to-pay-in-fatal-crash.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; specific historical case/article not replaced by generic car-accident service content. [CDX 2015-11-24](https://web.archive.org/web/20151124181015/http://maxlawnv.com/las-vegas-police-ordered-to-pay-in-fatal-crash.html) |
| [/links/](https://www.maxlawnv.com/links/) | — (no verified equivalent) | 308 → 404 | 308 | Low for redirect | Retain 404; no equivalent curated link page identified. [CDX 2012-03-22](https://web.archive.org/web/20120322200857/http://maxlawnv.com:80/links/) |
| [/marc-saggese-bio-page/](https://www.maxlawnv.com/marc-saggese-bio-page/) | /about/marc-a-saggese (200) | 308 → 404 | 308 | High | REDIRECT: map normalized slashless old path directly to this verified final page; default slash normalization may add one hop. Approval required. [CDX 2012-04-07](https://web.archive.org/web/20120407233454/http://maxlawnv.com:80/marc-saggese-bio-page/) |
| [/media/](https://www.maxlawnv.com/media/) | /media (200) | 308 → 200 | 308 | High | KEEP working normalization; no additional migration rule needed. [CDX 2012-03-22](https://web.archive.org/web/20120322200913/http://maxlawnv.com:80/media/) |
| [/medical-malpractice.html](https://www.maxlawnv.com/medical-malpractice.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 pending service decision; no equivalent. Do not redirect to unrelated injury pages. [CDX 2015-11-24](https://web.archive.org/web/20151124214640/http://maxlawnv.com/medical-malpractice.html) |
| [/more-media.html](https://www.maxlawnv.com/more-media.html) | /media (200; provisional) | 404 | None | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. [CDX 2015-11-24](https://web.archive.org/web/20151124221812/http://maxlawnv.com/more-media.html) |
| [/motorcycle-accidents.html](https://www.maxlawnv.com/motorcycle-accidents.html) | /practice/motorcycle-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-02-25](https://web.archive.org/web/20150225203841/http://maxlawnv.com:80/motorcycle-accidents.html) |
| [/murder.html](https://www.maxlawnv.com/murder.html) | /criminal-defense/murder (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124231752/http://maxlawnv.com/murder.html) |
| [/phone/about-the-firm.html](https://www.maxlawnv.com/phone/about-the-firm.html) | /about (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2016-04-12](https://web.archive.org/web/20160412092315/http://maxlawnv.com/phone/about-the-firm.html) |
| [/phone/index.html](https://www.maxlawnv.com/phone/index.html) | / (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-08-03](https://web.archive.org/web/20150803220138/http://maxlawnv.com/phone/index.html) |
| [/phone/practice-areas.html](https://www.maxlawnv.com/phone/practice-areas.html) | /practice (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2016-04-12](https://web.archive.org/web/20160412100813/http://maxlawnv.com/phone/practice-areas.html) |
| [/police-cover-up.html](https://www.maxlawnv.com/police-cover-up.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; no matching current article. Review archive/backlinks before restoring. [CDX 2015-11-24](https://web.archive.org/web/20151124065435/http://maxlawnv.com/police-cover-up.html) |
| [/possession-of-controlled-substance-with-intent-to-sell-distribute.html](https://www.maxlawnv.com/possession-of-controlled-substance-with-intent-to-sell-distribute.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 until archival intent review. /criminal-defense/drugs is 200 but only a brief overview, not a verified replacement for this specific article. [CDX 2016-04-13](https://web.archive.org/web/20160413062144/http://maxlawnv.com/possession-of-controlled-substance-with-intent-to-sell-distribute.html) |
| [/possession-of-controlled-substance.html](https://www.maxlawnv.com/possession-of-controlled-substance.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 until archival intent review. /criminal-defense/drugs is 200 but only a brief overview, not a verified replacement for this specific article. [CDX 2016-04-13](https://web.archive.org/web/20160413061532/http://maxlawnv.com/possession-of-controlled-substance.html) |
| [/practice-areas/](https://www.maxlawnv.com/practice-areas/) | /practice (200) | 308 → 404 | 308 | High | REDIRECT: map normalized slashless old path directly to this verified final page; default slash normalization may add one hop. Approval required. [CDX 2012-03-22](https://web.archive.org/web/20120322200920/http://maxlawnv.com:80/practice-areas/) |
| [/practice-areas/civil-cases/](https://www.maxlawnv.com/practice-areas/civil-cases/) | — (no verified equivalent) | 308 → 404 | 308 | Low for redirect | Retain 404 pending archived-content review; broad civil litigation is not necessarily injury representation. [CDX 2012-03-22](https://web.archive.org/web/20120322224256/http://maxlawnv.com:80/practice-areas/civil-cases/) |
| [/practice-areas/criminal-cases/](https://www.maxlawnv.com/practice-areas/criminal-cases/) | /practice (200; provisional) | 308 → 404 | 308 | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. [CDX 2012-03-22](https://web.archive.org/web/20120322224302/http://maxlawnv.com:80/practice-areas/criminal-cases/) |
| [/practice-areas/personal-injury/](https://www.maxlawnv.com/practice-areas/personal-injury/) | /practice (200; provisional) | 308 → 404 | 308 | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. [CDX 2012-03-22](https://web.archive.org/web/20120322224306/http://maxlawnv.com:80/practice-areas/personal-injury/) |
| [/practice-areas/seal-your-records/](https://www.maxlawnv.com/practice-areas/seal-your-records/) | /criminal-defense/record-sealing (200) | 308 → 404 | 308 | High | REDIRECT: map normalized slashless old path directly to this verified final page; default slash normalization may add one hop. Approval required. [CDX 2012-03-22](https://web.archive.org/web/20120322224311/http://maxlawnv.com:80/practice-areas/seal-your-records/) |
| [/premises-liability.html](https://www.maxlawnv.com/premises-liability.html) | /practice/premises-liability (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124223758/http://maxlawnv.com/premises-liability.html) |
| [/probation-violation.html](https://www.maxlawnv.com/probation-violation.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; no current dedicated equivalent. Recreate only if offered and demand/value supports it. [CDX 2015-11-25](https://web.archive.org/web/20151125013835/http://maxlawnv.com/probation-violation.html) |
| [/product-liability.html](https://www.maxlawnv.com/product-liability.html) | /practice/product-liability (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124011833/http://maxlawnv.com/product-liability.html) |
| [/prostitution.html](https://www.maxlawnv.com/prostitution.html) | /criminal-defense/prostitution (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-25](https://web.archive.org/web/20151125091024/http://maxlawnv.com/prostitution.html) |
| [/record-sealing.html](https://www.maxlawnv.com/record-sealing.html) | /criminal-defense/record-sealing (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-25](https://web.archive.org/web/20151125104841/http://maxlawnv.com/record-sealing.html) |
| [/sale-of-a-controlled-substance.html](https://www.maxlawnv.com/sale-of-a-controlled-substance.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 until archival intent review. /criminal-defense/drugs is 200 but only a brief overview, not a verified replacement for this specific article. [CDX 2016-04-13](https://web.archive.org/web/20160413004151/http://maxlawnv.com/sale-of-a-controlled-substance.html) |
| [/sample-page/](https://www.maxlawnv.com/sample-page/) | — (no verified equivalent) | 308 → 404 | 308 | Low for redirect | Retain 404; apparent historical utility/sample route; no replacement needed. [CDX 2012-03-22](https://web.archive.org/web/20120322224316/http://maxlawnv.com:80/sample-page/) |
| [/sexual-assault.html](https://www.maxlawnv.com/sexual-assault.html) | /criminal-defense/sexual-assault (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-25](https://web.archive.org/web/20151125014316/http://maxlawnv.com/sexual-assault.html) |
| [/staff/](https://www.maxlawnv.com/staff/) | — (no verified equivalent) | 308 → 404 | 308 | Low for redirect | Retain 404; no verified same staff inventory. Do not assume the sole attorney profile replaces all staff. [CDX 2012-03-22](https://web.archive.org/web/20120322201007/http://maxlawnv.com:80/staff/) |
| [/theft.html](https://www.maxlawnv.com/theft.html) | /criminal-defense/theft (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-25](https://web.archive.org/web/20151125062803/http://maxlawnv.com/theft.html) |
| [/trafficking-in-a-controlled-substance.html](https://www.maxlawnv.com/trafficking-in-a-controlled-substance.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 until archival intent review. /criminal-defense/drugs is 200 but only a brief overview, not a verified replacement for this specific article. [CDX 2016-04-13](https://web.archive.org/web/20160413062149/http://maxlawnv.com/trafficking-in-a-controlled-substance.html) |
| [/transporting-a-controlled-substance.html](https://www.maxlawnv.com/transporting-a-controlled-substance.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 until archival intent review. /criminal-defense/drugs is 200 but only a brief overview, not a verified replacement for this specific article. [CDX 2016-04-13](https://web.archive.org/web/20160413004948/http://maxlawnv.com/transporting-a-controlled-substance.html) |
| [/woman-beaten-by-match.com-predator-speaks-out.html](https://www.maxlawnv.com/woman-beaten-by-match.com-predator-speaks-out.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; review alongside the archived Match.com article; punctuation differs, not just case. [CDX 2015-11-24](https://web.archive.org/web/20151124230511/http://maxlawnv.com/woman-beaten-by-match.com-predator-speaks-out.html) |
| [/wrongful-death.html](https://www.maxlawnv.com/wrongful-death.html) | /practice/wrongful-death (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. [CDX 2015-11-24](https://web.archive.org/web/20151124170553/http://maxlawnv.com/wrongful-death.html) |

### Additional references from archived HTML

The seven spellings below are explicitly present in archived hyperlinks, mirror comments or Open Graph original-URL metadata. They were not in the filtered 200 CDX result. In particular, the nested Disclaimer/Site-Map spellings may have been broken relative links historically. They are not claimed to have been indexed or linked externally.

| OLD URL | NEW URL / verified destination | CURRENT STATUS | REDIRECT STATUS | CONFIDENCE | RECOMMENDATION / evidence |
|---|---|---|---|---|---|
| [/Ask-a-Lawyer.html](https://www.maxlawnv.com/Ask-a-Lawyer.html) | /media (200; provisional) | 404 | None | Medium | Review scope/content before approving a 308; mixed /practice hub or media index is broader than the old page. Evidence: old-sitemap HTML link |
| [/Las-Vegas-police-ordered-to-pay-in-fatal-crash.html](https://www.maxlawnv.com/Las-Vegas-police-ordered-to-pay-in-fatal-crash.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; historical sitemap case variant; review exact case/article before restoration. Evidence: old-sitemap HTML link |
| [/Personal-Injury/Car-Accidents.shtml](https://www.maxlawnv.com/Personal-Injury/Car-Accidents.shtml) | /practice/car-accidents (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. Evidence: old-car original mirror/og:url reference |
| [/Personal-Injury/Disclaimer.html](https://www.maxlawnv.com/Personal-Injury/Disclaimer.html) | /disclaimer (200) | 404 | None | High | REDIRECT: propose direct permanent 308 to this verified matching current page; approval required. Evidence: old-car HTML link |
| [/Personal-Injury/Site-Map.html](https://www.maxlawnv.com/Personal-Injury/Site-Map.html) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; historical relative-link artifact, not a verified published page. Evidence: old-car HTML link |
| [/Site-Map.shtml](https://www.maxlawnv.com/Site-Map.shtml) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; optional HTML sitemap decision. No current HTML sitemap. Evidence: old-sitemap original mirror/og:url reference |
| [/Woman-beaten-by-Match-com-predator-speaks-out.shtml](https://www.maxlawnv.com/Woman-beaten-by-Match-com-predator-speaks-out.shtml) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404; same article-family restoration review; no current equivalent. Evidence: old-match original mirror/og:url reference |

### Other historical modern aliases and deleted route

| OLD URL | NEW URL / verified destination | CURRENT STATUS | REDIRECT STATUS | CONFIDENCE | RECOMMENDATION |
|---|---|---|---|---|---|
| [/criminal-defense/drug-offenses](https://www.maxlawnv.com/criminal-defense/drug-offenses) | /criminal-defense/drugs (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/criminal-defense/battery-domestic-violence](https://www.maxlawnv.com/criminal-defense/battery-domestic-violence) | /criminal-defense/domestic-violence (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/practice/brain-spine-injury](https://www.maxlawnv.com/practice/brain-spine-injury) | /practice/brain-and-spine-injury (200) | 308 → 200 | 308, existing | High | KEEP existing 308; no new rule required. |
| [/practice/medical-malpractice](https://www.maxlawnv.com/practice/medical-malpractice) | — (no verified equivalent) | 404 | None | Low for redirect | Retain 404 pending service decision; page removed in e93b7cd (2025-09-24). 410 optional for permanent retirement. |

### Repository redirect history and implementation audit

- `next.config.ts:10–87` contains **15 explicit permanent rules**: twelve `.html` rules and three modern slug aliases. **All 15 production sources return 308 → 200.** There are no temporary migration rules in this configuration.
- `4f31893` (**October 14, 2026**) added `/index.html` and the eight supplied service/attorney legacy rules. `4ee3a34` (**October 29, 2026**) added Bad Checks, Premises Liability and Product Liability. Git `-S` history confirms all three modern slug aliases were added in `8d3a237` (**November 22, 2025**). The exact deployment dates cannot be inferred from commit dates.
- Reachable Git history was searched for `.html` references and route deletions. It did not contain a comprehensive pre-rebuild site export or complete redirect map. Existing `docs/seo-audit-2026-08-20.md`, `docs/seo-implementation-checklist.md`, `NovGameplan.md` and `NovGEOplan.md` contain prior findings/plans, not a substitute for this production verification.
- No `next.config.js`, `vercel.json`, `middleware.ts`, `proxy.ts`, Pages Router routes, or catch-all page redirect layer is tracked. App Router route handlers implement API responses, not migration redirects. Searches found no `redirect()`, `permanentRedirect()`, `NextResponse.redirect`, `router.push/replace`, `location.replace` or `window.location` navigation implementing alternate migration behavior. Analytics reads of `window.location` are not redirects.
- Sentry's `/monitoring` tunnel is a rewrite/configuration concern, not a legacy-page redirect. No request was posted to it. No conflicting public page route occupies any of the configured redirect-source paths.
- Existing `.next/routes-manifest.json` agrees with the fifteen rules and adds a framework trailing-slash normalization rule. The built manifest also records `caseSensitive: false`, corroborating the tested legacy case variants. The installed Next.js guide states `permanent: true` produces **308**, an appropriate permanent status; 301 is also permanent, but converting working 308s is unnecessary. The installed guide also confirms redirects run before filesystem routes and carry query parameters through.
- Canonicals, schema URLs, robots and sitemap consistently use the preferred HTTPS **www** origin. These signals do not themselves enforce hostname redirects. Live behavior verifies host and HTTPS normalization; their Vercel ownership/configuration is outside this repository.
- No blanket rule normalizes arbitrary uppercase modern routes or strips all `.html` suffixes. The tested legacy variants match existing rules; this does not establish that every case/path spelling resolves.

### Production normalization samples

| Starting request | Observed chain / final URL | Assessment |
|---|---|---|
| `http://maxlawnv.com/` | 308 → `https://maxlawnv.com/` → 308 → `https://www.maxlawnv.com/` → 200 | Correct preferred origin; two normalization hops. |
| `http://www.maxlawnv.com/` | 308 → `https://www.maxlawnv.com/` → 200 | Correct HTTPS normalization. |
| `https://maxlawnv.com/` | 308 → `https://www.maxlawnv.com/` → 200 | Correct preferred www host. |
| `http://maxlawnv.com/Personal-Injury/Motorcycle-Accidents.html` | 308 HTTPS → 308 www → 308 `/practice/motorcycle-accidents` → 200 | Three hops, no loop. |
| `https://maxlawnv.com/Personal-Injury/Motorcycle-Accidents.html` | 308 www → 308 modern path → 200 | Two hops. |
| `http://www.maxlawnv.com/Personal-Injury/Motorcycle-Accidents.html` | 308 HTTPS → 308 modern path → 200 | Two hops. |
| `/about/`, `/practice/car-accidents/`, `/criminal-defense/drugs/` | Each 308 → corresponding slashless 200 page | Default trailingSlash behavior; no config override. |
| `/Criminal-Defense/Drugs.html/` | 308 → same `.html` without slash → 308 `/criminal-defense/drugs` → 200 | Two hops. |
| `/criminal-defense/drugs.html`, `/CRIMINAL-DEFENSE/DRUGS.HTML` | Each 308 → `/criminal-defense/drugs` → 200 | Lower/upper legacy spellings work for this sampled rule. |
| `/Criminal-Defense/Drugs.html?audit=1` | 308 → `/criminal-defense/drugs?audit=1` → 200; canonical is the clean drugs URL | Query preserved, canonical normalized. |
| `/?safe=1`, `/?lite=1` | 200; canonical is homepage | Intentional base-page canonical, not a missing self-canonical defect. |
| `/audit-nonexistent-7e14` | 404 | Genuine missing-page status, not a 200 fallback. |

## Indexing Assessment

The supplied GSC summary says **25 indexed / 26 not indexed**. Its category totals reconcile to 26. These are Google's historical URL populations, not the current number of valid application pages. An indexed count below 38 does not establish that thirteen specific pages are blocked; retired URLs, duplicates and report timing differ.

| Supplied GSC category | What current evidence supports | What remains unknown / action |
|---|---|---|
| **404: 10** | Eight supplied examples now permanently redirect; two still return actual 404. More archived 404s were found independently. | Inspect each example's last crawl and report update time; recrawling may resolve stale classification. Do not call the eight redirects broken based on an older report. |
| **Discovered, not indexed: 9** | Public robots allows crawling, no public noindex or canonical-to-home bug was found, 36 valid sitemap URLs exist. Six criminal routes have weak initial-HTML navigation. | Exact nine URLs are unavailable. Compare with this inventory before assigning D1 as a cause. Improve discovery only for intended pages and request inspection of priority destinations. |
| **Crawled, not indexed: 3** | Commercial pages render without needing an empty client shell. Theft/Larceny overlap is real; several brief pages need distinct value and scope review. | Exact three URLs, crawled versions and selected canonicals are unknown. Shortness or shared templates alone do not prove low quality or Google's reason. |
| **Alternate page with proper canonical: 2** | Clean public-page self-canonicals are correct. Sample query variants choose a clean canonical. | Obtain examples; an alternate status can be expected, with no fix required. |
| **Soft 404: 1** | No 200 commercial page with missing/unavailable-page text was found. All tested missing pages return 404. Public static `/plain.html` is eligible diagnostic content. | The precise soft-404 URL is not known. Do not misidentify the diagnostic or intentionally noindexed debug pages as the reported case. |
| **Page with redirect: 1** | Permanent legacy and normalization URLs should not be indexed as separate destination pages. | Obtain the example; a redirect exclusion is usually expected. Verify the final page rather than trying to index the old URL. |

The indexed population increased from 20 to 25 between the supplied August 16 and October 22 snapshots while exclusions decreased. This does not prove a recovery mechanism or a continuing decline. Use current GSC inspections and dated exports rather than repeating historical issue counts.

Google describes indexing status and URL-level inspection in its [Page indexing documentation](https://support.google.com/webmasters/answer/7440203). No repository check can certify inclusion in Google's index.

### Current page inventory

There are **40 App Router page routes**: 38 eligible public pages and two intentionally noindexed diagnostic routes. There is no blog/resource route collection, separate Henderson/Summerlin page, or `/criminal-defense` index route. The statistics and settlement pages are the existing resource-like content; `/media` links to external articles rather than hosting those articles as individual site routes.

For every application row below:

- **HTTP 200**, with no redirect on the preferred origin, was independently observed.
- **Server-rendered: yes; route-specific content in initial HTML: yes**, confirmed by parsing markup after excluding scripts, styles, noscript and serialized RSC payload. `x-nextjs-prerender: 1` is present on all 40 page routes. This is build-time prerendered HTML, not a claim of per-request rendering.
- **Self** means the exact canonical `https://www.maxlawnv.com` + Route. The homepage canonical is `https://www.maxlawnv.com` (no final slash); this is the same root resource as `https://www.maxlawnv.com/`, not a substantive canonical conflict. **Home** on the diagnostic rows is an inherited homepage canonical; their noindex remains intentional.
- **Eligible** means no meta/header noindex and no relevant robots disallow; it does not mean Google indexed the URL. Public routes emit `index, follow` and permissive Googlebot directives. The two debug routes emit `noindex, nofollow` and no separate permissive Googlebot directive was observed.
- Inbound counts are **distinct other eligible public source pages**, excluding self-links and the two debug routes. They count initial `<a href>` markup, not JavaScript bundle strings or clicks. **Global** = every other one of the 38 eligible routes via shared navigation/footer; otherwise all source routes are listed. Links inside native closed `<details>` remain real HTML links and are counted.
- Source filename for `/` is `src/app/page.tsx`; for every other application route it is **`src/app{Route}/page.tsx`**. This rule gives the exact file for every inventory row. Shared rendering is in `src/app/layout.tsx` and `src/app/components/LayoutShell.tsx`; injury/criminal detail wrappers are in their corresponding `layout.tsx` files.

| Route | HTTP | Indexability | Canonical | XML sitemap | Distinct incoming source pages (count; sources) | Server HTML / initial content |
|---|---|---|---|---|---|---|
| [/](https://www.maxlawnv.com/) | 200 | Eligible | Self | Yes | Global (37) | Yes / yes |
| [/about](https://www.maxlawnv.com/about) | 200 | Eligible | Self | Yes | Global (37) | Yes / yes |
| [/about/marc-a-saggese](https://www.maxlawnv.com/about/marc-a-saggese) | 200 | Eligible | Self | Yes | 3: `/`, `/about`, `/practice/car-accidents` | Yes / yes |
| [/contact](https://www.maxlawnv.com/contact) | 200 | Eligible | Self | Yes | Global (37) | Yes / yes |
| [/criminal-defense/bad-checks](https://www.maxlawnv.com/criminal-defense/bad-checks) | 200 | Eligible | Self | Yes | 0: none | Yes / yes |
| [/criminal-defense/burglary](https://www.maxlawnv.com/criminal-defense/burglary) | 200 | Eligible | Self | Yes | 1: `/` | Yes / yes |
| [/criminal-defense/domestic-violence](https://www.maxlawnv.com/criminal-defense/domestic-violence) | 200 | Eligible | Self | Yes | 2: `/`, `/practice` | Yes / yes |
| [/criminal-defense/drugs](https://www.maxlawnv.com/criminal-defense/drugs) | 200 | Eligible | Self | Yes | 2: `/`, `/practice` | Yes / yes |
| [/criminal-defense/dui](https://www.maxlawnv.com/criminal-defense/dui) | 200 | Eligible | Self | Yes | 2: `/`, `/practice` | Yes / yes |
| [/criminal-defense/forgery](https://www.maxlawnv.com/criminal-defense/forgery) | 200 | Eligible | Self | Yes | 1: `/` | Yes / yes |
| [/criminal-defense/juvenile-crimes](https://www.maxlawnv.com/criminal-defense/juvenile-crimes) | 200 | Eligible | Self | Yes | 0: none | Yes / yes |
| [/criminal-defense/larceny](https://www.maxlawnv.com/criminal-defense/larceny) | 200 | Eligible | Self | Yes | 0: none | Yes / yes |
| [/criminal-defense/murder](https://www.maxlawnv.com/criminal-defense/murder) | 200 | Eligible | Self | Yes | 2: `/`, `/practice` | Yes / yes |
| [/criminal-defense/prostitution](https://www.maxlawnv.com/criminal-defense/prostitution) | 200 | Eligible | Self | Yes | 0: none | Yes / yes |
| [/criminal-defense/record-sealing](https://www.maxlawnv.com/criminal-defense/record-sealing) | 200 | Eligible | Self | Yes | 0: none | Yes / yes |
| [/criminal-defense/sexual-assault](https://www.maxlawnv.com/criminal-defense/sexual-assault) | 200 | Eligible | Self | Yes | 0: none | Yes / yes |
| [/criminal-defense/theft](https://www.maxlawnv.com/criminal-defense/theft) | 200 | Eligible | Self | Yes | 1: `/` | Yes / yes |
| [/disclaimer](https://www.maxlawnv.com/disclaimer) | 200 | Eligible | Self | No | Global (37) | Yes / yes |
| [/media](https://www.maxlawnv.com/media) | 200 | Eligible | Self | Yes | Global (37) | Yes / yes |
| [/plain](https://www.maxlawnv.com/plain) | 200 | Noindex, nofollow | Home | No | 0: none | Yes / yes |
| [/plain-danger](https://www.maxlawnv.com/plain-danger) | 200 | Noindex, nofollow | Home | No | 0: none | Yes / yes |
| [/practice](https://www.maxlawnv.com/practice) | 200 | Eligible | Self | Yes | Global (37) | Yes / yes |
| [/practice/brain-and-spine-injury](https://www.maxlawnv.com/practice/brain-and-spine-injury) | 200 | Eligible | Self | Yes | 9: `/`, `/practice`, `/practice/car-accidents`, `/practice/crosswalk-and-pedestrian-accidents`, `/practice/motorcycle-accidents`, `/practice/premises-liability`, `/practice/product-liability`, `/practice/truck-accidents`, `/service-areas` | Yes / yes |
| [/practice/car-accident-statistics](https://www.maxlawnv.com/practice/car-accident-statistics) | 200 | Eligible | Self | Yes | 1: `/practice` | Yes / yes |
| [/practice/car-accidents](https://www.maxlawnv.com/practice/car-accidents) | 200 | Eligible | Self | Yes | 13: `/`, `/about`, `/about/marc-a-saggese`, `/media`, `/practice`, `/practice/brain-and-spine-injury`, `/practice/car-accident-statistics`, `/practice/cell-phone-related-accidents`, `/practice/commercial-vehicle-accidents`, `/practice/crosswalk-and-pedestrian-accidents`, `/practice/motorcycle-accidents`, `/practice/underinsured-and-uninsured-accidents`, `/service-areas` | Yes / yes |
| [/practice/cell-phone-related-accidents](https://www.maxlawnv.com/practice/cell-phone-related-accidents) | 200 | Eligible | Self | Yes | 2: `/practice`, `/practice/car-accident-statistics` | Yes / yes |
| [/practice/commercial-vehicle-accidents](https://www.maxlawnv.com/practice/commercial-vehicle-accidents) | 200 | Eligible | Self | Yes | 5: `/`, `/practice`, `/practice/car-accidents`, `/practice/truck-accidents`, `/service-areas` | Yes / yes |
| [/practice/crosswalk-and-pedestrian-accidents](https://www.maxlawnv.com/practice/crosswalk-and-pedestrian-accidents) | 200 | Eligible | Self | Yes | 6: `/`, `/practice`, `/practice/car-accident-statistics`, `/practice/car-accidents`, `/practice/motorcycle-accidents`, `/service-areas` | Yes / yes |
| [/practice/elder-abuse](https://www.maxlawnv.com/practice/elder-abuse) | 200 | Eligible | Self | Yes | 1: `/practice` | Yes / yes |
| [/practice/excessive-force](https://www.maxlawnv.com/practice/excessive-force) | 200 | Eligible | Self | Yes | 1: `/practice` | Yes / yes |
| [/practice/insurance-settlements-and-checks](https://www.maxlawnv.com/practice/insurance-settlements-and-checks) | 200 | Eligible | Self | Yes | 1: `/practice` | Yes / yes |
| [/practice/motorcycle-accidents](https://www.maxlawnv.com/practice/motorcycle-accidents) | 200 | Eligible | Self | Yes | 5: `/`, `/practice`, `/practice/car-accident-statistics`, `/practice/car-accidents`, `/service-areas` | Yes / yes |
| [/practice/premises-liability](https://www.maxlawnv.com/practice/premises-liability) | 200 | Eligible | Self | Yes | 6: `/`, `/about`, `/practice`, `/practice/brain-and-spine-injury`, `/practice/wrongful-death`, `/service-areas` | Yes / yes |
| [/practice/product-liability](https://www.maxlawnv.com/practice/product-liability) | 200 | Eligible | Self | Yes | 4: `/practice`, `/practice/brain-and-spine-injury`, `/practice/motorcycle-accidents`, `/practice/wrongful-death` | Yes / yes |
| [/practice/truck-accidents](https://www.maxlawnv.com/practice/truck-accidents) | 200 | Eligible | Self | Yes | 8: `/`, `/practice`, `/practice/brain-and-spine-injury`, `/practice/car-accidents`, `/practice/commercial-vehicle-accidents`, `/practice/motorcycle-accidents`, `/practice/wrongful-death`, `/service-areas` | Yes / yes |
| [/practice/underinsured-and-uninsured-accidents](https://www.maxlawnv.com/practice/underinsured-and-uninsured-accidents) | 200 | Eligible | Self | Yes | 3: `/practice`, `/practice/car-accident-statistics`, `/practice/car-accidents` | Yes / yes |
| [/practice/wrongful-death](https://www.maxlawnv.com/practice/wrongful-death) | 200 | Eligible | Self | Yes | 7: `/`, `/practice`, `/practice/car-accidents`, `/practice/premises-liability`, `/practice/product-liability`, `/practice/truck-accidents`, `/service-areas` | Yes / yes |
| [/privacy-policy](https://www.maxlawnv.com/privacy-policy) | 200 | Eligible | Self | No | Global (37) | Yes / yes |
| [/results](https://www.maxlawnv.com/results) | 200 | Eligible | Self | Yes | Global (37) | Yes / yes |
| [/service-areas](https://www.maxlawnv.com/service-areas) | 200 | Eligible | Self | Yes | Global (37) | Yes / yes |

### Rendered metadata for every application page

These are actual production `<title>` and description values, not source strings assumed to render unchanged. Pipes are escaped for Markdown. The homepage H1 is one element containing the firm name and “Injury & Criminal Defense Attorneys”; it is not two H1 elements.

| Route | Actual title | Actual meta description |
|---|---|---|
| `/` | Las Vegas Injury Lawyer & Criminal Defense Attorney \| Max Law | Talk with a Las Vegas injury lawyer about car accidents and other injury claims. Free consultation. No fee unless we win. |
| `/about` | About Our Las Vegas Law Firm \| The Law Offices of Saggese & Associates | Learn about The Law Offices of Saggese & Associates, a premier Las Vegas law firm specializing in injury and criminal defense. Meet attorney Marc A. Saggese. |
| `/about/marc-a-saggese` | Marc A. Saggese, Esq. \| Las Vegas Trial Attorney \| The Law Offices of Saggese & Associates | Profile of Marc A. Saggese — Las Vegas injury & criminal defense attorney with decades of trial experience. Free consultations. |
| `/contact` | Contact Our Las Vegas Law Firm \| The Law Offices of Saggese & Associates | Contact The Law Offices of Saggese & Associates for a free consultation. Located in Las Vegas, Nevada. Call (702) 778-8883 or fill out our contact form. |
| `/criminal-defense/bad-checks` | Las Vegas Bad Check Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Defense for bad check & negotiable instrument charges. Mitigate criminal exposure & pursue restitution solutions. |
| `/criminal-defense/burglary` | Las Vegas Burglary Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Burglary & property crime defense: challenge entry, intent & identification. Free consultation (702) 778-8883. |
| `/criminal-defense/domestic-violence` | Las Vegas Battery Domestic Violence Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Battery Domestic Violence defense focusing on protection orders, credibility & evidence review. Free consult (702) 778-8883. |
| `/criminal-defense/drugs` | Las Vegas Drug Crimes Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Defense for possession, distribution & trafficking—search, seizure & lab challenges. Free consult (702) 778-8883. |
| `/criminal-defense/dui` | Las Vegas DUI Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas DUI defense lawyer challenging stops, testing & DMV suspension. Free consultation (702) 778-8883. |
| `/criminal-defense/forgery` | Las Vegas Forgery & Fraud Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Forgery & fraud defense—challenge intent, provenance & chain of custody. Free consultation (702) 778-8883. |
| `/criminal-defense/juvenile-crimes` | Las Vegas Juvenile Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Juvenile defense prioritizing rehabilitation, diversion & Drug Offenses. Free consultation (702) 778-8883. |
| `/criminal-defense/larceny` | Las Vegas Larceny & Theft Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Larceny & theft defense—challenge intent, value & identification. Free consultation (702) 778-8883. |
| `/criminal-defense/murder` | Las Vegas Homicide & Murder Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Homicide & murder defense—strategic forensic review & trial-focused advocacy. Free consult (702) 778-8883. |
| `/criminal-defense/prostitution` | Las Vegas Prostitution Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Discreet prostitution defense—challenge entrapment, intent & evidence. Free consultation (702) 778-8883. |
| `/criminal-defense/record-sealing` | Las Vegas Record Sealing Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Record sealing guidance—eligibility analysis & petition filing. Free consultation (702) 778-8883. |
| `/criminal-defense/sexual-assault` | Las Vegas Sexual Assault Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Strategic and discreet Las Vegas sexual assault defense attorneys – challenging evidence, protecting your rights, and guiding you through every stage. |
| `/criminal-defense/theft` | Las Vegas Theft & Larceny Defense Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Experienced Las Vegas theft and larceny defense attorneys handling shoplifting, grand larceny, and financial theft allegations with strategic negotiation and trial readiness. |
| `/disclaimer` | Legal Disclaimer \| The Law Offices of Saggese & Associates | Legal disclaimer for The Law Offices of Saggese & Associates website and online consultations. |
| `/media` | Media & Press \| The Law Offices of Saggese & Associates \| The Law Offices of Saggese & Associates | Recent media appearances, press coverage, and news featuring The Law Offices of Saggese & Associates. Stay updated on our latest cases and legal insights. |
| `/plain` | Las Vegas Injury & Criminal Defense Lawyer \| Saggese & Associates | Award-winning Las Vegas law firm specializing in injury and criminal defense. Free consultations, no fees unless we win. Call (702) 778-8883. |
| `/plain-danger` | Las Vegas Injury & Criminal Defense Lawyer \| Saggese & Associates | Award-winning Las Vegas law firm specializing in injury and criminal defense. Free consultations, no fees unless we win. Call (702) 778-8883. |
| `/practice` | Las Vegas Injury & Criminal Defense Lawyers \| Practice Areas \| The Law Offices of Saggese & Associates | Explore injury and criminal defense practice areas at Saggese & Associates, including car accidents, slip and fall, wrongful death, DUI defense, and more. |
| `/practice/brain-and-spine-injury` | Las Vegas Brain & Spine Injury Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Traumatic brain & spinal cord injury attorneys in Las Vegas — life‑care planning, medical experts & full compensation pursuit. Free consultation. |
| `/practice/car-accident-statistics` | Las Vegas & Nevada Car Accident Statistics \| Saggese & Associates \| The Law Offices of Saggese & Associates | Review sourced Nevada and Clark County crash fatality statistics, pedestrian and motorcycle trends, and official traffic-safety data sources for Las Vegas-area drivers. |
| `/practice/car-accidents` | Las Vegas Car Accident Attorney \| Saggese & Associates | Injured in a Las Vegas car accident and not at fault? Talk with a car accident attorney about medical treatment, insurance claims, and compensation. |
| `/practice/cell-phone-related-accidents` | Las Vegas Distracted Driving Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas distracted driving & cell phone accident lawyer preserving evidence to prove negligence. Free consultation (702) 778‑8883. |
| `/practice/commercial-vehicle-accidents` | Las Vegas Commercial Vehicle Accident Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas commercial vehicle accident lawyer handling bus, van & fleet crashes with multi-party liability. Free consultation (702) 778‑8883. |
| `/practice/crosswalk-and-pedestrian-accidents` | Las Vegas Pedestrian Accident Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas pedestrian & crosswalk accident lawyer protecting injured pedestrians. Free consultation (702) 778‑8883. |
| `/practice/elder-abuse` | Las Vegas Elder Abuse Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas elder abuse & nursing home neglect lawyer protecting seniors from physical, emotional & financial abuse. Free consultation (702) 778‑8883. |
| `/practice/excessive-force` | Las Vegas Excessive Force Injury Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Injured by excessive force? We investigate, preserve evidence & pursue accountability. Free consultation (702) 778-8883. |
| `/practice/insurance-settlements-and-checks` | Las Vegas Insurance Settlement Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas insurance settlement lawyer negotiating fair payouts, lien reduction & proper disbursement. Free consultation (702) 778‑8883. |
| `/practice/motorcycle-accidents` | Las Vegas Motorcycle Accident Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas motorcycle crash & injury lawyers — helmet law knowledge, severe injury claims & insurer negotiation. Free consultation (702) 778‑8883. |
| `/practice/premises-liability` | Las Vegas Premises Liability Lawyer \| Saggese & Associates | Las Vegas premises liability and slip-and-fall lawyer for unsafe property injuries, evidence preservation, medical documentation, and insurance claims. |
| `/practice/product-liability` | Las Vegas Product Liability Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas product liability lawyer handling defective product, design, manufacturing & warning defect claims. Free consultation (702) 778‑8883. |
| `/practice/truck-accidents` | Las Vegas Truck Accident Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas truck accident lawyer for semi-truck, tractor-trailer, 18-wheeler, and large commercial truck crash claims. Free consultation. |
| `/practice/underinsured-and-uninsured-accidents` | Las Vegas Uninsured Motorist Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Las Vegas uninsured & underinsured motorist (UM/UIM) accident lawyer helping maximize recovery when coverage is limited. Free consultation (702) 778‑8883. |
| `/practice/wrongful-death` | Las Vegas Wrongful Death Lawyer \| Saggese & Associates \| The Law Offices of Saggese & Associates | Compassionate Las Vegas wrongful death attorneys pursuing justice & financial security for families. Free consultation – call (702) 778‑8883. |
| `/privacy-policy` | Privacy Policy \| The Law Offices of Saggese & Associates | Privacy policy for The Law Offices of Saggese & Associates website and contact forms. |
| `/results` | Results — Saggese & Associates \| The Law Offices of Saggese & Associates | Representative results and outcomes for The Law Offices of Saggese & Associates. Past results do not guarantee future outcomes. |
| `/service-areas` | Las Vegas Service Areas \| Saggese & Associates \| The Law Offices of Saggese & Associates | Law firm serving Las Vegas Valley communities including Summerlin, Henderson, North Las Vegas, Spring Valley, Paradise, Enterprise & more. Injury & criminal defense. |

### Other public resources and handlers

| URL | HTTP GET | Indexability/canonical/sitemap/incoming links | Rendering and purpose |
|---|---|---|---|
| `/plain.html` | 200 | No noindex or canonical; absent sitemap and all crawled incoming links. Potentially eligible, not intended as a search landing page. Title: **Baseline Plain Page**; description absent. | Static `public/plain.html`; initial diagnostic sentence present; no Next/React rendering. D2. |
| `/google672e3108f67e1467.html` | 200 | No noindex/canonical; absent sitemap and incoming site links. Not an intended search landing page. Title/description absent. | Static verification token from `public/google672e3108f67e1467.html`. Preserve for verification; do not treat a utility token as missing commercial content. |
| `/sitemap.xml` | 200 | 36 canonical preferred-host entries; no redirects, `.html` entries or noindex debug URLs. | Generated XML via `src/app/sitemap.ts`; all listed page targets return 200. Privacy/Disclaimer omission alone is not an indexing error. |
| `/robots.txt` | 200 | `Allow: /`; disallows `/private/` and `/admin/`; references correct preferred-host sitemap. | Generated text via `src/app/robots.ts`. |
| `/api/health` | 200 | Not a public marketing/indexing target; no sitemap or site incoming anchor. | JSON, `src/app/api/health/route.ts`. |
| `/api/reviews` | 500 | Not a marketing/indexing target; no sitemap/incoming anchor. | JSON configuration error; `src/app/api/reviews/route.ts`. Static shared testimonials currently render independently. |
| `/api/contact` | 405 | GET not supported; not a missing commercial page or soft 404. | POST handler in `src/app/api/contact/route.ts`; no submission made. |
| `/api/send-email` | 405 | GET not supported; not an indexing target. | POST handler in `src/app/api/send-email/route.ts`; no submission made. |
| `/monitoring` | Not requested | Sentry rewrite/tunnel, not an intended search landing page. | Declared by `next.config.ts`; payload submission not part of this audit. |
| `/criminal-defense` | 404 | No page file, current sitemap entry or incoming initial anchor. | Directory layout does not create an index page. Never approve this as a current redirect destination. |

No other unknown internal page target was found among initial-HTML links from the 40 application routes. All same-origin page-link paths resolve to inventoried 200 routes; current navigation does not link to the missing historical URLs. Fragment targets, external links, assets and all possible mobile/client-generated interaction states were not exhaustively validated. Query-based intake links lead to the existing contact route; they are not new service pages.

### Discoverability conclusion

- **Record Sealing:** effectively an internal-navigation orphan in the inspected source and HTML. It is accessible via its sitemap and legacy redirect but has no incoming link from another current application page, and is missing from `criminalDefenseLinks`. Its menu label incorrectly falls back to the first injury entry because no matching menu item exists.
- **Bad Checks, Juvenile Crimes, Larceny, Prostitution, Sexual Assault:** initial-HTML orphans, but not inaccessible to a human who opens the JavaScript menu. Browser verification on `/practice` found zero Bad Checks anchors initially and one after menu activation; Record Sealing stayed at zero.
- All injury detail pages have an ordinary `/practice` card link. Some receive only that one inbound source, especially settlement, elder-abuse and excessive-force content. This is a relative support weakness, not proof of non-indexing.
- The two intentional noindex diagnostic app routes and static verification token need not be added to navigation or sitemap. Do not “fix” every zero-link utility page.

Google's [crawlable-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) supports ordinary anchors and contextual links. Source-code arrays that appear only after a click are not initial crawlable navigation.

## Primary Keyword Architecture

| Keyword/search intent | Current intended page | Observed signals | Assessment |
|---|---|---|---|
| Las Vegas car accident lawyer / attorney | `/practice/car-accidents` | Title **Las Vegas Car Accident Attorney \| Saggese & Associates**; H1 **Las Vegas Car Accident Attorney**; 200; self-canonical; sitemap; 13 distinct public incoming sources; substantive initial HTML. | Clear primary commercial owner. Prioritize recovery of dead historical car URLs and improve this page in place. Do not create separate lawyer/attorney synonym pages. |
| Las Vegas injury lawyer / personal injury lawyer Las Vegas | `/` primarily; `/practice` as directory | Homepage title **Las Vegas Injury Lawyer & Criminal Defense Attorney \| Max Law**; broad firm H1/hero, injury content and prominent car links. `/practice` title describes both practices and its H1 is **Practice Areas**. | Broad commercial overlap is legitimate when homepage selects firm and directory organizes services. The dedicated historical injury hub's deeper overview has no exact modern standalone counterpart; evaluate existing content before proposing another route. |
| Injury lawyer near me | Homepage and local business presence; `/service-areas` supports scope | Visible office/NAP, relevant community list, attorney profile and injury service links. | No dedicated “near me” route is needed from this evidence. Local relevance/proximity/authority needs account and geographic performance evidence, not exact phrase repetition. |
| Henderson, Summerlin, Clark County/Nevada injury searches | Existing service content + `/service-areas` | 200 self-canonical coverage page lists communities; linked through global navigation and to injury services. | Supports coverage disclosure. No dedicated city pages were found, but that is not automatically a gap requiring new pages. Improve useful local context only if demand and firm experience justify it. |

### Internal support and rendering

The car page's 13 distinct incoming source pages are `/`, `/about`, `/about/marc-a-saggese`, `/media`, `/practice`, `/practice/brain-and-spine-injury`, `/practice/car-accident-statistics`, `/practice/cell-phone-related-accidents`, `/practice/commercial-vehicle-accidents`, `/practice/crosswalk-and-pedestrian-accidents`, `/practice/motorcycle-accidents`, `/practice/underinsured-and-uninsured-accidents` and `/service-areas`. The page links to the attorney and relevant injury services. These links are already present; recommending them as new fixes would repeat completed work.

The statistics resource links contextually to Car Accidents and distinct related services. The settlement page currently links to the practice directory/contact and **does not link to Car Accidents**; the car page also lacks a settlement-resource link. This is a concrete P2 connection to consider when improving settlement content, rather than inventing more articles about the same topic. The media car-accident excerpt already has a representation link.

The current car page covers crash steps, collision types, fault/evidence, medical documentation, insurance negotiation, litigation, credentials, related services and FAQs. Its raw main-markup text is approximately **668 whitespace-separated words**, including buttons, breadcrumbs and sidebars. This is not an editorial word-count target or quality score. It has substantive content; the homepage and car page render their H1/main text without JavaScript. A client component name or `'use client'` alone does not mean search content is missing from HTML. The homepage's client-only contact form is ancillary and does not undo its server-rendered SEO content.

Existing `NovGameplan.md` proposals cover practical car-page expansions and distinct crash-report/fault guides; they are drafts/plans, not current published routes or approved audit fixes. Review and improve the existing service/settlement/statistics content before adding more resources.

### Overlap versus cannibalization

- Homepage ↔ Car Accidents: broader firm/injury selection versus vehicle-specific representation. Distinct rendered titles and page functions; overlap alone does not justify consolidation.
- Car ↔ Statistics: representation versus sourced traffic-safety information. Preserve both intents.
- Car ↔ Distracted Driving / UM-UIM / Truck / Commercial Vehicle: related but meaningfully specialized evidence, coverage or vehicle intent. Truck and commercial pages already cross-link; do not delete them for shared words alone.
- **Theft ↔ Larceny:** stronger same-intent overlap. H1s reverse “Theft & Larceny” / “Larceny & Theft”; both explain intent, identity, valuation, restitution/diversion and contacting counsel. This warrants a query-to-page review. It is not evidence that either causes injury-page ranking losses.
- About ↔ attorney profile: firm overview and complete credentials can legitimately overlap. The attorney biography, admissions and education exist and are accessible; “missing attorney information” is not confirmed.

## Content Recommendations

No deletion, consolidation, rewrite or URL change is approved by this investigation. The decisions below identify the smallest useful next work and preserve the firm's secondary criminal practice.

| Current content/group | Decision | Specific next step |
|---|---|---|
| Homepage | **KEEP**; selective **IMPROVE** only after evidence | Preserve approved combined injury/criminal positioning, server HTML, title and commercial links. Use GSC/lead evidence before broad copy changes. |
| Car Accidents | **KEEP + IMPROVE** | First repair relevant historical entry URLs. Then review existing draft enhancements around practical claim questions, loss documentation, fee/intake details, qualified timing guidance and local process. Attorney review required for legal/business assertions. Retain URL/canonical. |
| Practice index | **KEEP + IMPROVE** | Retain injury hierarchy and all fifteen injury card links; make retained criminal services discoverable through ordinary HTML links. Preserve relevance for the existing old Criminal Defense landing redirect. |
| Statistics resource | **KEEP / maintain** | Preserve distinct sourced-data intent and existing Car Accidents link; verify underlying sources before refreshing figures/dates. No cosmetic freshness or generic service rewrite. |
| Insurance Settlements & Checks | **KEEP + IMPROVE** | Develop this existing topic around offers, releases, liens and payment questions with review. Add relevant car/settlement contextual links in both directions. Do not launch a duplicate generic settlements article. |
| Motorcycle, truck, pedestrian, distracted driving, UM/UIM, commercial vehicle, brain/spine, wrongful death | **KEEP; selective IMPROVE** | Preserve differentiated service intent; restore equivalent legacy entry points. Expand real scenario/evidence/service information when justified, not to hit arbitrary length targets. |
| Premises/product liability, elder abuse, excessive force | **KEEP; selective IMPROVE** | Preserve working titles/canonicals and current links. Premises has repeated introductory ideas; revise only in a separately approved content cycle. No mass expansion during redirect work. |
| Criminal services generally | **KEEP** | Repair discovery and historical redirects. Short pages need intent/usefulness review, not mass deletion because injury is the primary growth objective. |
| Theft and Larceny | **KEEP pending review**; potential **CONSOLIDATE** | Compare query/page performance, backlinks and scope. If one combined page is later justified, select winner from evidence, merge unique value and permanently redirect the retired route; no consolidation authorized now. |
| About / Marc / Results | **KEEP** | Useful trust and identity functions already present. Verify underlying factual claims with the firm when editing; do not repeat old missing-bio fixes. |
| Media | **KEEP** | Preserve external article references and existing car link. Do not label the article list as separate on-site blog URLs. Restore a specific historical story only when evidence supports it. |
| Service Areas | **KEEP; later IMPROVE** | Replace terse coverage disclosure with useful local context only where warranted. No bulk city-page creation. |
| Contact / Privacy / Disclaimer | **KEEP** | Functional/trust pages with distinct intent. No word-count expansion or forced sitemap inclusion needed from this audit. |
| `/plain`, `/plain-danger` | **KEEP outside index**, if still needed | Already noindexed and omitted from sitemap. No need to repeat this fix. |
| `/plain.html` | **REMOVE from index eligibility** (not delete in this task) | If retained for diagnostics, add a precise noindex after approval. |
| Retired medical, assault/probation/drug-specific/case articles | **REVIEW; retain 404 now** | Recreate only if services/editorial value and historical demand justify it. Use 410 only for deliberate permanent retirement. No unrelated homepage redirects. |
| Missing service URL equivalents | **REDIRECT** after approval | Exact old-to-current service mappings, not new content or structural changes. |

There is no evidence-based recommendation to remove an existing commercial page immediately. Prioritize existing content and migration continuity before any new crash-report/fault articles; the two planned distinct guides can follow their existing review process. Do not introduce a large blog or city-page program to compensate for unverified indexing assumptions.

## Prioritized Action Plan

### P0 — Critical technical failures

**None confirmed.** No sitewide noindex/robots block, primary-page 5xx, empty commercial HTML, canonical-to-wrong-page failure, redirect loop or broken sitemap target was found. Do not create a P0 deployment merely because GSC clicks are low.

### P1 — High-impact migration and indexing corrections

1. **Approve and implement explicit matching legacy redirects**, starting with old Car Accidents and corresponding injury service URLs, then verified criminal/attorney/contact equivalents. Keep existing 15 working rules. Every destination must remain 200, index-eligible where appropriate, self-canonical and nonredirecting. Broader/uncertain matrix rows are not part of an automatic batch.
2. **Export current GSC URL-level examples and inspect the priority pages.** Capture report dates, last crawls, Google-selected canonical and live results. Refresh status interpretation for the eight supplied URLs already fixed. Check new historical candidates in GSC Links/Performance and backlink data to order the remaining queue.
3. **Repair retained criminal-service discovery**, with Record Sealing first: ordinary initial-HTML directory links and an accessible menu that does not depend on a click to create anchors. Preserve the injury navigation hierarchy. This is a small change, not a new criminal-site expansion.
4. Verify the approved release in production and record actual deployment dates. Resubmit the current canonical sitemap if warranted; request indexing only for the most important final pages. Google's processing time and ranking outcomes cannot be promised.

### P2 — Content and internal linking improvements

1. Continue the separately reviewed Car Accidents improvements in place; expand the existing settlement page and connect it contextually to representation.
2. Keep Statistics distinct and accurate; use current sources before changing numbers or dates.
3. Resolve Theft/Larceny overlap only after performance/link/intent evidence; otherwise improve differentiation and discovery.
4. Exclude retained `/plain.html` from index eligibility; use meaningful sitemap modification dates or omit them. Tidy only still-verbose titles, preserving corrected priority metadata.
5. Review historical injury/criminal hub coverage, Match.com/case articles and retired medical scope. Choose restoration, a justified equivalent redirect, 404 or 410 deliberately for each group.

### P3 — Long-term authority and SEO growth

1. Establish dated GSC query/page/device/country and organic-lead baselines. The 16-click sample is too small for confident URL cannibalization/CTR conclusions without segmentation.
2. Audit verified referring pages and citations, reconcile firm identity, maintain the local business profile and seek relevant earned coverage. Do not claim unverified backlinks or buy arbitrary authority metrics.
3. Evaluate distinct report/fault resources and genuinely useful local coverage after current-page review. Measure qualified consultations, not just published page count.
4. Consider reducing edge normalization hops only if practical and supported by access logs/referring-link evidence. Do not destabilize working HTTPS/www behavior for a low-priority cleanup.

## Implementation Plan

**Nothing below is approved or implemented.** This is the file-by-file proposal for a later explicitly authorized correction pass. Review the exact mapping rows first; keep ambiguous/no-equivalent URLs out of the redirect batch. No Vercel release is part of this audit.

| Exact file(s) / configuration | Proposed modification | Required verification |
|---|---|---|
| `next.config.ts` | Append approved High-confidence legacy service/identity mappings to `redirects()` with `permanent: true`. Preserve all 15 rules and Sentry wrapping. Match literal `.html`/`.shtml`/historical punctuation and documented directory forms, including their normalized slashless path; use explicit paths instead of a catch-all homepage rule. Add no redirect for missing-content rows until equivalence is approved. | For approved .html/.shtml sources: preferred-origin GET is one 308 with exact Location, final target 200, no intermediate alias/loop; old trailing-slash directory sources may retain a documented normalization hop; query preservation, sampled case variants, trailing slash and host/protocol cases. Compile manifest and verify literal dot matching. Keep 404/410 for deliberately retired pages. |
| `src/app/practice/page.tsx` | Add ordinary HTML card/list links for retained criminal detail pages, especially the six discovery gaps. No injury-card removal or change to approved commercial positioning. | JavaScript-disabled `/practice` has anchors to intended pages; all targets 200; no links to retired aliases; desktop/mobile navigation remains usable. |
| `src/components/PracticeNav.tsx` | Add Record Sealing to the correct list. Render link markup before interaction while retaining accessible collapsed/open behavior and correct active label. | Before click, route anchors exist in response/DOM; after click menu still works, closes correctly, supports keyboard/focus and labels Record Sealing accurately. No reliance on bundle strings. |
| `next.config.ts` **or** `public/plain.html` | Choose one narrow exclusion for `/plain.html`: exact-path `X-Robots-Tag: noindex` header, or robots meta in that static document. Do not confuse it with the already-noindexed `/plain` route. | Live header/meta contains noindex; diagnostic still serves if needed; absent sitemap/navigation; verification token file unaffected. |
| `src/app/sitemap.ts` | Preserve valid route list and intentional exclusions. Replace synthetic blanket `new Date()` with real per-page content dates or omit lastModified. Do not change priority values as a ranking tactic. | XML parses; normalized root URL handled correctly; exactly intended canonical 200 targets; no redirects, legacy URLs, debug routes or APIs; stable dates when content is unchanged. |
| `src/app/practice/car-accidents/CarAccidentsPageClient.tsx` | Only after separate editorial approval: improve existing practical claim answers and add useful link to the existing settlement resource, avoiding duplicate sections. The misleading `Client` suffix does not require a rendering rewrite. | H1/main content and links remain in initial HTML without JavaScript; canonical/title unchanged; FAQ/schema claims still match visible content; legal/business statements reviewed. |
| `src/app/practice/insurance-settlements-and-checks/page.tsx` | Only after content approval: improve existing settlement explanations and add contextual Car Accidents link. | Distinct intent, working reciprocal links, appropriate self-canonical, no duplicate general car service page. |
| `src/app/criminal-defense/theft/page.tsx`, `src/app/criminal-defense/larceny/page.tsx` | Conditional: differentiate current scope, or merge only if query/backlink evidence supports a specific survivor. If consolidating, also update `next.config.ts`, `src/components/PracticeNav.tsx` and approved directory links; `src/app/sitemap.ts` auto-discovery must omit the retired route. | No implementation until winner/scope approved. Preserve unique value; old URL redirects directly; all legacy chains updated to final winner; no sitemap/internal alias; selected canonicals monitored in GSC. |
| `src/app/media/page.tsx`, `src/app/service-areas/page.tsx`, `src/app/results/page.tsx`; all 13 `src/app/criminal-defense/{bad-checks,burglary,domestic-violence,drugs,dui,forgery,juvenile-crimes,larceny,murder,prostitution,record-sealing,sexual-assault,theft}/page.tsx`; `src/app/practice/{brain-and-spine-injury,car-accident-statistics,cell-phone-related-accidents,commercial-vehicle-accidents,crosswalk-and-pedestrian-accidents,elder-abuse,excessive-force,insurance-settlements-and-checks,motorcycle-accidents,product-liability,truck-accidents,underinsured-and-uninsured-accidents,wrongful-death}/page.tsx` | Optional title-only cleanup for the 29 currently repeated-brand titles; braces enumerate exact existing filenames, not wildcard authorization. Choose a single brand suffix strategy within each affected metadata export. Leave `src/app/practice/car-accidents/page.tsx`, `src/app/practice/premises-liability/page.tsx` and homepage corrected absolute titles intact. | Compare rendered titles before/after and confirm uniqueness, accurate topic/brand, unchanged canonicals/robots/H1/main content. Do not claim a ranking gain from title length alone. |
| Vercel project's **Domains** / redirect settings (outside repo) | Optional later review of HTTP/apex → preferred HTTPS www path preservation and hop reduction. Existing normalization works. | Test all four scheme/hostname combinations and representative modern/legacy/query paths; SSL and exact path/query preservation; no loop. Do not add competing app-level host rules without understanding edge order. |
| No immediate file change for `/api/reviews` | Separately confirm whether the dormant API is intended to operate; configure required Places environment values through an authorized account workflow only if needed. Static shared testimonials currently remain rendered. | GET behavior plus actual UI dependency; do not request/read secrets for this documentation audit. No new backend infrastructure implied. |

**Smallest initial change set:** approved exact redirect additions in `next.config.ts`, retained-service links in `src/app/practice/page.tsx`, and the Record Sealing/menu correction in `src/components/PracticeNav.tsx`. Other work can follow independently. Do not create a guessed `/criminal-defense` or injury-hub route merely to complete a redirect table.

## Verification Checklist

### Checks completed in this audit

- [x] Inspected all page routes, redirect config, App Router handlers/layouts and existing SEO documents/history.
- [x] Read the installed Next.js redirect, trailing-slash and sitemap guides before interpreting behavior.
- [x] All ten supplied legacy requests checked live with exact case/suffix.
- [x] All fifteen current redirect rules checked live; 308 to independently verified 200 final destinations, no loops on preferred origin.
- [x] 129 public archive records reviewed; all resulting historical paths/queries requested against production, plus seven specific extra references.
- [x] 40 current application pages fetched; 38 intended public pages eligible, unique titles/descriptions, self-canonical and initial route content present.
- [x] Sitemap and robots fetched; 36 intended sitemap entries are direct canonical 200 pages; no legacy entries or debug URLs.
- [x] Initial-HTML link graph checked; no unknown/broken page path in current navigation; six criminal discovery gaps identified.
- [x] Browser menu interaction checked; homepage and car service content verified with JavaScript disabled.
- [x] HTTP/HTTPS, www/apex, trailing slash, representative case/suffix/query behavior checked.
- [x] Missing-page control returns real 404; no current commercial soft-404 template confirmed.
- [ ] Exact GSC exclusion URLs, Google-selected canonicals, backlinks, deployment dates and pre/post migration performance verified — unavailable, not inferred.
- [ ] Approved fixes implemented/deployed — intentionally not performed.

### Reproducible HTTP checks

Run from an environment with external DNS/network access. Use GET, not only HEAD. `-D -` prints every response header block when used with `-L`; check the first response as well as the final status. Do not interpret a final 200 as proof that the old URL itself returned 200.

```sh
# First response / Location only: known existing redirect.
curl -sS -o /dev/null -D - \
  'https://www.maxlawnv.com/Personal-Injury/Motorcycle-Accidents.html'

# Full chain: currently missing primary mapping should be 404 now;
# after approval/release it should be one permanent redirect then 200.
curl -sS -L --max-redirs 8 -o /dev/null -D - \
  -w 'final=%{http_code} redirects=%{num_redirects} url=%{url_effective}\n' \
  'https://www.maxlawnv.com/Personal-Injury/Car-Accidents.html'

# Existing destination should stay a direct 200.
curl -sS -o /dev/null -D - \
  'https://www.maxlawnv.com/practice/car-accidents'

# Save actual markup for inspection, not just RSC/JavaScript strings.
curl -fsS 'https://www.maxlawnv.com/practice/car-accidents' \
  -o /tmp/maxlaw-car-verification.html

curl -fsS 'https://www.maxlawnv.com/sitemap.xml' \
  -o /tmp/maxlaw-sitemap-verification.xml
curl -fsS 'https://www.maxlawnv.com/robots.txt'

# Repeat protocol/host normalization for both modern and legacy paths.
for origin in 'http://maxlawnv.com' 'http://www.maxlawnv.com' \
              'https://maxlawnv.com' 'https://www.maxlawnv.com'; do
  curl -sS -L --max-redirs 8 -o /dev/null -D - \
    -w 'final=%{http_code} redirects=%{num_redirects} url=%{url_effective}\n' \
    "$origin/Personal-Injury/Motorcycle-Accidents.html"
done

# Missing-page control must never become an unrelated homepage 200.
curl -sS -o /dev/null -D - \
  'https://www.maxlawnv.com/audit-nonexistent-7e14'
```

### Canonical, robots, sitemap and content procedures

1. Parse each raw HTML response with a real HTML parser. Extract `<title>`, `meta[name=description]`, all robots/googlebot metas, `link[rel=canonical]`, H1/main text and anchors; separately check `X-Robots-Tag`. Ignore script/style/serialized RSC text when deciding whether content/links exist initially.
2. Resolve canonical links against the preferred origin. Expect one clean self-canonical on intended pages; normalize the equivalent root slash spellings. Diagnostic noindex pages and query variants have different intentional handling. Canonical presence does not prove Google selected it.
3. Parse sitemap XML; normalize only equivalent root formatting, compare against the intentional inventory, then GET every `<loc>`. Each intended entry must be direct 200, canonical to itself, robots-accessible and free of noindex. Exclude aliases/redirects and diagnostics. Privacy/Disclaimer inclusion is a policy choice, not a mandatory index-count fix.
4. Build an initial-anchor link graph from every intended public page, resolving relative URLs and stripping fragments for route matching. Count distinct referring pages, exclude self-links, and check every internal destination/redirect. Separately inspect query flows and fragment targets if those are changed. Confirm the retained six criminal pages gain real incoming anchors.
5. Repeat priority page checks with browser JavaScript disabled. In a normal browser, also verify collapsed/open menus, keyboard support, mobile navigation and active page labels. Googlebot must not need an interaction to create the only service links.
6. Inspect sitemap lastmod across an unrelated rebuild and a genuine content update. Do not use fresh timestamps or priority tweaks as evidence of rankings/indexing gains. Google's [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) supports accurate significant-change timestamps and explains that sitemap priority/changefreq are not used.
7. In GSC URL Inspection, save the indexed/live status, last crawl, referring sitemap/page, fetched content, user-declared and Google-selected canonical for each priority page and exclusion example. Correct redirects/alternate pages need not be separately indexed. Retain exports with dates and compare future complete reporting windows.

### Checks for a later approved implementation

```sh
# Confirm scope first: this audit itself should add only the Markdown report.
git status --short
git diff -- next.config.ts src public package.json package-lock.json

# After code changes are separately authorized, use the repository's real scripts.
npm run build
npx tsc --noEmit
npm run lint
npm run test:server
npm test -- tests/website.spec.ts
```

These build/test commands are proposed release verification, **not tests claimed to have run for this audit**. Review `playwright.config.ts` before executing to ensure it uses the intended isolated local server/environment. Add a focused table-driven redirect regression check for the approved matrix (first status/Location and final target) and retained 404s. After deploying only with separate authorization, rerun the HTTP/browser/GSC procedures against production; passing a local build does not establish deployed behavior or Google indexing.

Google's [migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) supports mapping old URLs to relevant replacements, permanent server redirects and avoiding irrelevant bulk redirects. The proposed first pass follows that narrow scope; it does not promise recovered rankings or assume every historical URL merits resurrection.


## P1 Implementation Update — November 7, 2026

**Authorization:** the user approved starting phase one after reviewing the audit and phase sequence. **Release status: local implementation only; not deployed.** The production response tables above describe the original audit snapshot and must not be mistaken for post-release validation.

### Changes implemented locally

- `next.config.ts`: added the **53 High-confidence proposed mappings** from the historical matrix. Preserved the **15 existing mappings**, for **68 explicit permanent redirects** in total. Targets are existing final pages; uncertain hub/media mappings, retired medical pages, the Match.com article and old sitemap pages retain their existing behavior. There is no blanket redirect to the homepage.
- Historical trailing-slash directory URLs map through their normalized slashless source. They may retain the documented framework slash-normalization hop before the final migration redirect. Literal `.html`/`.shtml`, case variants and query preservation are included in validation.
- `src/app/practice/page.tsx`: added the nine missing criminal-service directory cards, linking to all **13 retained criminal services** while preserving the fifteen injury cards and existing page metadata.
- `src/components/PracticeNav.tsx`: added Record Sealing and changed the conditional click-created panel to native `<details>/<summary>` navigation. All 28 service/resource links are in initial HTML. The disclosure works without JavaScript; with JavaScript it also closes on Escape, outside click and link selection, returns focus on Escape, and identifies the current page accurately.
- `tests/fixtures/seo-migration-redirects.json`: versioned test expectations for all 68 existing/new mappings, derived from the audited matrix and baseline rules rather than loaded from the implementation under test.
- `tests/seo-migration.spec.ts` and `playwright.config.ts`: local production-server regression checks for first-response 308/Location, direct 200 canonical targets, preserved queries/case, directory normalization, retained genuine 404s, literal-dot matching, initial-HTML navigation, sitemap and robots.
- `tests/website.spec.ts`: desktop/mobile checks for the full criminal directory, native disclosure keyboard/outside/link behavior, and service navigation/content with JavaScript disabled.

### Local verification

- `DISABLE_MONITORING=true npm run build` — passed; all public pages remain statically prerendered.
- `npx tsc --noEmit` — passed.
- `npm run lint` — passed.
- `npm test` — **38 passed** across server, desktop and mobile projects. The five SEO checks cover all 68 redirect expectations, direct canonical destinations, queries/case/slash handling, retained 404s, server HTML, sitemap and robots. Existing inquiry/consent/CAPTCHA tests also pass.
- Compiled redirect manifest — 68 explicit rules, all 308, distinct sources with literal-dot matching; existing destinations preserved.
- A first browser run found a test clicking a heading covered by the intentionally open panel. The test now clicks uncovered page chrome; the complete rerun passed. No production behavior was bypassed or relaxed.

No deployment, GSC submission, live inquiry, production setting or account change has been performed. Contact/browser regression tests use mocked mail and third-party requests.

### Remaining P1 account and release work

1. Obtain current GSC exports for all six exclusion categories, with report update dates, exact URLs and last crawls. Inspect priority final pages for indexed/live status and user-declared/Google-selected canonicals. The available tools do not provide authenticated Search Console access; no status has been invented from the repository.
2. Export GSC Performance by page/query for comparable pre/post periods and GSC Links (or a dated backlink export). Record the actual migration and future release dates. Historical URLs in this report are link-check candidates, not proven referring-link targets.
3. Deploy only after separate release authorization, then repeat the report's production HTTP checks for all 68 mappings, normalized directory forms, retained 404s, sitemap and priority page HTML. Verify the six former navigation gaps in actual deployed HTML.
4. Where appropriate after release, submit the existing canonical sitemap and inspect/request indexing for priority final pages. Keep legacy redirect sources excluded as redirects. Google indexing and rankings remain unverified until account evidence is available.

P2 content, title, diagnostic-noindex and sitemap-date changes remain outside this implementation. P3 authority/local growth work has not started.


## P2 Implementation Update — November 7, 2026

**Scope and authorization:** the user requested the next phase and then explicitly directed independent research into Nevada/Las Vegas law rather than waiting for Marc. This supersedes this task's earlier proposed attorney-review prerequisite for general educational copy. No Marc review, authorship, review date or new firm-specific practice is represented. Changes are local and have not been deployed. The original audit tables remain the pre-implementation production snapshot.

### Content and linking

- Improved `src/app/practice/car-accidents/CarAccidentsPageClient.tsx` in place: comparative negligence, qualified filing periods, possible losses and supporting records, consultation preparation, fees versus expenses, and local report/visitor guidance. Preserved the commercial title/H1, canonical, existing FAQ wording/schema, attorney/trust section and consultation CTAs. The universal accident-date deadline sentence was replaced rather than left alongside the qualified version.
- Improved `src/app/practice/insurance-settlements-and-checks/page.tsx` in place: offer/release scope, gross versus client proceeds, fees and expenses, medical obligations and Medicare recovery, distribution timing, useful questions and tax distinctions. Removed several assurances of guaranteed fair outcomes/proper payment from the body. No fee percentage, lien-reduction promise, tax-free promise, settlement average or universal payment deadline was introduced.
- Added contextual Car Accidents → Settlements, Settlements → Car Accidents, and Car Accidents → Distracted Driving links. Existing practice/biography links remain. No unpublished resource destination was added.
- Added visible source links within the pages. The 2018 civil jury instructions are explicitly described as an older edition with damages examples, not a current comprehensive statement of controlling law.

### Technical cleanup and statistics

- Set absolute titles on the **29** page metadata exports with repeated firm names. This preserves each original page-specific title and removes only the inherited extra firm suffix. Existing homepage, car and premises absolute titles and the shared root template remain unchanged. Descriptions, canonical URLs and schema identities are preserved.
- `src/app/sitemap.ts` omits blanket build-time `lastModified` values until reliable content-update dates are available. No new dates were invented. All 36 URLs and existing intentional exclusions remain.
- `public/plain.html` now declares `noindex, follow`. The existing `/plain` and `/plain-danger` exclusions and Google verification token file remain intact.
- Rechecked displayed Nevada and Clark County counts against their cited primary sources. The numbers match those sources. A newly verified error was the label **final 2024 FARS data**: NHTSA identifies the 2024 file as an **Annual Report File**, subject to later revision. Corrected that language throughout `src/app/practice/car-accident-statistics/page.tsx` and added the official methodology link. Kept the distinction between federal statewide and state-reported county data, and the existing preliminary 2025 county label. No synthetic freshness date or newer-looking figures were added.

### Primary-source register — checked November 7, 2026

| Source | Used for | Boundary |
|---|---|---|
| [NRS 41.141](https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141) | Comparative-negligence overview | Conditional rule; no universal recovery promise or case-specific allocation. |
| [NRS Chapter 11, especially 11.190(4)(e) and 11.250](https://www.leg.state.nv.us/NRS/NRS-011.html) | General injury filing period and exceptions | No individualized accrual/deadline calculation, automatic extension or imported municipal deadline. |
| [Nevada Rules of Professional Conduct](https://www.leg.state.nv.us/CourtRules/RPC.html) | Client settlement decision, written fee/expense terms, handling/distribution of funds | General duties; not evidence of the firm's actual fee agreement. |
| [State Bar civil jury instructions, 2018 edition, hosted by Nevada AG](https://ag.nv.gov/uploadedfiles/agnvgov/content/issues/09292021_nv-jury-instructions-civil-2018-pdf-version.pdf) | Illustrative damage categories; instructions 4.8 and 5.1 checked | Older sample instructions, not certified current controlling case law. Lowercase URL is retrievable; the mixed-case variant returned a rejection. |
| [Nevada State Police crash-report requests](https://www.nhp.nv.gov/crashes-citations/crash-report-request/) | Agency-specific existing-report request route | Verified page; no copied fees, processing guarantees or claim that request equals reporting duty. |
| [LVMPD report-copy guidance](https://www.lvmpd.com/about/bureaus/records-and-fingerprint-bureau/requesting-report-copies-with-lvmpd) | Relevant local agency's public report-request destination | Official search extract confirms incident/traffic-report requests; direct research and curl requests returned 403. The page links to official instructions only; no unverified portal steps/times/fees reproduced. |
| [ABA public education on injury settlements](https://www.americanbar.org/groups/public_education/resources/law_issues_for_consumers/personal-injury/injury-settle/) | Release/settlement concept | General explanatory material, not Nevada-specific exception analysis. |
| [CMS conditional payments](https://www.cms.gov/medicare/coordination-benefits-recovery/attorney-services/conditional-payment-information) | Medicare recovery example and interim amounts | Not generalized to every private plan, bill or lien. |
| [IRS settlement guidance](https://www.irs.gov/government-entities/tax-implications-of-settlements-and-judgments) | Payment-category tax distinction | No client-specific tax determination. |
| [NHTSA FARS Encyclopedia](https://www-fars.nhtsa.dot.gov/States/StatesCrashesAndAllVictims.aspx/) | Existing Nevada statewide figures | Counts retained; no all-crash or claim-value inference. |
| [NHTSA annual-report methodology](https://cdan.dot.gov/tsftables/tsfar.htm) | 2024 ARF status, subject to revision | Corrected unsupported final-file label. |
| [Nevada OTS April 6, 2026 report](https://zerofatalitiesnv.com/app/uploads/2026/04/2024-2025-STATE-FATAL-REPORT-4.6.26.pdf) | Existing Clark County crash/fatality and vulnerable-user counts | State report date and preliminary 2025 distinction retained. |

Nevada statewide civil law governs the general explanations; Las Vegas-specific material concerns the relevant reporting agencies. No separate Las Vegas comparative-negligence rule was invented. NRS 686A.300 was checked but its motor-vehicle-damage payment provisions were not converted into a universal injury-settlement deadline.

### Verification and remaining evidence

Local verification completed:

- `DISABLE_MONITORING=true npm run build` — passed; public pages remain prerendered.
- `npx tsc --noEmit` and `npm run lint` — passed.
- `npm test` — **40 passed** across server, desktop and mobile. Coverage includes all 68 P1 redirects, retained 404s, diagnostic exclusions, Google verification availability, unique titles without repeated firm names, the unchanged 36-URL sitemap without synthetic lastmod, contextual links, new initial-HTML content and accurate FARS labels.
- P1-to-P2 rendered comparison — all **42 generated HTML resources** retain their route inventory, H1s, canonicals, descriptions and robots directives. The **51 JSON-LD blocks** are unchanged except the intentional addition of the visible NHTSA methodology citation to the statistics page. Exactly the 29 intended rendered titles changed, each by dropping the duplicated inherited suffix. The existing car FAQ and its schema answers remain synchronized.
- `git diff --check` — passed. The first expanded title assertion assumed the homepage used the firm name; it was corrected to preserve the existing Max Law title and prevent repetitions. The complete suite then passed.

No production release or GSC account action has occurred. Local checks do not establish Google indexing, rankings or qualified-lead improvements.

Theft/Larceny consolidation, retired medical practice scope, historical standalone article restoration and broad injury/criminal hub decisions still need performance/backlink or service-scope evidence. Independent legal research does not supply those missing business/account facts. Existing pages and retirement statuses remain. New report/fault articles, production deployment, GSC submissions and P3 account/authority work are not part of this local phase.

## P3 — competitive SEO and keyword research, November 7

The subsequently authorized competitive research is recorded in [P3_COMPETITIVE_SEO_KEYWORD_ANALYSIS.md](P3_COMPETITIVE_SEO_KEYWORD_ANALYSIS.md). Its initial map contained 66 phrases, with 20 logged research queries and 11 inspected competitor pages across nine firms. It preserved commercial page ownership and prepared report-request/fault resource briefs. No new articles, application changes, deployment or account actions occurred in P3.

The user's later November 7 exports are analyzed in [P3_ACCOUNT_DATA_REFRESH_2026-11-07.md](P3_ACCOUNT_DATA_REFRESH_2026-11-07.md). GSC establishes 107 property clicks / 4,131 impressions across August 13–November 5; existing premises and brain/spine exposure moves those pages up for query/page review before the resource cycle. The [updated map](P3_KEYWORD_MAP.csv) contains 74 phrases, including eight observed GSC phrases, with original Semrush, supplied Planner and GSC measurements kept separate. The Planner file is targeted to Las Vegas according to the user, covers October 2025–September 2026, and has 22 numeric averages and 44 blanks. Las Vegas scope is user-confirmed; exact counts remain vendor estimates. Separate page/query exports do not establish which URL appeared for a query, nor do they establish migration causation. Local packs, controlled city ranks, backlinks and lead attribution remain unresolved. All GSC dates precede the local November 7 changes, so this baseline cannot measure their effect.

## Subsequent authorized production releases — November 7

The user's “ok go” to the recommendation including release authorized the next implementation cycle. Commit `a83eac9` published the P1/P2 changes through the existing GitHub/Vercel pipeline. Read-only public-domain checks passed for all 68 redirects, all 36 direct canonical sitemap pages, retained 404s, diagnostic/verification behavior and the car/settlement content. Commit `7b6b9d0` subsequently published source-backed Brain & Spine Injury and Premises Liability improvements; both pages and their five FAQ/schema pairs each are verified live. Both existing Vercel production projects report success for both commits.

Build, TypeScript, lint and all 40 regressions passed for the releases; eight additional desktop/mobile JavaScript/no-JavaScript browser cases passed for the two-page batch. Titles, descriptions, H1s, canonicals and the route inventory remain unchanged in that batch; only its two FAQ entities changed among 51 JSON-LD blocks. See [release notes and exact times](SEO_RELEASE_NOTES_2026-11-07.md) and [durable evidence](audits/seo-release-2026-11-07.json). Earlier no-deployment statements above describe the earlier audit/local phases. Account exports and research files were excluded from the public commits; no real inquiry was sent. Planner scope is user-confirmed; query-to-page data remains open, and the two resource articles remain future briefs.
