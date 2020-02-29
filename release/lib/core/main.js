// 导入创建对象的方法和合并的方法
import {createObject,merge, getOffsetLeft,getOffsetTop,proxyCall} from "./../untils/untils"
// 导入默认配置项
import config from "./../untils/config"
// 绘制构造函数
import Draw from "./../class/draw"
// 数据构造函数
import Data from "./../class/data"
import EventEx from "./../class/event"
import Line from "./../class/line"
import Point from "./../class/point"
// 创建一个入口对象中心对象
var obj = createObject("main",function(option){
    this.option = merge({},config,option);
    this.cvs = document.createElement("canvas");
    this.draw = new Draw(this.cvs,this);
    this.data = new Data(this);
   
    this.redoData = new Data(this);
    this.event = new EventEx(this);
    this.dropData = {
        start:false,
        startX:0,
        startY:0,
        nowLine:null
    };
});
merge(obj.prototype,{
    init(){
        if(this.option.ele){
            this.option.ele.appendChild(this.cvs);
            this.resize();
        }
        this.draw.draw()
        this.event.bindEvent(this.cvs);
    },
    moutedEle(e){
        this.option.ele = e;
        if(this.option.ele){
            this.option.ele.appendChild(this.cvs);
            this.resize();
        }
        this.draw.draw()
    },
    resize(){
        if(!this.option.ele){
            return;
        }
        var w = this.option.ele.clientWidth;
        var h = this.option.ele.clientHeight;
        this.draw.resize(w,h);
        this.draw.draw();
    },
    resizeWithNumber(w,h){
        this.draw.resize(w,h);
        this.draw.draw();
    },
    destory(){
        this.data.clear();
        this.redoData.clear();
        this.event.unbindEvent(this.cvs);
        if(this.cvs.parentNode){
            this.cvs.parentNode.removeChild(this.cvs);
        }
        for(var i in this){
            delete this[i];
        }
        proxyCall(this,"destoryKey",null,null,1,()=>{return true;})
    },
    undo(){
        var b = this.data.popData();
        if(b){
            this.redoData.pushData(b);
            this.draw.draw();
        }
      
    },
    redo(){
        var b = this.redoData.popData();
        if(b){
            this.data.pushData(b);
            this.draw.draw();
        }
    },
    toJson(){
        return JSON.stringify({
            data:this.data.toJson(),
            color:this.option.color,
            lineWidth:this.option.lineWidth,
            bgColor:this.option.bgColor,
        });
    },
    jsonTo(json){
        this.data.jsonTo(json.data);
        this.option.color = json.color;
        this.option.lineWidth = json.lineWidth;
        this.option.bgColor = json.bgColor;
        this.draw.draw();
    },
    pointStart(event){
        var eleX = event.clientX-getOffsetLeft(this.cvs);
        var eleY = event.clientY-getOffsetTop(this.cvs);
        if(!this.dropData.start){
            this.dropData.start = true;
            this.dropData.startX = eleX;
            this.dropData.startY = eleY;
            this.dropData.nowLine = new Line();
            this.dropData.nowLine.setLineWidth(this.option.lineWidth);
            this.dropData.nowLine.setColor(this.option.color);
            this.data.pushData(this.dropData.nowLine);
            this.draw.draw();
        }
      
    },
    setColor(color){
        this.option.color=color;
    },
    setLineWidth(lineWidth){
        this.option.lineWidth=lineWidth;
    },
    setBgColor(bgColor){
        this.option.bgColor=bgColor;
        this.draw.draw();
    },
    drawEle(){
        this.draw.draw();
    },
    pointMove(event){
       
        if(this.dropData.start){
            var eleX = event.clientX-getOffsetLeft(this.cvs);
            var eleY = event.clientY-getOffsetTop(this.cvs);
            this.dropData.nowLine.pushPoint(new Point(eleX,eleY));
            this.draw.draw();
        }
        
       
    },
    pointEnd(event){
        var eleX = event.clientX-getOffsetLeft(this.cvs);
        var eleY = event.clientY-getOffsetTop(this.cvs);
        if(this.dropData.start){
          
            this.dropData.start = false;
            this.draw.draw();
        }
    },
    toPng(){
        this.draw.draw();
        return this.cvs.toDataURL("image/png");
    },
    toJpeg(){
        var b = false;
        var base64Str = "";
        if(this.option.bgColor === -1){
            this.option.bgColor = "white";
            b = true;
        }
        this.draw.draw();
        base64Str  =this.cvs.toDataURL("image/jpeg");
        if(b){
            this.option.bgColor = -1;
            this.draw.draw();
        }
        return base64Str
    }
})
if(window){
    window["EleSign"] = obj;
}
export default obj;