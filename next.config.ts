import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind CSS is processed by Turbopack using this loader
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
