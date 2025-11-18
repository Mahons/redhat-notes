import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath if using custom domain
  // basePath: '/redhat-notes',
};

export default nextConfig;
