import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@asea/shared",
    "@asea/content-engine",
    "@asea/database",
  ],
  typescript: {
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
