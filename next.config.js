const path = require('path');

// prettier-ignore
module.exports = {
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src/');
    config.resolve.alias['components'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['features'] = path.resolve(__dirname, 'src/features');
    config.resolve.alias['hooks'] = path.resolve(__dirname, 'src/hooks');
    config.resolve.alias['pages'] = path.resolve(__dirname, 'src/pages');
    config.resolve.alias['reducers'] = path.resolve(__dirname, 'src/reducers');
    config.resolve.alias['reducers'] = path.resolve(__dirname, 'src/reducers');

    return config;
  }
};
