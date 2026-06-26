/** @type {import('next').NextConfig} */
const basePath = '/jiangyutong.github.io';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: isProd,
  basePath,
  assetPrefix: isProd ? `https://yutongjiangyy.github.io${basePath}` : '',
};

export default nextConfig;
