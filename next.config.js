
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For Next.js 14 and React 19
  experimental: {
    // Experimental features for improved compatibility
    serverActions: true,
  },
  // For images, ensure you're using the latest format
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Define your remote patterns here if needed
    ]
  },
  // Enable standalone output for improved deployment
  output: 'standalone',
  // Suppress hydration warnings in production
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Additional settings to improve build stability
  swcMinify: true,
  compiler: {
    // Suppress hydration warnings in production
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  }
};

module.exports = nextConfig;
