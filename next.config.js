/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
<<<<<<< HEAD
    domains: ['lh3.googleusercontent.com'],
=======
    domains: [
      'lh3.googleusercontent.com',
      'cdn.pixabay.com',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com'
    ],
>>>>>>> 836a8a0b7c300a1663618bdceef94d96e162b1db
  },
})


