var fs = require("fs")
var path = require("path")
var sass = require("node-sass")
var code = fs.readFileSync(path.resolve(__dirname,"../src/test.scss"),"utf-8")
console.log("编译之前:")
console.log(code)
var styleCode =sass.renderSync({
    data:code
})
console.log("编译之后:")
console.log(styleCode.css.toString("utf-8"))