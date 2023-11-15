/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  optimizeFonts: true,
  cleanDistDir: true,
  poweredByHeader: false,
  compress: true,
  output: "export",
  basePath: "/didar-link",
};

module.exports = nextConfig;
