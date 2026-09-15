import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/tienda',
        destination: '/',
        permanent: false,
      },
      {
        source: '/tienda/:path*',
        destination: '/',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
