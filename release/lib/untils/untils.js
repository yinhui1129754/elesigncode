import Base from "./../class/base"
export function proxyCall(o,key,setAfter,geter,defaultVal,setBefore){
    var v = defaultVal||undefined;
    Object.defineProperty(o,key,{
        get:function(){
            geter&&geter(v);
            return v;
        },
        set:function(v2){
            var buf = v;
            if(!(setBefore&&setBefore(v2))){
                v = v2;
            };
           
            setAfter&&setAfter(v,buf);
        }
    })
}

export function isMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       return true
    } else {
       return false
    }
}
export function isString(v){
    return Object.prototype.toString.call(v) === "[object String]";
}
export function isNumber(v){
    return Object.prototype.toString.call(v) === "[object Number]";
}
export function isBool(v){
    return Object.prototype.toString.call(v) === "[object Boolean]";
}
export function isValue(v){
    return isString(v)||isBool(v)||isNumber(v);
}
export function isFunction(v){
    return Object.prototype.toString.call(v) === "[object Function]";
}
export function isObj(v){
    return Object.prototype.toString.call(v) === "[object Object]";
}
export function isUndefined(v){
    return typeof v === "undefined";
}
export function isNull(v){
    return v === null;
}
export function isNil(v){
    return !!!v;
}
export function isArray(v){
    return !isUndefined(v.length);
}
/**
 * 合并数组
 * @param {要合并到的数组} arr 
 * @param {被合并的数组} arr2 
 */
export function mergeArr(arr,arr2){
    var i=0;
    for(i;i<arr2.length;i++){
        item = arr2[i]
        if(isValue(item)||isFunction(item)||item instanceof Node||isNull(item[key])){
            arr.push(otem);
        }else if(isObj(item)){
            if(!isObj(arr[i] )){
                arr[i] = {};
            }
            merge(arr[i],item);
        }else if(isArray(item)){
            if(!isArray(arr[i])){
                arr[i] = [];
            }
            mergeArr(arr[i],item);
        }
    }
    return arr;
}
/**
 * 合并对象
 * @param {要合并的对象} ...obj
 */
export function merge(){
    var arr = [].slice.call(arguments);
    var o = arr[0];
    var len = arr.length,item;
    var i = 1,key;
    if(isObj(o)){
        for(i;i<len;i++){
            item = arr[i]
            if(isObj(item)){
                for(key in item){
                    if(isValue(item[key])||isFunction(item[key])||item[key] instanceof Node||isNull(item[key])){
                        o[key] = item[key];
                    }else if(isObj(item[key])){
                        if(!isObj(o[key])){
                            o[key] = {};
                        }
                        merge(o[key],item[key]);
                    }else if(isArray(item[key])){
                        if(!isArray(o[key])){
                            o[key] = [];
                        }
                        mergeArr(o[key],item[key]);
                    }
                }
            }
          
        }
    }
    return o;
}


export var allStatus = {};
var baseArr = [];
/**
 * 创建对象
 * @param {对象名称} name
 * @param {构造函数} call 
 */
export function createObject(name,call){
    name = "HHSJ-"+name
    allStatus[name] = function(){
        call&&call.apply(this,arguments);
    };
    baseArr.unshift(function(){}); 
    baseArr[0].prototype = new Base(name);
    allStatus[name].prototype = new baseArr[0]()
    return allStatus[name];
}
/**
 * 获取最终样式
 * @param {节点} e 
 * @param {样式属性} attr 
 */
export function getEndStyle(e,attr){
    if(typeof window.getComputedStyle!="undefined"){
        return window.getComputedStyle(e)[attr]
    }else{
        return e["currentStyle"][attr];
    }
}

function isPos(node){
    return getEndStyle(node,"position") === "relative" ||
    getEndStyle(node,"position") === "absolute"||
    getEndStyle(node,"position") === "fxied"
}
function getScrollTop() {  
    var scrollPos;  
    if (window.pageYOffset) {  
    scrollPos = window.pageYOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollTop; }  
    else if (document.body) { scrollPos = document.body.scrollTop; }   
    return scrollPos;   
} 
function getScrollLeft() {  
    var scrollPos;  
    if (window.pageXOffset) {  
    scrollPos = window.pageXOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollLeft; }  
    else if (document.body) { scrollPos = document.body.scrollLeft; }   
    return scrollPos;   
} 
export function getOffsetTop(e){
    var node = e;
    var offsetTop = node.offsetTop;
    node = node.parentNode;
    while(node&&!(node.nodeType === 1)){
        if(isPos(node)){
            offsetTop +=node.offsetTop;
        }
        node = node.parentNode;
    }
    return offsetTop-getScrollTop();
}
export function getOffsetLeft(e){
    var node = e;
    var offsetLeft = node.offsetLeft;
    node = node.parentNode;
    while(node&&!(node.nodeType === 1)){
        if(isPos(node)){
            offsetLeft +=node.offsetLeft;
        }
        node = node.parentNode;
    }
    return offsetLeft-getScrollLeft();
}
export default {
    proxyCall,
    mergeArr,
    merge,
    isString,
    isNumber,
    isBool,
    isValue,
    isFunction,
    isObj,
    isUndefined,
    isNull,
    isNil,
    isArray,
    createObject,
    isMobile,
    allStatus,
    getEndStyle,
    getOffsetTop,
    getOffsetLeft,
}