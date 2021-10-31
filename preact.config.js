module.exports = function (config, env) {
    if (env.isProd) {
      config.devtool = false; // disable sourcemaps
      config.output.publicPath = '/embed/'; // path prefix
    }
  }