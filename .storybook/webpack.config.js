// load the default config generator.
var genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = function (config, env) {
    var config = genDefaultConfig(config, env);

config.module.rules.push( {
        test: /\.ts$/,
        loaders: ["ts-loader"],
        include: path.resolve(__dirname, '../src')
      });
config.module.rules.push( {
        test: /\.tsx$/,
        loaders: ["ts-loader"],
        include: path.resolve(__dirname, '../src')
      });
    // config.module.loaders.push({
    //     test: /\.tsx$/,
    //     loader: 'ts-loader'
    // })
    // config.module.loaders.push({
    //     test: /\.ts$/,
    //     loader: 'ts-loader'
    // })
    config.resolve.extensions.push(".tsx");
    config.resolve.extensions.push(".ts");

    return config;
};
