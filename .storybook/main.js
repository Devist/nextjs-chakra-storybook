const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          // custom

          '@core-business': path.resolve(__dirname, '../src/@core-business'),
          '@core': path.resolve(__dirname, '../src/@core'),
          '@hooks': path.resolve(__dirname, '../src/hooks'),
          '@components': path.resolve(__dirname, '../src/components'),
          '@utils': path.resolve(__dirname, '../src/utils'),
          '@/*': path.resolve(__dirname, '../src')
        }
      }
    }
  }
}
