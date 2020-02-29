var fs = require("fs-extra")
var path = require("path")

function resolve(p){
    return path.resolve(__dirname,p);
}
function verAdd(v){
    var pArr = v.split(".");
    pArr[2]++;
    return pArr.join(".")
}
var json = fs.readJSONSync(resolve("./../package.json"))
var str = `{
    "name": "elesigncode",
    "version": "${verAdd(json.version)}",
    "description": "电子签名",
    "main": "./lib/core/main.js",
    "scripts": {
      "dev": "webpack-dev-server --open",
      "build": "webpack --config webpack.config.js",
      "build:lib": "rimraf release&&node build/build&&webpack --config webpack.buildlib.js&&rimraf lib"
    },
    "keywords": ["电子签名","js"],
    "author": "HHSJ",
    "license": "ISC",
    "devDependencies": {
      
    }
  }`
fs.mkdirSync(resolve("./../release"));
fs.mkdirSync(resolve("./../release/lib"));
fs.copySync(resolve("./../src/class"),resolve("./../release/lib/class"));
fs.copySync(resolve("./../src/core"),resolve("./../release/lib/core"));
fs.copySync(resolve("./../src/untils"),resolve("./../release/lib/untils"));
fs.writeFileSync(resolve("./../release/package.json"),str,{
    flag:"w+"
})
//fs.copySync(resolve("./../package.json"),resolve("./../release/package.json"));
fs.copySync(resolve("./../README.md"),resolve("./../release/README.md"));