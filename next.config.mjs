/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/case-studies/:slug',
        destination: '/projects/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
