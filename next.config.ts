import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR WebSocket from WSL2 host IP (172.x.x.x) and local network during dev.
  // This only applies in development — has no effect on production builds.
  allowedDevOrigins: ["172.21.208.1", "172.21.*"],
};

export default nextConfig;
