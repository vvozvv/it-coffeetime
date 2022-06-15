/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { dev, isServer } = options;
    return config;
  },
}

module.exports = nextConfig
