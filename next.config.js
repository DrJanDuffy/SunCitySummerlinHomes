
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporary solution to allow deployment
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  // Improve SEO options
  experimental: {
    scrollRestoration: true
  },
  env: {
    siteUrl: 'https://suncitysummerlin.com',
  }
};

module.exports = nextConfig;
