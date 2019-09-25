const mix = require('laravel-mix');

/*
 * Builds sources maps for assets.
 *
 * @link https://laravel.com/docs/5.6/mix#css-source-maps
 */
mix.sourceMaps();

/*
 * Versioning and cache busting. Append a unique hash for production assets. If
 * you only want versioned assets in production, do a conditional check for
 * `mix.inProduction()`.
 *
 * @link https://laravel.com/docs/5.6/mix#versioning-and-cache-busting
 */
mix.version();

// mix.sass('src/style.scss', 'dist/');
mix.react('src/index.js', 'dist/');

mix.babelConfig({
  'plugins': [
    [ '@wordpress/babel-plugin-makepot', {
      'output': 'languages/javascript.pot'
    } ],
  ],
});

mix.webpackConfig({
  externals: {
    'lodash': 'lodash',
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@wordpress/components': 'wp.components',
    '@wordpress/element': 'wp.element',
    '@wordpress/blocks': 'wp.blocks',
    '@wordpress/editor': 'wp.editor',
    '@wordpress/hooks': 'wp.hooks',
    '@wordpress/utils': 'wp.utils',
    '@wordpress/date': 'wp.date',
    '@wordpress/data': 'wp.data',
    '@wordpress/i18n': 'wp.i18n',
    '@wordpress/editPost': 'wp.editPost',
    '@wordpress/plugins': 'wp.plugins',
    '@wordpress/apiRequest': 'wp.apiRequest',
  },
});
