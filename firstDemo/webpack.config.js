
const path = require('path');
const webpack = require('webpack'); // 第二步

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
    new webpack.HotModuleReplacementPlugin() // webpack.HotModuleReplacementPlugin本身是类，那么它就有构造函数, new一个实例
  ]
}