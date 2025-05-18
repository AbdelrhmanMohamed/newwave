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
      // Add this if you need placeholder images
      {
        protocol: "https",
        hostname: "placeholder.svg",
      },
    ],
  },
};

export default nextConfig;
