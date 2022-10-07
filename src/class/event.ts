/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件是一个事件管理的类 提供添加事件 移除事件 分发事件
 * 日期:2022年10月07日
 */
import { Main } from "../core/main"
import { isMobile } from "./../untils/untils"
import Base from "./base"

export class MessageManager extends Base {
  eventBuffer:any
  main:Main
  touch:Event|null
  isEle:boolean
  mousedown:((e:Event)=>void)
  mousemove:((e:Event)=>void)
  mouseup:((e:Event)=>void)
  constructor(main:Main) {
    super("messageManager")
    this.main = main
    this.mousedown = function(e:any) {
      if (this.main.readOnly) {
        return
      }
      e.preventDefault()
      this.isEle = true
      if (isMobile()) {
        this.touch = e.changedTouches[0]
        this.main.pointStart({
          clientX: this.touch.clientX,
          clientY: this.touch.clientY
        })
      } else {
        this.main.pointStart({
          clientX: e.clientX,
          clientY: e.clientY
        })
      }
    }.bind(this)
    this.mousemove = function(e:any) {
      if (this.isEle === true) {
        e.preventDefault()

        if (isMobile()) {
          this.touch = e.changedTouches[0]
          this.main.pointMove({
            clientX: this.touch.clientX,
            clientY: this.touch.clientY
          })
        } else {
          this.main.pointMove({
            clientX: e.clientX,
            clientY: e.clientY
          })
        }
      }
    }.bind(this)
    this.mouseup = function(e:any) {
      if (this.isEle === true) {
        this.isEle = false
        e.preventDefault()
        if (isMobile()) {
          this.touch = e.changedTouches[0]
          this.main.pointEnd({
            clientX: this.touch.clientX,
            clientY: this.touch.clientY
          })
        } else {
          this.main.pointEnd({
            clientX: e.clientX,
            clientY: e.clientY
          })
        }
      }
    }.bind(this)
  }
  on(name:string, call:any) {
    if (!this.eventBuffer[name]) {
      this.eventBuffer[name] = []
    }
    this.eventBuffer[name].push(call)
  }
  off(name:string, call:any) {
    if (!this.eventBuffer[name] || !this.eventBuffer[name].length) {
      return
    }
    const index = this.eventBuffer[name].indexOf(call)
    if (index !== -1) {
      this.eventBuffer[name].splice(index, 1)
    }
  }
  once(name:string, call:any) {
    call.isOnce = true
    this.on(name, call)
  }
  sendEvent(name:string) {
    const arr = this.eventBuffer[name]
    let i, item
    const removeArr = [] as any[]
    for (i = 0; i < arr.length; i++) {
      item = arr[i]
      if (arr[i].isOnce) {
        removeArr.push(item)
      } else {
        item && item(this.main, Array.prototype.slice.call(arguments, 1))
      }
    }
    for (i = 0; i < removeArr.length; i++) {
      item = removeArr[i]
      this.off(name, item)
      item && item(this.main, Array.prototype.slice.call(arguments, 1))
    }
  }
  bindEvent(ele:HTMLElement) {
    ele.style.cssText = "touch-action: pan-y;"
    if (isMobile()) {
      ele.addEventListener("touchstart", this.mousedown)
      document.addEventListener("touchmove", this.mousemove)
      document.addEventListener("touchend", this.mouseup)
    } else {
      ele.addEventListener("mousedown", this.mousedown)
      document.addEventListener("mousemove", this.mousemove)
      document.addEventListener("mouseup", this.mouseup)
    }
  }
  unbindEvent(ele:HTMLElement) {
    if (isMobile()) {
      ele.removeEventListener("touchstart", this.mousedown)
      document.removeEventListener("touchmove", this.mousemove)
      document.removeEventListener("touchend", this.mouseup)
    } else {
      ele.removeEventListener("mousedown", this.mousedown)
      document.removeEventListener("mousemove", this.mousemove)
      document.removeEventListener("mouseup", this.mouseup)
    }
  }
}
export default MessageManager
