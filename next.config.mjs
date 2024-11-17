/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['localhost'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
        port:'',
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "blog.homesalive.ca",
        port:'',
        pathname: '/**'
      },
    ],
  },
};

export default nextConfig;
