/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio', // TODO: Define o subdiretório base, comentar ao atuar em desenvolvimento
  images: {
    unoptimized: true, // Evita problemas com imagens no export
  },
};

export default nextConfig;
