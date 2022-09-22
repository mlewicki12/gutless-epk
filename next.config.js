/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/epk/gutless',
        destination: '/epk/gutless/album',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
