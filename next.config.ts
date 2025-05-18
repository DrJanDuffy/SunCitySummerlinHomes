
import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  allowedDevOrigins: [env.REPLIT_DOMAINS?.split(",")[0]],
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
  }
};

module.exports = nextConfig;
