const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.optimization.runtimeChunk = false; // this part is important - not going to work without it
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'payments_app',
      filename: 'remoteEntry.js',
      exposes: {
        './PaymentsPage': 'apps/payments-app/src/app/pages/PaymentsPage',
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
  config.output.uniqueName = 'payments_app';

  return config;
};
