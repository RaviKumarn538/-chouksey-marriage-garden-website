/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.imagesbazaar.com"
      },
      {
        protocol: "https",
        hostname: "imagesbazaar.com"
      },
      {
        protocol: "https",
        hostname: "files.yappe.in"
      }
    ]
  }
};

export default nextConfig;
