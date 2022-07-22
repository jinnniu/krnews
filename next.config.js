/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/entertainment",
        destination: `https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&pageSize=100&apiKey=${API_KEY}`,
      },
      {
        source: "/api/business",
        destination: `https://newsapi.org/v2/top-headlines?country=kr&category=business&pageSize=100&apiKey=${API_KEY}`,
      },
      {
        source: "/api/health",
        destination: `https://newsapi.org/v2/top-headlines?country=kr&category=health&pageSize=100&apiKey=${API_KEY}`,
      },
      {
        source: "/api/science",
        destination: `https://newsapi.org/v2/top-headlines?country=kr&category=science&pageSize=100&apiKey=${API_KEY}`,
      },
      {
        source: "/api/sports",
        destination: `https://newsapi.org/v2/top-headlines?country=kr&category=sports&pageSize=100&apiKey=${API_KEY}`,
      },
      {
        source: "/api/technology",
        destination: `https://newsapi.org/v2/top-headlines?country=kr&category=technology&pageSize=100&apiKey=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
