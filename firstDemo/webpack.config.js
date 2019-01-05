
const path = require('path');
const webpack = require('webpack'); // 第二步

const htmlWebpackPlugin = require('html-webpack-plugin'); //这个插件的两个作用：
//1 自动在内存中根据配置的template指定页面生成一个内存页面
//2 自动把打包好的bundle.js追加到页面中

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: { //启用webpack-dev-server配置参数的第二种形式
    //  --open --port 3000 --contentBase src --hot
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: true // 第一步
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // webpack.HotModuleReplacementPlugin本身是类，那么它就有构造函数, new一个实例
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), //指定模板文件
      filename: 'index.html' //指定生成页面的名称 最好与要替换的模板文件重名
    })
  ]
}