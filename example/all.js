import "./../src/scss/main.scss"
import Main from "./../src/core/main"
import defaultData from "./data"
var m = new Main({
    ele:null,
    pen:"writing"
});
m.init();
m.moutedEle(document.getElementById("testEle"));
m.jsonTo(defaultData);
var undo = document.getElementById("undo");
var redo  = document.getElementById("redo");
var getJson  = document.getElementById("getJson");
var downloadPng = document.getElementById("downloadPng");
undo.addEventListener("click",function(){
    m.undo();
})
redo.addEventListener("click",function(){
    m.redo();
})
getJson.addEventListener("click",function(){
    var jsonStr = m.toJson();
    console.log( jsonStr);
    alert(jsonStr);
})
downloadPng.addEventListener("click",function(){
    var baseUrl = m.toPng();
    var a= document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("href",baseUrl);
    a.setAttribute("download","png图片");
    a.click();
    document.body.removeChild(a);
})

window.testMain = m;

