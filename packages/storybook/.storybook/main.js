module.exports = {
  // @see https://github.com/storybookjs/storybook/issues/16555
  core: {
    builder: 'webpack5',
  },
  // @see https://github.com/storybookjs/storybook/issues/12307
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  // @see https://stackoverflow.com/questions/61375674/upgrade-to-webpack-5-breaking-storybook-5
  webpackFinal: (config) => {
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
