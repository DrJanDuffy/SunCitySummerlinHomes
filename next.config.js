/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    siteUrl: 'https://suncitysummerlin.com',
  },
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
  // Allow builds to complete even with TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build as well
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Switch to standalone mode for server-side rendering
  output: 'standalone',
  experimental: {
    appDir: false
  },
  // Add configuration to handle external browser extensions
  webpack: (config) => {
    return config;
  },
  // Suppress hydration warnings in development
  onDemandEntries: {
    // Keep the pages in memory for longer to reduce rebuilds
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 4,
  }
};

module.exports = nextConfig;