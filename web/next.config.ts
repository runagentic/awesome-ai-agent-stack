import type { NextConfig } from "next";

// Project page is served at https://narayann7.github.io/awesome-ai-agent-stack/
// so assets and routes need the repo name as a base path in production.
// Local dev keeps the root path for convenience.
const isProd = process.env.NODE_ENV === "production";
const repo = "awesome-ai-agent-stack";

const nextConfig: NextConfig = {
  output: "export", // static HTML export; required for GitHub Pages (no Node server)
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true }, // no image-optimization server on Pages
  trailingSlash: true, // emit dir/index.html so nested routes resolve on static hosts
};

export default nextConfig;
