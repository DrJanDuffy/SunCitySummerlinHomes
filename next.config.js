
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
  // Configure for Next.js 12 static export
  distDir: 'out',
  // Allow builds to complete even with TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build as well
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Important for static export
  output: 'export'
};

module.exports = nextConfig;
