/** @type {import('next').NextConfig} */
const withCss = require('next-css');
const withTs = require('next-typescript');


module.exports = withTs({
  /* additional config*/
});


module.exports = withCss({
  /* extra optional config */
});

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { dev, isServer } = options;

    // if (!dev) {
    //   config.devtool = 'source-map';
    // }

    const extractCSSPlugin = new ExtractTextPlugin({
      filename: 'static/style.css',
      disable: dev,
    });
    config.module.rules.push({
      test: /\\.css$/,
      use: cssLoaderConfig(extractCSSPlugin, {
        cssModules,
        dev,
        isServer,
      }),
    });
    
    return config;
  },
}

module.exports = nextConfig
