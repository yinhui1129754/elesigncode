/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件提供各种工具方法有类型判断 对象合并 设备判断之类的方法
 * 日期:2022年10月07日
 */
import _ from "lodash"
// import Base from "./../class/base"
export function proxyCall(o:any, key:string, setAfter:((now:any, before:any)=>any), geter:((v:any)=>any), defaultVal:any, setBefore:(v:any)=>any) {
  let v = defaultVal || undefined
  Object.defineProperty(o, key, {
    get: function() {
      geter && geter(v)
      return v
    },
    set: function(v2) {
      const buf = v
      if (!(setBefore && setBefore(v2))) {
        v = v2
      };

      setAfter && setAfter(v, buf)
    }
  })
}

export function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
}
export function isValue(v:any) {
  return _.isString(v) || _.isBoolean(v) || _.isNumber(v)
}

/**
 * 获取最终样式
 * @param {节点} e
 * @param {样式属性} attr
 */
export function getEndStyle(e:HTMLElement, attr:string) {
  if (typeof window.getComputedStyle !== "undefined") {
    return window.getComputedStyle(e)[attr]
  } else {
    return e["currentStyle"][attr]
  }
}

function isPos(node:HTMLElement) {
  return getEndStyle(node, "position") === "relative" ||
        getEndStyle(node, "position") === "absolute" ||
        getEndStyle(node, "position") === "fxied"
}
function getScrollTop() {
  let scrollPos
  if (window.pageYOffset) {
    scrollPos = window.pageYOffset
  } else if (document.compatMode && document.compatMode !== "BackCompat") { scrollPos = document.documentElement.scrollTop } else if (document.body) { scrollPos = document.body.scrollTop }
  return scrollPos
}
function getScrollLeft() {
  let scrollPos
  if (window.pageXOffset) {
    scrollPos = window.pageXOffset
  } else if (document.compatMode && document.compatMode !== "BackCompat") { scrollPos = document.documentElement.scrollLeft } else if (document.body) { scrollPos = document.body.scrollLeft }
  return scrollPos
}
export function getOffsetTop(e:HTMLElement) {
  if (e.getBoundingClientRect) {
    return e.getBoundingClientRect().top
  }
  let node = e
  let offsetTop = node.offsetTop
  node = node.parentNode as HTMLElement
  while (node && !(node.nodeType === 1)) {
    if (isPos(node)) {
      offsetTop += node.offsetTop
    }
    node = node.parentNode as HTMLElement
  }
  return offsetTop - getScrollTop()
}
export function getOffsetLeft(e:HTMLElement) {
  if (e.getBoundingClientRect) {
    return e.getBoundingClientRect().left
  }
  let node = e
  let offsetLeft = node.offsetLeft
  node = node.parentNode as HTMLElement
  while (node && !(node.nodeType === 1)) {
    if (isPos(node)) {
      offsetLeft += node.offsetLeft
    }
    node = node.parentNode as HTMLElement
  }
  return offsetLeft - getScrollLeft()
}
export enum ENUM_DRAW_LINE_MODE {
    // eslint-disable-next-line no-unused-vars
    DEFAULT =0,
    // eslint-disable-next-line no-unused-vars
    LINE_SAVE = 1
}
// export var ENUM_DRAW_LINE_MODE = {
//     DEFAULT:0, //兼容老版本
//     LINE_SAVE:1 // 新的画线模式 每一根线段保留一个画笔
// }
export default {

  proxyCall,
  merge: _.merge,
  isString: _.isString,
  isNumber: _.isNumber,
  isBool: _.isBoolean,
  isValue,
  isFunction: _.isFunction,
  isObj: _.isObject,
  isUndefined: _.isUndefined,
  isNull: _.isNull,
  isNil: _.isNil,
  isArray: _.isArray,
  isMobile,
  getEndStyle,
  getOffsetTop,
  getOffsetLeft,
  ENUM_DRAW_LINE_MODE
}
