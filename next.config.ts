import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
