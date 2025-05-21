/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /pdfjs-dist\/build\/pdf\.worker\.js$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name].[hash][ext]',
      },
    });
    config.resolve.alias.canvas = false;

    return config;
  },
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'motion-web-assets.s3.eu-west-2.amazonaws.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*;",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/resource-hub',
        destination: '/knowledge-hub',
        permanent: true,
      },
      {
        source: '/resource-hub/:path*',
        destination: '/knowledge-hub/:path*',
        permanent: true,
      },
    ];
  },
});
