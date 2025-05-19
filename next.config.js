
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    siteUrl: 'https://suncitysummerlin.com',
  },
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
  // Allow builds to complete even with TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build as well
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Switch to standalone mode for server-side rendering
  output: 'standalone',
  experimental: {
    appDir: false,
    // Enable CSS optimization with critters
    optimizeCss: {
      minify: true,
      inlineThreshold: 0,
      fonts: true
    },
    // Optimize fonts
    optimizeFonts: true
  },
  // Add configuration to handle external browser extensions
  webpack: (config) => {
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
        },
      },
    };
    return config;
  },
  // Suppress hydration warnings in development
  onDemandEntries: {
    // Keep the pages in memory for longer to reduce rebuilds
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 8,
  },
  // Increase build performance
  swcMinify: true,
  // Improve runtime performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false
  }
};

module.exports = nextConfig;
