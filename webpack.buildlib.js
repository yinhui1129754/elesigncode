const path = require('path');
module.exports = {
  mode: 'production',
  //mode:'development',  
  entry: {
      app: './release/lib/core/main.js'
    },
    plugins: [
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
      filename: 'dzjm.min.js',
      path: path.resolve(__dirname, './release/lib')
    }
}