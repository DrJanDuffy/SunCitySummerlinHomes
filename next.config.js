
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 12 doesn't support 'export' for output
  // but needs these settings for static export
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
  }
};

module.exports = nextConfig;
