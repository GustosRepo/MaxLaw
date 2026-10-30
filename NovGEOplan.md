# Max Law — November 2026 AI Search Visibility & GEO Plan

**Prepared for:** CODEWERX LLC / The Law Offices of Saggese & Associates  
**Audit date:** October 29, 2026 (America/Los_Angeles)  
**Planning window:** November 2026  
**Website:** https://www.maxlawnv.com  
**Repository baseline:** `4ee3a34` (`fixed old redirects`)  
**Status:** Read-only audit completed within available access; CODEWERX review, Marc's factual/legal confirmation and account/platform testing remain pending. No implementation or deployment authorized.

This document records the audit already reported in the conversation. Saving it does not constitute another production test or approval to change the website. The existing [November SEO gameplan](NovGameplan.md) remains the content-work tracker; this plan complements it without expanding its approved scope.

## Progress tracker

- [x] Inspect repository crawling, metadata, schema and analytics implementation.
- [x] Fetch the 16 requested production pages, robots.txt and sitemap.
- [x] Sample responses using the five named crawler user-agents.
- [x] Inspect initial HTML and rerun the existing schema validator against existing build and downloaded production HTML.
- [x] Research accessible business/attorney profiles and competitor websites.
- [x] Verify current official platform documentation and identify reporting limits.
- [x] Prepare the evidence-based audit and proposed November actions.
- [ ] Complete CODEWERX review and select work items.
- [ ] Obtain Marc's legal/factual confirmation and supporting records.
- [ ] Complete the repeated consumer-platform query baseline.
- [ ] Inspect GSC, Bing Webmaster Tools, GA4, Semrush and lead-system account data.
- [ ] Obtain explicit implementation authorization for selected changes.
- [ ] Implement and validate only approved changes.
- [ ] Obtain separate deployment authorization and record actual release dates.
- [ ] Review comparable, completed post-release reporting windows.

No review, implementation, release or monitoring item above is complete merely because this document exists. Proposed owners and effort estimates below are planning assumptions, not accepted assignments or recorded time.

## 1. Executive summary

Max Law has a sound technical foundation for discovery, but its visibility inside the five requested AI search products remains **unmeasured**.

The investigation confirmed:

- All **16 requested production pages returned HTTP 200**.
- Important homepage and service content exists in the initial HTML.
- No explicit public-page restriction was found for the five named crawlers.
- Structured-data validation passed against **42 existing build pages / 51 JSON-LD blocks**, and separately against **16 downloaded production pages / 20 blocks**.
- The homepage displays inconsistent review summaries.
- Some external profiles list **Suite 201**, while the website lists **Suite 200C**.
- Criminal-defense pages provide a starting point but leave important procedural and consultation questions unanswered.

The November content strategy remains appropriate. Prioritize factual consistency, attorney-reviewed explanations and measurement before experimental GEO work.

**The audit changed no repository files, installed no dependencies and performed no deployment.** This subsequent save creates `NovGEOplan.md` only; the existing `NovGameplan.md` is unchanged.

| Classification | Meaning |
|---|---|
| **Verified** | Observed in repository code, downloaded production HTML, or the cited public source |
| **Opportunity** | An improvement supported by observed content gaps |
| **Hypothesis** | A possible AI visibility benefit without demonstrated causation |
| **Unavailable** | Platform/account evidence could not be accessed |

## 2. Current AI visibility baseline

**All five consumer AI search interfaces are Not Tested.** The available research search tool was used to investigate public sources; it does not reproduce the consumer interfaces or establish their answers.

`NT` below means **Not Tested**, not “the firm was absent.”

| Exact query | ChatGPT Search | Google AI Overviews | Google AI Mode | Copilot/Bing | Perplexity |
|---|---|---|---|---|---|
| Best car accident lawyers in Las Vegas | NT | NT | NT | NT | NT |
| Las Vegas car accident attorney | NT | NT | NT | NT | NT |
| Who should I call after a car accident in Las Vegas? | NT | NT | NT | NT | NT |
| Experienced injury lawyers in Las Vegas | NT | NT | NT | NT | NT |
| Las Vegas premises liability attorney | NT | NT | NT | NT | NT |
| Brain injury lawyer Las Vegas | NT | NT | NT | NT | NT |
| Best criminal defense lawyers in Las Vegas | NT | NT | NT | NT | NT |
| Las Vegas criminal defense attorney | NT | NT | NT | NT | NT |
| DUI defense lawyer Las Vegas | NT | NT | NT | NT | NT |
| Las Vegas domestic violence defense attorney | NT | NT | NT | NT | NT |
| Murder defense attorney Las Vegas | NT | NT | NT | NT | NT |
| Criminal defense lawyer offering free consultations in Las Vegas | NT | NT | NT | NT | NT |
| Saggese & Associates Las Vegas | NT | NT | NT | NT | NT |
| Marc A. Saggese attorney | NT | NT | NT | NT | NT |
| Max Law Nevada | NT | NT | NT | NT | NT |
| The Law Offices of Saggese & Associates | NT | NT | NT | NT | NT |

For every cell: **Mentioned? Unknown. Cited URL: unavailable. Position/context: unavailable. Evidence: no consumer-platform session accessed.**

Ordinary web research did locate the firm's website and attorney/directory profiles. That supports public discoverability, but does not prove AI recommendation visibility.

### Reproducible manual testing procedure

1. Run all 16 exact queries separately on each platform, using fresh conversations.
2. Use a tester physically in Las Vegas where possible. Record actual location, displayed search location, date/time, language, device, login state, personalization and available model/search settings.
3. Preserve the original answer and expanded source list through screenshots or share links.
4. Record a named mention, supporting citation and explicit recommendation separately.
5. For Google, distinguish **“AI Overview not triggered”** from an Overview that appeared without mentioning the firm.
6. Repeat on at least three separate dates before drawing conclusions.

Use one record per query/platform/run:

| Date/time | Actual location | Platform/settings | Query | Mentioned? | Exact cited URLs | Context/order | Screenshot/share link |
|---|---|---|---|---|---|---|---|
| Pending | Pending | Pending | Select from matrix above | Not Tested | — | — | — |

Keep branded discovery separate from nonbranded selection queries. List order is an observation within that answer, not a stable ranking. There are 80 query/platform combinations per full round; no round has been executed.

## 3. AI crawler accessibility findings

Production requests were collected on October 29 at approximately **21:42 UTC / 2:42 p.m. PDT**. Request geography was not independently controlled; this was not a Las Vegas-localized search test.

| Check | Verified result |
|---|---|
| Production robots.txt | HTTP 200; matches repository rules |
| Public crawling | `User-Agent: *`, `Allow: /` |
| Exclusions | `/private/` and `/admin/` |
| Requested pages | All 16 returned HTTP 200 |
| Metadata directives | All 16 contain `index, follow`; Google preview directives permit snippets |
| HTTP robots restrictions | No `X-Robots-Tag` restriction observed in sampled responses |
| Canonicals | All 16 point to their corresponding production URL |
| Sitemap | HTTP 200; 36 URLs; all 16 requested pages included |
| Hosting | Responses identify Vercel |
| Challenges | No challenge response observed in the sampled requests |

Each named crawler user-agent was tested against `/robots.txt`, `/`, and `/practice/car-accidents`. All returned HTTP 200, with bodies identical to the corresponding ordinary request.

| Crawler | Function | Public paths explicitly blocked? | Sampled response |
|---|---|---|---|
| Googlebot | Google Search crawling | No | 200 |
| Bingbot | Bing search crawling | No | 200 |
| OAI-SearchBot | ChatGPT search discovery | No | 200 |
| GPTBot | Potential model-training collection | No | 200 |
| PerplexityBot | Perplexity search discovery | No | 200 |

OpenAI documents search crawling and training crawling as independent controls. Allowing GPTBot is not a prerequisite for allowing OAI-SearchBot. [Official OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)

Perplexity likewise identifies PerplexityBot as a search crawler rather than a foundation-model training crawler. [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)

**Limits:** Changing a request's user-agent does not reproduce a verified crawler IP. Hosting firewall settings, authenticated crawler logs and regional restrictions were unavailable. Actual Google/Bing indexing also requires account-side inspection.

Google additionally documents a Search Console control for inclusion in generative search features. Its setting for Max Law could not be inspected. [Google content controls](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share)

**Recommendation:** Preserve existing permissions. No crawler-rule change is justified by the evidence collected.

## 4. Website content readiness

All pages below supplied substantive text in the initial response. Interactive forms, reviews, maps and some accordion answers have separate JavaScript dependencies.

| Page | Existing strength | Gap or review need |
|---|---|---|
| `/` | Firm identity, both practice groups, Marc, results, service links, address and telephone | Conflicting review summaries; substantiate results, awards and testimonials |
| `/practice/car-accidents` | Crash checklist, evidence, process, attorney information and consultation FAQs | Qualified deadlines, shared fault, damages/documentation and confirmed fee/intake details |
| `/practice/premises-liability` | Unsafe-property examples, notice/evidence discussion and relevant questions | Repeated introduction; review categorical duty language and actual investigation capabilities |
| `/practice/brain-and-spine-injury` | Injury mechanisms, records, symptoms and long-term effects | Confirm medical explanations and claims about experts/life-care planning |
| `/practice/truck-accidents` | Truck/fleet distinction, logs, maintenance and related injuries | Confirm investigation practices; improve practical client preparation if approved |
| `/criminal-defense/dui` | Stop/testing defenses, DMV reference and two questions | Clearer process; review outcome language and provenance of the example |
| `/criminal-defense/domestic-violence` | Evidence, protection orders and family consequences | Explain criminal versus protective-order proceedings and consultation preparation |
| `/criminal-defense/murder` | Forensics, investigation and trial preparation | Limited explanation of early process, family contact and actual representation scope |
| `/criminal-defense/drugs` | Search/lab issues and immediate next steps | Repetitive advice; limited explanation of process and evidence preparation |
| `/criminal-defense/theft` | Intent, identification, valuation and receipts | Limited procedural detail; overlap with existing Larceny page |
| `/about` | Firm identity, founder, background and service process | Repetition, unsourced claims and two answers absent from initial visible HTML |
| `/about/marc-a-saggese` | Admissions, education, awards, professional history and office | Verify current credentials, award years and present-tense professional claims |
| `/results` | Disclaimer, contact options and representative outcomes | Outcomes lack independently checkable context or supporting records |
| `/media` | Named appearances, article links and television history | Verify current recurring-media claims; maintain dated original sources |
| `/contact` | Name, address, phone, hours and directions | Form requires JavaScript; telephone remains available without it |
| `/service-areas` | Clear service coverage and practice links | Verify coverage claims; remove implementation-oriented “SEO/service disclosure” wording if approved |

Collectively, the site clearly explains **who the firm is, who Marc is, its Las Vegas location, services and contact options**. The weakest area is independent substantiation of qualifications and outcomes.

Specific verified issues:

- Homepage hero: **4.9 / 125+ reviews**.
- Homepage review section: **5.0 / 140+ reviews**.
- Both summaries are hardcoded in separate components.
- Review ages such as “3 weeks ago” are also fixed strings.
- The Car Accident deadline sentence presents a universal accident-date rule without qualifications. Chapter 11 contains different limitation and exception provisions; Marc should approve the existing proposed correction. [Nevada Chapter 11](https://www.leg.state.nv.us/nrs/NRS-011.html)
- The DUI “Example scenario” uses first-person past-case wording. Its status as a documented matter or hypothetical needs confirmation.
- Source comments call the homepage result entries “sample outcomes.” That warrants provenance review; it does **not** prove the outcomes are fabricated.

The homepage's essential text no longer depends on the earlier delayed mounting. Responsive presentations create repeated markup, which alone does not establish duplicate visible content.

## 5. Structured-data assessment

The existing implementation should be preserved.

| Validation | Result |
|---|---|
| Existing generated build | **42 HTML pages / 51 JSON-LD blocks; zero validator issues** |
| Downloaded production sample | **16 HTML pages / 20 JSON-LD blocks; zero validator issues** |

These were vocabulary, identity and content checks using the existing validator and cached vocabulary. No new production build or Google-hosted Rich Results Test was run. The reported Semrush resolution of 35 errors remains client-supplied evidence, not independently verified account data.

Verified findings:

- One firm identity: `https://www.maxlawnv.com/#organization`.
- One attorney identity: `https://www.maxlawnv.com/about/marc-a-saggese#person`.
- Service providers reference the shared firm.
- Route-specific Service and WebPage/FAQ identities are consistent.
- Business address and telephone match the site's visible contact information.
- Office hours correspond to the visible weekday schedule.
- No conflicting organization definition was found.
- FAQ answers match visible content or the validator's documented About-accordion source exception.

`LegalService` already represents the business's organizational identity; a separate Organization node is not necessary merely to add another type.

Remaining checks concern **truth**, not schema syntax: actual consultation terms, email ownership, current credentials and business hours still require firm confirmation. Two About answers exist in source/schema but mount only when opened; making existing answers available in HTML is a content-access opportunity, not a reason to rewrite schema.

The biography lacks its own JSON-LD block, but the attorney identity is referenced elsewhere. That alone is not a confirmed defect.

Google explicitly says no special schema or AI text file is required for its generative search features. [Google's generative-search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## 6. Entity and citation consistency

Website reference identity:

**The Law Offices of Saggese & Associates**  
**Marc A. Saggese / Marc Anthony Saggese**  
**732 S. Sixth Street, Suite 200C, Las Vegas, NV 89101**  
**702-778-8883**  
**https://www.maxlawnv.com**

Name variations using “and,” “&,” or the attorney's expanded middle name are not inherently conflicting identities.

| Source | Profile found? | Name consistent? | Address consistent? | Website linked? | Action |
|---|---|---|---|---|---|
| Google Business Profile | Not independently verified | Unknown | Unknown | Unknown | Manually inspect live listing, ownership, categories, hours and review totals |
| Bing Places | Not verified | Unknown | Unknown | Unknown | Locate listing and verify ownership/details; do not assume absence |
| State Bar of Nevada | Directory accessible; individual record not retrieved | Unverified | Unverified | Unverified | Search Marc / reported bar number 7166 and record current official status |
| Justia | Yes | Yes | Yes: Suite 200C | Yes | Reconcile inconsistent experience counters and confirm credentials |
| Avvo | Yes | Yes | Yes: Suite 200C | Not observed in retrieved page | Verify contact/link settings and current licensing information |
| FindLaw firm profile | Yes | Recognizable legal-name variant | Yes: Suite 200C | Yes | Confirm legal name and practice descriptions |
| FindLaw attorney profile | Yes | Yes | Yes: Suite 200C | Yes | Review narrow “Civil” categorization against actual practice |
| NADC | Yes | Yes | **No: Suite 201** | Yes | Confirm current address and request correction if outdated |
| Lawyer.com | Yes | Yes | **No: Suite 201** | Website control shown; destination unverified | Reconcile address and older biography |
| Lawyers.com | Yes | Yes | Yes: Suite 200-C | Not established here | Confirm profile details and award dates |

Sources: [Justia](https://lawyers.justia.com/lawyer/marc-saggese-755682), [Avvo](https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html), [FindLaw firm](https://lawyers.findlaw.com/nevada/las-vegas/5086576_1/), [FindLaw attorney](https://lawyers.findlaw.com/nevada/las-vegas/3445077_1/), [NADC](https://www.distinguishedcounsel.org/members/marc-saggese/26813/), [Lawyer.com](https://www.lawyer.com/marc-a-saggese.html), [Lawyers.com](https://www.lawyers.com/las-vegas/nevada/marc-saggese-1064838-a/).

The [State Bar directory](https://nvbar.org/for-the-public/find-a-lawyer/) is the appropriate next source for current Nevada status. Directory assertions elsewhere do not substitute for that check. Avvo also displays a Texas status label requiring clarification against the authoritative Texas record before making current-status claims.

NADC and Lawyer.com retain an older **2,500+ clients** biography, while the site says **5,000+**. Those lower bounds can coexist; they are not proof of a false statement. The underlying current claim and profile freshness still need verification.

Historical Review-Journal reporting supports the connection between Marc and *The Defenders*. It does not substantiate current awards, present licensing or all listed appearances. [Review-Journal reporting](https://www.reviewjournal.com/?p=711890)

Do not alter historical court records or news articles to match a current office suite.

## 7. Competitor observations

The four criminal-defense firms below appeared in ordinary research results for relevant Las Vegas defense searches. Their consumer AI visibility was **Not Tested**, as was the injury competitors' visibility.

| Competitor | Observed website content | Qualifications presentation | Local-information assessment |
|---|---|---|---|
| Richard Harris | Car page addresses insurance, timing and hiring counsel | Named attorney roster, experience and results claims | Multiple locations/numbers are displayed; external consistency unverified |
| Naqvi Injury Law | Crash steps, investigation, losses and filing questions | Named attorney, insurance background and awards | Las Vegas identity clear; external address/phone reconciliation incomplete |
| Dimopoulos Injury Law | Detailed crash-response guidance and collision categories | Team, media and recognition presentation | Local contact identity present; third-party consistency unverified |
| Claggett & Sykes | Fault, injuries, reporting disputes and when to contact counsel | Named team and categorized results | Multiple office markets distinguished; external consistency unverified |
| Joel M. Mann | DUI defenses, tourist/arrest pathways and direct-attorney service | Admissions, memberships and dated recognition claims | Las Vegas identity/contact present; external consistency unverified |
| Draskovich Horvath | DUI procedure, DMV issues and client questions | Named partners, recognition and trial-experience claims | New office address repeated in notice/footer; external listings not reconciled |
| Hofland & Tomsheck | Explains arrest versus charging and the prosecution process | Named attorneys and certification claims | Las Vegas practice/contact clear; external consistency unverified |
| LV Criminal Defense | Separates criminal and DMV proceedings; explains early stages | Named founder and licensing-year claims | Las Vegas identity/contact clear; external consistency unverified |

Reviewed service pages: [Richard Harris](https://richardharrislaw.com/car-accident-lawyer/), [Naqvi](https://naqvilaw.com/las-vegas-car-accident-attorney/), [Dimopoulos](https://stevedimopoulos.com/car-accidents/), [Claggett & Sykes](https://www.claggettlaw.com/las-vegas-car-accident-lawyer/), [Joel Mann](https://www.legalmann.com/las-vegas-dui-attorney/), [Draskovich Horvath](https://www.draskovich.com/criminal-defense/dui/), [Hofland & Tomsheck](https://www.lvnvlawfirm.com/practice-areas/lv-dui-defense-center/), [LV Criminal Defense](https://www.lvcriminaldefense.com/dui/).

**Unavailable:** Which platforms mention these firms, which URLs their AI answers cite, website-versus-directory citation shares, and resulting referrals.

**Useful observation:** Several competitors explain concrete processes beyond lists of defenses. Max Law can address its own verified gaps without copying competitor prose.

**Unverified hypothesis:** More complete, substantiated explanations could improve citation suitability. This audit cannot establish why an AI system selects a competitor. Competitor legal statements, awards and performance claims were not independently certified and should not be treated as authoritative source material.

## 8. AI-related analytics limitations

A significant current-documentation finding: **Google now documents a dedicated generative-AI performance report.** It covers impressions in AI Overviews and AI Mode, with page, country, device and date dimensions. It excludes Search Labs experiments and is not a complete transcript of answers or recommendations. A report may be unavailable when impressions are insufficient. [Current Search Console documentation](https://support.google.com/webmasters/answer/16984139)

| System | Potentially observable | Max Law status / limitation |
|---|---|---|
| GSC standard performance | Search clicks, impressions, queries and pages | Account unavailable |
| GSC generative-AI report | Supported generative-feature impressions and page breakdowns | Account/report not inspected; no figures available |
| Bing Webmaster Tools | Citations, cited pages and sampled grounding queries | Account unavailable |
| Bing preview insights | Intents, topics and citation share | Availability/data unverified for this property; not traffic or ranking share |
| GA4 | Captured sessions, sources, landing pages and configured events | Initialization found; account and runtime collection unverified |
| Semrush AI reporting | Tool-specific sampled/estimated visibility | Account unavailable; coverage and methodology not inspected |
| Intake/CRM/call system | Qualified inquiries and retained matters | Unavailable |

Bing's reports measure citations across supported experiences; its citation-share metric does not expose competitor domains or establish referral share. [Bing AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), [expanded reporting](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/)

Repository findings:

- GA4 ID `G-1FSZHPMBHS` is initialized.
- Loading waits for interaction or an **eight-second timer**. Short visits could therefore go unrecorded; the impact is unmeasured.
- No explicit successful-lead or telephone-click event was found in the inspected code.
- The form has a successful API-response branch but no explicit analytics event there.
- GA4 may have interface-configured enhanced form measurement; its settings were unavailable. A submission event alone does not establish successful delivery or a qualified consultation. [GA4 enhanced measurement](https://support.google.com/analytics/answer/9216061)

Review session source/medium, landing page and event data together. Investigate observed sources such as `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com` and `bing.com`, including available campaign parameters. Treat Bing traffic cautiously because its domain alone does not distinguish ordinary search from AI experiences. [GA4 acquisition documentation](https://support.google.com/analytics/answer/12923437)

Missing tracking is **not zero actual leads**. No live intake form was submitted during this audit.

## 9. Recommended criminal-defense content improvements

Use existing pages first. These are briefs for attorney review, not drafted legal explanations.

| Client question | Existing owner | Recommended improvement |
|---|---|---|
| What happens after a DUI arrest in Las Vegas? | `/criminal-defense/dui` | Explain the main stages and distinguish criminal proceedings from DMV matters; verify applicable deadlines |
| Will I lose my license? | Existing DUI question | Qualify the current answer and explain what facts/documents counsel needs |
| How does a domestic violence charge work? | `/criminal-defense/domestic-violence` | Explain the process and distinguish criminal conditions from separate protective-order proceedings |
| What should I bring after an arrest? | Relevant existing defense page / contact guidance | Confirm useful paperwork and intake practice; avoid requiring every document before contact |
| How do I choose a Nevada defense attorney? | `/about` and Marc biography | Provide substantiated experience, actual availability, communication and fee expectations |
| What happens early in a homicide case? | `/criminal-defense/murder` | Explain representation scope and initial process without promising outcomes |
| What matters in a drug case? | `/criminal-defense/drugs` | Add useful process/documentation detail; review categorical search advice |
| What matters in a theft allegation? | `/criminal-defense/theft` | Explain evidence preparation and relevant distinctions; assess existing Larceny overlap first |

Start with **DUI and Domestic Violence**, then assess demand and inquiry patterns before expanding the other pages. Do not automatically create a criminal-defense hub or generic arrest article.

Review the existing “common/typical outcomes” boxes. They may imply probabilities that have not been substantiated. Do not add artificial FAQs solely to target AI answers.

## 10. Prioritized November GEO action plan

Effort estimates exclude Marc's review, account delays and deployment.

| ID | Priority | Problem and evidence | Proposed solution / purpose | Effort | Risk | Verification |
|---|---|---|---|---|---|---|
| G01 | **P1** | Conflicting homepage review summaries | Establish the real source/date and reconcile displays | 1–3 h | Publishing an unsupported replacement | Compare all views with dated source evidence |
| G02 | **P1** | Suite 201 versus 200C across current profiles | Confirm current office, then correct authorized profile fields | 1–2 h plus provider delays | Changing a valid/historical address | Dated listing captures after correction |
| G03 | **P1** | Blanket Car Accident deadline statement | Finalize Marc-reviewed CA-02 correction already proposed in NovGameplan.md | 0.5–1 h after approval | Incorrect legal qualification | Approved text, source and rendered HTML |
| G04 | **P2** | Unsubstantiated trust claims | Build evidence register for credentials, results, reviews, fees and service practices | 3–6 h | Confidentiality or misleading attribution | Marc-approved evidence/wording register |
| G05 | **P2** | Actual AI and lead performance unknown | Inspect GSC/Bing/GA4 settings and validate successful-request/call tracking | 3–6 h | Misattribution or duplicate events | Account exports and controlled approved tests |
| G06 | **P2** | Existing injury-page gaps | Continue Car Accident review; separately scope Premises improvements and useful existing-page links | Existing N03/N04 estimates; re-estimate approved implementation | Legal errors or repeated content | Approval, HTML, links and regression checks |
| G07 | **P2** | Defense pages omit practical process answers | Brief DUI and Domestic Violence improvements first | 6–10 h combined | Legal inaccuracies or implied outcomes | Marc review and content/HTML checks |
| G08 | **P2** | Some existing answers require interaction | Evaluate About answer rendering and contact fallback without redesign | 2–4 h | Layout/hydration regression | No-JS HTML plus mobile/browser testing |
| G09 | **P3** | No reproducible consumer-platform baseline | Run the 80 query/platform combinations on repeated dates | 6–10 h initial sampling | Overinterpreting volatile answers | Archived answers, sources and settings |
| G10 | **P3** | Distinct report/fault questions remain underserved | Continue separately approved resource research in the November plan | Existing N05/N06 estimates | Duplication, stale procedures or legal error | Approved intent/brief, primary sources and later performance |

P1 identifies observed inconsistencies or overbroad wording; the correct replacement still requires verification. P2 identifies content/trust/measurement opportunities. P3 identifies monitoring or exploratory resource work, not established AI ranking factors.

### Proposed sequence

1. **Before implementation:** resolve factual evidence, confirm account availability and collect a baseline.
2. **November 2–6:** complete Car Accident review; authorize only accepted changes; separately scope Premises and defense briefs.
3. **November 9–20:** proceed with distinct report/fault resources only after brief and legal approval.
4. **After each authorized release:** validate HTML/schema parity, links and mobile behavior; record actual go-live dates.
5. **Month end:** compare completed reporting windows, keeping injury, criminal-defense and branded results separate.

No special AI schema, `llms.txt`, mass FAQ expansion, purchased backlinks or manufactured reviews is justified by this audit.

### Action status log

All actions begin pending review. Enter actual owners, approvals and evidence as work is accepted; do not infer authorization from a priority label.

| Action | Proposed owner | Current status | Approval / evidence / next step |
|---|---|---|---|
| G01 Reviews | CODEWERX + Marc | Pending review | Obtain source/date before selecting replacement values |
| G02 Business profiles | Account owner + Marc | Pending confirmation | Confirm suite and profile ownership; no external edits authorized |
| G03 Deadline wording | CODEWERX + Marc | Draft available; approval pending | Review CA-02 in NovGameplan.md; do not duplicate the work item |
| G04 Trust register | Marc + CODEWERX | Pending supporting records | Assemble claim-level evidence and permission |
| G05 Measurement | Account owner + CODEWERX | Account access/data unavailable | Inspect settings before proposing instrumentation |
| G06 Injury content | CODEWERX + Marc | Car draft prepared; implementation pending | Follow N03/N04 scope and approvals in NovGameplan.md |
| G07 Defense content | CODEWERX + Marc | Proposal only | Approve briefs before drafting or editing legal content |
| G08 Existing content access | CODEWERX | Proposal only | Review scope and rendering tradeoffs |
| G09 Platform baseline | CODEWERX / available Las Vegas tester | Not Tested | Follow Section 2; preserve exact answers/settings |
| G10 Resources | CODEWERX + Marc | Separate brief approval pending | Follow N05/N06; no new route or article authorized |

## 11. Exact files that may require future changes

These are conditional scopes, **not implementation authorization**.

| Files | Possible future purpose |
|---|---|
| `src/app/components/HomeClient.tsx` and `src/app/components/GoogleReviews.tsx` | Reconcile verified review summaries |
| `src/app/components/ReviewsSectionLite.tsx` | Maintain accurate testimonial attribution across responsive presentations |
| `src/app/components/ResultsSection.tsx`, `src/app/components/ResultsSectionLite.tsx`, and `src/app/results/page.tsx` | Apply approved outcome substantiation/corrections |
| `src/app/practice/car-accidents/CarAccidentsPageClient.tsx` | Approved Sprint 1 content and contextual links |
| `src/app/practice/car-accidents/page.tsx` | Only a necessary, approved matching FAQ-answer correction |
| `src/app/practice/premises-liability/page.tsx` | Separately approved content improvements |
| `src/app/criminal-defense/dui/page.tsx` | Reviewed process, example and outcome wording |
| `src/app/criminal-defense/domestic-violence/page.tsx` | Reviewed process and consultation guidance |
| `src/app/criminal-defense/murder/page.tsx` | Approved early-process explanation |
| `src/app/criminal-defense/drugs/page.tsx` | Approved practical guidance and repetition reduction |
| `src/app/criminal-defense/theft/page.tsx` | Approved clarification after overlap review |
| `src/app/about/AboutPageClient.tsx` | Approved trust corrections and existing-answer rendering |
| `src/app/about/marc-a-saggese/page.tsx` | Verified credentials, dates and professional history |
| `src/app/media/page.tsx` | Verified, dated source attribution |
| `src/app/service-areas/page.tsx` | Approved coverage clarification and reader-facing wording |
| `src/app/components/GoogleAnalyticsLoader.tsx` and `src/app/components/ContactFormInner.tsx` | Separately approved measurement work |
| `src/app/contact/ContactPageClient.tsx` | Only an approved form-access/fallback improvement |

No present evidence requires changing `src/app/robots.ts`, sitemap routes, canonicals, redirects, shared schema identities or Brain & Spine metadata. External listing corrections would occur through authorized profile management, not repository edits.

## 12. Items requiring Marc's approval

- Comparative negligence, filing deadlines, damages and all substantive legal additions.
- Criminal/DMV procedures, protective-order distinctions and any deadline or eligibility statement.
- Claims about likely outcomes, diversion, dismissal, license preservation or expert involvement.
- Whether the DUI example describes an actual matter.
- Recovery totals, individual outcomes, firm role, gross/net context and publication permission.
- Current admissions, professional status, judicial roles, memberships and award dates.
- Client counts, review sources, testimonial wording and attribution.
- Consultation scope, fee/cost arrangements, intake materials and actual availability.
- Correct office suite, service coverage and business hours.
- Any author/reviewer attribution and review date.

**Readiness:** The audit supports CODEWERX review and targeted verification. Consumer-platform visibility, account metrics and several firm facts remain unresolved. No implementation or deployment has been authorized or performed.

## Evidence and change log

Raw audit evidence was retained at the following temporary local paths. These are audit-session artifacts and may not persist; preserve copies in an approved durable location before relying on them for future comparisons.

- [Production request log](/tmp/maxlaw-geo-audit/requests.json): 33 requests, including normal and crawler-name samples.
- [Production page summaries](/tmp/maxlaw-geo-audit/summary.json): initial HTML observations for the 16 requested pages.
- [Production schema report](/tmp/maxlaw-geo-live-schema.json): 16 pages / 20 blocks, zero reported issues.
- [Existing-build schema report](/tmp/maxlaw-geo-local-schema.json): 42 pages / 51 blocks, zero reported issues.
- [Existing validator](scripts/validate-structured-data.py): vocabulary, content and identity checks; not Google's hosted validator.

| Date | Change | Evidence / approval | Status |
|---|---|---|---|
| October 29, 2026 | Read-only GEO audit completed and reported | Repository baseline, production HTML/headers, existing validator and cited public sources | Findings prepared; consumer-platform and account data unavailable |
| October 29, 2026 | Saved audit as `NovGEOplan.md`; added progress and action tracking | User requested this Markdown file | Documentation only; website and NovGameplan.md unchanged |
