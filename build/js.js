var fs = require("fs")
var path = require("path")
var babel = require("@babel/core")
var code = fs.readFileSync(path.resolve(__dirname,"../src/test.js"),"utf-8")
console.log("编译之前:")
console.log(code)
var styleCode =babel.transformSync(code,{
    presets: ['@babel/preset-env'],
    "plugins": ["transform-vue-jsx"]
})
console.log("编译之后:")
console.log(styleCode.code)