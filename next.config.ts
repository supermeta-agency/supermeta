import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is Reddit-only now: send the old multi-service pages to their closest match.
  async redirects() {
    return [
      { source: "/marketing", destination: "/", permanent: true },
      { source: "/development", destination: "/", permanent: true },
      { source: "/portfolio", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
