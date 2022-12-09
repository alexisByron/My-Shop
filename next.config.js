/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com','www.elmuneco.cl','img.freepik.com','images.unsplash.com'],
  },
}

module.exports = nextConfig
