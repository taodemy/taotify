/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    TAOTIFY_BACKEND_URL: process.env.TAOTIFY_BACKEND_URL,
  },
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "http://localhost:3001/v1/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
