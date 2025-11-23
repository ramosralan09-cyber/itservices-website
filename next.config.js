/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use a server build that supports API routes. Do NOT use 'export'.
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
};

module.exports = nextConfig;
