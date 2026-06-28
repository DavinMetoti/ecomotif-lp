import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui", "@solar-icons/react", "motion"],
  allowedDevOrigins: ["172.20.10.6", "localhost", "127.0.0.1"],
}

export default nextConfig
