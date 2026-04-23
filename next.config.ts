import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': [
        {
          condition: { query: /[?&]url(?=&|$)/ },
          type: 'asset'
        },
        {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      ]
    }
  }
};

export default nextConfig;
