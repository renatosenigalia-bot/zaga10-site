/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256],
  },
}

module.exports = nextConfig
