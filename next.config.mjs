const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@icons-pack/react-simple-icons', '@lobehub/ui'],
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'registry.npmmirror.com',
        pathname: '/@lobehub/**',
        port: '',
        protocol: 'https',
      },
    ],
    unoptimized: !isProd,
  },

  async headers() {
    return isProd
      ? []
      : [
          {
            source: '/:path*',
            headers: [
              { key: 'Access-Control-Allow-Credentials', value: 'true' },
              { key: 'Access-Control-Allow-Origin', value: '*' },
              { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
              {
                key: 'Access-Control-Allow-Headers',
                value:
                  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
              },
            ],
          },
        ];
  },
};

export default nextConfig;
