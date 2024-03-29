/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: [
      "img.freepik.com",
      "udeateststorageaccount.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
