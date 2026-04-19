/** @type {import('next').NextConfig} */

/**
 * https://i.ibb.co.com/mVhKd44P/Capture2.jpg
 */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
