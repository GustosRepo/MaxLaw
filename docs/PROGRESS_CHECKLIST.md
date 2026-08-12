# Progress Checklist

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
