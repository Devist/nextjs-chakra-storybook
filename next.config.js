const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
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
})
