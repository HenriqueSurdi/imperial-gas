import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com; script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com; script-src-attr 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; style-src-elem 'self' 'unsafe-inline'; style-src-attr 'self' 'unsafe-inline'; font-src 'self' data: https://use.typekit.net https://use.typekit.com; img-src 'self' data: https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.google.com.br https://*.tile.openstreetmap.org https://unpkg.com; connect-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://www.google.com https://www.google.com.br https://*.tile.openstreetmap.org https://unpkg.com; frame-src 'self' https://googleads.g.doubleclick.net https://www.googleadservices.com",
          },
        ],
      },
    ]
  },
};

export default nextConfig;
