const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'main_app',
      remotes: {
        listing_maintenance_app:
          'listing_maintenance_app@//localhost:4201/remoteEntry.js',
        orders_app: 'orders_app@//localhost:4202/remoteEntry.js',
      },
      shared: {
        // shared libraries - please check possible settings.
        'react-router-dom': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        react: {
          singleton: true,
        },
        'styled-components': {
          singleton: true,
        },
        '@mantine/core': {
          singleton: true,
        },
      },
    })
  );
  config.output.publicPath = 'auto';

  return config;
};
