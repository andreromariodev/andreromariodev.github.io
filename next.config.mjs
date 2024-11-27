/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Exporta um site estático
  basePath: '',     // Serve diretamente na raiz
  assetPrefix: '',  // Caminhos absolutos nos assets
};

export default nextConfig;
