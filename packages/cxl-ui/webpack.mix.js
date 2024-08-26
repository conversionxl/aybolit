/**
 * Laravel Mix configuration file.
 *
 * Laravel Mix is a layer built on top of WordPress that simplifies much of the
 * complexity of building out a Webpack configuration file. Use this file to
 * configure how your assets are handled in the build process.
 *
 * See: https://github.com/JeffreyWay/laravel-mix/blob/fe4c1383bd11d25862b557587c97bafd95594365/docs/installation.md
 *
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

// Import required packages.
// eslint-disable-next-line import/no-extraneous-dependencies
const mix = require('laravel-mix');

/*
 * -----------------------------------------------------------------------------
 * Build Process
 * -----------------------------------------------------------------------------
 * The section below handles processing, compiling, transpiling, and combining
 * all of the plugin's assets into their final location. This is the meat of the
 * build process.
 * -----------------------------------------------------------------------------
 */

/*
 * Sets the development path to assets. By default, this is the `/build/plugin`
 * folder in the plugin.
 */

const devPath = 'src';
const distPath = 'pkg/dist-web';

/*
 * Sets the path to the generated assets. By default, this is the `/pkg/dist-web` folder
 * in the plugin. If doing something custom, make sure to change this everywhere.
 */
mix.setPublicPath(distPath);

/*
 * Set Laravel Mix options.
 *
 * See: https://github.com/JeffreyWay/laravel-mix/blob/fe4c1383bd11d25862b557587c97bafd95594365/docs/url-rewriting.md#css-url-rewriting
 * See: https://github.com/webpack-contrib/terser-webpack-plugin#options
 */
mix.options({
  processCssUrls: false,
  terser: {
    terserOptions: {
      output: {
        comments: false,
      },
    },
    extractComments: false,
  },
  manifest: 'cxl-ui-manifest.json',
});

/*
 * Builds sources maps for assets.
 *
 * See: https://github.com/JeffreyWay/laravel-mix/blob/fe4c1383bd11d25862b557587c97bafd95594365/docs/api.md#sourcemapsgenerateforproduction-devtype-productiontype
 */
// mix.sourceMaps();
mix.sourceMaps(true);

/*
 * Versioning and cache busting. Append a unique hash for production assets. If
 * you only want versioned assets in production, do a conditional check for
 * `mix.inProduction()`.
 *
 * See: https://github.com/JeffreyWay/laravel-mix/blob/fe4c1383bd11d25862b557587c97bafd95594365/docs/api.md#versionfiles
 */
mix.version();

/*
 * Compile JavaScript.
 *
 * See: https://github.com/JeffreyWay/laravel-mix/blob/fe4c1383bd11d25862b557587c97bafd95594365/docs/mixjs.md#basic-usage
 */

mix
  .js(`${devPath}/index-core.js`, `${distPath}/cxl-ui.js`)
  .js(`${devPath}/index-institute.js`, `${distPath}/cxl-ui-institute.js`)
  .js(`${devPath}/index-playbooks.js`, `${distPath}/cxl-ui-playbooks.js`)
  .js(`${devPath}/index-jwplayer.js`, `${distPath}/cxl-ui-jwplayer.js`);

/*
 * Extract vendors etc.
 *
 * See: https://github.com/JeffreyWay/laravel-mix/blob/fe4c1383bd11d25862b557587c97bafd95594365/docs/extract.md#L14
 */
mix.extract();

/*
 * Copy assets.
 */
mix.copy('../../node_modules/@polymer/polymer/lib/utils/unresolved.js', distPath);

/*
 * Add custom Webpack configuration.
 *
 *
 * See: https://github.com/JeffreyWay/laravel-mix/blob/fe4c1383bd11d25862b557587c97bafd95594365/docs/quick-webpack-configuration.md
 * See: https://webpack.js.org/configuration/
 */
mix.webpackConfig(() => ({
  stats: 'minimal',
  performance: { hints: false },
  module: {
    rules: [
      {
        test: require.resolve('headroom.js'),
        // use: 'imports-loader?this=>window,define=>false,exports=>false'
        use: [
          {
            loader: 'imports-loader',
            options: {
              wrapper: 'window',
              additionalCode:
                '/* Disable AMD for misbehaving libraries */var define = false;var exports = false;',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: {
      stream: false,
    },
  },
}));
