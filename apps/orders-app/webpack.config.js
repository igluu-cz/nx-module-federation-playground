const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.optimization.runtimeChunk = false; // this part is important - not going to work without it
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'orders_app',
      filename: 'remoteEntry.js',
      exposes: {
        './OrdersPage': 'apps/orders-app/src/app/pages/OrdersPage',
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
  config.output.clean = true;
  config.output.uniqueName = 'orders_app';

  return config;
};
