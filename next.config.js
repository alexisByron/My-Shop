/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.pixabay.com","images.unsplash.com","www.elmuneco.cl","media.istockphoto.com"]
  },
}

module.exports = nextConfig
