/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove experimental optimizeCss flag to use stable features
  swcMinify: true, // Use SWC minifier instead
  compiler: {
    // Use stable compiler options
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig