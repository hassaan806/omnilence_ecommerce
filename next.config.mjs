/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Configure for static export
  output: 'export',
  // Ensure all paths work correctly for static hosting
  images: {
    unoptimized: true,
  },
  // Disable dynamic server components for static export
  experimental: {
    serverComponentsExternalPackages: [],
  }
};

export default nextConfig;