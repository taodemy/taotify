/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_MUSIC_SERVER_ADDRESS: process.env.NEXT_MUSIC_SERVER_ADDRESS,
  },
};

module.exports = nextConfig;
