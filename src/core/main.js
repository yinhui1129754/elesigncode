/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件是一个core核心对象类 用来聚合我们编写的各种对象管理 
 *      从而可以达到暴露给使用者使用的那种对象，可以看到该对象的方法
 *      其实是来调用其他的一个一个分类对象
 * 日期:2020年08月04日
 */


// 导入创建对象的方法和合并的方法
import { createObject, merge, getOffsetLeft, getOffsetTop, proxyCall } from "./../untils/untils"
// 导入默认配置项
import config from "./../untils/config"
// 绘制构造函数
import Draw from "./../class/draw"
// 数据构造函数
import Data from "./../class/data"
import EventEx from "./../class/event"
import Line from "./../class/line"
import Point from "./../class/point"
import ImageLoad from "./../class/image"
import penCall from "./../untils/penCall"
import penUrl from "./../untils/penUrl"

// 创建一个入口对象中心对象
var obj = createObject("main", function (option) {
    this.option = merge({}, config, option);
    this.cvs = document.createElement("canvas");
    this.draw = new Draw(this.cvs, this);
    this.data = new Data(this);
    this.image = new ImageLoad(this);
    this.redoData = new Data(this);
    this.event = new EventEx(this);
    this.readOnly = false; // 是否是只读
    this.dropData = {
        start: false,
        startX: 0,
        startY: 0,
        nowLine: null
    };
    this.penList = {}
    this.pen = this.option.pen //绘图的画笔
});
merge(obj.prototype, {
    setReadOnly(type){
        this.readOnly = type
    },
    isEmpty(){
        return !!!this.data.getSize()
    },
    init() {
        var self = this
        var loadIndex = 0;
        if (this.option.ele) {
            this.option.ele.appendChild(this.cvs);
            this.resize();
        }
        this.draw.lock();
        this.draw.draw()
        this.event.bindEvent(this.cvs);
        this.addPen("default", "", penCall.default.penCall, function () {
            loadIndex++
            if (loadIndex === 2) {
                self.draw.unlock();
            }
        });
        this.addPen("writing", penUrl.writing, penCall.writing.penCall, function () {
            loadIndex++
            if (loadIndex === 2) {
                self.draw.unlock();
            }
        }, penCall.writing.start, penCall.writing.move, penCall.writing.end);
    },
    moutedEle(e) {
        this.option.ele = e;
        if (this.option.ele) {
            this.option.ele.appendChild(this.cvs);
            this.resize();
        }
        this.draw.draw()
    },
    resize() {
        var w = this.option.ele.clientWidth;
        var h = this.option.ele.clientHeight;
        this.draw.resize(w, h);
        this.draw.draw();
    },
    resizeWithNumber(w, h) {
        this.draw.resize(w, h);
        this.draw.draw();
    },
    setColor(v) {
        this.option.color = v;
    },
    setLineWidth(v) {
        this.option.lineWidth = v;
    },
    setBgColor(v) {
        this.option.bgColor = v;
        this.draw.draw();
    },
    clear(){
        this.data.clear();
        this.redoData.clear();
        this.draw.draw();
    },
    destory() {
        this.data.clear();
        this.redoData.clear();
        this.event.unbindEvent(this.cvs);
        if (this.cvs.parentNode) {
            this.cvs.parentNode.removeChild(this.cvs);
        }
        for (var i in this) {
            delete this[i];
        }
        proxyCall(this, "destoryKey", null, null, 1, () => { return true; })
    },
   
    undo() {
        if(this.readOnly){
            return
        }
        var b = this.data.popData();
        if (b) {
            this.redoData.pushData(b);
            this.draw.draw();
        }

    },
    redo() {
        if(this.readOnly){
            return
        }
        var b = this.redoData.popData();
        if (b) {
            this.data.pushData(b);
            this.draw.draw();
        }
    },
    toJson() {
        return JSON.stringify({
            data: this.data.toJson(),
            color: this.option.color,
            lineWidth: this.option.lineWidth,
            bgColor: this.option.bgColor,
            pen:this.option.pen,
            writingMaxLine:this.option.writingMaxLine,
            writingMinLine:this.option.writingMinLine
        });
    },
    jsonTo(json) {
        this.data.jsonTo(json.data);
        this.option.color = json.color;
        this.option.lineWidth = json.lineWidth;
        this.option.bgColor = json.bgColor;
        this.option.pen = json.pen;
        this.option.writingMaxLine = json.writingMaxLine;
        this.option.writingMinLine = json.writingMinLine;
        this.draw.draw();
    },
    pointStart(event) {
        if (!this.dropData.start) {
            var eleX = event.clientX - getOffsetLeft(this.cvs);
            var eleY = event.clientY - getOffsetTop(this.cvs);
            this.dropData.start = true;
            if (this.penList[this.pen].start) {
                this.penList[this.pen].start(this, this.penList[this.pen], {
                    x: eleX,
                    y: eleY
                })
            } else {
                this.dropData.startX = eleX;
                this.dropData.startY = eleY;
                this.dropData.nowLine = new Line();
                this.dropData.nowLine.setLineWidth(this.option.lineWidth);
                this.dropData.nowLine.setColor(this.option.color);
                this.data.pushData(this.dropData.nowLine);
                this.draw.draw();
            }
        }
    },
    pointMove(event) {
        if (this.dropData.start) {
            var eleX = event.clientX - getOffsetLeft(this.cvs);
            var eleY = event.clientY - getOffsetTop(this.cvs);
            if (this.penList[this.pen].move) {
                this.penList[this.pen].move(this, this.penList[this.pen], {
                    x: eleX,
                    y: eleY
                })
            } else {
                this.dropData.nowLine.pushPoint(new Point(eleX, eleY));
                this.draw.draw();
            }
        }

    },
    pointEnd(event) {
        if (this.dropData.start) {
            this.dropData.start = false;
            var eleX = event.clientX - getOffsetLeft(this.cvs);
            var eleY = event.clientY - getOffsetTop(this.cvs);
            if (this.penList[this.pen].end) {
                this.penList[this.pen].end(this, this.penList[this.pen], {
                    x: eleX,
                    y: eleY
                })
            } else {
                this.draw.draw();
            }
        }
    },
    drawEle() {
        this.draw.draw();
    },
    toPng() {
        this.draw.draw();
        return this.cvs.toDataURL("image/png");
    },
    toJpeg() {
        var b = false;
        var base64Str = "";
        if (this.option.bgColor === -1) {
            this.option.bgColor = "white";
            b = true;
        }
        this.draw.draw();
        base64Str = this.cvs.toDataURL("image/jpeg");
        if (b) {
            this.option.bgColor = -1;
            this.draw.draw();
        }
        return base64Str
    },
    /**
     * 提取颜色的R、G、B值
     * @param {String} color #abc | #abcdef | rgb(255,255,255) | rgba(255,255,255,1)
     * @returns [R,G,B] | [R,G,B,A]
     */
     getColorRGBs(color) {
        // 16进制颜色值的正则
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 把颜色值变成小写
        var color = color.toLowerCase();
        if (reg.test(color)) {
            // 如果只有三位的值，需变成六位，如：#fff => #ffffff
            if (color.length === 4) {
                var colorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
                }
                color = colorNew;
            }
            // 处理六位的颜色值，转为RGB
            var colorArr = [];
            for (var i = 1; i < 7; i += 2) {
                colorArr.push(parseInt("0x" + color.slice(i, i + 2)));
            }
            return colorArr
        } else {
            if(color.includes("rgb")){
                try {
                    // 如果是rgb颜色，返回数组长度为3，如：[255,255,255]；如果是rgba颜色，返回数组长度为4，如：[255,255,255,1]
                    return color.split("(")[1].split(")")[0].split(",")
                } catch (error) {
                    return [0,0,0]
                }
            }else{
                return [0,0,0]
            }
        }
    },
    setPen(name) {
        this.pen = name;
        this.draw.draw();
    },
    addPen(name, url, penCall, loadCall, start, move, end) {
        var self = this
        this.penList[name] = {
            url: url,
            penCall: penCall,
            img: null,
            isSuccess: 0,
            start: start,
            move: move,
            end: end,
        }
        this.image.load(url, function (img, urlCall, isSuccess) {
            if (url) {
                var colorTransformCvs = document.createElement("canvas");
                colorTransformCvs.width = img.width;
                colorTransformCvs.height = img.height;
                var colorTransformCtx = colorTransformCvs.getContext("2d");
                colorTransformCtx.drawImage(img, 0, 0);
                var imageData = colorTransformCtx.getImageData(0, 0, img.width, img.height);
                var data = imageData.data;
                var colorArr = self.getColorRGBs(self.option.color); // 画笔颜色RGB值的数组
                for (var i = 0; i < data.length; i += 4) {
                    // 非透明的像素点，颜色转为画笔颜色
                    if(data[i + 3] != 0){
                        data[i] = colorArr[0];
                        data[i + 1] = colorArr[1];
                        data[i + 2] = colorArr[2];
                    }
                }
                // 清除画布，并将处理后的像素点写入画布
                colorTransformCtx.clearRect(0, 0, img.width, img.height);
                colorTransformCtx.putImageData(imageData, 0, 0);
                var newImg = new Image();
                var src = colorTransformCvs.toDataURL("image/png");
                newImg.crossOrigin = "Anonymous";
                newImg.onload = function () {
                    self.penList[name].img = newImg
                    self.penList[name].isSuccess = isSuccess
                    loadCall && loadCall(self)
                    self.draw.draw()
                }
                newImg.src = src;
            }else{
                self.penList[name].img = img
                self.penList[name].isSuccess = isSuccess
                loadCall && loadCall(self)
                self.draw.draw()
            }
        })
    }
})
obj.STRUCT = {
    Draw:Draw,
    Line:Line,
    Data:Data,
    Point:Point,
    ImageLoad:ImageLoad,
}
if (window) {
    window.EleSign = obj;
}

export default obj;