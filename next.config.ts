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
    ];
  },
};

export default nextConfig;
