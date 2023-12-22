/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET: 'evento'
  },
  images: {
    domains: ['res.cloudinary.com', 'example.com', 'images.unsplash.com', 'lh3.googleusercontent.com', 'img.evbuc.com'],
  },
};

module.exports = nextConfig;