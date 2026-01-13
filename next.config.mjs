import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      wouter: path.resolve(__dirname, "src/lib/wouter.tsx"),
      "wouter/use-browser-location": path.resolve(
        __dirname,
        "src/lib/wouter-use-browser-location.ts",
      ),
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/case-studies/ubu-design",
        destination: "/case-studies/ubu-design-case-study",
        permanent: true,
      },
      {
        source: "/case-studies/citypat",
        destination: "/case-studies/citypat-case-study",
        permanent: true,
      },
      {
        source: "/case-studies/junksaway",
        destination: "/case-studies/junksaway-case-study",
        permanent: true,
      },
      {
        source: "/case-studies/socialland-website",
        destination: "/case-studies/socialland-website-case-study",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
