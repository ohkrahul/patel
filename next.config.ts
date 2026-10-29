import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /v3 is a frozen static export of the original design (commit fcb43e9,
  // built with basePath "/v3") living in public/v3.
  async rewrites() {
    return [{ source: "/v3", destination: "/v3/index.html" }];
  },
};

export default nextConfig;
