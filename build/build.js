var fs = require("fs-extra")
var path = require("path")
function resolve(p){
    return path.resolve(__dirname,p);
}
fs.mkdirSync(resolve("./../release"));
fs.mkdirSync(resolve("./../release/lib"));
fs.copySync(resolve("./../src/class"),resolve("./../release/lib/class"));
fs.copySync(resolve("./../src/core"),resolve("./../release/lib/core"));
fs.copySync(resolve("./../src/untils"),resolve("./../release/lib/untils"));
fs.copySync(resolve("./../package.json"),resolve("./../release/package.json"));
fs.copySync(resolve("./../README.md"),resolve("./../release/README.md"));