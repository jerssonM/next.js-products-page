/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    remotePatterns: [{ hostname: 'fakestoreapi.com', protocol: 'https' }],
  },
}

module.exports = nextConfig
