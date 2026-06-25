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
          loaders: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: { overrides: { removeViewBox: false } }
                    }
                  ]
                }
              }
            }
          ],
          as: '*.js'
        }
      ]
    }
  }
};

export default nextConfig;
