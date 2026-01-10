import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "iili.io",
      },
      {
        protocol: "https",
        hostname: "rgpneus.com.br",
      },
      {
        protocol: "https",
        hostname: "www.eotica.com.br",
      },
      {
        protocol: "https",
        hostname: "eotica.vtexassets.com",
      },
    ],
  },
};

export default nextConfig;
