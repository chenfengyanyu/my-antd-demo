var path = require('path');
var webpack = require('webpack');

module.exports = function(webpackConfig) {
    webpackConfig.module.loaders.push({ test: /\.html$/, loader: 'file?name=[name].[ext]' });
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd',
        style: 'css',
    }]);
    // 避免jquery被打包
    webpackConfig.externals = {
        jquery: 'jQuery',
    };
    // 设置全局jquery变量
    webpackConfig.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jQuery'
    }));
    return webpackConfig;
};
