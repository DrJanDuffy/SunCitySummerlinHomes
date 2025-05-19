
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For Next.js 14 and React 19
  experimental: {
    // No longer needed: optimizeFonts and optimizeCss were causing issues in your logs
  },
  // For images, ensure you're using the latest format
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Define your remote patterns here if needed
    ]
  },
  // Enable standalone output for improved deployment
  output: 'standalone'
};

module.exports = nextConfig;
