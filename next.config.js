const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "upload.wikimedia.org"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
