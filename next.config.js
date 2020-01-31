const path = require('path');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

// prettier-ignore
module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      esModule: true,
      sourceMap: true
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      });

      config.resolve.alias['~'] = path.resolve(__dirname, 'src/');
      config.resolve.alias['components'] = path.resolve(__dirname, 'src/components');
      config.resolve.alias['config'] = path.resolve(__dirname, 'src/config');
      config.resolve.alias['data'] = path.resolve(__dirname, 'src/data');
      config.resolve.alias['features'] = path.resolve(__dirname, 'src/features');
      config.resolve.alias['hooks'] = path.resolve(__dirname, 'src/hooks');
      config.resolve.alias['lib'] = path.resolve(__dirname, 'src/lib');
      config.resolve.alias['pages'] = path.resolve(__dirname, 'src/pages');
      config.resolve.alias['reducers'] = path.resolve(__dirname, 'src/reducers');
      config.resolve.alias['styles'] = path.resolve(__dirname, 'src/styles');
      config.resolve.alias['styles'] = path.resolve(__dirname, 'src/styles');
      config.resolve.alias['systems'] = path.resolve(__dirname, 'src/systems');
      config.resolve.alias['utils'] = path.resolve(__dirname, 'src/utils');

      return config;
    }
  })
);
