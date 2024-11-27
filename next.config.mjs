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
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "en",
  },
  output: 'export',
};

export default nextConfig;
