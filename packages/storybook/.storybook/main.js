module.exports = {
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  // @see https://github.com/storybookjs/storybook/issues/16555
  core: {
    builder: {
      name: 'webpack5',
      // @see https://storybook.js.org/docs/react/builders/webpack
      options: {
        fsCache: true,
      },
    },
  },
  features: {
    /**
     * @see https://github.com/storybookjs/storybook/pull/18464
     * @todo Update stories to CSF3 `name` property.
     */
    storyStoreV7: true,
  },
  // @see https://github.com/storybookjs/storybook/issues/12307
  stories: ['../**/*.stories.js'],
  // @see https://stackoverflow.com/questions/61375674/upgrade-to-webpack-5-breaking-storybook-5
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.fallback,
          stream: require.resolve('stream-browserify'),
        },
      },
    };
  },
};
