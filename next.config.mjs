/** @type {import('next').NextConfig} */
// 你的站点在子路径：https://jiangyytong126-arch.github.io/jiangyutong.github.io/
const basePath = '/jiangyutong.github.io';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // trailingSlash 仅在生产构建启用，避免 dev 模式下 basePath 重定向死循环
  trailingSlash: isProd,
  basePath,
  // 静态资源必须带子路径，否则 GitHub Pages 上会 404
  assetPrefix: isProd ? `https://jiangyytong126-arch.github.io${basePath}` : '',
};

export default nextConfig;

