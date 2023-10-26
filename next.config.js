/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      domains: ["images.unsplash.com"],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mdbcdn.b-cdn.net',
          pathname: '/img/Photos/Avatars/**',
          
        },
      ],
    },
    // experimental: {
    //   serverComponentsExternalPackages: ["mongoose"],
    // },
  }




