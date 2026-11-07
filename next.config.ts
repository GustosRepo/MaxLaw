import { withSentryConfig } from "@sentry/nextjs/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/About-The-Firm/Marc-A-Saggese-Esq.html",
        destination: "/about/marc-a-saggese",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/index.html",
        destination: "/practice",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Drugs.html",
        destination: "/criminal-defense/drugs",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Motorcycle-Accidents.html",
        destination: "/practice/motorcycle-accidents",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Burglary.html",
        destination: "/criminal-defense/burglary",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Forgery.html",
        destination: "/criminal-defense/forgery",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Record-Sealing.html",
        destination: "/criminal-defense/record-sealing",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Wrongful-Death.html",
        destination: "/practice/wrongful-death",
        permanent: true,
      },
      {
        source: "/criminal-defense/drug-offenses",
        destination: "/criminal-defense/drugs",
        permanent: true,
      },
      {
        source: "/criminal-defense/battery-domestic-violence",
        destination: "/criminal-defense/domestic-violence",
        permanent: true,
      },
      {
        source: "/practice/brain-spine-injury",
        destination: "/practice/brain-and-spine-injury",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Bad-Checks.html",
        destination: "/criminal-defense/bad-checks",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Premises-Liability.html",
        destination: "/practice/premises-liability",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Product-Liability.html",
        destination: "/practice/product-liability",
        permanent: true,
      },
      // Verified historical equivalents from SEO_MIGRATION_AUDIT.md (P1).
      {
        source: "/About-The-Firm",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/About-The-Firm/index.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/Contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/DUI.html",
        destination: "/criminal-defense/dui",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Domestic-Violence.html",
        destination: "/criminal-defense/domestic-violence",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Juvenile-Crimes.html",
        destination: "/criminal-defense/juvenile-crimes",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Larceny.html",
        destination: "/criminal-defense/larceny",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Murder.html",
        destination: "/criminal-defense/murder",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Prostitution.html",
        destination: "/criminal-defense/prostitution",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Sexual-Assault.html",
        destination: "/criminal-defense/sexual-assault",
        permanent: true,
      },
      {
        source: "/Criminal-Defense/Theft.html",
        destination: "/criminal-defense/theft",
        permanent: true,
      },
      {
        source: "/Disclaimer.html",
        destination: "/disclaimer",
        permanent: true,
      },
      {
        source: "/Media.html",
        destination: "/media",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Brain-And-Spine-Injury.html",
        destination: "/practice/brain-and-spine-injury",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Car-Accident-Statistics.html",
        destination: "/practice/car-accident-statistics",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Car-Accidents.html",
        destination: "/practice/car-accidents",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Cell-Phone-Related-Accidents.html",
        destination: "/practice/cell-phone-related-accidents",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Commercial-Vehicle-Accidents.html",
        destination: "/practice/commercial-vehicle-accidents",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Crosswalk-And-Pedestrian-Accidents.html",
        destination: "/practice/crosswalk-and-pedestrian-accidents",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Elder-Abuse.html",
        destination: "/practice/elder-abuse",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Excessive-Force.html",
        destination: "/practice/excessive-force",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Insurance-Settlements-And-Checks.html",
        destination: "/practice/insurance-settlements-and-checks",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Truck-Accidents.html",
        destination: "/practice/truck-accidents",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Underinsured-And-Uninsured-Accidents.html",
        destination: "/practice/underinsured-and-uninsured-accidents",
        permanent: true,
      },
      {
        source: "/Privacy-Policy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/about-marc-saggese.html",
        destination: "/about/marc-a-saggese",
        permanent: true,
      },
      {
        source: "/bad-checks.html",
        destination: "/criminal-defense/bad-checks",
        permanent: true,
      },
      {
        source: "/battery---domestic-violence.html",
        destination: "/criminal-defense/domestic-violence",
        permanent: true,
      },
      {
        source: "/burglary.html",
        destination: "/criminal-defense/burglary",
        permanent: true,
      },
      {
        source: "/car-accidents.html",
        destination: "/practice/car-accidents",
        permanent: true,
      },
      {
        source: "/dui.html",
        destination: "/criminal-defense/dui",
        permanent: true,
      },
      {
        source: "/elder-abuse.html",
        destination: "/practice/elder-abuse",
        permanent: true,
      },
      {
        source: "/excessive-force.html",
        destination: "/practice/excessive-force",
        permanent: true,
      },
      {
        source: "/forgery.html",
        destination: "/criminal-defense/forgery",
        permanent: true,
      },
      {
        source: "/juvenile-crimes.html",
        destination: "/criminal-defense/juvenile-crimes",
        permanent: true,
      },
      {
        source: "/larceny.html",
        destination: "/criminal-defense/larceny",
        permanent: true,
      },
      {
        source: "/marc-saggese-bio-page",
        destination: "/about/marc-a-saggese",
        permanent: true,
      },
      {
        source: "/motorcycle-accidents.html",
        destination: "/practice/motorcycle-accidents",
        permanent: true,
      },
      {
        source: "/murder.html",
        destination: "/criminal-defense/murder",
        permanent: true,
      },
      {
        source: "/phone/about-the-firm.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/phone/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/phone/practice-areas.html",
        destination: "/practice",
        permanent: true,
      },
      {
        source: "/practice-areas",
        destination: "/practice",
        permanent: true,
      },
      {
        source: "/practice-areas/seal-your-records",
        destination: "/criminal-defense/record-sealing",
        permanent: true,
      },
      {
        source: "/premises-liability.html",
        destination: "/practice/premises-liability",
        permanent: true,
      },
      {
        source: "/product-liability.html",
        destination: "/practice/product-liability",
        permanent: true,
      },
      {
        source: "/prostitution.html",
        destination: "/criminal-defense/prostitution",
        permanent: true,
      },
      {
        source: "/record-sealing.html",
        destination: "/criminal-defense/record-sealing",
        permanent: true,
      },
      {
        source: "/sexual-assault.html",
        destination: "/criminal-defense/sexual-assault",
        permanent: true,
      },
      {
        source: "/theft.html",
        destination: "/criminal-defense/theft",
        permanent: true,
      },
      {
        source: "/wrongful-death.html",
        destination: "/practice/wrongful-death",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Car-Accidents.shtml",
        destination: "/practice/car-accidents",
        permanent: true,
      },
      {
        source: "/Personal-Injury/Disclaimer.html",
        destination: "/disclaimer",
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "codewerx-llc",

  project: "maxlaw",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Keep builds deterministic and avoid uploading source maps unless explicitly re-enabled.
  sourcemaps: {
    disable: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
