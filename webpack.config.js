const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
      app: './example/all.js'
    },
    plugins: [
    
      new HtmlWebpackPlugin({
        title: '开发环境',
        template:path.resolve(__dirname, 'example/all.html') 
      })
    ],
    resolve: {
    },
    module:{
      rules: [
        {
          test: /\.md$/,
          use: [
              {
                  loader: "html-loader"
              },
              {
                  loader: "markdown-loader",
                  options: {
                      /* your options here */
                  }
              }
          ]
      },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
  ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        host:"0.0.0.0",
        stats:{
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
      }
    }
}