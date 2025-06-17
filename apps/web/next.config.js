// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ui: path.resolve(__dirname, "../../packages/ui"),
      lib: path.resolve(__dirname, "../../packages/lib"),
      config: path.resolve(__dirname, "../../packages/config"),
    };
    return config;
  },
};