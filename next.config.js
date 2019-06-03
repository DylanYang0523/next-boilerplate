const npm_package = require('./package.json');

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config) => {
    config.resolve = {
      modules: [__dirname, 'node_modules'],
      alias: {
        ...config.resolve.alias,
        ...npm_package._moduleAliases,
      }
    }
    return config;
  }
}