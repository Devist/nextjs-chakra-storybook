const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@core-business': path.resolve(__dirname, 'src/@core-business'),
        '@core': path.resolve(__dirname, 'src/@core'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@/*': path.resolve(__dirname, 'src')
      },
      ...config.resolve
    }
    return config
  }
}
