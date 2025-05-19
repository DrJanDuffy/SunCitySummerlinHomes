
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Switch from static generation to SSR
  reactStrictMode: true,
  env: {
    siteUrl: 'https://suncitysummerlin.com',
  },
  images: {
    unoptimized: true,
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
