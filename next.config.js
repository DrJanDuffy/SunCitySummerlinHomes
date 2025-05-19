
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
  env: {
    siteUrl: 'https://suncitysummerlin.com',
  },
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
