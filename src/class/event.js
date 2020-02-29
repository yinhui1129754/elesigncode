import {createObject,merge,isMobile} from "./../untils/untils"
/**
 * 创建一个事件类型的构造函数
 * @param {中心对象} main 
 */
var obj = createObject("event",function(main){
    this.eventBuffer = {} // 事件缓存
    this.main = main;
    this.touch=null;
    this.mousedown = (function(e){
        e.preventDefault();
        if(isMobile()){
            this.touch = e.changedTouches[0];
            this.main.pointStart({
                clientX:this.touch.clientX,
                clientY:this.touch.clientY,
            })
        }else{
            this.main.pointStart({
                clientX:e.clientX,
                clientY:e.clientY,
            })
        }
    }).bind(this);
    this.mousemove = (function(e){
        e.preventDefault();
        if(isMobile()){
            this.touch = e.changedTouches[0];
            this.main.pointMove({
                clientX:this.touch.clientX,
                clientY:this.touch.clientY,
            })
        }else{
            this.main.pointMove({
                clientX:e.clientX,
                clientY:e.clientY,
            })
        }
    }).bind(this);
    this.mouseup = (function(e){
        e.preventDefault();
        if(isMobile()){
            this.touch = e.changedTouches[0];
            this.main.pointEnd({
                clientX:this.touch.clientX,
                clientY:this.touch.clientY,
            })
        }else{
            this.main.pointEnd({
                clientX:e.clientX,
                clientY:e.clientY,
            })
        }
    }).bind(this);
});
merge(obj.prototype,{
    bindEvent(ele){
        ele.style.cssText = "touch-action: pan-y;"
        if(isMobile()){
            ele.addEventListener("touchstart",this.mousedown);
            document.addEventListener("touchmove",this.mousemove);
            document.addEventListener("touchend",this.mouseup);
        }else{
            ele.addEventListener("mousedown",this.mousedown);
            document.addEventListener("mousemove",this.mousemove);
            document.addEventListener("mouseup",this.mouseup);
        }
    },
    unbindEvent(ele){
        if(isMobile()){
            ele.removeEventListener("touchstart",this.mousedown);
            document.removeEventListener("touchmove",this.mousemove);
            document.removeEventListener("touchend",this.mouseup);
        }else{
            ele.removeEventListener("mousedown",this.mousedown);
            document.removeEventListener("mousemove",this.mousemove);
            document.removeEventListener("mouseup",this.mouseup);
        }
    }
})
export default obj;