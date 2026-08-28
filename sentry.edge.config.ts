// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isProduction = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: "https://2b373f938c207b122845ae4fac7d180c@o4511536973545472.ingest.us.sentry.io/4511896211226624",

  enabled: isProduction,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: isProduction ? 1 : 0,

  // Enable logs to be sent to Sentry
  enableLogs: isProduction,

  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
  beforeSend(event) {
    // Previously we suppressed ENOENT / PageNotFoundError events during
    // App Router migration to reduce noisy Sentry alerts. Those temporary
    // filters have been removed so all production errors are reported.
    // If this causes noise, follow-up: revert or add targeted filters after audit.
    return event;
  },
});
