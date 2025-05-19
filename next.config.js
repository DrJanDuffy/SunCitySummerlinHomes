
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Use export for static site generation
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
