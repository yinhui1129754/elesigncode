/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件是一个事件管理的类 提供添加事件 移除事件 分发事件
 * 日期:2020年08月04日
 */
import { createObject, merge, isMobile } from "./../untils/untils"

/**
 * 创建一个事件类型的构造函数
 * @param {中心对象} main 
 */
var obj = createObject("event", function (main) {
    this.eventBuffer = {} // 事件缓存
    this.main = main;
    this.touch = null;
    this.isEle = false;
    this.mousedown = (function (e) {
        if(this.main.readOnly){
            return
        }
        e.preventDefault();
        this.isEle = true;
        if (isMobile()) {
            this.touch = e.changedTouches[0];
            this.main.pointStart({
                clientX: this.touch.clientX,
                clientY: this.touch.clientY,
            })
        } else {
            this.main.pointStart({
                clientX: e.clientX,
                clientY: e.clientY,
            })
        }
    }).bind(this);
    this.mousemove = (function (e) {
        if (this.isEle === true) {
            e.preventDefault();

            if (isMobile()) {
                this.touch = e.changedTouches[0];
                this.main.pointMove({
                    clientX: this.touch.clientX,
                    clientY: this.touch.clientY,
                })
            } else {
                this.main.pointMove({
                    clientX: e.clientX,
                    clientY: e.clientY,
                })
            }
        }
    }).bind(this);
    this.mouseup = (function (e) {
        if (this.isEle === true) {
            this.isEle = false;
            e.preventDefault();
            if (isMobile()) {
                this.touch = e.changedTouches[0];
                this.main.pointEnd({
                    clientX: this.touch.clientX,
                    clientY: this.touch.clientY,
                })
            } else {
                this.main.pointEnd({
                    clientX: e.clientX,
                    clientY: e.clientY,
                })
            }
        }

    }).bind(this);
});
merge(obj.prototype, {
    on(name, call) {
        if (!this.eventBuffer[name]) {
            this.eventBuffer[name] = [];
        }
        this.eventBuffer[name].push(call)
    },
    off(name, call) {
        if (!this.eventBuffer[name] || !this.eventBuffer[name].length) {
            return
        }
        var index = this.eventBuffer[name].indexOf(call);
        if (index !== -1) {
            this.eventBuffer[name].splice(index, 1)
        }
    },
    once(name, call) {
        call.isOnce = true;
        this.on(name, call)
    },
    sendEvent(name) {
        var arr = this.eventBuffer[name]
        var i, item
        var removeArr = [];
        for (i = 0; i < arr.length; i++) {
            item = arr[i]
            if (arr[i].isOnce) {
                removeArr.push(item);
            } else {
                item && item(this.main, Array.prototype.slice.call(arguments, 1))
            }
        }
        for (i = 0; i < removeArr.length; i++) {
            item = removeArr[i];
            this.off(name, item)
            item && item(this.main, Array.prototype.slice.call(arguments, 1))
        }
    },
    bindEvent(ele) {
        ele.style.cssText = "touch-action: pan-y;"
        if (isMobile()) {
            ele.addEventListener("touchstart", this.mousedown);
            document.addEventListener("touchmove", this.mousemove);
            document.addEventListener("touchend", this.mouseup);
        } else {
            ele.addEventListener("mousedown", this.mousedown);
            document.addEventListener("mousemove", this.mousemove);
            document.addEventListener("mouseup", this.mouseup);
        }
    },
    unbindEvent(ele) {
        if (isMobile()) {
            ele.removeEventListener("touchstart", this.mousedown);
            document.removeEventListener("touchmove", this.mousemove);
            document.removeEventListener("touchend", this.mouseup);
        } else {
            ele.removeEventListener("mousedown", this.mousedown);
            document.removeEventListener("mousemove", this.mousemove);
            document.removeEventListener("mouseup", this.mouseup);
        }
    }
})
export default obj;