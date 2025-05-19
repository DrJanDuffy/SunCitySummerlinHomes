
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    siteUrl: 'https://suncitysummerlin.com',
  },
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  // Add rewrites for SPA-like behavior
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/_404'
        }
      ]
    };
  },
  // Configure static export for Next.js 12+
  output: 'export',
  distDir: 'out'
};

module.exports = nextConfig;
