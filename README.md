# antd demo示例
尝试antd+webpack+react构建项目，这里想尝试一下antd构建的项目中webpack有何不同？全局的类库（如jquery）如何配置？以及如何避免类库文件打包。

## 一、安装ant-init
npm install antd-init -g

## 二、创建目录
mkdir antd-demo && cd antd-demo

## 三、初始化项目
antd-init
之后提示：
antd-init@2 仅适用于学习和体验 antd，如果你要开发项目，推荐使用 dva-cli 进行项目初始化。dva 是一个基于 react 和 redux 的轻量应用框架，概念来自 elm，支持 side effects、热替换、动态加载等，已在生产环境广泛应用。

## 四、使用组件
替换index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
https://ant.design/components/transfer/

## 五、开发调试
npm start
访问：
http://127.0.0.1:8000

## 六、构建和部署
npm run build
入口文件会构建到dist目录中，可以自由部署到不同环境中进行引用。

## 七、关于webpack配置
webpack.congfig.js文件：
```js
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
```