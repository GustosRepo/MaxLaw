This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `npm test` to verify changes. The regression suite uses Playwright Chromium and mocks email/third-party requests. Install its browser with `npx playwright install chromium` when needed. Node 22 is the version used for the current checks.

## Contact-form spam protection

The consultation and press forms use reCAPTCHA v3. Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` to the public site key and `RECAPTCHA_SECRET_KEY` to the private secret in `.env.local` and the hosting environment. Keep the secret out of Git and never prefix it with `NEXT_PUBLIC_`. Rebuild after setting the public key; restart/redeploy after configuring the server secret. No new database, storage or scheduled job is needed.

Both `/api/send-email` and `/api/contact` verify the token with Google before sending any email, including test-mode email. Verification requires the `contact_submit` action, an accepted hostname and a score of at least 0.5. Missing configuration or an unavailable verification service blocks the submission and shows a retry/phone fallback; it never bypasses verification. A fresh token is generated on each submission attempt.

Register `maxlawnv.com` and `www.maxlawnv.com` for the key in Google's reCAPTCHA console. The server defaults to those hostnames; set `RECAPTCHA_ALLOWED_HOSTNAMES` as a comma-separated list only when another legitimate hostname must submit forms. Development mode also allows `localhost` and `127.0.0.1`; Google must separately allow your development hostname. `RECAPTCHA_MIN_SCORE` optionally adjusts the threshold (0–1). Review actual traffic in Google's console before changing it.

The script loads when the visitor submits a form, separately from analytics consent, and verifies without forwarding their intake fields to Google. The form displays Google's privacy/terms links. Automated tests mock Google and SMTP; an authorized live verification/delivery check is still required after credentials and deployment are configured. Google's [v3 guidance](https://developers.google.com/recaptcha/docs/v3) and [server verification reference](https://developers.google.com/recaptcha/docs/verify) describe the integration.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
