import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newwav.net",
        pathname: "/wp-content/uploads/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "placeholder.svg",
      // },
      {
        protocol: "https",
        hostname: "srv918361.hstgr.cloud",
        pathname: "/uploads/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
