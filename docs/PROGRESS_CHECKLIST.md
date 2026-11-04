# Progress Checklist

## reCAPTCHA v3 spam protection — November 3, 2026 (local)

- [x] Configure the supplied public site key locally and generate a fresh token on form submission.
- [x] Require server verification before email on both `/api/send-email` and `/api/contact`, including legacy/direct POST requests.
- [x] Check the expected action, allowed hostname and score (default minimum 0.5); block missing/failed verification and preserve the form on failure.
- [x] Pass production build, lint, TypeScript and 27 mocked server/desktop/mobile regression cases. No real emails or Google verification requests were sent by tests.
- [ ] Configure the private `RECAPTCHA_SECRET_KEY` locally and in the production hosting environment; private key was not present at the latest check.
- [ ] Confirm the public key/domain registration in production, deploy and perform an authorized live form/delivery check.

Setup: [README.md](../README.md#contact-form-spam-protection). The integration adds no storage, scheduled jobs or new dependencies. It is not active on the live website merely because these local checks pass.

## SEO and site-quality fixes — November 3, 2026 (local)

- [x] Correct Record Sealing headings/metadata/schema and nested main landmarks.
- [x] Remove conflicting review totals/stale dates; share testimonial/result data.
- [x] Improve footer contrast and prerender the consultation form.
- [x] Connect the press form and retain small corrections to the existing SMTP delivery flow.
- [x] Honor analytics/chat consent, provide preference controls and track successful consultations without contact/case data.
- [x] Remove the extra backend infrastructure and restore production monitoring settings at the user's request.
- [x] Retain dependency security patches.
- [x] Verify the reduced change set: build, TypeScript, lint, 19 regression cases and structured-data validation pass.
- [ ] Verify existing SMTP delivery and GA4 account events before release.
- [ ] Deploy and verify the release; no deployment was performed during this work.

The content/article roadmap remains in [NovGameplan.md](../NovGameplan.md). Article drafts and attorney approval are pending. The retained changes require no added storage service, database or scheduled job. Earlier checklist entries below are historical.

## Privacy / compliance updates
- [x] Added a dedicated privacy policy page at /privacy-policy
- [x] Added a legal disclaimer page at /disclaimer
- [x] Updated footer links to point to the new policy pages
- [x] Updated the lite footer to include privacy/disclaimer links
- [x] Updated the contact form consent checkbox to reference the policy and disclaimer
- [x] Added a cookie consent banner with accept/reject state
- [x] Added a client-side error boundary for front-end failure visibility
- [x] Confirmed the app builds successfully after the compliance and monitoring additions

## Verification
- Build command: npm run build
- Result: successful production build with static pages generated for the new privacy, disclaimer, and consent components

## Notes
- The project still has existing ESLint warnings on unused disable directives in two media components, but they do not block the site from building.
- For production hardening, the next recommended layer is Sentry or similar error monitoring plus uptime checks.

## Monitoring / Sentry
- [x] Removed temporary Sentry `beforeSend` suppression for ENOENT/PageNotFoundError used during App Router migration.
	- Follow-up: audit Sentry for any increased noise over next 48-72 hours and decide whether to add targeted filters.

## Requested Site Updates

### Hero and navigation
- [x] Updated the hero background with the replacement courthouse image
- [x] Made the hero background full-width while constraining inner content
- [x] Made the Saggese navbar text larger and bolder
- [x] Changed the navbar and site typography to Times New Roman
- [x] Corrected ambiguous Tailwind font utilities so typography classes apply font-family instead of invalid font-weight values
- [x] Added the Saggese logo above the hero headline
- [x] Adjusted hero headline sizing for the updated logo hierarchy

### Credentials, media, and awards
- [x] Confirmed that "AVO" refers to AVVO
- [x] Added the approved AVVO awards to the attorney profile
- [x] Added approved shows and media appearances
- [x] Added Lawyers.com media recognition badge
- [x] Added Las Vegas Review-Journal weekly writer/feature recognition to the Media page
- [x] Removed publication dates from the Media page
- [x] Confirmed the Results page has no publication dates
- [x] Kept Las Vegas Review-Journal weekly writer/feature recognition on the Media page
- [x] Added 2025 and 2026 Platinum Client Champion recognition
- [x] Added the approved bar admissions list
- [x] Added a separate Education section
- [x] Added the approved awards list, including the Silver Client Champion recognition

### About page and practice areas
- [x] Confirmed exact wording for the former Pro Tempore Justice Court Judge credential
- [x] Updated the approved personal-injury biography copy
- [ ] Clarify whether "Southern Nevada" refers to the courtroom or community
- [x] Added Battery/Domestic Violence practice-area content
- [x] Increased practice-area description and link text size

### Results and reviews
- [x] Updated the Results page with "Over $30 million" in reported client recoveries

### Contact form and contact details
- [x] Made the phone number prominent and kept email contact through the form
- [x] Corrected the address to `732 S. Sixth Street, Suite 200C`
- [x] Added "24-hour calls available"
- [x] Added "Unknown" as an option for medical bills
- [x] Changed the intake question to "Was the other vehicle at fault?" with an "Unknown" option
- [x] Used a dark-blue background for the thank-you message
- [x] Increased contact-form text and submit action for obvious readability
- [x] Synchronized the main About page biography and full awards list with the approved profile information
- [ ] Fix contact-form attachment display
- [ ] Confirm attachment types and maximum file size
