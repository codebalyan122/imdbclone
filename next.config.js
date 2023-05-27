/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/about/" : undefined,
};

module.exports = nextConfig;
