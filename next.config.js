
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
  }
};

module.exports = nextConfig;
